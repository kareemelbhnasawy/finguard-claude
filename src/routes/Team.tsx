import { useSEO, seoData } from '../lib/seo';
import { company } from '../data/company';
import TeamCard from '../components/TeamCard';

const Team = () => {
  useSEO(seoData.team);

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-deep-navy via-slate-blue-gray to-deep-navy relative overflow-hidden">
        {/* Enhanced Decorative Elements */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-lime-green/20 rounded-full blur-xl float-animation glow-green"></div>
        <div className="absolute bottom-10 left-10 w-16 h-16 bg-baby-blue/20 rounded-full blur-lg pulse-glow" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-lime-green/15 rounded-full blur-md float-animation" style={{animationDelay: '0.5s'}}></div>
        <div className="section-padding container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white mb-6 drop-shadow-2xl">Our Team</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Meet our experienced professionals who bring decades of expertise in audit, tax, and advisory services.
              Our team combines deep technical knowledge with a client-focused approach to deliver exceptional results.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 bg-white relative">
        <div className="section-padding container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {company.team.map((member, index) => (
              <TeamCard
                key={index}
                name={member.name}
                credentials={member.credentials}
                bio={member.bio}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-16 bg-light-gray relative">
        <div className="section-padding container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-navy mb-8">What Drives Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-lime-green/30 to-lime-green/10 rounded-full flex items-center justify-center mx-auto mb-4 glow-green pulse-glow">
                  <svg className="w-8 h-8 text-lime-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">Continuous Learning</h3>
                <p className="text-gray-600">
                  We stay current with evolving regulations, technologies, and best practices to serve our clients better.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-lime-green/30 to-lime-green/10 rounded-full flex items-center justify-center mx-auto mb-4 glow-green pulse-glow">
                  <svg className="w-8 h-8 text-lime-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">Client Partnership</h3>
                <p className="text-gray-600">
                  We build lasting relationships based on trust, transparency, and a deep understanding of client needs.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-lime-green/30 to-lime-green/10 rounded-full flex items-center justify-center mx-auto mb-4 glow-green pulse-glow">
                  <svg className="w-8 h-8 text-lime-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">Excellence in Delivery</h3>
                <p className="text-gray-600">
                  We are committed to delivering high-quality work that exceeds expectations and drives measurable results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16 bg-gradient-to-br from-deep-navy via-slate-blue-gray to-deep-navy relative overflow-hidden">
        {/* Enhanced Decorative Elements */}
        <div className="absolute top-20 left-20 w-24 h-24 bg-baby-blue/20 rounded-full blur-xl float-animation glow-blue"></div>
        <div className="absolute bottom-20 right-20 w-18 h-18 bg-lime-green/20 rounded-full blur-lg pulse-glow" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-baby-blue/15 rounded-full blur-md float-animation" style={{animationDelay: '0.7s'}}></div>
        <div className="section-padding container-max">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Join Our Growing Team</h2>
            <p className="text-lg text-gray-300 mb-8">
              We're always looking for talented professionals who share our commitment to excellence and client service.
              If you're passionate about making a difference in the financial services industry, we'd love to hear from you.
            </p>
            <a
              href={`mailto:${company.contact.email}?subject=Career Opportunities`}
              className="btn-primary inline-flex items-center"
            >
              Explore Opportunities
              <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;