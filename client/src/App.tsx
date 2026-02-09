import { Switch, Route, useLocation } from "wouter";
import { useEffect, lazy, Suspense } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import LeadFunnelManager from "@/components/LeadFunnelManager";

// Scroll to top on route change
function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

// Home page loaded eagerly (most common landing page)
import Home from "@/pages/Home";

// Lazy load other pages to reduce initial bundle
const Services = lazy(() => import("@/pages/Services"));
const BehindElevate = lazy(() => import("@/pages/BehindElevate"));
const Contact = lazy(() => import("@/pages/Contact"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("@/pages/TermsAndConditions"));
const SaltLakeCity = lazy(() => import("@/pages/SaltLakeCity"));
const Blog = lazy(() => import("@/pages/Blog"));
const BlogPost = lazy(() => import("@/pages/BlogPost"));
const Testimonials = lazy(() => import("@/pages/Testimonials"));
// Pricing page temporarily hidden
// const Pricing = lazy(() => import("@/pages/Pricing"));

// Individual service pages
const ServiceWebsites = lazy(() => import("@/pages/services/Websites"));
const ServiceBranding = lazy(() => import("@/pages/services/Branding"));
const ServiceSEO = lazy(() => import("@/pages/services/SEO"));
const ServiceSocialMedia = lazy(() => import("@/pages/services/SocialMedia"));
const ServiceContentCreation = lazy(() => import("@/pages/services/ContentCreation"));
const ServiceAdCampaigns = lazy(() => import("@/pages/services/AdCampaigns"));
const ServiceAudits = lazy(() => import("@/pages/services/Audits"));

// New SEO pages
const WhyCustomCoded = lazy(() => import("@/pages/WhyCustomCoded"));
const WebsiteHandoffOptions = lazy(() => import("@/pages/WebsiteHandoffOptions"));
const StGeorgeWebDesign = lazy(() => import("@/pages/StGeorgeWebDesign"));
const OgdenWebDesign = lazy(() => import("@/pages/OgdenWebDesign"));
const SaltLakeCityMarketing = lazy(() => import("@/pages/SaltLakeCityMarketing"));
const LasVegasDigitalMarketing = lazy(() => import("@/pages/LasVegasDigitalMarketing"));

const NotFound = lazy(() => import("@/pages/not-found"));

// Loading fallback component
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse text-primary font-serif">Loading...</div>
    </div>
  );
}

function Router() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/services/websites" component={ServiceWebsites} />
        <Route path="/services/branding" component={ServiceBranding} />
        <Route path="/services/seo" component={ServiceSEO} />
        <Route path="/services/social-media" component={ServiceSocialMedia} />
        <Route path="/services/content-creation" component={ServiceContentCreation} />
        <Route path="/services/ad-campaigns" component={ServiceAdCampaigns} />
        <Route path="/services/audits" component={ServiceAudits} />
        <Route path="/behind-elevate" component={BehindElevate} />
        <Route path="/contact" component={Contact} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/terms-and-conditions" component={TermsAndConditions} />
        <Route path="/salt-lake-city" component={SaltLakeCity} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:slug" component={BlogPost} />
        <Route path="/testimonials" component={Testimonials} />
        {/* Pricing page temporarily hidden */}
        {/* <Route path="/pricing" component={Pricing} /> */}
        <Route path="/why-custom-coded" component={WhyCustomCoded} />
        <Route path="/website-handoff-options" component={WebsiteHandoffOptions} />
        <Route path="/st-george-web-design" component={StGeorgeWebDesign} />
        <Route path="/ogden-web-design" component={OgdenWebDesign} />
        <Route path="/salt-lake-city-marketing" component={SaltLakeCityMarketing} />
        <Route path="/las-vegas-digital-marketing" component={LasVegasDigitalMarketing} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ScrollToTop />
        <Toaster />
        <LeadFunnelManager />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
