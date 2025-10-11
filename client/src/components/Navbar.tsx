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
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" data-testid="link-home">
            <a className="flex items-center gap-3 hover-elevate active-elevate-2 rounded-md p-2 -ml-2">
              <img src={logo} alt="Elevate Growth Solutions" className="h-12 w-auto" />
            </a>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/" data-testid="link-nav-home">
              <a className={`font-sans font-medium transition-colors hover:text-primary ${isScrolled ? "text-foreground" : "text-white"}`}>
                Home
              </a>
            </Link>
            <Link href="/services" data-testid="link-nav-services">
              <a className={`font-sans font-medium transition-colors hover:text-primary ${isScrolled ? "text-foreground" : "text-white"}`}>
                Services
              </a>
            </Link>
            <Link href="/portfolio" data-testid="link-nav-portfolio">
              <a className={`font-sans font-medium transition-colors hover:text-primary ${isScrolled ? "text-foreground" : "text-white"}`}>
                Portfolio
              </a>
            </Link>
            <a
              href="mailto:tysen@elevategrowth.solutions"
              data-testid="button-contact-nav"
            >
              <Button className="font-sans font-medium">
                Contact
              </Button>
            </a>
          </div>

          <button
            className="md:hidden p-2 rounded-md hover-elevate active-elevate-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-t border-border">
          <div className="px-4 py-6 space-y-4">
            <Link href="/" data-testid="link-mobile-home">
              <a
                className="block font-sans font-medium text-foreground hover:text-primary py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
            </Link>
            <Link href="/services" data-testid="link-mobile-services">
              <a
                className="block font-sans font-medium text-foreground hover:text-primary py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </a>
            </Link>
            <Link href="/portfolio" data-testid="link-mobile-portfolio">
              <a
                className="block font-sans font-medium text-foreground hover:text-primary py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Portfolio
              </a>
            </Link>
            <a
              href="mailto:tysen@elevategrowth.solutions"
              className="block"
              data-testid="button-contact-mobile"
            >
              <Button className="w-full font-sans font-medium">
                Contact
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
