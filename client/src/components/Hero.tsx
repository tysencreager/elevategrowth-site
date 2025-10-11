import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  height?: string;
}

export default function Hero({
  backgroundImage,
  title,
  subtitle,
  ctaText,
  ctaHref,
  height = "90vh"
}: HeroProps) {
  return (
    <div 
      className="relative flex items-center justify-center text-center px-4 pt-32"
      style={{ minHeight: height }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        <h1 className="font-display font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight" data-testid="text-hero-title">
          {title}
        </h1>
        {subtitle && (
          <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-white/95 mb-8 max-w-3xl mx-auto leading-relaxed" data-testid="text-hero-subtitle">
            {subtitle}
          </p>
        )}
        {ctaText && ctaHref && (
          <a href={ctaHref} data-testid="button-hero-cta">
            <Button 
              size="lg" 
              className="font-serif font-medium text-base md:text-lg px-8 py-6 gap-2"
            >
              {ctaText}
              <ArrowRight className="h-5 w-5" />
            </Button>
          </a>
        )}
      </div>
    </div>
  );
}
