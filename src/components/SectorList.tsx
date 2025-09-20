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
      <h3 className="text-xl font-semibold text-navy mb-4 border-b border-gray-200 pb-2">
        {formatSectorTitle(title)}
      </h3>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {companies.map((company, index) => (
          <li
            key={index}
            className="bg-gray-50 rounded-lg px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
          >
            <span className="text-sm font-medium">{company}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SectorList;