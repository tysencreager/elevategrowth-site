import ServicePageLayout from "@/components/ServicePageLayout";

const adCampaignsHero = "https://i.postimg.cc/kMyKNC3b/ads-header-photo.png";

export default function AdCampaigns() {
  return (
    <ServicePageLayout
      // SEO
      title="Ad Campaign Management | Google & Meta Ads | Elevate Growth Solutions"
      metaDescription="Strategic ad campaign management across Google, Meta, and other platforms. Data-driven campaigns tailored to your goals. Custom pricing based on your needs."
      ogTitle="Ad Campaign Management | Google & Meta Advertising"
      ogDescription="Get more from your ad spend with strategic campaign management. Google Ads, Facebook Ads, Instagram Ads—custom strategies that drive real results."

      // Hero
      heroTitle="Ad Campaign Management"
      heroSubtitle="Data-driven advertising that delivers real, measurable results."
      heroImage={adCampaignsHero}

      // Main content
      serviceName="Paid Advertising"
      serviceTagline="Make Every Ad Dollar Count"
      serviceDescription="Paid advertising can be incredibly powerful—or an expensive waste of money. The difference is strategy, targeting, and ongoing optimization. I create and manage ad campaigns that reach the right people with the right message, continuously refining based on performance data to maximize your return on investment."

      // Features
      features={[
        {
          title: "Platform Selection",
          description: "Not every platform is right for every business. I'll recommend where to focus based on your audience, goals, and budget."
        },
        {
          title: "Campaign Strategy",
          description: "From awareness to conversion, I build campaigns structured to move prospects through your funnel at every stage."
        },
        {
          title: "Audience Targeting",
          description: "Reach the right people with precise targeting based on demographics, interests, behaviors, and custom audiences."
        },
        {
          title: "Ad Creative & Copy",
          description: "Compelling ads that stop the scroll and drive action. I create the visuals and write the copy that converts."
        },
        {
          title: "Budget Optimization",
          description: "Strategic bid management and budget allocation to get the most results from every dollar spent."
        },
        {
          title: "Performance Reporting",
          description: "Clear, regular reports on what's working. Track leads, conversions, and ROI—not just vanity metrics."
        }
      ]}

      // Process
      process={[
        {
          step: 1,
          title: "Discovery & Strategy",
          description: "We discuss your goals, target audience, and budget. I research your market and develop a custom advertising strategy."
        },
        {
          step: 2,
          title: "Campaign Setup",
          description: "I build your campaigns from scratch—account structure, targeting, ad creative, tracking pixels, and conversion setup."
        },
        {
          step: 3,
          title: "Launch & Monitor",
          description: "Campaigns go live with close monitoring. The first few weeks are crucial for gathering data and making initial optimizations."
        },
        {
          step: 4,
          title: "Optimize & Scale",
          description: "Continuous refinement based on performance data. Kill what's not working, scale what is, and test new opportunities."
        }
      ]}

      // Pricing
      pricingSubtitle=""
      pricing={[
        {
          name: "Ad Campaign Management",
          price: "Inquire",
          description: "Custom pricing based on platforms, campaign complexity, and ad spend.",
          features: [
            "Custom campaign strategy",
            "Account setup & structure",
            "Audience research & targeting",
            "Ad creative & copywriting",
            "A/B testing",
            "Bid & budget optimization",
            "Conversion tracking setup",
            "Monthly performance reports",
            "Regular strategy calls"
          ],
          note: "Pricing varies based on: number of platforms, campaign complexity, monthly ad spend, and your specific goals. Let's talk about what you need.",
          featured: true
        }
      ]}

      // FAQs
      faqs={[
        {
          question: "Why is pricing 'Inquire' instead of a fixed rate?",
          answer: "Ad management complexity varies significantly. A single-platform campaign with $1,000/month ad spend requires different effort than a multi-platform strategy with $10,000/month spend. I provide custom quotes after understanding your specific needs."
        },
        {
          question: "What platforms do you manage ads on?",
          answer: "Primarily Google Ads (Search, Display, YouTube) and Meta (Facebook & Instagram). I can also work with LinkedIn Ads for B2B clients. We'll choose platforms based on where your audience actually is."
        },
        {
          question: "How much should I budget for ad spend?",
          answer: "It depends on your goals and market. Most clients see meaningful results starting around $1,500-3,000/month in ad spend, but I can work with various budgets. We'll discuss what's realistic for your situation."
        },
        {
          question: "Is the ad spend included in your management fee?",
          answer: "No, ad spend goes directly to the advertising platforms (Google, Meta). My management fee covers strategy, setup, creative, and ongoing optimization—the work that makes your ad spend effective."
        },
        {
          question: "How quickly will I see results?",
          answer: "Some campaigns show results within days; others take weeks to optimize. It depends on your offer, audience, and goals. I focus on building sustainable performance, not just quick wins that fade."
        },
        {
          question: "Do you provide the ad creative?",
          answer: "Yes, I create ad copy and graphics as part of the management service. For video ads, we may need to discuss content creation or use assets you provide."
        },
        {
          question: "Can you work with my existing campaigns?",
          answer: "Absolutely. I can audit your current campaigns, identify opportunities, and either optimize what exists or rebuild for better performance."
        }
      ]}
    />
  );
}
