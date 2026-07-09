import { motion } from "framer-motion";

interface SideQuote {
  quote: string;
  author: string;
}

interface PullQuoteTestimonialsProps {
  featuredQuote: string;
  featuredAuthor: string;
  sideQuotes: SideQuote[];
}

export default function PullQuoteTestimonials({
  featuredQuote,
  featuredAuthor,
  sideQuotes
}: PullQuoteTestimonialsProps) {
  return (
    <section className="py-20 md:py-24 bg-muted" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[7fr_4fr] gap-10 md:gap-20 items-start">
          <motion.figure
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <span
              className="block font-display text-[96px] leading-[0.55] text-[#4AC0D8] mb-7"
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <blockquote className="font-display italic font-normal text-[clamp(24px,3.2vw,38px)] leading-[1.4] text-foreground max-w-[24ch] [text-wrap:balance]">
              {featuredQuote}
            </blockquote>
            <figcaption className="flex items-center gap-3.5 mt-7">
              <span className="w-11 h-px bg-primary" aria-hidden="true" />
              <span className="font-sans text-[10.5px] tracking-[0.3em] uppercase text-muted-foreground">
                {featuredAuthor}
              </span>
            </figcaption>
          </motion.figure>

          <motion.div
            className="flex flex-col border-t border-border"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {sideQuotes.map((item) => (
              <figure key={item.author} className="border-b border-border py-6 px-1">
                <blockquote className="font-serif italic font-light text-[14.5px] leading-[1.7] text-muted-foreground">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <figcaption className="font-sans text-[9px] tracking-[0.25em] uppercase text-primary mt-3">
                  {item.author}
                </figcaption>
              </figure>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
