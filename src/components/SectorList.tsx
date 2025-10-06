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
      <h3 className="text-xl font-semibold text-white mb-4 border-b border-lime-green/30 pb-2">
        {formatSectorTitle(title)}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {companies.map((company, index) => (
          <div
            key={index}
            className="bg-deep-navy rounded-lg p-6 shadow-sm border border-gray-100 flex items-center justify-center min-h-[120px]"
          >
            <div className="text-center">
              {/* Placeholder for company logo */}
              <div className="w-16 h-16 bg-lime-green/20 rounded-lg flex items-center justify-center mb-3 mx-auto">
                <span className="text-lime-green font-bold text-lg">
                  {company.split(' ').map(word => word[0]).join('').slice(0, 3)}
                </span>
              </div>
              <span className="text-sm font-medium text-gray-300 block">{company}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectorList;