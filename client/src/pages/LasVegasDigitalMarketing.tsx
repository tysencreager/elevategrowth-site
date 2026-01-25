import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import SchemaMarkup from "@/components/SchemaMarkup";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { BokehEffect, FloatingOrbs, WaveDivider, GradientTransition } from "@/components/decorative";
import { Building2, Utensils, Hotel, ShoppingBag, Briefcase, Sparkles, ArrowRight, Check } from "lucide-react";

// Schema for Las Vegas location page
const lasVegasSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://elevategrowth.solutions/#organization",
  "name": "Elevate Growth Solutions",
  "url": "https://elevategrowth.solutions/las-vegas-digital-marketing",
  "telephone": "+1-803-600-4806",
  "email": "tysen@elevategrowth.solutions",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Las Vegas",
    "addressRegion": "NV",
    "addressCountry": "US"
  },
  "areaServed": [
    {"@type": "City", "name": "Las Vegas", "containedInPlace": {"@type": "State", "name": "Nevada"}},
    {"@type": "City", "name": "Henderson", "containedInPlace": {"@type": "State", "name": "Nevada"}},
    {"@type": "City", "name": "North Las Vegas", "containedInPlace": {"@type": "State", "name": "Nevada"}},
    {"@type": "City", "name": "Summerlin", "containedInPlace": {"@type": "State", "name": "Nevada"}},
    {"@type": "AdministrativeArea", "name": "Clark County", "containedInPlace": {"@type": "State", "name": "Nevada"}}
  ]
};

const industries = [
  { icon: Hotel, name: "Strip-adjacent hotels, bars, and entertainment venues" },
  { icon: Utensils, name: "Restaurants from Fremont to Summerlin" },
  { icon: Building2, name: "Henderson and North Las Vegas real estate agents" },
  { icon: ShoppingBag, name: "Local retailers and fashion district boutiques" },
  { icon: Briefcase, name: "Convention services and B2B vendors" },
  { icon: Sparkles, name: "Med spas, salons, and wellness centers" }
];

export default function LasVegasDigitalMarketing() {
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
        title="Digital Marketing Services in Las Vegas, Nevada | Elevate Growth Solutions"
        description="Elevate Growth Solutions offers premier digital marketing services in Las Vegas. Custom-coded websites, SEO, and full-stack marketing for Nevada businesses."
        ogImage="https://i.postimg.cc/sDW2ZZpm/EGS-SOCIAL-SHARING-IMAGE.png"
      />
      <SchemaMarkup type="custom" data={lasVegasSchema} />
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
            Premier Digital Marketing Services in Las Vegas
          </motion.h1>

          <motion.p
            className="font-serif text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
            custom={0.1}
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
          >
            Elevate Growth Solutions offers boutique marketing services to Las Vegas businesses. From custom-coded websites to comprehensive digital marketing strategies, we help local businesses stand out in one of America's most competitive markets.
          </motion.p>
        </div>

        <GradientTransition from="transparent" to="hsl(var(--muted) / 0.3)" height="80px" />
      </section>

      {/* Why Las Vegas Section */}
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
              Marketing That Matches Las Vegas Energy
            </h2>
            <div className="space-y-4 font-serif text-lg text-muted-foreground leading-relaxed">
              <p>
                Las Vegas welcomes over 40 million visitors annually—but the local economy extends far beyond The Strip. From the tech companies in the Las Vegas Tech District to the thriving small businesses along Fremont Street's revitalized downtown, Clark County's economy is diversifying rapidly.
              </p>
              <p>
                Whether you're a restaurant competing for convention traffic near the Las Vegas Convention Center, a wellness spa in Summerlin serving locals, or a professional service firm in Henderson's growing business district, you need a website that works as hard as you do—24 hours a day, 7 days a week, just like this city.
              </p>
              <p>
                We build custom-coded websites that load fast even on crowded casino WiFi, look stunning on mobile devices, and convert visitors into customers. No templates, no bloat—just clean, efficient code tailored to the unique demands of the Las Vegas market.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Local Market Section */}
      <section className="relative py-16 md:py-24 bg-background overflow-hidden">
        <FloatingOrbs variant="light" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="font-display font-semibold text-3xl md:text-4xl text-foreground mb-6">
              Understanding the Las Vegas Business Landscape
            </h2>
            <div className="space-y-4 font-serif text-lg text-muted-foreground leading-relaxed">
              <p>
                Las Vegas isn't just about gaming anymore. The city has transformed into a major hub for conventions (CES, SEMA, and hundreds more at the Convention Center and new MSG Sphere), sports (Raiders, Golden Knights, Formula 1), and increasingly, tech startups attracted by Nevada's business-friendly tax environment.
              </p>
              <p>
                For local businesses, this means unprecedented opportunity—and competition. A restaurant near the Arts District competes not just with neighbors, but with every Yelp-listed option tourists discover. A Henderson contractor needs to rank for "home remodel Las Vegas" against hundreds of competitors.
              </p>
              <p>
                We understand the unique rhythm of Las Vegas business: the seasonal convention surges, the importance of mobile-first design for tourists researching on the go, and the need for local SEO that captures both the "Las Vegas" and neighborhood-specific searches like "Summerlin," "Green Valley," or "Downtown Las Vegas."
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
              Las Vegas Industries We Specialize In
            </h2>
            <p className="font-serif text-lg text-muted-foreground max-w-2xl mx-auto">
              From the energy of The Strip to the growing suburbs of Henderson and Summerlin
            </p>
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

      {/* Services Section */}
      <section className="relative py-16 md:py-24 bg-background overflow-hidden">
        <FloatingOrbs variant="light" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="font-display font-semibold text-3xl md:text-4xl text-foreground mb-6">
              Digital Marketing Services for Clark County
            </h2>
            <div className="space-y-4 font-serif text-lg text-muted-foreground leading-relaxed">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span><strong>Custom Website Design:</strong> Lightning-fast sites optimized for tourists on hotel WiFi and locals on mobile—critical in a city where decisions happen in seconds</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span><strong>Local SEO:</strong> Rank for "Las Vegas," "Henderson," "Summerlin," and neighborhood-specific searches. We optimize your Google Business Profile for the Las Vegas market</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span><strong>Social Media Management:</strong> Build your brand on Instagram and Facebook where Vegas locals discover new businesses daily</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span><strong>Google & Meta Ads:</strong> Geo-targeted campaigns for convention traffic, local residents, or both—with tracking that shows real ROI</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span><strong>Branding:</strong> Stand-out visual identity that competes in a city known for bold design and memorable experiences</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
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
            <h2 className="font-display font-semibold text-3xl md:text-4xl text-foreground mb-6 text-center">
              Serving the Greater Las Vegas Area
            </h2>
            <p className="font-serif text-lg text-muted-foreground text-center mb-8">
              From Downtown and The Strip to Henderson, Summerlin, North Las Vegas, and beyond
            </p>

            {/* Map Embed */}
            <div className="rounded-xl overflow-hidden border border-border/50 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d413369.7557695321!2d-115.46709889999999!3d36.1249185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80beb782a4f57dd1%3A0x3accd5e6d5b379a3!2sLas%20Vegas%2C%20NV!5e0!3m2!1sen!2sus!4v1684000000000!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Las Vegas, Nevada service area map"
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
            Ready to Elevate Your Las Vegas Business?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Let's discuss how we can help your business stand out in the Las Vegas market.
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
                  Schedule a Free Consultation
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
              <span className="font-serif text-sm">Custom solutions</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-white" />
              <span className="font-serif text-sm">Fast turnaround</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
