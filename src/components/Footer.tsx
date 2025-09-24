import { Link } from 'react-router-dom';
import { company } from '../data/company';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Team', href: '/team' },
    { name: 'Clients', href: '/clients' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-deep-navy text-white" role="contentinfo">
      <div className="section-padding container-max">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand and Contact */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">{company.brand}</h3>
              <p className="text-white text-sm leading-relaxed">
                {company.taglineLong}
              </p>
              <div className="space-y-2 text-sm">
                <p className="text-white">
                  <span className="font-medium">Phone:</span>{' '}
                  <a
                    href={`tel:${company.contact.phone}`}
                    className="hover:text-white transition-colors focus-visible:focus-visible"
                  >
                    {company.contact.phone}
                  </a>
                </p>
                <p className="text-white">
                  <span className="font-medium">Email:</span>{' '}
                  <a
                    href={`mailto:${company.contact.email}`}
                    className="hover:text-white transition-colors focus-visible:focus-visible"
                  >
                    {company.contact.email}
                  </a>
                </p>
                <p className="text-white">
                  <span className="font-medium">Website:</span>{' '}
                  <span className="text-white">{company.contact.website}</span>
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-white hover:text-lime-green transition-colors text-sm focus-visible:focus-visible"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Our Services</h3>
              <ul className="space-y-2 text-sm text-white">
                <li>Audit & Assurance</li>
                <li>Accounting & Bookkeeping</li>
                <li>Tax Services</li>
                <li>Regulatory & Legal Support</li>
                <li>Advisory & Consultancy</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-blue-gray py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-white text-sm">
              © {currentYear} {company.brand}. All rights reserved.
            </p>
            <p className="text-white text-sm">
              Serving businesses across {company.geography}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;