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
      description: "Strategy, scheduling, content creation, and analytics across platforms"
    },
    {
      title: "Branding & Creative Direction",
      description: "Visual identity, brand messaging, and storytelling that resonates"
    },
    {
      title: "Website Design & Optimization",
      description: "UX-focused builds with SEO in mind, built for growth, not just looks"
    },
    {
      title: "SEO Services",
      description: "Comprehensive search engine optimization to improve your visibility and drive organic traffic"
    },
    {
      title: "Social Media Strategy",
      description: "Platform-specific strategy, engagement, and performance-focused content"
    },
    {
      title: "Ad Campaign Management",
      description: "Paid social and Google Ads management with clear ROI tracking"
    },
    {
      title: "Content Creation",
      description: "Blog posts, email copy, lead magnets, and more, all with your audience in mind"
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
