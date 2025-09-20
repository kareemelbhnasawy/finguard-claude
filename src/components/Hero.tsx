import { Link } from 'react-router-dom';
import { company } from '../data/company';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-navy to-navy/90 text-white">
      <div className="section-padding container-max">
        <div className="py-24 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance text-white">
              {company.taglineShort}
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-200 text-balance max-w-3xl mx-auto leading-relaxed">
              {company.about.split('.')[0]}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={company.contact.ctas[0].href}
                className="btn-primary bg-white text-navy hover:bg-gray-100 focus:ring-white focus:ring-offset-navy inline-flex items-center"
              >
                {company.contact.ctas[0].label}
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <Link
                to={company.contact.ctas[1].href}
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-navy px-6 py-3 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-navy"
              >
                {company.contact.ctas[1].label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;