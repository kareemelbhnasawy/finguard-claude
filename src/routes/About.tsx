import { useSEO, seoData } from '../lib/seo';
import { company } from '../data/company';
import ValueCard from '../components/ValueCard';
import { images } from '../data/images';

const About = () => {
  useSEO(seoData.about);

  return (
    <>
      {/* Hero Section with Image */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={images.about.office}
            alt="Professional office environment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-deep-navy/80 via-deep-navy/70 to-deep-navy/80"></div>
        </div>

        <div className="section-padding container-max relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{company.content.about.hero.title}</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              {company.about}
            </p>
          </div>
        </div>
      </section>

      {/* Image + Text Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-white via-slate-50 to-white relative overflow-hidden">
        {/* Floating Decorative Elements - Hidden on mobile */}
        <div className="hidden md:block absolute top-10 right-10 w-24 h-24 bg-lime-green/10 rounded-full blur-2xl animate-float-slow"></div>
        <div className="hidden md:block absolute bottom-20 left-10 w-32 h-32 bg-baby-blue/10 rounded-full blur-2xl animate-float-slow" style={{animationDelay: '1s'}}></div>
        <div className="hidden lg:block absolute top-1/3 right-1/4 w-16 h-16 bg-lime-green/5 rounded-full blur-xl animate-float-slow" style={{animationDelay: '0.5s'}}></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.015]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #15354A 1px, transparent 1px),
                             linear-gradient(to bottom, #15354A 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="section-padding container-max relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="relative h-64 sm:h-80 lg:h-full lg:min-h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={images.about.teamMeeting}
                alt="Professional team meeting"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="order-first lg:order-none">
              <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4 sm:mb-6">{company.content.about.trustedPartners.heading}</h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
                {company.content.about.trustedPartners.paragraph1}
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                {company.content.about.trustedPartners.paragraph2}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 relative overflow-hidden bg-gradient-to-br from-deep-navy via-slate-blue-gray to-deep-navy">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-lime-green/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-baby-blue/10 rounded-full blur-3xl animate-float-slow" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-lime-green/5 rounded-full blur-2xl animate-float-slow" style={{animationDelay: '0.7s'}}></div>

        {/* Diagonal Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, #A4D65E 35px, #A4D65E 36px)`
          }}></div>
        </div>

        <div className="section-padding container-max relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-deep-navy p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-lime-green/20 rounded-lg">
                  <svg className="h-8 w-8 text-lime-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="ml-4 text-2xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {company.mission}
              </p>
            </div>

            <div className="bg-deep-navy p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-lime-green/20 rounded-lg">
                  <svg className="h-8 w-8 text-lime-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h2 className="ml-4 text-2xl font-bold text-white">Our Vision</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {company.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
            alt="Professional workspace"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/98 via-white/97 to-white/98"></div>
        </div>
        <div className="section-padding container-max relative z-10">
          {/* Text Container with Background Panel for Better Contrast */}
          <div className="text-center mb-12 max-w-4xl mx-auto">
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-xl border border-slate-200/60">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">{company.content.about.valuesSection.heading}</h2>
              <p className="text-lg md:text-xl text-slate-700 max-w-2xl mx-auto leading-relaxed">
                {company.content.about.valuesSection.description}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {company.values.map((value, index) => (
              <ValueCard key={index} title={value.title} description={value.description} />
            ))}
          </div>
        </div>
      </section>

      {/* Image Grid Section */}
      <section className="py-12 sm:py-16 bg-light-gray">
        <div className="section-padding container-max">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-3 sm:mb-4">{company.content.about.expertiseInAction.heading}</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              {company.content.about.expertiseInAction.description}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {company.content.about.expertiseInAction.items.map((item, index) => (
              <div key={index} className="relative h-48 sm:h-56 md:h-64 rounded-xl overflow-hidden group">
                <img
                  src={index === 0 ? "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80" : 
                       index === 1 ? "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&q=80" :
                       "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/90 via-deep-navy/50 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-200 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Geography */}
      <section className="py-16 bg-gradient-to-br from-deep-navy via-slate-blue-gray to-deep-navy relative overflow-hidden">
        {/* Enhanced Decorative Elements */}
        <div className="absolute top-16 right-16 w-20 h-20 bg-lime-green/20 rounded-full blur-xl float-animation glow-green"></div>
        <div className="absolute bottom-16 left-16 w-16 h-16 bg-baby-blue/20 rounded-full blur-lg pulse-glow" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-lime-green/15 rounded-full blur-md float-animation" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/4 right-1/3 w-14 h-14 bg-baby-blue/15 rounded-full blur-lg pulse-glow" style={{animationDelay: '1.5s'}}></div>
        <div className="section-padding container-max">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">{company.content.about.geography.heading}</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              {company.content.about.geography.description.replace('{geography}', company.geography)}
            </p>
            <div className="flex justify-center space-x-8">
              {company.content.about.geography.locations.map((location, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-lime-green/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-lime-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-white">{location.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;