import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

interface Service {
  title: string;
  description: string;
  href?: string;
}

interface ServicesGridProps {
  services: Service[];
}

export default function ServicesGrid({ services }: ServicesGridProps) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.1
      }
    }
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.2
      }
    }
  };

  return (
    <section ref={sectionRef} className="pb-16 md:pb-24 lg:pb-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => {
            const cardContent = (
              <Card
                className="h-full hover-elevate transition-all duration-300 overflow-hidden group cursor-pointer"
                data-testid={`service-${index}`}
              >
                <CardHeader className="pb-3">
                  <motion.h3
                    className="font-display font-semibold text-2xl md:text-3xl text-primary group-hover:text-primary/80 transition-colors duration-300"
                    data-testid={`text-service-title-${index}`}
                    variants={titleVariants}
                  >
                    {service.title}
                  </motion.h3>
                </CardHeader>
                <CardContent>
                  <motion.p
                    className="font-serif text-lg text-muted-foreground leading-relaxed"
                    data-testid={`text-service-description-${index}`}
                    variants={descriptionVariants}
                  >
                    {service.description}
                  </motion.p>
                  {service.href && (
                    <motion.div
                      className="flex items-center gap-2 mt-4 text-primary font-sans font-medium text-sm group-hover:gap-3 transition-all duration-300"
                      variants={descriptionVariants}
                    >
                      Learn more <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            );

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                }}
              >
                {service.href ? (
                  <Link href={service.href} className="block h-full">
                    {cardContent}
                  </Link>
                ) : (
                  cardContent
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
