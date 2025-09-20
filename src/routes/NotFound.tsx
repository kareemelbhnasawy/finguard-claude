import { Link } from 'react-router-dom';
import { useSEO } from '../lib/seo';

const NotFound = () => {
  useSEO({
    title: '404 - Page Not Found | Finguard',
    description: 'The page you are looking for could not be found.',
    canonical: 'https://www.finguardint.com/404',
  });

  return (
    <section className="py-16 bg-gray-50 min-h-[60vh] flex items-center">
      <div className="section-padding container-max">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-24 h-24 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.464-.881-6.08-2.33C7.76 11.53 9.756 11 12 11s4.24.53 6.08 1.67a7.965 7.965 0 01-6.08 2.33z" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-navy mb-4">Page Not Found</h1>
            <p className="text-xl text-gray-600 mb-8">
              Sorry, we couldn't find the page you're looking for. It may have been moved, deleted, or never existed.
            </p>
          </div>

          <div className="space-y-4">
            <Link
              to="/"
              className="btn-primary inline-flex items-center"
            >
              <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Back to Home
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-lg font-semibold text-navy mb-4">Looking for something specific?</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <Link to="/about" className="text-teal hover:text-teal/80 transition-colors focus-visible:focus-visible">
                About Us
              </Link>
              <Link to="/services" className="text-teal hover:text-teal/80 transition-colors focus-visible:focus-visible">
                Our Services
              </Link>
              <Link to="/team" className="text-teal hover:text-teal/80 transition-colors focus-visible:focus-visible">
                Our Team
              </Link>
              <Link to="/contact" className="text-teal hover:text-teal/80 transition-colors focus-visible:focus-visible">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;