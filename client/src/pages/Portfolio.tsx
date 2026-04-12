import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Archive, Smartphone, Search, Layout, Star, Award, Megaphone, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import SEO from "@/components/SEO";
import LogoBanner from "@/components/LogoBanner";
import { BokehEffect, FloatingOrbs } from "@/components/decorative";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Portfolio project screenshots
import macmeadowImg from "@assets/M&M_header_1765335795744.png";
import flooringImg from "@assets/PIFF_header3_1764783463822.png";
import crystalImg from "@assets/socrystaldesigns_screenshot_1764780915973.png";
import jpennImg from "@assets/jpennplanning_screenshot_1764780915972.png";
import ceronImg from "@assets/ceronbuildingsolutions.com-portfolio.png";
import drhomeImg from "@assets/drhomesvcs.com-portfolio.png";
import lexlegalImg from "@assets/lexlegallaw.com-portfolio.png";
import solenneImg from "@assets/solenneservices.com-portfolio.png";
import beautymarkdImg from "@assets/landingpage-portfolio.png";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  isPast?: boolean;
  isLandingPage?: boolean;
  features?: string[];
}

const projects: Project[] = [
  {
    title: "Lex Legal Law",
    description: "Professional law firm website for a practice licensed in Utah and California. Featuring practice area pages, attorney profiles, FAQ section, and consultation scheduling. Clear guidance, strong advocacy, real results.",
    tags: ["Legal", "Professional Services", "Multi-page", "Web Design"],
    image: lexlegalImg,
    link: "https://lexlegallaw.com/",
    features: ["Mobile Responsive", "SEO Optimized"],
  },
  {
    title: "Ceron Building Solutions",
    description: "Contractor website for Utah's trusted drywall installation, finishing, and custom building contractor. Serving Salt Lake County, Utah County, Davis County, and the greater Wasatch Front.",
    tags: ["Construction", "Contractor", "Service Area Pages", "Web Design"],
    image: ceronImg,
    link: "https://ceronbuildingsolutions.com/",
    features: ["Mobile Responsive", "SEO Optimized"],
  },
  {
    title: "DR Home Services",
    description: "Home services company website for drywall, painting, and trim installation. Featuring financing options, service pages, blog, and free estimate booking for Utah homeowners.",
    tags: ["Home Services", "Contractor", "Financing", "Web Design"],
    image: drhomeImg,
    link: "https://drhomesvcs.com/",
    features: ["Mobile Responsive", "SEO Optimized"],
  },
  {
    title: "Solenne Services",
    description: "Mobile notary services website serving the Tucson, Arizona area. Professional, secure, and accurate document signing services brought directly to your home, workplace, or preferred location.",
    tags: ["Notary", "Professional Services", "Booking", "Web Design"],
    image: solenneImg,
    link: "https://solenneservices.com/",
    features: ["Mobile Responsive", "SEO Optimized"],
  },
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
    description: "A comprehensive retail platform featuring a multi-page product catalog, financing integration, and a community foundation blog.",
    tags: ["Retail", "Multi-page App", "Community Foundation", "Archived"],
    image: flooringImg,
    isPast: true,
    features: ["Mobile Responsive", "SEO Optimized"],
  },
  {
    title: "Ad Landing Page",
    description: "High-converting landing page designed for paid ad campaigns. Built to drive bookings and conversions with clear calls-to-action, fast load times, and mobile-first design.",
    tags: ["Ad Landing Page", "Conversion Optimized", "Paid Ads", "Lead Generation"],
    image: beautymarkdImg,
    link: "https://beautymarkd-landingpage.pages.dev/",
    isLandingPage: true,
    features: ["Mobile Responsive", "SEO Optimized"],
  },
];

const clientLogos = [
  { src: "https://i.postimg.cc/3N6Kn78Y/Dial_In_Logo_png.png", alt: "Dial In logo" },
  { src: "https://i.postimg.cc/8FCq8ydW/1.png", alt: "Sharing Success logo" },
  { src: "https://i.postimg.cc/xkdWrsGN/2.png", alt: "Luneta logo" },
  { src: "https://i.postimg.cc/hJGHFC8m/3.png", alt: "EZS logo" },
  { src: "https://i.postimg.cc/QBMRL6gT/4.png", alt: "Summit Builders logo" },
  { src: "https://i.postimg.cc/94fv3xPy/5.png", alt: "Cascade Properties logo" },
  { src: "https://i.postimg.cc/d7SgJ8n3/6.png", alt: "Desert View Homes logo" },
  { src: "https://i.postimg.cc/KKYdX97n/8.png", alt: "Utah Business Group logo" },
  { src: "https://i.postimg.cc/qtZWp8Qz/9.png", alt: "Red Rock Ventures logo" },
  { src: "https://i.postimg.cc/p913PDk5/10.png", alt: "Pioneer Financial logo" },
  { src: "https://i.postimg.cc/CZ69wjJf/11.png", alt: "Wasatch Consulting logo" },
  { src: "https://i.postimg.cc/Lq0Gmzv1/12.png", alt: "Beehive Marketing logo" },
  { src: "https://i.postimg.cc/hPSMb8dd/1.png", alt: "Ceron Building Solutions logo" },
  { src: "https://i.postimg.cc/zXJpSwgH/2.png", alt: "DR Home Services logo" },
  { src: "https://i.postimg.cc/KvZQr7ML/3.png", alt: "Blaze Collective logo" },
  { src: "https://i.postimg.cc/GhczJPys/4.png", alt: "Dressler Detours logo" },
  { src: "https://i.postimg.cc/fTw5j79f/5.png", alt: "Julian Speaks Life logo" },
];

const reviews = [
  {
    quote: "I cannot say enough good things about Tysen. She created my website for Mac and Meadow Tallow, and it turned out more beautiful than I ever imagined it could be. Her vision is truly something special — she put so much thought, detail, and care into every part of the site, and it shows. Working with Tysen was beyond amazing from start to finish, and I'm so grateful for her. Honestly, she played a huge role in getting my business off the ground. If you're looking for someone with incredible vision, professionalism, and heart to help you with your website, SEO, marketing, socials etc., Tysen is IT.",
    author: "McKenzie",
    timeAgo: "4 weeks ago",
  },
  {
    quote: "Tysen is simply the best! Her work and professionalism is unmatched. I was completely overwhelmed with the website building process and she made it entirely seamless for me. Her communication was precise, and she truly listened to my needs and created a beautiful website that wholly encapsulates my business. I can't recommend her enough!",
    author: "Ali Valencia",
    timeAgo: "2 weeks ago",
  },
  {
    quote: "Tysen with Elevate Growth Solutions has been great to work with. She built me a website that I like and it was very affordable. She has been very helpful and knowledgeable. I'd recommend Elevate Growth Solutions.",
    author: "Dilyn Walker",
    timeAgo: "4 weeks ago",
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
            width={800}
            height={450}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {project.isPast && (
            <div className="absolute top-4 right-4 z-20">
              <Badge variant="secondary" className="bg-black/80 backdrop-blur-md border-white/10 text-white">
                Past Project
              </Badge>
            </div>
          )}
          {project.isLandingPage && (
            <div className="absolute top-4 right-4 z-20">
              <Badge className="bg-primary/90 backdrop-blur-md border-primary/20 text-white">
                Ad Landing Page
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
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.2 });
  const aboutRef = useRef(null);
  const isAboutInView = useInView(aboutRef, { once: true, amount: 0.1 });
  const reviewsRef = useRef(null);
  const isReviewsInView = useInView(reviewsRef, { once: true, amount: 0.1 });

  const industries = [
    "Legal & Law Firms",
    "Construction & Contractors",
    "Home Services",
    "Notary & Professional Services",
    "E-commerce & Retail",
    "Fashion & Personal Styling",
    "Event Planning & Coaching",
    "Beauty & PMU",
    "Marketing Agencies",
    "Health & Skincare",
    "And many more...",
  ];

  // Add structured data for SEO
  useEffect(() => {
    // Portfolio page schema
    const portfolioScript = document.createElement("script");
    portfolioScript.type = "application/ld+json";
    portfolioScript.id = "portfolio-schema";
    portfolioScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Website Design Portfolio - Elevate Growth Solutions",
      "description": "Custom-coded websites built by Elevate Growth Solutions for businesses across legal, construction, home services, e-commerce, beauty, and more.",
      "url": "https://www.elevategrowth.solutions/portfolio",
      "isPartOf": {
        "@type": "WebSite",
        "name": "Elevate Growth Solutions",
        "url": "https://www.elevategrowth.solutions",
      },
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": projects.map((p, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "name": p.title,
          "description": p.description,
          ...(p.link ? { "url": p.link } : {}),
        })),
      },
    });
    document.head.appendChild(portfolioScript);

    // Breadcrumb schema
    const breadcrumbScript = document.createElement("script");
    breadcrumbScript.type = "application/ld+json";
    breadcrumbScript.id = "portfolio-breadcrumb";
    breadcrumbScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.elevategrowth.solutions/" },
        { "@type": "ListItem", "position": 2, "name": "Website Portfolio", "item": "https://www.elevategrowth.solutions/portfolio" },
      ],
    });
    document.head.appendChild(breadcrumbScript);

    // Aggregate review rating schema
    const reviewScript = document.createElement("script");
    reviewScript.type = "application/ld+json";
    reviewScript.id = "portfolio-reviews";
    reviewScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Elevate Growth Solutions",
      "url": "https://www.elevategrowth.solutions",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "bestRating": "5",
        "ratingCount": reviews.length.toString(),
      },
      "review": reviews.map((r) => ({
        "@type": "Review",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "author": { "@type": "Person", "name": r.author },
        "reviewBody": r.quote,
      })),
    });
    document.head.appendChild(reviewScript);

    return () => {
      document.getElementById("portfolio-schema")?.remove();
      document.getElementById("portfolio-breadcrumb")?.remove();
      document.getElementById("portfolio-reviews")?.remove();
    };
  }, []);

  return (
    <div className="min-h-screen">
      <SEO
        title="Website Design Portfolio | Custom Websites for Small Businesses | Elevate Growth Solutions"
        description="Browse our portfolio of custom-coded websites built for law firms, contractors, home services, e-commerce, beauty, and more. Full-Stack Marketing Strategist & Certified UX Designer serving businesses in Utah and nationwide."
        ogTitle="Website Portfolio - Elevate Growth Solutions"
        ogDescription="Custom-coded, mobile-responsive, SEO-optimized websites for small businesses. See our work across 8+ industries including legal, construction, beauty, and e-commerce."
        canonicalPath="/portfolio"
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
            Website Design{" "}
            <span className="text-primary">Portfolio</span>
          </motion.h1>
          <motion.p
            className="font-serif text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            Full-Stack Marketing Strategist & Certified UX Designer. Every website is custom-coded, mobile responsive, and SEO optimized to help your business grow.
          </motion.p>
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="font-serif text-sm text-muted-foreground mb-3">
              Looking for our marketing &amp; design work?
            </p>
            <Button variant="outline" className="gap-2 font-serif font-medium border-primary/30 text-primary hover:bg-primary/5" asChild>
              <a href="https://tysencreager.my.canva.site/" target="_blank" rel="noopener noreferrer">
                View Marketing &amp; Design Portfolio <ExternalLink size={14} />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Logo Banner */}
      <LogoBanner
        logos={clientLogos}
        title="Trusted By Growing Businesses"
        subtitle="We've partnered with businesses across industries to build websites and marketing strategies that drive real results"
        bgColor="#266D82"
      />

      {/* Portfolio Grid */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-background via-accent/5 to-background overflow-hidden">
        <BokehEffect opacity={0.3} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
              Selected Website Work
            </h2>
            <p className="font-serif text-muted-foreground text-lg max-w-2xl mx-auto">
              Here are a few of the custom websites we've built. From full business sites to high-converting ad landing pages, each project is built from the ground up to meet the unique needs of the business.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
          <motion.p
            className="text-center mt-10 font-serif text-muted-foreground italic"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            These are just a few of the websites we've built. We've completed many more projects across a variety of industries.
          </motion.p>
        </div>
      </section>

      {/* About & Industries Section */}
      <section ref={aboutRef} className="py-16 md:py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: About & Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6">
                How We Can <span className="text-primary">Help</span>
              </h2>
              <div className="space-y-4 font-serif text-muted-foreground leading-relaxed">
                <p>
                  At Elevate Growth Solutions, we don't just build websites — we build growth engines. Every project starts with understanding your business, your audience, and your goals. From there, we craft custom-coded websites designed to convert visitors into customers.
                </p>
                <p>
                  Whether you need a full business website, an e-commerce platform, a professional services site, or a high-converting ad landing page, we handle it all — from strategy and design to development and SEO.
                </p>
              </div>

              {/* Certifications */}
              <div className="mt-8 space-y-3">
                <h3 className="font-display font-semibold text-lg text-foreground flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  Certifications & Expertise
                </h3>
                <ul className="space-y-2 font-serif text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    Certified UX Designer
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    Full-Stack Marketing Strategist
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    SEO & Local Search Optimization
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    Paid Ads & Funnel Strategy
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    Brand Identity & Visual Storytelling
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Right: Industries */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
              <h3 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6">
                Industries We <span className="text-primary">Serve</span>
              </h3>
              <p className="font-serif text-muted-foreground mb-8 leading-relaxed">
                We serve all industries — not just the ones listed here. No matter your niche, we create tailored web solutions that speak to your audience. No templates — every site is built from the ground up.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {industries.map((industry, index) => (
                  <motion.div
                    key={industry}
                    className="flex items-center gap-3 p-3 rounded-lg bg-background border border-primary/10 hover:border-primary/30 transition-colors"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.05, duration: 0.4 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="font-serif text-sm text-foreground">{industry}</span>
                  </motion.div>
                ))}
              </div>

              {/* What We Offer */}
              <div className="mt-8 p-6 rounded-xl bg-primary/5 border border-primary/10">
                <h4 className="font-display font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Megaphone className="w-5 h-5 text-primary" />
                  Beyond Websites
                </h4>
                <p className="font-serif text-sm text-muted-foreground leading-relaxed">
                  In addition to website design and development, we offer branding, social media management, content creation, paid ad campaigns, SEO strategy, and marketing audits. We're your full-stack marketing partner.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section ref={reviewsRef} className="py-16 md:py-24 bg-gradient-to-b from-background to-accent/5 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isReviewsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Google branding header */}
            <div className="inline-flex items-center gap-2 mb-4">
              <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="font-sans font-semibold text-lg text-foreground">Google Reviews</span>
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-3">
              What Our <span className="text-primary">Clients</span> Say
            </h2>
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="font-sans font-bold text-2xl text-foreground">5.0</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FBBC05] text-[#FBBC05]" />
                ))}
              </div>
            </div>
            <p className="font-sans text-sm text-muted-foreground">Based on Google Reviews</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <motion.div
                key={review.author}
                className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                animate={isReviewsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {/* Google-style header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#E8710A] flex items-center justify-center">
                    <span className="font-sans font-medium text-white text-base">
                      {review.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-sans font-medium text-foreground text-sm leading-tight">{review.author}</p>
                  </div>
                </div>
                {/* Stars + time */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]" />
                    ))}
                  </div>
                  <span className="font-sans text-xs text-muted-foreground">{review.timeAgo}</span>
                </div>
                {/* Review text */}
                <p className="font-sans text-foreground leading-relaxed text-sm flex-1">
                  {review.quote}
                </p>
                {/* Google attribution */}
                <div className="flex items-center gap-1.5 mt-4 pt-3 border-t border-gray-100">
                  <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  <span className="font-sans text-xs text-muted-foreground">Posted on Google</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isReviewsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Button size="lg" className="gap-2 font-serif font-medium text-base px-8 py-6" asChild>
              <a href="https://share.google/rxaaY7ZQVM2KJOR2l" target="_blank" rel="noopener noreferrer">
                See All Reviews on Google <ExternalLink size={14} />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Marketing & Design Portfolio Section */}
      <section className="py-16 md:py-24 bg-primary/5 border-y border-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
              Looking for Our Marketing &amp; Design Work?
            </h2>
            <p className="font-serif text-muted-foreground text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              This page showcases our website portfolio. To see our full range of marketing, branding, and design work — including social media content, ad creatives, brand kits, and more — check out our marketing portfolio.
            </p>
            <Button size="lg" className="font-serif font-medium text-base md:text-lg px-10 py-6 gap-2 group" asChild>
              <a href="https://tysencreager.my.canva.site/" target="_blank" rel="noopener noreferrer">
                View Marketing &amp; Design Portfolio
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
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
