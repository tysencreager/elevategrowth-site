import { Link } from "wouter";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@assets/EGS LOGO Full_1760211529668.png";

const serviceSubLinks = [
  { href: "/services", label: "All Services" },
  { href: "/services/websites", label: "Websites" },
  { href: "/services/branding", label: "Branding" },
  { href: "/services/seo", label: "SEO & Local Search" },
  { href: "/services/social-media", label: "Social Media" },
  { href: "/services/content-creation", label: "Content Creation" },
  { href: "/services/ad-campaigns", label: "Ad Campaigns" },
  { href: "/pricing", label: "Pricing" }
];

const resultsSubLinks = [
  { href: "/testimonials", label: "Testimonials" },
  { href: "https://tysencreager.com", label: "Portfolio", external: true }
];

const resourcesSubLinks = [
  { href: "/behind-elevate", label: "Behind Elevate" },
  { href: "/why-hand-coded", label: "Why Hand-Coded" },
  { href: "/website-handoff-options", label: "Website Handoff Options" },
  { href: "/blog", label: "Blog" }
];

const locationsSubLinks = [
  { href: "/st-george-web-design", label: "St. George" },
  { href: "/salt-lake-city-marketing", label: "Salt Lake City" },
  { href: "/ogden-web-design", label: "Ogden" }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isResultsOpen, setIsResultsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileResultsOpen, setIsMobileResultsOpen] = useState(false);
  const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
      if (resultsRef.current && !resultsRef.current.contains(event.target as Node)) {
        setIsResultsOpen(false);
      }
      if (resourcesRef.current && !resourcesRef.current.contains(event.target as Node)) {
        setIsResourcesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    // Use passive listener to avoid blocking scroll on mobile
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Simplified nav structure with dropdowns
  type DropdownType = 'services' | 'results' | 'resources';

  const dropdownConfig: Record<DropdownType, {
    label: string;
    testId: string;
    links: typeof serviceSubLinks;
    isOpen: boolean;
    setOpen: (open: boolean) => void;
    ref: React.RefObject<HTMLDivElement>;
  }> = {
    services: {
      label: "Services",
      testId: "link-nav-services",
      links: serviceSubLinks,
      isOpen: isServicesOpen,
      setOpen: setIsServicesOpen,
      ref: servicesRef
    },
    results: {
      label: "Results",
      testId: "link-nav-results",
      links: resultsSubLinks,
      isOpen: isResultsOpen,
      setOpen: setIsResultsOpen,
      ref: resultsRef
    },
    resources: {
      label: "Resources",
      testId: "link-nav-resources",
      links: resourcesSubLinks,
      isOpen: isResourcesOpen,
      setOpen: setIsResourcesOpen,
      ref: resourcesRef
    }
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
        when: "afterChildren"
      }
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
        when: "beforeChildren",
        staggerChildren: 0.05
      }
    }
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const iconVariants = {
    closed: { rotate: 0 },
    open: { rotate: 180 }
  };

  const linkHoverVariants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-background/90 backdrop-blur-sm"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" data-testid="link-home" className="flex items-center gap-3 hover-elevate active-elevate-2 rounded-md p-2 -ml-2">
            <motion.img
              src={logo}
              alt="Elevate Growth Solutions"
              width={180}
              height={64}
              className="h-16 w-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {/* Home link */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              variants={linkHoverVariants}
              whileHover="hover"
            >
              <Link
                href="/"
                data-testid="link-nav-home"
                className="font-serif font-medium transition-colors hover:text-primary text-foreground relative group"
              >
                Home
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
                  layoutId="underline"
                />
              </Link>
            </motion.div>

            {/* Dropdown menus */}
            {(Object.keys(dropdownConfig) as DropdownType[]).map((key, index) => {
              const config = dropdownConfig[key];
              return (
                <motion.div
                  key={key}
                  ref={config.ref as React.RefObject<HTMLDivElement>}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + index * 0.05, duration: 0.4 }}
                  className="relative"
                  onMouseEnter={() => config.setOpen(true)}
                  onMouseLeave={() => config.setOpen(false)}
                >
                  <button
                    data-testid={config.testId}
                    className="font-serif font-medium transition-colors hover:text-primary text-foreground relative group flex items-center gap-1"
                    onClick={() => config.setOpen(!config.isOpen)}
                  >
                    {config.label}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${config.isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {config.isOpen && (
                      <motion.div
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="absolute top-full left-0 mt-2 w-56 bg-primary rounded-lg shadow-xl shadow-primary/20 py-2 z-50"
                      >
                        {config.links.map((subLink) => (
                          'external' in subLink && subLink.external ? (
                            <a
                              key={subLink.href}
                              href={subLink.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block px-4 py-2.5 font-serif text-sm text-white/90 hover:bg-white/20 hover:text-white transition-colors"
                              onClick={() => config.setOpen(false)}
                            >
                              {subLink.label}
                            </a>
                          ) : (
                            <Link
                              key={subLink.href}
                              href={subLink.href}
                              className="block px-4 py-2.5 font-serif text-sm text-white/90 hover:bg-white/20 hover:text-white transition-colors"
                              onClick={() => config.setOpen(false)}
                            >
                              {subLink.label}
                            </Link>
                          )
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}

            {/* Contact CTA */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/contact" data-testid="link-nav-contact">
                <Button className="font-serif font-medium">
                  Contact
                </Button>
              </Link>
            </motion.div>
          </div>

          <motion.button
            className="md:hidden p-3 min-w-[48px] min-h-[48px] rounded-md hover-elevate active-elevate-2 flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            variants={iconVariants}
            animate={isMobileMenuOpen ? "open" : "closed"}
            transition={{ duration: 0.3 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6 text-foreground" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6 text-foreground" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-background/98 backdrop-blur-md border-t border-border overflow-hidden"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="px-4 py-6 space-y-2">
              {/* Home */}
              <motion.div variants={mobileItemVariants}>
                <Link
                  href="/"
                  data-testid="link-mobile-home"
                  className="block font-serif font-medium text-foreground hover:text-primary py-3 min-h-[48px]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </motion.div>

              {/* Services Dropdown */}
              <motion.div variants={mobileItemVariants}>
                <button
                  data-testid="link-mobile-services"
                  className="w-full flex items-center justify-between font-serif font-medium text-foreground hover:text-primary py-3 min-h-[48px]"
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isMobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden pl-4 border-l-2 border-primary/20 ml-2"
                    >
                      {serviceSubLinks.map((subLink) => (
                        <Link
                          key={subLink.href}
                          href={subLink.href}
                          className="block font-serif text-sm text-muted-foreground hover:text-primary py-2.5"
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
              </motion.div>

              {/* Results Dropdown */}
              <motion.div variants={mobileItemVariants}>
                <button
                  data-testid="link-mobile-results"
                  className="w-full flex items-center justify-between font-serif font-medium text-foreground hover:text-primary py-3 min-h-[48px]"
                  onClick={() => setIsMobileResultsOpen(!isMobileResultsOpen)}
                >
                  Results
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileResultsOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isMobileResultsOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden pl-4 border-l-2 border-primary/20 ml-2"
                    >
                      {resultsSubLinks.map((subLink) => (
                        'external' in subLink && subLink.external ? (
                          <a
                            key={subLink.href}
                            href={subLink.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block font-serif text-sm text-muted-foreground hover:text-primary py-2.5"
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setIsMobileResultsOpen(false);
                            }}
                          >
                            {subLink.label}
                          </a>
                        ) : (
                          <Link
                            key={subLink.href}
                            href={subLink.href}
                            className="block font-serif text-sm text-muted-foreground hover:text-primary py-2.5"
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setIsMobileResultsOpen(false);
                            }}
                          >
                            {subLink.label}
                          </Link>
                        )
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Resources Dropdown */}
              <motion.div variants={mobileItemVariants}>
                <button
                  data-testid="link-mobile-resources"
                  className="w-full flex items-center justify-between font-serif font-medium text-foreground hover:text-primary py-3 min-h-[48px]"
                  onClick={() => setIsMobileResourcesOpen(!isMobileResourcesOpen)}
                >
                  Resources
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileResourcesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isMobileResourcesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden pl-4 border-l-2 border-primary/20 ml-2"
                    >
                      {resourcesSubLinks.map((subLink) => (
                        <Link
                          key={subLink.href}
                          href={subLink.href}
                          className="block font-serif text-sm text-muted-foreground hover:text-primary py-2.5"
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setIsMobileResourcesOpen(false);
                          }}
                        >
                          {subLink.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Contact CTA */}
              <motion.div variants={mobileItemVariants} className="pt-2">
                <Link
                  href="/contact"
                  data-testid="link-mobile-contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block"
                >
                  <Button className="w-full font-serif font-medium min-h-[48px]">
                    Contact
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
