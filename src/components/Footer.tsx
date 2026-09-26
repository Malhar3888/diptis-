import React from 'react';
import { Calculator, Phone, Mail, MapPin, MessageSquare, Instagram, Facebook, Youtube, ArrowUp } from 'lucide-react';
import { INSTITUTE_CONFIG } from '../data/instituteConfig';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Institute Brand & Vision (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-blue-900 border border-blue-700/60 flex items-center justify-center text-amber-400 shadow-sm">
                <Calculator className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                {INSTITUTE_CONFIG.name}
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Building stronger minds through Abacus and Mental Maths. Nurturing rapid mental calculations, laser focus, photographic memory, and academic confidence in children.
            </p>

            <div className="pt-2 text-xs text-slate-500">
              <span>Center: </span>
              <strong className="text-slate-300">Mumbai, Maharashtra, India</strong>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={INSTITUTE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-pink-600/20 text-slate-400 hover:text-pink-400 border border-slate-800 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={INSTITUTE_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-blue-600/20 text-slate-400 hover:text-blue-400 border border-slate-800 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={INSTITUTE_CONFIG.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-red-600/20 text-slate-400 hover:text-red-400 border border-slate-800 flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={INSTITUTE_CONFIG.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-emerald-600/20 text-slate-400 hover:text-emerald-400 border border-slate-800 flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#home" className="hover:text-amber-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#programs" className="hover:text-amber-400 transition-colors">Programs</a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-amber-400 transition-colors">Benefits</a>
              </li>
              <li>
                <a href="#batches" className="hover:text-amber-400 transition-colors">Batches</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-400 transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Programs (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Programs
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#programs" className="hover:text-amber-400 transition-colors">Abacus Foundation</a>
              </li>
              <li>
                <a href="#programs" className="hover:text-amber-400 transition-colors">Abacus Level Program</a>
              </li>
              <li>
                <a href="#programs" className="hover:text-amber-400 transition-colors">Mental Maths (Anzan)</a>
              </li>
              <li>
                <a href="#programs" className="hover:text-amber-400 transition-colors">Speed Calculation</a>
              </li>
              <li>
                <a href="#batches" className="hover:text-amber-400 transition-colors">Weekend Batches</a>
              </li>
              <li>
                <a href="#batches" className="hover:text-amber-400 transition-colors">1-on-1 Personalized Mentoring</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Contact Us
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{INSTITUTE_CONFIG.location.addressDisplay}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${INSTITUTE_CONFIG.contact.phoneCallable}`} className="hover:text-white transition-colors">
                  {INSTITUTE_CONFIG.contact.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${INSTITUTE_CONFIG.contact.email}`} className="hover:text-white transition-colors truncate">
                  {INSTITUTE_CONFIG.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${INSTITUTE_CONFIG.contact.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  WhatsApp: +91 98200 12345
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 {INSTITUTE_CONFIG.name}. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400">Abacus & Mental Mathematics Mumbai</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
              title="Back to Top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
