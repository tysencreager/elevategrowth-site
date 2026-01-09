import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedButton } from "@/components/ui/motion";

interface HeroProps {
  backgroundImage?: string;
  /** Responsive image sources for different viewport sizes */
  imageSrcSet?: string;
  /** Vimeo video ID for video background (overrides backgroundImage) */
  backgroundVideo?: string;
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  height?: string;
  /** Mark as LCP element for priority loading */
  isLCP?: boolean;
}

export default function Hero({
  backgroundImage,
  imageSrcSet,
  backgroundVideo,
  title,
  subtitle,
  ctaText,
  ctaHref,
  height = "90vh",
  isLCP = false
}: HeroProps) {
  // Split title into words for staggered animation
  const titleWords = title.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3
      }
    }
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 40,
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

  const subtitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.8
      }
    }
  };

  const ctaVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: 1.1
      }
    }
  };

  const backgroundVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.4,
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

  return (
    <div
      className="relative flex items-center justify-center text-center px-4 pt-32 overflow-hidden"
      style={{ minHeight: height }}
    >
      {/* Background: Video (Vimeo) or Image */}
      {backgroundVideo ? (
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <iframe
            src={`https://player.vimeo.com/video/${backgroundVideo}?background=1&autoplay=1&loop=1&muted=1`}
            className="absolute top-1/2 left-1/2 w-[177.78vh] min-w-full h-[56.25vw] min-h-full -translate-x-1/2 -translate-y-1/2"
            frameBorder="0"
            allow="autoplay; fullscreen"
            title="Background video"
          />
        </div>
      ) : backgroundImage ? (
        <img
          src={backgroundImage}
          srcSet={imageSrcSet}
          alt=""
          width={1920}
          height={1080}
          sizes="100vw"
          fetchPriority={isLCP ? "high" : "auto"}
          decoding={isLCP ? "sync" : "async"}
          loading={isLCP ? "eager" : "lazy"}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : null}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
      />

      <div className="relative z-10 max-w-5xl mx-auto" style={{ perspective: 1000 }}>
        <motion.h1
          className="font-display font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight"
          data-testid="text-hero-title"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
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
        </motion.h1>

        {subtitle && (
          <motion.p
            className="font-serif italic text-xl sm:text-2xl md:text-3xl text-white/95 mb-8 max-w-3xl mx-auto leading-relaxed"
            data-testid="text-hero-subtitle"
            variants={subtitleVariants}
            initial="hidden"
            animate="visible"
          >
            {subtitle}
          </motion.p>
        )}

        {ctaText && ctaHref && (
          <motion.div
            variants={ctaVariants}
            initial="hidden"
            animate="visible"
          >
            <a href={ctaHref} data-testid="button-hero-cta">
              <AnimatedButton>
                <Button
                  size="lg"
                  className="font-serif font-medium text-base md:text-lg px-8 py-6 gap-2 group"
                >
                  {ctaText}
                  <motion.span
                    className="inline-block"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </motion.span>
                </Button>
              </AnimatedButton>
            </a>
          </motion.div>
        )}
      </div>
    </div>
  );
}
