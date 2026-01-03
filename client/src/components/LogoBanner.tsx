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
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <motion.div
            className="text-center mb-10 md:mb-12"
            variants={headerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {title && (
              <h2 className="font-display font-semibold text-2xl md:text-3xl lg:text-4xl text-foreground mb-3">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}

        {/* 3D Pop-up Banner */}
        <motion.div
          className="relative bg-primary rounded-2xl md:rounded-3xl py-8 md:py-10 overflow-hidden"
          variants={bannerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{
            boxShadow: `
              0 4px 6px -1px rgba(0, 0, 0, 0.1),
              0 10px 15px -3px rgba(0, 0, 0, 0.15),
              0 20px 25px -5px rgba(0, 0, 0, 0.1),
              0 -2px 0 0 rgba(255, 255, 255, 0.1) inset,
              0 2px 0 0 rgba(0, 0, 0, 0.2) inset
            `,
            transform: 'perspective(1000px) rotateX(2deg)',
            transformOrigin: 'center bottom'
          }}
        >
          {/* Subtle gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/10 pointer-events-none" />

          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />

          {/* Logo scroll container */}
          <div className="relative">
            {/* Gradient fade on edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none" />

            <div className="flex items-center gap-12 md:gap-16 lg:gap-20">
              <div className="flex items-center gap-12 md:gap-16 lg:gap-20 animate-scroll">
                {duplicatedLogos.map((logo, index) => (
                  <div
                    key={`logo-${index}`}
                    className="flex-shrink-0 flex items-center justify-center h-12 md:h-16 w-auto"
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      loading="lazy"
                      decoding="async"
                      className="h-10 md:h-14 w-auto max-w-[120px] md:max-w-[160px] object-contain transition-all duration-300 hover:scale-110"
                      style={{
                        maxHeight: '56px',
                        filter: 'grayscale(100%) brightness(1.5) contrast(0.8)',
                        opacity: 0.85,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.filter = 'grayscale(0%) brightness(1) contrast(1)';
                        e.currentTarget.style.opacity = '1';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.filter = 'grayscale(100%) brightness(1.5) contrast(0.8)';
                        e.currentTarget.style.opacity = '0.85';
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

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
