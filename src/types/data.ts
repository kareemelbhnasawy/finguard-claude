// Team member type definition
export interface TeamMember {
  name: string;
  role: string;
  credentials: string[];
  image: string;
  imagePosition?: string;
  bio: string;
}

// Client/Company type definition
export interface Client {
  name: string;
  sector: string;
  logo?: string;
}

// Value type definition
export interface Value {
  title: string;
  description: string;
}

// Service type definition
export interface Service {
  id: string;
  title: string;
  description: string;
  items: string[];
}

// Company info type definition
export interface CompanyInfo {
  brand: string;
  taglineShort: string;
  taglineLong: string;
  geography: string;
  contact: {
    phone: string;
    email: string;
    website: string;
  };
}

// About type definition
export interface About {
  about: string;
  mission: string;
  vision: string;
}
