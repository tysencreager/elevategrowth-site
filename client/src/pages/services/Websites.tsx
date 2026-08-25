import ServicePageLayout from "@/components/ServicePageLayout";
import websiteHero from "@assets/stock_images/black_and_white_desk_69514a94.jpg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Smartphone, Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import sectionBand from "@assets/band-websites.webp";
import kleenslateImg from "@assets/portfolio-kleenslate.webp";
import lexlegalImg from "@assets/portfolio-lexlegal.webp";
import bodyshopImg from "@assets/portfolio-bodyshopgym.webp";
import energizeImg from "@assets/portfolio-energizeyourvibe.webp";
import macmeadowImg from "@assets/portfolio-macmeadow.webp";

// Portfolio project data with SEO-friendly descriptions
const portfolioProjects = [
  {
    name: "Kleen Slate",
    description: "Luxury house cleaning website for a Utah County cleaning company. Elegant, editorial design with service and pricing pages and free in-home bid requests.",
    fullDescription: "Custom website design for Kleen Slate, a luxury house cleaning company serving Utah County",
    tags: ["Cleaning Services", "Local Business", "Web Design"],
    url: "https://www.kleenslate.info",
    image: kleenslateImg,
    active: true
  },
  {
    name: "Lex Legal",
    description: "Professional law firm website for a practice licensed in Utah and California. Practice area pages, attorney profiles, and consultation scheduling.",
    fullDescription: "Law firm website design for Lex Legal, a practice licensed in Utah and California",
    tags: ["Legal", "Professional Services", "Web Design"],
    url: "https://lexlegallaw.com",
    image: lexlegalImg,
    active: true
  },
  {
    name: "The Body Shop Gym",
    description: "Bold, street-inspired website for a family-owned gym in Willard, Utah. Membership signup, personal training, and nutrition services.",
    fullDescription: "Gym website design for The Body Shop Gym, a family-owned gym in Willard, Utah",
    tags: ["Fitness", "Membership", "Web Design"],
    url: "https://thebodyshopgym.com",
    image: bodyshopImg,
    active: true
  },
  {
    name: "Energize Your Vibe",
    description: "Vibrant community platform for a women's connection and lifestyle brand. Membership signup, events, and a design as high-energy as the community it serves.",
    fullDescription: "Community platform website design for Energize Your Vibe, a women's connection and lifestyle brand",
    tags: ["Community", "Membership", "Web Design"],
    url: "https://www.energizeyourvibe.com",
    image: energizeImg,
    active: true
  },
  {
    name: "Mac & Meadow Co.",
    description: "Natural skincare e-commerce website featuring Wagyu tallow cream products. Holistic, nourishing, and healing skincare with a warm, organic aesthetic.",
    fullDescription: "E-commerce website design for Mac & Meadow Co., a natural Wagyu tallow skincare brand",
    tags: ["E-commerce", "Skincare", "Web Design"],
    url: "https://www.macandmeadowco.com",
    image: macmeadowImg,
    active: true
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
      title="Website Design & Development | Elevate Growth Solutions"
      metaDescription="Custom websites built in days, not months, on any platform you choose. Fast, mobile-first design optimized for conversions. Starting at $2,500."
      ogTitle="Custom Website Design & Development Services"
      ogDescription="Professional websites that convert visitors into customers. Fast-loading, mobile-responsive, and SEO-optimized, built or maintained on any platform. Starting at $2,500."

      // Hero
      heroTitle="Website Design & Development"
      heroSubtitle="Custom websites built to convert, not just look pretty, on any platform you choose."
      heroImage={websiteHero}
      sectionImage={sectionBand}
      sectionImageAlt="Studio desk with laptop and design notes"

      // Main content
      serviceName="Web Development"
      serviceTagline="Websites That Work as Hard as You Do"
      serviceDescription="Your website is often the first impression potential customers have of your business. I build and maintain custom websites that load fast, look great on every device, and are designed with one goal in mind: turning visitors into customers. Whether you want a fully custom-coded build, a WordPress site, or work on another builder like Squarespace or Shopify, I'll create (or take over) a site tailored to your needs."

      // Features
      features={[
        {
          title: "Built Your Way, On Any Platform",
          description: "Want a fully custom-coded build for maximum performance, or prefer WordPress or another builder you can edit yourself? I build on whatever platform fits you best, and I can take over and maintain a site you already have."
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
          description: "Optimized images, clean code, and modern hosting ensure your site loads in under 3 seconds, which is critical for both user experience and SEO."
        },
        {
          title: "Easy to Update",
          description: "Built with maintainability in mind. Need content updates? I handle monthly edits as part of the hosting package."
        }
      ]}

      // Portfolio section before process
      beforeProcess={<PortfolioSection />}

      // Show pricing right after the portfolio section instead of after the process steps
      pricingEarly

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
      pricingSubtitle="Base rates assume you provide final copy and brand assets. Need copywriting, photography, or branding? We'll scope content production alongside your build. Hosting & maintenance is $200/mo on any platform and includes SSL, backups, uptime monitoring, and 1 hour of content edits every month."
      pricing={[
        {
          name: "Launch",
          price: "From $2,500",
          description: "A conversion-focused single-page or starter site. Ideal for new businesses and campaigns that need a sharp, fast web presence.",
          features: [
            "Custom responsive design",
            "Mobile-optimized",
            "Contact form integration",
            "Basic SEO setup",
            "Fast hosting included (first month)",
            "Efficient, on-schedule delivery"
          ]
        },
        {
          name: "Business",
          price: "From $4,500",
          description: "A full multi-page website built around your services, your customers, and search. Includes up to 8 pages; additional pages are $300 each.",
          features: [
            "Everything in Launch",
            "Up to 8 custom-designed pages",
            "On-page SEO for every page",
            "Analytics & conversion tracking",
            "Blog or resource section",
            "Staging site access during the build"
          ],
          featured: true
        },
        {
          name: "E-Commerce & Custom",
          price: "From $7,500",
          description: "Online stores and larger commercial builds. Pricing scales with catalog size, integrations, and functionality; complex projects are quoted per project.",
          features: [
            "Product catalog & secure checkout",
            "Payment, shipping & tax setup",
            "CRM, booking & software integrations",
            "Customer accounts & portals",
            "Training & handoff documentation",
            "Dedicated launch support"
          ]
        }
      ]}

      // FAQs
      faqs={[
        {
          question: "How long does it take to build a website?",
          answer: "Every project is different depending on scope and complexity. I'll give you a specific timeline during our discovery call and keep you updated at every milestone."
        },
        {
          question: "Do you build on WordPress and website builders?",
          answer: "Yes. I build on whatever platform fits your goals: fully custom-coded sites for maximum speed and security, or WordPress, Squarespace, Shopify, and other builders if you'd rather manage things yourself. I can also take over and maintain a site you already have, no matter how it was built."
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
