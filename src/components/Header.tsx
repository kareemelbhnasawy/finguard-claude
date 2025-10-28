import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Team', href: '/team' },
    { name: 'Clients', href: '/clients' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActivePath = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <header className="bg-steel-blue/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-white/10">
      <nav className="section-padding container-max" aria-label="Main navigation">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center hover:opacity-90 transition-all duration-300 focus-visible:focus-visible"
              aria-label="Finguard home"
            >
              <img
                src="/finguard-logo.png"
                alt="Finguard Logo"
                className="h-10 sm:h-12 md:h-14 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-2 text-sm font-semibold transition-all duration-300 focus-visible:focus-visible rounded-lg relative ${
                    isActivePath(item.href)
                      ? 'text-lime-green bg-lime-green/10'
                      : 'text-white hover:text-lime-green hover:bg-white/5'
                  }`}
                  aria-current={isActivePath(item.href) ? 'page' : undefined}
                >
                  {item.name}
                  {isActivePath(item.href) && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-lime-green rounded-full"></span>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-3 rounded-lg text-white hover:text-lime-green hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-lime-green transition-colors"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-4 pb-6 space-y-2 sm:px-3 bg-slate-blue-gray/50 backdrop-blur-sm border-t border-white/10 rounded-b-2xl mt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-4 py-3 text-base font-semibold transition-all duration-300 focus-visible:focus-visible rounded-lg ${
                    isActivePath(item.href)
                      ? 'text-lime-green bg-lime-green/10 border-l-4 border-lime-green'
                      : 'text-white hover:text-lime-green hover:bg-white/5'
                  }`}
                  aria-current={isActivePath(item.href) ? 'page' : undefined}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;