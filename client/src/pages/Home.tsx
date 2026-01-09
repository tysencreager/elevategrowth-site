import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueProp from "@/components/ValueProp";
import Process, { Phone, Lightbulb, Rocket, TrendingUp } from "@/components/Process";
import LeadMagnet from "@/components/LeadMagnet";
import LogoBanner from "@/components/LogoBanner";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import SchemaMarkup from "@/components/SchemaMarkup";
// Optimized WebP images
import valueImage from "@assets/value_prop.webp";
import ctaImage from "@assets/cta_background.webp";
import ctaImage768 from "@assets/cta_background_768.webp";

const clientLogos = [
  { src: "https://i.postimg.cc/3N6Kn78Y/Dial_In_Logo_png.png", alt: "Dial In" },
  { src: "https://i.postimg.cc/8FCq8ydW/1.png", alt: "Client Logo" },
  { src: "https://i.postimg.cc/xkdWrsGN/2.png", alt: "Client Logo" },
  { src: "https://i.postimg.cc/hJGHFC8m/3.png", alt: "Client Logo" },
  { src: "https://i.postimg.cc/QBMRL6gT/4.png", alt: "Client Logo" },
  { src: "https://i.postimg.cc/94fv3xPy/5.png", alt: "Client Logo" },
  { src: "https://i.postimg.cc/d7SgJ8n3/6.png", alt: "Client Logo" },
  { src: "https://i.postimg.cc/p913PDky/7.png", alt: "Client Logo" },
  { src: "https://i.postimg.cc/KKYdX97n/8.png", alt: "Client Logo" },
  { src: "https://i.postimg.cc/qtZWp8Qz/9.png", alt: "Client Logo" },
  { src: "https://i.postimg.cc/p913PDk5/10.png", alt: "Client Logo" },
  { src: "https://i.postimg.cc/CZ69wjJf/11.png", alt: "Client Logo" },
  { src: "https://i.postimg.cc/Lq0Gmzv1/12.png", alt: "Client Logo" },
  { src: "https://i.postimg.cc/d7SgJ8nd/13.png", alt: "Client Logo" },
  { src: "https://i.postimg.cc/f3g1Mx5m/14.png", alt: "Client Logo" }
];

const testimonials = [
  {
    quote: "Working with Tysen was seamless from start to finish. She quickly understood the vision for my brand and delivered thoughtful, strategic designs that aligned perfectly with my marketing goals. Her creativity and professionalism made the entire process easy and efficient. I'm so impressed with the final product!",
    author: "Cassidy",
    role: "Loan Officer"
  },
  {
    quote: "My business has skyrocketed since Tysen (Elevate Growth Solutions) created my website. It's seriously SO stunning and seamless. Hire her! You will not regret it.",
    author: "McKenzie M."
  },
  {
    quote: "I have loved working with Tysen, she's incredible! If you need help with marketing, she's your gal!",
    author: "Cassidy G."
  },
  {
    quote: "So grateful Tysen built my site. I have no regrets hiring her, she has done an incredible job!",
    author: "Jessica P."
  },
  {
    quote: "From the most basic detail to the biggest detail in marketing a business and it being a success, Tysen doesn't shy away from any of it. Her confidence in you and your business gives a new growth within you and lights a fire under you that helps you succeed.",
    author: "Abagail D."
  }
];

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
        backgroundVideo="1152894724"
        title="Web Design & Full-Stack Marketing for Growing Businesses"
        subtitle="Custom websites in weeks, not months. Boutique marketing services that treat your business like our own."
        ctaText="See Our Services"
        ctaHref="/services"
      />

      {/* Logo Banner - Social proof right after hero */}
      <LogoBanner
        logos={clientLogos}
        title="Trusted By Growing Businesses"
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

      {/* Testimonial Carousel - Rotating testimonials */}
      <TestimonialCarousel testimonials={testimonials} autoPlayInterval={6000} />

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
