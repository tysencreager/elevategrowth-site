import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Logo {
  src: string;
  alt: string;
}

interface LogoBannerProps {
  logos: Logo[];
  title?: string;
  subtitle?: string;
}

export default function LogoBanner({ logos, title, subtitle }: LogoBannerProps) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const bannerVariants = {
    hidden: { opacity: 0, y: 20 },
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

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section
      ref={sectionRef}
      className="py-12 md:py-16 lg:py-20 bg-background overflow-hidden"
      aria-label="Trusted by these companies"
    >
      {(title || subtitle) && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-10 md:mb-12"
            variants={headerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {title && (
              <h2 className="font-display font-semibold text-2xl md:text-3xl lg:text-4xl text-primary mb-3">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </motion.div>
        </div>
      )}

      {/* Full-width Banner */}
      <motion.div
        className="relative w-full py-10 md:py-14 overflow-hidden"
        variants={bannerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        style={{ backgroundColor: '#000000' }}
      >
        {/* Logo scroll container */}
        <div className="relative">
          {/* Gradient fade on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #000000, transparent)' }} />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #000000, transparent)' }} />

          <div className="flex items-center gap-16 md:gap-24 lg:gap-28">
            <div className="flex items-center gap-16 md:gap-24 lg:gap-28 animate-scroll">
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={`logo-${index}`}
                  className="flex-shrink-0 flex items-center justify-center h-20 md:h-28 w-auto"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    width={320}
                    height={112}
                    loading="lazy"
                    decoding="async"
                    className="h-20 md:h-28 w-auto max-w-[240px] md:max-w-[320px] object-contain transition-all duration-300 brightness-0 invert opacity-80 hover:opacity-100 hover:scale-110"
                    style={{
                      aspectRatio: '320 / 112',
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* CSS Animation */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-scroll {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
