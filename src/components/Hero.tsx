import { Link } from 'react-router-dom';
import { company } from '../data/company';
import { useState } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });
  };

  return (
    <section className="relative bg-white text-navy overflow-hidden" onMouseMove={handleMouseMove}>
      {/* Modern Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #15354A 1px, transparent 1px),
                           linear-gradient(to bottom, #15354A 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      {/* Gradient Accents with Parallax */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-lime-green/10 via-baby-blue/5 to-transparent rounded-full blur-3xl transition-transform duration-1000 ease-out"
        style={{ transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)` }}
      ></div>
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-baby-blue/10 via-lime-green/5 to-transparent rounded-full blur-3xl transition-transform duration-1000 ease-out"
        style={{ transform: `translate(${-mousePosition.x * 20}px, ${-mousePosition.y * 20}px)` }}
      ></div>

      <div className="relative section-padding container-max">
        <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-12 lg:gap-16 items-center min-h-[calc(100vh-5rem)] py-16 sm:py-20 lg:py-16">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            {/* Badge */}
            <div className="opacity-0 animate-fade-in">
              <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-lime-green/10 border border-lime-green/20 text-[10px] sm:text-xs font-bold tracking-[0.12em] sm:tracking-[0.15em] uppercase text-lime-green">
                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="hidden xs:inline">Trusted by 300+ Global Enterprises</span>
                <span className="xs:hidden">300+ Clients</span>
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] sm:leading-[1.05] tracking-tight text-navy opacity-0 animate-slide-up animate-delay-100">
                {company.taglineShort.split(' ').slice(0, 3).join(' ')}
                <span className="block text-lime-green mt-1 sm:mt-2">
                  {company.taglineShort.split(' ').slice(3).join(' ')}
                </span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-600 leading-relaxed font-light max-w-2xl opacity-0 animate-slide-up animate-delay-200">
                {company.about.split('.')[0]}.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 opacity-0 animate-fade-in animate-delay-300">
              <div className="space-y-1 sm:space-y-2 group cursor-default">
                <div className="text-2xl sm:text-3xl font-bold text-lime-green transition-transform duration-300 group-hover:scale-110">300+</div>
                <div className="text-xs sm:text-sm text-slate-600 font-medium">Clients Served</div>
              </div>
              <div className="space-y-1 sm:space-y-2 group cursor-default">
                <div className="text-2xl sm:text-3xl font-bold text-lime-green transition-transform duration-300 group-hover:scale-110">25+</div>
                <div className="text-xs sm:text-sm text-slate-600 font-medium">Years Experience</div>
              </div>
              <div className="space-y-1 sm:space-y-2 group cursor-default">
                <div className="text-2xl sm:text-3xl font-bold text-lime-green transition-transform duration-300 group-hover:scale-110">99%</div>
                <div className="text-xs sm:text-sm text-slate-600 font-medium">Client Satisfaction</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 opacity-0 animate-slide-up animate-delay-400">
              <a
                href={company.contact.ctas[0].href}
                className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-lime-green hover:bg-lime-green/90 text-white text-sm sm:text-base font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <span className="hidden xs:inline">{company.contact.ctas[0].label}</span>
                <span className="xs:hidden">Get in Touch</span>
                <svg className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <Link
                to={company.contact.ctas[1].href}
                className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white hover:bg-slate-50 text-navy text-sm sm:text-base font-semibold rounded-lg border-2 border-slate-300 hover:border-lime-green transition-all duration-300"
              >
                {company.contact.ctas[1].label}
                <svg className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 sm:pt-4 opacity-0 animate-fade-in animate-delay-500">
              <div className="flex items-center gap-1.5 sm:gap-2 text-slate-600 text-xs sm:text-sm font-medium group cursor-default">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-lime-green flex-shrink-0 transition-transform duration-300 group-hover:rotate-12" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                ISO Certified
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-slate-600 text-xs sm:text-sm font-medium group cursor-default">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-lime-green flex-shrink-0 transition-transform duration-300 group-hover:rotate-12" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Award Winning
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-slate-600 text-xs sm:text-sm font-medium group cursor-default">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-lime-green flex-shrink-0 transition-transform duration-300 group-hover:rotate-12" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                Expert Team
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden lg:block opacity-0 animate-fade-in animate-delay-300">
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 group cursor-default">
                <img
                  src="/hero-1.jpg"
                  alt="Professional financial consulting"
                  className="w-full h-[600px] object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-navy/20 to-transparent group-hover:from-navy/50 group-hover:via-navy/15 transition-all duration-700"></div>
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-2xl p-6 border border-slate-200/80 animate-slide-up animate-delay-500 transition-all duration-300 hover:shadow-3xl hover:-translate-y-2 cursor-default">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-lime-green/20 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-lime-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-navy">$2.5B+</div>
                    <div className="text-sm text-slate-600 font-medium">Assets Under Advisory</div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-6 -right-6 animate-scale-in animate-delay-600">
                {/* Pulse ring */}
                <div className="absolute inset-0 bg-lime-green rounded-2xl animate-ping opacity-20"></div>
                <div className="relative bg-lime-green rounded-2xl shadow-2xl p-6 transition-all duration-300 hover:shadow-3xl hover:scale-105 cursor-default">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">A+</div>
                    <div className="text-xs text-white/90 font-semibold mt-1">Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;