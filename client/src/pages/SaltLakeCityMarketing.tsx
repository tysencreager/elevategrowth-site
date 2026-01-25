import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import SchemaMarkup from "@/components/SchemaMarkup";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { BokehEffect, FloatingOrbs, WaveDivider, GradientTransition } from "@/components/decorative";
import { Rocket, Code, TrendingUp, Briefcase, Stethoscope, DollarSign, ArrowRight, Check } from "lucide-react";

// Schema for Salt Lake City location page
const slcSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://elevategrowth.solutions/#organization",
  "name": "Elevate Growth Solutions",
  "url": "https://elevategrowth.solutions/salt-lake-city-marketing",
  "telephone": "+1-803-600-4806",
  "areaServed": [
    {"@type": "City", "name": "Salt Lake City", "containedInPlace": {"@type": "State", "name": "Utah"}},
    {"@type": "City", "name": "Draper", "containedInPlace": {"@type": "State", "name": "Utah"}},
    {"@type": "City", "name": "Lehi", "containedInPlace": {"@type": "State", "name": "Utah"}},
    {"@type": "City", "name": "Sandy", "containedInPlace": {"@type": "State", "name": "Utah"}},
    {"@type": "City", "name": "Murray", "containedInPlace": {"@type": "State", "name": "Utah"}},
    {"@type": "AdministrativeArea", "name": "Salt Lake County", "containedInPlace": {"@type": "State", "name": "Utah"}},
    {"@type": "AdministrativeArea", "name": "Utah County", "containedInPlace": {"@type": "State", "name": "Utah"}}
  ]
};

const industries = [
  { icon: Rocket, name: "Point of the Mountain SaaS startups" },
  { icon: Briefcase, name: "Lehi and Draper tech consultancies" },
  { icon: Code, name: "E-commerce brands scaling beyond Shopify" },
  { icon: Stethoscope, name: "Health tech and telehealth platforms" },
  { icon: DollarSign, name: "Fintech disrupting traditional banking" }
];

export default function SaltLakeCityMarketing() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay
      }
    })
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Salt Lake City Web Design & Marketing | Elevate Growth Solutions"
        description="Performance-focused web design and marketing for Salt Lake City startups and growing businesses. Custom-coded sites that convert paid traffic and scale with you."
        ogImage="https://i.postimg.cc/sDW2ZZpm/EGS-SOCIAL-SHARING-IMAGE.png"
      />
      <SchemaMarkup type="custom" data={slcSchema} />
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-28 md:pt-36 lg:pt-44 pb-16 md:pb-24 bg-background overflow-hidden">
        <BokehEffect opacity={0.35} />
        <FloatingOrbs variant="light" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight"
            variants={fadeInUp}
            custom={0}
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
          >
            High-Performance Marketing for Salt Lake City & Silicon Slopes
          </motion.h1>

          <motion.p
            className="font-serif text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
            custom={0.1}
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
          >
            In Utah's most competitive market, your website isn't just a presence—it's a conversion engine. Startups live and die by Customer Acquisition Cost. If your landing pages load slow, you're burning ad spend.
          </motion.p>
        </div>

        <GradientTransition from="transparent" to="hsl(var(--muted) / 0.3)" height="80px" />
      </section>

      {/* Tech-Savvy Section */}
      <section className="relative py-16 md:py-24 bg-muted/30 overflow-hidden">
        <WaveDivider position="top" fillColor="hsl(var(--background))" />
        <BokehEffect opacity={0.25} />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <h2 className="font-display font-semibold text-3xl md:text-4xl text-foreground">
                Built for Silicon Slopes Standards
              </h2>
            </div>
            <div className="space-y-4 font-serif text-lg text-muted-foreground leading-relaxed">
              <p>
                When your neighbors are Qualtrics, Podium, and Pluralsight, you can't show up with a Squarespace template. Silicon Slopes companies—from the Thanksgiving Point tech corridor through Lehi, Draper, and Sandy—have technical founders who know the difference between a page builder and production-grade code.
              </p>
              <p>
                You understand what headless CMS means. You've probably tried Webflow or Framer and hit their limits when integrating with your product. You need sub-second page loads because you're running paid traffic and every millisecond impacts conversion.
              </p>
              <p>
                We speak your language: Jamstack architecture, API integrations, React-based static generation. Our custom-coded sites are built for performance from the ground up—no WordPress database queries, no page builder bloat, just clean code that converts paid traffic into demos and signups.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scale-Up Section */}
      <section className="relative py-16 md:py-24 bg-background overflow-hidden">
        <FloatingOrbs variant="light" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h2 className="font-display font-semibold text-3xl md:text-4xl text-foreground">
                The Sweet Spot Between MVP and Enterprise
              </h2>
            </div>
            <div className="space-y-4 font-serif text-lg text-muted-foreground leading-relaxed">
              <p>
                You've closed your seed round. Your MVP site got you to product-market fit, but now you're scaling paid acquisition and that WordPress theme is killing your conversion rates. The enterprise agencies on 400 South want $75,000 for a rebrand. You're not there yet.
              </p>
              <p>
                We work with Silicon Slopes startups at the inflection point: post-seed, pre-Series B companies that need marketing sites designed specifically to convert paid traffic—landing pages that load in under a second, A/B testing infrastructure, and analytics that prove ROI to your board.
              </p>
              <p>
                Our packages are priced for Series A budgets, not enterprise marketing departments. You get the performance your growth team needs without the overhead of a downtown SLC agency.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="relative py-16 md:py-24 bg-muted/30 overflow-hidden">
        <WaveDivider position="top" fillColor="hsl(var(--background))" />
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
              Industries We Serve in the Salt Lake Valley
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4 p-6 bg-background rounded-xl border border-border/50"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <industry.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="font-serif text-foreground">{industry.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden bg-gradient-to-br from-primary via-primary to-[hsl(191,60%,25%)]">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ y: [-10, 10, -10], rotate: [-5, 5, -5] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-[10%] w-32 h-32 bg-white/5 rounded-full blur-2xl"
          />
          <motion.div
            animate={{ y: [10, -10, 10], rotate: [5, -5, 5] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-20 right-[15%] w-48 h-48 bg-white/5 rounded-full blur-3xl"
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-4xl md:text-5xl text-white mb-6 leading-tight"
          >
            Let's Talk About Your Growth Goals
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Whether you're optimizing for CAC, preparing for your next funding round, or just need a website that actually converts—we can help.
          </motion.p>

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
                  Schedule a Strategy Call
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
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
              <span className="font-serif text-sm">Performance-focused</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-white" />
              <span className="font-serif text-sm">Startup-friendly pricing</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-white" />
              <span className="font-serif text-sm">Fast delivery</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
