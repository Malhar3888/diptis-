import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, ArrowUp, X, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { INSTITUTE_CONFIG } from '../data/instituteConfig';
import { EnquiryRecord, FormErrors } from '../types';

interface FloatingActionsProps {
  modalOpen: boolean;
  onCloseModal: () => void;
  preselectedProgram?: string;
  preselectedBatch?: string;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({
  modalOpen,
  onCloseModal,
  preselectedProgram = '',
  preselectedBatch = '',
}) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    parent_name: '',
    child_name: '',
    child_age: '',
    phone: '',
    email: '',
    program: preselectedProgram || INSTITUTE_CONFIG.programs[0].name,
    batch: preselectedBatch || INSTITUTE_CONFIG.batches[0].name,
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});

  useEffect(() => {
    if (preselectedProgram) setFormData((prev) => ({ ...prev, program: preselectedProgram }));
  }, [preselectedProgram]);

  useEffect(() => {
    if (preselectedBatch) setFormData((prev) => ({ ...prev, batch: preselectedBatch }));
  }, [preselectedBatch]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!formData.parent_name.trim()) errs.parent_name = 'Parent name required';
    if (!formData.child_name.trim()) errs.child_name = "Child's name required";
    if (!formData.child_age.trim()) errs.child_age = 'Age required';
    if (!formData.phone.trim() || formData.phone.trim().length < 10) errs.phone = 'Valid phone required (min 10 digits)';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const record: EnquiryRecord = {
        id: `ENQ-${Date.now().toString().slice(-6)}`,
        parent_name: formData.parent_name.trim(),
        child_name: formData.child_name.trim(),
        child_age: formData.child_age.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        program: formData.program,
        batch: formData.batch,
        message: formData.message.trim(),
        created_at: new Date().toISOString(),
      };

      try {
        const existing = localStorage.getItem('diptis_abacus_enquiries');
        const list = existing ? JSON.parse(existing) : [];
        list.unshift(record);
        localStorage.setItem('diptis_abacus_enquiries', JSON.stringify(list));
      } catch (err) {
        console.error(err);
      }

      setIsSubmitting(false);
      setIsSuccess(true);
    }, 500);
  };

  const handleClose = () => {
    setIsSuccess(false);
    onCloseModal();
  };

  return (
    <>
      {/* Floating Buttons in Bottom-Right Corner */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        
        {/* Scroll To Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={scrollToTop}
              className="w-11 h-11 rounded-full bg-white hover:bg-slate-50 text-slate-700 hover:text-blue-900 border border-slate-200 shadow-lg flex items-center justify-center transition-all duration-200 focus:outline-none"
              title="Scroll to Top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* WhatsApp Floating CTA */}
        <a
          href={`https://wa.me/${INSTITUTE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(INSTITUTE_CONFIG.contact.whatsappDefaultMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200"
          title="Chat on WhatsApp"
        >
          <MessageSquare className="w-5 h-5 fill-white" />
          <span className="text-xs font-bold hidden sm:inline whitespace-nowrap">
            Chat with Admissions
          </span>
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-amber-400 border-2 border-white rounded-full" />
        </a>
      </div>

      {/* Quick Enquiry Modal */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 my-8"
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>

              {isSuccess ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Enquiry Submitted!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                    Thank you! Our academic counselor will reach out shortly on phone/WhatsApp to confirm batch availability for your child.
                  </p>
                  <button
                    onClick={handleClose}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-blue-900 text-white text-xs font-bold shadow-md hover:bg-blue-800 transition-colors"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleModalSubmit} noValidate className="space-y-4">
                  <div className="border-b border-slate-100 pb-3">
                    <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider">
                      Dipti's Pro Abacus Institute
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                      Fast-Track Admission Enquiry
                    </h3>
                    <p className="text-xs text-slate-500">
                      Reserve a seat or book a free trial diagnostic in Mumbai.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Parent Name *
                      </label>
                      <input
                        type="text"
                        placeholder="Your full name"
                        value={formData.parent_name}
                        onChange={(e) => setFormData({ ...formData, parent_name: e.target.value })}
                        className={`w-full px-3 py-2 text-xs sm:text-sm rounded-xl border bg-slate-50 focus:bg-white focus:outline-none transition-colors ${
                          errors.parent_name ? 'border-rose-400' : 'border-slate-200 focus:border-blue-600'
                        }`}
                      />
                      {errors.parent_name && (
                        <p className="text-[10px] text-rose-600 mt-0.5 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.parent_name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Child's Name *
                      </label>
                      <input
                        type="text"
                        placeholder="Child's full name"
                        value={formData.child_name}
                        onChange={(e) => setFormData({ ...formData, child_name: e.target.value })}
                        className={`w-full px-3 py-2 text-xs sm:text-sm rounded-xl border bg-slate-50 focus:bg-white focus:outline-none transition-colors ${
                          errors.child_name ? 'border-rose-400' : 'border-slate-200 focus:border-blue-600'
                        }`}
                      />
                      {errors.child_name && (
                        <p className="text-[10px] text-rose-600 mt-0.5 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.child_name}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Child's Age (Years) *
                      </label>
                      <input
                        type="number"
                        placeholder="e.g. 8"
                        value={formData.child_age}
                        onChange={(e) => setFormData({ ...formData, child_age: e.target.value })}
                        className={`w-full px-3 py-2 text-xs sm:text-sm rounded-xl border bg-slate-50 focus:bg-white focus:outline-none transition-colors ${
                          errors.child_age ? 'border-rose-400' : 'border-slate-200 focus:border-blue-600'
                        }`}
                      />
                      {errors.child_age && (
                        <p className="text-[10px] text-rose-600 mt-0.5 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.child_age}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Phone (WhatsApp) *
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. 98200 12345"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full px-3 py-2 text-xs sm:text-sm rounded-xl border bg-slate-50 focus:bg-white focus:outline-none transition-colors ${
                          errors.phone ? 'border-rose-400' : 'border-slate-200 focus:border-blue-600'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[10px] text-rose-600 mt-0.5 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Program
                      </label>
                      <select
                        value={formData.program}
                        onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                        className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none"
                      >
                        {INSTITUTE_CONFIG.programs.map((p) => (
                          <option key={p.id} value={p.name}>
                            {p.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Batch
                      </label>
                      <select
                        value={formData.batch}
                        onChange={(e) => setFormData({ ...formData, batch: e.target.value })}
                        className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none"
                      >
                        {INSTITUTE_CONFIG.batches.map((b) => (
                          <option key={b.id} value={b.name}>
                            {b.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Note or Question (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Any specific questions regarding timing or levels..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 rounded-xl bg-blue-900 hover:bg-blue-800 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-colors disabled:opacity-70 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Admission Enquiry</span>
                          <Send className="w-4 h-4 text-amber-400" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
