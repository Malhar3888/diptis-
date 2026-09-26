import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Brain, Zap, Target, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { InteractiveAbacus } from './InteractiveAbacus';

interface HeroSectionProps {
  onOpenEnquiryModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenEnquiryModal }) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-blue-50/60 via-slate-50 to-white">
      {/* Subtle geometric background patterns */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-blue-200/50 blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-80 h-80 rounded-full bg-amber-100/60 blur-3xl" />
        <div className="absolute -bottom-20 right-1/4 w-72 h-72 rounded-full bg-sky-100/50 blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Highlights & CTAs (7 cols on lg) */}
          <div className="lg:col-span-6 xl:col-span-7 space-y-6 text-left">
            
            {/* Sub-kicker / Category Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-blue-900 tracking-wide"
            >
              <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-ping" />
              <span>Abacus</span>
              <span className="text-amber-500 font-bold">•</span>
              <span>Mental Maths</span>
              <span className="text-amber-500 font-bold">•</span>
              <span>Brain Development</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]"
              style={{ textWrap: 'balance' }}
            >
              Build a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-700 to-amber-600">Faster Mind</span> with Abacus
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed"
            >
              Helping children develop faster calculation, concentration, memory and confidence through structured Abacus and Mental Maths training.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <button
                onClick={onOpenEnquiryModal}
                className="flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-semibold text-white bg-blue-900 hover:bg-blue-800 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 active:translate-y-0"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-5 h-5 text-amber-400" />
              </button>

              <button
                onClick={() => scrollToSection('programs')}
                className="flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-700 hover:text-blue-900 bg-white hover:bg-slate-50 border border-slate-200/90 rounded-xl shadow-sm hover:shadow transition-all duration-200"
              >
                <span>Explore Programs</span>
              </button>
            </motion.div>

            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="pt-4 border-t border-slate-200/80 flex items-center gap-2 text-xs md:text-sm font-medium text-slate-600 flex-wrap"
            >
              <div className="flex items-center gap-1.5 text-emerald-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Trusted Learning</span>
              </div>
              <span className="text-slate-300 font-bold">•</span>
              <div className="flex items-center gap-1.5 text-blue-900">
                <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0" />
                <span>Personalized Attention</span>
              </div>
              <span className="text-slate-300 font-bold">•</span>
              <div className="flex items-center gap-1.5 text-amber-700">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Skill-Based Training</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Hero Visual & Floating Cards (5 cols on lg) */}
          <div className="lg:col-span-6 xl:col-span-5 relative">
            
            {/* Visual Container with Floating Highlights */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              {/* Interactive Soroban Abacus Instrument */}
              <div className="relative z-10">
                <InteractiveAbacus />
              </div>

              {/* Floating Card 1: Better Concentration (Top Right) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="hidden sm:flex absolute -top-6 -right-4 z-20 items-center gap-2.5 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-xl shadow-lg border border-slate-200/80 text-xs font-semibold text-slate-800 animate-bounce duration-1000"
                style={{ animationDuration: '4s' }}
              >
                <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center">
                  <Target className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-slate-900 font-bold">Better Concentration</div>
                  <div className="text-[10px] text-slate-500 font-normal">Sustained attention span</div>
                </div>
              </motion.div>

              {/* Floating Card 2: Faster Calculations (Bottom Left) */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="hidden sm:flex absolute -bottom-6 -left-4 z-20 items-center gap-2.5 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-xl shadow-lg border border-slate-200/80 text-xs font-semibold text-slate-800"
              >
                <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-slate-900 font-bold">Faster Calculations</div>
                  <div className="text-[10px] text-slate-500 font-normal">Mental speed arithmetic</div>
                </div>
              </motion.div>

              {/* Floating Card 3: Improved Memory (Bottom Right) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="hidden md:flex absolute top-1/2 -right-8 z-20 items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg border border-slate-200/80 text-xs font-semibold text-slate-800"
              >
                <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
                  <Brain className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-slate-900 font-bold">Improved Memory</div>
                  <div className="text-[10px] text-slate-500 font-normal">Dual-brain recall</div>
                </div>
              </motion.div>

            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};
