interface Env {
  BREVO_API_KEY: string;
  MAILERLITE_API_KEY?: string;
}

interface WiseWomenLeadRequest {
  firstName: string;
  lastName: string;
  email: string;
  businessName: string;
  currentWebsite?: string;
  interest?: string;
  notes?: string;
  // Honeypot: hidden field real visitors never fill in.
  fax?: string;
}

// Conference-funnel group in MailerLite so the follow-up automation can
// trigger off group membership. Resolved by NAME at runtime (created if
// missing) rather than hardcoded by ID, so the function works with
// whichever MailerLite account MAILERLITE_API_KEY belongs to.
const MAILERLITE_GROUP_NAME = "Wise Women Houston 2026";
// Custom subscriber fields the form writes; ensured to exist before the
// first subscribe (MailerLite rejects unknown field keys).
const MAILERLITE_CUSTOM_FIELDS = ["current_website", "interest", "notes", "subscriber_source"];

const ML_BASE = "https://connect.mailerlite.com/api";

const mlHeaders = (apiKey: string) => ({
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: `Bearer ${apiKey}`,
});

// Group + field setup runs once per isolate; concurrent requests share the
// same in-flight promise.
let mlSetup: Promise<string | null> | null = null;

async function ensureMailerLiteSetup(apiKey: string): Promise<string | null> {
  // Find (or create) the conference group.
  let groupId: string | null = null;
  const groupSearch = await fetch(
    `${ML_BASE}/groups?filter[name]=${encodeURIComponent(MAILERLITE_GROUP_NAME)}`,
    { headers: mlHeaders(apiKey) },
  );
  if (groupSearch.ok) {
    const { data } = (await groupSearch.json()) as { data: Array<{ id: string; name: string }> };
    groupId = data.find((g) => g.name === MAILERLITE_GROUP_NAME)?.id ?? null;
  }
  if (!groupId) {
    const created = await fetch(`${ML_BASE}/groups`, {
      method: "POST",
      headers: mlHeaders(apiKey),
      body: JSON.stringify({ name: MAILERLITE_GROUP_NAME }),
    });
    if (created.ok) {
      groupId = ((await created.json()) as { data: { id: string } }).data.id;
    } else {
      console.error("MailerLite group create error:", await created.text());
    }
  }

  // Ensure the custom fields exist ("Current Website" -> key current_website
  // etc.). Field keys are derived from the name by MailerLite.
  const fieldsResponse = await fetch(`${ML_BASE}/fields?limit=200`, { headers: mlHeaders(apiKey) });
  if (fieldsResponse.ok) {
    const { data } = (await fieldsResponse.json()) as { data: Array<{ key: string }> };
    const existing = new Set(data.map((f) => f.key));
    for (const key of MAILERLITE_CUSTOM_FIELDS) {
      if (!existing.has(key)) {
        const name = key
          .split("_")
          .map((w) => w[0].toUpperCase() + w.slice(1))
          .join(" ");
        const created = await fetch(`${ML_BASE}/fields`, {
          method: "POST",
          headers: mlHeaders(apiKey),
          body: JSON.stringify({ name, type: "text" }),
        });
        if (!created.ok) {
          console.error(`MailerLite field create error (${key}):`, await created.text());
        }
      }
    }
  }

  return groupId;
}

// User-submitted values go into HTML emails; unescaped markup (or injected
// links) both breaks the layout and raises the spam score.
const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
  const jsonHeaders = { "Content-Type": "application/json", ...corsHeaders };

  try {
    const body = (await context.request.json()) as WiseWomenLeadRequest;
    const { firstName, lastName, email, businessName, currentWebsite, interest, notes, fax } = body;

    // Bots fill every field; humans never see this one. Pretend success so
    // the bot moves on.
    if (fax) {
      return new Response(JSON.stringify({ success: true }), { status: 200, headers: jsonHeaders });
    }

    if (!firstName || !lastName || !email || !businessName) {
      return new Response(
        JSON.stringify({ error: "First name, last name, email, and business name are required" }),
        { status: 400, headers: jsonHeaders },
      );
    }

    // Step 1: Add the lead to the MailerLite group so follow-up automation
    // fires. Upsert semantics: an existing subscriber is updated and added
    // to the group rather than rejected.
    let mailerliteOk = false;
    const mailerliteKey = context.env.MAILERLITE_API_KEY;
    if (mailerliteKey) {
      try {
        mlSetup ??= ensureMailerLiteSetup(mailerliteKey);
        let groupId: string | null = null;
        try {
          groupId = await mlSetup;
        } catch (setupError) {
          mlSetup = null; // let the next request retry setup
          console.error("MailerLite setup failed:", setupError);
        }

        const subscribe = (fields: Record<string, string>) =>
          fetch(`${ML_BASE}/subscribers`, {
            method: "POST",
            headers: mlHeaders(mailerliteKey),
            body: JSON.stringify({
              email,
              fields,
              ...(groupId ? { groups: [groupId] } : {}),
            }),
          });

        let mlResponse = await subscribe({
          name: firstName,
          last_name: lastName,
          company: businessName,
          current_website: currentWebsite || "",
          interest: interest || "",
          notes: notes || "",
          subscriber_source: "wisewomen-landing-page",
        });

        // If the account rejects a custom field key, retry with only the
        // default fields so the lead is never lost; the Brevo notification
        // below carries the full submission either way.
        if (!mlResponse.ok && mlResponse.status === 422) {
          console.error("MailerLite subscriber 422 (retrying with default fields):", await mlResponse.text());
          mlResponse = await subscribe({
            name: firstName,
            last_name: lastName,
            company: businessName,
          });
        }

        mailerliteOk = mlResponse.ok;
        if (!mlResponse.ok) {
          console.error("MailerLite subscriber error:", await mlResponse.text());
        }
      } catch (mlError) {
        console.error("MailerLite request failed:", mlError);
      }
    } else {
      console.error("MAILERLITE_API_KEY not configured; lead only sent by email");
    }

    // Step 2: Email the full submission to Tysen via Brevo (already
    // configured for the site's other forms), so the lead is never lost
    // even if MailerLite is unreachable.
    let emailOk = false;
    const brevoKey = context.env.BREVO_API_KEY;
    if (brevoKey) {
      const fullName = `${firstName} ${lastName}`;
      const safe = {
        fullName: escapeHtml(fullName),
        firstName: escapeHtml(firstName),
        email: escapeHtml(email),
        businessName: escapeHtml(businessName),
        currentWebsite: currentWebsite ? escapeHtml(currentWebsite) : "",
        interest: interest ? escapeHtml(interest) : "",
        notes: notes ? escapeHtml(notes) : "",
      };

      try {
        const notificationResponse = await fetch("https://api.brevo.com/v3/smtp/email", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "api-key": brevoKey,
          },
          body: JSON.stringify({
            sender: {
              name: "Elevate Growth Website",
              email: "tysen@elevategrowth.solutions",
            },
            // Hitting "Reply" on the notification should go to the lead, not
            // back to the site's own address.
            replyTo: { email, name: fullName },
            to: [{ email: "tysen@elevategrowth.solutions" }],
            subject: `Wise Women lead: ${fullName} (${businessName})`,
            textContent: `New Wise Women Houston 2026 lead ($300 credit claim)

Name: ${fullName}
Email: ${email}
Business: ${businessName}
${currentWebsite ? `Current website: ${currentWebsite}\n` : ""}${interest ? `Interested in: ${interest}\n` : ""}${notes ? `\nNotes:\n${notes}\n` : ""}
${mailerliteOk ? "Added to the MailerLite group \"Wise Women Houston 2026\"." : "NOT added to MailerLite (check MAILERLITE_API_KEY in Cloudflare Pages) - this email is the only record."}`,
            htmlContent: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <h2 style="color: #266D82; border-bottom: 2px solid #4AC0D8; padding-bottom: 10px;">New Wise Women Lead ($300 Credit Claim)</h2>

  <table style="width: 100%; border-collapse: collapse;">
    <tr>
      <td style="padding: 8px 0; font-weight: bold; width: 140px;">Name:</td>
      <td style="padding: 8px 0;">${safe.fullName}</td>
    </tr>
    <tr>
      <td style="padding: 8px 0; font-weight: bold;">Email:</td>
      <td style="padding: 8px 0;"><a href="mailto:${safe.email}">${safe.email}</a></td>
    </tr>
    <tr>
      <td style="padding: 8px 0; font-weight: bold;">Business:</td>
      <td style="padding: 8px 0;">${safe.businessName}</td>
    </tr>
    ${safe.currentWebsite ? `
    <tr>
      <td style="padding: 8px 0; font-weight: bold;">Current website:</td>
      <td style="padding: 8px 0;">${safe.currentWebsite}</td>
    </tr>` : ""}
    ${safe.interest ? `
    <tr>
      <td style="padding: 8px 0; font-weight: bold;">Interested in:</td>
      <td style="padding: 8px 0;">${safe.interest}</td>
    </tr>` : ""}
  </table>

  ${safe.notes ? `
  <h3 style="margin-top: 20px; color: #333;">Notes:</h3>
  <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${safe.notes}</div>` : ""}

  <p style="margin-top: 20px; color: #666; font-size: 14px;">
    ${mailerliteOk
      ? 'Added to the MailerLite group "Wise Women Houston 2026".'
      : "<strong>NOT added to MailerLite</strong> (check MAILERLITE_API_KEY in Cloudflare Pages) &mdash; this email is the only record of this lead."}
  </p>

  <p style="margin-top: 20px; color: #666; font-size: 14px;">
    <a href="mailto:${safe.email}?subject=Your $300 Wise Women credit at Elevate Growth Solutions" style="color: #266D82;">Reply to ${safe.firstName}</a>
  </p>
</body>
</html>
        `,
          }),
        });
        emailOk = notificationResponse.ok;
        if (!notificationResponse.ok) {
          console.error("Brevo notification error:", await notificationResponse.text());
        }
      } catch (brevoError) {
        console.error("Brevo request failed:", brevoError);
      }
    } else {
      console.error("BREVO_API_KEY not configured");
    }

    // The lead is safe as long as at least one destination accepted it.
    if (mailerliteOk || emailOk) {
      return new Response(JSON.stringify({ success: true }), { status: 200, headers: jsonHeaders });
    }

    return new Response(JSON.stringify({ error: "Failed to submit" }), {
      status: 502,
      headers: jsonHeaders,
    });
  } catch (error) {
    console.error("Wise Women lead error:", error);
    return new Response(JSON.stringify({ error: "Failed to submit" }), {
      status: 500,
      headers: jsonHeaders,
    });
  }
};

export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
};
