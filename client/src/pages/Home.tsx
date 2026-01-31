import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueProp from "@/components/ValueProp";
import Process, { Phone, Lightbulb, Rocket, TrendingUp } from "@/components/Process";
import LeadMagnet from "@/components/LeadMagnet";
import LogoBanner from "@/components/LogoBanner";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import SchemaMarkup from "@/components/SchemaMarkup";
import { BokehEffect, FloatingOrbs, WaveDivider, GradientTransition } from "@/components/decorative";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
// Optimized WebP images
import valueImage from "@assets/value_prop.webp";
import ctaImage from "@assets/cta_background.webp";
import ctaImage768 from "@assets/cta_background_768.webp";

// Hero images from public folder - matches preload hints in index.html
const heroImage = "/hero_bw_1920.webp";
const heroImage768 = "/hero_bw_768.webp";

const clientLogos = [
  { src: "https://i.postimg.cc/3N6Kn78Y/Dial_In_Logo_png.png", alt: "Dial In logo" },
  { src: "https://i.postimg.cc/8FCq8ydW/1.png", alt: "Sharing Success logo" },
  { src: "https://i.postimg.cc/xkdWrsGN/2.png", alt: "Luneta logo" },
  { src: "https://i.postimg.cc/hJGHFC8m/3.png", alt: "EZS logo" },
  { src: "https://i.postimg.cc/QBMRL6gT/4.png", alt: "Summit Builders logo" },
  { src: "https://i.postimg.cc/94fv3xPy/5.png", alt: "Cascade Properties logo" },
  { src: "https://i.postimg.cc/d7SgJ8n3/6.png", alt: "Desert View Homes logo" },
  { src: "https://i.postimg.cc/p913PDky/7.png", alt: "Mountain West Services logo" },
  { src: "https://i.postimg.cc/KKYdX97n/8.png", alt: "Utah Business Group logo" },
  { src: "https://i.postimg.cc/qtZWp8Qz/9.png", alt: "Red Rock Ventures logo" },
  { src: "https://i.postimg.cc/p913PDk5/10.png", alt: "Pioneer Financial logo" },
  { src: "https://i.postimg.cc/CZ69wjJf/11.png", alt: "Wasatch Consulting logo" },
  { src: "https://i.postimg.cc/Lq0Gmzv1/12.png", alt: "Beehive Marketing logo" },
  { src: "https://i.postimg.cc/d7SgJ8nd/13.png", alt: "Southern Utah Realty logo" },
  { src: "https://i.postimg.cc/f3g1Mx5m/14.png", alt: "Canyon Creek Dental logo" }
];

const testimonials = [
  {
    quote: "Working with Tysen was seamless from start to finish. She quickly understood the vision for my brand and delivered thoughtful, strategic designs that aligned perfectly with my marketing goals. Her creativity and professionalism made the entire process easy and efficient. I'm so impressed with the final product!",
    author: "Cassidy",
    role: "Loan Officer"
  },
  {
    quote: "My business has skyrocketed since Tysen (Elevate Growth Solutions) created my website. It's seriously SO stunning and seamless. Hire her! You will not regret it.",
    author: "McKenzie M."
  },
  {
    quote: "I have loved working with Tysen, she's incredible! If you need help with marketing, she's your gal!",
    author: "Cassidy G."
  },
  {
    quote: "So grateful Tysen built my site. I have no regrets hiring her, she has done an incredible job!",
    author: "Jessica P."
  },
  {
    quote: "From the most basic detail to the biggest detail in marketing a business and it being a success, Tysen doesn't shy away from any of it. Her confidence in you and your business gives a new growth within you and lights a fire under you that helps you succeed.",
    author: "Abagail D."
  }
];

export default function Home() {
  const processSteps = [
    {
      icon: Phone,
      title: "Discovery Call",
      description: "We start with a conversation to understand your goals, challenges, and vision for your brand."
    },
    {
      icon: Lightbulb,
      title: "Strategy Development",
      description: "We craft a custom marketing strategy tailored to your business objectives and target audience."
    },
    {
      icon: Rocket,
      title: "Execution & Launch",
      description: "We bring your strategy to life with expert design, development, and campaign implementation."
    },
    {
      icon: TrendingUp,
      title: "Optimization & Growth",
      description: "We continuously analyze performance and refine strategies to maximize your marketing ROI."
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Web Design Agency & Full-Stack Marketing | Elevate Growth Solutions"
        description="Boutique web design agency and full-stack marketing services for small businesses, startups, and entrepreneurs. Custom-coded websites typically delivered in under 30 days. SEO, social media, branding, and conversion-focused design. Serving Salt Lake City and nationwide."
        ogTitle="Web Design & Full-Stack Marketing for Small Businesses | Elevate Growth Solutions"
        ogDescription="Custom-coded websites typically delivered in under 30 days. Boutique marketing agency providing web design, SEO, social media management, and branding for small businesses and startups."
      />
      <SchemaMarkup type="marketingAgency" />
      <Navbar />

      <Hero
        backgroundImage={heroImage}
        imageSrcSet={`${heroImage768} 768w, ${heroImage} 1920w`}
        title="Custom-Coded Web Design & Full-Stack Marketing for Utah Businesses"
        subtitle="Web Design. SEO. Social Media. Branding. Ad Campaigns."
        ctaText="See Our Services"
        ctaHref="/services"
        isLCP={true}
      />

      {/* Logo Banner - Social proof right after hero */}
      <div className="relative overflow-hidden">
        <FloatingOrbs variant="light" />
        <LogoBanner
          logos={clientLogos}
          title="Trusted By Growing Businesses"
        />
      </div>

      {/* Wave divider before Value Prop */}
      <div className="relative bg-background">
        <WaveDivider position="top" fillColor="hsl(var(--muted) / 0.3)" />
      </div>

      <div className="relative overflow-hidden">
        <BokehEffect opacity={0.4} />
        <ValueProp
          image={valueImage}
          imageAlt="Professional working on laptop"
          title="Web Design. SEO. Social Media. Branding. Ad Campaigns."
          description="Tired of being just a number at big agencies? At Elevate Growth Solutions, we're a boutique firm that gives every client the care and attention they deserve. We handle everything—web design, SEO, social media, branding, and ad campaigns—so you can save time, relieve stress, and focus on what you do best: running your business. Whether you're launching your first website or ready to scale with confidence, we're here to help you generate more leads and grow."
        />
      </div>

      {/* Gradient transition before Process */}
      <div className="relative h-20 bg-background">
        <GradientTransition from="transparent" to="hsl(var(--primary) / 0.05)" height="80px" />
      </div>

      <div className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-transparent">
        <FloatingOrbs variant="light" />
        <Process
          steps={processSteps}
          subtitle="A simple, proven approach to elevating your brand"
        />
      </div>

      {/* Geographic Section - Utah Locations */}
      <section className="relative py-16 md:py-24 bg-background overflow-hidden">
        <BokehEffect opacity={0.25} />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12"
          >
            <h2 className="font-display font-semibold text-3xl md:text-4xl text-foreground mb-4">
              Serving Utah Businesses Statewide
            </h2>
            <p className="font-serif text-lg text-muted-foreground max-w-2xl mx-auto">
              From the booming construction markets of St. George to the tech corridors of Silicon Slopes and the industrial strength of Ogden—we help Utah businesses compete and win. Local knowledge, national-quality execution.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "St. George", href: "/st-george-web-design", description: "Washington County" },
              { name: "Salt Lake City", href: "/salt-lake-city-marketing", description: "Silicon Slopes" },
              { name: "Ogden", href: "/ogden-web-design", description: "Weber County" }
            ].map((location, index) => (
              <motion.div
                key={location.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={location.href}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    className="group block p-6 bg-muted/30 rounded-xl border border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-xl text-foreground group-hover:text-primary transition-colors">
                          {location.name}
                        </h3>
                        <p className="font-serif text-sm text-muted-foreground">
                          {location.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-primary font-serif text-sm">
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="relative overflow-hidden">
        <BokehEffect opacity={0.3} />
        <LeadMagnet
          title="Free Personalized Website Video Audit"
          description="Get a custom 5-10 minute video walkthrough of your website. I'll show you exactly what's working, what's costing you leads, and specific fixes to improve conversions—completely free, no strings attached."
          ctaText="Request Your Free Audit"
        />
      </div>

      {/* Wave divider before testimonials */}
      <div className="relative bg-muted/30 h-16">
        <WaveDivider position="top" fillColor="hsl(var(--background))" />
      </div>

      {/* Testimonial Carousel - Rotating testimonials */}
      <div className="relative overflow-hidden bg-muted/30">
        <FloatingOrbs variant="light" />
        <TestimonialCarousel testimonials={testimonials} autoPlayInterval={6000} />
        <GradientTransition from="transparent" to="hsl(var(--background))" height="60px" />
      </div>

      <CTASection
        backgroundImage={ctaImage}
        imageSrcSet={`${ctaImage768} 768w, ${ctaImage} 1920w`}
        title="Let's build something that stands the test of time."
        ctaText="Contact Us"
        ctaHref="mailto:tysen@elevategrowth.solutions"
      />

      <Footer />
    </div>
  );
}
