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
    <header className="relative overflow-hidden min-h-[92vh] flex items-center pt-20">
      {/* Full-bleed background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover grayscale contrast-[1.05] motion-reduce:hidden"
        src="/headervideo.mp4"
        poster="/hero_bw_1920.webp"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      {/* Poster fallback for reduced motion */}
      <img
        src="/hero_bw_1920.webp"
        alt=""
        className="absolute inset-0 w-full h-full object-cover grayscale hidden motion-reduce:block"
        aria-hidden="true"
      />
      {/* Teal-ink duotone + readability overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(11,25,30,.88) 0%, rgba(17,43,52,.72) 45%, rgba(38,109,130,.45) 100%)"
        }}
        aria-hidden="true"
      />
      {/* Film grain for texture */}
      <div className="absolute inset-0 opacity-[0.07] mix-blend-overlay grain" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
        <div className="max-w-3xl">
          <motion.p
            className="flex items-center gap-3.5 font-sans text-[11px] tracking-[0.3em] uppercase text-[#4AC0D8]"
            variants={rise}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <span className="inline-block w-11 h-px bg-[#4AC0D8]/70" aria-hidden="true" />
            Helping Businesses Grow on Purpose
          </motion.p>

          <motion.h1
            className="font-display font-normal text-[clamp(40px,5.6vw,72px)] leading-[1.08] text-white mt-6 mb-6"
            variants={rise}
            initial="hidden"
            animate="visible"
            custom={1}
            data-testid="text-hero-title"
          >
            Custom web design &amp; marketing for{" "}
            <em className="italic text-[#4AC0D8]">growing businesses.</em>
          </motion.h1>

          <motion.p
            className="font-sans text-[11px] tracking-[0.25em] uppercase text-white/60 leading-[2.2] mb-10"
            variants={rise}
            initial="hidden"
            animate="visible"
            custom={2}
            data-testid="text-hero-subtitle"
          >
            Web Design <b className="text-[#4AC0D8] font-normal px-1.5">·</b> SEO{" "}
            <b className="text-[#4AC0D8] font-normal px-1.5">·</b> Ad Campaigns{" "}
            <b className="text-[#4AC0D8] font-normal px-1.5">·</b> Social Media{" "}
            <b className="text-[#4AC0D8] font-normal px-1.5">·</b> Branding
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
              className="inline-block font-sans text-[11px] font-medium tracking-[0.2em] uppercase bg-primary text-primary-foreground px-9 py-4 hover:bg-white hover:text-foreground transition-colors"
            >
              Book a Discovery Call
            </Link>
            <Link
              href="/portfolio"
              className="inline-block font-sans text-[11px] font-medium tracking-[0.2em] uppercase border border-white/40 text-white px-9 py-4 hover:border-[#4AC0D8] hover:text-[#4AC0D8] transition-colors"
            >
              View Our Work
            </Link>
          </motion.div>
        </div>
      </div>

      {/* bottom hairline caption */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between gap-4 font-sans text-[8.5px] tracking-[0.2em] uppercase text-white/50">
          <span>Est. Salt Lake City — Serving Nationwide</span>
          <span className="text-[#4AC0D8]">Web design · SEO · Full-stack marketing</span>
        </div>
      </div>
    </header>
  );
}
