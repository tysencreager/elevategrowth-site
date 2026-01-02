import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedButton } from "@/components/ui/motion";

interface CTASectionProps {
  backgroundImage?: string;
  /** Responsive image sources for different viewport sizes */
  imageSrcSet?: string;
  title: string;
  ctaText: string;
  ctaHref: string;
  backgroundColor?: string;
}

export default function CTASection({
  backgroundImage,
  imageSrcSet,
  title,
  ctaText,
  ctaHref,
  backgroundColor = "bg-primary"
}: CTASectionProps) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.4 });

  // Split title into words for staggered animation
  const titleWords = title.split(" ");

  const backgroundVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.2
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.3
      }
    }
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      rotateX: -45
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.8
      }
    }
  };

  return (
    <section ref={sectionRef} className="relative py-20 md:py-32 lg:py-40 overflow-hidden">
      {backgroundImage && (
        <>
          {/* Plain img for better performance - lazy loaded since below fold */}
          <img
            src={backgroundImage}
            srcSet={imageSrcSet}
            alt=""
            width={1920}
            height={1080}
            sizes="100vw"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </>
      )}
      {!backgroundImage && (
        <motion.div
          className={`absolute inset-0 ${backgroundColor}`}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        />
      )}

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" style={{ perspective: 1000 }}>
        <motion.h2
          className="font-display font-semibold text-4xl md:text-5xl lg:text-6xl text-white mb-8 leading-tight"
          data-testid="text-cta-title"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {titleWords.map((word, i) => (
            <motion.span
              key={i}
              variants={wordVariants}
              style={{
                display: "inline-block",
                marginRight: "0.25em",
                transformOrigin: "bottom center"
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>

        <motion.div
          variants={buttonVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <a href={ctaHref} data-testid="button-cta">
            <AnimatedButton>
              <Button
                size="lg"
                variant={backgroundImage ? "outline" : "default"}
                className={`font-serif font-medium text-base md:text-lg px-8 py-6 ${backgroundImage ? 'bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20' : ''}`}
              >
                {ctaText}
              </Button>
            </AnimatedButton>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
