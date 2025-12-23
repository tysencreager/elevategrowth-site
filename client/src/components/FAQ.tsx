import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
}

export default function FAQ({ items, title = "Frequently Asked Questions", subtitle }: FAQProps) {
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
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
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

  return (
    <section ref={sectionRef} className="py-16 md:py-24 lg:py-32 bg-accent/20 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            className="font-serif font-semibold text-3xl md:text-4xl lg:text-5xl text-primary mb-4"
            data-testid="text-faq-title"
            variants={headerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {title}
          </motion.h2>
          {subtitle && (
            <motion.p
              className="font-serif text-lg md:text-xl text-muted-foreground"
              data-testid="text-faq-subtitle"
              variants={subtitleVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {subtitle}
            </motion.p>
          )}
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {items.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-card border border-card-border rounded-lg px-6"
                  data-testid={`accordion-item-${index}`}
                >
                  <AccordionTrigger
                    className="font-serif text-lg md:text-xl text-foreground hover:text-primary py-5"
                    data-testid={`button-faq-question-${index}`}
                  >
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent
                    className="font-serif text-base md:text-lg text-muted-foreground pb-5 leading-relaxed"
                    data-testid={`text-faq-answer-${index}`}
                  >
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
