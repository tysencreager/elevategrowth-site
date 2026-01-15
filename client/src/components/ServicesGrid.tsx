import { Card, CardHeader, CardContent } from "@/components/ui/card";
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
  return (
    <section className="pb-16 md:pb-24 lg:pb-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => {
            const cardContent = (
              <Card
                className="h-full hover-elevate transition-all duration-300 overflow-hidden group cursor-pointer"
                data-testid={`service-${index}`}
              >
                <CardHeader className="pb-3">
                  <h3
                    className="font-display font-semibold text-2xl md:text-3xl text-primary group-hover:text-primary/80 transition-colors duration-300"
                    data-testid={`text-service-title-${index}`}
                  >
                    {service.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p
                    className="font-serif text-lg text-muted-foreground leading-relaxed"
                    data-testid={`text-service-description-${index}`}
                  >
                    {service.description}
                  </p>
                  {service.href && (
                    <div className="flex items-center gap-2 mt-4 text-primary font-sans font-medium text-sm group-hover:gap-3 transition-all duration-300">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </CardContent>
              </Card>
            );

            return (
              <div key={index}>
                {service.href ? (
                  <Link href={service.href} className="block h-full">
                    {cardContent}
                  </Link>
                ) : (
                  cardContent
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
