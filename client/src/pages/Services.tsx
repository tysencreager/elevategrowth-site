import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { MessageCircle } from "lucide-react";
// Optimized WebP images with responsive sizes
import servicesHero from "@assets/services_hero_team_1920.webp";
import servicesHero768 from "@assets/services_hero_team_768.webp";
import servicesHero1280 from "@assets/services_hero_team_1280.webp";

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
      answer: "Project timelines vary based on scope and complexity. A singular project or audit typically takes 1-2 weeks, website builds range from 2-4 weeks, and ongoing marketing management is structured in monthly or quarterly engagements. During our discovery call, we'll provide a detailed timeline specific to your project needs."
    },
    {
      question: "What makes Elevate Growth Solutions different?",
      answer: "We're a boutique agency offering full-stack marketing with a personal touch. Unlike larger agencies, you work directly with an experienced marketing strategist who understands your business intimately. We combine strategic thinking with hands-on execution, ensuring every marketing dollar is spent wisely and every campaign is optimized for results."
    },
    {
      question: "Do you work with businesses in my industry?",
      answer: "We've successfully partnered with businesses across various industries including professional services, real estate, finance, wellness, and B2B services. Our strategic approach adapts to any industry, focusing on your unique value proposition and target audience rather than one-size-fits-all templates."
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
        title="Marketing Services - Full-Stack Digital Marketing | Elevate Growth Solutions"
        description="Comprehensive marketing services including full-stack marketing management, branding, web design, SEO, social media strategy, ad campaigns, and content creation. Expert solutions designed to help your business grow."
        ogTitle="Professional Marketing Services That Drive Results"
        ogDescription="From strategy to execution - discover our full range of marketing services including branding, SEO, social media, and more. Tailored solutions for growing businesses."
      />
      <Navbar />

      <Hero
        backgroundImage={servicesHero}
        imageSrcSet={`${servicesHero768} 768w, ${servicesHero1280} 1280w, ${servicesHero} 1920w`}
        title="Marketing Solutions Designed to Help Your Business Grow"
        subtitle="Strategy. Branding. Execution. Optimization."
        height="70vh"
        isLCP={true}
      />

      <div ref={headerRef} className="pt-12 md:pt-16 bg-background overflow-hidden">
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
      <section className="py-16 md:py-20 bg-gradient-to-b from-background to-primary/5">
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

      <CTASection
        title="Ready to elevate your marketing?"
        ctaText="Get In Touch"
        ctaHref="mailto:tysen@elevategrowth.solutions"
        backgroundColor="bg-primary"
      />

      <Footer />
    </div>
  );
}
