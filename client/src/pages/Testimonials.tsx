import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Gem, Layers, Clock, Building2, LineChart, HeartHandshake } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import SEO from "@/components/SEO";
import ClientMarquee from "@/components/home/ClientMarquee";
import headerImage from "@assets/testimonials-header.webp";

const testimonialsImage = "https://i.postimg.cc/j50kTV2H/website_photo.png";

const whyChooseReasons = [
  {
    icon: Gem,
    title: "Boutique Attention, Not a Ticket Number",
    description:
      "As a boutique web design and marketing agency, we take on a limited number of clients so every project gets senior-level attention. You work directly with the strategist designing your website and running your marketing—never a rotating account team."
  },
  {
    icon: Layers,
    title: "Full-Stack Marketing Under One Roof",
    description:
      "Web design, SEO, social media, and content creation—handled together, so your website and marketing pull in the same direction. One partner, one strategy, one consistent brand."
  },
  {
    icon: Clock,
    title: "Efficient, On-Schedule Delivery",
    description:
      "Custom website builds move quickly without cutting corners—mobile-responsive, fast-loading, and SEO-optimized from day one, on whatever platform fits your business best."
  },
  {
    icon: Building2,
    title: "Commercial-Grade Experience",
    description:
      "We've designed websites and delivered marketing for large commercial companies as well as boutique brands. Whatever your size, you get enterprise-level standards with personal service."
  },
  {
    icon: LineChart,
    title: "Built to Generate Leads",
    description:
      "Beautiful is not enough. Every website we build is engineered for conversions—clear calls to action, strategic page structure, and search engine optimization that brings qualified traffic to your door."
  },
  {
    icon: HeartHandshake,
    title: "A Partner After Launch",
    description:
      "From Salt Lake City to clients nationwide, we don't disappear after your website goes live. Hosting, maintenance, and ongoing marketing support keep your investment growing long after day one."
  }
];

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

  const isFeature = index === 0;

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
      className={`relative rounded-2xl p-6 md:p-8 overflow-hidden border border-border bg-background ${isFeature ? 'md:col-span-2' : ''}`}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover="hover"
      itemScope
      itemType="https://schema.org/Review"
    >
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
              className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg"
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
        description="Read what clients say about working with Elevate Growth Solutions—real reviews from businesses we've helped with web design, marketing, and SEO."
        ogTitle="Client Testimonials - Elevate Growth Solutions"
        ogDescription="Discover why businesses trust Elevate Growth Solutions for their marketing needs. Read authentic reviews and success stories from our satisfied clients."
      />

      <Navbar />

      {/* Hero Section — full-bleed image */}
      <section className="relative overflow-hidden min-h-[60vh] flex items-center pt-20">
        <img
          src={headerImage}
          alt="Clients collaborating with Elevate Growth Solutions"
          className="absolute inset-0 w-full h-full object-cover grayscale contrast-[1.05]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, rgba(11,25,30,.88) 0%, rgba(17,43,52,.72) 45%, rgba(38,109,130,.45) 100%)"
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 opacity-[0.07] mix-blend-overlay grain" aria-hidden="true" />

        <div ref={headerRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
          <div className="max-w-3xl">
            <motion.p
              className="flex items-center gap-3.5 font-sans text-[11px] tracking-[0.3em] uppercase text-[#4AC0D8]"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-block w-11 h-px bg-[#4AC0D8]/70" aria-hidden="true" />
              <Star className="w-3.5 h-3.5 fill-[#4AC0D8] text-[#4AC0D8]" /> Five-Star Reviews
            </motion.p>
            <motion.h1
              className="font-display font-normal text-[clamp(38px,5vw,64px)] leading-[1.1] text-white mt-6 mb-6"
              variants={headerVariants}
              initial="hidden"
              animate={isHeaderInView ? "visible" : "hidden"}
            >
              What our <em className="italic text-[#4AC0D8]">clients say.</em>
            </motion.h1>
            <motion.p
              className="font-serif font-light text-lg text-white/70 max-w-2xl leading-relaxed"
              variants={subtitleVariants}
              initial="hidden"
              animate={isHeaderInView ? "visible" : "hidden"}
            >
              Real stories from real businesses we've had the privilege of helping grow.
            </motion.p>
          </div>
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

      {/* Client marquee */}
      <ClientMarquee label="Trusted by businesses like yours" />

      {/* Testimonials Grid */}
      <section className="py-10 md:py-14 lg:py-16 bg-background">
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

      {/* Why Clients Choose Us */}
      <section className="py-16 md:py-24 bg-muted border-y border-border" aria-labelledby="why-choose-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="block font-sans text-[10.5px] tracking-[0.35em] uppercase text-primary mb-3.5">
              The Elevate Difference
            </span>
            <h2
              id="why-choose-heading"
              className="font-display font-normal text-[clamp(28px,3.6vw,42px)] leading-[1.18] text-foreground mb-4"
            >
              Why clients choose <em className="italic text-primary">Elevate Growth Solutions.</em>
            </h2>
            <div className="w-[72px] h-px bg-primary/45 mx-auto" aria-hidden="true" />
            <p className="font-serif italic font-light text-[17px] text-muted-foreground max-w-[640px] mx-auto mt-5">
              The reviews above aren't luck—they're the result of how we work. Here's what businesses
              get when they partner with a boutique web design and full-stack marketing agency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-9 gap-y-11">
            {whyChooseReasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                className="flex flex-col gap-3.5"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: (index % 3) * 0.09, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="flex items-center justify-center w-[58px] h-[58px] rounded-full border border-primary/30 text-primary">
                  <reason.icon className="w-6 h-6" strokeWidth={1.3} />
                </span>
                <h3 className="font-display font-medium text-[19px] leading-snug text-foreground">
                  {reason.title}
                </h3>
                <p className="font-serif font-light text-sm leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Break Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={testimonialsImage}
              alt="Elevate Growth Solutions team at work"
              className="w-full h-auto"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to become our next success story?"
        ctaText="Book a Discovery Call"
        ctaHref="/contact"
        backgroundColor="bg-primary"
      />

      <Footer />
    </div>
  );
}
