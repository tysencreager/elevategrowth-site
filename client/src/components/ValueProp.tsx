interface ValuePropProps {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  imagePosition?: "left" | "right";
}

export default function ValueProp({
  image,
  imageAlt,
  title,
  description,
  imagePosition = "left"
}: ValuePropProps) {
  return (
    <section className="pt-16 md:pt-24 lg:pt-32 pb-12 md:pb-16 lg:pb-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col ${imagePosition === "right" ? "md:flex-row-reverse" : "md:flex-row"} gap-12 md:gap-16 items-center md:items-start`}>
          <div className="flex-1 flex justify-center">
            <img
              src={image}
              alt={imageAlt}
              className="w-auto h-full max-h-[600px] rounded-lg object-cover"
              data-testid="img-value-prop"
            />
          </div>
          <div className="flex-1">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-primary mb-6 leading-tight" data-testid="text-value-prop-title">
              {title}
            </h2>
            <p className="font-serif text-lg md:text-xl text-foreground leading-relaxed" data-testid="text-value-prop-description">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
