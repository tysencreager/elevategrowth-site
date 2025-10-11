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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {services.map((service, index) => (
            <div key={index} className="space-y-4" data-testid={`service-${index}`}>
              <h3 className="font-display font-semibold text-2xl md:text-3xl text-primary" data-testid={`text-service-title-${index}`}>
                {service.title}
              </h3>
              <p className="font-serif text-lg text-foreground leading-relaxed" data-testid={`text-service-description-${index}`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
