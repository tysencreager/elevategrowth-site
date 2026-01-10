import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { Link } from "wouter";
import servicesHero from "@assets/services_hero_team_1920.webp";
import servicesHero768 from "@assets/services_hero_team_768.webp";
import servicesHero1280 from "@assets/services_hero_team_1280.webp";

// ============================================
// DECORATIVE COMPONENTS
// ============================================

// Wavy topographic/contour pattern background with organic lines
function TopographicPattern({ className = "", opacity = 0.08 }: { className?: string; opacity?: number }) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <svg
        className="absolute w-full h-full"
        style={{ opacity }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="topo-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            {/* Organic wavy contour lines */}
            <path
              d="M20,100 Q50,60 100,80 T180,100 T260,90"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-primary"
            />
            <path
              d="M0,140 Q40,100 90,120 T170,110 T250,130"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-primary"
            />
            <path
              d="M10,60 Q60,30 110,50 T190,40 T270,60"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-primary"
            />
            <path
              d="M-20,180 Q30,150 80,170 T160,160 T240,180"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-primary"
            />
            <path
              d="M30,20 Q70,0 120,15 T200,10 T280,25"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-primary"
            />
            {/* Secondary offset wavy lines for depth */}
            <path
              d="M-10,120 Q35,85 85,100 T165,95 T245,115"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-primary"
            />
            <path
              d="M5,80 Q55,50 105,65 T185,55 T265,75"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-primary"
            />
            <path
              d="M-5,160 Q45,130 95,145 T175,135 T255,155"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-primary"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#topo-pattern)" />
      </svg>
    </div>
  );
}

// Gradient fade transition between sections
function GradientTransition({
  from = "transparent",
  to = "transparent",
  height = "120px",
  className = ""
}: {
  from?: string;
  to?: string;
  height?: string;
  className?: string;
}) {
  return (
    <div
      className={`absolute left-0 right-0 bottom-0 pointer-events-none ${className}`}
      style={{
        height,
        background: `linear-gradient(to bottom, ${from}, ${to})`
      }}
    />
  );
}

// Wave divider SVG component
function WaveDivider({
  position = "bottom",
  fillColor = "var(--background)",
  className = ""
}: {
  position?: "top" | "bottom";
  fillColor?: string;
  className?: string;
}) {
  const isTop = position === "top";

  return (
    <div
      className={`absolute left-0 right-0 w-full overflow-hidden leading-none ${
        isTop ? 'top-0 rotate-180' : 'bottom-0'
      } ${className}`}
      style={{ height: '60px' }}
    >
      <svg
        className="relative block w-full h-full"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
          fill={fillColor}
          opacity="0.25"
        />
        <path
          d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
          fill={fillColor}
          opacity="0.5"
        />
        <path
          d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
}

// Curved divider (gentler curve)
function CurvedDivider({
  position = "bottom",
  fillColor = "var(--background)",
  className = ""
}: {
  position?: "top" | "bottom";
  fillColor?: string;
  className?: string;
}) {
  const isTop = position === "top";

  return (
    <div
      className={`absolute left-0 right-0 w-full overflow-hidden leading-none ${
        isTop ? 'top-0 rotate-180' : 'bottom-0'
      } ${className}`}
      style={{ height: '80px' }}
    >
      <svg
        className="relative block w-full h-full"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
}

// Floating decorative orbs
function FloatingOrbs({ variant = "light" }: { variant?: "light" | "primary" }) {
  const floatingVariants = {
    animate: {
      y: [-15, 15, -15],
      x: [-5, 5, -5],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const floatingVariants2 = {
    animate: {
      y: [10, -20, 10],
      x: [5, -5, 5],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const floatingVariants3 = {
    animate: {
      y: [-20, 10, -20],
      x: [-8, 8, -8],
      transition: {
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const baseColor = "bg-primary";
  const opacityLow = variant === "primary" ? "opacity-20" : "opacity-[0.08]";
  const opacityMed = variant === "primary" ? "opacity-25" : "opacity-[0.12]";
  const opacityHigh = variant === "primary" ? "opacity-30" : "opacity-[0.15]";

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className={`absolute top-[10%] left-[5%] w-64 h-64 ${baseColor} ${opacityMed} rounded-full blur-3xl`}
      />
      <motion.div
        variants={floatingVariants2}
        animate="animate"
        className={`absolute top-[60%] right-[10%] w-96 h-96 ${baseColor} ${opacityLow} rounded-full blur-3xl`}
      />
      <motion.div
        variants={floatingVariants3}
        animate="animate"
        className={`absolute top-[30%] right-[20%] w-48 h-48 ${baseColor} ${opacityHigh} rounded-full blur-2xl`}
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className={`absolute bottom-[20%] left-[15%] w-72 h-72 ${baseColor} ${opacityLow} rounded-full blur-3xl`}
      />
    </div>
  );
}

// ============================================
// PRICING COMPONENTS
// ============================================

// Import B&W stock images for service cards
import websiteImg from "@assets/stock_images/black_and_white_desk_69514a94.jpg";
import searchImg from "@assets/stock_images/black_and_white_mode_319eff6f.jpg";
import socialImg from "@assets/stock_images/black_and_white_prof_325156c7.jpg";
import contentImg from "@assets/stock_images/black_and_white_busi_73b6a31c.jpg";
import advertisingImg from "@assets/stock_images/modern_marketing_and_a25f67ec.jpg";
import brandingImg from "@assets/stock_images/professional_busines_e0d6a108.jpg";

interface PricingCardProps {
  image: string;
  title: string;
  description: string;
  items: { label: string; price: string }[];
  note?: string;
  index: number;
  featured?: boolean;
}

function PricingCard({ image, title, description, items, note, index, featured }: PricingCardProps) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.12
      }
    }
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{
        y: -8,
        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
      }}
      className={`group relative bg-card rounded-xl overflow-hidden border-2 transition-all duration-500 ${
        featured
          ? 'border-primary shadow-lg shadow-primary/20 ring-1 ring-primary/10'
          : 'border-border hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10'
      }`}
    >
      {/* Glow effect on hover */}
      <div className="absolute -inset-px bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

      {/* Featured badge */}
      {featured && (
        <div className="absolute top-4 right-4 z-10 bg-primary text-white px-3 py-1 rounded-full text-sm font-sans font-medium flex items-center gap-1 shadow-lg shadow-primary/30">
          <Sparkles className="w-3 h-3" />
          Popular
        </div>
      )}

      {/* Image container with overlay */}
      <div className="relative h-48 md:h-56 overflow-hidden z-10">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover grayscale"
          initial={{ scale: 1.1 }}
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Teal accent line */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-primary"
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 0.8, delay: 0.3 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Title overlay on image */}
        <div className="absolute bottom-4 left-6 right-6">
          <h3 className="font-display font-semibold text-2xl md:text-3xl text-white drop-shadow-lg">
            {title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 md:p-8 bg-card">
        <p className="font-serif text-muted-foreground leading-relaxed mb-6">
          {description}
        </p>

        {/* Pricing items */}
        <div className="space-y-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="flex justify-between items-start gap-4 py-3 border-b border-border/50 last:border-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
            >
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="font-serif text-foreground">{item.label}</span>
              </div>
              <span className="font-sans font-bold text-primary text-lg whitespace-nowrap">
                {item.price}
              </span>
            </motion.div>
          ))}
        </div>

        {note && (
          <motion.p
            className="mt-5 text-sm font-serif text-muted-foreground bg-primary/5 p-3 rounded-lg border-l-2 border-primary"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            {note}
          </motion.p>
        )}
      </div>
    </motion.div>
  );
}

// Audit Card Component for one-time services
interface AuditCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  index: number;
  featured?: boolean;
  badge?: string;
}

function AuditCard({ title, price, description, features, index, featured, badge }: AuditCardProps) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.12
      }
    }
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{
        y: -8,
        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
      }}
      className={`group relative bg-card rounded-xl overflow-hidden border-2 transition-all duration-500 ${
        featured
          ? 'border-primary shadow-lg shadow-primary/20 ring-1 ring-primary/10'
          : 'border-border hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10'
      }`}
    >
      {/* Glow effect on hover */}
      <div className="absolute -inset-px bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

      {/* Featured badge */}
      {featured && badge && (
        <div className="absolute top-4 right-4 z-20 bg-primary text-white px-3 py-1 rounded-full text-sm font-sans font-medium flex items-center gap-1 shadow-lg shadow-primary/30">
          <Sparkles className="w-3 h-3" />
          {badge}
        </div>
      )}

      {/* Header with title and price */}
      <div className={`relative z-10 px-6 pt-6 pb-4 md:px-8 md:pt-8 md:pb-5 ${featured ? 'bg-primary/5' : 'bg-muted/30'}`}>
        <h3 className="font-display font-semibold text-xl md:text-2xl text-foreground mb-2 pr-20">
          {title}
        </h3>
        <div className="flex items-baseline gap-1">
          <span className="font-display font-bold text-3xl md:text-4xl text-primary">{price}</span>
          <span className="font-serif text-muted-foreground text-sm">one-time</span>
        </div>
        {/* Accent line */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-primary"
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 0.8, delay: 0.3 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 md:p-8 bg-card">
        <p className="font-serif text-muted-foreground leading-relaxed mb-6">
          {description}
        </p>

        {/* Features list */}
        <div className="space-y-3">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.08, duration: 0.5 }}
            >
              <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <span className="font-serif text-foreground text-sm md:text-base">{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Enhanced CTA Section Component
function PricingCTA() {
  const ctaRef = useRef(null);
  const isInView = useInView(ctaRef, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [-5, 5, -5],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section
      ref={ctaRef}
      className="relative py-24 md:py-32 lg:py-40 overflow-hidden bg-gradient-to-br from-primary via-primary to-[hsl(191,60%,25%)]"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating shapes */}
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 left-[10%] w-32 h-32 bg-white/5 rounded-full blur-2xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "2s" }}
          className="absolute bottom-20 right-[15%] w-48 h-48 bg-white/5 rounded-full blur-3xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "4s" }}
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
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
        >
          <Sparkles className="w-4 h-4 text-white" />
          <span className="font-sans text-sm font-medium text-white">Quality services, honest pricing</span>
        </motion.div>

        {/* Main headline */}
        <motion.h2
          variants={itemVariants}
          className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight"
        >
          Ready to grow your business?
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="font-serif text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Let's have a real conversation about your goals. No pressure, no jargon—just honest advice on what will actually move the needle.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
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
          variants={itemVariants}
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
  );
}

export default function Pricing() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.5 });
  const valueRef = useRef(null);
  const isValueInView = useInView(valueRef, { once: true, amount: 0.3 });
  const auditHeaderRef = useRef(null);
  const isAuditHeaderInView = useInView(auditHeaderRef, { once: true, amount: 0.5 });

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

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.3
      }
    }
  };

  const pricingCategories = [
    {
      image: websiteImg,
      title: "Websites",
      description: "Custom-coded websites built in days, not months. Fast, responsive, and designed to convert.",
      items: [
        { label: "Custom built websites", price: "From $1,299" },
        { label: "Hosting & maintenance", price: "$80/mo" }
      ],
      note: "Single-page sites start at $1,299. Price increases with additional pages and functionality. Hosting includes 1 hour of monthly content edits and uptime monitoring.",
      featured: false
    },
    {
      image: brandingImg,
      title: "Branding",
      description: "Build a memorable brand identity that connects with your audience and sets you apart from competitors.",
      items: [
        { label: "Brand Launch (logo suite, colors, templates)", price: "$999" },
        { label: "Brand Authority (full identity system + collateral)", price: "$3,995" }
      ],
      note: "Brand Launch includes logo suite, color palette, brand board, social templates, and business card design. Brand Authority adds competitor audit, brand voice guide, custom patterns, iconography, brand bible, and your choice of 3 collateral pieces."
    },
    {
      image: searchImg,
      title: "Search & Local Presence",
      description: "Get found where it matters. Dominate local search and own your Google presence.",
      items: [
        { label: "SEO & Google Business Profile optimization", price: "$300/mo" }
      ],
      note: "Per location pricing."
    },
    {
      image: socialImg,
      title: "Social Media Management",
      description: "Consistent, strategic content that builds your brand and engages your audience.",
      items: [
        { label: "Standard (2-3 posts/week)", price: "$1,000/mo" },
        { label: "Growth (4-5 posts/week)", price: "$1,800/mo" }
      ],
      note: "All social media packages require a 3-month minimum commitment.",
      featured: true
    },
    {
      image: contentImg,
      title: "Content Creation",
      description: "One content day per quarter. Get a library of curated photos and videos tailored to your goals—ready to use however you need.",
      items: [
        { label: "Quarterly content package", price: "$1,700/qtr" }
      ],
      note: "3-month commitment required."
    },
    {
      image: advertisingImg,
      title: "Ad Campaign Management",
      description: "Strategic ad management across Google, Meta, and other platforms. Data-driven campaigns tailored to your goals and budget.",
      items: [
        { label: "Custom pricing based on your needs", price: "Inquire" }
      ],
      note: "Pricing varies based on platform, campaign size, ad spend, and complexity. Let's discuss your goals to create a custom quote."
    }
  ];

  const auditServices = [
    {
      title: "Strategic Growth Audit (SEO)",
      price: "$1,200",
      description: "Stop guessing what works. We build a data-backed roadmap to get your brand found. This isn't just a keyword list; it's a blueprint for revenue.",
      features: [
        "Deep-Dive Keyword Research & Competitor Analysis",
        "Content Gap Strategy & Integration Plan",
        "Google Business Profile Optimization",
        "Backlink Strategy & Outreach Templates",
        "Comprehensive SEO Strategy Roadmap"
      ]
    },
    {
      title: "Technical Health Check (Web Audit)",
      price: "$900",
      description: "A beautiful website is useless if Google can't read it. We look under the hood to fix the invisible breaks slowing you down.",
      features: [
        "Core Web Vitals & Speed Assessment",
        "Indexability, Robots.txt & Sitemap Review",
        "Mobile Usability & Schema Markup Check",
        "Metadata, H-Tag & Broken Link Analysis",
        "Prioritized \"Fix It\" Action List"
      ]
    },
    {
      title: "The Full Stack Bundle",
      price: "$2,000",
      description: "The ultimate foundation. Combines technical repairs with forward-looking strategy for maximum impact.",
      features: [
        "Everything in the Strategic SEO Audit",
        "Everything in the Technical Health Check",
        "Executive \"State of the Union\" Report",
        "6-Month Priority Growth Roadmap"
      ],
      featured: true,
      badge: "Best Value"
    }
  ];

  // Schema markup for pricing page
  const pricingSchema = {
    "@context": "https://schema.org",
    "@type": "PriceSpecification",
    "name": "Marketing Services Pricing",
    "description": "Transparent pricing for web design, SEO, social media management, content creation, and advertising services.",
    "priceCurrency": "USD"
  };

  const serviceOfferSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Marketing Services",
    "description": "Professional marketing services with transparent pricing",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Custom Built Website",
        "description": "Custom-coded websites starting at $1,299 for single-page sites, with pricing increasing for additional pages and functionality",
        "price": "1299",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "1299",
          "priceCurrency": "USD",
          "unitText": "starting price"
        }
      },
      {
        "@type": "Offer",
        "name": "Website Hosting & Maintenance",
        "description": "Managed hosting with content edits and uptime monitoring",
        "price": "80",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "80",
          "priceCurrency": "USD",
          "unitText": "per month"
        }
      },
      {
        "@type": "Offer",
        "name": "Brand Launch Package",
        "description": "Brand strategy, logo suite, color palette, brand board, social media templates, and business card design",
        "price": "999",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "999",
          "priceCurrency": "USD",
          "unitText": "one-time"
        }
      },
      {
        "@type": "Offer",
        "name": "Brand Authority Package",
        "description": "Comprehensive branding with competitor audit, brand voice guide, full visual identity system, brand bible, and custom collateral",
        "price": "3995",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "3995",
          "priceCurrency": "USD",
          "unitText": "one-time"
        }
      },
      {
        "@type": "Offer",
        "name": "SEO & Local Search Optimization",
        "description": "SEO and Google Business Profile optimization",
        "price": "300",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "300",
          "priceCurrency": "USD",
          "unitText": "per month per location"
        }
      },
      {
        "@type": "Offer",
        "name": "Social Media Management - Standard",
        "description": "2-3 posts per week, strategic content planning",
        "price": "1000",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "1000",
          "priceCurrency": "USD",
          "unitText": "per month"
        }
      },
      {
        "@type": "Offer",
        "name": "Social Media Management - Growth",
        "description": "4-5 posts per week, enhanced engagement strategy",
        "price": "1800",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "1800",
          "priceCurrency": "USD",
          "unitText": "per month"
        }
      },
      {
        "@type": "Offer",
        "name": "Content Creation Package",
        "description": "Quarterly content day with curated photos and videos",
        "price": "1700",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "1700",
          "priceCurrency": "USD",
          "unitText": "per quarter"
        }
      },
      {
        "@type": "Offer",
        "name": "Ad Campaign Management",
        "description": "Strategic ad campaign management across Google, Meta, and other platforms with custom pricing",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "USD",
          "description": "Custom pricing based on platform, campaign size, ad spend, and complexity"
        }
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Pricing - Affordable Marketing Services | Elevate Growth Solutions"
        description="Transparent, affordable pricing for quality marketing services. Custom websites from $1,299, SEO from $300/month, social media from $1,000/month. No hidden fees. Get a free consultation today."
        ogTitle="Marketing Services Pricing | Quality Services, Honest Prices"
        ogDescription="Custom websites starting at $1,299. SEO from $300/month. Social media management from $1,000/month. Transparent pricing with no surprises. Schedule your free consultation."
      />
      <SchemaMarkup type="service" data={serviceOfferSchema} />
      <Navbar />

      <Hero
        backgroundImage={servicesHero}
        imageSrcSet={`${servicesHero768} 768w, ${servicesHero1280} 1280w, ${servicesHero} 1920w`}
        title="Pricing"
        subtitle="Every business is different, so consider these starting points. Let's talk about what you actually need."
        height="60vh"
      />

      {/* Value proposition section */}
      <section className="relative py-12 md:py-16 bg-gradient-to-b from-primary/10 via-primary/5 to-background overflow-hidden">
        {/* Floating orbs */}
        <FloatingOrbs variant="light" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={valueRef}
            className="text-center"
            initial="hidden"
            animate={isValueInView ? "visible" : "hidden"}
          >
            <motion.div
              variants={headerVariants}
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="font-sans text-sm font-medium text-primary">Transparent Pricing</span>
            </motion.div>

            <motion.p
              variants={headerVariants}
              className="font-serif text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Quality marketing shouldn't break the bank. All prices shown are starting points—your actual investment depends on your unique goals and scope.
            </motion.p>
          </motion.div>
        </div>

        {/* Gradient fade transition to next section */}
        <GradientTransition
          from="transparent"
          to="hsl(var(--background))"
          height="100px"
        />
      </section>

      {/* Pricing cards section */}
      <section className="relative py-16 md:py-24 bg-background overflow-hidden">
        {/* Topographic pattern - darker and more visible */}
        <TopographicPattern opacity={0.12} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={headerRef} className="text-center mb-12 md:mb-16">
            <motion.h2
              className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient"
              variants={headerVariants}
              initial="hidden"
              animate={isHeaderInView ? "visible" : "hidden"}
            >
              Our Services
            </motion.h2>
            <motion.div
              variants={lineVariants}
              initial="hidden"
              animate={isHeaderInView ? "visible" : "hidden"}
              className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full origin-center"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {pricingCategories.map((category, index) => (
              <PricingCard
                key={category.title}
                image={category.image}
                title={category.title}
                description={category.description}
                items={category.items}
                note={category.note}
                index={index}
                featured={category.featured}
              />
            ))}
          </div>
        </div>

        {/* Wave divider at bottom */}
        <WaveDivider position="bottom" fillColor="hsl(var(--muted) / 0.3)" />
      </section>

      {/* One-Time Audits & Strategy section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-muted/40 via-muted/30 to-muted/50 overflow-hidden">
        {/* Topographic pattern - darker and more visible */}
        <TopographicPattern opacity={0.10} />

        {/* Floating orbs */}
        <FloatingOrbs variant="primary" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={auditHeaderRef} className="text-center mb-12 md:mb-16">
            <motion.div
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isAuditHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="w-2 h-2 bg-primary rounded-full" />
              <span className="font-sans text-sm font-medium text-primary">One-Time Projects</span>
            </motion.div>
            <motion.h2
              className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient"
              variants={headerVariants}
              initial="hidden"
              animate={isAuditHeaderInView ? "visible" : "hidden"}
            >
              One-Time Audits & Strategy
            </motion.h2>
            <motion.div
              variants={lineVariants}
              initial="hidden"
              animate={isAuditHeaderInView ? "visible" : "hidden"}
              className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full origin-center"
            />
            <motion.p
              className="font-serif text-lg text-muted-foreground max-w-2xl mx-auto mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isAuditHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              Get the clarity you need to move forward. These comprehensive audits deliver actionable insights—no ongoing commitment required.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {auditServices.map((service, index) => (
              <AuditCard
                key={service.title}
                title={service.title}
                price={service.price}
                description={service.description}
                features={service.features}
                index={index}
                featured={service.featured}
                badge={service.badge}
              />
            ))}
          </div>
        </div>

        {/* Curved divider at bottom */}
        <CurvedDivider position="bottom" fillColor="hsl(var(--primary))" />
      </section>

      {/* Enhanced CTA Section */}
      <PricingCTA />

      <Footer />
    </div>
  );
}
