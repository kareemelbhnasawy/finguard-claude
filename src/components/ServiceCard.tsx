import { Link } from 'react-router-dom';

interface ServiceCardProps {
  id: string;
  title: string;
  bullets: string[];
}

const ServiceCard = ({ id, title, bullets }: ServiceCardProps) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'audit-assurance':
        return (
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'accounting-bookkeeping':
        return (
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        );
      case 'tax-services':
        return (
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'regulatory-legal':
        return (
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
          </svg>
        );
      case 'advisory-consultancy':
        return (
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        );
      default:
        return (
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 6V8a2 2 0 00-2-2H10a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2z" />
          </svg>
        );
    }
  };

  return (
    <div className="bg-gradient-to-br from-deep-navy via-slate-blue-gray to-deep-navy p-6 rounded-xl shadow-xl border border-lime-green/20 hover:shadow-2xl hover:glow-navy transition-all duration-500 transform hover:scale-105 shimmer group h-full">
      <div className="flex items-center mb-4">
        <div className="flex-shrink-0 p-3 bg-gradient-to-br from-lime-green/30 to-lime-green/10 rounded-xl text-lime-green glow-green pulse-glow">
          {getIcon(id)}
        </div>
        <h3 className="ml-4 text-lg font-semibold text-white group-hover:text-lime-green transition-colors duration-300">{title}</h3>
      </div>
      <ul className="space-y-2 mb-6 flex-grow">
        {bullets.slice(0, 3).map((bullet, index) => (
          <li key={index} className="flex items-start">
            <svg className="h-5 w-5 text-baby-blue mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-white text-sm">{bullet}</span>
          </li>
        ))}
        {bullets.length > 3 && (
          <li className="text-white text-sm italic">
            +{bullets.length - 3} more services
          </li>
        )}
      </ul>
      <Link
        to={`/services#${id}`}
        className="inline-flex items-center text-lime-green hover:text-lime-green/80 font-medium text-sm transition-colors focus-visible:focus-visible"
      >
        Learn more
        <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
};

export default ServiceCard;