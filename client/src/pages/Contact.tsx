import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import contactHero from "@assets/contact_hero.jpg";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div 
        className="relative flex flex-1 items-center justify-center px-4 pt-32"
        style={{ minHeight: "80vh" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center grayscale"
          style={{ backgroundImage: `url(${contactHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h1 className="font-display font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6" data-testid="text-contact-title">
            Let's Connect
          </h1>
          
          <p className="font-serif text-xl md:text-2xl text-white/95 mb-12 leading-relaxed" data-testid="text-contact-description">
            Ready to elevate your marketing? Get in touch and let's start building something great together.
          </p>
          
          <a href="mailto:tysen@elevategrowth.solutions" data-testid="button-contact-email">
            <Button size="lg" className="font-serif font-medium text-base md:text-lg px-8 py-6 gap-3">
              <Mail className="h-5 w-5" />
              tysen@elevategrowth.solutions
            </Button>
          </a>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
