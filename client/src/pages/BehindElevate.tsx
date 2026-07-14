import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import SchemaMarkup from "@/components/SchemaMarkup";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, TrendingUp, Building2 } from "lucide-react";

// About page photo (bundled locally for reliability)
import tysenPhoto from "@assets/tysen-photo.webp";

// Person schema data
const personSchema = {
  "name": "Tysen Creager",
  "jobTitle": "Founder & Director of Marketing Services",
  "description": "Full-stack marketer with nearly a decade of experience in web design, digital marketing, SEO, and client-centered strategy.",
  "url": "https://elevategrowth.solutions/behind-elevate",
  "image": "https://i.postimg.cc/LsPcdM3R/tysen-photo.jpg",
  "worksFor": {"@id": "https://elevategrowth.solutions/#organization"},
  "alumniOf": [
    {"@type": "EducationalOrganization", "name": "Digital Marketing Certification Program"},
    {"@type": "EducationalOrganization", "name": "UX Design Certification Program"}
  ],
  "knowsAbout": [
    "Digital Marketing",
    "SEO Optimization",
    "Web Design",
    "UX Design"
  ],
  "sameAs": [
    "https://www.linkedin.com/in/tysen-creager-a75914207/",
    "https://www.instagram.com/elevategrowthsolutions"
  ]
};

const highlights = [
  {
    icon: Building2,
    title: "Commercial-Grade Experience",
    description: "Websites and marketing delivered for large commercial companies as well as boutique brands."
  },
  {
    icon: GraduationCap,
    title: "Digital Marketing & E-Commerce Certified",
    description: "Certified in digital marketing strategy, e-commerce optimization, and customer acquisition."
  },
  {
    icon: Award,
    title: "UX Design Certified",
    description: "Certified in user experience design—interfaces that drive engagement and conversions."
  },
  {
    icon: TrendingUp,
    title: "Nearly a Decade of Experience",
    description: "A proven track record scaling businesses of all sizes into booming brands."
  }
];

export default function BehindElevate() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <div className="min-h-screen">
      <SEO
        title="Behind Elevate - Meet Tysen Creager | Elevate Growth Solutions"
        description="Meet Tysen Creager, founder of Elevate Growth Solutions—a full-stack marketer with nearly a decade of experience in web design, SEO, and strategy."
        ogTitle="Meet the Founder - Tysen Creager, Marketing Strategist"
        ogDescription="Nearly a decade of experience helping businesses grow through strategic marketing and digital solutions. Certified marketing expert with proven results."
      />
      <SchemaMarkup type="person" data={personSchema} />
      <Navbar />

      <section ref={sectionRef} className="relative pt-28 md:pt-36 pb-16 md:pb-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">
            <motion.figure
              className="md:w-2/5 group w-full max-w-[400px]"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative border border-primary/30 p-3.5">
                <div
                  className="absolute -inset-px border border-primary pointer-events-none transition-transform duration-500 translate-x-2.5 translate-y-2.5 group-hover:translate-x-1 group-hover:translate-y-1"
                  aria-hidden="true"
                />
                <div className="relative overflow-hidden">
                  <img
                    src={tysenPhoto}
                    alt="Tysen Creager, Founder of Elevate Growth Solutions"
                    width={400}
                    height={500}
                    loading="eager"
                    decoding="async"
                    className="w-full h-auto grayscale contrast-[1.04]"
                    data-testid="img-tysen-photo"
                  />
                  <div
                    className="absolute inset-0 mix-blend-multiply"
                    style={{
                      background:
                        "linear-gradient(165deg, rgba(38,109,130,.32), rgba(74,192,216,.08) 60%)"
                    }}
                    aria-hidden="true"
                  />
                </div>
              </div>
              <figcaption className="flex justify-between gap-4 font-sans text-[8.5px] tracking-[0.2em] uppercase text-muted-foreground mt-3.5">
                <span>Founder &amp; Director</span>
                <b className="text-primary font-normal">Elevate Growth Solutions</b>
              </figcaption>
            </motion.figure>

            <motion.div
              className="md:w-3/5 space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div>
                <p className="flex items-center gap-3.5 font-sans text-[11px] tracking-[0.3em] uppercase text-primary mb-5">
                  <span className="inline-block w-11 h-px bg-primary/70" aria-hidden="true" />
                  Helping Businesses Grow on Purpose
                </p>
                <h1
                  className="font-display font-normal text-[clamp(36px,4.5vw,56px)] leading-[1.1] text-foreground mb-4"
                  data-testid="text-meet-tysen"
                >
                  Meet <em className="italic text-primary">Tysen.</em>
                </h1>
                <p
                  className="font-display italic text-xl md:text-2xl text-muted-foreground"
                  data-testid="text-tysen-tagline"
                >
                  Full-Stack Marketer. Growth Strategist. Brand Builder.
                </p>
                <p
                  className="font-sans text-[11px] tracking-[0.25em] uppercase text-muted-foreground mt-3"
                  data-testid="text-tysen-role"
                >
                  Founder of Elevate Growth Solutions
                </p>
              </div>

              <div className="space-y-4">
                <p
                  className="font-serif font-light text-lg text-foreground leading-relaxed"
                  data-testid="text-bio-paragraph-1"
                >
                  Tysen Creager is the founder and driving force behind Elevate Growth Solutions. She has nearly a decade of experience in web design, digital marketing, SEO optimization, and client-centered strategy. Her diverse skillset helps businesses to grow with clarity, confidence, and purpose.
                </p>

                <p
                  className="font-serif font-light text-lg text-foreground leading-relaxed"
                  data-testid="text-bio-paragraph-2"
                >
                  Her experience spans the full spectrum: Tysen has designed websites and delivered marketing for large commercial companies as well as boutique brands—implementing successful lead generation flows and leading full-scale campaigns that deliver real results. Whether you're an established organization or a growing local brand, the standard is the same: enterprise-level quality with boutique attention.
                </p>

                <p
                  className="font-serif font-light text-lg text-foreground leading-relaxed"
                  data-testid="text-bio-paragraph-3"
                >
                  With certifications in Digital Marketing and UX design, she understands all facets of attaining marketing success—everything from design and content creation to website building and SEO strategy, guided by a deep understanding of how to move customers from first impression to loyal customer. Her approach is down-to-earth, results-driven, and focused on making marketing feel less overwhelming and more aligned with your goals.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience highlights — slim editorial band */}
      <section className="bg-muted border-y border-border py-14 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-9">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                className="flex flex-col gap-3"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="flex items-center justify-center w-[54px] h-[54px] rounded-full border border-primary/30 text-primary">
                  <item.icon className="w-5 h-5" strokeWidth={1.3} />
                </span>
                <h3 className="font-display font-medium text-[17px] leading-snug text-foreground">
                  {item.title}
                </h3>
                <p className="font-serif font-light text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
