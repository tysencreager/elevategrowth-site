import { useEffect } from "react";
import ogImageDefault from "@assets/EGS LOGO E icon_1760220238741.png";

interface SEOProps {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}

export default function SEO({ 
  title, 
  description, 
  ogTitle, 
  ogDescription,
  ogImage
}: SEOProps) {
  const defaultOgImage = ogImage || ogImageDefault;
  useEffect(() => {
    document.title = title;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    let ogTitleTag = document.querySelector('meta[property="og:title"]');
    if (!ogTitleTag) {
      ogTitleTag = document.createElement('meta');
      ogTitleTag.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitleTag);
    }
    ogTitleTag.setAttribute('content', ogTitle || title);
    
    let ogDescTag = document.querySelector('meta[property="og:description"]');
    if (!ogDescTag) {
      ogDescTag = document.createElement('meta');
      ogDescTag.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescTag);
    }
    ogDescTag.setAttribute('content', ogDescription || description);
    
    let ogImageTag = document.querySelector('meta[property="og:image"]');
    if (!ogImageTag) {
      ogImageTag = document.createElement('meta');
      ogImageTag.setAttribute('property', 'og:image');
      document.head.appendChild(ogImageTag);
    }
    ogImageTag.setAttribute('content', defaultOgImage);
    
    let ogTypeTag = document.querySelector('meta[property="og:type"]');
    if (!ogTypeTag) {
      ogTypeTag = document.createElement('meta');
      ogTypeTag.setAttribute('property', 'og:type');
      document.head.appendChild(ogTypeTag);
    }
    ogTypeTag.setAttribute('content', 'website');
    
    let twitterCardTag = document.querySelector('meta[name="twitter:card"]');
    if (!twitterCardTag) {
      twitterCardTag = document.createElement('meta');
      twitterCardTag.setAttribute('name', 'twitter:card');
      document.head.appendChild(twitterCardTag);
    }
    twitterCardTag.setAttribute('content', 'summary_large_image');
    
    let twitterImageTag = document.querySelector('meta[name="twitter:image"]');
    if (!twitterImageTag) {
      twitterImageTag = document.createElement('meta');
      twitterImageTag.setAttribute('name', 'twitter:image');
      document.head.appendChild(twitterImageTag);
    }
    twitterImageTag.setAttribute('content', defaultOgImage);
  }, [title, description, ogTitle, ogDescription, defaultOgImage]);

  return null;
}
