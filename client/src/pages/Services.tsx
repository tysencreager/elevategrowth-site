import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import servicesHero from "@assets/services_hero_team.jpg";

export default function Services() {
  const services = [
    {
      title: "Full-Stack Marketing Management",
      description: "End-to-end digital marketing strategy, campaign scheduling, content creation, and performance analytics across all platforms. We handle everything from brand positioning to execution, ensuring your marketing efforts are cohesive, data-driven, and aligned with your business goals."
    },
    {
      title: "Branding & Creative Direction",
      description: "Comprehensive brand identity development including logo design, visual identity systems, brand messaging, and storytelling that connects with your target audience. We create memorable brands that stand out in competitive markets and resonate with your ideal customers."
    },
    {
      title: "Website Building, Design & Optimization",
      description: "Custom website development from concept to launch. User experience (UX) focused design with mobile-responsive layouts, fast loading speeds, and SEO optimization built in from the ground up. We create websites that convert visitors into customers and grow with your business."
    },
    {
      title: "SEO Services",
      description: "Comprehensive search engine optimization including keyword research, on-page SEO, technical SEO audits, local SEO, and content optimization. We improve your search rankings, increase organic traffic, and help you get found by customers actively searching for your services."
    },
    {
      title: "Social Media Strategy",
      description: "Platform-specific social media marketing strategies for Instagram, Facebook, LinkedIn, and more. We create engaging content calendars, manage community engagement, track key performance metrics, and build authentic connections that drive brand awareness and conversions."
    },
    {
      title: "Ad Campaign Management",
      description: "Paid advertising management across Google Ads, Facebook Ads, Instagram Ads, and LinkedIn Ads. We create targeted campaigns with optimized ad copy, audience targeting, budget management, and detailed ROI tracking to maximize your advertising spend and generate qualified leads."
    },
    {
      title: "Content Creation",
      description: "Strategic content marketing including blog posts, email newsletters, lead magnets, social media content, and website copy. All content is crafted with your target audience in mind, optimized for SEO, and designed to establish your authority while driving engagement and conversions."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <Hero
        backgroundImage={servicesHero}
        title="Marketing Solutions Designed to Help Your Business Grow"
        subtitle="Strategy. Branding. Execution. Optimization."
        height="70vh"
      />
      
      <div className="pt-12 md:pt-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-semibold text-3xl md:text-4xl lg:text-5xl text-center text-foreground mb-12" data-testid="text-services-header">
            What We Offer:
          </h2>
        </div>
      </div>
      
      <ServicesGrid services={services} />
      
      <CTASection
        title="Ready to elevate your marketing?"
        ctaText="Get In Touch"
        ctaHref="mailto:tysen@elevategrowth.solutions"
        backgroundColor="bg-primary"
      />
      
      <Footer />
    </div>
  );
}
