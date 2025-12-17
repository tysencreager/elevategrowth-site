import { useEffect } from "react";

interface SchemaMarkupProps {
  type: "organization" | "localBusiness" | "service" | "webpage" | "breadcrumb" | "faq";
  data?: Record<string, unknown>;
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Elevate Growth Solutions",
  "url": "https://www.elevategrowth.solutions",
  "logo": "https://www.elevategrowth.solutions/assets/EGS-LOGO-E-icon.png",
  "description": "Boutique web design agency and full-stack marketing services for small businesses, startups, and entrepreneurs.",
  "email": "tysen@elevategrowth.solutions",
  "sameAs": [
    "https://www.instagram.com/elevategrowthsolutions"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  },
  "areaServed": [
    {
      "@type": "Country",
      "name": "United States"
    },
    {
      "@type": "City",
      "name": "Salt Lake City",
      "containedInPlace": {
        "@type": "State",
        "name": "Utah"
      }
    }
  ],
  "priceRange": "$$",
  "foundingDate": "2024",
  "founder": {
    "@type": "Person",
    "name": "Tysen Creager"
  }
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Elevate Growth Solutions",
  "image": "https://www.elevategrowth.solutions/assets/EGS-LOGO-E-icon.png",
  "url": "https://www.elevategrowth.solutions",
  "email": "tysen@elevategrowth.solutions",
  "description": "Boutique web design agency and full-stack marketing services. Custom websites built in weeks, not months. Serving small businesses, startups, and entrepreneurs nationwide with a focus on Salt Lake City, Utah.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Salt Lake City",
    "addressRegion": "UT",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 40.7608,
    "longitude": -111.8910
  },
  "areaServed": [
    {
      "@type": "Country",
      "name": "United States"
    },
    {
      "@type": "State",
      "name": "Utah"
    },
    {
      "@type": "City",
      "name": "Salt Lake City"
    }
  ],
  "priceRange": "$$",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "17:00"
  },
  "sameAs": [
    "https://www.instagram.com/elevategrowthsolutions"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Marketing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Web Design",
          "description": "Custom website design and development for small businesses"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "SEO Services",
          "description": "Search engine optimization to improve your online visibility"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Social Media Management",
          "description": "Strategic social media marketing and content creation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Full-Stack Marketing",
          "description": "Comprehensive marketing services including branding, ads, and content"
        }
      }
    ]
  }
};

const webDesignServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Web Design",
  "name": "Custom Web Design Services",
  "description": "Professional custom website design and development for small businesses, startups, and entrepreneurs. Fast turnaround - websites built in weeks, not months. Conversion-focused design optimized for lead generation.",
  "provider": {
    "@type": "Organization",
    "name": "Elevate Growth Solutions",
    "url": "https://www.elevategrowth.solutions"
  },
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Web Design Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Custom Website Design"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Website Redesign"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Landing Page Design"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "E-commerce Website Design"
        }
      }
    ]
  }
};

const marketingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Digital Marketing",
  "name": "Full-Stack Marketing Services",
  "description": "Comprehensive digital marketing services for small businesses including SEO, social media management, branding, ad campaign management, and content creation. Boutique agency approach with personalized attention.",
  "provider": {
    "@type": "Organization",
    "name": "Elevate Growth Solutions",
    "url": "https://www.elevategrowth.solutions"
  },
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Marketing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "SEO Services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Social Media Management"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Branding & Creative Design"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Ad Campaign Management"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Content Creation"
        }
      }
    ]
  }
};

export default function SchemaMarkup({ type, data }: SchemaMarkupProps) {
  useEffect(() => {
    let schema: Record<string, unknown>;

    switch (type) {
      case "organization":
        schema = { ...organizationSchema, ...data };
        break;
      case "localBusiness":
        schema = { ...localBusinessSchema, ...data };
        break;
      case "service":
        schema = data || webDesignServiceSchema;
        break;
      case "webpage":
        schema = {
          "@context": "https://schema.org",
          "@type": "WebPage",
          ...data
        };
        break;
      case "breadcrumb":
        schema = {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          ...data
        };
        break;
      case "faq":
        schema = {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          ...data
        };
        break;
      default:
        return;
    }

    const scriptId = `schema-${type}`;
    let scriptElement = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (!scriptElement) {
      scriptElement = document.createElement("script");
      scriptElement.id = scriptId;
      scriptElement.type = "application/ld+json";
      document.head.appendChild(scriptElement);
    }

    scriptElement.textContent = JSON.stringify(schema);

    return () => {
      const el = document.getElementById(scriptId);
      if (el) {
        el.remove();
      }
    };
  }, [type, data]);

  return null;
}

export { organizationSchema, localBusinessSchema, webDesignServiceSchema, marketingServiceSchema };
