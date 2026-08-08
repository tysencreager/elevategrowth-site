import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

interface Service {
  title: string;
  description: string;
  href?: string;
  image?: string;
}

interface ServicesGridProps {
  services: Service[];
}

export default function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <section className="pb-16 md:pb-24 lg:pb-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {services.map((service, index) => {
            const cardContent = (
              <article
                className="group relative h-full min-h-[300px] overflow-hidden border border-border cursor-pointer flex flex-col justify-end"
                data-testid={`service-${index}`}
              >
                {service.image && (
                  <>
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover grayscale contrast-[1.04] transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                    />
                    <div
                      className="absolute inset-0 transition-opacity duration-500"
                      style={{
                        background:
                          "linear-gradient(170deg, rgba(14,29,34,.62) 0%, rgba(14,29,34,.86) 55%, rgba(17,43,52,.94) 100%)"
                      }}
                      aria-hidden="true"
                    />
                    <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay grain" aria-hidden="true" />
                  </>
                )}

                <div className="relative z-10 p-7 md:p-9">
                  <h3
                    className="font-display font-medium text-2xl md:text-[28px] text-white mb-3"
                    data-testid={`text-service-title-${index}`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="font-serif font-light text-[15px] text-white/70 leading-relaxed"
                    data-testid={`text-service-description-${index}`}
                  >
                    {service.description}
                  </p>
                  {service.href && (
                    <div className="flex items-center gap-2 mt-5 text-[#4AC0D8] font-sans text-[10.5px] tracking-[0.25em] uppercase group-hover:gap-3.5 transition-all duration-300">
                      Learn more <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              </article>
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
