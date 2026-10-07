import { motion } from "framer-motion";
import SectionHead from "@/components/home/SectionHead";
import { cn } from "@/lib/utils";

/**
 * Mission statement and core values. Copy mirrors the careers site
 * (careers.elevategrowth.solutions), so keep the two in sync.
 */

interface CoreValue {
  title: string;
  label: string;
  description: string;
}

const coreValues: CoreValue[] = [
  {
    title: "Own It",
    label: "Accountability",
    description: "No excuses, no blame. If it touches our work, we fix it."
  },
  {
    title: "Craft Over Shortcuts",
    label: "Craftsmanship",
    description: "Build it like your name is on it, because it is."
  },
  {
    title: "Every Client Is the Client",
    label: "Partnership",
    description:
      "The small client gets the same care as the biggest one, and that includes our partners’ clients."
  },
  {
    title: "Stay Ahead",
    label: "Growth mindset",
    description: "The industry keeps changing, and we change faster."
  },
  {
    title: "Show Up",
    label: "Community",
    description: "We build up the people and businesses around us."
  }
];

interface MissionValuesProps {
  /** Include the "Why we exist" origin story between the mission and the values. */
  showStory?: boolean;
  /** Section background, so the band can alternate with its neighbors. */
  className?: string;
}

export default function MissionValues({ showStory = false, className }: MissionValuesProps) {
  return (
    <section className={cn("py-20 md:py-24", className)} id="mission">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-[880px] mx-auto"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="block font-sans text-[10.5px] tracking-[0.35em] uppercase text-primary mb-3.5">
            Our Mission
          </span>
          <h2
            className="font-display font-normal text-[clamp(26px,3.4vw,40px)] leading-[1.3] text-foreground mb-5 [text-wrap:balance]"
            data-testid="text-mission-statement"
          >
            Every business deserves a partner,{" "}
            <em className="italic text-primary">not a ticket number.</em> We exist to prove it and
            raise the bar for our entire industry.
          </h2>
          <div className="w-[72px] h-px bg-primary/45 mx-auto" aria-hidden="true" />
          <p className="font-serif italic font-light text-[17px] text-muted-foreground mt-5">
            We help businesses grow on purpose.
          </p>
        </motion.div>

        {showStory && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-[4fr_7fr] gap-8 md:gap-16 mt-16 md:mt-20 pt-14 md:pt-16 border-t border-border"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <span className="block font-sans text-[10.5px] tracking-[0.35em] uppercase text-primary mb-3.5">
                Why We Exist
              </span>
              <h3 className="font-display font-normal text-[clamp(22px,2.6vw,30px)] leading-[1.3] text-foreground">
                Small businesses deserve better than being{" "}
                <em className="italic text-primary">treated like a number.</em>
              </h3>
            </div>
            <div className="space-y-4" data-testid="text-why-we-exist">
              <p className="font-serif font-light text-lg text-foreground leading-relaxed">
                Before starting EGS, our founder worked inside a large Utah marketing corporation and
                watched small business owners get handed off, ignored, and lost in the shuffle, while
                still paying for results they rarely understood.
              </p>
              <p className="font-serif font-light text-lg text-foreground leading-relaxed">
                EGS is the answer to that. We&rsquo;re a boutique team that delivers big-agency
                capability with real accountability, whether we work directly with a business or
                behind the scenes for an agency partner. Our goal isn&rsquo;t just to be better than
                that experience. It&rsquo;s to change what clients expect from every agency.
              </p>
            </div>
          </motion.div>
        )}

        <div className="mt-16 md:mt-20 pt-14 md:pt-16 border-t border-border">
          <SectionHead
            kicker="Our Core Values"
            title={
              <>
                Five values guide <em className="italic text-primary">how we work.</em>
              </>
            }
            lede={
              <>
                &ldquo;Own It&rdquo; comes first because excuses and blame are the one thing we
                won&rsquo;t tolerate.
              </>
            }
          />
          {/* 3 + 2 (centered) between sm and lg, one row of five from lg up */}
          <ol className="grid grid-cols-1 sm:grid-cols-6 lg:grid-cols-5 gap-x-8 gap-y-11">
            {coreValues.map((value, index) => (
              <motion.li
                key={value.title}
                className="sm:col-span-2 lg:col-span-1 sm:[&:nth-child(4)]:col-start-2 lg:[&:nth-child(4)]:col-start-auto flex flex-col items-center text-center gap-2.5"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
                data-testid={`value-${value.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <span
                  className="font-display italic text-[30px] leading-tight text-[#3D95B4]"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display font-medium text-[19px] leading-snug text-foreground">
                  {value.title}
                </h3>
                <span className="font-sans text-[9.5px] tracking-[0.25em] uppercase text-primary">
                  {value.label}
                </span>
                <p className="font-serif font-light text-sm leading-relaxed text-muted-foreground max-w-[250px]">
                  {value.description}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
