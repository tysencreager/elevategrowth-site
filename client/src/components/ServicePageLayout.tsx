import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "wouter";

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  note?: string;
  featured?: boolean;
}

interface ServicePageLayoutProps {
  // SEO
  title: string;
  metaDescription: string;
  ogTitle?: string;
  ogDescription?: string;

  // Hero
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  heroImageSrcSet?: string;

  // Main content
  serviceName: string;
  serviceTagline: string;
  serviceDescription: string;

  // What's included
  features: {
    title: string;
    description: string;
  }[];

  // Pricing
  pricing: PricingTier[];
  pricingSubtitle?: string;

  // Optional process steps
  process?: {
    step: number;
    title: string;
    description: string;
  }[];

  // Optional FAQs
  faqs?: {
    question: string;
    answer: string;
  }[];

  // Optional custom content to render before CTA
  children?: ReactNode;
}

function PricingCard({ tier, index }: { tier: PricingTier; index: number }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className={`relative bg-card rounded-xl p-8 border-2 transition-all duration-300 ${
        tier.featured
          ? 'border-primary shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/20'
          : 'border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5'
      }`}
    >
      {tier.featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-sans font-medium flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" />
          Most Popular
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="font-display font-semibold text-xl md:text-2xl text-foreground mb-2">
          {tier.name}
        </h3>
        <div className="font-display font-bold text-3xl md:text-4xl text-primary mb-3">
          {tier.price}
        </div>
        <p className="font-serif text-muted-foreground">
          {tier.description}
        </p>
      </div>

      <ul className="space-y-3 mb-8">
        {tier.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <span className="font-serif text-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      {tier.note && (
        <p className="text-sm font-serif text-muted-foreground bg-primary/5 p-3 rounded-lg mb-6">
          {tier.note}
        </p>
      )}

      <Link href="/contact">
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            className={`w-full font-sans font-semibold ${tier.featured ? '' : 'variant-outline'}`}
            variant={tier.featured ? 'default' : 'outline'}
          >
            Get Started
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </Link>
    </motion.div>
  );
}

export default function ServicePageLayout({
  title,
  metaDescription,
  ogTitle,
  ogDescription,
  heroTitle,
  heroSubtitle,
  heroImage,
  heroImageSrcSet,
  serviceName,
  serviceTagline,
  serviceDescription,
  features,
  pricing,
  pricingSubtitle = "Transparent pricing with no hidden fees. Choose the option that fits your needs.",
  process,
  faqs,
  children
}: ServicePageLayoutProps) {
  const featuresRef = useRef(null);
  const isFeaturesInView = useInView(featuresRef, { once: true, amount: 0.2 });
  const processRef = useRef(null);
  const isProcessInView = useInView(processRef, { once: true, amount: 0.2 });
  const faqRef = useRef(null);
  const isFaqInView = useInView(faqRef, { once: true, amount: 0.2 });

  return (
    <div className="min-h-screen">
      <SEO
        title={title}
        description={metaDescription}
        ogTitle={ogTitle || title}
        ogDescription={ogDescription || metaDescription}
      />
      <Navbar />

      <Hero
        backgroundImage={heroImage}
        imageSrcSet={heroImageSrcSet}
        title={heroTitle}
        subtitle={heroSubtitle}
        height="60vh"
      />

      {/* Service Overview */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block font-sans text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full mb-6">
              {serviceName}
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              {serviceTagline}
            </h2>
            <p className="font-serif text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {serviceDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* What's Included */}
      <section ref={featuresRef} className="py-12 md:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isFeaturesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
              What's Included
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isFeaturesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative bg-card rounded-xl p-6 border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                {/* Animated accent line */}
                <motion.div
                  className="absolute top-0 left-0 h-1 bg-primary rounded-t-xl"
                  initial={{ width: 0 }}
                  animate={isFeaturesInView ? { width: "100%" } : { width: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                />
                <h3 className="font-display font-semibold text-lg text-foreground mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="font-serif text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps (if provided) */}
      {process && process.length > 0 && (
        <section ref={processRef} className="py-12 md:py-16 bg-muted/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isProcessInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
                How It Works
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
            </motion.div>

            <div className="relative">
              {/* Connecting line */}
              <motion.div
                className="absolute left-6 top-12 bottom-12 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary hidden md:block"
                initial={{ scaleY: 0 }}
                animate={isProcessInView ? { scaleY: 1 } : { scaleY: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                style={{ transformOrigin: "top" }}
              />

              <div className="space-y-8">
                {process.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -40 }}
                    animate={isProcessInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="flex items-start gap-6 relative"
                  >
                    <motion.div
                      className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-display font-bold text-lg relative z-10 shadow-lg shadow-primary/20"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {step.step}
                    </motion.div>
                    <div className="pt-1">
                      <h3 className="font-display font-semibold text-xl text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="font-serif text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Pricing */}
      <section className="py-12 md:py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
              Pricing
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
            {pricingSubtitle && (
              <p className="font-serif text-muted-foreground max-w-2xl mx-auto">
                {pricingSubtitle}
              </p>
            )}
          </motion.div>

          <div className={`grid gap-8 ${pricing.length === 1 ? 'max-w-md mx-auto' : pricing.length === 2 ? 'md:grid-cols-2 max-w-3xl mx-auto' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
            {pricing.map((tier, index) => (
              <PricingCard key={index} tier={tier} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQs (if provided) */}
      {faqs && faqs.length > 0 && (
        <section ref={faqRef} className="py-12 md:py-16 bg-muted/30">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isFaqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
            </motion.div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isFaqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-xl p-6 border border-border"
                >
                  <h3 className="font-display font-semibold text-lg text-foreground mb-3">
                    {faq.question}
                  </h3>
                  <p className="font-serif text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Custom content (portfolio, etc.) */}
      {children}

      {/* Enhanced CTA Section */}
      <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden bg-gradient-to-br from-primary via-primary to-[hsl(191,60%,25%)]">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating shapes */}
          <motion.div
            animate={{
              y: [-10, 10, -10],
              rotate: [-5, 5, -5],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 left-[10%] w-32 h-32 bg-white/5 rounded-full blur-2xl"
          />
          <motion.div
            animate={{
              y: [10, -10, 10],
              rotate: [5, -5, 5],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-20 right-[15%] w-48 h-48 bg-white/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              y: [-15, 15, -15],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
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
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
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
            <span className="font-sans text-sm font-medium text-white">Let's create something great</span>
          </motion.div>

          {/* Main headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight"
          >
            Ready to get started?
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Let's discuss your project and create something great together. No pressure, just honest advice.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
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
                  Schedule a Consultation
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
