/**
 * Post-build script: generates route-specific HTML files with correct
 * <title>, <meta>, <link rel="canonical">, and Open Graph tags baked in,
 * plus the fully server-rendered page body (H1s, copy, internal links)
 * from the SSG bundle built by `vite build --ssr`.
 *
 * Output layout is tuned for Cloudflare Pages:
 *   - Each route is written as a flat `<path>.html` file (e.g.
 *     `services.html`, `services/websites.html`). Cloudflare Pages serves
 *     `foo.html` at `/foo` with a 200 and redirects `/foo/` -> `/foo`,
 *     which keeps the served URL identical to the canonical URL. Writing
 *     `foo/index.html` instead would make Pages serve `/foo/` and redirect
 *     `/foo` -> `/foo/`, i.e. every canonical/sitemap/internal-link URL
 *     would point at a redirect (the exact errors Ahrefs flagged).
 *   - Blog posts get real static files too. The `_redirects` SPA rewrite
 *     `/blog/* /index.html 200` silently fails on Cloudflare Pages
 *     (`/index.html` itself redirects to `/`), which made every blog post
 *     404 in production.
 *
 * Also writes sitemap.xml from the same route list, so the sitemap can
 * never reference a URL that doesn't resolve to a real 200 page.
 */

import fs from "fs";
import path from "path";
import { pathToFileURL, fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "..", "dist", "public");
const ssgEntry = path.resolve(__dirname, "..", "dist", "ssg", "entry-ssg.js");
const baseUrl = "https://www.elevategrowth.solutions";
const defaultOgImage =
  "https://www.elevategrowth.solutions/egs-social-sharing.png";

// ---------------------------------------------------------------------------
// Route → meta-tag map  (mirrors the <SEO /> props used in each page component)
// Titles are kept under ~60 characters and descriptions under ~160 so search
// engines don't truncate them (Ahrefs flags >70 / >160).
// ---------------------------------------------------------------------------
const routes = [
  {
    path: "/services",
    title: "Marketing Services | Elevate Growth Solutions",
    description:
      "Full-stack marketing services: strategy, web design, SEO, social media, and content creation, all built to help your business grow.",
    ogTitle: "Professional Marketing Services That Drive Results",
    ogDescription:
      "From strategy to execution - discover our full range of marketing services including web design, SEO, social media, and more. Tailored solutions for growing businesses.",
  },
  {
    path: "/services/websites",
    title: "Website Design & Development | Elevate Growth Solutions",
    description:
      "Custom websites built in days, not months, on any platform you choose. Fast, mobile-first design optimized for conversions. Starting at $2,500.",
    ogTitle: "Custom Website Design & Development Services",
    ogDescription:
      "Professional websites that convert visitors into customers. Fast-loading, mobile-responsive, and SEO-optimized, built or maintained on any platform. Starting at $2,500.",
  },
  {
    path: "/services/seo",
    title: "SEO & Local Search Optimization | Elevate Growth Solutions",
    description:
      "Get found by customers searching for your services. SEO and Google Business Profile optimization to dominate local search. Starting at $750/month per location.",
    ogTitle: "SEO & Local Search Optimization Services",
    ogDescription:
      "Improve your search rankings and get found by customers actively looking for your services. Local SEO and Google Business Profile management starting at $750/month.",
  },
  {
    path: "/services/social-media",
    title: "Social Media Management & Strategy | Elevate Growth Solutions",
    description:
      "Strategic social media management that builds your brand. Consistent, quality content for Instagram, Facebook, LinkedIn, and more.",
    ogTitle: "Social Media Management & Strategy Services",
    ogDescription:
      "Build your brand with strategic social media content. Professional management for Instagram, Facebook, LinkedIn. Inquire for pricing.",
  },
  {
    path: "/services/content-creation",
    title: "Content Creation: Photo & Video | Elevate Growth Solutions",
    description:
      "One content day per quarter delivers a library of professional photos and videos for your social media, website, and marketing. $1,700/quarter.",
    ogTitle: "Professional Content Creation Services",
    ogDescription:
      "Build a library of professional photos and videos for your business. Quarterly content days deliver authentic, on-brand content you can use everywhere.",
  },
  {
    path: "/services/audits",
    title:
      "Website & SEO Audits | Elevate Growth Solutions",
    description:
      "Find out what’s holding your website back. SEO audits from $500, technical audits from $400, or the full bundle for $799. Actionable insights, no lock-in.",
    ogTitle: "Website & SEO Audit Services",
    ogDescription:
      "Stop guessing what’s wrong with your website. Get a comprehensive audit with actionable recommendations. SEO audits $500, technical audits $400, bundle for $799.",
  },
  {
    path: "/behind-elevate",
    title: "Behind Elevate - Meet Tysen Creager | Elevate Growth Solutions",
    description:
      "Meet Tysen Creager, founder of Elevate Growth Solutions, a full-stack marketer with nearly a decade of experience in web design, SEO, and strategy.",
    ogTitle: "Meet the Founder - Tysen Creager, Marketing Strategist",
    ogDescription:
      "Nearly a decade of experience helping businesses grow through strategic marketing and digital solutions. Certified marketing expert with proven results.",
  },
  {
    path: "/contact",
    title:
      "Contact | Web Design & Marketing | Elevate Growth Solutions",
    description:
      "Ready to elevate your marketing? Get in touch with Elevate Growth Solutions today. Fill out our contact form to discuss your web design and marketing needs.",
    ogTitle:
      "Contact Elevate Growth Solutions - Start Your Marketing Journey",
    ogDescription:
      "Let’s connect and discuss how we can help your business grow. Expert marketing strategy and execution tailored to your goals.",
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
    title: "Web Design Agency Salt Lake City | Elevate Growth Solutions",
    description:
      "Salt Lake City web design agency for businesses of all sizes. Custom websites, SEO, and digital marketing with fast turnaround and boutique attention.",
    ogTitle: "Web Design & Digital Marketing in Salt Lake City, Utah",
    ogDescription:
      "Salt Lake City’s boutique web design agency. Custom websites, built on any platform. SEO, social media, and full-stack marketing for Utah businesses of all sizes.",
  },
  {
    path: "/salt-lake-city-marketing",
    title:
      "Salt Lake City Marketing Agency | Elevate Growth Solutions",
    description:
      "Performance-focused web design and marketing for Salt Lake City startups and growing businesses: custom websites that convert paid traffic and scale with you.",
  },
  {
    path: "/blog",
    title: "Marketing Blog & SEO Tips | Elevate Growth Solutions",
    description:
      "Expert marketing insights, web design tips, and SEO strategies for growing businesses, with actionable advice from Elevate Growth Solutions.",
    ogTitle:
      "Marketing Blog for Growing Businesses | Elevate Growth Solutions",
    ogDescription:
      "Expert marketing tips, web design insights, and SEO strategies to help businesses of all sizes grow online.",
  },
  {
    path: "/portfolio",
    title: "Website Design Portfolio | Elevate Growth Solutions",
    description:
      "Browse custom websites we’ve built for law firms, contractors, home services, e-commerce, beauty, and more, on any platform, in Utah and nationwide.",
    ogTitle: "Website Portfolio - Elevate Growth Solutions",
    ogDescription:
      "Custom, mobile-responsive, SEO-optimized websites for businesses of all sizes, built on any platform. See our work across 8+ industries including legal, construction, beauty, and e-commerce.",
  },
  {
    path: "/testimonials",
    title: "Client Testimonials & Reviews | Elevate Growth Solutions",
    description:
      "Read what clients say about working with Elevate Growth Solutions: real reviews from businesses we’ve helped with web design, marketing, and SEO.",
    ogTitle: "Client Testimonials - Elevate Growth Solutions",
    ogDescription:
      "Discover why businesses trust Elevate Growth Solutions for their marketing needs. Read authentic reviews and success stories from our satisfied clients.",
  },
  {
    path: "/why-custom-coded",
    title:
      "Why Elevate Growth Solutions | Custom Websites on Any Platform",
    description:
      "Why businesses choose Elevate Growth Solutions for fast, high-performing websites, built and maintained on any platform, from custom code to WordPress.",
  },
  {
    path: "/website-handoff-options",
    title: "Website Handoff Options | Elevate Growth Solutions",
    description:
      "What happens after your site is built? Explore your options: ongoing support, CMS integration, or full handover, on custom code, WordPress, or any builder.",
  },
  {
    path: "/st-george-web-design",
    title:
      "St. George Web Design & Marketing | Elevate Growth Solutions",
    description:
      "Custom web design, SEO, and marketing for St. George and Washington County businesses: contractors, real estate, and service companies that need to keep up.",
  },
  {
    path: "/ogden-web-design",
    title:
      "Ogden Web Design & Marketing | Elevate Growth Solutions",
    description:
      "Industrial-strength web design for Ogden’s aerospace, manufacturing, and downtown businesses. Fast, secure websites for Weber County companies.",
  },
];

// Hidden conference-funnel pages: prerendered like every other route (so the
// exact URLs resolve to real 200 pages), but noindexed and NEVER added to
// sitemap.xml. Do not add them to robots.txt either — a disallow line would
// publicly broadcast the paths. `_headers` also sends X-Robots-Tag for them.
const hiddenRoutes = [
  {
    path: "/wisewomen",
    title: "Booked & Busy | Elevate Growth Solutions",
    description:
      "Your WISE WOMEN conference perk: $300 toward a custom website build or growth retainer with Elevate Growth Solutions. Claim by October 17, 2026.",
    ogTitle: "Here's to being booked & busy",
    ogDescription:
      "As a WISE WOMEN attendee, you've got $300 toward a custom website build or growth retainer with Elevate Growth Solutions.",
  },
  {
    path: "/5secondtest",
    title: "The 5-Second Test | Elevate Growth Solutions",
    description:
      "The 5-second website checklist from Tysen's WISE WOMEN talk: what you do, who it's for, what to do next, plus the load test and the thumb test.",
    ogTitle: "The 5-Second Test",
    ogDescription:
      "A stranger just landed on your website. Will they stay? Take the 5-second test, then keep the ultimate website checklist and send it to a friend.",
  },
];

// Playfair Display headings (matching the main site's display serif) +
// Montserrat UI/labels + Lora body: the hidden pages' fonts, replacing the
// main site's Playfair/Hanken font request with exactly what they use.
const hiddenFontsUrl =
  "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Montserrat:wght@400;600;700;800&family=Lora:ital,wght@0,400;0,500;1,400&display=swap";

const homeRoute = {
  path: "/",
  title:
    "Web Design & Full-Stack Marketing | Elevate Growth Solutions",
  description:
    "Boutique web design and full-stack marketing agency. Custom websites on any platform, plus SEO, social media, and content creation, serving Salt Lake City and nationwide.",
  ogTitle:
    "Web Design & Full-Stack Marketing for Growing Businesses | Elevate Growth Solutions",
  ogDescription:
    "Custom websites built and maintained on any platform. Boutique marketing agency providing web design, SEO, social media management, and content creation for businesses of all sizes, nationwide.",
};

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

  // Blog posts are articles
  if (route.ogType) {
    html = html.replace(
      /<meta\s+property="og:type"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:type" content="${route.ogType}" />`
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

// Hidden pages: flip the robots meta to noindex, swap the font request to
// the pages' own families, and drop the homepage LCP-image preload (it
// would fetch a large webp these pages never render — they must load in
// under 3s on conference-floor mobile connections).
function applyHiddenPageHead(html) {
  html = html.replace(
    /<meta\s+name="robots"\s+content="[^"]*"\s*\/?>/,
    `<meta name="robots" content="noindex, nofollow" />`
  );
  html = html.replace(
    /https:\/\/fonts\.googleapis\.com\/css2\?[^"]*/g,
    hiddenFontsUrl
  );
  html = html.replace(
    /\s*<link\s+rel="preload"\s+as="image"\s+href="\/home-header-poster\.webp"[^>]*>/,
    ""
  );
  return html;
}

function injectBody(html, appHtml) {
  const marker = '<div id="root"></div>';
  if (!html.includes(marker)) {
    throw new Error(
      'Template is missing the empty <div id="root"></div> mount point.'
    );
  }
  return html.replace(marker, `<div id="root">${appHtml}</div>`);
}

function buildSitemap(urls) {
  const entries = urls
    .map(({ loc, lastmod }) => {
      const lastmodTag = lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : "";
      return `  <url>\n    <loc>${loc}</loc>${lastmodTag}\n  </url>`;
    })
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

const indexPath = path.join(distDir, "index.html");
if (!fs.existsSync(indexPath)) {
  console.error("ERROR: dist/public/index.html not found. Run vite build first.");
  process.exit(1);
}
if (!fs.existsSync(ssgEntry)) {
  console.error(
    "ERROR: dist/ssg/entry-ssg.js not found. Run the SSR build first (see the build script in package.json)."
  );
  process.exit(1);
}

const { render, blogPosts } = await import(pathToFileURL(ssgEntry).href);

const template = fs.readFileSync(indexPath, "utf-8");

// Blog post routes come straight from the blog data, so a new post is
// automatically prerendered and added to the sitemap.
const blogRoutes = blogPosts.map((post) => ({
  path: `/blog/${post.slug}`,
  title: post.metaTitle || post.title,
  description: post.metaDescription || post.excerpt,
  ogTitle: post.title,
  ogDescription: post.excerpt,
  ogImage: post.image ? baseUrl + post.image : undefined,
  ogType: "article",
  lastmod: post.date,
}));

const allRoutes = [...routes, ...blogRoutes];

// Homepage: render into the root index.html
const homeHtml = injectBody(injectMeta(template, homeRoute), render("/"));
fs.writeFileSync(indexPath, homeHtml);
console.log("  ✓ / (root index.html)");

// Every other route: flat `<path>.html` file so Cloudflare Pages serves it
// at the extensionless, slashless URL (matching canonical + sitemap).
let generated = 0;
for (const route of allRoutes) {
  const filePath = path.join(distDir, `${route.path.slice(1)}.html`);
  fs.mkdirSync(path.dirname(filePath), { recursive: true });

  const html = injectBody(injectMeta(template, route), render(route.path));
  fs.writeFileSync(filePath, html);
  generated++;
  console.log(`  ✓ ${route.path}`);
}

// Hidden pages: prerendered so the exact URLs serve real 200 pages, but
// noindexed and excluded from the sitemap below.
for (const route of hiddenRoutes) {
  const filePath = path.join(distDir, `${route.path.slice(1)}.html`);
  fs.mkdirSync(path.dirname(filePath), { recursive: true });

  const html = injectBody(
    applyHiddenPageHead(injectMeta(template, route)),
    render(route.path)
  );
  fs.writeFileSync(filePath, html);
  generated++;
  console.log(`  ✓ ${route.path} (noindex, not in sitemap)`);
}

// Sitemap: derived from the exact set of prerendered routes.
const sitemapUrls = [
  { loc: baseUrl + "/" },
  ...allRoutes.map((route) => ({
    loc: baseUrl + route.path,
    lastmod: route.lastmod,
  })),
];
fs.writeFileSync(path.join(distDir, "sitemap.xml"), buildSitemap(sitemapUrls));
console.log(`  ✓ sitemap.xml (${sitemapUrls.length} URLs)`);

console.log(
  `\nSEO prerender complete: ${generated + 1} routes rendered with full page HTML.`
);
