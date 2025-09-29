interface TeamCardProps {
  name: string;
  credentials: string[];
  bio: string;
}

const TeamCard = ({ name, credentials, bio }: TeamCardProps) => {
  return (
    <div className="bg-deep-navy rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200">
      {/* Placeholder headshot */}
      <div className="h-64 bg-gradient-to-br from-lime-green/20 to-baby-blue/20 flex items-center justify-center relative">
        <div className="w-24 h-24 bg-lime-green/20 rounded-full flex items-center justify-center">
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
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-lime-green/20 text-lime-green border border-lime-green/30"
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