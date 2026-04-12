import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Archive, Smartphone, Search, Layout } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import SEO from "@/components/SEO";
import { BokehEffect, FloatingOrbs } from "@/components/decorative";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Portfolio project screenshots
import macmeadowImg from "@assets/M&M_header_1765335795744.png";
import elevateImg from "@assets/elevategrowth_screenshot_1764782217975.png";
import flooringImg from "@assets/PIFF_header3_1764783463822.png";
import crystalImg from "@assets/socrystaldesigns_screenshot_1764780915973.png";
import jpennImg from "@assets/jpennplanning_screenshot_1764780915972.png";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  isPast?: boolean;
  features?: string[];
}

const projects: Project[] = [
  {
    title: "Mac & Meadow Co.",
    description: "Natural skincare e-commerce website featuring Wagyu tallow cream products. Holistic, nourishing, and healing skincare with a warm, organic aesthetic.",
    tags: ["E-commerce", "Skincare", "Natural Products", "Web Design"],
    image: macmeadowImg,
    link: "https://www.macandmeadowco.com/",
    features: ["Mobile Responsive", "SEO Optimized"],
  },
  {
    title: "So Crystal Designs",
    description: "Fashion designer portfolio & booking platform. Showcasing universal style, personal styling services, and custom creations.",
    tags: ["Fashion", "E-commerce", "Booking System", "Portfolio"],
    image: crystalImg,
    link: "https://socrystaldesigns.com/",
    features: ["Mobile Responsive", "SEO Optimized"],
  },
  {
    title: "J Penn Planning",
    description: "Event planning and connection coaching website. Empowering connection through experience, story, and soul.",
    tags: ["Event Planning", "Coaching", "Community", "Design"],
    image: jpennImg,
    link: "https://jpennplanning.com/",
    features: ["Mobile Responsive", "SEO Optimized"],
  },
  {
    title: "Pay It Forward Flooring",
    description: "A comprehensive retail platform featuring a multi-page product catalog (Flooring, Carpet, Special Order), financing integration, and a community foundation blog. Built with React, Wouter, and Tailwind CSS.",
    tags: ["Retail Platform", "Multi-page App", "Community Foundation", "Archived"],
    image: flooringImg,
    isPast: true,
    features: ["Mobile Responsive", "SEO Optimized"],
  },
  {
    title: "Elevate Growth Solutions",
    description: "Full-stack marketing agency website. Blending strategy with soul to help businesses grow with intention, clarity, and impact.",
    tags: ["Marketing", "Strategy", "Web Design", "Growth"],
    image: elevateImg,
    link: "https://www.elevategrowth.solutions/",
    features: ["Mobile Responsive", "SEO Optimized"],
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <Card className="h-full border-primary/10 hover:border-primary/30 transition-all duration-300 group overflow-hidden flex flex-col shadow-sm hover:shadow-lg">
        <div className="aspect-video relative overflow-hidden bg-muted">
          <img
            src={project.image}
            alt={`${project.title} website screenshot`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            decoding="async"
          />
          {project.isPast && (
            <div className="absolute top-4 right-4 z-20">
              <Badge variant="secondary" className="bg-black/80 backdrop-blur-md border-white/10 text-white">
                Past Project
              </Badge>
            </div>
          )}
        </div>
        <CardHeader>
          <h3 className="font-display text-2xl font-bold group-hover:text-primary transition-colors">
            {project.title}
          </h3>
        </CardHeader>
        <CardContent className="flex-1">
          <p className="font-serif text-muted-foreground mb-6 line-clamp-3">
            {project.description}
          </p>

          {/* Features */}
          <div className="flex gap-4 mb-4 text-xs font-medium text-muted-foreground">
            {project.features?.includes("Mobile Responsive") && (
              <div className="flex items-center gap-1.5">
                <Smartphone size={14} className="text-primary" />
                <span>Mobile Responsive</span>
              </div>
            )}
            {project.features?.includes("SEO Optimized") && (
              <div className="flex items-center gap-1.5">
                <Search size={14} className="text-primary" />
                <span>SEO Optimized</span>
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="bg-primary/5 border-primary/10 text-primary hover:bg-primary/10"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex gap-4 pt-0 mt-auto">
          {project.link ? (
            <Button size="sm" className="ml-auto gap-2 group/btn" asChild>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Visit Site <ExternalLink size={14} className="group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </Button>
          ) : (
            <Button variant="outline" size="sm" className="ml-auto gap-2 cursor-not-allowed opacity-50" disabled>
              Archived Project <Archive size={14} />
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export default function Portfolio() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.5 });
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.5 });

  const stats = [
    { value: `${projects.filter(p => !p.isPast).length}+`, label: "Active Projects" },
    { value: "100%", label: "Custom Coded" },
    { value: "5", label: "Industries Served" },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Website Portfolio | Elevate Growth Solutions"
        description="Explore our portfolio of custom-coded websites. From e-commerce to professional services, see how Elevate Growth Solutions builds websites that drive results."
        ogTitle="Website Portfolio - Elevate Growth Solutions"
        ogDescription="See our work: custom-coded websites built for businesses in e-commerce, fashion, event planning, retail, and marketing. Mobile responsive and SEO optimized."
      />

      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-primary/5 via-accent/10 to-background relative overflow-hidden">
        <BokehEffect opacity={0.4} />
        <FloatingOrbs variant="light" />

        <div ref={headerRef} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isHeaderInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            <Layout className="w-4 h-4" />
            <span className="font-medium text-sm">Our Work</span>
          </motion.div>

          <motion.h1
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Selected{" "}
            <span className="text-primary">Website</span>{" "}
            Work
          </motion.h1>
          <motion.p
            className="font-sans text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            A collection of projects that showcase our expertise in custom website design and development
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-12 bg-primary text-primary-foreground">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.5 }}
              >
                <motion.div
                  className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-2"
                  initial={{ scale: 0.5 }}
                  animate={isStatsInView ? { scale: 1 } : {}}
                  transition={{ delay: index * 0.15 + 0.2, type: "spring", stiffness: 200 }}
                >
                  {stat.value}
                </motion.div>
                <div className="font-sans text-sm md:text-base text-primary-foreground/80">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-background via-accent/5 to-background overflow-hidden">
        <BokehEffect opacity={0.3} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to build something amazing together?"
        ctaText="Get In Touch"
        ctaHref="mailto:tysen@elevategrowth.solutions"
        backgroundColor="bg-primary"
      />

      <Footer />
    </div>
  );
}
