import { Award, GraduationCap, TrendingUp } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Credential {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface CredentialsProps {
  credentials: Credential[];
  title?: string;
}

export default function Credentials({
  credentials,
  title = "Credentials & Experience"
}: CredentialsProps) {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
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

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        delay: 0.2
      }
    }
  };

  return (
    <section ref={sectionRef} className="py-10 md:py-16 lg:py-20 bg-accent/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="font-serif font-semibold text-3xl md:text-4xl lg:text-5xl text-primary text-center mb-12"
          data-testid="text-credentials-title"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {title}
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {credentials.map((credential, index) => {
            const Icon = credential.icon;
            return (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-card rounded-lg border border-card-border"
                data-testid={`credential-${index}`}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                }}
              >
                <motion.div
                  className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4"
                  variants={iconVariants}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <motion.div whileHover={{ rotate: -10 }}>
                    <Icon className="w-8 h-8 text-primary" />
                  </motion.div>
                </motion.div>

                <motion.h3
                  className="font-serif font-semibold text-xl md:text-2xl text-foreground mb-3"
                  data-testid={`text-credential-title-${index}`}
                >
                  {credential.title}
                </motion.h3>

                <motion.p
                  className="font-serif text-base text-muted-foreground leading-relaxed"
                  data-testid={`text-credential-description-${index}`}
                >
                  {credential.description}
                </motion.p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export { Award, GraduationCap, TrendingUp };
