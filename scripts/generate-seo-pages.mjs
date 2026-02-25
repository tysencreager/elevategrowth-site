/**
 * Post-build script: generates route-specific HTML files with correct
 * <title>, <meta>, <link rel="canonical">, and Open Graph tags baked in.
 *
 * This fixes the core SPA indexing problem — Google no longer needs to
 * execute JavaScript to see per-page meta data.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "..", "dist", "public");
const baseUrl = "https://www.elevategrowth.solutions";
const defaultOgImage =
  "https://i.postimg.cc/sDW2ZZpm/EGS-SOCIAL-SHARING-IMAGE.png";

// ---------------------------------------------------------------------------
// Route → meta-tag map  (mirrors the <SEO /> props used in each page component)
// ---------------------------------------------------------------------------
const routes = [
  {
    path: "/services",
    title:
      "Marketing Services - Full-Stack Digital Marketing | Elevate Growth Solutions",
    description:
      "Comprehensive marketing services including full-stack marketing management, branding, web design, SEO, social media strategy, ad campaigns, and content creation. Expert solutions designed to help your business grow.",
    ogTitle: "Professional Marketing Services That Drive Results",
    ogDescription:
      "From strategy to execution - discover our full range of marketing services including branding, SEO, social media, and more. Tailored solutions for growing businesses.",
  },
  {
    path: "/services/websites",
    title:
      "Website Design & Development | Custom Websites | Elevate Growth Solutions",
    description:
      "Custom-coded websites built in days, not months. Fast, responsive, mobile-first design optimized for conversions. Starting at $1,499. Get a free consultation.",
    ogTitle: "Custom Website Design & Development Services",
    ogDescription:
      "Professional websites that convert visitors into customers. Fast-loading, mobile-responsive, and SEO-optimized. Custom-coded solutions starting at $1,499.",
  },
  {
    path: "/services/branding",
    title: "Branding & Brand Identity Design | Elevate Growth Solutions",
    description:
      "Build a memorable brand identity that connects with your audience. Logo design, visual identity systems, brand strategy, and complete brand guidelines. Packages from $999.",
    ogTitle: "Professional Branding & Identity Design Services",
    ogDescription:
      "Create a brand that stands out. From logo suites to complete brand systems with strategy, visual identity, and collateral. Packages starting at $999.",
  },
  {
    path: "/services/seo",
    title: "SEO & Local Search Optimization | Elevate Growth Solutions",
    description:
      "Get found by customers searching for your services. SEO and Google Business Profile optimization to dominate local search. Starting at $500/month per location.",
    ogTitle: "SEO & Local Search Optimization Services",
    ogDescription:
      "Improve your search rankings and get found by customers actively looking for your services. Local SEO and Google Business Profile management starting at $500/month.",
  },
  {
    path: "/services/social-media",
    title:
      "Social Media Management | Strategy & Content | Elevate Growth Solutions",
    description:
      "Strategic social media management that builds your brand and engages your audience. Consistent, quality content for Instagram, Facebook, LinkedIn, and more. From $1,000/month.",
    ogTitle: "Social Media Management & Strategy Services",
    ogDescription:
      "Build your brand with strategic social media content. Professional management for Instagram, Facebook, LinkedIn. Packages starting at $1,000/month.",
  },
  {
    path: "/services/content-creation",
    title:
      "Content Creation | Photo & Video for Business | Elevate Growth Solutions",
    description:
      "Professional content creation for your business. One content day per quarter delivers a library of curated photos and videos for social media, website, and marketing. $1,700/quarter.",
    ogTitle: "Professional Content Creation Services",
    ogDescription:
      "Build a library of professional photos and videos for your business. Quarterly content days deliver authentic, on-brand content you can use everywhere.",
  },
  {
    path: "/services/ad-campaigns",
    title:
      "Ad Campaign Management | Google & Meta Ads | Elevate Growth Solutions",
    description:
      "Strategic ad campaign management across Google, Meta, and other platforms. Data-driven campaigns tailored to your goals. Custom pricing based on your needs.",
    ogTitle: "Ad Campaign Management | Google & Meta Advertising",
    ogDescription:
      "Get more from your ad spend with strategic campaign management. Google Ads, Facebook Ads, Instagram Ads\u2014custom strategies that drive real results.",
  },
  {
    path: "/services/audits",
    title:
      "Website & SEO Audits | Technical Analysis | Elevate Growth Solutions",
    description:
      "Get clarity on what\u2019s holding your website back. Comprehensive SEO audits from $500, technical audits from $400, or the full stack bundle for $799. Actionable insights, no ongoing commitment.",
    ogTitle: "Website & SEO Audit Services",
    ogDescription:
      "Stop guessing what\u2019s wrong with your website. Get a comprehensive audit with actionable recommendations. SEO audits $500, technical audits $400, bundle for $799.",
  },
  {
    path: "/behind-elevate",
    title:
      "Behind Elevate - Meet Tysen Creager | Elevate Growth Solutions",
    description:
      "Meet Tysen Creager, founder of Elevate Growth Solutions. Full-stack marketer with nearly a decade of experience in branding, digital marketing, SEO, and strategy. Certified in Digital Marketing and UX Design.",
    ogTitle: "Meet the Founder - Tysen Creager, Marketing Strategist",
    ogDescription:
      "Nearly a decade of experience helping businesses grow through strategic marketing, branding, and digital solutions. Certified marketing expert with proven results.",
  },
  {
    path: "/contact",
    title:
      "Contact Us - Let's Elevate Your Marketing | Elevate Growth Solutions",
    description:
      "Ready to elevate your marketing? Get in touch with Elevate Growth Solutions today. Fill out our contact form to discuss your web design and marketing needs.",
    ogTitle:
      "Contact Elevate Growth Solutions - Start Your Marketing Journey",
    ogDescription:
      "Let\u2019s connect and discuss how we can help your business grow. Expert marketing strategy and execution tailored to your goals.",
  },
  {
    path: "/privacy-policy",
    title: "Privacy Policy | Elevate Growth Solutions",
    description:
      "Privacy Policy for Elevate Growth Solutions. Learn how we collect, use, and protect your personal information when you use our marketing services.",
  },
  {
    path: "/terms-and-conditions",
    title: "Terms and Conditions | Elevate Growth Solutions",
    description:
      "Terms and Conditions for Elevate Growth Solutions. Read our terms of service for using our marketing services and website.",
  },
  {
    path: "/salt-lake-city",
    title:
      "Web Design Agency Salt Lake City | SEO & Marketing Services Utah | Elevate Growth Solutions",
    description:
      "Premier web design agency serving Salt Lake City, Utah. Custom website design, SEO services, and digital marketing for small businesses. Fast turnaround, boutique attention. Call (803) 600-4806.",
    ogTitle: "Web Design & Digital Marketing in Salt Lake City, Utah",
    ogDescription:
      "Salt Lake City\u2019s boutique web design agency. Custom-coded websites typically delivered in under 30 days. SEO, social media, and full-stack marketing for Utah small businesses.",
  },
  {
    path: "/salt-lake-city-marketing",
    title:
      "Salt Lake City Web Design & Marketing | Elevate Growth Solutions",
    description:
      "Performance-focused web design and marketing for Salt Lake City startups and growing businesses. Custom-coded sites that convert paid traffic and scale with you.",
  },
  {
    path: "/blog",
    title:
      "Marketing Blog | Web Design & SEO Tips for Small Business | Elevate Growth Solutions",
    description:
      "Expert marketing insights, web design tips, and SEO strategies for small businesses. Learn how to grow your business online with actionable advice from Elevate Growth Solutions.",
    ogTitle:
      "Marketing Blog for Small Businesses | Elevate Growth Solutions",
    ogDescription:
      "Expert marketing tips, web design insights, and SEO strategies to help small businesses grow online.",
  },
  {
    path: "/testimonials",
    title:
      "Client Testimonials & Reviews | Elevate Growth Solutions",
    description:
      "Read what our clients say about working with Elevate Growth Solutions. Real testimonials from businesses we\u2019ve helped with web design, marketing, SEO, and branding.",
    ogTitle: "Client Testimonials - Elevate Growth Solutions",
    ogDescription:
      "Discover why businesses trust Elevate Growth Solutions for their marketing needs. Read authentic reviews and success stories from our satisfied clients.",
  },
  {
    path: "/why-custom-coded",
    title:
      "Why Custom-Coded Websites Outperform Templates | Elevate Growth Solutions",
    description:
      "Discover why custom-coded websites load faster, rank higher, and convert better than WordPress or template-based sites. Zero bloat, maximum performance for Utah businesses.",
  },
  {
    path: "/website-handoff-options",
    title:
      "Website Handoff Options: What Happens After Your Site is Built | Elevate Growth Solutions",
    description:
      "Wondering how to manage your custom website after it\u2019s built? Explore your options: ongoing support, headless CMS integration, or full code handover. Learn why custom code beats website builders.",
  },
  {
    path: "/st-george-web-design",
    title:
      "Web Design & Marketing Services in St. George, Utah | Elevate Growth Solutions",
    description:
      "St. George\u2019s fastest-growing businesses need websites that keep up. Custom-coded web design, SEO, and marketing for Washington County contractors, real estate, and service businesses.",
  },
  {
    path: "/ogden-web-design",
    title:
      "Web Design & Marketing for Ogden Businesses | Elevate Growth Solutions",
    description:
      "Industrial-strength web design for Ogden\u2019s aerospace, manufacturing, and downtown businesses. Secure, fast, custom-coded websites built for Weber County companies.",
  },
  {
    path: "/las-vegas-digital-marketing",
    title:
      "Digital Marketing Services in Las Vegas, Nevada | Elevate Growth Solutions",
    description:
      "Elevate Growth Solutions offers premier digital marketing services in Las Vegas. Custom-coded websites, SEO, and full-stack marketing for Nevada businesses.",
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function injectMeta(template, route) {
  let html = template;

  const canonicalUrl =
    route.path === "/" ? baseUrl + "/" : baseUrl + route.path;
  const ogTitle = route.ogTitle || route.title;
  const ogDesc = route.ogDescription || route.description;
  const ogImage = route.ogImage || defaultOgImage;

  // Replace <title>
  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${escapeHtml(route.title)}</title>`
  );

  // Replace meta name="title"
  html = html.replace(
    /<meta\s+name="title"\s+content="[^"]*"\s*\/?>/,
    `<meta name="title" content="${escapeHtml(route.title)}" />`
  );

  // Replace meta name="description"
  html = html.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${escapeHtml(route.description)}" />`
  );

  // Replace existing canonical link, or inject one before </head>
  if (/<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/.test(html)) {
    html = html.replace(
      /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
      `<link rel="canonical" href="${canonicalUrl}" />`
    );
  } else {
    html = html.replace(
      "</head>",
      `  <link rel="canonical" href="${canonicalUrl}" />\n  </head>`
    );
  }

  // Replace OG tags
  html = html.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${canonicalUrl}" />`
  );
  html = html.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${escapeHtml(ogTitle)}" />`
  );
  html = html.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${escapeHtml(ogDesc)}" />`
  );
  html = html.replace(
    /<meta\s+property="og:image"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:image" content="${ogImage}" />`
  );

  // Replace Twitter tags
  html = html.replace(
    /<meta\s+name="twitter:url"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:url" content="${canonicalUrl}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:title" content="${escapeHtml(ogTitle)}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:description" content="${escapeHtml(ogDesc)}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:image" content="${ogImage}" />`
  );

  return html;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

const indexPath = path.join(distDir, "index.html");
if (!fs.existsSync(indexPath)) {
  console.error("ERROR: dist/public/index.html not found. Run vite build first.");
  process.exit(1);
}

const template = fs.readFileSync(indexPath, "utf-8");

// Also inject canonical for the root index.html (homepage)
const homeHtml = injectMeta(template, {
  path: "/",
  title:
    "Web Design Agency & Full-Stack Marketing | Elevate Growth Solutions",
  description:
    "Boutique web design agency and full-stack marketing services for small businesses, startups, and entrepreneurs. Hand-coded websites typically delivered in under 30 days. SEO, social media, branding, and conversion-focused design. Serving Salt Lake City and nationwide.",
  ogTitle:
    "Web Design & Full-Stack Marketing for Small Businesses | Elevate Growth Solutions",
  ogDescription:
    "Custom-coded websites typically delivered in under 30 days. Boutique marketing agency providing web design, SEO, social media management, and branding for small businesses and startups.",
});
fs.writeFileSync(indexPath, homeHtml);
console.log("  \u2713 / (updated root index.html with canonical)");

let generated = 0;
for (const route of routes) {
  const dir = path.join(distDir, route.path);
  fs.mkdirSync(dir, { recursive: true });

  const html = injectMeta(template, route);
  fs.writeFileSync(path.join(dir, "index.html"), html);
  generated++;
  console.log(`  \u2713 ${route.path}`);
}

console.log(
  `\nSEO prerender complete: ${generated} route-specific HTML files generated.`
);
