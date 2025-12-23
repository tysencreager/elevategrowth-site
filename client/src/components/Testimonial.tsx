import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
}

export default function Testimonial({ quote, author, role }: TestimonialProps) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.4 });

  const quoteMarkVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 0.1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const quoteVariants = {
    hidden: { opacity: 0, y: 40 },
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

  const authorVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.5
      }
    }
  };

  const lineVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.3
      }
    }
  };

  return (
    <section ref={sectionRef} className="py-12 md:py-16 lg:py-20 bg-accent/30 overflow-hidden relative">
      <motion.div
        className="absolute top-4 left-1/2 -translate-x-1/2 text-9xl font-serif text-primary pointer-events-none select-none"
        variants={quoteMarkVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        "
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <blockquote className="space-y-6">
          <motion.p
            className="font-serif italic text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed"
            data-testid="text-testimonial-quote"
            variants={quoteVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            "{quote}"
          </motion.p>

          <motion.div
            className="w-16 h-0.5 bg-primary mx-auto"
            variants={lineVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            style={{ originX: 0.5 }}
          />

          <footer className="font-sans">
            <motion.cite
              className="not-italic block"
              variants={authorVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <p className="text-lg md:text-xl text-muted-foreground" data-testid="text-testimonial-author">
                - {author}, {role}
              </p>
            </motion.cite>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
