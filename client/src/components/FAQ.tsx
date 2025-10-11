import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-accent/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif font-semibold text-3xl md:text-4xl lg:text-5xl text-primary mb-4" data-testid="text-faq-title">
            {title}
          </h2>
          {subtitle && (
            <p className="font-serif text-lg md:text-xl text-muted-foreground" data-testid="text-faq-subtitle">
              {subtitle}
            </p>
          )}
        </div>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          {items.map((item, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border border-card-border rounded-lg px-6"
              data-testid={`accordion-item-${index}`}
            >
              <AccordionTrigger className="font-serif text-lg md:text-xl text-foreground hover:text-primary py-5" data-testid={`button-faq-question-${index}`}>
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="font-serif text-base md:text-lg text-muted-foreground pb-5 leading-relaxed" data-testid={`text-faq-answer-${index}`}>
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
