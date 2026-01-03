import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
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
  { src: "https://i.postimg.cc/Hn6YV0GB/Dial_In_Logo_png.png", alt: "Dial In" },
  { src: "https://i.postimg.cc/BbFyfGT5/1.png", alt: "Client Logo" },
  { src: "https://i.postimg.cc/PrkVv9zt/7.png", alt: "Client Logo" },
  { src: "https://i.postimg.cc/PrhK5ZTf/So_Crystal_Designs_Horizontal_Logo.png", alt: "So Crystal Designs" },
  { src: "https://i.postimg.cc/rwZ9jPW9/white_True_Partner_logo.png", alt: "True Partner" },
  { src: "https://i.postimg.cc/kGZnf9JC/3e5c0d_91aae8e3345e442fb309b3eac35ebca4_mv2.png", alt: "Client Logo" },
  { src: "https://i.postimg.cc/QCPX0s8j/3e5c0d_d20fbb27914a4eea89bf638baf4c35f7_mv2.png", alt: "Client Logo" },
  { src: "https://i.postimg.cc/90SWJVW6/3e5c0d_d34f81ec9fce437f8b2e8b32eb8306c5_mv2.png", alt: "Client Logo" },
  { src: "https://i.postimg.cc/90SWJVmH/images_(5).png", alt: "Client Logo" }
];

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.1
      }
    }
  };

  return (
    <motion.article
      ref={cardRef}
      className="bg-accent/20 rounded-2xl p-6 md:p-8 relative overflow-hidden group hover:bg-accent/30 transition-colors duration-300"
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      itemScope
      itemType="https://schema.org/Review"
    >
      {/* Decorative quote mark */}
      <div className="absolute top-4 right-4 text-6xl md:text-7xl font-serif text-primary/10 pointer-events-none select-none leading-none">
        "
      </div>

      <blockquote className="relative z-10">
        <p
          className="font-serif italic text-lg md:text-xl text-foreground leading-relaxed mb-6"
          itemProp="reviewBody"
        >
          "{testimonial.quote}"
        </p>

        <footer className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="font-display font-semibold text-primary text-sm">
              {testimonial.author.charAt(0)}
            </span>
          </div>
          <div>
            <cite className="not-italic font-sans font-medium text-foreground" itemProp="author">
              {testimonial.author}
            </cite>
            {testimonial.role && (
              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
            )}
          </div>
        </footer>
      </blockquote>

      {/* Rating for schema */}
      <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating" className="sr-only">
        <meta itemProp="ratingValue" content="5" />
        <meta itemProp="bestRating" content="5" />
      </div>
    </motion.article>
  );
}

export default function Testimonials() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.5 });

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

  return (
    <div className="min-h-screen">
      <SEO
        title="Client Testimonials & Reviews | Elevate Growth Solutions"
        description="Read what our clients say about working with Elevate Growth Solutions. Real testimonials from businesses we've helped with web design, marketing, SEO, and branding."
        ogTitle="Client Testimonials - Elevate Growth Solutions"
        ogDescription="Discover why businesses trust Elevate Growth Solutions for their marketing needs. Read authentic reviews and success stories from our satisfied clients."
      />

      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-background">
        <div ref={headerRef} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6"
            variants={headerVariants}
            initial="hidden"
            animate={isHeaderInView ? "visible" : "hidden"}
          >
            What Our Clients Say
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

      {/* Logo Banner */}
      <LogoBanner
        logos={clientLogos}
        title="Trusted By Businesses Like Yours"
        subtitle="We've partnered with amazing companies to help them achieve their marketing goals"
      />

      {/* Testimonials Grid */}
      <section className="py-12 md:py-16 lg:py-20 bg-background">
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
