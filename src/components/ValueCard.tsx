import { useScrollReveal } from '../hooks/useScrollReveal';

interface ValueCardProps {
  title: string;
  blurb: string;
}

const ValueCard = ({ title, blurb }: ValueCardProps) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 });
  const getIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case 'trust':
        return (
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        );
      case 'integrity':
        return (
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        );
      case 'excellence':
        return (
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        );
      case 'innovation':
        return (
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        );
      case 'commitment':
        return (
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        );
      default:
        return (
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
    }
  };

  return (
    <div
      ref={ref}
      className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-slate-200/80 transition-smooth opacity-0 hover-lift-professional overflow-hidden ${
        isVisible ? 'animate-scale-in' : ''
      }`}
    >
      <div className="p-8 text-center h-full flex flex-col items-center">
        <div className="mb-6 p-4 bg-gradient-to-br from-lime-green/20 to-lime-green/10 rounded-2xl text-lime-green transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
          {getIcon(title)}
        </div>
        <h3 className="text-xl font-bold text-navy mb-4 group-hover:text-lime-green transition-colors">{title}</h3>
        <p className="text-slate-600 leading-relaxed text-base">{blurb}</p>
      </div>
    </div>
  );
};

export default ValueCard;