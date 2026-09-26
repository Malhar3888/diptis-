import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, MapPin, CheckCircle } from 'lucide-react';
import { INSTITUTE_CONFIG, TestimonialItem } from '../data/instituteConfig';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
            Parent Experiences
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            What Parents Say
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed" style={{ textWrap: 'balance' }}>
            Hear from Mumbai parents whose children have experienced renewed academic enthusiasm and mathematical confidence.
          </p>
        </div>

        {/* 4 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSTITUTE_CONFIG.testimonials.map((item: TestimonialItem, idx: number) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-md flex flex-col justify-between hover:shadow-xl hover:border-blue-200 transition-all duration-200 relative group"
            >
              <div>
                {/* Star rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(item.rating)].map((_, sIdx) => (
                    <Star key={sIdx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs text-slate-400 font-mono ml-1">5.0</span>
                </div>

                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-blue-100 mb-2" />

                {/* Testimonial Quote */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Lockup */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    {item.parentName}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium">
                    {item.childNameAndLevel}
                  </p>
                  <div className="flex items-center gap-1 text-[10px] text-slate-400 mt-0.5">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    <span>{item.location}</span>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0" title="Verified Parent Feedback">
                  <CheckCircle className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note on Testimonials */}
        <p className="text-[11px] text-center text-slate-400 mt-8 max-w-xl mx-auto">
          Feedback reflects representative parent experiences at Dipti's Pro Abacus. Reviews can be customized in the institute data configuration.
        </p>

      </div>
    </section>
  );
};
