import { Card, CardHeader, CardContent } from "@/components/ui/card";

interface Service {
  title: string;
  description: string;
}

interface ServicesGridProps {
  services: Service[];
}

export default function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <section className="pb-16 md:pb-24 lg:pb-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`service-${index}`}>
              <CardHeader className="pb-3">
                <h3 className="font-display font-semibold text-2xl md:text-3xl text-primary" data-testid={`text-service-title-${index}`}>
                  {service.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="font-serif text-lg text-muted-foreground leading-relaxed" data-testid={`text-service-description-${index}`}>
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
