import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';
import { INSTITUTE_CONFIG, FAQItem } from '../data/instituteConfig';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(INSTITUTE_CONFIG.faqs[0].id);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const filteredFaqs = INSTITUTE_CONFIG.faqs.filter((faq: FAQItem) => {
    const q = searchQuery.toLowerCase();
    return faq.question.toLowerCase().includes(q) || faq.answer.toLowerCase().includes(q);
  });

  return (
    <section id="faq" className="py-20 md:py-28 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed" style={{ textWrap: 'balance' }}>
            Everything you need to know about our Abacus and Mental Maths training programs in Mumbai.
          </p>
        </div>

        {/* Quick Search */}
        <div className="relative mb-8 max-w-lg mx-auto">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search questions (e.g., age, online, sessions, fees)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-white border border-slate-200 rounded-xl shadow-2xs focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all text-slate-900 placeholder:text-slate-400"
          />
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 text-center bg-white rounded-2xl border border-slate-200 text-slate-500 text-sm">
              No questions found matching "{searchQuery}". Please reach out via WhatsApp or call us!
            </div>
          ) : (
            filteredFaqs.map((faq: FAQItem, idx: number) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl transition-all duration-200 border ${
                    isOpen
                      ? 'bg-white border-blue-200 shadow-md ring-1 ring-blue-500/10'
                      : 'bg-white/80 hover:bg-white border-slate-200/90 shadow-2xs'
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-2xl"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-semibold text-slate-400">
                        {String(idx + 1).padStart(2, '0')}.
                      </span>
                      <span className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                        {faq.question}
                      </span>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 bg-blue-50 text-blue-900' : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          )}
        </div>

        {/* Still have questions note */}
        <div className="mt-12 text-center p-6 bg-white rounded-3xl border border-slate-200/90 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Have a specific question about your child?</h4>
              <p className="text-xs text-slate-500">Our faculty counselor is available on WhatsApp & call.</p>
            </div>
          </div>

          <a
            href={`https://wa.me/${INSTITUTE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(INSTITUTE_CONFIG.contact.whatsappDefaultMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors whitespace-nowrap shadow-xs"
          >
            Chat on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};
