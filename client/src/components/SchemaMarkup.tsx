import { useEffect } from "react";

interface SchemaMarkupProps {
  type: "organization" | "localBusiness" | "service" | "webpage" | "breadcrumb" | "faq" | "marketingAgency" | "person" | "itemList" | "custom";
  data?: Record<string, unknown>;
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Elevate Growth Solutions",
  "url": "https://elevategrowth.solutions",
  "logo": "https://elevategrowth.solutions/assets/EGS-LOGO-E-icon.png",
  "description": "Boutique web design agency and full-stack marketing services for businesses of all sizes—from startups to established companies.",
  "telephone": "+1-435-553-4668",
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
      "@type": "State",
      "name": "Utah"
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
  "image": "https://elevategrowth.solutions/assets/EGS-LOGO-E-icon.png",
  "url": "https://elevategrowth.solutions",
  "telephone": "+1-435-553-4668",
  "email": "tysen@elevategrowth.solutions",
  "description": "Boutique web design agency and full-stack marketing services. Custom websites built and maintained on any platform—custom code, WordPress, or any builder. Serving businesses of all sizes nationwide, with a focus on Utah.",
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
      "@type": "State",
      "name": "Utah"
    },
    {
      "@type": "City",
      "name": "Salt Lake City",
      "containedInPlace": { "@type": "State", "name": "Utah" }
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
          "description": "Custom website design and development for businesses of all sizes"
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
  "description": "Professional custom website design and development for businesses of all sizes, from startups to established companies. Conversion-focused design optimized for lead generation.",
  "provider": {
    "@type": "Organization",
    "name": "Elevate Growth Solutions",
    "url": "https://elevategrowth.solutions"
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
  "description": "Comprehensive digital marketing services for businesses of all sizes including SEO, social media management, branding, ad campaign management, and content creation. Boutique agency approach with personalized attention.",
  "provider": {
    "@type": "Organization",
    "name": "Elevate Growth Solutions",
    "url": "https://elevategrowth.solutions"
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

const marketingAgencySchema = {
  "@context": "https://schema.org",
  "@type": "MarketingAgency",
  "@id": "https://elevategrowth.solutions/#organization",
  "name": "Elevate Growth Solutions",
  "description": "Boutique marketing agency specializing in custom website design and development—on any platform, including custom code, WordPress, and other builders—plus full-stack marketing services.",
  "url": "https://elevategrowth.solutions",
  "logo": "https://i.postimg.cc/13kYHV2m/EGS-LOGO-Full.png",
  "image": "https://www.elevategrowth.solutions/egs-social-sharing.png",
  "telephone": "+1-435-553-4668",
  "email": "tysen@elevategrowth.solutions",
  "founder": {
    "@type": "Person",
    "name": "Tysen Creager",
    "jobTitle": "Founder & Director of Marketing Services",
    "url": "https://elevategrowth.solutions/behind-elevate"
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  },
  "areaServed": [
    {"@type": "City", "name": "St. George", "containedInPlace": {"@type": "State", "name": "Utah"}},
    {"@type": "City", "name": "Salt Lake City", "containedInPlace": {"@type": "State", "name": "Utah"}},
    {"@type": "City", "name": "Ogden", "containedInPlace": {"@type": "State", "name": "Utah"}},
    {"@type": "City", "name": "Provo", "containedInPlace": {"@type": "State", "name": "Utah"}},
    {"@type": "City", "name": "Park City", "containedInPlace": {"@type": "State", "name": "Utah"}},
    {"@type": "State", "name": "Utah"},
    {"@type": "Country", "name": "United States"}
  ],
  "priceRange": "$$",
  "paymentAccepted": "Credit Card, Invoice",
  "currenciesAccepted": "USD",
  "openingHours": "Mo-Fr 09:00-17:00",
  "sameAs": [
    "https://www.instagram.com/elevategrowthsolutions",
    "https://www.linkedin.com/in/tysen-creager-a75914207/"
  ],
  "knowsAbout": [
    "Web Design",
    "Custom Websites",
    "WordPress Development",
    "Website Builders",
    "Website Maintenance",
    "Search Engine Optimization",
    "Digital Marketing",
    "Google Ads",
    "Meta Advertising",
    "Brand Strategy",
    "Conversion Rate Optimization"
  ],
  "slogan": "Custom websites on any platform, faster than traditional agencies."
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
      case "marketingAgency":
        schema = { ...marketingAgencySchema, ...data };
        break;
      case "person":
        schema = {
          "@context": "https://schema.org",
          "@type": "Person",
          ...data
        };
        break;
      case "itemList":
        schema = {
          "@context": "https://schema.org",
          "@type": "ItemList",
          ...data
        };
        break;
      case "custom":
        if (!data) return;
        schema = data;
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

export { organizationSchema, localBusinessSchema, webDesignServiceSchema, marketingServiceSchema, marketingAgencySchema };
