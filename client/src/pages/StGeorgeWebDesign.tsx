import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import SchemaMarkup from "@/components/SchemaMarkup";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { BokehEffect, FloatingOrbs, WaveDivider, GradientTransition } from "@/components/decorative";
import { Building2, Home, Wrench, Stethoscope, Sun, Palmtree, ArrowRight, Check } from "lucide-react";

// Schema for St. George location page
const stGeorgeSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://elevategrowth.solutions/#organization",
  "name": "Elevate Growth Solutions",
  "url": "https://elevategrowth.solutions/st-george-web-design",
  "telephone": "+1-803-600-4806",
  "areaServed": [
    {"@type": "City", "name": "St. George", "containedInPlace": {"@type": "State", "name": "Utah"}},
    {"@type": "City", "name": "Santa Clara", "containedInPlace": {"@type": "State", "name": "Utah"}},
    {"@type": "City", "name": "Ivins", "containedInPlace": {"@type": "State", "name": "Utah"}},
    {"@type": "City", "name": "Washington", "containedInPlace": {"@type": "State", "name": "Utah"}},
    {"@type": "City", "name": "Hurricane", "containedInPlace": {"@type": "State", "name": "Utah"}},
    {"@type": "City", "name": "La Verkin", "containedInPlace": {"@type": "State", "name": "Utah"}},
    {"@type": "AdministrativeArea", "name": "Washington County", "containedInPlace": {"@type": "State", "name": "Utah"}}
  ]
};

const industries = [
  { icon: Home, name: "Custom home builders in Entrada and Stone Cliff" },
  { icon: Building2, name: "Real estate agents serving California transplants" },
  { icon: Wrench, name: "HVAC contractors battling 115° summers" },
  { icon: Palmtree, name: "Xeriscaping and desert landscaping specialists" },
  { icon: Stethoscope, name: "Healthcare practices near Dixie Regional" },
  { icon: Sun, name: "Zion-adjacent tourism and adventure outfitters" }
];

export default function StGeorgeWebDesign() {
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
        title="Web Design & Marketing Services in St. George, Utah | Elevate Growth Solutions"
        description="St. George's fastest-growing businesses need websites that keep up. Custom-coded web design, SEO, and marketing for Washington County contractors, real estate, and service businesses."
        ogImage="https://i.postimg.cc/sDW2ZZpm/EGS-SOCIAL-SHARING-IMAGE.png"
      />
      <SchemaMarkup type="custom" data={stGeorgeSchema} />
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
            Web Design & Marketing for St. George's Growing Businesses
          </motion.h1>

          <motion.p
            className="font-serif text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
            custom={0.1}
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
          >
            Washington County is one of the fastest-growing regions in America. With population projected to increase 84% by 2065, competition for local customers has never been fiercer. Your website needs to work as hard as you do.
          </motion.p>
        </div>

        <GradientTransition from="transparent" to="hsl(var(--muted) / 0.3)" height="80px" />
      </section>

      {/* Why St. George Section */}
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
              Why St. George Businesses Choose Custom-Coded Websites
            </h2>
            <div className="space-y-4 font-serif text-lg text-muted-foreground leading-relaxed">
              <p>
                St. George isn't the quiet retirement town it used to be. With Zion National Park drawing 4+ million visitors annually, California remote workers discovering affordable housing, and snowbirds from across the country making Washington County their winter home, the local economy is transforming.
              </p>
              <p>
                The construction boom in communities like Entrada, Sunriver, and Desert Color means dozens of contractors competing for the same homeowners. Real estate agents are fighting for listings from California transplants with Bay Area budgets. Service businesses are battling for visibility in a market where Google searches for "St. George contractor" have tripled in five years.
              </p>
              <p>
                A template website won't cut it in red rock country. You need a site that loads instantly in the desert heat (where mobile connections at Snow Canyon or Sand Hollow can be spotty), showcases your work against stunning landscape backdrops, and ranks in the Local Pack when tourists search "restaurant near Zion" or locals search "custom home builder Washington County."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}
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
            <h2 className="font-display font-semibold text-3xl md:text-4xl text-foreground mb-4">
              Industries We Serve in St. George
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
                className="flex items-center gap-4 p-6 bg-muted/30 rounded-xl border border-border/50"
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

      {/* Local SEO Section */}
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
              Local SEO That Understands Washington County
            </h2>
            <p className="font-serif text-lg text-muted-foreground leading-relaxed mb-4">
              We don't just optimize for "St. George"—we target the unique search patterns of this market. Tourists search "best breakfast near Zion" while planning their trip. Snowbirds search "golf course communities St. George" before their seasonal migration. California transplants search "custom home builder Utah" when comparing markets.
            </p>
            <p className="font-serif text-lg text-muted-foreground leading-relaxed mb-8">
              Our local SEO strategy captures all these audiences: Santa Clara homeowners, Ivins retirees, Washington City families, Hurricane adventurers, and La Verkin locals. We optimize your Google Business Profile to dominate the Local Pack whether someone's searching from the Red Cliffs Mall parking lot or planning their move from San Diego.
            </p>

            {/* Map Embed */}
            <div className="rounded-xl overflow-hidden border border-border/50 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d203641.4845457877!2d-113.73881075!3d37.0965278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80ca44d0984277e9%3A0xb6a8e87e4b2a6bf6!2sSt.%20George%2C%20UT!5e0!3m2!1sen!2sus!4v1684000000000!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="St. George, Utah service area map"
              />
            </div>
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
            Get a Free St. George Market Analysis
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Let's discuss how your business can stand out in Washington County's competitive market.
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
                  Get Your Free Analysis
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
              <span className="font-serif text-sm">Free consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-white" />
              <span className="font-serif text-sm">Local market expertise</span>
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
