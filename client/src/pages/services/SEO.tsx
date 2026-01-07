import ServicePageLayout from "@/components/ServicePageLayout";
import servicesHero from "@assets/services_hero_team_1920.webp";
import servicesHero768 from "@assets/services_hero_team_768.webp";
import servicesHero1280 from "@assets/services_hero_team_1280.webp";

export default function SEO() {
  return (
    <ServicePageLayout
      // SEO
      title="SEO & Local Search Optimization | Elevate Growth Solutions"
      metaDescription="Get found by customers searching for your services. SEO and Google Business Profile optimization to dominate local search. Starting at $300/month per location."
      ogTitle="SEO & Local Search Optimization Services"
      ogDescription="Improve your search rankings and get found by customers actively looking for your services. Local SEO and Google Business Profile management starting at $300/month."

      // Hero
      heroTitle="SEO & Local Search"
      heroSubtitle="Get found by customers who are already looking for what you offer."
      heroImage={servicesHero}
      heroImageSrcSet={`${servicesHero768} 768w, ${servicesHero1280} 1280w, ${servicesHero} 1920w`}

      // Main content
      serviceName="Search Optimization"
      serviceTagline="Dominate Local Search Results"
      serviceDescription="When potential customers search for services like yours, you need to show up. SEO isn't about gaming the system—it's about making sure Google understands what you do, who you serve, and why you're the best choice. I focus on sustainable, white-hat strategies that build long-term visibility."

      // Features
      features={[
        {
          title: "Google Business Profile Optimization",
          description: "Your GBP is often the first thing local customers see. I optimize every field, add compelling photos, and ensure your listing stands out in map results."
        },
        {
          title: "Local Keyword Strategy",
          description: "Research and targeting of the search terms your ideal customers actually use. Focus on high-intent keywords that drive real business."
        },
        {
          title: "On-Page SEO",
          description: "Optimize your website's content, meta tags, headers, and structure to help search engines understand and rank your pages."
        },
        {
          title: "Technical SEO",
          description: "Site speed, mobile-friendliness, crawlability, and structured data. The behind-the-scenes work that makes everything else effective."
        },
        {
          title: "Citation Building",
          description: "Consistent business listings across directories, review sites, and local platforms that build trust and authority."
        },
        {
          title: "Monthly Reporting",
          description: "Clear, jargon-free reports showing your rankings, traffic, and progress. Know exactly what's working and what's next."
        }
      ]}

      // Process
      process={[
        {
          step: 1,
          title: "SEO Audit",
          description: "I analyze your current online presence, identifying opportunities and issues. This includes your website, Google Business Profile, citations, and competitors."
        },
        {
          step: 2,
          title: "Strategy Development",
          description: "Based on the audit, I create a prioritized action plan. We'll focus on quick wins first while building toward long-term gains."
        },
        {
          step: 3,
          title: "Implementation",
          description: "Execute the strategy—optimizing your GBP, improving on-page elements, building citations, and addressing technical issues."
        },
        {
          step: 4,
          title: "Ongoing Optimization",
          description: "SEO isn't 'set and forget.' Monthly monitoring, adjustments, and continued improvements keep you moving up in rankings."
        }
      ]}

      // Pricing
      pricing={[
        {
          name: "Local SEO",
          price: "$300/mo",
          description: "Per location pricing for comprehensive local search optimization.",
          features: [
            "Google Business Profile management",
            "Local keyword optimization",
            "On-page SEO improvements",
            "Citation building & cleanup",
            "Review management strategy",
            "Monthly performance reports",
            "Competitor monitoring"
          ],
          note: "Multi-location businesses receive discounted per-location pricing.",
          featured: true
        }
      ]}

      // FAQs
      faqs={[
        {
          question: "How long does it take to see SEO results?",
          answer: "SEO is a long-term investment. Most clients start seeing measurable improvements in 3-6 months, with significant gains by 6-12 months. Local SEO often shows faster initial results than organic rankings."
        },
        {
          question: "Do you guarantee first page rankings?",
          answer: "No reputable SEO professional can guarantee specific rankings—anyone who promises that is likely using risky tactics. I focus on sustainable growth and improving your overall visibility."
        },
        {
          question: "What's the difference between local SEO and regular SEO?",
          answer: "Local SEO focuses on appearing in 'near me' searches and Google Maps results. Regular (organic) SEO targets broader keyword rankings. Most local businesses benefit most from local SEO."
        },
        {
          question: "Do I need a website for SEO?",
          answer: "While Google Business Profile optimization can help without a website, a well-optimized website significantly improves your local search performance and gives you more ranking opportunities."
        },
        {
          question: "What if I have multiple locations?",
          answer: "Each location needs its own optimization strategy. I offer discounted per-location pricing for multi-location businesses. We'll create a custom plan based on your specific setup."
        },
        {
          question: "Can you help with negative reviews?",
          answer: "I can help you develop a strategy for responding to reviews and encouraging positive ones. Managing your online reputation is part of a comprehensive local SEO approach."
        }
      ]}
    />
  );
}
