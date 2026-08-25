import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Monitor,
  Search,
  Share2,
  PenTool,
  ClipboardCheck,
  SlidersHorizontal,
  type LucideIcon
} from "lucide-react";
import SectionHead from "./SectionHead";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

const services: Service[] = [
  {
    icon: Monitor,
    title: "Web Design",
    description: "Custom websites built and maintained on any platform, from custom-coded to Shopify.",
    href: "/services/websites"
  },
  {
    icon: Search,
    title: "SEO",
    description: "Get found by the people already searching for what you do.",
    href: "/services/seo"
  },
  {
    icon: Share2,
    title: "Social Media",
    description: "Your channels managed end to end, consistent and present.",
    href: "/services/social-media"
  },
  {
    icon: PenTool,
    title: "Content Creation",
    description: "Copy and creative assets that move people and brands forward.",
    href: "/services/content-creation"
  },
  {
    icon: ClipboardCheck,
    title: "Website Audits",
    description: "An honest review of what's working and what's costing you leads.",
    href: "/services/audits"
  },
  {
    icon: SlidersHorizontal,
    title: "Ongoing Maintenance",
    description: "Updates, tweaks, and support long after launch day.",
    href: "/website-handoff-options"
  }
];

export default function ServicesIconGrid() {
  return (
    <section className="py-20 md:py-24 bg-background" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHead
          kicker="Welcome to Elevate Growth Solutions"
          title={
            <>
              Tired of being just a number at big agencies?{" "}
              <em className="italic text-primary">So were our clients.</em>
            </>
          }
          lede="We're a boutique firm that gives every client the care and attention they deserve, so you can save time, relieve stress, and focus on what you do best: running your business."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-9 gap-y-11">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: (index % 3) * 0.09, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={service.href}
                className="group flex flex-col items-center text-center gap-3.5"
                data-testid={`link-service-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <span className="flex items-center justify-center w-[66px] h-[66px] rounded-full border border-primary/30 text-primary transition-all duration-300 group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground group-hover:-translate-y-1">
                  <service.icon className="w-6 h-6" strokeWidth={1.3} />
                </span>
                <h3 className="font-display font-medium text-[19px] text-foreground">
                  {service.title}
                </h3>
                <p className="font-serif font-light text-sm leading-relaxed text-muted-foreground max-w-[250px]">
                  {service.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
