import React from 'react';
import { motion } from 'motion/react';
import { ClipboardCheck, Sparkles, BookMarked, Award } from 'lucide-react';
import { INSTITUTE_CONFIG } from '../data/instituteConfig';

export const HowItWorksSection: React.FC = () => {
  const stepIcons = [
    <ClipboardCheck className="w-6 h-6 text-blue-900" key="step-1" />,
    <Sparkles className="w-6 h-6 text-amber-600" key="step-2" />,
    <BookMarked className="w-6 h-6 text-indigo-600" key="step-3" />,
    <Award className="w-6 h-6 text-emerald-600" key="step-4" />,
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
            Learning Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How Your Child Learns
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed" style={{ textWrap: 'balance' }}>
            A structured, joyful pathway from the very first physical bead movement to lightning-fast mental mathematics.
          </p>
        </div>

        {/* 4-Step Timeline with Connecting Line on Desktop */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-20 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-blue-200 via-amber-200 to-emerald-200 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {INSTITUTE_CONFIG.learningSteps.map((stepItem, idx) => (
              <motion.div
                key={stepItem.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-white lg:bg-transparent border border-slate-200/80 lg:border-none shadow-xs lg:shadow-none hover:bg-slate-50/80 transition-colors"
              >
                {/* Step Number Circle with Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-white border-2 border-slate-200 shadow-md flex items-center justify-center group-hover:border-blue-900 transition-colors">
                    {stepIcons[idx]}
                  </div>
                  
                  {/* Floating Number Badge */}
                  <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-blue-950 text-amber-400 font-mono text-xs font-bold flex items-center justify-center shadow-md">
                    {stepItem.step}
                  </span>
                </div>

                {/* Step Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {stepItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xs">
                  {stepItem.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Interactive Milestone Note */}
        <div className="mt-14 max-w-2xl mx-auto p-4 rounded-2xl bg-blue-50/70 border border-blue-100 flex items-center justify-center gap-3 text-center text-xs font-medium text-blue-950">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <span>Each milestone is accompanied by progress reports and parent-teacher alignment.</span>
        </div>

      </div>
    </section>
  );
};
