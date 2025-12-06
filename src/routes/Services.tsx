import { useSEO, seoData } from '../lib/seo';
import { company } from '../data/company';
import { images } from '../data/images';

const Services = () => {
  useSEO(seoData.services);

  return (
    <>
      {/* Hero Section with Image */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={images.services.advisory}
            alt="Professional business consultation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-deep-navy/75 via-slate-blue-gray/70 to-deep-navy/75"></div>
        </div>

        <div className="section-padding container-max relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{company.content.services.hero.title}</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              {company.content.services.hero.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 bg-gradient-to-r from-slate-100 to-slate-50 sticky top-16 z-40 border-b border-lime-green/20 backdrop-blur-sm">
        <div className="section-padding container-max">
          <nav className="flex flex-wrap justify-center gap-4" aria-label="Services navigation">
            {company.services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="px-4 py-2 text-sm font-medium text-navy hover:bg-lime-green hover:text-white rounded-lg transition-colors focus-visible:focus-visible shadow-sm hover:shadow-md"
              >
                {service.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Services Sections */}
      <div className="py-16 relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
        {/* Decorative Elements with Animation - Responsive */}
        <div className="hidden md:block absolute top-0 right-0 w-[500px] h-[500px] bg-lime-green/5 rounded-full blur-3xl animate-float-slow"></div>
        <div className="hidden md:block absolute bottom-0 left-0 w-[400px] h-[400px] bg-baby-blue/8 rounded-full blur-3xl animate-float-slow" style={{animationDelay: '2s'}}></div>
        <div className="hidden lg:block absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-lime-green/3 rounded-full blur-3xl animate-float-slow" style={{animationDelay: '1s'}}></div>
        <div className="hidden lg:block absolute bottom-1/4 right-1/4 w-[250px] h-[250px] bg-baby-blue/5 rounded-full blur-3xl animate-float-slow" style={{animationDelay: '1.5s'}}></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.015]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #15354A 1px, transparent 1px),
                             linear-gradient(to bottom, #15354A 1px, transparent 1px)`,
            backgroundSize: '70px 70px'
          }}></div>
        </div>
        <div className="section-padding container-max relative z-10">
          <div className="space-y-16">
            {company.services.map((service) => (
              <section key={service.id} id={service.id} className="scroll-mt-48">
                <div className="bg-deep-navy rounded-lg shadow-lg border border-slate-blue-gray p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 group">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-lime-green/20 rounded-lg transition-all duration-300 group-hover:bg-lime-green/30 group-hover:scale-110 group-hover:rotate-6">
                      {getServiceIcon(service.id)}
                    </div>
                    <h2 className="ml-4 text-3xl font-bold text-white transition-colors duration-300 group-hover:text-lime-green">{service.title}</h2>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4">Services Include:</h3>
                      <ul className="space-y-3">
                        {service.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <svg className="h-5 w-5 text-baby-blue mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-white">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-steel-blue rounded-lg p-6 border border-baby-blue/20">
                      <h3 className="text-lg font-semibold text-white mb-4">Why Choose Our {service.title}?</h3>
                      <p className="text-white leading-relaxed">
                        {service.description || company.content.services.serviceDescriptions[service.id as keyof typeof company.content.services.serviceDescriptions] || "Expert professional services tailored to your business needs."}
                      </p>
                    </div>
                  </div>

                  {/* Back to top */}
                  <div className="mt-8 text-center">
                    <a
                      href="#top"
                      className="inline-flex items-center text-lime-green hover:text-lime-green/80 font-medium text-sm transition-colors focus-visible:focus-visible"
                    >
                      <svg className="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                      {company.content.services.ctaText}
                    </a>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const getServiceIcon = (id: string) => {
  switch (id) {
    case 'audit-assurance':
      return (
        <svg className="h-8 w-8 text-lime-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case 'accounting-bookkeeping':
      return (
        <svg className="h-8 w-8 text-lime-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      );
    case 'tax-services':
      return (
        <svg className="h-8 w-8 text-lime-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case 'regulatory-legal':
      return (
        <svg className="h-8 w-8 text-lime-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      );
    case 'advisory-consultancy':
      return (
        <svg className="h-8 w-8 text-lime-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      );
    default:
      return (
        <svg className="h-8 w-8 text-lime-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 6V8a2 2 0 00-2-2H10a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2z" />
        </svg>
      );
  }
};

export default Services;