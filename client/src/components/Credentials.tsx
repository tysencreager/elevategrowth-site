import { Award, GraduationCap, TrendingUp } from "lucide-react";

interface Credential {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface CredentialsProps {
  credentials: Credential[];
  title?: string;
}

export default function Credentials({ 
  credentials, 
  title = "Credentials & Experience" 
}: CredentialsProps) {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif font-semibold text-3xl md:text-4xl lg:text-5xl text-primary text-center mb-12" data-testid="text-credentials-title">
          {title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {credentials.map((credential, index) => {
            const Icon = credential.icon;
            return (
              <div 
                key={index} 
                className="flex flex-col items-center text-center p-6 bg-card rounded-lg border border-card-border"
                data-testid={`credential-${index}`}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="font-serif font-semibold text-xl md:text-2xl text-foreground mb-3" data-testid={`text-credential-title-${index}`}>
                  {credential.title}
                </h3>
                
                <p className="font-serif text-base text-muted-foreground leading-relaxed" data-testid={`text-credential-description-${index}`}>
                  {credential.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export { Award, GraduationCap, TrendingUp };
