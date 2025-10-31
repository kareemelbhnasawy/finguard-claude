import { useSEO, seoData } from '../lib/seo';
import { company } from '../data/company';
import SectorList from '../components/SectorList';
import AnimatedCounter from '../components/AnimatedCounter';
import { images } from '../data/images';

const Clients = () => {
  useSEO(seoData.clients);

  return (
    <>
      {/* Hero Section with Image */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={images.about.handshake}
            alt="Professional business partnership"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-deep-navy/80 via-slate-blue-gray/75 to-deep-navy/80"></div>
        </div>

        <div className="section-padding container-max relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Clients</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              {company.clientsIntro}
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 relative overflow-hidden bg-gradient-to-br from-white via-slate-50/60 to-white">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-lime-green/8 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-baby-blue/8 rounded-full blur-3xl animate-float-slow" style={{animationDelay: '1.2s'}}></div>

        {/* Diagonal Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.015]">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, #15354A 40px, #15354A 41px)`
          }}></div>
        </div>

        <div className="section-padding container-max relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-deep-navy p-8 rounded-lg shadow-sm border border-gray-100 hover-lift hover-glow-green transition-smooth">
              <div className="text-4xl font-bold text-lime-green mb-2">
                <AnimatedCounter end={300} suffix="+" duration={2500} />
              </div>
              <div className="text-lg text-white">Companies Served</div>
            </div>
            <div className="bg-deep-navy p-8 rounded-lg shadow-sm border border-gray-100 hover-lift hover-glow-blue transition-smooth">
              <div className="text-4xl font-bold text-lime-green mb-2">
                <AnimatedCounter end={8} duration={2000} />
              </div>
              <div className="text-lg text-white">Industry Sectors</div>
            </div>
            <div className="bg-deep-navy p-8 rounded-lg shadow-sm border border-gray-100 hover-lift hover-glow-green transition-smooth">
              <div className="text-4xl font-bold text-lime-green mb-2">
                <AnimatedCounter end={2} duration={1500} />
              </div>
              <div className="text-lg text-white">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Showcase with Images */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-white via-slate-50/40 to-white relative overflow-hidden">
        {/* Floating Decorative Elements - Responsive */}
        <div className="hidden md:block absolute top-12 right-12 w-28 h-28 bg-lime-green/10 rounded-full blur-2xl animate-float-slow"></div>
        <div className="hidden md:block absolute bottom-12 left-12 w-36 h-36 bg-baby-blue/10 rounded-full blur-3xl animate-float-slow" style={{animationDelay: '1.5s'}}></div>
        <div className="hidden lg:block absolute top-1/3 left-1/3 w-20 h-20 bg-lime-green/6 rounded-full blur-xl animate-float-slow" style={{animationDelay: '0.7s'}}></div>

        {/* Diagonal Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, #15354A 35px, #15354A 36px)`
          }}></div>
        </div>

        <div className="section-padding container-max relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-3 sm:mb-4">Sectors We Serve</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12 px-4">
              Trusted by leading organizations across diverse industries
            </p>
          </div>

          {/* Industry Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-16">
            <div className="relative h-32 sm:h-40 md:h-48 rounded-lg overflow-hidden group">
              <img
                src={images.clients.banking}
                alt="Banking & Finance"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/95 via-deep-navy/60 to-transparent flex items-end p-3 sm:p-4">
                <h3 className="text-white font-bold text-sm sm:text-base md:text-lg">Banking & Finance</h3>
              </div>
            </div>
            <div className="relative h-32 sm:h-40 md:h-48 rounded-lg overflow-hidden group">
              <img
                src={images.clients.construction}
                alt="Construction & Housing"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/95 via-deep-navy/60 to-transparent flex items-end p-3 sm:p-4">
                <h3 className="text-white font-bold text-sm sm:text-base md:text-lg">Construction</h3>
              </div>
            </div>
            <div className="relative h-32 sm:h-40 md:h-48 rounded-lg overflow-hidden group">
              <img
                src={images.clients.manufacturing}
                alt="Manufacturing & Industrial"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/95 via-deep-navy/60 to-transparent flex items-end p-3 sm:p-4">
                <h3 className="text-white font-bold text-sm sm:text-base md:text-lg">Manufacturing</h3>
              </div>
            </div>
            <div className="relative h-32 sm:h-40 md:h-48 rounded-lg overflow-hidden group">
              <img
                src={images.clients.hospitality}
                alt="Tourism & Hospitality"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/95 via-deep-navy/60 to-transparent flex items-end p-3 sm:p-4">
                <h3 className="text-white font-bold text-sm sm:text-base md:text-lg">Hospitality</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Sectors */}
      <section className="py-16 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-lime-green/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-baby-blue/12 rounded-full blur-3xl animate-float-slow" style={{animationDelay: '1.8s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-lime-green/6 rounded-full blur-2xl animate-float-slow" style={{animationDelay: '0.9s'}}></div>

        {/* Dot Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.025]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle, #15354A 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        <div className="section-padding container-max relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Our Clients</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our diverse client portfolio spans multiple sectors, from established multinational corporations
              to fast-growing enterprises across {company.geography}.
            </p>
          </div>

          <div className="space-y-12">
            {Object.entries(company.sectors).map(([sectorKey, companies]) => (
              <SectorList
                key={sectorKey}
                title={sectorKey}
                companies={companies}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonial Placeholder */}
      <section className="py-16 bg-light-gray relative">
        {/* Decorative Elements */}
        <div className="absolute top-8 right-8 w-16 h-16 bg-lime-green/10 rounded-full blur-lg"></div>
        <div className="absolute bottom-8 left-8 w-12 h-12 bg-baby-blue/10 rounded-full blur-md"></div>
        <div className="section-padding container-max">
          <div className="max-w-4xl mx-auto">
            <div className="bg-deep-navy text-white rounded-lg p-12 text-center">
              <blockquote className="text-xl italic mb-6">
                "Working with {company.brand} has been instrumental in our growth. Their expertise in audit and advisory services
                has helped us navigate complex regulatory requirements while maintaining focus on our core business objectives."
              </blockquote>
              <div className="text-baby-blue">
                - Egyptian Gulf Bank, CEO
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Clients Choose Us */}
      <section className="py-16 relative overflow-hidden bg-gradient-to-br from-deep-navy via-slate-blue-gray to-deep-navy">
        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-80 h-80 bg-lime-green/15 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-baby-blue/15 rounded-full blur-3xl animate-float-slow" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-lime-green/8 rounded-full blur-2xl animate-float-slow" style={{animationDelay: '0.5s'}}></div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #A4D65E 1px, transparent 1px), linear-gradient(to bottom, #A4D65E 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="section-padding container-max relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Why Clients Choose Finguard
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-deep-navy p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-lime-green/20 rounded-lg">
                    <svg className="h-6 w-6 text-lime-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="ml-3 text-lg font-semibold text-white">Industry Expertise</h3>
                </div>
                <p className="text-gray-300">
                  Deep understanding of sector-specific challenges and regulatory requirements across multiple industries.
                </p>
              </div>

              <div className="bg-deep-navy p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-lime-green/20 rounded-lg">
                    <svg className="h-6 w-6 text-lime-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="ml-3 text-lg font-semibold text-white">Timely Delivery</h3>
                </div>
                <p className="text-gray-300">
                  Consistent track record of meeting deadlines and delivering quality work within agreed timeframes.
                </p>
              </div>

              <div className="bg-deep-navy p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-lime-green/20 rounded-lg">
                    <svg className="h-6 w-6 text-lime-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="ml-3 text-lg font-semibold text-white">Personal Service</h3>
                </div>
                <p className="text-gray-300">
                  Direct access to senior professionals who understand your business and provide personalized attention.
                </p>
              </div>

              <div className="bg-deep-navy p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-lime-green/20 rounded-lg">
                    <svg className="h-6 w-6 text-lime-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="ml-3 text-lg font-semibold text-white">Innovative Solutions</h3>
                </div>
                <p className="text-gray-300">
                  Forward-thinking approaches that leverage technology and best practices to optimize outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Clients;