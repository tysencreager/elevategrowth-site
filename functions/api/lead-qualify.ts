interface Env {
  BREVO_API_KEY: string;
}

interface LeadQualifyRequest {
  service: string;
  budget: string;
  name: string;
  email: string;
  phone?: string;
  message?: string;
}

const SERVICE_LABELS: Record<string, string> = {
  "website-design": "Website Design",
  seo: "SEO",
  "social-media": "Social Media",
  "paid-ads": "Paid Ads",
  "full-stack-marketing": "Full-Stack Marketing",
  "not-sure": "Not Sure",
};

const BUDGET_LABELS: Record<string, string> = {
  "500-1k": "$500 – $1k",
  "1k-3k": "$1k – $3k",
  "3k-5k": "$3k – $5k",
  "5k+": "$5k+",
};

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  try {
    const body = (await context.request.json()) as LeadQualifyRequest;
    const { service, budget, name, email, phone, message } = body;

    if (!email || !name) {
      return new Response(
        JSON.stringify({ error: "Name and email are required" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const apiKey = context.env.BREVO_API_KEY;
    if (!apiKey) {
      console.error("BREVO_API_KEY not configured");
      return new Response(
        JSON.stringify({ error: "Server configuration error" }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const firstName = name.split(" ")[0];
    const serviceLabel = SERVICE_LABELS[service] || service;
    const budgetLabel = BUDGET_LABELS[budget] || budget;

    // Step 1: Add/update contact in Brevo
    const contactResponse = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        email,
        listIds: [4], // Contact Form Leads list
        updateEnabled: true,
        attributes: {
          FIRSTNAME: firstName,
          LASTNAME: name.split(" ").slice(1).join(" ") || "",
          PHONE: phone || "",
          SERVICE_INTEREST: serviceLabel,
          BUDGET: budgetLabel,
          SOURCE: "multi_step_form",
        },
      }),
    });

    if (!contactResponse.ok && contactResponse.status !== 409) {
      const errorData = await contactResponse.text();
      console.error("Brevo contact error:", errorData);
    }

    // Step 2: Send auto-reply to the lead
    const autoReplyResponse = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        sender: {
          name: "Tysen Creager",
          email: "tysen@elevategrowth.solutions",
        },
        to: [{ email, name }],
        subject: "Thanks for reaching out — here's what happens next",
        htmlContent: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: Georgia, 'Times New Roman', serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <p>Hi ${firstName},</p>

  <p>Thanks for taking the time to tell us about your business and goals. We received your inquiry about <strong>${serviceLabel}</strong> and will put together a personalized plan for you.</p>

  <p>Expect to hear from us within 24 hours. If you'd like to jump straight to a conversation, feel free to book a time directly:</p>

  <p style="text-align: center; margin: 20px 0;">
    <a href="https://calendar.app.google/vDHVT1u28utXTzLt5" style="background-color: #266D82; color: white; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-family: Montserrat, Arial, sans-serif; font-weight: 500;">Book a Free Strategy Call</a>
  </p>

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

    // Step 3: Send notification to Tysen
    const notificationResponse = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        sender: {
          name: "Elevate Growth Website",
          email: "tysen@elevategrowth.solutions",
        },
        to: [{ email: "tysen@elevategrowth.solutions" }],
        subject: `New Qualified Lead: ${name} — ${serviceLabel} (${budgetLabel})`,
        htmlContent: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <h2 style="color: #266D82; border-bottom: 2px solid #266D82; padding-bottom: 10px;">New Qualified Lead from Multi-Step Form</h2>

  <table style="width: 100%; border-collapse: collapse;">
    <tr>
      <td style="padding: 8px 0; font-weight: bold; width: 140px;">Name:</td>
      <td style="padding: 8px 0;">${name}</td>
    </tr>
    <tr>
      <td style="padding: 8px 0; font-weight: bold;">Email:</td>
      <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
    </tr>
    ${phone ? `
    <tr>
      <td style="padding: 8px 0; font-weight: bold;">Phone:</td>
      <td style="padding: 8px 0;"><a href="tel:${phone}">${phone}</a></td>
    </tr>` : ""}
    <tr>
      <td style="padding: 8px 0; font-weight: bold;">Service Interest:</td>
      <td style="padding: 8px 0;"><strong>${serviceLabel}</strong></td>
    </tr>
    <tr>
      <td style="padding: 8px 0; font-weight: bold;">Budget Range:</td>
      <td style="padding: 8px 0;"><strong>${budgetLabel}</strong></td>
    </tr>
  </table>

  ${message ? `
  <h3 style="margin-top: 20px; color: #333;">About Their Business:</h3>
  <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${message}</div>
  ` : ""}

  <p style="margin-top: 20px; color: #666; font-size: 14px;">
    <a href="mailto:${email}?subject=Re: Your inquiry to Elevate Growth Solutions" style="color: #266D82;">Reply to ${firstName}</a>
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
    console.error("Lead qualify error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to submit lead form" }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
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
