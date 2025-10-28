import { Link } from 'react-router-dom';
import { company } from '../data/company';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-deep-navy via-slate-blue-gray to-deep-navy text-white overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 bg-gradient-to-r from-deep-navy/95 to-deep-navy/85">
        <img
          src="/hero-1.jpg"
          alt="Professional financial consulting office environment"
          className="w-full h-full object-cover opacity-25"
        />
      </div>
      {/* Subtle Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-lime-green/10 rounded-full blur-3xl float-animation"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-baby-blue/10 rounded-full blur-3xl float-animation" style={{animationDelay: '1.5s'}}></div>
      <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-lime-green/8 rounded-full blur-2xl float-animation" style={{animationDelay: '3s'}}></div>

      <div className="relative section-padding container-max w-full">
        <div className="py-20 lg:py-28">
          <div className="text-center max-w-5xl mx-auto">
            <div className="mb-8 opacity-0 animate-fade-in">
              <span className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium tracking-wider uppercase">
                <span className="w-2 h-2 bg-lime-green rounded-full animate-pulse"></span>
                Professional Audit & Advisory Services
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 text-balance text-white drop-shadow-2xl opacity-0 animate-slide-up animate-delay-100 leading-[1.1]">
              {company.taglineShort}
            </h1>
            <p className="text-xl lg:text-2xl xl:text-3xl mb-12 text-white/90 text-balance max-w-4xl mx-auto leading-relaxed font-light opacity-0 animate-slide-up animate-delay-200">
              {company.about.split('.')[0]}.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center opacity-0 animate-slide-up animate-delay-300">
              <a
                href={company.contact.ctas[0].href}
                className="btn-primary inline-flex items-center group"
              >
                {company.contact.ctas[0].label}
                <svg className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <Link
                to={company.contact.ctas[1].href}
                className="btn-secondary inline-flex items-center group"
              >
                {company.contact.ctas[1].label}
                <svg className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in animate-delay-500">
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-sm tracking-wider uppercase">Scroll</span>
          <svg className="w-6 h-6 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;