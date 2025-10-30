# Finguard - Audit, Tax & Advisory Services

A modern, production-ready static website built with React, TypeScript, and Tailwind CSS for Finguard, a leading audit, tax, and advisory services firm serving Egypt and Saudi Arabia.

## 🚀 Quick Start

Follow these commands to set up and run the project:

```bash
# Create the project (if starting fresh)
npm create vite@latest finguard-site -- --template react-ts
cd finguard-site

# Install dependencies
npm install
npm install react-router-dom

# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Linting**: ESLint with TypeScript support
- **Icons**: Heroicons (via SVG)

## 📁 Project Structure

```
finguard-site/
├── public/
│   ├── favicon.svg
│   ├── finguard-logo.svg
│   └── placeholder.svg
├── src/
│   ├── components/
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── SectorList.tsx
│   │   ├── TeamCard.tsx
│   │   └── ValueCard.tsx
│   ├── data/
│   │   └── company.ts
│   ├── lib/
│   │   └── seo.ts
│   ├── routes/
│   │   ├── About.tsx
│   │   ├── Clients.tsx
│   │   ├── Contact.tsx
│   │   ├── Home.tsx
│   │   ├── NotFound.tsx
│   │   ├── Services.tsx
│   │   └── Team.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🎨 Features

### Core Features
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Static Site**: No backend dependencies - perfect for hosting on CDNs
- **SEO Optimized**: Dynamic meta tags, structured data, and semantic HTML
- **Accessibility**: WCAG AA compliant with proper ARIA labels and keyboard navigation
- **Performance**: Optimized images, lazy loading, and minimal bundle size

### Pages
- **Home**: Hero section, values showcase, services preview, social proof
- **About**: Company overview, mission/vision, core values, geographic presence
- **Services**: Detailed service descriptions with in-page navigation
- **Team**: Professional profiles with credentials and experience
- **Clients**: Industry sectors and client testimonials
- **Contact**: Contact information, business hours, location details
- **404**: Custom error page with helpful navigation

### Components
- **Header**: Sticky navigation with mobile menu
- **Footer**: Company info, quick links, contact details
- **Service Cards**: Interactive service previews
- **Team Cards**: Professional profile displays
- **Value Cards**: Core values with icons
- **Sector Lists**: Client industry organization

## ⚙️ Configuration

### Tailwind CSS Setup
The project uses a custom Tailwind configuration with:
- **Colors**: Navy (`#0B1A33`), Teal (`#0F766E`), Gold (`#D97706`)
- **Fonts**: Inter font family
- **Components**: Pre-built button styles and layout utilities

### SEO Configuration
Each page includes:
- Dynamic page titles
- Meta descriptions
- Open Graph tags
- Canonical URLs
- Structured navigation

## 🎯 Customization

### Update Company Information
Edit `src/data/company.ts` to modify:
- Contact details
- Service offerings
- Team members
- Client information
- Company values and messaging

### Styling Changes
- Colors: Update `tailwind.config.js`
- Components: Modify component files in `src/components/`
- Global styles: Edit `src/index.css`

### Add New Pages
1. Create new component in `src/routes/`
2. Add route to `src/App.tsx`
3. Update navigation in `src/components/Header.tsx`
4. Add SEO data to `src/lib/seo.ts`

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Hosting Options
The built site (in `dist/` folder) can be deployed to:
- **Netlify**: Drag and drop deployment
- **Vercel**: GitHub integration
- **GitHub Pages**: Static hosting
- **AWS S3**: With CloudFront CDN
- **Any static hosting provider**

### Performance Tips
- Images are optimized with proper alt text
- CSS is minimized and inlined
- JavaScript is code-split for optimal loading
- Fonts are preloaded for better performance

## 🧪 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Quality
- TypeScript for type safety
- ESLint for code consistency
- Prettier for code formatting
- Component-based architecture

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Follow the existing code structure
2. Maintain accessibility standards
3. Test on multiple devices and screen sizes
4. Update documentation as needed

## 📄 License

This project is proprietary software for Finguard. All rights reserved.

---

**Finguard** - Empowering businesses with trusted audit, tax, and advisory services across Egypt and Saudi Arabia.

For support: [info@finguardint.com](mailto:info@finguardint.com) | Phone: +20 23 836 299# finguard-claude
