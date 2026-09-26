import React from 'react';
import { MapPin, Navigation, Clock, Building, ExternalLink } from 'lucide-react';
import { INSTITUTE_CONFIG } from '../data/instituteConfig';

export const LocationSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
            Center Location
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Visit Our Institute
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed" style={{ textWrap: 'balance' }}>
            Centrally accessible across Mumbai, Maharashtra with dedicated, child-safe learning infrastructure and convenient transit connectivity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Location Details & Directions Button (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 rounded-3xl bg-white border border-slate-200 shadow-md space-y-6">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-900 flex items-center justify-center shrink-0">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {INSTITUTE_CONFIG.name}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {INSTITUTE_CONFIG.location.city}, {INSTITUTE_CONFIG.location.state}, {INSTITUTE_CONFIG.location.country}
                  </p>
                </div>
              </div>

              {/* Address Details */}
              <div className="space-y-4 pt-2 border-t border-slate-100 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-1" />
                  <div>
                    <strong className="text-slate-900 block font-semibold mb-0.5">Address:</strong>
                    <span>{INSTITUTE_CONFIG.location.addressDisplay}</span>
                    <p className="text-xs text-slate-400 mt-1 italic">
                      ({INSTITUTE_CONFIG.location.addressNote})
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-blue-700 shrink-0 mt-1" />
                  <div>
                    <strong className="text-slate-900 block font-semibold mb-0.5">Visiting Hours:</strong>
                    <span>{INSTITUTE_CONFIG.contact.officeHours}</span>
                    <span className="block text-slate-500 text-xs mt-0.5">
                      {INSTITUTE_CONFIG.contact.sundayHours}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Directions Action */}
            <div className="pt-4 border-t border-slate-100 space-y-3">
              <a
                href={INSTITUTE_CONFIG.location.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-blue-900 hover:bg-blue-800 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-200"
              >
                <Navigation className="w-4 h-4 text-amber-400" />
                <span>Get Directions on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
              <p className="text-[11px] text-slate-400 text-center">
                Please book an appointment in advance before visiting for batch trials.
              </p>
            </div>
          </div>

          {/* Right Column: Google Maps Embed Area (7 cols on lg) */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-slate-200 min-h-[380px] sm:min-h-[440px] relative">
            <iframe
              title="Dipti's Pro Abacus Institute Mumbai Location Map"
              src={INSTITUTE_CONFIG.location.googleMapsEmbedUrl}
              className="w-full h-full min-h-[380px] sm:min-h-[440px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Overlay pill indicator */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-200 shadow-md text-xs font-semibold text-slate-800 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Mumbai Training Center</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
