import teamData from './team.json';
import clientsData from './clients.json';

export const company = {
  brand: "Finguard",
  taglineShort: "Audit, Tax & Advisory Services",
  taglineLong: "Empowering businesses with trusted audit, tax, and advisory services.",
  geography: "Egypt and Saudi Arabia",
  contact: {
    phone: "+20 23 836 299",
    email: "info@finguardint.com",
    website: "www.Finguardint.com",
    ctas: [{ label: "Contact Us", href: "mailto:info@finguardint.com" }, { label: "Explore Services", href: "/services" }]
  },
  about:
    "Finguard is a trusted partner for businesses across Egypt and Saudi Arabia, delivering expert Audit, Tax, Advisory, and Financial Services. We combine deep industry knowledge with a client-focused approach to provide solutions that drive growth, strengthen compliance, and build long-term trust.",
  mission:
    "To provide businesses with accurate, reliable, and innovative financial solutions that enable sustainable growth and informed decision-making.",
  vision:
    "To be the leading regional firm recognized for excellence, trust, and innovation in audit, tax, and advisory services.",
  values: [
    { title: "Trust", blurb: "We foster lasting relationships built on transparency and reliability." },
    { title: "Integrity", blurb: "We uphold the highest ethical standards in everything we do." },
    { title: "Excellence", blurb: "We deliver precise, high-quality solutions tailored to client needs." },
    { title: "Innovation", blurb: "We embrace modern solutions to meet evolving business challenges." },
    { title: "Commitment", blurb: "We dedicate ourselves to supporting clients' long-term success." }
  ],
  servicesIntro:
    "We provide comprehensive financial, audit, and advisory support to help organizations operate with confidence and achieve measurable results.",
  services: [
    {
      id: "audit-assurance",
      title: "Audit & Assurance",
      bullets: [
        "Statutory and Regulatory Audit",
        "Internal Control Review",
        "Forensic and Accountant's Report",
        "Independent Accountant's Report"
      ]
    },
    {
      id: "accounting-bookkeeping",
      title: "Accounting & Bookkeeping",
      bullets: [
        "IFRS compliance",
        "Reconciliations",
        "Dashboards",
        "Management reporting"
      ]
    },
    {
      id: "tax-services",
      title: "Tax Services",
      bullets: [
        "VAT and withholding compliance",
        "Tax planning",
        "Group restructuring",
        "Due diligence",
        "Advisory for foreign investors"
      ]
    },
    {
      id: "regulatory-legal",
      title: "Regulatory & Legal Support",
      bullets: [
        "Social insurance compliance",
        "Labor law support",
        "Contract drafting",
        "Trademark registration"
      ]
    },
    {
      id: "advisory-consultancy",
      title: "Advisory & Consultancy",
      bullets: [
        "Financial due diligence",
        "IFRS model development",
        "Risk management",
        "Organizational performance improvements"
      ]
    }
  ],
  team: teamData,
  clientsIntro:
    "We proudly serve over 300 companies across banking, construction, manufacturing, tourism, education, and agriculture. From multinational corporations to fast-growing enterprises, we provide tailored solutions that drive measurable results and sustained growth.",
  clients: clientsData
};
