import { useScrollReveal } from '../hooks/useScrollReveal';

interface TeamCardProps {
  name: string;
  credentials: string[];
  bio: string;
}

const TeamCard = ({ name, credentials, bio }: TeamCardProps) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`bg-deep-navy rounded-lg shadow-sm border border-gray-100 overflow-hidden hover-lift hover-glow-green transition-smooth opacity-0 ${
        isVisible ? 'animate-slide-up' : ''
      }`}
    >
      {/* Placeholder headshot */}
      <div className="h-64 bg-gradient-to-br from-steel-blue to-deep-navy flex items-center justify-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-lime-green/5 to-baby-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="w-24 h-24 bg-lime-green/20 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 relative z-10">
          <svg className="w-12 h-12 text-lime-green" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-3">{name}</h3>

        {/* Credentials */}
        <div className="flex flex-wrap gap-2 mb-4">
          {credentials.map((credential, index) => (
            <span
              key={index}
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-lime-green/20 text-lime-green border border-lime-green/30 transition-all duration-300 hover:bg-lime-green hover:text-deep-navy hover:scale-105"
            >
              {credential}
            </span>
          ))}
        </div>

        <p className="text-gray-300 leading-relaxed">{bio}</p>
      </div>
    </div>
  );
};

export default TeamCard;