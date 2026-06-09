import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, MapPin, Clock, Users, Award } from "lucide-react";
// Optimized WebP images
import heroImage from "@assets/hero_bw_1920.webp";
import heroImage768 from "@assets/hero_bw_768.webp";
import ctaImage from "@assets/cta_background.webp";
import ctaImage768 from "@assets/cta_background_768.webp";

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
    description: "Conversion-focused websites for Salt Lake City businesses—from 9th & 9th boutiques to downtown professional services near City Creek. Sites that capture Utah's unique blend of outdoor lifestyle and urban sophistication."
  },
  {
    title: "SEO Services",
    description: "Rank when locals search 'best [your service] Salt Lake City.' We optimize for neighborhood-specific searches too: Sugar House, The Avenues, Millcreek, and beyond."
  },
  {
    title: "Social Media Marketing",
    description: "Build community with Salt Lake's engaged audience. From ski season content to summer hiking posts, we create social strategies that resonate with Utah's active lifestyle culture."
  },
  {
    title: "Full-Stack Marketing",
    description: "Complete marketing solutions for Utah's competitive market. Branding that stands out on Main Street, content that speaks to Wasatch Front audiences, and campaigns that drive real foot traffic."
  }
];

const benefits = [
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Websites typically delivered in under 30 days. Utah businesses move fast—your marketing partner should too."
  },
  {
    icon: Users,
    title: "Boutique Attention",
    description: "You're not a ticket number at a big agency. We treat every client like a neighbor—because in Salt Lake, you probably are."
  },
  {
    icon: MapPin,
    title: "Wasatch Front Expertise",
    description: "From the U of U Research Park to the Granary District, we know what resonates with Salt Lake audiences."
  },
  {
    icon: Award,
    title: "Results-Driven",
    description: "More reservations for your Sugar House restaurant. More leads for your Draper law firm. That's what matters."
  }
];

const localAreas = [
  "Downtown / City Creek",
  "Sugar House",
  "9th & 9th District",
  "The Avenues",
  "Liberty Park Area",
  "Millcreek",
  "Holladay",
  "Sandy / Draper",
  "Murray / Midvale",
  "West Valley City",
  "Granary District",
  "Research Park / U of U"
];

export default function SaltLakeCity() {
  return (
    <div className="min-h-screen">
      <SEO
        title="Web Design Agency Salt Lake City | SEO & Marketing Services Utah | Elevate Growth Solutions"
        description="Premier web design agency serving Salt Lake City, Utah. Custom website design, SEO services, and digital marketing for small businesses. Fast turnaround, boutique attention. Call (435) 553-4668."
        ogTitle="Web Design & Digital Marketing in Salt Lake City, Utah"
        ogDescription="Salt Lake City's boutique web design agency. Custom websites, built on any platform, typically delivered in under 30 days. SEO, social media, and full-stack marketing for Utah small businesses."
      />
      <SchemaMarkup type="localBusiness" data={localBusinessSchemaData} />
      <Navbar />

      <Hero
        backgroundImage={heroImage}
        imageSrcSet={`${heroImage768} 768w, ${heroImage} 1920w`}
        title="Salt Lake City Web Design & Digital Marketing"
        subtitle="Boutique marketing agency serving Utah businesses from Silicon Slopes to Park City"
        ctaText="Get a Free Consultation"
        ctaHref="https://calendar.app.google/yv9h833QYphwvfmJ7"
        isLCP={true}
      />

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
            Your Local Salt Lake City Marketing Partner
          </h2>
          <p className="font-serif text-lg text-gray-700 leading-relaxed mb-8">
            Salt Lake City has transformed from a quiet mountain town into one of America's most dynamic metros. The same energy that fills Liberty Park on summer evenings and packs the slopes at Brighton and Snowbird now drives a thriving local business scene—from the boutiques of 9th & 9th to the restaurants revitalizing the Granary District.
          </p>
          <p className="font-serif text-lg text-gray-700 leading-relaxed mb-8">
            But with Salt Lake's growth comes competition. The coffee shop on 300 South competes with a dozen others. The Holladay dentist needs to stand out from every practice along the Wasatch Front. Your business needs more than a basic website—you need a marketing partner who knows this city.
          </p>
          <p className="font-serif text-lg text-gray-700 leading-relaxed">
            We help Salt Lake businesses cut through the noise: the Sugar House bakery that needs weekend foot traffic, the Murray auto shop competing for "mechanic near me" searches, the downtown law firm building its reputation. Custom websites, local SEO that actually works, and marketing that speaks to Utah audiences.
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
                Own Your Neighborhood in Google Search
              </h2>
              <p className="font-serif text-lg text-gray-700 leading-relaxed mb-6">
                When someone in The Avenues searches "coffee shop near me" or a Millcreek family Googles "pediatric dentist," will they find you? Salt Lake's neighborhood-driven culture means local SEO isn't just about ranking for "Salt Lake City"—it's about dominating your specific corner of the Wasatch Front.
              </p>
              <ul className="space-y-3">
                {[
                  "Google Business Profile optimization for SLC neighborhoods",
                  "Neighborhood-specific keyword targeting (Sugar House, 9th & 9th, etc.)",
                  "Salt Lake Tribune, Deseret News, and local directory citations",
                  "Review strategies that build trust with Utah customers",
                  "Content that references local landmarks and culture"
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
                Salt Lake Neighborhoods We Serve
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
            The Salt Lake City Business Landscape
          </h2>
          <div className="prose prose-lg max-w-none font-serif text-gray-700">
            <p>
              Salt Lake City's economy runs on diversity. The outdoor industry giants—Black Diamond, Backcountry.com, Cotopaxi—anchor a recreation economy that extends from gear shops on 400 South to ski rental operations in the canyons. Healthcare systems like Intermountain and University of Utah Health employ thousands. The airport expansion has turned SLC into a Delta hub, bringing 26 million passengers annually past your potential storefront.
            </p>
            <p>
              Meanwhile, neighborhoods are transforming. The Granary District has gone from industrial wasteland to brewery-and-boutique destination. Sugar House keeps adding density. The Marmalade district draws young families. Each neighborhood has its own character—and its own customers searching Google for local businesses.
            </p>
            <p>
              We understand these micro-markets. A campaign for a Trolley Square retailer looks different than one for a West Valley auto shop. SEO for a downtown hotel targets different keywords than a Millcreek family restaurant. We build marketing strategies that match your specific location, customers, and competitive landscape along the Wasatch Front.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <img
          src={ctaImage}
          srcSet={`${ctaImage768} 768w, ${ctaImage} 1920w`}
          alt=""
          width={1920}
          height={1080}
          sizes="100vw"
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
          <a href="https://calendar.app.google/yv9h833QYphwvfmJ7" target="_blank" rel="noopener noreferrer">
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
