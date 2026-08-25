import { Link } from "wouter";
import { Instagram, Linkedin, Phone } from "lucide-react";
import EmailSubscription from "./EmailSubscription";
import logoMark from "@assets/egs-logo-mark.png";

const footerLinkClass =
  "block font-serif text-sm font-light text-white/60 hover:text-[#4AC0D8] transition-colors";

const footerHeadingClass =
  "font-sans text-[10px] font-medium tracking-[0.25em] uppercase text-[#C9D7DB]/80 mb-5";

export default function Footer() {
  return (
    <>
      <EmailSubscription />
      <footer className="bg-[#0E1D22] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
            <div className="space-y-4">
              <Link href="/" className="inline-flex items-center gap-3.5" data-testid="img-footer-logo">
                <img
                  src={logoMark}
                  alt="Elevate Growth Solutions"
                  width={48}
                  height={48}
                  loading="lazy"
                  decoding="async"
                  className="h-12 w-12"
                />
                <span className="flex flex-col leading-none">
                  <span className="font-display italic text-[28px] text-white tracking-wide">Elevate</span>
                  <span className="font-sans text-[8px] tracking-[0.45em] uppercase text-[#4AC0D8] mt-1.5">
                    Growth Solutions
                  </span>
                </span>
              </Link>
              <p className="font-display italic text-sm text-white/60 max-w-xs">
                We help businesses grow.
              </p>
              <div className="flex gap-2 pt-2">
                <a
                  href="https://www.instagram.com/elevategrowthsolutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-[#4AC0D8] transition-colors p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
                  data-testid="link-footer-instagram"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/tysen-creager-a75914207/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-[#4AC0D8] transition-colors p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
                  data-testid="link-footer-linkedin"
                  aria-label="Connect on LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className={footerHeadingClass} data-testid="text-footer-nav-title">
                Explore
              </h3>
              <nav className="space-y-2.5">
                <Link href="/" data-testid="link-footer-home" className={footerLinkClass}>
                  Home
                </Link>
                <Link href="/services" data-testid="link-footer-services" className={footerLinkClass}>
                  Services
                </Link>
                <Link href="/portfolio" data-testid="link-footer-portfolio" className={footerLinkClass}>
                  Website Portfolio
                </Link>
                <Link href="/testimonials" className={footerLinkClass}>
                  Testimonials
                </Link>
                <Link href="/blog" className={footerLinkClass}>
                  Blog
                </Link>
              </nav>
            </div>

            <div>
              <h3 className={footerHeadingClass} data-testid="text-footer-locations-title">
                Locations
              </h3>
              <nav className="space-y-2.5">
                <Link href="/st-george-web-design" className={footerLinkClass}>
                  St. George
                </Link>
                <Link href="/salt-lake-city-marketing" className={footerLinkClass}>
                  Salt Lake City
                </Link>
                <Link href="/ogden-web-design" className={footerLinkClass}>
                  Ogden
                </Link>
              </nav>
              <h3 className={`${footerHeadingClass} mt-8`}>Resources</h3>
              <nav className="space-y-2.5">
                <Link href="/behind-elevate" data-testid="link-footer-behind-elevate" className={footerLinkClass}>
                  Behind Elevate
                </Link>
                <Link href="/why-custom-coded" className={footerLinkClass}>
                  Why Work With Us
                </Link>
                <Link href="/website-handoff-options" className={footerLinkClass}>
                  Website Handoff Options
                </Link>
              </nav>
            </div>

            <div>
              <h3 className={footerHeadingClass} data-testid="text-footer-email-title">
                Contact
              </h3>
              <a
                href="tel:+14355534668"
                className={`flex items-center gap-2 ${footerLinkClass} mb-2`}
                data-testid="link-footer-phone"
              >
                <Phone className="h-4 w-4" />
                (435) 553-4668
              </a>
              <a
                href="mailto:tysen@elevategrowth.solutions"
                className={`${footerLinkClass} mb-2`}
                data-testid="link-footer-email"
              >
                tysen@elevategrowth.solutions
              </a>
              <nav className="space-y-2.5 mt-6">
                <Link href="/contact" data-testid="link-footer-contact" className={footerLinkClass}>
                  Start a Project
                </Link>
                <Link href="/privacy-policy" data-testid="link-footer-privacy" className={footerLinkClass}>
                  Privacy Policy
                </Link>
                <Link href="/terms-and-conditions" data-testid="link-footer-terms" className={footerLinkClass}>
                  Terms & Conditions
                </Link>
              </nav>
            </div>
          </div>

          <div className="mt-14 pt-7 border-t border-white/10">
            <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/60 text-center mb-2">
              Proudly serving businesses in Utah and nationwide
            </p>
            <p
              className="font-sans text-[10px] tracking-[0.15em] uppercase text-white/60 text-center"
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
