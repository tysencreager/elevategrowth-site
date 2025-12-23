import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedButton } from "@/components/ui/motion";

interface LeadMagnetProps {
  title: string;
  description: string;
  ctaText?: string;
  subject?: string;
  emailBody?: string;
}

export default function LeadMagnet({
  title,
  description,
  ctaText = "Get It Free",
  subject = "Interested in Free 90-Day Growth Starter Pack",
  emailBody = "Hi Tysen,\n\nI'm interested in receiving your free 90-Day Growth Starter Pack. Please send me the details.\n\nThank you!"
}: LeadMagnetProps) {
  const mailtoLink = `mailto:tysen@elevategrowth.solutions?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const iconVariants = {
    hidden: { scale: 0, rotate: -180, opacity: 0 },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
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

  const descriptionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.4
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
        delay: 0.6
      }
    }
  };

  const floatingAnimation = {
    y: [-5, 5, -5],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section ref={sectionRef} className="py-16 md:py-24 lg:py-32 bg-primary/5 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6"
            variants={iconVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover={{ scale: 1.1, rotate: 10 }}
          >
            <motion.div animate={floatingAnimation}>
              <Download className="w-8 h-8 text-primary" />
            </motion.div>
          </motion.div>

          <motion.h2
            className="font-serif font-semibold text-3xl md:text-4xl lg:text-5xl text-primary mb-6"
            data-testid="text-lead-magnet-title"
            variants={titleVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {title}
          </motion.h2>

          <motion.p
            className="font-serif text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
            data-testid="text-lead-magnet-description"
            variants={descriptionVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {description}
          </motion.p>

          <motion.div
            variants={buttonVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <a href={mailtoLink} data-testid="button-lead-magnet">
              <AnimatedButton>
                <Button size="lg" className="font-serif font-medium text-base md:text-lg px-8 py-6 gap-3 group">
                  <motion.span
                    className="inline-block"
                    whileHover={{ rotate: 15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Mail className="h-5 w-5" />
                  </motion.span>
                  {ctaText}
                </Button>
              </AnimatedButton>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
