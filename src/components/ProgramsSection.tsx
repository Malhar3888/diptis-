import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Layers, Brain, Gauge, Check, ArrowRight, Clock, Users } from 'lucide-react';
import { INSTITUTE_CONFIG, ProgramItem } from '../data/instituteConfig';

interface ProgramsSectionProps {
  onOpenEnquiryModal: (preselectedProgram?: string) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onOpenEnquiryModal }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'foundation':
        return <Sparkles className="w-6 h-6 text-amber-500" />;
      case 'level-program':
        return <Layers className="w-6 h-6 text-blue-600" />;
      case 'mental-maths':
        return <Brain className="w-6 h-6 text-indigo-600" />;
      case 'speed-calculation':
        return <Gauge className="w-6 h-6 text-emerald-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-amber-500" />;
    }
  };

  return (
    <section id="programs" className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
            Curriculum & Levels
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Abacus Programs
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed" style={{ textWrap: 'balance' }}>
            Thoughtfully structured developmental stages tailored for children from early kindergarten to high school arithmetic excellence.
          </p>
        </div>

        {/* 4 Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">
          {INSTITUTE_CONFIG.programs.map((program: ProgramItem, idx: number) => {
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className={`relative rounded-3xl bg-white border flex flex-col justify-between transition-all duration-200 overflow-hidden ${
                  program.popular
                    ? 'border-blue-500/80 shadow-xl ring-2 ring-blue-500/20'
                    : 'border-slate-200/90 hover:border-slate-300 shadow-md hover:shadow-xl'
                }`}
              >
                {/* Popular highlight bar */}
                {program.popular && (
                  <div className="bg-gradient-to-r from-blue-900 to-indigo-900 py-1.5 px-4 text-center">
                    <span className="text-[11px] font-bold tracking-wider uppercase text-amber-300">
                      Most Enrolled Program
                    </span>
                  </div>
                )}

                <div className="p-6 sm:p-7 flex-1 flex flex-col">
                  {/* Top: Icon & Suitable For */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100/90 border border-slate-200/80 flex items-center justify-center shadow-2xs">
                      {getIcon(program.id)}
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] font-semibold text-slate-500 block">
                        Level
                      </span>
                      <span className="text-xs font-bold text-amber-700">
                        {program.badge}
                      </span>
                    </div>
                  </div>

                  {/* Program Title */}
                  <h3 className="text-xl font-bold text-slate-900 leading-tight mb-2">
                    {program.name}
                  </h3>

                  {/* Suitable Age indicator */}
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-3">
                    <Users className="w-3.5 h-3.5 text-slate-400" />
                    <span>Age: <strong className="text-slate-700">{program.ageGroup}</strong></span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {program.description}
                  </p>

                  {/* Curriculum Highlights */}
                  <div className="mt-auto space-y-2.5 pt-4 border-t border-slate-100">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Program Highlights:
                    </span>
                    {program.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Footer with Enquire CTA */}
                <div className="p-6 pt-0 bg-white">
                  <div className="pt-4 border-t border-slate-100">
                    <button
                      onClick={() => onOpenEnquiryModal(program.name)}
                      className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all duration-200 ${
                        program.popular
                          ? 'bg-blue-900 hover:bg-blue-800 text-white shadow-md hover:shadow-lg'
                          : 'bg-slate-100 hover:bg-blue-900 text-slate-800 hover:text-white'
                      }`}
                    >
                      <span>Enquire Now</span>
                      <ArrowRight className="w-4 h-4 text-amber-400" />
                    </button>
                    <p className="text-[10px] text-center text-slate-400 mt-2">
                      Personalized syllabus & timing confirmed on enquiry
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
