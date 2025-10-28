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

      {/* Banner Section */}
      <section className="relative h-96 sm:h-[28rem] md:h-[32rem] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80"
          alt="Professional business meeting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-navy/85 to-deep-navy/70 flex items-center justify-center">
          <div className="text-center text-white max-w-5xl px-6 sm:px-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight tracking-tight">Empowering Business Success</h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-light leading-relaxed">
              Combining expertise, innovation, and personal service to help your business thrive
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        <div className="section-padding container-max relative z-10">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-lime-green/10 border border-lime-green/20 text-xs font-semibold tracking-[0.2em] uppercase text-lime-green mb-6">
              <span className="w-2 h-2 bg-lime-green rounded-full"></span>
              Our Foundation
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6 tracking-tight">Our Core Values</h2>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
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
      <section className="py-24 md:py-32 relative overflow-hidden bg-white">
        <div className="section-padding container-max relative z-10">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-lime-green/10 border border-lime-green/20 text-xs font-semibold tracking-[0.2em] uppercase text-lime-green mb-6">
              <span className="w-2 h-2 bg-lime-green rounded-full"></span>
              What We Do
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6 tracking-tight">Our Services</h2>
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
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
      <section className="bg-gradient-to-b from-slate-50 to-white">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative h-96 sm:h-[32rem] lg:h-auto order-1 lg:order-none group overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80"
              alt="Financial analysis and reporting"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-deep-navy/40 to-transparent"></div>
          </div>
          <div className="flex items-center justify-center p-8 sm:p-12 md:p-16 lg:p-20 order-2 lg:order-none">
            <div className="max-w-xl space-y-6">
              <span className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-lime-green/10 border border-lime-green/20 text-xs font-semibold tracking-[0.2em] uppercase text-lime-green">
                Our Commitment
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight tracking-tight">Precision You Can Trust</h2>
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
                Our team of certified professionals brings decades of combined experience across audit,
                tax, and advisory services. We deliver accurate, reliable insights that help you make
                informed business decisions.
              </p>
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
                From compliance to strategy, we're your partner in navigating the complexities of
                modern business finance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof with Background Image */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
            alt="Modern business environment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-deep-navy/90 via-deep-navy/85 to-deep-navy/90"></div>
        </div>

        <div className="section-padding container-max relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <span className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-semibold tracking-[0.2em] uppercase text-lime-green mb-8">
              <span className="w-2 h-2 bg-lime-green rounded-full animate-pulse"></span>
              Client Success
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white leading-tight tracking-tight">Trusted by Industry Leaders</h2>
            <p className="text-xl sm:text-2xl text-white/90 mb-12 font-light leading-relaxed">
              Serving 300+ companies across multiple sectors
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm mb-16">
              <span className="bg-white/10 backdrop-blur-sm text-white px-5 py-3 rounded-full transition-all duration-300 hover:bg-lime-green hover:text-deep-navy hover:scale-105 hover:shadow-xl cursor-default border border-white/20 font-medium">Banking</span>
              <span className="bg-white/10 backdrop-blur-sm text-white px-5 py-3 rounded-full transition-all duration-300 hover:bg-lime-green hover:text-deep-navy hover:scale-105 hover:shadow-xl cursor-default border border-white/20 font-medium">Construction</span>
              <span className="bg-white/10 backdrop-blur-sm text-white px-5 py-3 rounded-full transition-all duration-300 hover:bg-lime-green hover:text-deep-navy hover:scale-105 hover:shadow-xl cursor-default border border-white/20 font-medium">Manufacturing</span>
              <span className="bg-white/10 backdrop-blur-sm text-white px-5 py-3 rounded-full transition-all duration-300 hover:bg-lime-green hover:text-deep-navy hover:scale-105 hover:shadow-xl cursor-default border border-white/20 font-medium">Tourism</span>
              <span className="bg-white/10 backdrop-blur-sm text-white px-5 py-3 rounded-full transition-all duration-300 hover:bg-lime-green hover:text-deep-navy hover:scale-105 hover:shadow-xl cursor-default border border-white/20 font-medium">Education</span>
              <span className="bg-white/10 backdrop-blur-sm text-white px-5 py-3 rounded-full transition-all duration-300 hover:bg-lime-green hover:text-deep-navy hover:scale-105 hover:shadow-xl cursor-default border border-white/20 font-medium">Agriculture</span>
            </div>

            {/* Image Grid Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
              <div className="relative h-40 sm:h-48 rounded-xl overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=400&q=80"
                  alt="Banking sector"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 to-transparent"></div>
              </div>
              <div className="relative h-40 sm:h-48 rounded-xl overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&q=80"
                  alt="Construction sector"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 to-transparent"></div>
              </div>
              <div className="relative h-40 sm:h-48 rounded-xl overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80"
                  alt="Manufacturing sector"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 to-transparent"></div>
              </div>
              <div className="relative h-40 sm:h-48 rounded-xl overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80"
                  alt="Hospitality sector"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
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