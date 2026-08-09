/**
 * Build-time SSG entry. Bundled with `vite build --ssr` and consumed by
 * scripts/generate-seo-pages.mjs to render full page HTML for every route,
 * so crawlers get real content (H1s, copy, internal links) without
 * executing JavaScript. The client entry (main.tsx) replaces this markup
 * when React mounts.
 *
 * Pages are imported eagerly here (unlike App.tsx) because renderToString
 * cannot resolve React.lazy components.
 */
import { renderToString } from "react-dom/server";
import { Router, Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { TooltipProvider } from "@/components/ui/tooltip";

import Home from "@/pages/Home";
import Services from "@/pages/Services";
import BehindElevate from "@/pages/BehindElevate";
import Contact from "@/pages/Contact";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsAndConditions from "@/pages/TermsAndConditions";
import SaltLakeCity from "@/pages/SaltLakeCity";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import Testimonials from "@/pages/Testimonials";
import Portfolio from "@/pages/Portfolio";
import ServiceWebsites from "@/pages/services/Websites";
import ServiceSEO from "@/pages/services/SEO";
import ServiceSocialMedia from "@/pages/services/SocialMedia";
import ServiceContentCreation from "@/pages/services/ContentCreation";
import ServiceAudits from "@/pages/services/Audits";
import WhyCustomCoded from "@/pages/WhyCustomCoded";
import WebsiteHandoffOptions from "@/pages/WebsiteHandoffOptions";
import StGeorgeWebDesign from "@/pages/StGeorgeWebDesign";
import OgdenWebDesign from "@/pages/OgdenWebDesign";
import SaltLakeCityMarketing from "@/pages/SaltLakeCityMarketing";
import NotFound from "@/pages/not-found";

export { blogPosts } from "@/data/blogPosts";

function SSGRouter() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/services/websites" component={ServiceWebsites} />
      <Route path="/services/seo" component={ServiceSEO} />
      <Route path="/services/social-media" component={ServiceSocialMedia} />
      <Route path="/services/content-creation" component={ServiceContentCreation} />
      <Route path="/services/audits" component={ServiceAudits} />
      <Route path="/behind-elevate" component={BehindElevate} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-and-conditions" component={TermsAndConditions} />
      <Route path="/salt-lake-city" component={SaltLakeCity} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/testimonials" component={Testimonials} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/why-custom-coded" component={WhyCustomCoded} />
      <Route path="/website-handoff-options" component={WebsiteHandoffOptions} />
      <Route path="/st-george-web-design" component={StGeorgeWebDesign} />
      <Route path="/ogden-web-design" component={OgdenWebDesign} />
      <Route path="/salt-lake-city-marketing" component={SaltLakeCityMarketing} />
      <Route component={NotFound} />
    </Switch>
  );
}

export function render(url: string): string {
  return renderToString(
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router ssrPath={url}>
          <SSGRouter />
        </Router>
      </TooltipProvider>
    </QueryClientProvider>,
  );
}
