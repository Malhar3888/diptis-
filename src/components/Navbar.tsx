import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calculator, ArrowRight } from 'lucide-react';
import { INSTITUTE_CONFIG } from '../data/instituteConfig';

interface NavbarProps {
  onOpenEnquiryModal: (preselectedProgram?: string, preselectedBatch?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiryModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Programs', href: '#programs' },
    { label: 'Benefits', href: '#benefits' },
    { label: 'Batches', href: '#batches' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav border-b border-slate-200/80 shadow-sm py-3'
          : 'bg-white/95 md:bg-white/80 backdrop-blur-md border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Wordmark (Zone 1) */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-950 flex items-center justify-center text-amber-400 shadow-md group-hover:scale-105 transition-transform duration-200">
              <Calculator className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold tracking-tight text-slate-900 leading-tight">
                {INSTITUTE_CONFIG.name}
              </span>
              <span className="text-[11px] font-medium text-slate-500 tracking-wider uppercase">
                {INSTITUTE_CONFIG.location.city} · Mental Maths
              </span>
            </div>
          </a>

          {/* Nav Links (Zone 2) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="hover:text-blue-900 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-amber-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Primary Action (Zone 3) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${INSTITUTE_CONFIG.contact.phoneCallable}`}
              className="hidden xl:flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-blue-900 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors"
              title="Call Institute Admissions"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>{INSTITUTE_CONFIG.contact.phoneDisplay}</span>
            </a>

            <button
              onClick={() => onOpenEnquiryModal()}
              className="flex items-center gap-2 px-4 py-2.5 text-xs md:text-sm font-semibold text-white bg-blue-900 hover:bg-blue-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 whitespace-nowrap active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => onOpenEnquiryModal()}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-blue-900 rounded-lg shadow-sm"
            >
              Enquire
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-800 hover:bg-slate-50 hover:text-blue-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-5 pt-4 border-t border-slate-100 space-y-3">
            <a
              href={`tel:${INSTITUTE_CONFIG.contact.phoneCallable}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-slate-700 bg-slate-100 rounded-xl hover:bg-slate-200 transition-colors"
            >
              <Phone className="w-4 h-4 text-amber-500" />
              <span>Call: {INSTITUTE_CONFIG.contact.phoneDisplay}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiryModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-blue-900 hover:bg-blue-800 rounded-xl shadow-md transition-colors"
            >
              <span>Enquire for Admissions</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
