import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeadProps {
  kicker: string;
  title: ReactNode;
  lede?: ReactNode;
}

/** Centered section header: spaced-uppercase kicker, serif display title, hairline rule, italic lede. */
export default function SectionHead({ kicker, title, lede }: SectionHeadProps) {
  return (
    <motion.div
      className="text-center mb-14"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="block font-sans text-[10.5px] tracking-[0.35em] uppercase text-primary mb-3.5">
        {kicker}
      </span>
      <h2 className="font-display font-normal text-[clamp(28px,3.6vw,42px)] leading-[1.18] text-foreground mb-4">
        {title}
      </h2>
      <motion.div
        className="h-px bg-primary/45 mx-auto"
        initial={{ width: 0 }}
        whileInView={{ width: 72 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
        aria-hidden="true"
      />
      {lede && (
        <p className="font-serif italic font-light text-[17px] text-muted-foreground max-w-[620px] mx-auto mt-5">
          {lede}
        </p>
      )}
    </motion.div>
  );
}
