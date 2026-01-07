import ServicePageLayout from "@/components/ServicePageLayout";
import websiteHero from "@assets/stock_images/black_and_white_desk_69514a94.jpg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Smartphone, Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Portfolio project data
const portfolioProjects = [
  {
    name: "J Penn Planning",
    description: "Event planning and connection coaching website. Empowering connection through experience, story, and soul.",
    tags: ["Event Planning", "Coaching", "Design"],
    url: "https://jpennplanning.com",
    active: true
  },
  {
    name: "Mac & Meadow Co.",
    description: "Natural skincare e-commerce website featuring Wagyu tallow cream products. Holistic, nourishing, and healing skincare with a warm, organic aesthetic.",
    tags: ["E-commerce", "Skincare", "Web Design"],
    url: "https://macandmeadow.co",
    active: true
  },
  {
    name: "So Crystal Designs",
    description: "Fashion designer portfolio & booking platform. Showcasing universal style, personal styling services, and custom creations.",
    tags: ["Fashion", "Booking System", "Portfolio"],
    url: "https://socrystaldesigns.com",
    active: true
  },
  {
    name: "Pay It Forward Flooring",
    description: "A comprehensive retail platform featuring a multi-page product catalog, financing integration, and a community foundation blog.",
    tags: ["Retail Platform", "Multi-page App", "Archived"],
    url: null,
    active: false
  }
];

function PortfolioCard({ project, index }: { project: typeof portfolioProjects[0]; index: number }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
    >
      {/* Card content */}
      <div className="p-6 md:p-8">
        <h3 className="font-display font-bold text-xl md:text-2xl text-primary mb-3 group-hover:text-primary/80 transition-colors">
          {project.name}
        </h3>
        <p className="font-serif text-muted-foreground leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Features */}
        <div className="flex gap-4 mb-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Smartphone className="w-4 h-4" />
            Mobile Responsive
          </span>
          <span className="flex items-center gap-1.5">
            <Search className="w-4 h-4" />
            SEO Optimized
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs font-sans font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        {project.active && project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button size="sm" className="font-sans font-medium">
                Visit Site
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </a>
        ) : (
          <Button
            size="sm"
            variant="outline"
            disabled
            className="font-sans font-medium cursor-not-allowed opacity-50"
          >
            Archived Project
          </Button>
        )}
      </div>
    </motion.div>
  );
}

function PortfolioSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <>
      {/* Portfolio Section */}
      <section ref={sectionRef} className="py-12 md:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
              Selected Website Work
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
            <p className="font-serif text-muted-foreground max-w-2xl mx-auto text-lg">
              A collection of projects that showcase my expertise in website building and development.
            </p>
          </motion.div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
            {portfolioProjects.map((project, index) => (
              <PortfolioCard key={project.name} project={project} index={index} />
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
            >
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="inline-block">
                <Button variant="outline" size="lg" className="font-sans font-semibold">
                  View Full Marketing Portfolio
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Real Estate Preview Panel */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <span className="inline-block font-sans text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full mb-6">
              Real Estate Agents
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
              Websites Built for Realtors
            </h2>
            <p className="font-serif text-muted-foreground max-w-2xl mx-auto text-lg">
              I can customize any site to fit your brand. This is just a taste of what I can do for real estate professionals.
            </p>
          </motion.div>

          {/* Real Estate Preview Widget */}
          <motion.a
            href="https://realestate.elevategrowth.solutions/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="block group"
          >
            <div className="relative bg-card rounded-2xl overflow-hidden border-2 border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
              {/* Preview Image */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src="https://i.postimg.cc/nhwBmfMv/real-estate-preview-panel-screenshot.png"
                  alt="Real Estate Website Preview Panel"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* CTA overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-primary text-white px-6 py-3 rounded-lg font-sans font-semibold flex items-center gap-2 shadow-xl">
                    Explore Real Estate Templates
                    <ExternalLink className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Widget Footer */}
              <div className="p-6 bg-gradient-to-r from-primary/5 to-transparent">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-display font-semibold text-lg text-foreground mb-1">
                      Real Estate Website Preview Panel
                    </h3>
                    <p className="font-serif text-sm text-muted-foreground">
                      Browse different styles and find the perfect fit for your real estate business
                    </p>
                  </div>
                  <div className="hidden sm:flex items-center text-primary font-sans font-medium">
                    View Templates
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </motion.a>
        </div>
      </section>
    </>
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
    >
      <PortfolioSection />
    </ServicePageLayout>
  );
}
