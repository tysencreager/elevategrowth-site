import logo from "@assets/EGS LOGO Full_1760211529668.png";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-card-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="space-y-4">
            <img src={logo} alt="Elevate Growth Solutions" className="h-16 w-auto" data-testid="img-footer-logo" />
            <p className="font-serif text-sm text-muted-foreground max-w-xs">
              Boutique Full-Stack Marketing
            </p>
          </div>
          
          <div>
            <h3 className="font-sans font-semibold text-foreground mb-4" data-testid="text-footer-nav-title">Quick Links</h3>
            <nav className="space-y-2">
              <Link href="/" data-testid="link-footer-home">
                <a className="block font-sans text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </a>
              </Link>
              <Link href="/services" data-testid="link-footer-services">
                <a className="block font-sans text-sm text-muted-foreground hover:text-primary transition-colors">
                  Services
                </a>
              </Link>
              <Link href="/behind-elevate" data-testid="link-footer-behind-elevate">
                <a className="block font-sans text-sm text-muted-foreground hover:text-primary transition-colors">
                  Behind Elevate
                </a>
              </Link>
              <Link href="/portfolio" data-testid="link-footer-portfolio">
                <a className="block font-sans text-sm text-muted-foreground hover:text-primary transition-colors">
                  Portfolio
                </a>
              </Link>
              <Link href="/contact" data-testid="link-footer-contact">
                <a className="block font-sans text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </Link>
            </nav>
          </div>
          
          <div>
            <h3 className="font-sans font-semibold text-foreground mb-4" data-testid="text-footer-email-title">Email</h3>
            <a 
              href="mailto:tysen@elevategrowth.solutions" 
              className="block font-sans text-sm text-muted-foreground hover:text-primary transition-colors"
              data-testid="link-footer-email"
            >
              tysen@elevategrowth.solutions
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-card-border">
          <p className="font-sans text-sm text-muted-foreground text-center" data-testid="text-footer-copyright">
            © {new Date().getFullYear()} Elevate Growth Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
