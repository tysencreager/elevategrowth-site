import { Link } from "wouter";
import { motion } from "framer-motion";
import SectionHead from "./SectionHead";

import julianImg from "@assets/portfolio-juliandismute.webp";
import bodyshopImg from "@assets/portfolio-bodyshopgym.webp";
import energizeImg from "@assets/portfolio-energizeyourvibe.webp";
import dialinImg from "@assets/portfolio-dialinconstruction.webp";
import beautymarkdImg from "@assets/portfolio-beautymarkd.webp";
import lexlegalImg from "@assets/portfolio-lexlegal.webp";

interface Work {
  title: string;
  image: string;
  href: string;
  badge?: string;
  cta?: string;
}

const works: Work[] = [
  { title: "Julian Dismute", image: julianImg, href: "https://juliandismute.com/" },
  { title: "The Body Shop Gym", image: bodyshopImg, href: "https://thebodyshopgym.com/" },
  { title: "Energize Your Vibe", image: energizeImg, href: "https://www.energizeyourvibe.com/" },
  { title: "Dial-In Construction", image: dialinImg, href: "https://dial-inconstruction.com/" },
  {
    title: "Beautymark'd",
    image: beautymarkdImg,
    href: "https://beautymarkd-landingpage.pages.dev/",
    badge: "Ad · Landing Page",
    cta: "Ad · Landing Page"
  },
  { title: "Lex Legal", image: lexlegalImg, href: "https://lexlegallaw.com/" }
];

export default function SelectedWorks() {
  return (
    <section className="py-20 md:py-24 bg-background" id="work">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHead
          kicker="Selected Works"
          title={
            <>
              Websites that <em className="italic text-primary">earn their keep.</em>
            </>
          }
          lede="A few favorites from a much longer list—each one designed, built, and still growing."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {works.map((work, index) => (
            <motion.div
              key={work.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: (index % 3) * 0.09, ease: [0.22, 1, 0.36, 1] }}
            >
              <a
                href={work.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden aspect-[4/3]"
                data-testid={`link-work-${work.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              >
                {work.badge && (
                  <span className="absolute top-3 right-3 z-10 bg-primary text-primary-foreground font-sans text-[8.5px] tracking-[0.2em] uppercase px-2.5 py-1.5">
                    {work.badge}
                  </span>
                )}
                <img
                  src={work.image}
                  alt={`${work.title} website by Elevate Growth Solutions`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top grayscale-[0.25] transition-all duration-700 ease-out group-hover:scale-[1.06] group-hover:grayscale-0"
                />
                <span className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-5 text-center bg-[#17424F]/[0.88] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <b className="font-display italic font-normal text-[22px] text-white">{work.title}</b>
                  <span className="font-sans text-[9.5px] tracking-[0.25em] uppercase text-[#4AC0D8]">
                    {work.cta ?? "View Live Site"}
                    <span className="block w-9 h-px bg-[#4AC0D8] mx-auto mt-2" aria-hidden="true" />
                  </span>
                </span>
              </a>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="text-center mt-11"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            href="/portfolio"
            className="inline-block font-sans text-[11px] font-medium tracking-[0.2em] uppercase border border-foreground/30 text-foreground px-9 py-4 hover:border-primary hover:text-primary transition-colors"
            data-testid="link-view-all-projects"
          >
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
