import logo from "@assets/EGS LOGO Full_1760211529668.png";
import { Link } from "wouter";
import { Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-card-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="space-y-4">
            <img src={logo} alt="Elevate Growth Solutions" className="h-16 w-auto" data-testid="img-footer-logo" />
            <p className="font-serif text-sm text-muted-foreground max-w-xs">
              Boutique Full-Stack Marketing
            </p>
            <div className="flex gap-4 pt-2">
              <a 
                href="https://www.instagram.com/elevategrowthsolutions" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-footer-instagram"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/tysen-creager-a75914207/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-footer-linkedin"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif font-semibold text-foreground mb-4" data-testid="text-footer-nav-title">Quick Links</h3>
            <nav className="space-y-2">
              <Link href="/" data-testid="link-footer-home" className="block font-serif text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/services" data-testid="link-footer-services" className="block font-serif text-sm text-muted-foreground hover:text-primary transition-colors">
                Services
              </Link>
              <Link href="/behind-elevate" data-testid="link-footer-behind-elevate" className="block font-serif text-sm text-muted-foreground hover:text-primary transition-colors">
                Behind Elevate
              </Link>
              <a href="https://tysencreager.com" target="_blank" rel="noopener noreferrer" data-testid="link-footer-portfolio" className="block font-serif text-sm text-muted-foreground hover:text-primary transition-colors">
                Portfolio
              </a>
              <Link href="/contact" data-testid="link-footer-contact" className="block font-serif text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>
          
          <div>
            <h3 className="font-serif font-semibold text-foreground mb-4" data-testid="text-footer-legal-title">Legal</h3>
            <nav className="space-y-2">
              <Link href="/privacy-policy" data-testid="link-footer-privacy" className="block font-serif text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-and-conditions" data-testid="link-footer-terms" className="block font-serif text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms & Conditions
              </Link>
            </nav>
          </div>
          
          <div>
            <h3 className="font-serif font-semibold text-foreground mb-4" data-testid="text-footer-email-title">Email</h3>
            <a 
              href="mailto:tysen@elevategrowth.solutions" 
              className="block font-serif text-sm text-muted-foreground hover:text-primary transition-colors"
              data-testid="link-footer-email"
            >
              tysen@elevategrowth.solutions
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-card-border">
          <p className="font-serif text-sm text-muted-foreground text-center" data-testid="text-footer-copyright">
            © {new Date().getFullYear()} Elevate Growth Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
