import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueProp from "@/components/ValueProp";
import Process, { Phone, Lightbulb, Rocket, TrendingUp } from "@/components/Process";
import LeadMagnet from "@/components/LeadMagnet";
import Testimonial from "@/components/Testimonial";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import SchemaMarkup from "@/components/SchemaMarkup";
// Optimized WebP images
import heroImage from "@assets/hero_bw_1920.webp";
import heroImage768 from "@assets/hero_bw_768.webp";
import valueImage from "@assets/value_prop.webp";
import ctaImage from "@assets/cta_background.webp";
import ctaImage768 from "@assets/cta_background_768.webp";

export default function Home() {
  const processSteps = [
    {
      icon: Phone,
      title: "Discovery Call",
      description: "We start with a conversation to understand your goals, challenges, and vision for your brand."
    },
    {
      icon: Lightbulb,
      title: "Strategy Development",
      description: "We craft a custom marketing strategy tailored to your business objectives and target audience."
    },
    {
      icon: Rocket,
      title: "Execution & Launch",
      description: "We bring your strategy to life with expert design, development, and campaign implementation."
    },
    {
      icon: TrendingUp,
      title: "Optimization & Growth",
      description: "We continuously analyze performance and refine strategies to maximize your marketing ROI."
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Web Design Agency & Full-Stack Marketing | Elevate Growth Solutions"
        description="Boutique web design agency and full-stack marketing services for small businesses, startups, and entrepreneurs. Custom websites built in weeks, not months. SEO, social media, branding, and conversion-focused design. Serving Salt Lake City and nationwide."
        ogTitle="Web Design & Full-Stack Marketing for Small Businesses | Elevate Growth Solutions"
        ogDescription="Custom websites in weeks, not months. Boutique marketing agency providing web design, SEO, social media management, and branding for small businesses and startups."
      />
      <SchemaMarkup type="organization" />
      <SchemaMarkup type="localBusiness" />
      <Navbar />
      
      <Hero
        backgroundImage={heroImage}
        imageSrcSet={`${heroImage768} 768w, ${heroImage} 1920w`}
        title="Web Design & Full-Stack Marketing for Growing Businesses"
        subtitle="Custom websites in weeks, not months. Boutique marketing services that treat your business like our own."
        ctaText="See Our Services"
        ctaHref="/services"
        isLCP={true}
      />
      
      <ValueProp
        image={valueImage}
        imageAlt="Professional working on laptop"
        title="You're Not Just Another Client. Your Business Deserves Marketing That Actually Works."
        description="Tired of being just a number at big agencies? At Elevate Growth Solutions, we're a boutique firm that gives every client the care and attention they deserve. We handle everything—web design, SEO, social media, branding, and ad campaigns—so you can save time, relieve stress, and focus on what you do best: running your business. Whether you're launching your first website or ready to scale with confidence, we're here to help you generate more leads and grow."
      />
      
      <Process 
        steps={processSteps}
        subtitle="A simple, proven approach to elevating your brand"
      />
      
      <LeadMagnet 
        title="Free 90-Day Growth Starter Pack"
        description="Kickstart your marketing journey with our comprehensive growth checklist. Get actionable strategies, proven tactics, and expert tips to elevate your brand in the first 90 days—completely free."
        ctaText="Claim Your Free Pack"
      />
      
      <Testimonial
        quote="Working with Tysen was seamless from start to finish. She quickly understood the vision for my brand and delivered thoughtful, strategic designs that aligned perfectly with my marketing goals. Her creativity and professionalism made the entire process easy and efficient. I'm so impressed with the final product!"
        author="Cassidy"
        role="Loan Officer"
      />
      
      <CTASection
        backgroundImage={ctaImage}
        imageSrcSet={`${ctaImage768} 768w, ${ctaImage} 1920w`}
        title="Let's build something that stands the test of time."
        ctaText="Contact Us"
        ctaHref="mailto:tysen@elevategrowth.solutions"
      />
      
      <Footer />
    </div>
  );
}
