interface TeamCardProps {
  name: string;
  credentials: string[];
  bio: string;
}

const TeamCard = ({ name, credentials, bio }: TeamCardProps) => {
  return (
    <div className="bg-gradient-to-br from-deep-navy to-slate-blue-gray rounded-xl shadow-xl border border-lime-green/20 overflow-hidden hover:shadow-2xl hover:glow-navy transition-all duration-500 transform hover:scale-105 shimmer group">
      {/* Placeholder headshot */}
      <div className="h-64 bg-gradient-to-br from-lime-green/30 via-baby-blue/20 to-lime-green/20 flex items-center justify-center relative overflow-hidden">
        {/* Background shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-pulse"></div>
        <div className="w-24 h-24 bg-gradient-to-br from-lime-green/30 to-lime-green/10 rounded-full flex items-center justify-center glow-green pulse-glow relative z-10">
          <svg className="w-12 h-12 text-lime-green drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-lime-green transition-colors duration-300">{name}</h3>

        {/* Credentials */}
        <div className="flex flex-wrap gap-2 mb-4">
          {credentials.map((credential, index) => (
            <span
              key={index}
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-lime-green/20 to-baby-blue/20 text-lime-green border border-lime-green/30 hover:glow-green transition-all duration-300 hover:scale-105"
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