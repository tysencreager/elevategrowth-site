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
    title: "Beauty Markd",
    description: "High-converting ad landing page for a certified PMU artist in American Fork, Utah. Designed to drive bookings for nano brows, lip blushing, and permanent eyeliner services.",
    tags: ["Ad Landing Page", "Beauty", "PMU", "Conversion Optimized"],
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
    source: "Google Review",
  },
  {
    quote: "Tysen is simply the best! Her work and professionalism is unmatched. I was completely overwhelmed with the website building process and she made it entirely seamless for me. Her communication was precise, and she truly listened to my needs and created a beautiful website that wholly encapsulates my business. I can't recommend her enough!",
    author: "Ali Valencia",
    source: "Google Review",
  },
  {
    quote: "Tysen with Elevate Growth Solutions has been great to work with. She built me a website that I like and it was very affordable. She has been very helpful and knowledgeable. I'd recommend Elevate Growth Solutions.",
    author: "Dilyn Walker",
    source: "Google Review",
  },
  {
    quote: "Working with Tysen was seamless from start to finish. She quickly understood the vision for my brand and delivered thoughtful, strategic designs that aligned perfectly with my marketing goals. Her creativity and professionalism made the entire process easy and efficient. I'm so impressed with the final product!",
    author: "Cassidy",
    role: "Loan Officer",
    source: "Google Review",
  },
  {
    quote: "My business has skyrocketed since Tysen (Elevate Growth Solutions) created my website. It's seriously SO stunning and seamless. Hire her! You will not regret it.",
    author: "McKenzie M.",
    source: "Google Review",
  },
  {
    quote: "From the most basic detail to the biggest detail in marketing a business and it being a success, Tysen doesn't shy away from any of it. Her confidence in you and your business gives a new growth within you and lights a fire under you that helps you succeed. She's very patient and is so kind to answer questions and teach you anything about the work she's done.",
    author: "Abagail D.",
    source: "Google Review",
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
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.5 });
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.5 });
  const aboutRef = useRef(null);
  const isAboutInView = useInView(aboutRef, { once: true, amount: 0.3 });
  const reviewsRef = useRef(null);
  const isReviewsInView = useInView(reviewsRef, { once: true, amount: 0.2 });

  const stats = [
    { value: `${projects.length}+`, label: "Websites Built" },
    { value: "100%", label: "Custom Coded" },
    { value: "8+", label: "Industries Served" },
    { value: "5.0", label: "Google Rating", isStar: true },
  ];

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
  ];

  // Add structured data for SEO
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "portfolio-schema";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Website Portfolio - Elevate Growth Solutions",
      "description": "Custom-coded websites built by Elevate Growth Solutions for businesses across legal, construction, home services, e-commerce, beauty, and more.",
      "url": "https://www.elevategrowth.solutions/portfolio",
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
    document.head.appendChild(script);
    return () => {
      const existing = document.getElementById("portfolio-schema");
      if (existing) existing.remove();
    };
  }, []);

  return (
    <div className="min-h-screen">
      <SEO
        title="Website Design Portfolio | Custom Websites for Small Businesses | Elevate Growth Solutions"
        description="Browse our portfolio of custom-coded websites built for law firms, contractors, home services, e-commerce, beauty, and more. Full-Stack Marketing Strategist & Certified UX Designer serving businesses in Utah and nationwide."
        ogTitle="Website Portfolio - Elevate Growth Solutions"
        ogDescription="Custom-coded, mobile-responsive, SEO-optimized websites for small businesses. See our work across 8+ industries including legal, construction, beauty, and e-commerce."
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
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-12 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.5 }}
              >
                <motion.div
                  className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-2 flex items-center justify-center gap-1"
                  initial={{ scale: 0.5 }}
                  animate={isStatsInView ? { scale: 1 } : {}}
                  transition={{ delay: index * 0.15 + 0.2, type: "spring", stiffness: 200 }}
                >
                  {stat.value}
                  {stat.isStar && <Star className="w-7 h-7 md:w-9 md:h-9 fill-primary-foreground" />}
                </motion.div>
                <div className="font-sans text-sm md:text-base text-primary-foreground/80">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Logo Banner */}
      <LogoBanner
        logos={clientLogos}
        title="Trusted By Growing Businesses"
        subtitle="We've partnered with businesses across industries to build websites and marketing strategies that drive real results"
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
              From full websites to high-converting ad landing pages, each project is custom-built to meet the unique needs of the business.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* About & Industries Section */}
      <section ref={aboutRef} className="py-16 md:py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: About & Certifications */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isAboutInView ? { opacity: 1, x: 0 } : {}}
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
              initial={{ opacity: 0, x: 30 }}
              animate={isAboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
              <h3 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6">
                Industries We <span className="text-primary">Serve</span>
              </h3>
              <p className="font-serif text-muted-foreground mb-8 leading-relaxed">
                We've worked with businesses across a wide range of industries, creating tailored web solutions that speak to each audience. No templates — every site is built from the ground up.
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

      {/* Reviews Section */}
      <section ref={reviewsRef} className="py-16 md:py-24 bg-gradient-to-b from-background to-accent/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isReviewsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <Star className="w-4 h-4 fill-primary" />
              <span className="font-medium text-sm">5-Star Google Reviews</span>
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
              What Our <span className="text-primary">Clients</span> Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <motion.div
                key={review.author}
                className="relative rounded-2xl p-6 bg-card border-2 border-primary/10 hover:border-primary/25 transition-all"
                initial={{ opacity: 0, y: 30 }}
                animate={isReviewsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="absolute -top-2 -right-2 text-7xl font-serif text-primary/10 pointer-events-none select-none leading-none">
                  "
                </div>
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="font-serif italic text-foreground leading-relaxed mb-4 text-sm md:text-base">
                  "{review.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-md">
                    <span className="font-display font-bold text-primary-foreground text-sm">
                      {review.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <cite className="not-italic font-sans font-semibold text-foreground text-sm">{review.author}</cite>
                    {review.role && <p className="text-xs text-primary font-medium">{review.role}</p>}
                    {review.source && <p className="text-xs text-muted-foreground">{review.source}</p>}
                  </div>
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
            <Button variant="outline" className="gap-2 border-primary/20 hover:bg-primary/5 text-primary" asChild>
              <a href="https://share.google/rxaaY7ZQVM2KJOR2l" target="_blank" rel="noopener noreferrer">
                See All Reviews on Google <ExternalLink size={14} />
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
