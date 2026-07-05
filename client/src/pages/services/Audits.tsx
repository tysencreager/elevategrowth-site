import ServicePageLayout from "@/components/ServicePageLayout";

const auditsHero = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80&sat=-100";

export default function Audits() {
  return (
    <ServicePageLayout
      // SEO
      title="Website & SEO Audits | Technical Analysis | Elevate Growth Solutions"
      metaDescription="Find out what's holding your website back. SEO audits from $500, technical audits from $400, or the full bundle for $799. Actionable insights, no lock-in."
      ogTitle="Website & SEO Audit Services"
      ogDescription="Stop guessing what's wrong with your website. Get a comprehensive audit with actionable recommendations. SEO audits $500, technical audits $400, bundle for $799."

      // Hero
      heroTitle="Website & SEO Audits"
      heroSubtitle="Get the clarity you need to move forward with confidence."
      heroImage={auditsHero}

      // Main content
      serviceName="Audits & Analysis"
      serviceTagline="Stop Guessing, Start Growing"
      serviceDescription="Before investing in marketing or a website overhaul, you need to understand what's actually working and what's holding you back. Our comprehensive audits give you a data-backed roadmap—not just a list of problems, but prioritized solutions with clear next steps. No ongoing commitment required."

      // Features
      features={[
        {
          title: "Deep-Dive Analysis",
          description: "We don't just run automated tools and hand you a report. Every audit includes manual review and expert interpretation of what the data actually means for your business."
        },
        {
          title: "Competitor Insights",
          description: "Understand how you stack up against your competition. We analyze what's working for them and identify opportunities they're missing."
        },
        {
          title: "Prioritized Action Plan",
          description: "Every audit delivers a clear, prioritized list of recommendations. You'll know exactly what to tackle first for maximum impact."
        },
        {
          title: "Plain-English Explanations",
          description: "No jargon-filled reports that gather dust. We explain everything in terms you can understand and act on."
        },
        {
          title: "Implementation Ready",
          description: "Each recommendation comes with enough detail that you (or your team) can implement the fixes, or we can handle it for you."
        },
        {
          title: "No Strings Attached",
          description: "Audits are one-time projects. Use the insights however you want—implement yourself, hire us, or take them to another provider."
        }
      ]}

      // Process
      process={[
        {
          step: 1,
          title: "Discovery Call",
          description: "We discuss your business goals, current challenges, and what you're hoping to learn from the audit. This ensures we focus on what matters most to you."
        },
        {
          step: 2,
          title: "Data Collection",
          description: "We gather data from your website, analytics, search console, and competitive landscape. This typically requires brief access to your accounts."
        },
        {
          step: 3,
          title: "Analysis & Review",
          description: "Our team conducts a thorough analysis, combining automated tools with manual expert review to uncover insights that software alone would miss."
        },
        {
          step: 4,
          title: "Report & Walkthrough",
          description: "You receive a comprehensive report plus a video walkthrough explaining our findings and recommendations. We're available for questions."
        }
      ]}

      // Pricing
      pricing={[
        {
          name: "SEO Audit",
          price: "$500",
          description: "A data-backed roadmap to get your brand found. This isn't just a keyword list—it's a blueprint for revenue.",
          features: [
            "Deep-dive keyword research",
            "Competitor analysis (3 competitors)",
            "Content gap identification",
            "Google Business Profile review",
            "Backlink profile analysis",
            "Local SEO assessment",
            "Prioritized SEO roadmap",
            "Video walkthrough of findings"
          ],
          note: "Ideal for businesses wanting to improve their search visibility and understand their competitive landscape."
        },
        {
          name: "Technical Audit",
          price: "$400",
          description: "A beautiful website is useless if Google can't read it. We look under the hood to fix the invisible breaks slowing you down.",
          features: [
            "Core Web Vitals assessment",
            "Page speed analysis",
            "Mobile usability review",
            "Indexability check",
            "Robots.txt & sitemap review",
            "Schema markup audit",
            "Broken link detection",
            "Prioritized fix-it action list"
          ],
          note: "Perfect for websites experiencing ranking drops, slow load times, or technical issues affecting user experience."
        },
        {
          name: "Full Stack Bundle",
          price: "$799",
          description: "The ultimate foundation. Combines technical repairs with forward-looking strategy for maximum impact.",
          features: [
            "Everything in the SEO Audit",
            "Everything in the Technical Audit",
            "Executive summary report",
            "6-month priority roadmap",
            "Implementation guidance",
            "30-minute strategy call"
          ],
          note: "Best value for businesses serious about improving their online presence. Save $101 compared to purchasing separately.",
          featured: true
        }
      ]}

      // FAQs
      faqs={[
        {
          question: "How long does an audit take?",
          answer: "Most audits are delivered within 2 weeks of receiving access to your accounts. The Full Stack Bundle may take up to 3 weeks due to its comprehensive scope."
        },
        {
          question: "What access do you need?",
          answer: "For the most thorough audit, we request viewer access to Google Analytics and Google Search Console. If you don't have these set up, we can work with what's publicly available and help you get proper tracking in place."
        },
        {
          question: "Will you implement the recommendations?",
          answer: "Audits are standalone analysis projects. However, many clients choose to have us implement the recommendations afterward. We can provide a custom quote for implementation work based on the audit findings."
        },
        {
          question: "What if I just had a website built?",
          answer: "New websites benefit greatly from audits! We can identify any technical issues before they affect your rankings and create a content/SEO strategy to help you gain traction faster."
        },
        {
          question: "How is this different from free SEO tools?",
          answer: "Free tools provide surface-level data without context. Our audits include expert analysis, competitive insights, and prioritized recommendations specific to your business goals—not generic suggestions."
        },
        {
          question: "Do you offer ongoing SEO services?",
          answer: "Yes! Many audit clients transition to our monthly SEO management services. The audit gives you a clear picture of what's needed, and you can decide if ongoing support makes sense for your situation."
        }
      ]}
    />
  );
}
