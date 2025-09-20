import { useSEO, seoData } from '../lib/seo';
import { company } from '../data/company';
import SectorList from '../components/SectorList';

const Clients = () => {
  useSEO(seoData.clients);

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="section-padding container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-navy mb-6">Our Clients</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {company.clientsIntro}
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="section-padding container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="text-4xl font-bold text-navy mb-2">300+</div>
              <div className="text-lg text-gray-600">Companies Served</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="text-4xl font-bold text-teal mb-2">8</div>
              <div className="text-lg text-gray-600">Industry Sectors</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="text-4xl font-bold text-navy mb-2">2</div>
              <div className="text-lg text-gray-600">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Sectors */}
      <section className="py-16 bg-gray-50">
        <div className="section-padding container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Industries We Serve</h2>
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
      <section className="py-16">
        <div className="section-padding container-max">
          <div className="max-w-4xl mx-auto">
            <div className="bg-navy text-white rounded-lg p-12 text-center">
              <blockquote className="text-xl italic mb-6">
                "Working with {company.brand} has been instrumental in our growth. Their expertise in audit and advisory services
                has helped us navigate complex regulatory requirements while maintaining focus on our core business objectives."
              </blockquote>
              <div className="text-gray-300">
                - Satisfied Client
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Clients Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="section-padding container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy text-center mb-12">
              Why Clients Choose Finguard
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-teal/10 rounded-lg">
                    <svg className="h-6 w-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="ml-3 text-lg font-semibold text-navy">Industry Expertise</h3>
                </div>
                <p className="text-gray-600">
                  Deep understanding of sector-specific challenges and regulatory requirements across multiple industries.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-navy/10 rounded-lg">
                    <svg className="h-6 w-6 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="ml-3 text-lg font-semibold text-navy">Timely Delivery</h3>
                </div>
                <p className="text-gray-600">
                  Consistent track record of meeting deadlines and delivering quality work within agreed timeframes.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-teal/10 rounded-lg">
                    <svg className="h-6 w-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="ml-3 text-lg font-semibold text-navy">Personal Service</h3>
                </div>
                <p className="text-gray-600">
                  Direct access to senior professionals who understand your business and provide personalized attention.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-navy/10 rounded-lg">
                    <svg className="h-6 w-6 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="ml-3 text-lg font-semibold text-navy">Innovative Solutions</h3>
                </div>
                <p className="text-gray-600">
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