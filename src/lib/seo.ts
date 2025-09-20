import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
}

export const useSEO = ({ title, description, canonical, ogImage }: SEOProps) => {
  useEffect(() => {
    // Set title
    document.title = title;

    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    // Set canonical URL
    if (canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', canonical);
    }

    // Set Open Graph title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }

    // Set Open Graph description
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }

    // Set Open Graph image
    if (ogImage) {
      const ogImageMeta = document.querySelector('meta[property="og:image"]');
      if (ogImageMeta) {
        ogImageMeta.setAttribute('content', ogImage);
      }
    }
  }, [title, description, canonical, ogImage]);
};

export const seoData = {
  home: {
    title: 'Finguard - Audit, Tax & Advisory Services',
    description: 'Empowering businesses with trusted audit, tax, and advisory services across Egypt and Saudi Arabia.',
    canonical: 'https://www.finguardint.com',
  },
  about: {
    title: 'About Us - Finguard',
    description: 'Learn about Finguard, a trusted partner for businesses across Egypt and Saudi Arabia, delivering expert audit, tax, and advisory services.',
    canonical: 'https://www.finguardint.com/about',
  },
  services: {
    title: 'Our Services - Finguard',
    description: 'Comprehensive audit, tax, advisory, and financial services to help organizations operate with confidence and achieve measurable results.',
    canonical: 'https://www.finguardint.com/services',
  },
  team: {
    title: 'Our Team - Finguard',
    description: 'Meet our experienced team of audit, tax, and advisory professionals with decades of expertise serving clients across Egypt and Saudi Arabia.',
    canonical: 'https://www.finguardint.com/team',
  },
  clients: {
    title: 'Our Clients - Finguard',
    description: 'We proudly serve over 300 companies across banking, construction, manufacturing, tourism, education, and agriculture sectors.',
    canonical: 'https://www.finguardint.com/clients',
  },
  contact: {
    title: 'Contact Us - Finguard',
    description: 'Get in touch with Finguard for expert audit, tax, and advisory services. Contact us at +20 23 836 299 or info@smmeg.com.',
    canonical: 'https://www.finguardint.com/contact',
  },
};