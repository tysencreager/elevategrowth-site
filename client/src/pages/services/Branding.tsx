import ServicePageLayout from "@/components/ServicePageLayout";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const brandingHero = "https://i.postimg.cc/yx26HW3z/branding-photo.png";
const brandingShowcase = "https://i.postimg.cc/50dkJcyp/EGS_logobranding_for_website.png";

function BrandingShowcase() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} className="py-12 md:py-16 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-3">
            Brand Identity in Action
          </h2>
          <p className="font-serif text-muted-foreground max-w-2xl mx-auto">
            See how cohesive branding elements come together to create a memorable brand presence.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-xl overflow-hidden shadow-lg"
        >
          <img
            src={brandingShowcase}
            alt="Branding and logo design showcase for Elevate Growth Solutions"
            className="w-full h-auto"
            loading="lazy"
            decoding="async"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default function Branding() {
  return (
    <ServicePageLayout
      beforeProcess={<BrandingShowcase />}
      // SEO
      title="Branding & Brand Identity Design | Elevate Growth Solutions"
      metaDescription="Build a memorable brand identity: logo design, visual identity systems, strategy, and complete brand guidelines. Packages from $999."
      ogTitle="Professional Branding & Identity Design Services"
      ogDescription="Create a brand that stands out. From logo suites to complete brand systems with strategy, visual identity, and collateral. Packages starting at $999."

      // Hero
      heroTitle="Branding & Identity"
      heroSubtitle="Build a brand that connects, converts, and stands the test of time."
      heroImage={brandingHero}

      // Main content
      serviceName="Brand Identity"
      serviceTagline="Your Brand Is More Than a Logo"
      serviceDescription="A strong brand is the foundation of every successful business. It's how people recognize you, remember you, and choose you over competitors. I create cohesive brand identities that tell your story, connect with your ideal customers, and give you the professional presence you need to grow."

      // Features
      features={[
        {
          title: "Brand Strategy",
          description: "We start with the 'why'—understanding your audience, competitors, and what makes you unique. This strategic foundation guides every visual decision."
        },
        {
          title: "Logo Suite",
          description: "Not just one logo, but a complete system: primary logo, secondary marks, watermarks, and favicon. Everything you need for any application."
        },
        {
          title: "Visual Identity System",
          description: "Color palettes, typography hierarchy, and visual elements that work together to create a cohesive, professional look across all touchpoints."
        },
        {
          title: "Brand Voice & Messaging",
          description: "How your brand speaks matters as much as how it looks. Define your tone, key messages, and the language that resonates with your audience."
        },
        {
          title: "Brand Guidelines",
          description: "A comprehensive guide ensuring anyone who works with your brand—employees, contractors, vendors—uses it correctly and consistently."
        },
        {
          title: "Ready-to-Use Assets",
          description: "Walk away with templates, patterns, and collateral you can start using immediately—not just concepts, but practical tools for your business."
        }
      ]}

      // Process
      process={[
        {
          step: 1,
          title: "Discovery & Strategy",
          description: "A deep-dive session to understand your business, audience, competitors, and goals. This is where we uncover what makes your brand unique."
        },
        {
          step: 2,
          title: "Concept Development",
          description: "I develop initial logo concepts and visual directions based on our strategy session. You'll see multiple options to react to and refine."
        },
        {
          step: 3,
          title: "Refinement",
          description: "Based on your feedback, we refine the chosen direction until it's perfect. This includes developing the full logo suite and visual system."
        },
        {
          step: 4,
          title: "Delivery & Implementation",
          description: "You receive all final files, brand guidelines, and templates. I'll walk you through everything and answer any questions about implementation."
        }
      ]}

      // Pricing
      pricing={[
        {
          name: "Brand Launch",
          price: "$999",
          description: "Everything you need to launch with a professional brand presence.",
          features: [
            "60-minute discovery call",
            "Target audience profile",
            "Primary & secondary logo",
            "Color palette",
            "Brand board (fonts/colors cheat sheet)",
            "3 custom social media templates",
            "Business card design",
            "All source files & font guide"
          ],
          note: "Perfect for startups, new businesses, or those ready for a professional refresh."
        },
        {
          name: "Brand Authority",
          price: "$3,995",
          description: "A comprehensive brand system for established businesses ready to level up.",
          features: [
            "Competitor audit (3 competitors)",
            "Detailed customer persona",
            "Brand voice & tone guide",
            "Messaging framework & taglines",
            "Full logo suite with submarks & favicon",
            "Typography hierarchy",
            "Custom pattern/texture library",
            "5-10 custom service icons",
            "Complete brand bible (PDF)",
            "Choice of 3 collateral pieces"
          ],
          note: "Collateral options: pitch deck, email templates, social media suite, flyer design, or LinkedIn banners.",
          featured: true
        }
      ]}

      // FAQs
      faqs={[
        {
          question: "What's included in the 'Brand Authority' collateral choices?",
          answer: "You can choose any 3 from: Pitch Deck/Presentation Template, Email Marketing Header & Footer Design, Social Media Suite (6 templates + highlight covers), One-Sheet/Flyer Design, or LinkedIn Personal Branding Banners for your team."
        },
        {
          question: "How long does the branding process take?",
          answer: "Brand Launch typically takes 2-3 weeks. Brand Authority is a more comprehensive process, usually 4-6 weeks. Timelines depend on feedback turnaround and the complexity of your needs."
        },
        {
          question: "What if I only need a logo?",
          answer: "I'd encourage you to think bigger—a logo alone often leads to inconsistent branding down the road. The Brand Launch package gives you a complete foundation at an accessible price point."
        },
        {
          question: "Do you do rebrands?",
          answer: "Absolutely. Whether you're refreshing an outdated brand or completely repositioning, both packages work for new brands and rebrands alike."
        },
        {
          question: "What files will I receive?",
          answer: "You'll get all source files (AI, EPS, PDF) plus web-ready formats (PNG, SVG, JPG). Everything is organized and labeled for easy use by you or any future vendors."
        },
        {
          question: "Can I add the branding to a website project?",
          answer: "Yes! Many clients bundle branding with a website build. The brand identity naturally flows into the web design, creating a cohesive online presence."
        }
      ]}
    />
  );
}
