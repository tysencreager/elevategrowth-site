import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import GoogleReviews from "@/components/GoogleReviews";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail,
  Send,
  CheckCircle,
  Instagram,
  Calendar,
  Phone,
  Clock,
  PhoneCall,
  FileText,
  ShieldCheck,
  MapPin
} from "lucide-react";
import contactSideImage from "@assets/contact-side.webp";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
};

const expectations = [
  {
    icon: Clock,
    title: "Response Within 24 Hours",
    description: "Your message never sits in a queue—expect a personal reply within one business day."
  },
  {
    icon: PhoneCall,
    title: "Free Consultation Call",
    description: "We'll hop on a no-cost call to talk through your goals and answer your questions."
  },
  {
    icon: FileText,
    title: "Custom Proposal",
    description: "You'll get a tailored plan built around your business—not a one-size-fits-all package."
  },
  {
    icon: ShieldCheck,
    title: "No Pressure, No Obligations",
    description: "Take your time. There's never a hard sell—just honest recommendations."
  }
];

const contactMethods = [
  {
    icon: Phone,
    label: "Call Us",
    display: "(435) 553-4668",
    href: "tel:+14355534668",
    external: false
  },
  {
    icon: Mail,
    label: "Email Us",
    display: "tysen@elevategrowth.solutions",
    href: "mailto:tysen@elevategrowth.solutions",
    external: false
  },
  {
    icon: Instagram,
    label: "Follow Us",
    display: "@elevategrowthsolutions",
    href: "https://www.instagram.com/elevategrowthsolutions",
    external: true
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    referral: "",
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
          phone: formData.phone,
          company: formData.company,
          service: formData.service,
          referral: formData.referral,
          message: formData.message
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", phone: "", company: "", service: "", referral: "", message: "" });
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
        title="Contact | Web Design & Marketing | Elevate Growth Solutions"
        description="Ready to elevate your marketing? Get in touch with Elevate Growth Solutions today. Fill out our contact form to discuss your web design and marketing needs."
        ogTitle="Contact Elevate Growth Solutions - Start Your Marketing Journey"
        ogDescription="Let's connect and discuss how we can help your business grow. Expert marketing strategy and execution tailored to your goals."
      />
      <Navbar />

      {/* Hero Section */}
      <section className="bg-muted border-b border-border pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-gray-900 mb-4" data-testid="text-contact-title">
            Let's Connect
          </h1>
          <p className="font-serif text-xl text-gray-600 max-w-2xl mx-auto" data-testid="text-contact-description">
            Ready to elevate your marketing? Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Form + Info Section */}
      <section className="py-16 md:py-20 bg-background flex-1">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
            {/* Form column */}
            <motion.div {...fadeUp} className="flex">
              <div className="bg-white border border-border rounded-2xl shadow-sm p-6 md:p-10 w-full flex flex-col">
                <div className="mb-8">
                  <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-primary">
                    Start the Conversation
                  </span>
                  <h2 className="font-display text-2xl md:text-3xl font-semibold text-gray-900 mt-2">
                    Send a Message
                  </h2>
                </div>

                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center my-auto">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="font-display text-2xl font-semibold text-gray-900 mb-2">
                      Message Sent!
                    </h3>
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
                  <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
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
                        <Label htmlFor="phone" className="font-serif">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(555) 123-4567"
                          className="font-serif"
                        />
                      </div>
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
                        <option value="full-stack">Full-Stack Marketing</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="referral" className="font-serif">
                        How Did You Hear About Us?
                      </Label>
                      <select
                        id="referral"
                        name="referral"
                        value={formData.referral}
                        onChange={handleChange}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-serif"
                      >
                        <option value="">Select an option...</option>
                        <option value="google-search">Google Search</option>
                        <option value="social-media">Social Media</option>
                        <option value="referral">Referral / Word of Mouth</option>
                        <option value="saw-your-work">Saw a Website You Built</option>
                        <option value="event">Event or Networking</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-2 flex-1 flex flex-col">
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
                        className="font-serif resize-none flex-1 min-h-[140px]"
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
            </motion.div>

            {/* Photo + contact info column */}
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.12 }}
              className="flex flex-col gap-8"
            >
              {/* Editorial image */}
              <figure className="group relative flex-1 flex flex-col">
                <div className="relative border border-primary/30 p-3 flex-1 flex">
                  <div
                    className="absolute -inset-px border border-primary pointer-events-none transition-transform duration-500 translate-x-2.5 translate-y-2.5 group-hover:translate-x-1 group-hover:translate-y-1"
                    aria-hidden="true"
                  />
                  <div className="relative overflow-hidden w-full min-h-[300px] sm:min-h-[380px]">
                    <img
                      src={contactSideImage}
                      alt="Reaching out on a phone—let's start the conversation"
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover grayscale contrast-[1.04]"
                    />
                    <div
                      className="absolute inset-0 mix-blend-multiply"
                      style={{
                        background:
                          "linear-gradient(165deg, rgba(38,109,130,.35), rgba(74,192,216,.08) 60%)"
                      }}
                      aria-hidden="true"
                    />
                  </div>
                </div>
                <figcaption className="flex justify-between gap-4 font-sans text-[8.5px] tracking-[0.2em] uppercase text-muted-foreground mt-3">
                  <span>Salt Lake City, Utah</span>
                  <b className="text-primary font-normal">Replies within one business day</b>
                </figcaption>
              </figure>

              {/* Contact methods */}
              <div className="grid gap-4">
                {contactMethods.map((method) => (
                  <a
                    key={method.label}
                    href={method.href}
                    {...(method.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex items-center gap-4 border border-border rounded-xl px-5 py-4 transition-colors hover:border-primary/40 hover:bg-primary/5"
                  >
                    <div className="w-11 h-11 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-primary">
                      <method.icon className="w-5 h-5 text-primary transition-colors group-hover:text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-gray-900">{method.label}</h3>
                      <span className="font-serif text-primary group-hover:underline">
                        {method.display}
                      </span>
                    </div>
                  </a>
                ))}
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
                    href="https://calendar.app.google/yv9h833QYphwvfmJ7"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Calendar className="w-5 h-5" />
                    Book a Discovery Call Now
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-16 md:py-20 bg-primary/5 border-y border-primary/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12">
            <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-primary">
              After You Reach Out
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-gray-900 mt-2">
              What to Expect
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {expectations.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white border border-border rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="font-serif text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <GoogleReviews className="py-16 md:py-20 bg-background" />

      {/* Google Map Section */}
      <section className="py-16 md:py-20 bg-muted border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-10">
            <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-primary">
              Where to Find Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-gray-900 mt-2 mb-3">
              Proudly Based in Utah
            </h2>
            <p className="font-serif text-gray-600 max-w-2xl mx-auto">
              Rooted in Salt Lake City and serving businesses across St. George, Ogden, and nationwide.
            </p>
          </motion.div>
          <motion.div {...fadeUp}>
            <div className="rounded-2xl overflow-hidden border border-border shadow-sm">
              <iframe
                src="https://www.google.com/maps?q=Elevate%20Growth%20Solutions%2C%20Utah&z=7&output=embed"
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Elevate Growth Solutions on Google Maps"
              />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 mt-6">
              {["St. George", "Salt Lake City", "Ogden"].map((city) => (
                <span key={city} className="flex items-center gap-1.5 font-sans text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
                  <MapPin className="w-3.5 h-3.5 text-primary" /> {city}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
