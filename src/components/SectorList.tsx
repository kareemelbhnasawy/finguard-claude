interface SectorListProps {
  title: string;
  companies: string[];
}

const SectorList = ({ title, companies }: SectorListProps) => {
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
    <section className="mb-8">
      <h3 className="text-xl font-semibold text-navy mb-4 border-b border-baby-blue pb-2">
        {formatSectorTitle(title)}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {companies.map((company, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-white to-light-gray rounded-xl p-6 shadow-lg border border-lime-green/20 hover:shadow-2xl hover:glow-green transition-all duration-500 transform hover:scale-105 flex items-center justify-center min-h-[120px] group"
          >
            <div className="text-center">
              {/* Placeholder for company logo */}
              <div className="w-16 h-16 bg-gradient-to-br from-deep-navy to-slate-blue-gray rounded-xl flex items-center justify-center mb-3 mx-auto glow-navy group-hover:pulse-glow">
                <span className="text-lime-green font-bold text-lg">
                  {company.split(' ').map(word => word[0]).join('').slice(0, 3)}
                </span>
              </div>
              <span className="text-sm font-medium text-gray-700 block group-hover:text-navy transition-colors duration-300">{company}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectorList;