import { Link } from 'react-router-dom';
import { company } from '../data/company';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-deep-navy via-slate-blue-gray to-deep-navy text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-gradient-to-r from-deep-navy/95 to-deep-navy/80">
        <img
          src="/hero-1.jpg"
          alt="Professional financial consulting office environment"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      {/* Enhanced Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-lime-green/20 rounded-full blur-xl float-animation glow-green"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-baby-blue/20 rounded-full blur-xl float-animation glow-blue" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-lime-green/15 rounded-full blur-lg pulse-glow" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-baby-blue/15 rounded-full blur-xl float-animation" style={{animationDelay: '2s'}}></div>
      <div className="relative section-padding container-max">
        <div className="py-24 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance text-white drop-shadow-2xl">
              {company.taglineShort}
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-white text-balance max-w-3xl mx-auto leading-relaxed">
              {company.about.split('.')[0]}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={company.contact.ctas[0].href}
                className="btn-primary inline-flex items-center glow-green"
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