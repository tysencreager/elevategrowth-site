import { Button } from "@/components/ui/button";
import { Video, Mail } from "lucide-react";
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
  ctaText = "Request Your Free Audit",
  subject = "Free Website Video Audit Request",
  emailBody = "Hi Tysen,\n\nI'd like to request a free personalized video audit of my website.\n\nMy website URL: [Please add your website URL here]\n\nThank you!"
}: LeadMagnetProps) {
  const mailtoLink = `mailto:tysen@elevategrowth.solutions?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  // Simplified animation variants for better performance
  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        delay: 0.1
      }
    }
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        delay: 0.3
      }
    }
  };

  return (
    <section ref={sectionRef} className="py-10 md:py-16 lg:py-20 bg-primary/5 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6"
            variants={iconVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <Video className="w-8 h-8 text-primary" />
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
                  <Mail className="h-5 w-5" />
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
