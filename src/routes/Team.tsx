import { useSEO, seoData } from '../lib/seo';
import { company } from '../data/company';
import TeamCard from '../components/TeamCard';

const Team = () => {
  useSEO(seoData.team);

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-white py-32">
        <div className="absolute -top-10 -left-10 w-96 h-96 bg-baby-blue/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-lime-green/8 rounded-full blur-3xl"></div>
        <div className="section-padding container-max relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-lime-green/10 border border-lime-green/20 text-xs font-semibold tracking-[0.2em] uppercase text-lime-green mb-6">
                <span className="w-2 h-2 bg-lime-green rounded-full"></span>
                Leadership Team
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-navy leading-tight mb-8 tracking-tight">
                Meet the experts who<br />guide Finguard forward
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Our team brings together executive leaders, sector specialists, and technical advisors with decades of collective experience across audit, tax, advisory, and cybersecurity.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-16">
              <div className="space-y-4 text-lg text-slate-600 bg-white rounded-2xl p-8 shadow-lg border border-slate-200/50">
                <h2 className="text-sm font-bold tracking-[0.2em] text-lime-green uppercase mb-4">Global Standards</h2>
                <p className="leading-relaxed">
                  Each partner and director pairs international credentials with hands-on knowledge of local and regional markets, ensuring every engagement is grounded in both global standards and practical insight.
                </p>
              </div>
              <div className="space-y-4 text-lg text-slate-600 bg-white rounded-2xl p-8 shadow-lg border border-slate-200/50">
                <h2 className="text-sm font-bold tracking-[0.2em] text-lime-green uppercase mb-4">Strategic Guidance</h2>
                <p className="leading-relaxed">
                  Whether supporting multinational organizations or ambitious local enterprises, our team provides guidance that inspires confidence, protects value, and uncovers strategic opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="relative py-32 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="section-padding container-max relative z-10">
          <div className="max-w-6xl mx-auto space-y-20">
            {company.team.map((member) => (
              <TeamCard
                key={member.name}
                name={member.name}
                role={member.role}
                credentials={member.credentials}
                bio={member.bio}
                image={member.image}
                imagePosition={(member as any).imagePosition}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
