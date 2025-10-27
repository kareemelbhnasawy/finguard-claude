import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface SectorListProps {
  title: string;
  companies: string[];
}

const SectorList = ({ title, companies }: SectorListProps) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  const LogoOrPlaceholder = ({ companyName }: { companyName: string }) => {
    const [failed, setFailed] = useState(false);

    // Generate logo path from company name
    const logoPath = `/logos/${companyName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}.svg`;

    if (failed) {
      return (
        <div className="w-20 h-20 bg-lime-green/20 rounded-lg flex items-center justify-center mb-3 mx-auto transition-transform duration-300 hover:scale-110">
          <span className="text-lime-green font-bold text-lg">
            {companyName.split(' ').map(word => word[0]).join('').slice(0, 3)}
          </span>
        </div>
      );
    }

    return (
      <div className="w-20 h-20 bg-white/95 rounded-lg flex items-center justify-center mb-3 mx-auto p-2 transition-transform duration-300 hover:scale-110 hover:shadow-lg">
        <img
          src={logoPath}
          alt={`${companyName} logo`}
          className="max-w-full max-h-full object-contain"
          loading="lazy"
          onError={() => setFailed(true)}
        />
      </div>
    );
  };
  const formatSectorTitle = (title: string) => {
    switch (title) {
      case 'banks':
        return 'Banking & Financial Services';
      case 'industrial':
        return 'Industrial & Manufacturing';
      case 'tourismHotels':
        return 'Tourism & Hotels';
      case 'constructionHousing':
        return 'Construction & Housing';
      case 'trading':
        return 'Trading & Distribution';
      case 'educationTelecom':
        return 'Education & Telecommunications';
      case 'agriculture':
        return 'Agriculture';
      case 'investment':
        return 'Investment & Securities';
      default:
        return title;
    }
  };

  return (
    <section className="mb-8" ref={ref}>
      <h3 className="text-xl font-semibold text-white mb-4 border-b border-lime-green/30 pb-2">
        {formatSectorTitle(title)}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {companies.map((company, index) => (
          <div
            key={index}
            className={`bg-deep-navy rounded-lg p-6 shadow-sm border border-gray-100 flex items-center justify-center min-h-[120px] hover-lift hover-glow-green transition-smooth opacity-0 ${
              isVisible ? 'animate-fade-in' : ''
            }`}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <div className="text-center">
              <LogoOrPlaceholder companyName={company} />
              <span className="text-sm font-medium text-gray-300 block">{company}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectorList;
