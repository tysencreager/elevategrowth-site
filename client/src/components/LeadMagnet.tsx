import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";

interface LeadMagnetProps {
  title: string;
  description: string;
  ctaText?: string;
  subject?: string;
  emailBody?: string;
}

export default function LeadMagnet({ 
  title, 
  description, 
  ctaText = "Get It Free",
  subject = "Interested in Free 90-Day Growth Starter Pack",
  emailBody = "Hi Tysen,\n\nI'm interested in receiving your free 90-Day Growth Starter Pack. Please send me the details.\n\nThank you!"
}: LeadMagnetProps) {
  const mailtoLink = `mailto:tysen@elevategrowth.solutions?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-primary/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Download className="w-8 h-8 text-primary" />
          </div>
          
          <h2 className="font-serif font-semibold text-3xl md:text-4xl lg:text-5xl text-primary mb-6" data-testid="text-lead-magnet-title">
            {title}
          </h2>
          
          <p className="font-serif text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed" data-testid="text-lead-magnet-description">
            {description}
          </p>
          
          <a href={mailtoLink} data-testid="button-lead-magnet">
            <Button size="lg" className="font-serif font-medium text-base md:text-lg px-8 py-6 gap-3">
              <Mail className="h-5 w-5" />
              {ctaText}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
