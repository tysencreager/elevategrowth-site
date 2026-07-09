import { Link } from "wouter";
import { motion } from "framer-motion";

interface ParallaxCTAProps {
  backgroundImage: string;
  kicker: string;
  title: string;
  ctaText: string;
  ctaHref: string;
}

export default function ParallaxCTA({ backgroundImage, kicker, title, ctaText, ctaHref }: ParallaxCTAProps) {
  return (
    <section
      className="relative py-28 md:py-32 bg-cover md:bg-fixed motion-reduce:!bg-scroll"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundPosition: "center 30%" }}
      id="contact-cta"
    >
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(rgba(252,253,253,.92), rgba(242,246,247,.88))"
        }}
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-6">
        <motion.span
          className="font-sans text-[10.5px] tracking-[0.35em] uppercase text-primary"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          {kicker}
        </motion.span>
        <motion.h2
          className="font-display italic font-normal text-[clamp(32px,4.6vw,56px)] leading-[1.2] text-foreground max-w-[19ch] [text-wrap:balance]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          data-testid="text-cta-title"
        >
          {title}
        </motion.h2>
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.75, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            href={ctaHref}
            className="inline-block font-sans text-[11px] font-medium tracking-[0.2em] uppercase bg-primary text-primary-foreground px-9 py-4 hover:bg-foreground transition-colors"
            data-testid="button-cta"
          >
            {ctaText}
          </Link>
          <a
            href="mailto:tysen@elevategrowth.solutions"
            className="font-sans text-[10.5px] tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors"
          >
            tysen@elevategrowth.solutions
          </a>
        </motion.div>
      </div>
    </section>
  );
}
