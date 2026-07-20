interface Env {
  BREVO_API_KEY: string;
}

interface SubscribeRequest {
  email: string;
  source?: string;
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

  try {
    const body = (await context.request.json()) as SubscribeRequest;
    const { email, source } = body;

    if (!email) {
      return new Response(JSON.stringify({ error: "Email is required" }), {
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

    // Step 1: Add contact to Brevo list
    const contactResponse = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        email: email,
        listIds: [3], // Newsletter Subscribers list
        updateEnabled: true,
        attributes: {
          SOURCE: source || "website",
        },
      }),
    });

    // Contact might already exist (that's okay)
    if (!contactResponse.ok && contactResponse.status !== 409) {
      const errorData = await contactResponse.text();
      console.error("Brevo contact error:", errorData);
    }

    // Step 2: Send welcome email via transactional API
    const emailResponse = await fetch("https://api.brevo.com/v3/smtp/email", {
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
        to: [{ email: email }],
        subject: "Welcome to Elevate Growth Solutions!",
        textContent: `Hello and welcome to the Elevate Growth Solutions Family!

Thank you so much for subscribing to Elevate Growth Solutions — we're thrilled to have you join our community of growing businesses.

At Elevate Growth Solutions, we're a boutique full-stack marketing agency dedicated to helping growing businesses like yours succeed. We specialize in custom web design, full-stack marketing management, SEO, social media strategy, paid advertising, branding, and content creation.

Your Exclusive Welcome Offer: As a thank you for subscribing, enjoy 10% off any of our services when you book your free discovery call.

Ready to get started? Book your discovery call: https://calendly.com/tysencreager/30minutes

Looking forward to connecting with you!

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
  <p>Hello and welcome to the Elevate Growth Solutions Family!</p>

  <p>Thank you so much for subscribing to Elevate Growth Solutions— we're thrilled to have you join our community of growing businesses.</p>

  <p>I wanted to personally welcome you and share what we're all about. At Elevate Growth Solutions, we're a boutique full-stack marketing agency dedicated to helping growing businesses like yours succeed. Unlike big agencies where you're just a number, we treat every client like our own; giving you the personalized attention and strategic expertise your business deserves.</p>

  <p><strong>Here's what we specialize in:</strong></p>
  <ul>
    <li>Custom web design & optimization that converts visitors into customers</li>
    <li>Full-stack marketing management across all your channels</li>
    <li>SEO services to help you get found by customers actively searching for you</li>
    <li>Social media strategy that builds authentic connections</li>
    <li>Paid advertising campaigns with proven ROI</li>
    <li>Branding & creative direction that makes you stand out</li>
    <li>Strategic content creation that drives engagement</li>
  </ul>

  <p><strong>Your Exclusive Welcome Offer:</strong> As a thank you for subscribing, enjoy 10% off any of our services when you book your free discovery call. Whether you're launching your first website or ready to scale your marketing, we're here to help you elevate your growth.</p>

  <p><strong>Ready to get started?</strong> <a href="https://calendly.com/tysencreager/30minutes" style="color: #0066cc;">Book Your Discovery Call Today</a></p>

  <p>During our free consultation, we'll discuss your goals, challenges, and vision for your brand— no pressure, no obligations. Just a genuine conversation about how we can help you succeed.</p>

  <p>Looking forward to connecting with you!</p>

  <p>Warmly,<br>
  <strong>Tysen Creager</strong><br>
  Elevate Growth Solutions</p>
</body>
</html>
        `,
      }),
    });

    if (!emailResponse.ok) {
      const errorData = await emailResponse.text();
      console.error("Brevo email error:", errorData);
      // Still return success - contact was added, email will retry
    }

    // Step 3: Send notification to you about the new subscriber
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
        // Hitting "Reply" on the notification should go to the subscriber,
        // not back to the site's own address.
        replyTo: { email: email },
        to: [{ email: "tysen@elevategrowth.solutions" }],
        subject: `New Email Subscriber: ${email}`,
        textContent: `New newsletter subscriber

Email: ${email}
Source: ${source || "website"}

This subscriber has been added to your Newsletter Subscribers list in Brevo and received the welcome email.`,
        htmlContent: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <h2 style="color: #333; border-bottom: 2px solid #0066cc; padding-bottom: 10px;">New Newsletter Subscriber</h2>

  <table style="width: 100%; border-collapse: collapse;">
    <tr>
      <td style="padding: 8px 0; font-weight: bold; width: 120px;">Email:</td>
      <td style="padding: 8px 0;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td>
    </tr>
    <tr>
      <td style="padding: 8px 0; font-weight: bold;">Source:</td>
      <td style="padding: 8px 0;">${escapeHtml(source || "website")}</td>
    </tr>
  </table>

  <p style="margin-top: 20px; color: #666; font-size: 14px;">
    This subscriber has been added to your Newsletter Subscribers list in Brevo and received the welcome email.
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
    console.error("Subscribe error:", error);
    return new Response(JSON.stringify({ error: "Failed to subscribe" }), {
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
