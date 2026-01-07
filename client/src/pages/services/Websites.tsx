import ServicePageLayout from "@/components/ServicePageLayout";
import servicesHero from "@assets/services_hero_team_1920.webp";
import servicesHero768 from "@assets/services_hero_team_768.webp";
import servicesHero1280 from "@assets/services_hero_team_1280.webp";

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
      heroImage={servicesHero}
      heroImageSrcSet={`${servicesHero768} 768w, ${servicesHero1280} 1280w, ${servicesHero} 1920w`}

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
    />
  );
}
