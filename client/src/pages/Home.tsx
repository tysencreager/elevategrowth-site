import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import SchemaMarkup from "@/components/SchemaMarkup";
import HomeHero from "@/components/home/HomeHero";
import ClientMarquee from "@/components/home/ClientMarquee";
import ServicesIconGrid from "@/components/home/ServicesIconGrid";
import ProcessSplit from "@/components/home/ProcessSplit";
import SelectedWorks from "@/components/home/SelectedWorks";
import PullQuoteTestimonials from "@/components/home/PullQuoteTestimonials";
import InquirySection from "@/components/home/InquirySection";
import ParallaxCTA from "@/components/home/ParallaxCTA";
import valueImage from "@assets/value_prop.webp";
import ctaImage from "@assets/cta_background.webp";

const processSteps = [
  {
    title: "Discovery Call",
    description:
      "We start with a conversation to understand your goals, challenges, and vision for your brand."
  },
  {
    title: "Strategy Development",
    description:
      "We craft a custom marketing strategy tailored to your business objectives and target audience."
  },
  {
    title: "Execution & Launch",
    description:
      "We bring your strategy to life with expert design, development, and campaign implementation."
  },
  {
    title: "Optimization & Growth",
    description:
      "We continuously analyze performance and refine strategies to maximize your marketing ROI."
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <SEO
        title="Web Design & Full-Stack Marketing | Elevate Growth Solutions"
        description="Boutique web design and full-stack marketing agency. Custom websites on any platform, plus SEO, social media, and content creation—in Salt Lake City and nationwide."
        ogTitle="Web Design & Full-Stack Marketing for Growing Businesses | Elevate Growth Solutions"
        ogDescription="Custom websites built and maintained on any platform. Boutique marketing agency providing web design, SEO, social media management, and content creation for businesses of all sizes, nationwide."
      />
      <SchemaMarkup type="marketingAgency" />
      <Navbar />

      <HomeHero />

      <ClientMarquee />

      <ServicesIconGrid />

      <ProcessSplit
        image={valueImage}
        imageAlt="Strategy planning session at Elevate Growth Solutions"
        steps={processSteps}
      />

      <SelectedWorks />

      <PullQuoteTestimonials
        featuredQuote="My business has skyrocketed since Tysen created my website. It's seriously so stunning and seamless. Hire her! You will not regret it."
        featuredAuthor="McKenzie M."
        sideQuotes={[
          {
            quote:
              "Working with Tysen was seamless from start to finish. She quickly understood the vision for my brand and delivered thoughtful, strategic designs that aligned perfectly with my marketing goals.",
            author: "Cassidy — Loan Officer"
          },
          {
            quote:
              "So grateful Tysen built my site. I have no regrets hiring her, she has done an incredible job!",
            author: "Jessica P."
          }
        ]}
      />

      <InquirySection />

      <ParallaxCTA
        backgroundImage={ctaImage}
        kicker="Begin the Conversation"
        title="Let's build something that stands the test of time."
        ctaText="Book a Discovery Call"
        ctaHref="/contact"
      />

      <Footer />
    </div>
  );
}
