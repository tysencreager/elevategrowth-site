import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueProp from "@/components/ValueProp";
import Testimonial from "@/components/Testimonial";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import heroImage from "@assets/Black and white photography _ black and white…_1760215489978.jpeg";
import valueImage from "@assets/stock_images/black_and_white_prof_325156c7.jpg";
import ctaImage from "@assets/stock_images/black_and_white_desk_69514a94.jpg";

export default function Home() {
  return (
    <div className="min-h-screen">
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
        description="Whether you're launching something new, optimizing your e-commerce storefront, or ready to scale with confidence, we offer full-stack marketing services that meet you where you are and take you where you want to go. With a balance of creative strategy and real-world experience, we're here to simplify your marketing, amplify your presence, and help you create momentum that lasts, both online and offline."
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
