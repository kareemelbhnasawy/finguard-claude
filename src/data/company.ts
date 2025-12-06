// Import all JSON data files
import teamData from './team.json';
import clientsData from './clients.json';
import companyInfoData from './company-info.json';
import aboutData from './about.json';
import valuesData from './values.json';
import servicesData from './services.json';
import homeContentData from './content-home.json';
import teamContentData from './content-team.json';
import clientsContentData from './content-clients.json';
import servicesContentData from './content-services.json';
import aboutContentData from './content-about.json';
import contactContentData from './content-contact.json';

// Export all data with proper structure
export const company = {
  // Basic company information
  ...companyInfoData,
  
  // About, mission, vision
  ...aboutData,
  
  // Core data arrays
  team: teamData,
  clients: clientsData,
  values: valuesData,
  services: servicesData,
  
  // Page content
  content: {
    home: homeContentData,
    team: teamContentData,
    clients: clientsContentData,
    services: servicesContentData,
    about: aboutContentData,
    contact: contactContentData,
  },
  
  // CTAs (keeping for backward compatibility)
  contact: {
    ...companyInfoData.contact,
    ctas: [
      { label: "Contact Us", href: "mailto:info@finguardint.com" },
      { label: "Explore Services", href: "/services" }
    ]
  }
};

// Export individual pieces for direct access
export { teamData as team };
export { clientsData as clients };
export { valuesData as values };
export { servicesData as services };
export { companyInfoData as companyInfo };
export { aboutData as about };
export { homeContentData as homeContent };
export { teamContentData as teamContent };
export { clientsContentData as clientsContent };
export { servicesContentData as servicesContent };
export { aboutContentData as aboutContent };
export { contactContentData as contactContent };
