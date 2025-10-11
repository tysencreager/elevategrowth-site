import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueProp from "@/components/ValueProp";
import Process, { Phone, Lightbulb, Rocket, TrendingUp } from "@/components/Process";
import LeadMagnet from "@/components/LeadMagnet";
import Testimonial from "@/components/Testimonial";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import heroImage from "@assets/Black and white photography _ black and white…_1760215489978.jpeg";
import valueImage from "@assets/Scaling Your Business with Chat GPT _ AI-Powered…_1760215543216.jpeg";
import ctaImage from "@assets/cta_background_1760215628693.jpeg";

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
        title="Elevate Growth Solutions - Boutique Full-Stack Marketing Agency"
        description="Marketing that moves people and brands forward. We blend strategy with soul to help businesses grow with intention, clarity, and impact. Full-stack marketing services including branding, web design, SEO, and social media strategy."
        ogTitle="Elevate Growth Solutions - Strategic Marketing That Drives Growth"
        ogDescription="Transform your marketing with expert strategy, creative branding, and proven execution. Boutique full-stack marketing services tailored for growing businesses."
      />
      <Navbar />
      
      <Hero
        backgroundImage={heroImage}
        title="Marketing that moves people and brands forward"
        ctaText="Learn More"
        ctaHref="/services"
      />
      
      <ValueProp
        image={valueImage}
        imageAlt="Professional working on laptop"
        title="At Elevate Growth Solutions, we blend strategy with soul, helping businesses grow with intention, clarity, and impact."
        description="Whether you're launching something new or ready to scale with confidence, we offer full-stack marketing services that meet you where you are and take you where you want to go. With a balance of creative strategy and real-world experience, we're here to simplify your marketing, amplify your presence, and help you create momentum that lasts, both online and offline."
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
        title="Let's build something that stands the test of time."
        ctaText="Contact Us"
        ctaHref="mailto:tysen@elevategrowth.solutions"
      />
      
      <Footer />
    </div>
  );
}
