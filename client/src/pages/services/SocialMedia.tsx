import ServicePageLayout from "@/components/ServicePageLayout";
import servicesHero from "@assets/services_hero_team_1920.webp";
import servicesHero768 from "@assets/services_hero_team_768.webp";
import servicesHero1280 from "@assets/services_hero_team_1280.webp";

export default function SocialMedia() {
  return (
    <ServicePageLayout
      // SEO
      title="Social Media Management | Strategy & Content | Elevate Growth Solutions"
      metaDescription="Strategic social media management that builds your brand and engages your audience. Consistent, quality content for Instagram, Facebook, LinkedIn, and more. From $1,000/month."
      ogTitle="Social Media Management & Strategy Services"
      ogDescription="Build your brand with strategic social media content. Professional management for Instagram, Facebook, LinkedIn. Packages starting at $1,000/month."

      // Hero
      heroTitle="Social Media Management"
      heroSubtitle="Build your brand with consistent, strategic content that actually connects."
      heroImage={servicesHero}
      heroImageSrcSet={`${servicesHero768} 768w, ${servicesHero1280} 1280w, ${servicesHero} 1920w`}

      // Main content
      serviceName="Social Media"
      serviceTagline="Social Media That Builds Real Connections"
      serviceDescription="Posting randomly and hoping for the best doesn't work. Effective social media requires strategy, consistency, and content that resonates with your audience. I handle everything from content planning to posting, so you can focus on running your business while building a genuine online presence."

      // Features
      features={[
        {
          title: "Content Strategy",
          description: "A customized content plan aligned with your brand, audience, and business goals. Every post has a purpose."
        },
        {
          title: "Professional Content Creation",
          description: "Eye-catching graphics, compelling captions, and content that reflects your brand's voice and values."
        },
        {
          title: "Consistent Posting Schedule",
          description: "Regular, reliable posting keeps you top of mind. No more weeks of silence followed by sporadic updates."
        },
        {
          title: "Comment Engagement",
          description: "Responding to comments on your posts to keep conversations going and build genuine connections with your audience."
        },
        {
          title: "Hashtag & Caption Strategy",
          description: "Research-backed hashtags and captions that increase reach and encourage engagement."
        },
        {
          title: "Monthly Analytics",
          description: "Clear reports on what's working, what's growing, and what we're adjusting. Data-driven decisions, not guesswork."
        }
      ]}

      // Process
      process={[
        {
          step: 1,
          title: "Brand Deep-Dive",
          description: "I learn your brand inside and out—your voice, values, audience, and goals. This ensures every piece of content feels authentically you."
        },
        {
          step: 2,
          title: "Strategy & Planning",
          description: "Develop a content calendar with themes, posting schedule, and content pillars. You'll approve the direction before we start."
        },
        {
          step: 3,
          title: "Content Creation",
          description: "I create all graphics and write captions in advance. You'll have the opportunity to review and provide feedback before posting."
        },
        {
          step: 4,
          title: "Posting & Monitoring",
          description: "Content goes live according to schedule. I monitor performance and respond to comments to keep your audience engaged."
        }
      ]}

      // Pricing
      pricing={[
        {
          name: "Standard",
          price: "$1,000/mo",
          description: "Consistent presence for businesses getting started with professional social media.",
          features: [
            "2-3 posts per week",
            "Content strategy & planning",
            "Custom graphics",
            "Caption writing",
            "Hashtag research",
            "Comment engagement",
            "Monthly analytics report"
          ],
          note: "Covers 1-2 platforms (Instagram, Facebook, or LinkedIn)."
        },
        {
          name: "Growth",
          price: "$1,800/mo",
          description: "Expanded presence for businesses ready to grow their social impact.",
          features: [
            "4-5 posts per week",
            "Advanced content strategy",
            "Custom graphics & Reels/video",
            "Caption writing & storytelling",
            "Hashtag & trend research",
            "Active comment engagement",
            "Story/post scheduling",
            "Bi-weekly strategy calls",
            "Detailed monthly analytics"
          ],
          note: "Covers 2-3 platforms with more frequent posting.",
          featured: true
        }
      ]}

      // FAQs
      faqs={[
        {
          question: "Which platforms do you manage?",
          answer: "I primarily work with Instagram, Facebook, and LinkedIn—the platforms where most businesses see the best ROI. If you need other platforms, we can discuss what makes sense for your audience."
        },
        {
          question: "Will the content sound like me?",
          answer: "Absolutely. I spend significant time in the onboarding process learning your voice, style, and what makes your brand unique. You'll approve content before it posts, and we refine until it feels right."
        },
        {
          question: "Can I provide my own photos/videos?",
          answer: "Yes! The best results come from a mix of branded graphics and authentic photos from your business. I'll guide you on what to capture, or you can add our Content Creation package for professional shoots."
        },
        {
          question: "Why is there a 3-month minimum?",
          answer: "Social media is a long game. It takes time to understand what resonates with your audience and build momentum. The 3-month minimum ensures we have enough runway to see real results."
        },
        {
          question: "Do you run ads?",
          answer: "Social media management and paid advertising are separate services. If you're interested in social ads, check out our Ad Campaign Management service—they work great together."
        },
        {
          question: "How involved do I need to be?",
          answer: "As involved as you want to be. Some clients prefer to review and approve everything; others trust me to handle it all. We'll find the right balance for your comfort level."
        }
      ]}
    />
  );
}
