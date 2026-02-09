import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import MultiStepForm from "@/components/MultiStepForm";
import { Mail, CheckCircle, Instagram, Calendar } from "lucide-react";
import { BokehEffect, FloatingOrbs, WaveDivider, GradientTransition } from "@/components/decorative";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Contact Us - Let's Elevate Your Marketing | Elevate Growth Solutions"
        description="Ready to elevate your marketing? Get in touch with Elevate Growth Solutions today. Fill out our contact form to discuss your web design and marketing needs."
        ogTitle="Contact Elevate Growth Solutions - Start Your Marketing Journey"
        ogDescription="Let's connect and discuss how we can help your business grow. Expert marketing strategy and execution tailored to your goals."
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-50 to-primary/5 pt-32 pb-16 overflow-hidden">
        <BokehEffect opacity={0.4} />
        <FloatingOrbs variant="light" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-gray-900 mb-4" data-testid="text-contact-title">
            Let's Connect
          </h1>
          <p className="font-serif text-xl text-gray-600 max-w-2xl mx-auto" data-testid="text-contact-description">
            Ready to elevate your marketing? Tell us about your goals and we'll put together a custom plan — free.
          </p>
        </div>
        <GradientTransition from="transparent" to="hsl(var(--background))" height="60px" />
      </section>

      {/* Contact Form Section */}
      <section className="relative py-16 bg-white flex-1 overflow-hidden">
        <BokehEffect opacity={0.25} />
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Multi-Step Form */}
            <div>
              <MultiStepForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">
                  Get in Touch
                </h2>
                <p className="font-serif text-gray-600 leading-relaxed mb-4">
                  Whether you're looking for a new website, need help with SEO, or want a complete
                  marketing overhaul, we're here to help. Fill out the form and we'll respond within
                  24 hours to discuss your project.
                </p>
                <p className="font-serif text-gray-500 text-sm">
                  Based in Las Vegas, Nevada — providing digital marketing services to businesses across the country.
                </p>
              </div>

              {/* Book a Discovery Call CTA */}
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h3 className="font-display font-semibold text-gray-900">
                    Ready to Talk?
                  </h3>
                </div>
                <p className="font-serif text-gray-600 text-sm mb-4">
                  Skip the form and book a free 30-minute discovery call directly on my calendar.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="w-full font-serif font-medium gap-2"
                >
                  <a
                    href="https://calendar.app.google/vDHVT1u28utXTzLt5"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Calendar className="w-5 h-5" />
                    Book a Discovery Call Now
                  </a>
                </Button>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-gray-900">Email Us</h3>
                    <a
                      href="mailto:tysen@elevategrowth.solutions"
                      className="font-serif text-primary hover:underline"
                    >
                      tysen@elevategrowth.solutions
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-gray-900">Follow Us</h3>
                    <a
                      href="https://www.instagram.com/elevategrowthsolutions"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-serif text-primary hover:underline"
                    >
                      @elevategrowthsolutions
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-display font-semibold text-gray-900 mb-3">
                  What to Expect
                </h3>
                <ul className="space-y-2 font-serif text-gray-600 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Response within 24 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Free consultation call to discuss your needs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Custom proposal tailored to your goals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>No pressure, no obligations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider before footer */}
        <WaveDivider position="bottom" fillColor="hsl(var(--muted) / 0.5)" />
      </section>

      <Footer />
    </div>
  );
}
