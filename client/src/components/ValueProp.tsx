import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ValuePropProps {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  imagePosition?: "left" | "right";
}

export default function ValueProp({
  image,
  imageAlt,
  title,
  description,
  imagePosition = "left"
}: ValuePropProps) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const imageVariants = {
    hidden: { opacity: 0, x: imagePosition === "left" ? -30 : 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, x: imagePosition === "left" ? 30 : -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.15
      }
    }
  };

  return (
    <section ref={sectionRef} className="pt-16 md:pt-24 lg:pt-32 pb-12 md:pb-16 lg:pb-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col ${imagePosition === "right" ? "md:flex-row-reverse" : "md:flex-row"} gap-12 md:gap-16 items-center md:items-start`}>
          <motion.div
            className="flex-1 flex justify-center"
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="overflow-hidden rounded-lg">
              <img
                src={image}
                alt={imageAlt}
                width={450}
                height={600}
                loading="lazy"
                decoding="async"
                className="w-auto h-full max-h-[600px] rounded-lg object-cover"
                data-testid="img-value-prop"
              />
            </div>
          </motion.div>
          <motion.div
            className="flex-1"
            variants={contentVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h2
              className="font-serif text-2xl md:text-3xl lg:text-4xl text-primary mb-6 leading-tight"
              data-testid="text-value-prop-title"
            >
              {title}
            </h2>
            <p
              className="font-serif text-lg md:text-xl text-foreground leading-relaxed"
              data-testid="text-value-prop-description"
            >
              {description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
