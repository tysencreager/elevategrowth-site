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

  // Simple, fast fade-in - no word stagger that looks like buffering
  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={sectionRef} className="relative py-12 md:py-20 lg:py-24 overflow-hidden">
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

      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={contentVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <h2
          className="font-display font-semibold text-4xl md:text-5xl lg:text-6xl text-white mb-8 leading-tight"
          data-testid="text-cta-title"
        >
          {title}
        </h2>

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
    </section>
  );
}
