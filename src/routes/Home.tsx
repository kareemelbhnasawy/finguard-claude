import { useSEO, seoData } from '../lib/seo';
import { company } from '../data/company';
import Hero from '../components/Hero';
import ValueCard from '../components/ValueCard';
import ServiceCard from '../components/ServiceCard';

const Home = () => {
  useSEO(seoData.home);

  return (
    <>
      <Hero />

      {/* Image Banner Section */}
      <section className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80"
          alt="Professional business meeting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-navy/80 to-deep-navy/60 flex items-center justify-center">
          <div className="text-center text-white max-w-3xl px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Empowering Business Success</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-200">
              Combining expertise, innovation, and personal service to help your business thrive
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
            alt="Modern workspace"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/98 via-light-gray/97 to-white/98"></div>
        </div>
        <div className="section-padding container-max relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {company.values.map((value, index) => (
              <ValueCard key={index} title={value.title} blurb={value.blurb} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1920&q=80"
            alt="Financial services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/98 via-white/96 to-white/98"></div>
        </div>
        <div className="section-padding container-max relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {company.servicesIntro}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {company.services.map((service, index) => (
              <ServiceCard
                key={index}
                id={service.id}
                title={service.title}
                bullets={service.bullets}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Split Image + Text Section */}
      <section className="bg-light-gray">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative h-64 sm:h-80 lg:h-auto order-1 lg:order-none">
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80"
              alt="Financial analysis and reporting"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center justify-center p-6 sm:p-8 md:p-12 lg:p-16 order-2 lg:order-none">
            <div className="max-w-lg">
              <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4 sm:mb-6">Precision You Can Trust</h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
                Our team of certified professionals brings decades of combined experience across audit,
                tax, and advisory services. We deliver accurate, reliable insights that help you make
                informed business decisions.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                From compliance to strategy, we're your partner in navigating the complexities of
                modern business finance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof with Background Image */}
      <section className="relative py-12 sm:py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
            alt="Modern business environment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-deep-navy/85 via-deep-navy/75 to-deep-navy/85"></div>
        </div>

        <div className="section-padding container-max relative z-10">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">Trusted by Industry Leaders</h2>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 sm:mb-12">
              Serving 300+ companies across multiple sectors
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm mb-8 sm:mb-12">
              <span className="bg-white/10 backdrop-blur-sm text-white px-3 sm:px-4 py-2 rounded-full transition-all duration-300 hover:bg-lime-green hover:text-deep-navy hover:scale-110 hover:shadow-lg cursor-default border border-white/20">Banking</span>
              <span className="bg-white/10 backdrop-blur-sm text-white px-3 sm:px-4 py-2 rounded-full transition-all duration-300 hover:bg-lime-green hover:text-deep-navy hover:scale-110 hover:shadow-lg cursor-default border border-white/20">Construction</span>
              <span className="bg-white/10 backdrop-blur-sm text-white px-3 sm:px-4 py-2 rounded-full transition-all duration-300 hover:bg-lime-green hover:text-deep-navy hover:scale-110 hover:shadow-lg cursor-default border border-white/20">Manufacturing</span>
              <span className="bg-white/10 backdrop-blur-sm text-white px-3 sm:px-4 py-2 rounded-full transition-all duration-300 hover:bg-lime-green hover:text-deep-navy hover:scale-110 hover:shadow-lg cursor-default border border-white/20">Tourism</span>
              <span className="bg-white/10 backdrop-blur-sm text-white px-3 sm:px-4 py-2 rounded-full transition-all duration-300 hover:bg-lime-green hover:text-deep-navy hover:scale-110 hover:shadow-lg cursor-default border border-white/20">Education</span>
              <span className="bg-white/10 backdrop-blur-sm text-white px-3 sm:px-4 py-2 rounded-full transition-all duration-300 hover:bg-lime-green hover:text-deep-navy hover:scale-110 hover:shadow-lg cursor-default border border-white/20">Agriculture</span>
            </div>

            {/* Image Grid Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-8 sm:mt-12 max-w-5xl mx-auto">
              <div className="relative h-24 sm:h-32 rounded-lg overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=400&q=80"
                  alt="Banking sector"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 to-transparent"></div>
              </div>
              <div className="relative h-24 sm:h-32 rounded-lg overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&q=80"
                  alt="Construction sector"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 to-transparent"></div>
              </div>
              <div className="relative h-24 sm:h-32 rounded-lg overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80"
                  alt="Manufacturing sector"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 to-transparent"></div>
              </div>
              <div className="relative h-24 sm:h-32 rounded-lg overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80"
                  alt="Hospitality sector"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;