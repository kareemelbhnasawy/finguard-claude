import { useSEO, seoData } from '../lib/seo';
import { company } from '../data/company';

const Contact = () => {
  useSEO(seoData.contact);

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-8 right-8 w-20 h-20 bg-lime-green/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-8 left-8 w-16 h-16 bg-baby-blue/10 rounded-full blur-lg"></div>
        <div className="section-padding container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-navy mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Ready to discuss how we can support your business? Get in touch with our team today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="section-padding container-max">
          <div className="max-w-2xl mx-auto">
            {/* Contact Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-navy mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  Our team is ready to help you with expert audit, tax, and advisory services.
                  Contact us to discuss your specific needs and how we can support your business goals.
                </p>
              </div>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-3 bg-lime-green/10 rounded-lg">
                    <svg className="h-6 w-6 text-lime-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-navy">Phone</h3>
                    <a
                      href={`tel:${company.contact.phone}`}
                      className="text-gray-600 hover:text-lime-green transition-colors focus-visible:focus-visible"
                    >
                      {company.contact.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-3 bg-lime-green/10 rounded-lg">
                    <svg className="h-6 w-6 text-lime-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-navy">Email</h3>
                    <a
                      href={`mailto:${company.contact.email}`}
                      className="text-gray-600 hover:text-lime-green transition-colors focus-visible:focus-visible"
                    >
                      {company.contact.email}
                    </a>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-3 bg-lime-green/10 rounded-lg">
                    <svg className="h-6 w-6 text-lime-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-navy">Website</h3>
                    <span className="text-gray-600">{company.contact.website}</span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-3 bg-lime-green/10 rounded-lg">
                    <svg className="h-6 w-6 text-lime-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-navy">Serving</h3>
                    <span className="text-gray-600">{company.geography}</span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="pt-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={company.contact.ctas[0].href}
                    className="btn-primary inline-flex items-center justify-center"
                  >
                    {company.contact.ctas[0].label}
                    <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Quick Links */}
      <section className="py-16 bg-steel-blue">
        <div className="section-padding container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">How Can We Help?</h2>
            <p className="text-lg text-white max-w-2xl mx-auto">
              Explore our comprehensive range of services designed to support your business growth and compliance needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {company.services.slice(0, 6).map((service) => (
              <div
                key={service.id}
                className="bg-deep-navy p-8 rounded-lg shadow-sm border border-gray-100 text-center"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 text-sm mb-4">
                  {service.bullets.slice(0, 2).join(', ')}
                  {service.bullets.length > 2 && '...'}
                </p>
                <a
                  href={`/services#${service.id}`}
                  className="inline-flex items-center text-lime-green hover:text-lime-green/80 font-medium text-sm transition-colors focus-visible:focus-visible"
                >
                  Learn more
                  <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-16 bg-light-gray">
        <div className="section-padding container-max">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-navy mb-6">Business Hours</h2>
            <div className="bg-deep-navy p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-white">Monday - Thursday</span>
                  <span className="text-gray-300">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-white">Friday</span>
                  <span className="text-gray-300">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-white">Saturday - Sunday</span>
                  <span className="text-gray-300">Closed</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-300">
                  Emergency consultations available by appointment outside regular hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;