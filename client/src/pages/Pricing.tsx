import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Search, Share2, Camera, Megaphone } from "lucide-react";
import servicesHero from "@assets/services_hero_team_1920.webp";
import servicesHero768 from "@assets/services_hero_team_768.webp";
import servicesHero1280 from "@assets/services_hero_team_1280.webp";

interface PricingCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  items: { label: string; price: string }[];
  note?: string;
  index: number;
}

function PricingCard({ icon, title, description, items, note, index }: PricingCardProps) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.1
      }
    }
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="bg-card border border-border rounded-lg p-6 md:p-8 hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="p-3 bg-primary/10 rounded-lg text-primary shrink-0">
          {icon}
        </div>
        <div>
          <h3 className="font-display font-semibold text-xl md:text-2xl text-foreground mb-2">
            {title}
          </h3>
          <p className="font-serif text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        {items.map((item, i) => (
          <div key={i} className="flex justify-between items-baseline gap-4 py-2 border-b border-border/50 last:border-0">
            <span className="font-serif text-foreground">{item.label}</span>
            <span className="font-sans font-semibold text-primary whitespace-nowrap">{item.price}</span>
          </div>
        ))}
      </div>

      {note && (
        <p className="mt-4 text-sm font-serif text-muted-foreground italic">
          {note}
        </p>
      )}
    </motion.div>
  );
}

export default function Pricing() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.5 });

  const headerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const pricingCategories = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Websites",
      description: "Custom-coded websites built in days, not months.",
      items: [
        { label: "One-page sites", price: "Starting at $1,299" },
        { label: "Hosting & maintenance", price: "$80/month" }
      ],
      note: "Hosting includes managed hosting, 1 hour of monthly content edits, and uptime monitoring."
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "Search & Local Presence",
      description: "Get found where it matters.",
      items: [
        { label: "SEO & Google Business Profile optimization", price: "$300/month per location" }
      ]
    },
    {
      icon: <Share2 className="h-6 w-6" />,
      title: "Social Media Management",
      description: "Consistent, strategic content that builds your brand.",
      items: [
        { label: "Standard (2-3 posts/week)", price: "$1,000/month" },
        { label: "Growth (4-5 posts/week)", price: "$1,800/month" }
      ],
      note: "All social media packages require a 3-month minimum commitment."
    },
    {
      icon: <Camera className="h-6 w-6" />,
      title: "Content Creation",
      description: "One content day per quarter. You get a library of curated photos and videos tailored to your goals—ready to use however you need.",
      items: [
        { label: "Quarterly content package", price: "$1,700/quarter" }
      ],
      note: "3-month commitment required."
    },
    {
      icon: <Megaphone className="h-6 w-6" />,
      title: "Advertising",
      description: "Strategic ad management across Google and Meta.",
      items: [
        { label: "Per platform (up to 3 campaigns)", price: "$600/month" }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Pricing - Marketing Services | Elevate Growth Solutions"
        description="Transparent pricing for websites, SEO, social media management, content creation, and advertising. Starting points for every budget—let's talk about what you actually need."
        ogTitle="Marketing Services Pricing | Elevate Growth Solutions"
        ogDescription="Custom websites starting at $1,299. SEO from $300/month. Social media management from $1,000/month. Get transparent pricing for marketing services."
      />
      <Navbar />

      <Hero
        backgroundImage={servicesHero}
        imageSrcSet={`${servicesHero768} 768w, ${servicesHero1280} 1280w, ${servicesHero} 1920w`}
        title="Pricing"
        subtitle="Every business is different, so consider these starting points. Let's talk about what you actually need."
        height="60vh"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={headerRef} className="text-center mb-12 md:mb-16">
            <motion.p
              className="font-serif text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
              variants={headerVariants}
              initial="hidden"
              animate={isHeaderInView ? "visible" : "hidden"}
            >
              Transparent pricing with no hidden fees. All prices shown are starting points—your actual investment depends on scope and goals.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {pricingCategories.map((category, index) => (
              <PricingCard
                key={category.title}
                icon={category.icon}
                title={category.title}
                description={category.description}
                items={category.items}
                note={category.note}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to discuss your project?"
        ctaText="Get In Touch"
        ctaHref="/contact"
        backgroundColor="bg-primary"
      />

      <Footer />
    </div>
  );
}
