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
  /** Direct video source URL for local MP4 video background */
  backgroundVideoSrc?: string;
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
  backgroundVideoSrc,
  title,
  subtitle,
  ctaText,
  ctaHref,
  height = "90vh",
  isLCP = false
}: HeroProps) {
  // Simple, fast fade-in for all content at once - no stagger/buffering effect
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
    <div
      className="relative flex items-center justify-center text-center px-4 pt-32 overflow-hidden"
      style={{ minHeight: height }}
    >
      {/* Background: Image shown immediately, video layers on top when loaded */}
      {backgroundImage && (
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
      )}
      {backgroundVideo && (
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <iframe
            src={`https://player.vimeo.com/video/${backgroundVideo}?background=1&autoplay=1&loop=1&muted=1`}
            className="absolute top-1/2 left-1/2 w-[177.78vh] min-w-full h-[56.25vw] min-h-full -translate-x-1/2 -translate-y-1/2"
            frameBorder="0"
            allow="autoplay; fullscreen"
            title="Background video"
          />
        </div>
      )}
      {backgroundVideoSrc && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={backgroundVideoSrc} type="video/mp4" />
        </video>
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

      <motion.div
        className="relative z-10 max-w-5xl mx-auto"
        variants={contentVariants}
        initial="hidden"
        animate="visible"
      >
        <h1
          className="font-display font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight"
          style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5), 0 4px 12px rgba(0,0,0,0.4), 0 8px 24px rgba(0,0,0,0.3)" }}
          data-testid="text-hero-title"
        >
          {title}
        </h1>

        {subtitle && (
          <p
            className="font-serif italic text-xl sm:text-2xl md:text-3xl text-white/95 mb-8 max-w-3xl mx-auto leading-relaxed whitespace-pre-line"
            style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5), 0 4px 12px rgba(0,0,0,0.3)" }}
            data-testid="text-hero-subtitle"
          >
            {subtitle}
          </p>
        )}

        {ctaText && ctaHref && (
          <a href={ctaHref} data-testid="button-hero-cta">
            <AnimatedButton>
              <Button
                size="lg"
                className="font-serif font-medium text-base md:text-lg px-8 py-6 gap-2 group"
              >
                {ctaText}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </AnimatedButton>
          </a>
        )}
      </motion.div>
    </div>
  );
}
