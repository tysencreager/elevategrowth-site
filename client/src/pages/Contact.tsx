import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Send, CheckCircle, Instagram, Calendar } from "lucide-react";
import { BokehEffect, FloatingOrbs, WaveDivider, GradientTransition } from "@/components/decorative";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          service: formData.service,
          message: formData.message
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", company: "", service: "", message: "" });
      } else {
        throw new Error("Form submission failed");
      }
    } catch {
      setError("Something went wrong. Please try emailing us directly at tysen@elevategrowth.solutions");
    } finally {
      setIsSubmitting(false);
    }
  };

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
            Ready to elevate your marketing? Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>
        <GradientTransition from="transparent" to="hsl(var(--background))" height="60px" />
      </section>

      {/* Contact Form Section */}
      <section className="relative py-16 bg-white flex-1 overflow-hidden">
        <BokehEffect opacity={0.25} />
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h2 className="font-display text-2xl font-semibold text-gray-900 mb-2">
                    Message Sent!
                  </h2>
                  <p className="font-serif text-gray-600">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="mt-6"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-serif">
                        Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="font-serif"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-serif">
                        Email <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="font-serif"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company" className="font-serif">
                        Company/Business
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your business name"
                        className="font-serif"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service" className="font-serif">
                        Service Interested In
                      </Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-serif"
                      >
                        <option value="">Select a service...</option>
                        <option value="web-design">Web Design</option>
                        <option value="seo">SEO Services</option>
                        <option value="social-media">Social Media Management</option>
                        <option value="branding">Branding & Creative Design</option>
                        <option value="full-stack">Full-Stack Marketing</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-serif">
                      Message <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project, goals, or questions..."
                      rows={6}
                      className="font-serif resize-none"
                    />
                  </div>

                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg font-serif text-sm">
                      {error}
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full font-serif font-medium text-lg py-6 gap-2"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">
                  Get in Touch
                </h2>
                <p className="font-serif text-gray-600 leading-relaxed">
                  Whether you're looking for a new website, need help with SEO, or want a complete
                  marketing overhaul, we're here to help. Fill out the form and we'll respond within
                  24 hours to discuss your project.
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
                    href="https://calendly.com/tysencreager/30minutes"
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
