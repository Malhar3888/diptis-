import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Brain, Sparkles, Compass, Lightbulb, Activity, ArrowRight } from 'lucide-react';
import { INSTITUTE_CONFIG } from '../data/instituteConfig';

interface BenefitsSectionProps {
  onOpenEnquiryModal: () => void;
}

export const BenefitsSection: React.FC<BenefitsSectionProps> = ({ onOpenEnquiryModal }) => {
  return (
    <section id="benefits" className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
            Holistic Growth
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            More Than Just Calculations
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed" style={{ textWrap: 'balance' }}>
            While rapid arithmetic is the most visible outcome, Abacus training fundamentally reshapes cognitive discipline, memory capacity, and academic resilience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Educational Dual-Brain Diagram (5 cols on lg) */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xl space-y-6"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center">
                    <Brain className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 leading-tight">Whole Brain Activation</h4>
                    <span className="text-xs text-slate-500">Bilateral Neural Synchronization</span>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded-md">
                  Dual Core
                </span>
              </div>

              {/* Dual Brain Hemispheres Graphic */}
              <div className="grid grid-cols-2 gap-4">
                {/* Left Hemisphere */}
                <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100 space-y-2">
                  <div className="text-xs font-bold text-blue-950 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-blue-700" />
                    Left Brain
                  </div>
                  <div className="text-[11px] text-blue-800 font-medium">Logic & Analysis</div>
                  <ul className="text-xs text-slate-600 space-y-1.5 pt-1">
                    <li>• Number sequences</li>
                    <li>• Formula calculation</li>
                    <li>• Deductive reasoning</li>
                    <li>• Analytical focus</li>
                  </ul>
                </div>

                {/* Right Hemisphere */}
                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-100 space-y-2">
                  <div className="text-xs font-bold text-amber-950 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-600" />
                    Right Brain
                  </div>
                  <div className="text-[11px] text-amber-800 font-medium">Visualization & Memory</div>
                  <ul className="text-xs text-slate-600 space-y-1.5 pt-1">
                    <li>• Bead imagery (Anzan)</li>
                    <li>• Spatial recall</li>
                    <li>• Photographic memory</li>
                    <li>• Creative reflexes</li>
                  </ul>
                </div>
              </div>

              {/* Scientific Takeaway */}
              <div className="p-4 rounded-xl bg-slate-900 text-white space-y-1">
                <div className="text-xs font-semibold text-amber-400 flex items-center gap-1.5">
                  <Lightbulb className="w-3.5 h-3.5" />
                  <span>The Neuro-Visual Connection</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Moving beads with fingers activates sensory nerves directly stimulating cortex development during ages 5 to 15.
                </p>
              </div>

              <button
                onClick={onOpenEnquiryModal}
                className="w-full py-3 px-4 rounded-xl bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-colors"
              >
                <span>Book a Child Skill Assessment</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>
            </motion.div>
          </div>

          {/* Right Column: 8 Benefits Checklist (7 cols on lg) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {INSTITUTE_CONFIG.benefits.map((benefit, idx) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:border-blue-200 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 leading-tight">
                        {benefit.title}
                      </h4>
                      <p className="text-xs text-slate-600 mt-1 leading-snug">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quote banner */}
            <div className="mt-8 p-5 rounded-2xl bg-white border border-slate-200/90 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                <Activity className="w-5 h-5" />
              </div>
              <p className="text-xs sm:text-sm text-slate-600">
                Children trained in Soroban consistently demonstrate higher academic self-efficacy and superior problem-solving speeds in standard school examinations.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
