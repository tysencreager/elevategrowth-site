import { Link } from "wouter";
import { motion } from "framer-motion";

import tysenBandImg from "@assets/tysen-founder-band.webp";

/**
 * Founder band. Sits between SelectedWorks and PullQuoteTestimonials so the
 * quotes that say "she" and "Tysen" have a face attached before they appear.
 * bg-background matches SelectedWorks above, so a border-t separates them —
 * bg-muted would collide with PullQuoteTestimonials directly below.
 */
export default function FounderBand() {
  return (
    <section className="py-20 md:py-24 bg-background border-t border-border" id="founder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[5fr_6fr] gap-10 md:gap-16 items-center">
          <motion.figure
            className="group w-full max-w-[420px] mx-auto md:mx-0"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative border border-primary/30 p-3.5">
              <div
                className="absolute -inset-px border border-primary pointer-events-none transition-transform duration-500 translate-x-2.5 translate-y-2.5 group-hover:translate-x-1 group-hover:translate-y-1"
                aria-hidden="true"
              />
              <div className="relative overflow-hidden">
                <img
                  src={tysenBandImg}
                  alt="Tysen Creager, founder of Elevate Growth Solutions"
                  width={900}
                  height={1350}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto"
                  data-testid="img-founder-band"
                />
              </div>
            </div>
            <figcaption className="flex justify-between gap-4 font-sans text-[8.5px] tracking-[0.2em] uppercase text-muted-foreground mt-3.5">
              <span>Tysen Creager</span>
              <b className="text-primary font-normal">Founder &amp; Director</b>
            </figcaption>
          </motion.figure>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="block font-sans text-[10.5px] tracking-[0.35em] uppercase text-primary mb-3.5">
              Behind Elevate
            </span>
            <h2 className="font-display font-normal text-[clamp(28px,3.6vw,42px)] leading-[1.18] text-foreground mb-5">
              Founder-led, from{" "}
              <em className="italic text-primary">first call to launch.</em>
            </h2>
            <p className="font-serif font-light text-[16px] leading-relaxed text-muted-foreground max-w-[56ch]">
              Tysen Creager founded Elevate Growth Solutions in Salt Lake City, and she still sets
              the standard for every project that carries the name — the strategy, the design, the
              build, and the SEO behind it. Nearly a decade in, with certifications in digital
              marketing and UX design, she has delivered for large commercial companies and boutique
              brands alike.
            </p>
            <p className="font-serif font-light text-[16px] leading-relaxed text-muted-foreground max-w-[56ch] mt-4">
              The standard doesn&rsquo;t change with the size of the project — enterprise-level
              quality, close attention, and her name on the result.
            </p>
            <Link
              href="/behind-elevate"
              className="inline-block font-sans text-[11px] font-medium tracking-[0.2em] uppercase border border-foreground/30 text-foreground px-9 py-4 mt-8 hover:border-primary hover:text-primary transition-colors"
              data-testid="link-behind-elevate"
            >
              Meet Tysen
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
