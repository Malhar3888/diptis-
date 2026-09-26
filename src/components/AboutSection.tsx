import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Award, HeartHandshake, MapPin, X, BookOpen, Sparkles, GraduationCap } from 'lucide-react';
import { INSTITUTE_CONFIG } from '../data/instituteConfig';

interface AboutSectionProps {
  onOpenEnquiryModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenEnquiryModal }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const checklistItems = [
    { title: 'Experienced guidance', desc: 'Certified trainers with passionate dedication to early math development' },
    { title: 'Child-friendly learning', desc: 'Game-based, supportive environment where children love attending classes' },
    { title: 'Structured levels', desc: 'Gradual, milestone-based curriculum from basic beads to advanced mental anzan' },
    { title: 'Regular practice', desc: 'Guided micro-practice exercises that build natural arithmetic intuition' },
    { title: 'Individual attention', desc: 'Intimate batch sizes ensuring customized mentorship for every single student' },
    { title: 'Progress-focused learning', desc: 'Periodic assessments, feedback sessions, and parent progress consultations' },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Educational Illustration & Visual Card (5 cols on lg) */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 p-8 text-white shadow-2xl overflow-hidden border border-blue-800/40"
            >
              {/* Background ambient glows */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />

              {/* Decorative Soroban Vector Art */}
              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-800/60 border border-blue-700/60 text-xs text-amber-300 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>Mumbai, Maharashtra</span>
                  </div>
                  <div className="text-xs text-slate-400 font-mono">Est. {INSTITUTE_CONFIG.establishedYear}</div>
                </div>

                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white leading-tight">Mastery Through Practice</h4>
                      <p className="text-xs text-slate-300">Bilateral brain activation</p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    By training both hands to move beads simultaneously, students stimulate both the left (logical) and right (creative/spatial) lobes of the brain.
                  </p>
                </div>

                {/* Visual Bead Meter Graphic */}
                <div className="space-y-3 pt-2">
                  <div className="text-xs font-semibold text-slate-200 flex justify-between">
                    <span>Calculation Speed Boost</span>
                    <span className="text-amber-400 font-mono">Up to 500%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '92%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className="bg-gradient-to-r from-amber-500 to-amber-300 h-2 rounded-full"
                    />
                  </div>

                  <div className="text-xs font-semibold text-slate-200 flex justify-between pt-1">
                    <span>Focus & Memory Retention</span>
                    <span className="text-sky-400 font-mono">98% Parent Rating</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '96%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="bg-gradient-to-r from-sky-500 to-blue-400 h-2 rounded-full"
                    />
                  </div>
                </div>

                {/* Quote highlight */}
                <div className="pt-3 border-t border-white/10 flex items-center gap-3">
                  <HeartHandshake className="w-8 h-8 text-amber-400 shrink-0" />
                  <p className="text-xs text-slate-300 italic">
                    "Every child has immense numerical potential when taught through tactile, joyful methods."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Heading, Content & Checklist (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-3"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                About Our Institute
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                About Dipti's Pro Abacus Institute
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Dipti's Pro Abacus Institute is an Abacus and Mental Mathematics learning institute based in Mumbai, focused on helping children strengthen their calculation skills, concentration, memory and confidence through structured and engaging learning.
              </p>
            </motion.div>

            {/* Checklist Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2"
            >
              {checklistItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-blue-200 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pt-2 flex items-center gap-4 flex-wrap"
            >
              <button
                onClick={() => setModalOpen(true)}
                className="px-6 py-3 text-sm font-semibold text-blue-900 hover:text-white bg-blue-50 hover:bg-blue-900 border border-blue-200 hover:border-blue-900 rounded-xl transition-all duration-200 shadow-xs"
              >
                Know More About Us
              </button>
              
              <button
                onClick={onOpenEnquiryModal}
                className="px-6 py-3 text-sm font-semibold text-white bg-amber-600 hover:bg-amber-500 rounded-xl transition-all duration-200 shadow-sm"
              >
                Schedule Free Diagnostic
              </button>
            </motion.div>

          </div>

        </div>
      </div>

      {/* "Know More About Us" Information Modal */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    About Dipti's Pro Abacus Institute
                  </h3>
                  <p className="text-xs text-slate-500">
                    Our Philosophy, Learning System & Mumbai Presence
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                <p>
                  At <strong className="text-slate-900">Dipti's Pro Abacus Institute</strong> in Mumbai, we believe that every young mind has boundless potential for mathematical excellence. Conventional school education often introduces numbers through memorization and repetitive worksheets, which can provoke anxiety in children.
                </p>

                <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  Our Multi-Stage Teaching Methodology
                </h4>

                <div className="space-y-2.5">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <strong className="text-slate-900 block text-xs">Stage 1: Tactile Bead Understanding</strong>
                    <span className="text-xs">Children touch, slide, and feel physical beads, converting abstract symbols into solid spatial concepts.</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <strong className="text-slate-900 block text-xs">Stage 2: Formula & Speed Reflexes</strong>
                    <span className="text-xs">Friendly formulas (Big Friends, Small Friends) make borrowing and carrying effortless second nature.</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <strong className="text-slate-900 block text-xs">Stage 3: Anzan (Imaginary Abacus)</strong>
                    <span className="text-xs">The abacus is removed. Students picture the beads inside their mind, calculating faster than an electronic calculator.</span>
                  </div>
                </div>

                <div className="p-4 bg-amber-50/70 border border-amber-200/80 rounded-2xl flex items-center justify-between gap-4 mt-4">
                  <div>
                    <h5 className="text-xs font-bold text-amber-900">Interested in a Free Assessment?</h5>
                    <p className="text-xs text-amber-800">We evaluate your child's learning style and recommend the perfect level.</p>
                  </div>
                  <button
                    onClick={() => {
                      setModalOpen(false);
                      onOpenEnquiryModal();
                    }}
                    className="px-4 py-2 text-xs font-bold text-white bg-blue-900 hover:bg-blue-800 rounded-lg whitespace-nowrap shadow-sm"
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
