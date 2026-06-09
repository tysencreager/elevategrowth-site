import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { BokehEffect, FloatingOrbs, WaveDivider, GradientTransition } from "@/components/decorative";
import { Zap, Shield, TrendingUp, Clock, DollarSign, MapPin, ArrowRight } from "lucide-react";

export default function WhyCustomCoded() {
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

  const comparisonData = {
    wordpress: {
      title: "A Bloated, Unoptimized Site",
      items: [
        "Loads 2-5MB of data per page",
        "Makes 50-100+ HTTP requests",
        "Takes 3-8 seconds to fully load"
      ]
    },
    customCoded: {
      title: "A Site We Build & Optimize",
      items: [
        "Load under 100KB typically",
        "Make 10-20 HTTP requests",
        "Fully load in under 1 second"
      ]
    }
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Why Work With Elevate Growth Solutions | Custom Websites on Any Platform"
        description="Discover why businesses choose Elevate Growth Solutions for fast, high-performing custom websites—built and maintained on any platform, from custom code to WordPress and other builders."
        ogImage="https://www.elevategrowth.solutions/egs-social-sharing.png"
      />
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
            Websites Built to Perform—on Any Platform
          </motion.h1>

          <motion.p
            className="font-serif text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
            custom={0.1}
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
          >
            Your website isn't just a brochure—it's infrastructure. At Elevate Growth Solutions, we build and maintain high-performing websites on any platform—from fully custom code to WordPress and other builders. The result? Sites that load fast, rank higher, and are built to last.
          </motion.p>
        </div>

        <GradientTransition from="transparent" to="hsl(var(--muted) / 0.3)" height="80px" />
      </section>

      {/* Featured Image Section */}
      <section className="relative py-12 md:py-16 bg-muted/30 overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src="https://i.postimg.cc/j50kTV2H/website_photo.png"
              alt="Custom website development showcasing clean, conversion-focused design"
              className="w-full h-auto"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* What Makes Our Websites Different */}
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
            <h2 className="font-display font-semibold text-3xl md:text-4xl text-foreground mb-6">
              What Makes Our Websites Different?
            </h2>
            <div className="space-y-4 font-serif text-lg text-muted-foreground leading-relaxed">
              <p>
                We meet you where you are. Want a fully custom-coded site for maximum speed and security? We build it. Prefer the flexibility of WordPress, Squarespace, Shopify, or another builder you can manage yourself? We build and maintain that too—and we can take over a site you already have.
              </p>
              <p>
                Whatever platform we use, the goal is the same: a fast, clean, conversion-focused website with no unnecessary bloat. We optimize every build—stripping out what slows it down and keeping only what helps your visitors take action.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Speed Advantage */}
      <section className="relative py-16 md:py-24 bg-background overflow-hidden">
        <FloatingOrbs variant="light" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Zap className="w-8 h-8 text-primary" />
            </div>
            <h2 className="font-display font-semibold text-3xl md:text-4xl text-foreground mb-4">
              The Speed Advantage: Why Every Second Matters
            </h2>
            <p className="font-serif text-lg text-muted-foreground max-w-3xl mx-auto">
              Google's research shows that a 1-second delay in mobile load time can reduce conversions by up to 20%. When you're paying for Google Ads or Facebook traffic, slow pages literally cost you money.
            </p>
          </motion.div>

          {/* Comparison Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="bg-red-50 border border-red-200 rounded-xl p-8"
            >
              <h3 className="font-display font-semibold text-xl text-red-800 mb-4">
                {comparisonData.wordpress.title}
              </h3>
              <ul className="space-y-3">
                {comparisonData.wordpress.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 font-serif text-red-700">
                    <span className="text-red-400 mt-1">&#x2717;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="bg-green-50 border border-green-200 rounded-xl p-8"
            >
              <h3 className="font-display font-semibold text-xl text-green-800 mb-4">
                {comparisonData.customCoded.title}
              </h3>
              <ul className="space-y-3">
                {comparisonData.customCoded.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 font-serif text-green-700">
                    <span className="text-green-500 mt-1">&#x2713;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Security Section */}
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
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h2 className="font-display font-semibold text-3xl md:text-4xl text-foreground">
                Security You Can Count On
              </h2>
            </div>
            <div className="space-y-4 font-serif text-lg text-muted-foreground leading-relaxed">
              <p>
                Most sites that get hacked are running outdated software or weak passwords—and most owners don't have time to keep up with the constant cycle of security updates.
              </p>
              <p>
                When security is a top priority, we can build a hardened, custom-coded static site with no database, admin login, or plugins to exploit. And if you're on WordPress or another platform, we harden it, keep it updated, and monitor it—so your site stays protected either way.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Google Rankings Section */}
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
                Better Google Rankings: Core Web Vitals
              </h2>
            </div>
            <div className="space-y-4 font-serif text-lg text-muted-foreground leading-relaxed">
              <p>
                Google now measures your site's user experience through Core Web Vitals—metrics like Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS). Sites that score poorly get ranked lower.
              </p>
              <p>
                The sites we build excel at these metrics because we control every element—trimming bloat, eliminating layout shifts, and keeping response times fast, no matter which platform we build on.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Real Cost Section */}
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
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <h2 className="font-display font-semibold text-3xl md:text-4xl text-foreground">
                The Real Cost of "Cheap" Websites
              </h2>
            </div>
            <div className="space-y-4 font-serif text-lg text-muted-foreground leading-relaxed">
              <p>
                A cheap, do-it-yourself site can seem affordable upfront—until you factor in the hidden costs: premium plugins and add-ons, ongoing security monitoring, performance fixes, and the leads you lose to slow load times.
              </p>
              <p>
                We build and maintain your site so it just works—year after year. One predictable monthly plan covers hosting, updates, and edits, with no surprise fees and no platform headaches landing on your desk.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Built for Utah Section */}
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
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h2 className="font-display font-semibold text-3xl md:text-4xl text-foreground">
                Built for Utah Businesses
              </h2>
            </div>
            <p className="font-serif text-lg text-muted-foreground leading-relaxed">
              Whether you're a contractor in St. George, a tech startup in Silicon Slopes, or a professional service firm in Ogden, your website needs to compete locally and load fast on Utah's mobile networks. We build sites optimized for your specific market—with local SEO baked in from the start.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
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
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h2 className="font-display font-semibold text-3xl md:text-4xl text-foreground">
                How Long Does It Take?
              </h2>
            </div>
            <p className="font-serif text-lg text-muted-foreground leading-relaxed">
              Most agencies quote 2-3 months for a custom website. We typically deliver in under 30 days. Because we focus on exactly what you need—on whatever platform fits you best—we move fast without cutting corners.
            </p>
          </motion.div>
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
            Ready for a Website That Actually Performs?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Let's talk about what a custom website can do for your business. No obligation, no pressure—just a conversation about your goals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a href="https://calendar.app.google/yv9h833QYphwvfmJ7" target="_blank" rel="noopener noreferrer">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block"
              >
                <Button
                  size="lg"
                  className="font-sans font-semibold text-lg px-8 py-6 bg-white text-primary hover:bg-white/90 shadow-xl shadow-black/20 group"
                >
                  Schedule a Discovery Call
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </a>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
