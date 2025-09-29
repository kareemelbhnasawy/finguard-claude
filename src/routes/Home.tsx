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

      {/* Values Section */}
      <section className="py-16 bg-light-gray relative">
        {/* Decorative Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 bg-lime-green rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 bg-baby-blue rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-navy rounded-full blur-3xl"></div>
        </div>
        <div className="section-padding container-max relative">
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
      <section className="py-16 bg-white">
        <div className="section-padding container-max">
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

      {/* Social Proof */}
      <section className="py-16 bg-light-gray text-gray-600">
        <div className="section-padding container-max">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-navy">Trusted by Industry Leaders</h2>
            <p className="text-xl text-gray-600 mb-8">
              Serving 300+ companies across multiple sectors
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-navy text-white px-4 py-2 rounded-full">Banking</span>
              <span className="bg-navy text-white px-4 py-2 rounded-full">Construction</span>
              <span className="bg-navy text-white px-4 py-2 rounded-full">Manufacturing</span>
              <span className="bg-navy text-white px-4 py-2 rounded-full">Tourism</span>
              <span className="bg-navy text-white px-4 py-2 rounded-full">Education</span>
              <span className="bg-navy text-white px-4 py-2 rounded-full">Agriculture</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;