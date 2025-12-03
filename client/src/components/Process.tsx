import { Phone, Lightbulb, Rocket, TrendingUp } from "lucide-react";

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
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif font-semibold text-3xl md:text-4xl lg:text-5xl text-primary mb-4" data-testid="text-process-title">
            {title}
          </h2>
          {subtitle && (
            <p className="font-serif text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-process-subtitle">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index} 
                className="flex flex-col items-center text-center"
                data-testid={`process-step-${index}`}
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-10 h-10 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-serif font-semibold text-sm">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="font-serif font-semibold text-xl md:text-2xl text-foreground mb-3" data-testid={`text-process-step-title-${index}`}>
                  {step.title}
                </h3>
                
                <p className="font-serif text-base text-muted-foreground leading-relaxed" data-testid={`text-process-step-description-${index}`}>
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export { Phone, Lightbulb, Rocket, TrendingUp };
