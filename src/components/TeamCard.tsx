import { useScrollReveal } from '../hooks/useScrollReveal';

interface TeamCardProps {
  name: string;
  role: string;
  credentials: string[];
  bio: string;
  image: string;
  imagePosition?: string;
}

const TeamCard = ({ name, role, credentials, bio, image, imagePosition }: TeamCardProps) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 });

  return (
    <div
      ref={ref}
      className={`bg-white rounded-3xl border border-slate-200/80 shadow-2xl overflow-hidden transition-smooth opacity-0 hover-lift-professional ${
        isVisible ? 'animate-slide-up' : ''
      }`}
    >
      <div className="relative flex flex-col lg:flex-row gap-0 lg:items-stretch">
        {/* Image Section */}
        <div className="relative lg:w-2/5 flex-shrink-0 bg-gradient-to-br from-slate-50 to-white">
          <div className="relative h-full min-h-[400px] lg:min-h-[500px]">
            {/* Subtle background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-lime-green/5 via-transparent to-baby-blue/5"></div>

            <div className="absolute inset-0 p-8 lg:p-10">
              <div className="relative h-full rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
                <img
                  src={image}
                  alt={name}
                  loading="lazy"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  style={{ objectPosition: imagePosition || '50% 20%' }}
                />
                {/* Professional overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-deep-navy/20 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
          <div className="space-y-6">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-lime-green mb-3">
                {role}
              </span>
              <h3 className="text-3xl lg:text-4xl font-bold text-navy mb-2 leading-tight">{name}</h3>
            </div>

            {credentials.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {credentials.map((credential, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-lime-green/10 to-lime-green/20 text-lime-green border border-lime-green/20 hover:border-lime-green/40 transition-colors"
                  >
                    {credential}
                  </span>
                ))}
              </div>
            )}

            <p className="text-slate-600 leading-relaxed text-lg">{bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
