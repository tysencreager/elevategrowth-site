interface Env {
  BREVO_API_KEY: string;
}

interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  referral?: string;
  referralDetail?: string;
  message: string;
}

const REFERRAL_LABELS: Record<string, string> = {
  "google-search": "Google Search",
  "social-media": "Social Media",
  "referral": "Referral / Word of Mouth",
  "saw-your-work": "Saw a Website You Built",
  "event": "Event or Networking",
  "other": "Other",
};

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

  try {
    const body = (await context.request.json()) as ContactRequest;
    const { name, email, phone, company, service, referral, referralDetail, message } = body;
    const baseReferralLabel = referral ? REFERRAL_LABELS[referral] || referral : "";
    const referralLabel =
      baseReferralLabel && referralDetail?.trim()
        ? `${baseReferralLabel} (${referralDetail.trim()})`
        : baseReferralLabel;

    if (!email || !name || !message) {
      return new Response(JSON.stringify({ error: "Name, email, and message are required" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const apiKey = context.env.BREVO_API_KEY;
    if (!apiKey) {
      console.error("BREVO_API_KEY not configured");
      return new Response(JSON.stringify({ error: "Server configuration error" }), {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Extract first name for personalization
    const firstName = name.split(" ")[0];
    const safe = {
      name: escapeHtml(name),
      firstName: escapeHtml(firstName),
      email: escapeHtml(email),
      phone: phone ? escapeHtml(phone) : "",
      company: company ? escapeHtml(company) : "",
      service: service ? escapeHtml(service) : "",
      referral: referralLabel ? escapeHtml(referralLabel) : "",
      message: escapeHtml(message),
    };

    // Step 1: Add contact to Brevo list
    const attributes: Record<string, string> = {
      FIRSTNAME: firstName,
      LASTNAME: name.split(" ").slice(1).join(" ") || "",
      PHONE: phone || "",
      COMPANY: company || "",
      SERVICE_INTEREST: service || "",
      SOURCE: "contact_form",
    };
    if (referralLabel) {
      attributes.HOW_HEARD = referralLabel;
    }

    const createContact = (attrs: Record<string, string>) =>
      fetch("https://api.brevo.com/v3/contacts", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "api-key": apiKey,
        },
        body: JSON.stringify({
          email: email,
          listIds: [4], // Contact Form Leads list
          updateEnabled: true,
          attributes: attrs,
        }),
      });

    let contactResponse = await createContact(attributes);

    // Brevo rejects the whole request if an attribute (e.g. HOW_HEARD) hasn't
    // been created in the account yet; retry without it so the lead is never lost.
    if (!contactResponse.ok && contactResponse.status !== 409 && attributes.HOW_HEARD) {
      const errorData = await contactResponse.text();
      console.error("Brevo contact error (retrying without HOW_HEARD):", errorData);
      const { HOW_HEARD, ...baseAttributes } = attributes;
      contactResponse = await createContact(baseAttributes);
    }

    if (!contactResponse.ok && contactResponse.status !== 409) {
      const errorData = await contactResponse.text();
      console.error("Brevo contact error:", errorData);
    }

    // Step 2: Send auto-reply to the person who submitted the form
    const autoReplyResponse = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        sender: {
          name: "Tysen Creager",
          email: "tysen@elevategrowth.solutions",
        },
        replyTo: {
          name: "Tysen Creager",
          email: "tysen@elevategrowth.solutions",
        },
        to: [{ email: email, name: name }],
        subject: "Thanks for reaching out!",
        textContent: `Hi ${firstName},

Thanks for getting in touch with Elevate Growth Solutions. We're excited to hear from you.

I'll personally review your message and get back to you within two business days. In the meantime, if you'd like to schedule a quick call to discuss your marketing goals, feel free to grab a time here: https://calendly.com/tysencreager/30minutes

Warmly,
Tysen Creager
Elevate Growth Solutions`,
        htmlContent: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: Georgia, 'Times New Roman', serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <p>Hi ${safe.firstName},</p>

  <p>Thanks for getting in touch with Elevate Growth Solutions. We're excited to hear from you.</p>

  <p>I'll personally review your message and get back to you within two business days. In the meantime, if you'd like to schedule a quick call to discuss your marketing goals, feel free to grab a time here: <a href="https://calendly.com/tysencreager/30minutes" style="color: #0066cc;">Book a Call</a></p>

  <p>Warmly,<br>
  <strong>Tysen Creager</strong><br>
  Elevate Growth Solutions</p>
</body>
</html>
        `,
      }),
    });

    if (!autoReplyResponse.ok) {
      const errorData = await autoReplyResponse.text();
      console.error("Brevo auto-reply error:", errorData);
    }

    // Step 3: Send notification to you about the new contact
    const notificationResponse = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        sender: {
          name: "Elevate Growth Website",
          email: "tysen@elevategrowth.solutions",
        },
        // Hitting "Reply" on the notification should go to the lead, not back
        // to the site's own address.
        replyTo: { email: email, name: name },
        to: [{ email: "tysen@elevategrowth.solutions" }],
        subject: `New Contact Form Submission from ${name}`,
        textContent: `New contact form submission

Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}\n` : ""}${company ? `Company: ${company}\n` : ""}${service ? `Service: ${service}\n` : ""}${referralLabel ? `How they heard about us: ${referralLabel}\n` : ""}
Message:
${message}`,
        htmlContent: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <h2 style="color: #333; border-bottom: 2px solid #0066cc; padding-bottom: 10px;">New Contact Form Submission</h2>

  <table style="width: 100%; border-collapse: collapse;">
    <tr>
      <td style="padding: 8px 0; font-weight: bold; width: 120px;">Name:</td>
      <td style="padding: 8px 0;">${safe.name}</td>
    </tr>
    <tr>
      <td style="padding: 8px 0; font-weight: bold;">Email:</td>
      <td style="padding: 8px 0;"><a href="mailto:${safe.email}">${safe.email}</a></td>
    </tr>
    ${phone ? `
    <tr>
      <td style="padding: 8px 0; font-weight: bold;">Phone:</td>
      <td style="padding: 8px 0;"><a href="tel:${safe.phone}">${safe.phone}</a></td>
    </tr>` : ""}
    ${company ? `
    <tr>
      <td style="padding: 8px 0; font-weight: bold;">Company:</td>
      <td style="padding: 8px 0;">${safe.company}</td>
    </tr>` : ""}
    ${service ? `
    <tr>
      <td style="padding: 8px 0; font-weight: bold;">Service:</td>
      <td style="padding: 8px 0;">${safe.service}</td>
    </tr>` : ""}
    ${referralLabel ? `
    <tr>
      <td style="padding: 8px 0; font-weight: bold;">Heard About Us:</td>
      <td style="padding: 8px 0;">${safe.referral}</td>
    </tr>` : ""}
  </table>

  <h3 style="margin-top: 20px; color: #333;">Message:</h3>
  <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${safe.message}</div>

  <p style="margin-top: 20px; color: #666; font-size: 14px;">
    <a href="mailto:${safe.email}?subject=Re: Your inquiry to Elevate Growth Solutions" style="color: #0066cc;">Reply to ${safe.firstName}</a>
  </p>
</body>
</html>
        `,
      }),
    });

    if (!notificationResponse.ok) {
      const errorData = await notificationResponse.text();
      console.error("Brevo notification error:", errorData);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error) {
    console.error("Contact error:", error);
    return new Response(JSON.stringify({ error: "Failed to submit contact form" }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
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
