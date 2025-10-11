import { Button } from "@/components/ui/button";

interface CTASectionProps {
  backgroundImage?: string;
  title: string;
  ctaText: string;
  ctaHref: string;
  backgroundColor?: string;
}

export default function CTASection({
  backgroundImage,
  title,
  ctaText,
  ctaHref,
  backgroundColor = "bg-primary"
}: CTASectionProps) {
  return (
    <section className="relative py-20 md:py-32 lg:py-40">
      {backgroundImage && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </>
      )}
      {!backgroundImage && (
        <div className={`absolute inset-0 ${backgroundColor}`} />
      )}
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display font-semibold text-4xl md:text-5xl lg:text-6xl text-white mb-8 leading-tight" data-testid="text-cta-title">
          {title}
        </h2>
        <a href={ctaHref} data-testid="button-cta">
          <Button 
            size="lg" 
            variant={backgroundImage ? "outline" : "default"}
            className={`font-serif font-medium text-base md:text-lg px-8 py-6 ${backgroundImage ? 'bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20' : ''}`}
          >
            {ctaText}
          </Button>
        </a>
      </div>
    </section>
  );
}
