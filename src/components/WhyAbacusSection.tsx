import React from 'react';
import { motion } from 'motion/react';
import { Zap, Target, Brain, Calculator, Compass, Sparkles } from 'lucide-react';
import { INSTITUTE_CONFIG } from '../data/instituteConfig';

export const WhyAbacusSection: React.FC = () => {
  const icons = [
    <Zap className="w-6 h-6 text-amber-600" key="zap" />,
    <Target className="w-6 h-6 text-blue-700" key="target" />,
    <Brain className="w-6 h-6 text-indigo-600" key="brain" />,
    <Calculator className="w-6 h-6 text-emerald-600" key="calc" />,
    <Compass className="w-6 h-6 text-sky-600" key="compass" />,
    <Sparkles className="w-6 h-6 text-rose-600" key="sparkle" />,
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
            Cognitive Advantages
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Learn Abacus?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed" style={{ textWrap: 'balance' }}>
            Abacus is more than an ancient arithmetic tool; it is a proven neuro-development program that unlocks your child's complete cognitive potential during their formative years.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-left">
          {INSTITUTE_CONFIG.whyAbacus.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -5 }}
              className="p-7 rounded-2xl bg-slate-50/70 hover:bg-white border border-slate-200/80 hover:border-blue-200/80 hover:shadow-xl transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                {/* Icon box with soft gradient */}
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-200">
                  {icons[idx]}
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono font-semibold text-slate-400">
                    0{idx + 1}.
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Sub-divider link indicator */}
              <div className="mt-5 pt-4 border-t border-slate-200/60 flex items-center text-xs font-semibold text-blue-900/80 group-hover:text-amber-600 transition-colors">
                <span>Cognitive Milestone</span>
                <span className="ml-auto font-mono text-[11px] text-slate-400">Lifelong Skill</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
