import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, ArrowRight } from "lucide-react";
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
      className={`relative bg-card rounded-xl p-8 border-2 transition-all duration-300 ${
        tier.featured
          ? 'border-primary shadow-lg shadow-primary/10'
          : 'border-border hover:border-primary/50'
      }`}
    >
      {tier.featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-sans font-medium">
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
        <Button
          className={`w-full font-sans font-semibold ${tier.featured ? '' : 'variant-outline'}`}
          variant={tier.featured ? 'default' : 'outline'}
        >
          Get Started
        </Button>
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
  process,
  faqs
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
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
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
      <section ref={featuresRef} className="py-16 md:py-24 bg-background">
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
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-colors"
              >
                <h3 className="font-display font-semibold text-lg text-foreground mb-3">
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
        <section ref={processRef} className="py-16 md:py-24 bg-muted/30">
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

            <div className="space-y-8">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  animate={isProcessInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="flex items-start gap-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-display font-bold text-lg">
                    {step.step}
                  </div>
                  <div>
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
        </section>
      )}

      {/* Pricing */}
      <section className="py-16 md:py-24 bg-background">
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
            <p className="font-serif text-muted-foreground max-w-2xl mx-auto">
              Transparent pricing with no hidden fees. Choose the option that fits your needs.
            </p>
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
        <section ref={faqRef} className="py-16 md:py-24 bg-muted/30">
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

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6">
              Ready to get started?
            </h2>
            <p className="font-serif text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Let's discuss your project and create something great together.
            </p>
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block"
              >
                <Button
                  size="lg"
                  className="font-sans font-semibold text-lg px-8 py-6 bg-white text-primary hover:bg-white/90"
                >
                  Schedule a Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
