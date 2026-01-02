import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, MapPin, Clock, Users, Award } from "lucide-react";
import heroImage from "@assets/Black and white photography _ black and white…_1760215489978.jpeg";
import ctaImage from "@assets/cta_background_1760215628693.jpeg";

const localBusinessSchemaData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Elevate Growth Solutions - Salt Lake City Web Design & Marketing",
  "image": "https://www.elevategrowth.solutions/assets/EGS-LOGO-E-icon.png",
  "url": "https://www.elevategrowth.solutions/salt-lake-city",
  "email": "tysen@elevategrowth.solutions",
  "description": "Premier web design agency and digital marketing consultant serving Salt Lake City, Utah. Custom websites, SEO services, and full-stack marketing for local small businesses and startups.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Salt Lake City",
    "addressRegion": "UT",
    "postalCode": "84101",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 40.7608,
    "longitude": -111.8910
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Salt Lake City"
    },
    {
      "@type": "City",
      "name": "Park City"
    },
    {
      "@type": "City",
      "name": "Provo"
    },
    {
      "@type": "City",
      "name": "Sandy"
    },
    {
      "@type": "City",
      "name": "West Valley City"
    },
    {
      "@type": "State",
      "name": "Utah"
    }
  ],
  "priceRange": "$$",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "17:00"
  }
};

const services = [
  {
    title: "Custom Web Design",
    description: "Conversion-focused websites built for Salt Lake City businesses. From downtown startups to Park City resorts, we create sites that capture your unique Utah brand."
  },
  {
    title: "SEO Services",
    description: "Dominate local search results in Salt Lake City and throughout Utah. We optimize your site to rank for the keywords your customers are searching for."
  },
  {
    title: "Social Media Marketing",
    description: "Connect with the Salt Lake City community through strategic social media management. Build your local following and engage with Utah customers."
  },
  {
    title: "Full-Stack Marketing",
    description: "Complete marketing solutions including branding, content creation, and ad campaigns. Everything you need to grow your business in the competitive Utah market."
  }
];

const benefits = [
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Websites delivered in weeks, not months. We respect your time and the fast pace of Salt Lake City business."
  },
  {
    icon: Users,
    title: "Boutique Attention",
    description: "You're not just a number. As a boutique agency, we give every Salt Lake City client personalized care and attention."
  },
  {
    icon: MapPin,
    title: "Local Market Expertise",
    description: "We understand the Utah market, from the tech boom in Silicon Slopes to the tourism in Park City."
  },
  {
    icon: Award,
    title: "Results-Driven",
    description: "Our focus is on generating leads and growing your business, not just creating pretty websites."
  }
];

const localAreas = [
  "Downtown Salt Lake City",
  "Sugar House",
  "Park City",
  "Sandy",
  "Provo",
  "West Valley City",
  "Draper",
  "Silicon Slopes",
  "Murray",
  "Ogden",
  "Lehi",
  "American Fork"
];

export default function SaltLakeCity() {
  return (
    <div className="min-h-screen">
      <SEO
        title="Web Design Agency Salt Lake City | SEO & Marketing Services Utah | Elevate Growth Solutions"
        description="Premier web design agency serving Salt Lake City, Utah. Custom website design, SEO services, and digital marketing for small businesses. Fast turnaround, boutique attention. Call (803) 600-4806."
        ogTitle="Web Design & Digital Marketing in Salt Lake City, Utah"
        ogDescription="Salt Lake City's boutique web design agency. Custom websites in weeks, not months. SEO, social media, and full-stack marketing for Utah small businesses."
      />
      <SchemaMarkup type="localBusiness" data={localBusinessSchemaData} />
      <Navbar />

      <Hero
        backgroundImage={heroImage}
        title="Salt Lake City Web Design & Digital Marketing"
        subtitle="Boutique marketing agency serving Utah businesses from Silicon Slopes to Park City"
        ctaText="Get a Free Consultation"
        ctaHref="/contact"
        isLCP={true}
      />

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
            Your Local Salt Lake City Marketing Partner
          </h2>
          <p className="font-serif text-lg text-gray-700 leading-relaxed mb-8">
            From the bustling streets of downtown Salt Lake City to the innovative tech companies in Silicon Slopes,
            Utah businesses are thriving. But standing out in this competitive market requires more than just a
            basic website—it requires a strategic marketing partner who understands the local landscape.
          </p>
          <p className="font-serif text-lg text-gray-700 leading-relaxed">
            At Elevate Growth Solutions, we combine boutique agency attention with full-stack marketing expertise
            to help Salt Lake City businesses generate more leads, build stronger brands, and grow with confidence.
            Whether you're a startup in Lehi, a restaurant in Sugar House, or a professional service in Park City,
            we're here to elevate your business.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Marketing Services for Salt Lake City Businesses
            </h2>
            <p className="font-serif text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital marketing solutions tailored for the Utah market
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-display text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="font-serif text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Why Salt Lake City Businesses Choose Us
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="font-serif text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local SEO Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                Dominate Local Search in Salt Lake City
              </h2>
              <p className="font-serif text-lg text-gray-700 leading-relaxed mb-6">
                When potential customers in Salt Lake City search for businesses like yours, will they find you?
                Our local SEO services ensure your business appears at the top of search results when it matters most.
              </p>
              <ul className="space-y-3">
                {[
                  "Google Business Profile optimization",
                  "Local keyword targeting for Utah searches",
                  "Citation building and local directory listings",
                  "Review management and reputation building",
                  "Location-specific content strategy"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="font-serif text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-display text-xl font-semibold text-gray-900 mb-4">
                Areas We Serve in Utah
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {localAreas.map((area, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="font-serif text-gray-600 text-sm">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Utah Business Landscape */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-gray-900 mb-6 text-center">
            Understanding the Utah Business Landscape
          </h2>
          <div className="prose prose-lg max-w-none font-serif text-gray-700">
            <p>
              Utah's economy is booming. With the tech industry flourishing in Silicon Slopes—home to companies
              like Qualtrics, Pluralsight, and Domo—and a thriving tourism industry anchored by world-class
              ski resorts and national parks, the opportunities for small businesses are enormous.
            </p>
            <p>
              But with opportunity comes competition. Whether you're competing with other restaurants near
              Temple Square, vying for attention in the crowded Park City hospitality market, or trying to
              stand out among the thousands of tech startups in Lehi and Draper, you need a strong digital presence.
            </p>
            <p>
              That's where we come in. We've helped businesses throughout the Wasatch Front build websites
              that convert visitors into customers, develop SEO strategies that rank in local searches, and
              create marketing campaigns that resonate with Utah audiences.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <img
          src={ctaImage}
          alt=""
          width={1920}
          height={1080}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-6">
            Ready to Grow Your Salt Lake City Business?
          </h2>
          <p className="font-serif text-xl text-white/90 mb-8">
            Let's discuss how we can help you generate more leads and build a stronger brand in the Utah market.
          </p>
          <a href="/contact">
            <Button size="lg" className="font-serif font-medium text-lg px-8 py-6 gap-2">
              Schedule a Free Consultation
              <ArrowRight className="h-5 w-5" />
            </Button>
          </a>
          <p className="mt-6 font-serif text-white/80">
            Or email us: <a href="mailto:tysen@elevategrowth.solutions" className="underline hover:text-white">tysen@elevategrowth.solutions</a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
