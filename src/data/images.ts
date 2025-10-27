// Professional business images for the website
// Using Unsplash for high-quality, royalty-free business photography

export const images = {
  hero: {
    main: '/hero-1.jpg', // Current hero image
    consulting: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80', // Business meeting
    finance: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&q=80', // Modern office
    teamwork: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80', // Team collaboration
  },
  about: {
    office: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80', // Modern office space
    teamMeeting: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=1200&q=80', // Professional meeting
    handshake: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1200&q=80', // Business handshake
  },
  services: {
    audit: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80', // Documents and analysis
    accounting: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&q=80', // Financial reports
    tax: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80', // Calculator and documents
    advisory: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80', // Business consultation
    legal: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80', // Legal documents
  },
  clients: {
    banking: 'https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=800&q=80', // Bank building
    construction: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80', // Construction site
    manufacturing: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80', // Industrial facility
    hospitality: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80', // Hotel lobby
  },
  team: {
    placeholder: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80', // Professional portrait
    professional1: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80', // Professional woman
    professional2: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=600&q=80', // Professional man
  },
  background: {
    pattern1: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80', // Abstract business
    pattern2: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80', // Office building
    dots: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80', // Tech background
  },
  values: {
    trust: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80',
    integrity: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80',
    excellence: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
    innovation: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=600&q=80',
    commitment: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&q=80',
  },
};

// Helper function to get optimized image URL
export const getImageUrl = (url: string, width?: number, quality?: number) => {
  if (url.startsWith('http') && url.includes('unsplash.com')) {
    const baseUrl = url.split('?')[0];
    const params = new URLSearchParams();
    if (width) params.set('w', width.toString());
    if (quality) params.set('q', quality.toString());
    return `${baseUrl}?${params.toString()}`;
  }
  return url;
};
