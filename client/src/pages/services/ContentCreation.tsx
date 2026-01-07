import ServicePageLayout from "@/components/ServicePageLayout";
import servicesHero from "@assets/services_hero_team_1920.webp";
import servicesHero768 from "@assets/services_hero_team_768.webp";
import servicesHero1280 from "@assets/services_hero_team_1280.webp";

export default function ContentCreation() {
  return (
    <ServicePageLayout
      // SEO
      title="Content Creation | Photo & Video for Business | Elevate Growth Solutions"
      metaDescription="Professional content creation for your business. One content day per quarter delivers a library of curated photos and videos for social media, website, and marketing. $1,700/quarter."
      ogTitle="Professional Content Creation Services"
      ogDescription="Build a library of professional photos and videos for your business. Quarterly content days deliver authentic, on-brand content you can use everywhere."

      // Hero
      heroTitle="Content Creation"
      heroSubtitle="A library of professional content, ready to use however you need."
      heroImage={servicesHero}
      heroImageSrcSet={`${servicesHero768} 768w, ${servicesHero1280} 1280w, ${servicesHero} 1920w`}

      // Main content
      serviceName="Content Creation"
      serviceTagline="Professional Content Without the Hassle"
      serviceDescription="Great marketing needs great content—but most business owners don't have time to plan photoshoots or create videos. Our quarterly content days give you a full library of professional, on-brand photos and videos you can use across social media, your website, email marketing, and anywhere else your brand shows up."

      // Features
      features={[
        {
          title: "Planned Content Day",
          description: "A full day dedicated to capturing your brand. I handle all the planning, shot lists, and logistics so you just show up and look great."
        },
        {
          title: "Photo Library",
          description: "Professional photos of your team, workspace, products, or services. Varied shots that work for different platforms and purposes."
        },
        {
          title: "Video Content",
          description: "Short-form video clips perfect for Reels, TikTok, or website use. Behind-the-scenes, talking head, or whatever fits your brand."
        },
        {
          title: "Brand-Aligned Style",
          description: "Every piece of content is styled and edited to match your brand aesthetic. Consistent look and feel across everything."
        },
        {
          title: "Full Usage Rights",
          description: "Everything we create is yours to use however you want—website, social media, ads, print materials, you name it."
        },
        {
          title: "Strategic Shot List",
          description: "Before the content day, we plan exactly what we need to capture. No wasted time, maximum value from every session."
        }
      ]}

      // Process
      process={[
        {
          step: 1,
          title: "Planning Session",
          description: "We discuss your content needs, upcoming campaigns, and what you want to communicate. I create a detailed shot list and schedule."
        },
        {
          step: 2,
          title: "Content Day",
          description: "The main event! I capture everything on the shot list—photos, videos, b-roll—in a single focused session at your location."
        },
        {
          step: 3,
          title: "Editing & Curation",
          description: "I review all content, select the best shots, and professionally edit everything to match your brand standards."
        },
        {
          step: 4,
          title: "Delivery",
          description: "You receive your full content library, organized and ready to use. I'll recommend how to deploy it across your marketing channels."
        }
      ]}

      // Pricing
      pricing={[
        {
          name: "Quarterly Content Package",
          price: "$1,700/qtr",
          description: "One content day per quarter with a full library of photos and videos.",
          features: [
            "Full-day content session",
            "Pre-session planning & shot list",
            "Professional photo library (30-50 edited images)",
            "Short-form video clips (5-10 clips)",
            "Color correction & editing",
            "Organized delivery in multiple formats",
            "Full commercial usage rights"
          ],
          note: "3-month commitment required. Travel outside of local area may incur additional fees.",
          featured: true
        }
      ]}

      // FAQs
      faqs={[
        {
          question: "What should we prepare for a content day?",
          answer: "I'll provide a detailed prep guide, but generally: clean and tidy workspace, any products or props you want featured, and team members available if we're capturing people. I handle the creative direction."
        },
        {
          question: "Where does the content day take place?",
          answer: "Usually at your business location—office, storefront, or wherever best represents your brand. We can also use studio space or outdoor locations if that better fits your needs."
        },
        {
          question: "Can I request specific types of content?",
          answer: "Absolutely. The planning session is all about understanding what you need. Have a product launch coming up? A new team member? Seasonal campaign? We'll plan for it."
        },
        {
          question: "How is this different from hiring a photographer?",
          answer: "I approach content creation from a marketing perspective, not just a photography one. Every shot is planned with your content strategy in mind—how you'll use it, where it will appear, and what message it communicates."
        },
        {
          question: "What if I need content more often than quarterly?",
          answer: "We can discuss a custom arrangement for more frequent content days or an ongoing content subscription. Many clients pair this with Social Media Management for a complete solution."
        },
        {
          question: "Do you provide models or talent?",
          answer: "The package focuses on capturing you, your team, and your business authentically. If you need models or talent, we can discuss sourcing them as an add-on."
        }
      ]}
    />
  );
}
