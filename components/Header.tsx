import React, { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#footer' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (location.pathname !== '/') {
      // If not on home page, navigate to home then scroll
      navigate(`/${href}`);
    } else {
      // If on home page, just scroll
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Update URL hash without jumping
        window.history.pushState(null, '', href);
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm py-4">
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo Image */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative w-10 h-10 overflow-hidden rounded-full border border-white/10 group-hover:border-mv-gold/50 transition-colors">
            {/* Color Correcting Green Logo to Blue Theme (Hue Rotate ~110deg) */}
            <img
              src="/logo.png"
              alt="MV Insurance"
              className="w-full h-full object-cover"
              style={{ filter: 'hue-rotate(110deg) brightness(1.1) saturate(1.2)' }}
            />
          </div>
          <div>
            <h1 className="font-heading font-bold text-xl leading-none text-mv-navy tracking-wide group-hover:text-mv-primary transition-colors">
              My Vehicle Insurance
            </h1>
            <p className="text-[10px] text-slate-500 font-medium tracking-wider uppercase">
              Trusted POSP
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-medium text-sm text-slate-600 hover:text-mv-primary transition-colors cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/918856979618?text=I%20am%20interested%20in%20a%20vehicle%20insurance%20quote"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#20bd5a] transition-all duration-300 shadow-sm hover:shadow-md"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle size={20} fill="white" />
            </a>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-mv-blue"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 py-6' : 'max-h-0 py-0'
          }`}
      >
        <div className="container mx-auto px-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-mv-blue font-medium text-lg py-2 border-b border-gray-50"
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:+918856979618"
            className="mt-2 w-full bg-mv-blue text-white text-center py-3 rounded-xl font-heading font-bold"
          >
            Call Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;