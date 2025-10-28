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
      <section className="py-32 md:py-40 lg:py-48 relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-white">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-lime-green/8 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-baby-blue/10 rounded-full blur-3xl animate-float-slow" style={{animationDelay: '1.5s'}}></div>

        <div className="section-padding container-max relative z-10">
          <div className="text-center mb-20 md:mb-24">
            <span className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-lime-green/15 backdrop-blur-sm border border-lime-green/30 text-xs font-bold tracking-wider uppercase text-lime-green mb-8 shadow-lg">
              <span className="w-2.5 h-2.5 bg-lime-green rounded-full animate-pulse"></span>
              Our Foundation
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-navy mb-8 tracking-tight leading-tight">
              Our Core <span className="bg-gradient-to-r from-lime-green to-green-500 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-2xl md:text-3xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
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

      {/* Stats Divider Section */}
      <section className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-br from-deep-navy via-steel-blue to-slate-blue-gray">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-lime-green/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-baby-blue/10 rounded-full blur-3xl"></div>

        <div className="section-padding container-max relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-lime-green">300+</div>
              <div className="text-sm md:text-base text-white/90 font-medium">Active Clients</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-lime-green">$2.5B+</div>
              <div className="text-sm md:text-base text-white/90 font-medium">Assets Managed</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-lime-green">25+</div>
              <div className="text-sm md:text-base text-white/90 font-medium">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-lime-green">99%</div>
              <div className="text-sm md:text-base text-white/90 font-medium">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=80"
            alt="Modern office workspace"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/97 via-white/95 to-white/97"></div>
        </div>

        {/* Diagonal Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 40px,
              #15354A 40px,
              #15354A 41px
            )`
          }}></div>
        </div>

        <div className="section-padding container-max relative z-10">
          {/* Text Container with Background Panel */}
          <div className="text-center mb-20 md:mb-24 max-w-5xl mx-auto">
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-10 md:p-14 shadow-2xl border border-slate-200/60">
              <span className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-lime-green/15 backdrop-blur-sm border border-lime-green/30 text-xs font-bold tracking-wider uppercase text-lime-green mb-8 shadow-lg">
                <span className="w-2.5 h-2.5 bg-lime-green rounded-full animate-pulse"></span>
                What We Do
              </span>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-navy mb-8 tracking-tight leading-tight">
                Our <span className="bg-gradient-to-r from-lime-green to-green-500 bg-clip-text text-transparent">Services</span>
              </h2>
              <p className="text-2xl md:text-3xl text-slate-700 max-w-4xl mx-auto leading-relaxed font-light">
                {company.servicesIntro}
              </p>
            </div>
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
      <section className="bg-gradient-to-br from-deep-navy via-slate-blue-gray to-deep-navy relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-lime-green/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-baby-blue/10 rounded-full blur-3xl"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative h-96 sm:h-[32rem] lg:h-auto order-1 lg:order-none group overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80"
              alt="Financial analysis and reporting"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-deep-navy/60 to-deep-navy/30"></div>
          </div>
          <div className="flex items-center justify-center p-8 sm:p-12 md:p-16 lg:p-20 order-2 lg:order-none relative z-10">
            <div className="max-w-xl space-y-6">
              <span className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-lime-green/20 border border-lime-green/30 text-xs font-semibold tracking-[0.2em] uppercase text-lime-green">
                Our Commitment
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">Precision You Can Trust</h2>
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
                Our team of certified professionals brings decades of combined experience across audit,
                tax, and advisory services. We deliver accurate, reliable insights that help you make
                informed business decisions.
              </p>
              <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
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
          <div className="text-center max-w-6xl mx-auto">
            <span className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 text-xs font-bold tracking-wider uppercase text-lime-green mb-10 shadow-2xl">
              <span className="w-2.5 h-2.5 bg-lime-green rounded-full animate-pulse"></span>
              Client Success
            </span>
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-8 text-white leading-tight tracking-tight">
              Trusted by Industry <span className="bg-gradient-to-r from-lime-green to-green-400 bg-clip-text text-transparent">Leaders</span>
            </h2>
            <p className="text-2xl sm:text-3xl md:text-4xl text-white/90 mb-16 font-light leading-relaxed">
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