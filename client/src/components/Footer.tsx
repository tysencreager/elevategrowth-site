import logo from "@assets/EGS LOGO Full_1760211529668.png";
import { Link } from "wouter";
import { Instagram, Linkedin, Phone } from "lucide-react";
import EmailSubscription from "./EmailSubscription";

export default function Footer() {
  return (
    <>
      <EmailSubscription />
      <footer className="bg-card border-t border-card-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="space-y-4">
              <img
                src={logo}
                alt="Elevate Growth Solutions"
                width={180}
                height={64}
                loading="lazy"
                decoding="async"
                className="h-16 w-auto"
                data-testid="img-footer-logo"
              />
              <p className="font-serif text-sm text-muted-foreground max-w-xs">
                Boutique Full-Stack Marketing
              </p>
              <div className="flex gap-2 pt-2">
                <a
                  href="https://www.instagram.com/elevategrowthsolutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
                  data-testid="link-footer-instagram"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/tysen-creager-a75914207/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
                  data-testid="link-footer-linkedin"
                  aria-label="Connect on LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div>
              <h3
                className="font-serif font-semibold text-foreground mb-4"
                data-testid="text-footer-nav-title"
              >
                Quick Links
              </h3>
              <nav className="space-y-2">
                <Link
                  href="/"
                  data-testid="link-footer-home"
                  className="block font-serif text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/services"
                  data-testid="link-footer-services"
                  className="block font-serif text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Services
                </Link>
                <Link
                  href="/behind-elevate"
                  data-testid="link-footer-behind-elevate"
                  className="block font-serif text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Behind Elevate
                </Link>
                <Link
                  href="/contact"
                  data-testid="link-footer-contact"
                  className="block font-serif text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
                <Link
                  href="/portfolio"
                  data-testid="link-footer-portfolio"
                  className="block font-serif text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Portfolio
                </Link>
              </nav>
            </div>

            <div>
              <h3
                className="font-serif font-semibold text-foreground mb-4"
                data-testid="text-footer-locations-title"
              >
                Locations
              </h3>
              <nav className="space-y-2">
                <Link
                  href="/st-george-web-design"
                  className="block font-serif text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  St. George
                </Link>
                <Link
                  href="/salt-lake-city-marketing"
                  className="block font-serif text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Salt Lake City
                </Link>
                <Link
                  href="/ogden-web-design"
                  className="block font-serif text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Ogden
                </Link>
              </nav>
            </div>

            <div>
              <h3
                className="font-serif font-semibold text-foreground mb-4"
                data-testid="text-footer-email-title"
              >
                Contact
              </h3>
              <a
                href="tel:+14358179645"
                className="flex items-center gap-2 font-serif text-sm text-muted-foreground hover:text-primary transition-colors mb-2"
                data-testid="link-footer-phone"
              >
                <Phone className="h-4 w-4" />
                (435) 817-9645
              </a>
              <a
                href="mailto:tysen@elevategrowth.solutions"
                className="block font-serif text-sm text-muted-foreground hover:text-primary transition-colors mb-2"
                data-testid="link-footer-email"
              >
                tysen@elevategrowth.solutions
              </a>
              <nav className="space-y-2 mt-4">
                <Link
                  href="/privacy-policy"
                  data-testid="link-footer-privacy"
                  className="block font-serif text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-and-conditions"
                  data-testid="link-footer-terms"
                  className="block font-serif text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms & Conditions
                </Link>
              </nav>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-card-border">
            <p className="font-serif text-sm text-muted-foreground text-center mb-2">
              Proudly serving businesses in Utah and nationwide
            </p>
            <p
              className="font-serif text-sm text-muted-foreground text-center"
              data-testid="text-footer-copyright"
            >
              © {new Date().getFullYear()} Elevate Growth Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
