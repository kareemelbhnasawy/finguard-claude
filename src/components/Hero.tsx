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
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-slate-50 text-navy overflow-hidden min-h-screen flex items-center" onMouseMove={handleMouseMove}>
      {/* Modern Animated Mesh Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary Gradient Orb */}
        <div
          className="absolute top-0 -right-40 w-[800px] h-[800px] rounded-full opacity-30 blur-3xl animate-float-slow"
          style={{
            background: 'radial-gradient(circle, rgba(163, 230, 53, 0.4) 0%, rgba(134, 239, 172, 0.3) 30%, transparent 70%)',
            transform: `translate(${mousePosition.x * 40}px, ${mousePosition.y * 40}px)`
          }}
        ></div>

        {/* Secondary Gradient Orb */}
        <div
          className="absolute -bottom-40 -left-40 w-[700px] h-[700px] rounded-full opacity-25 blur-3xl animate-float-slow"
          style={{
            background: 'radial-gradient(circle, rgba(147, 197, 253, 0.4) 0%, rgba(191, 219, 254, 0.3) 30%, transparent 70%)',
            transform: `translate(${-mousePosition.x * 30}px, ${-mousePosition.y * 30}px)`,
            animationDelay: '2s'
          }}
        ></div>

        {/* Tertiary Accent Orb */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl animate-float-slow"
          style={{
            background: 'radial-gradient(circle, rgba(163, 230, 53, 0.3) 0%, transparent 70%)',
            animationDelay: '1s'
          }}
        ></div>

        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #15354A 1px, transparent 1px),
                             linear-gradient(to bottom, #15354A 1px, transparent 1px)`,
            backgroundSize: '100px 100px'
          }}></div>
        </div>
      </div>

      <div className="relative section-padding container-max w-full py-20 sm:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto">
          {/* Centered Content Layout */}
          <div className="text-center space-y-8 sm:space-y-10 lg:space-y-12">
            {/* Top Badge */}
            <div className="opacity-0 animate-fade-in">
              <span className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-lime-green/15 backdrop-blur-sm border border-lime-green/30 text-xs font-bold tracking-wider uppercase text-lime-green shadow-lg">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Trusted by 300+ Global Enterprises
              </span>
            </div>

            {/* Massive Modern Headline */}
            <div className="space-y-6 opacity-0 animate-slide-up animate-delay-100">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold leading-[1.05] tracking-tighter">
                <span className="bg-gradient-to-r from-navy via-navy to-slate-700 bg-clip-text text-transparent">
                  Financial Excellence
                </span>
                <br />
                <span className="bg-gradient-to-r from-lime-green via-green-400 to-lime-green bg-clip-text text-transparent inline-block mt-2">
                  Delivered
                </span>
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-slate-600 font-light leading-relaxed max-w-4xl mx-auto">
                Expert audit, tax, and advisory services for businesses that demand precision
              </p>
            </div>

            {/* Large Modern CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 opacity-0 animate-slide-up animate-delay-200">
              <a
                href={company.contact.ctas[0].href}
                className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-gradient-to-r from-lime-green to-green-500 rounded-2xl shadow-2xl shadow-lime-green/30 hover:shadow-lime-green/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1 w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Get Started
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400 to-lime-green opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>

              <Link
                to={company.contact.ctas[1].href}
                className="group inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-navy bg-white/80 backdrop-blur-sm border-2 border-slate-300 hover:border-lime-green rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 w-full sm:w-auto"
              >
                <span className="flex items-center gap-3">
                  View Services
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>

            {/* Stats Row - Modern Minimal Style */}
            <div className="grid grid-cols-3 gap-8 sm:gap-12 max-w-3xl mx-auto pt-8 sm:pt-12 opacity-0 animate-fade-in animate-delay-300">
              <div className="group cursor-default">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-br from-lime-green to-green-500 bg-clip-text text-transparent transition-transform duration-300 group-hover:scale-110">
                  300+
                </div>
                <div className="text-sm sm:text-base text-slate-600 font-semibold mt-2">Clients</div>
              </div>
              <div className="group cursor-default">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-br from-lime-green to-green-500 bg-clip-text text-transparent transition-transform duration-300 group-hover:scale-110">
                  25+
                </div>
                <div className="text-sm sm:text-base text-slate-600 font-semibold mt-2">Years</div>
              </div>
              <div className="group cursor-default">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-br from-lime-green to-green-500 bg-clip-text text-transparent transition-transform duration-300 group-hover:scale-110">
                  99%
                </div>
                <div className="text-sm sm:text-base text-slate-600 font-semibold mt-2">Satisfaction</div>
              </div>
            </div>

            {/* Trust Indicators - Simplified */}
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 pt-6 opacity-0 animate-fade-in animate-delay-400">
              <div className="flex items-center gap-2 text-slate-600 font-semibold group cursor-default">
                <div className="w-8 h-8 bg-lime-green/20 rounded-full flex items-center justify-center group-hover:bg-lime-green/30 transition-all duration-300 group-hover:scale-110">
                  <svg className="w-4 h-4 text-lime-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                ISO Certified
              </div>
              <div className="flex items-center gap-2 text-slate-600 font-semibold group cursor-default">
                <div className="w-8 h-8 bg-lime-green/20 rounded-full flex items-center justify-center group-hover:bg-lime-green/30 transition-all duration-300 group-hover:scale-110">
                  <svg className="w-4 h-4 text-lime-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                Award Winning
              </div>
              <div className="flex items-center gap-2 text-slate-600 font-semibold group cursor-default">
                <div className="w-8 h-8 bg-lime-green/20 rounded-full flex items-center justify-center group-hover:bg-lime-green/30 transition-all duration-300 group-hover:scale-110">
                  <svg className="w-4 h-4 text-lime-green" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                </div>
                Expert Team
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
