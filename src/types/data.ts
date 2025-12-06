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
