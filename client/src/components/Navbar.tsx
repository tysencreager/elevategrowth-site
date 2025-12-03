import { Link } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@assets/EGS LOGO Full_1760211529668.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-background/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" data-testid="link-home" className="flex items-center gap-3 hover-elevate active-elevate-2 rounded-md p-2 -ml-2">
            <img src={logo} alt="Elevate Growth Solutions" className="h-16 w-auto" />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/" data-testid="link-nav-home" className="font-serif font-medium transition-colors hover:text-primary text-foreground">
              Home
            </Link>
            <Link href="/services" data-testid="link-nav-services" className="font-serif font-medium transition-colors hover:text-primary text-foreground">
              Services
            </Link>
            <Link href="/behind-elevate" data-testid="link-nav-behind-elevate" className="font-serif font-medium transition-colors hover:text-primary text-foreground">
              Behind Elevate
            </Link>
            <a href="https://tysencreager.com" target="_blank" rel="noopener noreferrer" data-testid="link-nav-portfolio" className="font-serif font-medium transition-colors hover:text-primary text-foreground">
              Portfolio
            </a>
            <Link href="/contact" data-testid="link-nav-contact">
              <Button className="font-serif font-medium">
                Contact
              </Button>
            </Link>
          </div>

          <button
            className="md:hidden p-2 rounded-md hover-elevate active-elevate-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-t border-border">
          <div className="px-4 py-6 space-y-4">
            <Link 
              href="/" 
              data-testid="link-mobile-home"
              className="block font-serif font-medium text-foreground hover:text-primary py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/services" 
              data-testid="link-mobile-services"
              className="block font-serif font-medium text-foreground hover:text-primary py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/behind-elevate" 
              data-testid="link-mobile-behind-elevate"
              className="block font-serif font-medium text-foreground hover:text-primary py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Behind Elevate
            </Link>
            <a
              href="https://tysencreager.com"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-mobile-portfolio"
              className="block font-serif font-medium text-foreground hover:text-primary py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Portfolio
            </a>
            <Link 
              href="/contact" 
              data-testid="link-mobile-contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block"
            >
              <Button className="w-full font-serif font-medium">
                Contact
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
