import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import SchemaMarkup from "@/components/SchemaMarkup";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { MessageCircle, Sparkles, ArrowRight, Check } from "lucide-react";

// Services page header
const servicesHero = "https://i.postimg.cc/DZkYhV0c/egs_header_4.png";

// Schema data for services page
const servicesItemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Marketing Services",
  "description": "Full-stack marketing services from Elevate Growth Solutions",
  "itemListElement": [
    {
      "@type": "Service",
      "position": 1,
      "name": "Custom Website Development",
      "description": "Custom websites built and maintained on any platform—custom code, WordPress, or any builder. Fast-loading, secure, and SEO-optimized. Typically delivered in under 30 days.",
      "provider": {"@id": "https://elevategrowth.solutions/#organization"},
      "areaServed": {"@type": "State", "name": "Utah"},
      "serviceType": "Web Development"
    },
    {
      "@type": "Service",
      "position": 2,
      "name": "Search Engine Optimization",
      "description": "Comprehensive SEO including keyword research, on-page optimization, technical audits, and local SEO for Utah businesses.",
      "provider": {"@id": "https://elevategrowth.solutions/#organization"},
      "areaServed": {"@type": "State", "name": "Utah"},
      "serviceType": "SEO Services"
    },
    {
      "@type": "Service",
      "position": 3,
      "name": "Paid Advertising Management",
      "description": "Google Ads and Meta advertising campaigns with detailed ROI tracking and optimization.",
      "provider": {"@id": "https://elevategrowth.solutions/#organization"},
      "serviceType": "Digital Advertising"
    },
    {
      "@type": "Service",
      "position": 4,
      "name": "Branding & Creative Direction",
      "description": "Complete brand identity development including logo design, visual systems, and brand messaging.",
      "provider": {"@id": "https://elevategrowth.solutions/#organization"},
      "serviceType": "Branding"
    }
  ]
};

const servicesFAQSchema = {
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does it take to build a website?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We typically deliver custom websites in under 30 days, compared to the industry standard of 2-3 months. We build on whatever platform fits you best—custom code, WordPress, or another builder—and our efficient process keeps timelines short."
      }
    },
    {
      "@type": "Question",
      "name": "What is included in your marketing services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our full-stack marketing services include website design and development, SEO optimization, Google Ads and Meta advertising management, social media strategy, content creation, and branding."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer ongoing website maintenance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We build and maintain websites on any platform—custom code, WordPress, or any builder—and include hosting and ongoing maintenance in our packages. We can also take over maintenance of a site you already have."
      }
    },
    {
      "@type": "Question",
      "name": "What areas do you serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We serve businesses throughout Utah including St. George, Salt Lake City, Ogden, Provo, and Park City. We also work with clients nationwide who value high-performance custom websites."
      }
    },
    {
      "@type": "Question",
      "name": "Which platform will you build my website on?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Whichever one fits your goals. We build fully custom-coded sites when you want maximum speed, security, and flexibility, and we also build and maintain WordPress, Squarespace, Shopify, and other builder-based sites when you'd rather manage content yourself. We'll recommend the best fit during your consultation—and we can take over a site you already have."
      }
    }
  ]
};

export default function Services() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.5 });

  const services = [
    {
      title: "Website Building, Design & Optimization",
      description: "Custom website development from concept to launch. User experience (UX) focused design with mobile-responsive layouts, fast loading speeds, and SEO optimization built in from the ground up. We create websites that convert visitors into customers and grow with your business.",
      href: "/services/websites"
    },
    {
      title: "Branding & Creative Direction",
      description: "Comprehensive brand identity development including logo design, visual identity systems, brand messaging, and storytelling that connects with your target audience. We create memorable brands that stand out in competitive markets and resonate with your ideal customers.",
      href: "/services/branding"
    },
    {
      title: "SEO Services",
      description: "Comprehensive search engine optimization including keyword research, on-page SEO, technical SEO audits, local SEO, and content optimization. We improve your search rankings, increase organic traffic, and help you get found by customers actively searching for your services.",
      href: "/services/seo"
    },
    {
      title: "Social Media Strategy",
      description: "Platform-specific social media marketing strategies for Instagram, Facebook, LinkedIn, and more. We create engaging content calendars, manage community engagement, track key performance metrics, and build authentic connections that drive brand awareness and conversions.",
      href: "/services/social-media"
    },
    {
      title: "Content Creation",
      description: "Strategic content marketing including blog posts, email newsletters, lead magnets, social media content, and website copy. All content is crafted with your target audience in mind, optimized for SEO, and designed to establish your authority while driving engagement and conversions.",
      href: "/services/content-creation"
    },
    {
      title: "Ad Campaign Management",
      description: "Paid advertising management across Google Ads, Facebook Ads, Instagram Ads, and LinkedIn Ads. We create targeted campaigns with optimized ad copy, audience targeting, budget management, and detailed ROI tracking to maximize your advertising spend and generate qualified leads.",
      href: "/services/ad-campaigns"
    }
  ];

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on scope and complexity. A singular project or audit typically takes 2-3 weeks, website builds are typically completed in under 30 days, and ongoing marketing management is structured in monthly or quarterly engagements. During our discovery call, we'll provide a detailed timeline specific to your project needs."
    },
    {
      question: "What makes Elevate Growth Solutions different?",
      answer: "We're a boutique agency offering full-stack marketing with a personal touch. Unlike larger agencies, you work directly with an experienced marketing strategist who understands your business intimately. We combine strategic thinking with hands-on execution, ensuring every marketing dollar is spent wisely and every campaign is optimized for results."
    },
    {
      question: "Do you work with businesses in my industry?",
      answer: "We've successfully partnered with businesses across various industries including professional services, real estate, finance, wellness, and B2B services. Our strategic approach adapts to any industry, focusing on your unique value proposition and target audience rather than a one-size-fits-all approach."
    },
    {
      question: "What's included in your marketing packages?",
      answer: "We create custom packages based on your specific goals and budget. Services can include strategy development, brand identity, website design and development, SEO optimization, content creation, social media management, and paid advertising. We'll recommend the right mix of services to achieve your growth objectives."
    },
    {
      question: "Can I start with one service and add more later?",
      answer: "Absolutely! Many clients start with a specific need like website design or brand development, then expand to ongoing marketing management. We're flexible and can scale our services as your business grows and your needs evolve."
    },
    {
      question: "How do you measure success?",
      answer: "Success metrics are defined together at the project start and may include website traffic growth, conversion rate improvements, lead generation numbers, social media engagement, search ranking improvements, or revenue attribution. We provide regular reporting and analytics to track progress toward your specific goals."
    }
  ];

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

  return (
    <div className="min-h-screen">
      <SEO
        title="Marketing Services | Elevate Growth Solutions"
        description="Full-stack marketing services: strategy, branding, web design, SEO, social media, ad campaigns, and content creation—built to help your business grow."
        ogTitle="Professional Marketing Services That Drive Results"
        ogDescription="From strategy to execution - discover our full range of marketing services including branding, SEO, social media, and more. Tailored solutions for growing businesses."
      />
      <SchemaMarkup type="custom" data={servicesItemListSchema} />
      <SchemaMarkup type="faq" data={servicesFAQSchema} />
      <Navbar />

      <Hero
        backgroundImage={servicesHero}
        title="Marketing Solutions Designed to Help Your Business Grow"
        subtitle="Strategy. Branding. Execution. Optimization."
        height="70vh"
        isLCP={true}
      />

      <div ref={headerRef} className="pt-12 md:pt-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="font-display font-semibold text-3xl md:text-4xl lg:text-5xl text-center text-foreground mb-12"
            data-testid="text-services-header"
            variants={headerVariants}
            initial="hidden"
            animate={isHeaderInView ? "visible" : "hidden"}
          >
            What We Offer:
          </motion.h2>
        </div>
      </div>

      <ServicesGrid services={services} />

      {/* Don't see your service section */}
      <section className="py-16 md:py-20 bg-muted border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <MessageCircle className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-2xl md:text-3xl text-foreground mb-4">
              Don't see the service you need?
            </h3>
            <p className="font-serif text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Just because it's not listed doesn't mean I can't help. With expertise across all marketing disciplines, I can likely tackle whatever challenge you're facing. Let's talk about what you need.
            </p>
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block"
              >
                <Button
                  size="lg"
                  className="font-sans font-semibold text-base px-8 py-6"
                >
                  Ask About Your Project
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      <FAQ
        items={faqs}
        subtitle="Everything you need to know about working with Elevate Growth Solutions"
      />

      {/* Enhanced CTA Section */}
      <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden bg-primary">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
          >
            <Sparkles className="w-4 h-4 text-white" />
            <span className="font-sans text-sm font-medium text-white">Let's grow together</span>
          </motion.div>

          {/* Main headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight"
          >
            Ready to elevate your marketing?
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Let's have a real conversation about your goals. No pressure, no jargon—just honest advice on what will actually move the needle.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="https://calendar.app.google/yv9h833QYphwvfmJ7" target="_blank" rel="noopener noreferrer">
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
            </a>

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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
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

      <Footer />
    </div>
  );
}
