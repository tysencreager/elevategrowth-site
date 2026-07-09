import { Link } from "wouter";
import { motion } from "framer-motion";

const rise = {
  hidden: { opacity: 0, y: 22 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: 0.1 + i * 0.18, ease: [0.22, 1, 0.36, 1] }
  })
};

export default function HomeHero() {
  return (
    <header className="relative overflow-hidden bg-background pt-20">
      {/* soft teal glow */}
      <div
        className="pointer-events-none absolute rounded-full"
        style={{
          width: "55vw",
          height: "55vw",
          maxWidth: 760,
          maxHeight: 760,
          right: "-16vw",
          top: "-12vw",
          background:
            "radial-gradient(circle, rgba(74,192,216,.12) 0%, rgba(61,149,180,.05) 45%, transparent 70%)"
        }}
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-[7fr_4.3fr] gap-10 md:gap-16 items-center py-14 md:py-24">
        <div>
          <motion.p
            className="flex items-center gap-3.5 font-sans text-[11px] tracking-[0.3em] uppercase text-primary"
            variants={rise}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <span className="inline-block w-11 h-px bg-primary/70" aria-hidden="true" />
            Boutique Web Design &amp; Full-Stack Marketing
          </motion.p>

          <motion.h1
            className="font-display font-normal text-[clamp(38px,5.4vw,68px)] leading-[1.08] text-foreground mt-6 mb-6"
            variants={rise}
            initial="hidden"
            animate="visible"
            custom={1}
            data-testid="text-hero-title"
          >
            Custom web design &amp; marketing for{" "}
            <em className="italic text-primary">growing businesses.</em>
          </motion.h1>

          <motion.p
            className="font-sans text-[11px] tracking-[0.25em] uppercase text-muted-foreground leading-[2.2] mb-10"
            variants={rise}
            initial="hidden"
            animate="visible"
            custom={2}
            data-testid="text-hero-subtitle"
          >
            Web Design <b className="text-primary font-normal px-1.5">·</b> SEO{" "}
            <b className="text-primary font-normal px-1.5">·</b> Ad Campaigns{" "}
            <b className="text-primary font-normal px-1.5">·</b> Social Media{" "}
            <b className="text-primary font-normal px-1.5">·</b> Branding
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3.5"
            variants={rise}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            <Link
              href="/contact"
              data-testid="button-hero-cta"
              className="inline-block font-sans text-[11px] font-medium tracking-[0.2em] uppercase bg-primary text-primary-foreground px-9 py-4 hover:bg-foreground transition-colors"
            >
              Book a Discovery Call
            </Link>
            <Link
              href="/portfolio"
              className="inline-block font-sans text-[11px] font-medium tracking-[0.2em] uppercase border border-foreground/30 text-foreground px-9 py-4 hover:border-primary hover:text-primary transition-colors"
            >
              View Our Work
            </Link>
          </motion.div>
        </div>

        {/* Video frame */}
        <motion.figure
          className="relative w-full max-w-[380px] justify-self-start md:justify-self-end group"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative border border-primary/30 p-3.5">
            <div
              className="absolute -inset-px border border-primary pointer-events-none transition-transform duration-500 translate-x-2.5 translate-y-2.5 group-hover:translate-x-1 group-hover:translate-y-1"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden aspect-[2/3]">
              <video
                className="absolute inset-0 w-full h-full object-cover grayscale contrast-[1.04]"
                src="/headervideo.mp4"
                poster="/hero_bw_768.webp"
                autoPlay
                muted
                loop
                playsInline
                aria-label="Behind the scenes at Elevate Growth Solutions"
              />
              <div
                className="absolute inset-0 mix-blend-multiply"
                style={{
                  background:
                    "linear-gradient(165deg, rgba(38,109,130,.38), rgba(74,192,216,.1) 60%)"
                }}
                aria-hidden="true"
              />
            </div>
          </div>
          <figcaption className="flex justify-between gap-4 font-sans text-[8.5px] tracking-[0.2em] uppercase text-muted-foreground mt-3.5">
            <span>Est. Salt Lake City</span>
            <b className="text-primary font-normal">Custom builds in under 30 days</b>
          </figcaption>
        </motion.figure>
      </div>
    </header>
  );
}
