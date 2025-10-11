import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center px-4 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-foreground mb-6" data-testid="text-contact-title">
            Let's Connect
          </h1>
          
          <p className="font-serif text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed" data-testid="text-contact-description">
            Ready to elevate your marketing? Get in touch and let's start building something great together.
          </p>
          
          <a href="mailto:tysen@elevategrowth.solutions" data-testid="button-contact-email">
            <Button size="lg" className="font-sans font-medium text-base md:text-lg px-8 py-6 gap-3">
              <Mail className="h-5 w-5" />
              tysen@elevategrowth.solutions
            </Button>
          </a>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
