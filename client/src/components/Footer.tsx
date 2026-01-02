import logo from "@assets/EGS LOGO Full_1760211529668.png";
import { Link } from "wouter";
import { Instagram, Linkedin } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import EmailSubscription from "./EmailSubscription";

export default function Footer() {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const columnVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const socialVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200
      }
    }
  };

  const copyrightVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.4
      }
    }
  };

  return (
    <>
      <EmailSubscription />
      <footer ref={footerRef} className="bg-card border-t border-card-border py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div className="space-y-4" variants={columnVariants}>
              <motion.img
                src={logo}
                alt="Elevate Growth Solutions"
                width={180}
                height={64}
                loading="lazy"
                decoding="async"
                className="h-16 w-auto"
                data-testid="img-footer-logo"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
              <motion.p
                className="font-serif text-sm text-muted-foreground max-w-xs"
                variants={linkVariants}
              >
                Boutique Full-Stack Marketing
              </motion.p>
              <motion.div
                className="flex gap-2 pt-2"
                variants={containerVariants}
              >
                <motion.a
                  href="https://www.instagram.com/elevategrowthsolutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
                  data-testid="link-footer-instagram"
                  aria-label="Follow us on Instagram"
                  variants={socialVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Instagram className="h-6 w-6" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/tysen-creager-a75914207/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
                  data-testid="link-footer-linkedin"
                  aria-label="Connect on LinkedIn"
                  variants={socialVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="h-6 w-6" />
                </motion.a>
              </motion.div>
            </motion.div>

            <motion.div variants={columnVariants}>
              <motion.h3
                className="font-serif font-semibold text-foreground mb-4"
                data-testid="text-footer-nav-title"
              >
                Quick Links
              </motion.h3>
              <motion.nav className="space-y-2" variants={containerVariants}>
                {[
                  { href: "/", label: "Home", testId: "link-footer-home" },
                  { href: "/services", label: "Services", testId: "link-footer-services" },
                  { href: "/behind-elevate", label: "Behind Elevate", testId: "link-footer-behind-elevate" },
                  { href: "/contact", label: "Contact", testId: "link-footer-contact" }
                ].map((link) => (
                  <motion.div key={link.href} variants={linkVariants} whileHover={{ x: 5 }}>
                    <Link
                      href={link.href}
                      data-testid={link.testId}
                      className="block font-serif text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div variants={linkVariants} whileHover={{ x: 5 }}>
                  <a
                    href="https://tysencreager.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="link-footer-portfolio"
                    className="block font-serif text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Portfolio
                  </a>
                </motion.div>
              </motion.nav>
            </motion.div>

            <motion.div variants={columnVariants}>
              <motion.h3
                className="font-serif font-semibold text-foreground mb-4"
                data-testid="text-footer-legal-title"
              >
                Legal
              </motion.h3>
              <motion.nav className="space-y-2" variants={containerVariants}>
                <motion.div variants={linkVariants} whileHover={{ x: 5 }}>
                  <Link
                    href="/privacy-policy"
                    data-testid="link-footer-privacy"
                    className="block font-serif text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </motion.div>
                <motion.div variants={linkVariants} whileHover={{ x: 5 }}>
                  <Link
                    href="/terms-and-conditions"
                    data-testid="link-footer-terms"
                    className="block font-serif text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Terms & Conditions
                  </Link>
                </motion.div>
              </motion.nav>
            </motion.div>

            <motion.div variants={columnVariants}>
              <motion.h3
                className="font-serif font-semibold text-foreground mb-4"
                data-testid="text-footer-email-title"
              >
                Email
              </motion.h3>
              <motion.a
                href="mailto:tysen@elevategrowth.solutions"
                className="block font-serif text-sm text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-footer-email"
                variants={linkVariants}
                whileHover={{ x: 5 }}
              >
                tysen@elevategrowth.solutions
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-12 pt-8 border-t border-card-border"
            variants={copyrightVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.p
              className="font-serif text-sm text-muted-foreground text-center"
              data-testid="text-footer-copyright"
            >
              © {new Date().getFullYear()} Elevate Growth Solutions. All rights reserved.
            </motion.p>
          </motion.div>
        </div>
      </footer>
    </>
  );
}
