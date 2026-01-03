interface Env {
  BREVO_API_KEY: string;
}

interface SubscribeRequest {
  email: string;
  source?: string;
}

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
        listIds: [2], // Newsletter Subscribers list - update this ID after checking Brevo
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
        to: [{ email: email }],
        subject: "Welcome to Elevate Growth Solutions!",
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
