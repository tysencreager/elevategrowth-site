import { Phone, Lightbulb, Rocket, TrendingUp } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ProcessStep {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface ProcessProps {
  title?: string;
  subtitle?: string;
  steps: ProcessStep[];
}

export default function Process({
  title = "How We Work",
  subtitle,
  steps
}: ProcessProps) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.2
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4
      }
    }
  };

  const stepVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100
      }
    }
  };

  const iconContainerVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        delay: 0.1
      }
    }
  };

  const numberVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 200,
        delay: 0.3
      }
    }
  };

  return (
    <section ref={sectionRef} className="py-10 md:py-16 lg:py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="font-serif font-semibold text-3xl md:text-4xl lg:text-5xl text-primary mb-4"
            data-testid="text-process-title"
            variants={headerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {title}
          </motion.h2>
          {subtitle && (
            <motion.p
              className="font-serif text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
              data-testid="text-process-subtitle"
              variants={subtitleVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {subtitle}
            </motion.p>
          )}
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center"
                data-testid={`process-step-${index}`}
                variants={stepVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="relative mb-6">
                  <motion.div
                    className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center"
                    variants={iconContainerVariants}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(var(--primary), 0.2)",
                      transition: { duration: 0.3 }
                    }}
                  >
                    <motion.div
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="w-10 h-10 text-primary" />
                    </motion.div>
                  </motion.div>
                  <motion.div
                    className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-serif font-semibold text-sm"
                    variants={numberVariants}
                    whileHover={{ scale: 1.2 }}
                  >
                    {index + 1}
                  </motion.div>
                </div>

                <motion.h3
                  className="font-serif font-semibold text-xl md:text-2xl text-foreground mb-3"
                  data-testid={`text-process-step-title-${index}`}
                >
                  {step.title}
                </motion.h3>

                <motion.p
                  className="font-serif text-base text-muted-foreground leading-relaxed"
                  data-testid={`text-process-step-description-${index}`}
                >
                  {step.description}
                </motion.p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export { Phone, Lightbulb, Rocket, TrendingUp };
