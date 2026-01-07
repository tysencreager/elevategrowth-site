import ServicePageLayout from "@/components/ServicePageLayout";
import websiteHero from "@assets/stock_images/black_and_white_desk_69514a94.jpg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Smartphone, Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Portfolio project data with SEO-friendly descriptions
const portfolioProjects = [
  {
    name: "J Penn Planning",
    description: "Event planning and connection coaching website. Empowering connection through experience, story, and soul.",
    fullDescription: "Custom website design for J Penn Planning, an event planning and connection coaching business based in Utah",
    tags: ["Event Planning", "Coaching", "Design"],
    url: "https://jpennplanning.com",
    image: "https://i.postimg.cc/R0ssqYxY/jpennplanning_screenshot.png",
    active: true
  },
  {
    name: "Mac & Meadow Co.",
    description: "Natural skincare e-commerce website featuring Wagyu tallow cream products. Holistic, nourishing, and healing skincare with a warm, organic aesthetic.",
    fullDescription: "E-commerce website design for Mac & Meadow Co., a natural Wagyu tallow skincare brand",
    tags: ["E-commerce", "Skincare", "Web Design"],
    url: "https://macandmeadow.co",
    image: "https://i.postimg.cc/66Gj5zjg/M_M_header.png",
    active: true
  },
  {
    name: "So Crystal Designs",
    description: "Fashion designer portfolio & booking platform. Showcasing universal style, personal styling services, and custom creations.",
    fullDescription: "Portfolio and booking website for So Crystal Designs, a fashion designer and personal stylist",
    tags: ["Fashion", "Booking System", "Portfolio"],
    url: "https://socrystaldesigns.com",
    image: "https://i.postimg.cc/5tNK4VDW/socrystaldesigns_screenshot.png",
    active: true
  },
  {
    name: "Pay It Forward Flooring",
    description: "A comprehensive retail platform featuring a multi-page product catalog, financing integration, and a community foundation blog.",
    fullDescription: "Retail website with product catalog for Pay It Forward Flooring company",
    tags: ["Retail Platform", "Multi-page App", "Archived"],
    url: null,
    image: "https://i.postimg.cc/prDJQG3L/PIFF_header3.png",
    active: false
  }
];

function PortfolioCard({ project, index }: { project: typeof portfolioProjects[0]; index: number }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
      itemScope
      itemType="https://schema.org/WebSite"
    >
      {/* Project Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={project.image}
          alt={project.fullDescription}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          itemProp="image"
        />
        {/* Overlay on hover - hidden on touch devices, visible tap indicator on mobile */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300" />

        {/* Visit Site overlay - always visible on mobile for active projects */}
        {project.active && project.url && (
          <div className="absolute inset-0 flex items-end sm:items-center justify-center pb-4 sm:pb-0 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-primary text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg font-sans font-semibold text-sm sm:text-base flex items-center gap-2 shadow-xl">
              Visit Site
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
            </div>
          </div>
        )}

        {/* Archived badge */}
        {!project.active && (
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-muted/90 backdrop-blur-sm text-muted-foreground px-2.5 py-1 sm:px-3 rounded-full text-xs font-sans font-medium">
            Archived
          </div>
        )}
      </div>

      {/* Card content */}
      <div className="p-4 sm:p-6">
        <h3
          className="font-display font-bold text-lg sm:text-xl text-primary mb-2 group-hover:text-primary/80 transition-colors"
          itemProp="name"
        >
          {project.name}
        </h3>
        <p
          className="font-serif text-muted-foreground leading-relaxed mb-3 sm:mb-4 text-sm"
          itemProp="description"
        >
          {project.description}
        </p>

        {/* Features - stack on mobile */}
        <div className="flex flex-col xs:flex-row gap-2 xs:gap-4 mb-3 sm:mb-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Smartphone className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
            <span>Mobile Responsive</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Search className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
            <span>SEO Optimized</span>
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="bg-muted text-muted-foreground px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-xs font-sans font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Hidden structured data */}
        {project.url && <meta itemProp="url" content={project.url} />}
      </div>
    </motion.article>
  );
}

function PortfolioSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  // Schema.org structured data for the portfolio
  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Website Portfolio",
    "description": "Selected website design and development projects by Elevate Growth Solutions",
    "numberOfItems": portfolioProjects.length,
    "itemListElement": portfolioProjects.map((project, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "WebSite",
        "name": project.name,
        "description": project.description,
        "url": project.url || undefined,
        "image": project.image
      }
    }))
  };

  return (
    <section
      ref={sectionRef}
      className="py-10 sm:py-12 md:py-16 bg-background"
      aria-labelledby="portfolio-heading"
    >
      {/* Structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2
            id="portfolio-heading"
            className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-foreground mb-3 sm:mb-4"
          >
            Selected Website Work
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-primary mx-auto rounded-full mb-4 sm:mb-6" />
          <p className="font-serif text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            A collection of projects that showcase my expertise in website building and development.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-12">
          {portfolioProjects.map((project, index) => (
            project.active && project.url ? (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-xl"
                aria-label={`Visit ${project.name} website (opens in new tab)`}
                title={`View ${project.name} - ${project.description}`}
              >
                <PortfolioCard project={project} index={index} />
              </a>
            ) : (
              <div key={project.name}>
                <PortfolioCard project={project} index={index} />
              </div>
            )
          ))}
        </div>

        {/* Real Estate Preview Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-12"
        >
          <div className="text-center mb-6 sm:mb-8">
            <span className="inline-block font-sans text-xs sm:text-sm font-medium text-primary bg-primary/10 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-3 sm:mb-4">
              Real Estate Agents
            </span>
            <h3 className="font-display font-bold text-xl sm:text-2xl md:text-3xl text-foreground mb-2 sm:mb-3">
              Websites Built for Realtors
            </h3>
            <p className="font-serif text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
              I can customize any site to fit your brand. This is just a taste of what I can do for real estate professionals.
            </p>
          </div>

          <motion.a
            href="https://realestate.elevategrowth.solutions/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="block group max-w-4xl mx-auto focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-2xl"
            aria-label="Explore real estate website templates (opens in new tab)"
            title="Browse real estate website design templates"
          >
            <div className="relative bg-card rounded-xl sm:rounded-2xl overflow-hidden border-2 border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
              {/* Preview Image */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src="https://i.postimg.cc/nhwBmfMv/real-estate-preview-panel-screenshot.png"
                  alt="Real estate website template preview panel showing multiple design options for realtors"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay - visible on mobile */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300" />

                {/* CTA overlay */}
                <div className="absolute inset-0 flex items-end sm:items-center justify-center pb-4 sm:pb-0 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-primary text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-sans font-semibold text-sm sm:text-base flex items-center gap-2 shadow-xl">
                    Explore Real Estate Templates
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                  </div>
                </div>
              </div>

              {/* Widget Footer */}
              <div className="p-4 sm:p-6 bg-gradient-to-r from-primary/5 to-transparent">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
                  <div>
                    <h4 className="font-display font-semibold text-base sm:text-lg text-foreground mb-0.5 sm:mb-1">
                      Real Estate Website Preview Panel
                    </h4>
                    <p className="font-serif text-xs sm:text-sm text-muted-foreground">
                      Browse different styles and find the perfect fit for your real estate business
                    </p>
                  </div>
                  <div className="flex items-center text-primary font-sans font-medium text-sm sm:text-base">
                    <span className="sm:hidden">Tap to view</span>
                    <span className="hidden sm:inline">View Templates</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
          </motion.a>
        </motion.div>

        {/* Marketing Portfolio Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <a
            href="https://tysencreager.my.canva.site/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View full marketing portfolio (opens in new tab)"
            title="See more marketing and design work"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="inline-block">
              <Button
                variant="outline"
                size="lg"
                className="font-sans font-semibold text-sm sm:text-base px-6 sm:px-8"
              >
                View Full Marketing Portfolio
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" aria-hidden="true" />
              </Button>
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default function Websites() {
  return (
    <ServicePageLayout
      // SEO
      title="Website Design & Development | Custom Websites | Elevate Growth Solutions"
      metaDescription="Custom-coded websites built in days, not months. Fast, responsive, mobile-first design optimized for conversions. Starting at $1,299. Get a free consultation."
      ogTitle="Custom Website Design & Development Services"
      ogDescription="Professional websites that convert visitors into customers. Fast-loading, mobile-responsive, and SEO-optimized. Custom-coded solutions starting at $1,299."

      // Hero
      heroTitle="Website Design & Development"
      heroSubtitle="Custom-coded websites built to convert, not just look pretty."
      heroImage={websiteHero}

      // Main content
      serviceName="Web Development"
      serviceTagline="Websites That Work as Hard as You Do"
      serviceDescription="Your website is often the first impression potential customers have of your business. I build custom-coded websites that load fast, look great on every device, and are designed with one goal in mind: turning visitors into customers. No templates, no page builders—just clean, efficient code tailored to your needs."

      // Features
      features={[
        {
          title: "Custom Code, No Templates",
          description: "Every site is hand-coded from scratch. This means faster load times, cleaner design, and a site that truly represents your brand—not a cookie-cutter template."
        },
        {
          title: "Mobile-First Design",
          description: "Over 60% of web traffic comes from mobile devices. Your site will look and work perfectly on phones, tablets, and desktops."
        },
        {
          title: "SEO Built In",
          description: "Proper site structure, fast loading speeds, and technical SEO best practices are baked into every build to help you rank higher in search results."
        },
        {
          title: "Conversion Focused",
          description: "Strategic layouts, clear calls-to-action, and user experience design that guides visitors toward taking action."
        },
        {
          title: "Fast Loading Speeds",
          description: "Optimized images, clean code, and modern hosting ensure your site loads in under 3 seconds—critical for both user experience and SEO."
        },
        {
          title: "Easy to Update",
          description: "Built with maintainability in mind. Need content updates? I handle monthly edits as part of the hosting package."
        }
      ]}

      // Portfolio section before process
      beforeProcess={<PortfolioSection />}

      // Process
      process={[
        {
          step: 1,
          title: "Discovery Call",
          description: "We'll discuss your business, goals, target audience, and what you need your website to accomplish. This helps me understand exactly what to build."
        },
        {
          step: 2,
          title: "Design & Planning",
          description: "I'll create a site map and wireframes, then design the visual look and feel. You'll see mockups before any code is written."
        },
        {
          step: 3,
          title: "Development",
          description: "Your site is built with clean, custom code. Throughout the process, you'll have access to a staging site to review progress."
        },
        {
          step: 4,
          title: "Launch & Support",
          description: "Once approved, your site goes live. I handle all the technical details and provide ongoing hosting and maintenance."
        }
      ]}

      // Pricing
      pricing={[
        {
          name: "Custom Built Website",
          price: "From $1,299",
          description: "Single-page sites start at $1,299. Price increases with additional pages and functionality.",
          features: [
            "Custom responsive design",
            "Mobile-optimized",
            "Contact form integration",
            "Basic SEO setup",
            "Fast hosting included (first month)",
            "2-3 week turnaround"
          ]
        },
        {
          name: "Hosting & Maintenance",
          price: "$80/mo",
          description: "Keep your site fast, secure, and up-to-date.",
          features: [
            "Managed cloud hosting",
            "SSL certificate included",
            "1 hour of content edits/month",
            "Uptime monitoring",
            "Regular backups",
            "Security updates"
          ],
          featured: true
        }
      ]}

      // FAQs
      faqs={[
        {
          question: "How long does it take to build a website?",
          answer: "Most one-page sites are completed in 2-3 weeks. Larger multi-page sites typically take 3-5 weeks depending on complexity. I'll give you a specific timeline during our discovery call."
        },
        {
          question: "Do you use WordPress or website builders?",
          answer: "No. I custom-code every site, which means faster load times, better security, and a design that's truly unique to your brand. No bloated plugins or template limitations."
        },
        {
          question: "Can I update the website myself?",
          answer: "The hosting package includes 1 hour of monthly content edits handled by me. If you need more frequent updates, we can discuss a content management solution or additional support hours."
        },
        {
          question: "What if I already have a website?",
          answer: "I can either redesign your existing site or build something completely new. We'll discuss what makes the most sense for your goals and budget."
        }
      ]}
    />
  );
}
