import { useSEO, seoData } from '../lib/seo';
import { company } from '../data/company';
import ValueCard from '../components/ValueCard';

const About = () => {
  useSEO(seoData.about);

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="section-padding container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-navy mb-6">About Finguard</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {company.about}
            </p>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 bg-light-gray">
        <div className="section-padding container-max">
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
      <section className="py-16 bg-white">
        <div className="section-padding container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These values shape our culture, guide our decisions, and define our relationships with clients and colleagues.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {company.values.map((value, index) => (
              <ValueCard key={index} title={value.title} blurb={value.blurb} />
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
            <h2 className="text-3xl font-bold text-white mb-6">Serving the Region</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Our expertise spans across {company.geography}, where we've built a reputation for excellence
              and reliability in the financial services sector. We understand the unique regulatory landscapes
              and business environments of these dynamic markets.
            </p>
            <div className="flex justify-center space-x-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-lime-green/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-lime-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-white">Egypt</h3>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-lime-green/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-lime-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-white">Saudi Arabia</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;