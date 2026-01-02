import { Link } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
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

  const navLinks = [
    { href: "/", label: "Home", testId: "link-nav-home" },
    { href: "/services", label: "Services", testId: "link-nav-services" },
    { href: "/behind-elevate", label: "Behind Elevate", testId: "link-nav-behind-elevate" },
    { href: "/blog", label: "Blog", testId: "link-nav-blog" }
  ];

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
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05, duration: 0.4 }}
                variants={linkHoverVariants}
                whileHover="hover"
              >
                <Link
                  href={link.href}
                  data-testid={link.testId}
                  className="font-serif font-medium transition-colors hover:text-primary text-foreground relative group"
                >
                  {link.label}
                  <motion.span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
                    layoutId="underline"
                  />
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              variants={linkHoverVariants}
              whileHover="hover"
            >
              <a
                href="https://tysencreager.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-nav-portfolio"
                className="font-serif font-medium transition-colors hover:text-primary text-foreground"
              >
                Portfolio
              </a>
            </motion.div>
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
            className="md:hidden p-2 rounded-md hover-elevate active-elevate-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
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
            <div className="px-4 py-6 space-y-4">
              <motion.div variants={mobileItemVariants}>
                <Link
                  href="/"
                  data-testid="link-mobile-home"
                  className="block font-serif font-medium text-foreground hover:text-primary py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </motion.div>
              <motion.div variants={mobileItemVariants}>
                <Link
                  href="/services"
                  data-testid="link-mobile-services"
                  className="block font-serif font-medium text-foreground hover:text-primary py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </Link>
              </motion.div>
              <motion.div variants={mobileItemVariants}>
                <Link
                  href="/behind-elevate"
                  data-testid="link-mobile-behind-elevate"
                  className="block font-serif font-medium text-foreground hover:text-primary py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Behind Elevate
                </Link>
              </motion.div>
              <motion.div variants={mobileItemVariants}>
                <Link
                  href="/blog"
                  data-testid="link-mobile-blog"
                  className="block font-serif font-medium text-foreground hover:text-primary py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Blog
                </Link>
              </motion.div>
              <motion.div variants={mobileItemVariants}>
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
              </motion.div>
              <motion.div variants={mobileItemVariants}>
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
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
