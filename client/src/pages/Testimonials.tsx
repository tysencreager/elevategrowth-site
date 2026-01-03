import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import SEO from "@/components/SEO";
import LogoBanner from "@/components/LogoBanner";

interface Testimonial {
  quote: string;
  author: string;
  role?: string;
}

const testimonials: Testimonial[] = [
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
    quote: "From the most basic detail to the biggest detail in marketing a business and it being a success, Tysen doesn't shy away from any of it. Her confidence in you and your business gives a new growth within you and lights a fire under you that helps you succeed. She's very patient and is so kind to answer questions and teach you anything about the work she's done. I greatly appreciate the impact she's had on my business.",
    author: "Abagail D."
  }
];

const clientLogos = [
  { src: "https://i.postimg.cc/3N6Kn78Y/Dial_In_Logo_png.png", alt: "Dial In" },
  { src: "https://i.postimg.cc/8FCq8ydW/1.png", alt: "Client Logo" },
  { src: "https://i.postimg.cc/xkdWrsGN/2.png", alt: "Client Logo" },
  { src: "https://i.postimg.cc/hJGHFC8m/3.png", alt: "Client Logo" },
  { src: "https://i.postimg.cc/QBMRL6gT/4.png", alt: "Client Logo" },
  { src: "https://i.postimg.cc/94fv3xPy/5.png", alt: "Client Logo" },
  { src: "https://i.postimg.cc/d7SgJ8n3/6.png", alt: "Client Logo" },
  { src: "https://i.postimg.cc/p913PDky/7.png", alt: "Client Logo" },
  { src: "https://i.postimg.cc/KKYdX97n/8.png", alt: "Client Logo" },
  { src: "https://i.postimg.cc/qtZWp8Qz/9.png", alt: "Client Logo" },
  { src: "https://i.postimg.cc/p913PDk5/10.png", alt: "Client Logo" },
  { src: "https://i.postimg.cc/CZ69wjJf/11.png", alt: "Client Logo" },
  { src: "https://i.postimg.cc/Lq0Gmzv1/12.png", alt: "Client Logo" },
  { src: "https://i.postimg.cc/d7SgJ8nd/13.png", alt: "Client Logo" },
  { src: "https://i.postimg.cc/f3g1Mx5m/14.png", alt: "Client Logo" }
];

function StarRating() {
  return (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1, duration: 0.3, type: "spring" }}
        >
          <Star className="w-5 h-5 fill-primary text-primary" />
        </motion.div>
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });

  // Alternate card styles for visual variety
  const isFeature = index === 0;
  const cardColors = [
    "from-primary/10 to-accent/20 border-primary/20",
    "from-accent/15 to-primary/10 border-accent/30",
    "from-primary/5 to-accent/15 border-primary/15",
    "from-accent/10 to-primary/15 border-accent/25",
    "from-primary/15 to-accent/10 border-primary/25"
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
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

  const hoverVariants = {
    rest: { scale: 1, y: 0 },
    hover: {
      scale: 1.02,
      y: -5,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <motion.article
      ref={cardRef}
      className={`relative rounded-2xl p-6 md:p-8 overflow-hidden border-2 bg-gradient-to-br ${cardColors[index % cardColors.length]} ${isFeature ? 'md:col-span-2' : ''}`}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover="hover"
      itemScope
      itemType="https://schema.org/Review"
    >
      {/* Animated background glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0"
        variants={{
          rest: { opacity: 0 },
          hover: { opacity: 1 }
        }}
      />

      {/* Decorative quote mark with animation */}
      <motion.div
        className="absolute -top-2 -right-2 text-8xl md:text-9xl font-serif text-primary/15 pointer-events-none select-none leading-none"
        variants={{
          rest: { rotate: 0, scale: 1 },
          hover: { rotate: 5, scale: 1.1 }
        }}
        transition={{ duration: 0.3 }}
      >
        "
      </motion.div>

      {/* Floating decorative circles */}
      <motion.div
        className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-primary/5"
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.2 }
        }}
        transition={{ duration: 0.5 }}
      />

      <motion.div variants={hoverVariants} className="relative z-10">
        <StarRating />

        <blockquote>
          <p
            className={`font-serif italic text-foreground leading-relaxed mb-6 ${isFeature ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'}`}
            itemProp="reviewBody"
          >
            "{testimonial.quote}"
          </p>

          <footer className="flex items-center gap-4">
            <motion.div
              className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <span className="font-display font-bold text-primary-foreground text-lg">
                {testimonial.author.charAt(0)}
              </span>
            </motion.div>
            <div>
              <cite className="not-italic font-sans font-semibold text-foreground text-lg" itemProp="author">
                {testimonial.author}
              </cite>
              {testimonial.role && (
                <p className="text-sm text-primary font-medium">{testimonial.role}</p>
              )}
            </div>
          </footer>
        </blockquote>

        {/* Rating for schema */}
        <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating" className="sr-only">
          <meta itemProp="ratingValue" content="5" />
          <meta itemProp="bestRating" content="5" />
        </div>
      </motion.div>
    </motion.article>
  );
}

export default function Testimonials() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.5 });
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.5 });

  // Add structured data for SEO
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'testimonials-schema';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Elevate Growth Solutions",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "reviewCount": testimonials.length.toString(),
        "bestRating": "5"
      },
      "review": testimonials.map((t) => ({
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": t.author
        },
        "reviewBody": t.quote
      }))
    });
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('testimonials-schema');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

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

  const subtitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.2
      }
    }
  };

  const stats = [
    { value: "100%", label: "Client Satisfaction" },
    { value: "5", label: "Average Rating", isStar: true },
    { value: "50+", label: "Projects Completed" }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Client Testimonials & Reviews | Elevate Growth Solutions"
        description="Read what our clients say about working with Elevate Growth Solutions. Real testimonials from businesses we've helped with web design, marketing, SEO, and branding."
        ogTitle="Client Testimonials - Elevate Growth Solutions"
        ogDescription="Discover why businesses trust Elevate Growth Solutions for their marketing needs. Read authentic reviews and success stories from our satisfied clients."
      />

      <Navbar />

      {/* Hero Section with gradient background */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-primary/5 via-accent/10 to-background relative overflow-hidden">
        {/* Animated background shapes */}
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-accent/10 blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div ref={headerRef} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isHeaderInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            <Star className="w-4 h-4 fill-primary" />
            <span className="font-medium text-sm">5-Star Reviews</span>
          </motion.div>

          <motion.h1
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6"
            variants={headerVariants}
            initial="hidden"
            animate={isHeaderInView ? "visible" : "hidden"}
          >
            What Our{" "}
            <span className="text-primary">Clients</span>{" "}
            Say
          </motion.h1>
          <motion.p
            className="font-sans text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            variants={subtitleVariants}
            initial="hidden"
            animate={isHeaderInView ? "visible" : "hidden"}
          >
            Real stories from real businesses we've had the privilege of helping grow
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-12 bg-primary text-primary-foreground">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.5 }}
              >
                <motion.div
                  className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-2 flex items-center justify-center gap-1"
                  initial={{ scale: 0.5 }}
                  animate={isStatsInView ? { scale: 1 } : {}}
                  transition={{ delay: index * 0.15 + 0.2, type: "spring", stiffness: 200 }}
                >
                  {stat.value}
                  {stat.isStar && <Star className="w-8 h-8 md:w-10 md:h-10 fill-primary-foreground" />}
                </motion.div>
                <div className="font-sans text-sm md:text-base text-primary-foreground/80">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Logo Banner */}
      <LogoBanner
        logos={clientLogos}
        title="Trusted By Businesses Like Yours"
        subtitle="We've partnered with amazing companies to help them achieve their marketing goals"
      />

      {/* Testimonials Grid */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-background via-accent/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.author}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to become our next success story?"
        ctaText="Get In Touch"
        ctaHref="mailto:tysen@elevategrowth.solutions"
        backgroundColor="bg-primary"
      />

      <Footer />
    </div>
  );
}
