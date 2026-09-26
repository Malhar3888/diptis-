import React from 'react';
import { motion } from 'motion/react';
import { Calculator, Zap, Users, Trophy } from 'lucide-react';
import { INSTITUTE_CONFIG } from '../data/instituteConfig';

export const TrustHighlights: React.FC = () => {
  const icons = [
    <Calculator className="w-6 h-6 text-blue-900" key="calc" />,
    <Zap className="w-6 h-6 text-amber-600" key="zap" />,
    <Users className="w-6 h-6 text-indigo-700" key="users" />,
    <Trophy className="w-6 h-6 text-emerald-700" key="trophy" />,
  ];

  return (
    <section className="py-12 bg-white border-y border-slate-200/80 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSTITUTE_CONFIG.trustPillars.map((pillar, idx) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all duration-200 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-blue-50 border border-slate-200/80 flex items-center justify-center transition-colors shadow-xs">
                  {icons[idx]}
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold font-mono text-slate-900 tabular-nums">
                    {pillar.metric}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {pillar.subtext}
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                {pillar.title}
              </h3>
              
              <div className="text-xs font-medium text-amber-700 mt-0.5">
                {pillar.subtitle}
              </div>

              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
