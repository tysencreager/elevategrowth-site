import { Link } from "wouter";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const serviceSubLinks = [
  { href: "/services", label: "All Services" },
  { href: "/services/websites", label: "Websites" },
  { href: "/services/branding", label: "Branding" },
  { href: "/services/seo", label: "SEO & Local Search" },
  { href: "/services/social-media", label: "Social Media" },
  { href: "/services/content-creation", label: "Content Creation" },
  { href: "/services/ad-campaigns", label: "Ad Campaigns" },
  { href: "/services/audits", label: "Audits" }
];

const navLinks = [
  { href: "/portfolio", label: "Work" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/behind-elevate", label: "About" }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass =
    "font-sans text-[12px] font-medium tracking-[0.15em] uppercase text-muted-foreground hover:text-primary transition-colors pb-1 border-b border-transparent hover:border-primary";

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border transition-shadow duration-300 ${
        isScrolled ? "shadow-sm" : ""
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" data-testid="link-home" className="flex flex-col leading-none p-2 -ml-2">
            <span className="font-display italic text-[26px] text-foreground tracking-wide">Elevate</span>
            <span className="font-sans text-[8px] tracking-[0.45em] uppercase text-primary mt-1">
              Growth Solutions
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-9">
            {/* Services dropdown */}
            <div
              ref={servicesRef}
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                data-testid="link-nav-services"
                className={`${linkClass} flex items-center gap-1`}
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Services
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute top-full left-0 mt-3 w-60 bg-background border border-border shadow-xl py-2 z-50"
                  >
                    {serviceSubLinks.map((subLink) => (
                      <Link
                        key={subLink.href}
                        href={subLink.href}
                        className="block px-5 py-2.5 font-sans text-[11px] tracking-[0.12em] uppercase text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        {subLink.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={linkClass} data-testid={`link-nav-${link.label.toLowerCase()}`}>
                {link.label}
              </Link>
            ))}

            {/* CTA */}
            <Link
              href="/contact"
              data-testid="link-nav-contact"
              className="font-sans text-[11px] font-medium tracking-[0.2em] uppercase bg-primary text-primary-foreground px-6 py-3.5 hover:bg-foreground transition-colors"
            >
              Start a Project
            </Link>
          </div>

          <motion.button
            className="md:hidden p-3 min-w-[48px] min-h-[48px] flex items-center justify-center border border-border"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-background border-t border-border overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-4 py-6 space-y-1">
              {/* Services accordion */}
              <button
                data-testid="link-mobile-services"
                className="w-full flex items-center justify-between font-sans text-[12px] font-medium tracking-[0.15em] uppercase text-foreground py-3 min-h-[48px]"
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileServicesOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {isMobileServicesOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden pl-4 border-l border-primary/30 ml-1"
                  >
                    {serviceSubLinks.map((subLink) => (
                      <Link
                        key={subLink.href}
                        href={subLink.href}
                        className="block font-sans text-[11px] tracking-[0.12em] uppercase text-muted-foreground hover:text-primary py-2.5"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsMobileServicesOpen(false);
                        }}
                      >
                        {subLink.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block font-sans text-[12px] font-medium tracking-[0.15em] uppercase text-foreground hover:text-primary py-3 min-h-[48px]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-3">
                <Link
                  href="/contact"
                  data-testid="link-mobile-contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-center font-sans text-[11px] font-medium tracking-[0.2em] uppercase bg-primary text-primary-foreground px-6 py-4"
                >
                  Start a Project
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
