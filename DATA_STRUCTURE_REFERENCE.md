# Complete Data Structure Reference

This document provides a complete overview of all data structures used in the Finguard CMS.

---

## 📊 Core Data Structures

### Team Member
**File**: `src/data/team.json`

```typescript
interface TeamMember {
  name: string;           // Full name
  role: string;           // Job title
  credentials: string[];  // Array of certifications (e.g., ["CPA", "CIA"])
  bio: string;           // Biography text
  image: string;         // Path to image (/team/filename.jpg)
  imagePosition?: string; // Optional: "left" or "right"
}
```

**Example**:
```json
{
  "name": "Ahmed Awad",
  "role": "Managing Partner",
  "credentials": ["CPA", "CIA", "CISA"],
  "bio": "Ahmed founded Finguard with a vision...",
  "image": "/team/ahmed-awad.jpeg"
}
```

---

### Client
**File**: `src/data/clients.json`

```typescript
interface Client {
  name: string;   // Company name
  sector: string; // Industry sector
  logo: string;   // Path to logo (/logos/filename.png)
}
```

**Example**:
```json
{
  "name": "Commercial International Bank",
  "sector": "Banking & Finance",
  "logo": "/logos/cib.png"
}
```

**Valid Sectors**:
- Banking & Finance
- Industrial & Construction
- Tourism & Hospitality
- Food & Beverage
- Technology
- Education
- Real Estate
- Agriculture

---

### Service
**File**: `src/data/services.json`

```typescript
interface Service {
  id: string;          // Unique identifier (kebab-case)
  title: string;       // Service name
  description: string; // Why choose this service
  items: string[];     // List of service details
}
```

**Example**:
```json
{
  "id": "audit-assurance",
  "title": "Audit & Assurance",
  "description": "Our comprehensive audit services...",
  "items": [
    "Financial statement audits",
    "Internal audit services",
    "Risk assessment"
  ]
}
```

---

### Value
**File**: `src/data/values.json`

```typescript
interface Value {
  title: string;       // Value name
  description: string; // What this value means
}
```

**Example**:
```json
{
  "title": "Integrity",
  "description": "We maintain the highest standards of professional conduct."
}
```

---

## 📄 Company Information

### Company Info
**File**: `src/data/company-info.json`

```typescript
interface CompanyInfo {
  name: string;
  tagline: string;
  geography: string;
  contact: {
    phone: string;
    email: string;
    website: string;
  };
}
```

**Example**:
```json
{
  "name": "Finguard",
  "tagline": "Your Trusted Partner in Financial Excellence",
  "geography": "Egypt & Saudi Arabia",
  "contact": {
    "phone": "+20 100 123 4567",
    "email": "info@finguardint.com",
    "website": "www.finguardint.com"
  }
}
```

---

### About Data
**File**: `src/data/about.json`

```typescript
interface AboutData {
  about: string;   // Main about text
  mission: string; // Company mission
  vision: string;  // Company vision
}
```

---

## 📝 Page Content Structures

### Home Page Content
**File**: `src/data/content-home.json`

```typescript
interface HomeContent {
  hero: {
    headline: string;
    subheadline: string;
    primaryCTA: string;
    secondaryCTA: string;
  };
  banner: {
    message: string;
  };
  stats: Array<{
    value: number;
    suffix?: string;
    label: string;
    duration: number;
  }>;
  servicesSection: {
    heading: string;
    subheading: string;
  };
  valuesSection: {
    heading: string;
    description: string;
  };
  teamSection: {
    heading: string;
    description: string;
    viewAllCTA: string;
  };
  clientsSection: {
    heading: string;
    description: string;
  };
  ctaSection: {
    heading: string;
    description: string;
    buttonText: string;
    buttonLink: string;
  };
}
```

---

### Team Page Content
**File**: `src/data/content-team.json`

```typescript
interface TeamContent {
  badge: string;
  headline: string;
  subheadline: string;
  features: Array<{
    heading: string;
    description: string;
  }>;
}
```

---

### Clients Page Content
**File**: `src/data/content-clients.json`

```typescript
interface ClientsContent {
  hero: {
    heading: string;
    subheading: string;
  };
  stats: Array<{
    value: number;
    suffix?: string;
    label: string;
    duration: number;
  }>;
  sectorsHeading: string;
  sectorsDescription: string;
  sectors: Array<{
    name: string;
    image: string;
  }>;
  clientsHeading: string;
  testimonials: Array<{
    quote: string;
    author: string;
    role: string;
    company: string;
  }>;
  cta: {
    heading: string;
    description: string;
    buttonText: string;
    buttonLink: string;
  };
}
```

---

### Services Page Content
**File**: `src/data/content-services.json`

```typescript
interface ServicesContent {
  hero: {
    title: string;
    intro: string;
  };
  serviceDescriptions: {
    [serviceId: string]: string;
  };
  ctaText: string;
}
```

---

### About Page Content
**File**: `src/data/content-about.json`

```typescript
interface AboutContent {
  hero: {
    title: string;
  };
  trustedPartners: {
    heading: string;
    paragraph1: string;
    paragraph2: string;
  };
  valuesSection: {
    heading: string;
    description: string;
  };
  expertiseInAction: {
    heading: string;
    description: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  geography: {
    heading: string;
    description: string;
    locations: Array<{
      name: string;
    }>;
  };
}
```

---

### Contact Page Content
**File**: `src/data/content-contact.json`

```typescript
interface ContactContent {
  hero: {
    title: string;
    description: string;
  };
  contactSection: {
    heading: string;
    description: string;
    labels: {
      phone: string;
      email: string;
      website: string;
      location: string;
    };
  };
  servicesQuickLinks: {
    heading: string;
    description: string;
    learnMoreText: string;
  };
  businessHours: {
    heading: string;
    schedule: Array<{
      days: string;
      hours: string;
    }>;
    note: string;
  };
}
```

---

## 🔄 How Data Flows

```
┌─────────────────────────────────────────────────────────┐
│                     JSON Files                          │
│  (team.json, clients.json, content-*.json, etc.)       │
└────────────────────┬────────────────────────────────────┘
                     │
                     │ imported by
                     ▼
┌─────────────────────────────────────────────────────────┐
│                  company.ts                             │
│  Combines all JSON imports into single object           │
└────────────────────┬────────────────────────────────────┘
                     │
                     │ exported as
                     ▼
┌─────────────────────────────────────────────────────────┐
│              company object                             │
│  {                                                      │
│    name, tagline, contact, ...                         │
│    team: [...],                                        │
│    clients: [...],                                     │
│    content: {                                          │
│      home: {...},                                      │
│      team: {...},                                      │
│      services: {...}                                   │
│    }                                                   │
│  }                                                     │
└────────────────────┬────────────────────────────────────┘
                     │
                     │ imported by
                     ▼
┌─────────────────────────────────────────────────────────┐
│              React Components                           │
│  (Home.tsx, Team.tsx, Services.tsx, etc.)              │
└────────────────────┬────────────────────────────────────┘
                     │
                     │ renders
                     ▼
┌─────────────────────────────────────────────────────────┐
│                  Website                                │
│  Content displayed to users                            │
└─────────────────────────────────────────────────────────┘
```

---

## 📚 Usage Examples

### In Components

```typescript
import { company } from '../data/company';

// Access company info
const companyName = company.name;
const phone = company.contact.phone;

// Access arrays
const allTeam = company.team;
const allClients = company.clients;
const allServices = company.services;

// Access page content
const heroTitle = company.content.home.hero.headline;
const aboutTitle = company.content.about.hero.title;

// Map over arrays
{company.team.map(member => (
  <TeamCard key={member.name} {...member} />
))}
```

### Direct Imports

```typescript
import { 
  team, 
  clients, 
  servicesContent 
} from '../data/company';
```

---

## ✅ Validation Rules

### Required Fields
Every data type has required fields that must always be present:

**TeamMember**: name, role, credentials, bio, image  
**Client**: name, sector, logo  
**Service**: id, title, description, items  
**Value**: title, description  

### Field Formats

- **name/title**: Plain text string
- **email**: Valid email format
- **phone**: String (can include +, spaces, parentheses)
- **image/logo**: Path starting with `/` (e.g., "/team/photo.jpg")
- **id**: kebab-case (lowercase with hyphens)
- **arrays**: Must have at least one item (except where noted as optional)

---

## 🎯 Best Practices

1. **Consistency**: Use same terminology across all content
2. **Completeness**: Fill all required fields
3. **Accuracy**: Double-check phone numbers, emails, URLs
4. **Image Paths**: Always start with `/` 
5. **Arrays**: Keep items similar in length/style
6. **Descriptions**: Keep professional tone
7. **Formatting**: Maintain valid JSON structure

---

**Document Version**: 1.0  
**Last Updated**: December 6, 2025
