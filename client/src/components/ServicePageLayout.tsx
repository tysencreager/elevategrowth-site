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

  // Optional custom content to render before Process section
  beforeProcess?: ReactNode;
}

function PricingCard({ tier, index }: { tier: PricingTier; index: number }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className={`relative bg-card rounded-xl p-5 sm:p-6 md:p-8 border-2 transition-all duration-300 ${
        tier.featured
          ? 'border-primary shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/20'
          : 'border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5'
      }`}
      itemScope
      itemType="https://schema.org/Offer"
    >
      {tier.featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white px-3 py-1 sm:px-4 rounded-full text-xs sm:text-sm font-sans font-medium flex items-center gap-1.5">
          <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" aria-hidden="true" />
          Most Popular
        </div>
      )}

      <div className="text-center mb-4 sm:mb-6">
        <h3
          className="font-display font-semibold text-lg sm:text-xl md:text-2xl text-foreground mb-2"
          itemProp="name"
        >
          {tier.name}
        </h3>
        <div
          className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-primary mb-2 sm:mb-3"
          itemProp="price"
        >
          {tier.price}
        </div>
        <p className="font-serif text-sm sm:text-base text-muted-foreground" itemProp="description">
          {tier.description}
        </p>
      </div>

      <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8" role="list" aria-label={`Features included in ${tier.name}`}>
        {tier.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2 sm:gap-3">
            <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
            <span className="font-serif text-sm sm:text-base text-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      {tier.note && (
        <p className="text-xs sm:text-sm font-serif text-muted-foreground bg-primary/5 p-2.5 sm:p-3 rounded-lg mb-4 sm:mb-6">
          {tier.note}
        </p>
      )}

      <Link href="/contact" aria-label={`Get started with ${tier.name}`}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            className={`w-full font-sans font-semibold text-sm sm:text-base ${tier.featured ? '' : 'variant-outline'}`}
            variant={tier.featured ? 'default' : 'outline'}
          >
            Get Started
            <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
          </Button>
        </motion.div>
      </Link>
    </motion.article>
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
  children,
  beforeProcess
}: ServicePageLayoutProps) {
  const featuresRef = useRef(null);
  const isFeaturesInView = useInView(featuresRef, { once: true, amount: 0.2 });
  const processRef = useRef(null);
  const isProcessInView = useInView(processRef, { once: true, amount: 0.2 });
  const faqRef = useRef(null);
  const isFaqInView = useInView(faqRef, { once: true, amount: 0.2 });

  // Schema.org structured data for the service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": heroTitle,
    "description": metaDescription,
    "provider": {
      "@type": "Organization",
      "name": "Elevate Growth Solutions",
      "url": "https://elevategrowth.solutions"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${heroTitle} Pricing`,
      "itemListElement": pricing.map((tier, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": tier.name,
          "description": tier.description
        },
        "price": tier.price.replace(/[^0-9.]/g, '') || "0",
        "priceCurrency": "USD",
        "position": index + 1
      }))
    }
  };

  // FAQ Schema
  const faqSchema = faqs && faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  return (
    <div className="min-h-screen">
      <SEO
        title={title}
        description={metaDescription}
        ogTitle={ogTitle || title}
        ogDescription={ogDescription || metaDescription}
      />

      {/* Structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <Navbar />

      <Hero
        backgroundImage={heroImage}
        imageSrcSet={heroImageSrcSet}
        title={heroTitle}
        subtitle={heroSubtitle}
        height="60vh"
      />

      {/* Service Overview */}
      <section
        className="py-10 sm:py-12 md:py-16 bg-gradient-to-b from-primary/5 to-background"
        aria-labelledby="service-overview-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block font-sans text-xs sm:text-sm font-medium text-primary bg-primary/10 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6">
              {serviceName}
            </span>
            <h2
              id="service-overview-heading"
              className="font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 sm:mb-6"
            >
              {serviceTagline}
            </h2>
            <p className="font-serif text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {serviceDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* What's Included */}
      <section
        ref={featuresRef}
        className="py-10 sm:py-12 md:py-16 bg-background"
        aria-labelledby="features-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isFeaturesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2
              id="features-heading"
              className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-foreground mb-3 sm:mb-4"
            >
              What's Included
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isFeaturesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative bg-card rounded-xl p-4 sm:p-5 md:p-6 border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                {/* Animated accent line */}
                <motion.div
                  className="absolute top-0 left-0 h-1 bg-primary rounded-t-xl"
                  initial={{ width: 0 }}
                  animate={isFeaturesInView ? { width: "100%" } : { width: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  aria-hidden="true"
                />
                <h3 className="font-display font-semibold text-base sm:text-lg text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="font-serif text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Custom content before process (portfolio, etc.) */}
      {beforeProcess}

      {/* Process Steps (if provided) */}
      {process && process.length > 0 && (
        <section
          ref={processRef}
          className="py-10 sm:py-12 md:py-16 bg-muted/30"
          aria-labelledby="process-heading"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isProcessInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8 sm:mb-12"
            >
              <h2
                id="process-heading"
                className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-foreground mb-3 sm:mb-4"
              >
                How It Works
              </h2>
              <div className="w-20 sm:w-24 h-1 bg-primary mx-auto rounded-full" />
            </motion.div>

            <div className="relative">
              {/* Connecting line - hidden on mobile */}
              <motion.div
                className="absolute left-5 sm:left-6 top-10 sm:top-12 bottom-10 sm:bottom-12 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary hidden sm:block"
                initial={{ scaleY: 0 }}
                animate={isProcessInView ? { scaleY: 1 } : { scaleY: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                style={{ transformOrigin: "top" }}
                aria-hidden="true"
              />

              <ol className="space-y-6 sm:space-y-8" role="list">
                {process.map((step, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -40 }}
                    animate={isProcessInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="flex items-start gap-4 sm:gap-6 relative"
                  >
                    <motion.div
                      className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary text-white rounded-full flex items-center justify-center font-display font-bold text-base sm:text-lg relative z-10 shadow-lg shadow-primary/20"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                      aria-hidden="true"
                    >
                      {step.step}
                    </motion.div>
                    <div className="pt-0.5 sm:pt-1 flex-1">
                      <h3 className="font-display font-semibold text-lg sm:text-xl text-foreground mb-1.5 sm:mb-2">
                        <span className="sr-only">Step {step.step}: </span>
                        {step.title}
                      </h3>
                      <p className="font-serif text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      )}

      {/* Pricing */}
      <section
        className="py-10 sm:py-12 md:py-16 bg-background"
        aria-labelledby="pricing-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2
              id="pricing-heading"
              className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-foreground mb-3 sm:mb-4"
            >
              Pricing
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-primary mx-auto rounded-full mb-4 sm:mb-6" />
            {pricingSubtitle && (
              <p className="font-serif text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                {pricingSubtitle}
              </p>
            )}
          </motion.div>

          <div className={`grid gap-4 sm:gap-6 md:gap-8 ${pricing.length === 1 ? 'max-w-md mx-auto' : pricing.length === 2 ? 'sm:grid-cols-2 max-w-3xl mx-auto' : 'sm:grid-cols-2 lg:grid-cols-3'}`}>
            {pricing.map((tier, index) => (
              <PricingCard key={index} tier={tier} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQs (if provided) */}
      {faqs && faqs.length > 0 && (
        <section
          ref={faqRef}
          className="py-10 sm:py-12 md:py-16 bg-muted/30"
          aria-labelledby="faq-heading"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isFaqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8 sm:mb-12"
            >
              <h2
                id="faq-heading"
                className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-foreground mb-3 sm:mb-4"
              >
                Frequently Asked Questions
              </h2>
              <div className="w-20 sm:w-24 h-1 bg-primary mx-auto rounded-full" />
            </motion.div>

            <dl className="space-y-4 sm:space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isFaqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-xl p-4 sm:p-5 md:p-6 border border-border"
                >
                  <dt className="font-display font-semibold text-base sm:text-lg text-foreground mb-2 sm:mb-3">
                    {faq.question}
                  </dt>
                  <dd className="font-serif text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </section>
      )}

      {/* Custom content (portfolio, etc.) */}
      {children}

      {/* Enhanced CTA Section */}
      <section
        className="relative py-16 sm:py-20 md:py-28 lg:py-32 overflow-hidden bg-gradient-to-br from-primary via-primary to-[hsl(191,60%,25%)]"
        aria-labelledby="cta-heading"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
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
            className="absolute top-20 left-[10%] w-24 sm:w-32 h-24 sm:h-32 bg-white/5 rounded-full blur-2xl"
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
            className="absolute bottom-20 right-[15%] w-32 sm:w-48 h-32 sm:h-48 bg-white/5 rounded-full blur-3xl"
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
            className="absolute top-1/2 right-[5%] w-20 sm:w-24 h-20 sm:h-24 bg-white/10 rounded-full blur-xl"
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-white/5 rounded-full blur-3xl" />
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
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-6 sm:mb-8"
          >
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" aria-hidden="true" />
            <span className="font-sans text-xs sm:text-sm font-medium text-white">Let's create something great</span>
          </motion.div>

          {/* Main headline */}
          <motion.h2
            id="cta-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 sm:mb-6 leading-tight"
          >
            Ready to get started?
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-lg sm:text-xl md:text-2xl text-white/90 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Let's discuss your project and create something great together. No pressure, just honest advice.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <Link href="/contact" aria-label="Schedule a consultation">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  className="font-sans font-semibold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 bg-white text-primary hover:bg-white/90 shadow-xl shadow-black/20 group w-full sm:w-auto"
                >
                  Schedule a Consultation
                  <motion.span
                    className="inline-block ml-2"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                  >
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </motion.span>
                </Button>
              </motion.div>
            </Link>

            <a href="mailto:tysen@elevategrowth.solutions" aria-label="Send an email directly">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="font-sans font-semibold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 bg-transparent border-2 border-white/50 text-white hover:bg-white/10 hover:border-white w-full sm:w-auto"
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
            className="mt-8 sm:mt-12 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 text-white/70"
          >
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white" aria-hidden="true" />
              <span className="font-serif text-xs sm:text-sm">Free initial consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white" aria-hidden="true" />
              <span className="font-serif text-xs sm:text-sm">Transparent pricing</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white" aria-hidden="true" />
              <span className="font-serif text-xs sm:text-sm">Personalized service</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
