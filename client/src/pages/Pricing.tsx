import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { Link } from "wouter";
import servicesHero from "@assets/services_hero_team_1920.webp";
import servicesHero768 from "@assets/services_hero_team_768.webp";
import servicesHero1280 from "@assets/services_hero_team_1280.webp";

// Import B&W stock images for service cards
import websiteImg from "@assets/stock_images/black_and_white_desk_69514a94.jpg";
import searchImg from "@assets/stock_images/black_and_white_mode_319eff6f.jpg";
import socialImg from "@assets/stock_images/black_and_white_prof_325156c7.jpg";
import contentImg from "@assets/stock_images/black_and_white_busi_73b6a31c.jpg";
import advertisingImg from "@assets/stock_images/modern_marketing_and_a25f67ec.jpg";

interface PricingCardProps {
  image: string;
  title: string;
  description: string;
  items: { label: string; price: string }[];
  note?: string;
  index: number;
  featured?: boolean;
}

function PricingCard({ image, title, description, items, note, index, featured }: PricingCardProps) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.12
      }
    }
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{
        y: -8,
        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
      }}
      className={`group relative bg-card rounded-xl overflow-hidden border-2 transition-all duration-500 ${
        featured
          ? 'border-primary shadow-lg shadow-primary/10'
          : 'border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5'
      }`}
    >
      {/* Featured badge */}
      {featured && (
        <div className="absolute top-4 right-4 z-10 bg-primary text-white px-3 py-1 rounded-full text-sm font-sans font-medium flex items-center gap-1">
          <Sparkles className="w-3 h-3" />
          Popular
        </div>
      )}

      {/* Image container with overlay */}
      <div className="relative h-48 md:h-56 overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover grayscale"
          initial={{ scale: 1.1 }}
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Teal accent line */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-primary"
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 0.8, delay: 0.3 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Title overlay on image */}
        <div className="absolute bottom-4 left-6 right-6">
          <h3 className="font-display font-semibold text-2xl md:text-3xl text-white drop-shadow-lg">
            {title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <p className="font-serif text-muted-foreground leading-relaxed mb-6">
          {description}
        </p>

        {/* Pricing items */}
        <div className="space-y-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="flex justify-between items-start gap-4 py-3 border-b border-border/50 last:border-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
            >
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="font-serif text-foreground">{item.label}</span>
              </div>
              <span className="font-sans font-bold text-primary text-lg whitespace-nowrap">
                {item.price}
              </span>
            </motion.div>
          ))}
        </div>

        {note && (
          <motion.p
            className="mt-5 text-sm font-serif text-muted-foreground bg-primary/5 p-3 rounded-lg border-l-2 border-primary"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            {note}
          </motion.p>
        )}
      </div>
    </motion.div>
  );
}

// Enhanced CTA Section Component
function PricingCTA() {
  const ctaRef = useRef(null);
  const isInView = useInView(ctaRef, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [-5, 5, -5],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section
      ref={ctaRef}
      className="relative py-24 md:py-32 lg:py-40 overflow-hidden bg-gradient-to-br from-primary via-primary to-[hsl(191,60%,25%)]"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating shapes */}
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 left-[10%] w-32 h-32 bg-white/5 rounded-full blur-2xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "2s" }}
          className="absolute bottom-20 right-[15%] w-48 h-48 bg-white/5 rounded-full blur-3xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "4s" }}
          className="absolute top-1/2 right-[5%] w-24 h-24 bg-white/10 rounded-full blur-xl"
        />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Radial gradient spotlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
        >
          <Sparkles className="w-4 h-4 text-white" />
          <span className="font-sans text-sm font-medium text-white">Quality services, honest pricing</span>
        </motion.div>

        {/* Main headline */}
        <motion.h2
          variants={itemVariants}
          className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight"
        >
          Ready to grow your business?
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="font-serif text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Let's have a real conversation about your goals. No pressure, no jargon—just honest advice on what will actually move the needle.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/contact">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                className="font-sans font-semibold text-lg px-8 py-6 bg-white text-primary hover:bg-white/90 shadow-xl shadow-black/20 group"
              >
                Schedule a Call
                <motion.span
                  className="inline-block ml-2"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                >
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </motion.span>
              </Button>
            </motion.div>
          </Link>

          <a href="mailto:tysen@elevategrowth.solutions">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="font-sans font-semibold text-lg px-8 py-6 bg-transparent border-2 border-white/50 text-white hover:bg-white/10 hover:border-white"
              >
                Email Me Directly
              </Button>
            </motion.div>
          </a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          variants={itemVariants}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 text-white/70"
        >
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-white" />
            <span className="font-serif text-sm">Free initial consultation</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-white" />
            <span className="font-serif text-sm">Transparent pricing</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-white" />
            <span className="font-serif text-sm">Personalized service</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default function Pricing() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.5 });
  const valueRef = useRef(null);
  const isValueInView = useInView(valueRef, { once: true, amount: 0.3 });

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

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.3
      }
    }
  };

  const pricingCategories = [
    {
      image: websiteImg,
      title: "Websites",
      description: "Custom-coded websites built in days, not months. Fast, responsive, and designed to convert.",
      items: [
        { label: "One-page sites", price: "From $1,299" },
        { label: "Hosting & maintenance", price: "$80/mo" }
      ],
      note: "Hosting includes managed hosting, 1 hour of monthly content edits, and uptime monitoring.",
      featured: false
    },
    {
      image: searchImg,
      title: "Search & Local Presence",
      description: "Get found where it matters. Dominate local search and own your Google presence.",
      items: [
        { label: "SEO & Google Business Profile optimization", price: "$300/mo" }
      ],
      note: "Per location pricing."
    },
    {
      image: socialImg,
      title: "Social Media Management",
      description: "Consistent, strategic content that builds your brand and engages your audience.",
      items: [
        { label: "Standard (2-3 posts/week)", price: "$1,000/mo" },
        { label: "Growth (4-5 posts/week)", price: "$1,800/mo" }
      ],
      note: "All social media packages require a 3-month minimum commitment.",
      featured: true
    },
    {
      image: contentImg,
      title: "Content Creation",
      description: "One content day per quarter. Get a library of curated photos and videos tailored to your goals—ready to use however you need.",
      items: [
        { label: "Quarterly content package", price: "$1,700/qtr" }
      ],
      note: "3-month commitment required."
    },
    {
      image: advertisingImg,
      title: "Ad Campaign Management",
      description: "Strategic ad management across Google, Meta, and other platforms. Data-driven campaigns tailored to your goals and budget.",
      items: [
        { label: "Custom pricing based on your needs", price: "Inquire" }
      ],
      note: "Pricing varies based on platform, campaign size, ad spend, and complexity. Let's discuss your goals to create a custom quote."
    }
  ];

  // Schema markup for pricing page
  const pricingSchema = {
    "@context": "https://schema.org",
    "@type": "PriceSpecification",
    "name": "Marketing Services Pricing",
    "description": "Transparent pricing for web design, SEO, social media management, content creation, and advertising services.",
    "priceCurrency": "USD"
  };

  const serviceOfferSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Marketing Services",
    "description": "Professional marketing services with transparent pricing",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Custom Website Design",
        "description": "One-page custom-coded websites built in days",
        "price": "1299",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "1299",
          "priceCurrency": "USD",
          "unitText": "starting price"
        }
      },
      {
        "@type": "Offer",
        "name": "Website Hosting & Maintenance",
        "description": "Managed hosting with content edits and uptime monitoring",
        "price": "80",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "80",
          "priceCurrency": "USD",
          "unitText": "per month"
        }
      },
      {
        "@type": "Offer",
        "name": "SEO & Local Search Optimization",
        "description": "SEO and Google Business Profile optimization",
        "price": "300",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "300",
          "priceCurrency": "USD",
          "unitText": "per month per location"
        }
      },
      {
        "@type": "Offer",
        "name": "Social Media Management - Standard",
        "description": "2-3 posts per week, strategic content planning",
        "price": "1000",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "1000",
          "priceCurrency": "USD",
          "unitText": "per month"
        }
      },
      {
        "@type": "Offer",
        "name": "Social Media Management - Growth",
        "description": "4-5 posts per week, enhanced engagement strategy",
        "price": "1800",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "1800",
          "priceCurrency": "USD",
          "unitText": "per month"
        }
      },
      {
        "@type": "Offer",
        "name": "Content Creation Package",
        "description": "Quarterly content day with curated photos and videos",
        "price": "1700",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "1700",
          "priceCurrency": "USD",
          "unitText": "per quarter"
        }
      },
      {
        "@type": "Offer",
        "name": "Ad Campaign Management",
        "description": "Strategic ad campaign management across Google, Meta, and other platforms with custom pricing",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "USD",
          "description": "Custom pricing based on platform, campaign size, ad spend, and complexity"
        }
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Pricing - Affordable Marketing Services | Elevate Growth Solutions"
        description="Transparent, affordable pricing for quality marketing services. Custom websites from $1,299, SEO from $300/month, social media from $1,000/month. No hidden fees. Get a free consultation today."
        ogTitle="Marketing Services Pricing | Quality Services, Honest Prices"
        ogDescription="Custom websites starting at $1,299. SEO from $300/month. Social media management from $1,000/month. Transparent pricing with no surprises. Schedule your free consultation."
      />
      <SchemaMarkup type="service" data={serviceOfferSchema} />
      <Navbar />

      <Hero
        backgroundImage={servicesHero}
        imageSrcSet={`${servicesHero768} 768w, ${servicesHero1280} 1280w, ${servicesHero} 1920w`}
        title="Pricing"
        subtitle="Every business is different, so consider these starting points. Let's talk about what you actually need."
        height="60vh"
      />

      {/* Value proposition section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={valueRef}
            className="text-center"
            initial="hidden"
            animate={isValueInView ? "visible" : "hidden"}
          >
            <motion.div
              variants={headerVariants}
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="font-sans text-sm font-medium text-primary">Transparent Pricing</span>
            </motion.div>

            <motion.p
              variants={headerVariants}
              className="font-serif text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Quality marketing shouldn't break the bank. All prices shown are starting points—your actual investment depends on your unique goals and scope.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Pricing cards section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={headerRef} className="text-center mb-12 md:mb-16">
            <motion.h2
              className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4"
              variants={headerVariants}
              initial="hidden"
              animate={isHeaderInView ? "visible" : "hidden"}
            >
              Our Services
            </motion.h2>
            <motion.div
              variants={lineVariants}
              initial="hidden"
              animate={isHeaderInView ? "visible" : "hidden"}
              className="w-24 h-1 bg-primary mx-auto rounded-full origin-center"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {pricingCategories.map((category, index) => (
              <PricingCard
                key={category.title}
                image={category.image}
                title={category.title}
                description={category.description}
                items={category.items}
                note={category.note}
                index={index}
                featured={category.featured}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <PricingCTA />

      <Footer />
    </div>
  );
}
