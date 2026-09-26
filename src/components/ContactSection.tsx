import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Send, MessageSquare, CheckCircle2, AlertCircle, Clock, Database, Download, Trash2, X } from 'lucide-react';
import { INSTITUTE_CONFIG } from '../data/instituteConfig';
import { EnquiryRecord, FormErrors } from '../types';

interface ContactSectionProps {
  preselectedProgram?: string;
  preselectedBatch?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  preselectedProgram = '',
  preselectedBatch = '',
}) => {
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

  // Sync when props change
  useEffect(() => {
    if (preselectedProgram) {
      setFormData((prev) => ({ ...prev, program: preselectedProgram }));
    }
  }, [preselectedProgram]);

  useEffect(() => {
    if (preselectedBatch) {
      setFormData((prev) => ({ ...prev, batch: preselectedBatch }));
    }
  }, [preselectedBatch]);

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedEnquiry, setSubmittedEnquiry] = useState<EnquiryRecord | null>(null);
  const [showAdminDrawer, setShowAdminDrawer] = useState(false);
  const [savedEnquiries, setSavedEnquiries] = useState<EnquiryRecord[]>([]);

  // Load existing enquiries from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('diptis_abacus_enquiries');
      if (stored) {
        setSavedEnquiries(JSON.parse(stored));
      }
    } catch {
      // ignore
    }
  }, [isSubmitted]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.parent_name.trim()) {
      newErrors.parent_name = 'Please enter parent/guardian name';
    } else if (formData.parent_name.trim().length < 2) {
      newErrors.parent_name = 'Name must be at least 2 characters';
    }

    if (!formData.child_name.trim()) {
      newErrors.child_name = "Please enter your child's name";
    }

    if (!formData.child_age.trim()) {
      newErrors.child_age = "Please specify child's age";
    } else {
      const ageNum = parseInt(formData.child_age, 10);
      if (isNaN(ageNum) || ageNum < 4 || ageNum > 18) {
        newErrors.child_age = 'Age should be between 4 and 18 years';
      }
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter a valid phone number';
    } else {
      const cleaned = formData.phone.replace(/[\s\-()]/g, '');
      if (cleaned.length < 10) {
        newErrors.phone = 'Phone number should be at least 10 digits';
      }
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.program) {
      newErrors.program = 'Please select a preferred program';
    }

    if (!formData.batch) {
      newErrors.batch = 'Please select a preferred batch';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const newRecord: EnquiryRecord = {
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
        const list: EnquiryRecord[] = existing ? JSON.parse(existing) : [];
        list.unshift(newRecord);
        localStorage.setItem('diptis_abacus_enquiries', JSON.stringify(list));
        setSavedEnquiries(list);
      } catch (err) {
        console.error('Error saving enquiry to storage', err);
      }

      setSubmittedEnquiry(newRecord);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setSubmittedEnquiry(null);
    setFormData({
      parent_name: '',
      child_name: '',
      child_age: '',
      phone: '',
      email: '',
      program: INSTITUTE_CONFIG.programs[0].name,
      batch: INSTITUTE_CONFIG.batches[0].name,
      message: '',
    });
  };

  const exportEnquiriesJSON = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(savedEnquiries, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `dipti_abacus_enquiries_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const clearAllEnquiries = () => {
    if (window.confirm('Are you sure you want to clear stored enquiries in this browser?')) {
      localStorage.removeItem('diptis_abacus_enquiries');
      setSavedEnquiries([]);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
            Admissions & Enquiries
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Give Your Child a Smarter Start
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed" style={{ textWrap: 'balance' }}>
            Interested in Abacus and Mental Maths training? Get in touch with us today for a free diagnostic assessment and batch consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Quick Contact Info Cards (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-slate-900">
                Direct Contact Options
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Connect directly with our admissions counselor for batch availability, age suitability, and class structure.
              </p>

              {/* Call Us Card */}
              <a
                href={`tel:${INSTITUTE_CONFIG.contact.phoneCallable}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:border-blue-400 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                    Call Us
                  </div>
                  <div className="text-sm font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                    {INSTITUTE_CONFIG.contact.phoneDisplay}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Mon–Sat, 9:00 AM – 7:00 PM IST
                  </div>
                </div>
              </a>

              {/* WhatsApp Us Card */}
              <a
                href={`https://wa.me/${INSTITUTE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(INSTITUTE_CONFIG.contact.whatsappDefaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:border-emerald-400 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                    WhatsApp Us
                  </div>
                  <div className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    Instant Chat & Syllabus Info
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Typically replies in ~15 mins
                  </div>
                </div>
              </a>

              {/* Visit Us Card */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                    Visit Us
                  </div>
                  <div className="text-sm font-bold text-slate-900">
                    {INSTITUTE_CONFIG.location.city}, {INSTITUTE_CONFIG.location.state}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {INSTITUTE_CONFIG.location.addressDisplay}
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <a
                href={`mailto:${INSTITUTE_CONFIG.contact.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:border-blue-300 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                    Email Admissions
                  </div>
                  <div className="text-sm font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                    {INSTITUTE_CONFIG.contact.email}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Detailed queries & fee schedules
                  </div>
                </div>
              </a>
            </div>

            {/* Admin Enquiries Storage View Trigger */}
            <div className="p-4 rounded-2xl bg-slate-100/70 border border-slate-200/80 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <Database className="w-4 h-4 text-slate-500" />
                <span>Saved Enquiries in Browser: <strong className="font-mono text-slate-900">{savedEnquiries.length}</strong></span>
              </div>
              <button
                type="button"
                onClick={() => setShowAdminDrawer(true)}
                className="px-2.5 py-1 text-[11px] font-semibold text-blue-900 hover:text-blue-950 bg-white rounded-lg border border-slate-200 shadow-2xs hover:bg-slate-50"
              >
                View Records
              </button>
            </div>
          </div>

          {/* Right Column: High-Conversion Form (7 cols on lg) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white p-6 sm:p-10 border border-slate-200 shadow-xl relative">
              
              {isSubmitted && submittedEnquiry ? (
                /* Success View */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 text-center space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-slate-900">
                      Enquiry Received Successfully!
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto">
                      Thank you, <strong className="text-slate-800">{submittedEnquiry.parent_name}</strong>. We have logged your request for <strong className="text-slate-800">{submittedEnquiry.child_name}</strong> (Age {submittedEnquiry.child_age}).
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs text-slate-600 space-y-1.5 max-w-md mx-auto">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Enquiry Reference:</span>
                      <span className="font-mono font-bold text-blue-900">{submittedEnquiry.id}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Program:</span>
                      <span className="font-semibold text-slate-800">{submittedEnquiry.program}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Batch:</span>
                      <span className="font-semibold text-slate-800">{submittedEnquiry.batch}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Contact Number:</span>
                      <span className="font-mono text-slate-800">{submittedEnquiry.phone}</span>
                    </div>
                  </div>

                  <div className="space-y-3 pt-2">
                    <p className="text-xs text-slate-500">
                      Our faculty coordinator will call you within 24 hours to schedule the diagnostic session.
                    </p>

                    <div className="flex items-center justify-center gap-3 flex-wrap">
                      <a
                        href={`https://wa.me/${INSTITUTE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(`Hi Dipti's Pro Abacus, I just submitted an enquiry for ${submittedEnquiry.child_name} (Ref: ${submittedEnquiry.id}). Looking forward to speaking!`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-sm transition-colors flex items-center gap-2"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Chat Now on WhatsApp</span>
                      </a>

                      <button
                        onClick={handleResetForm}
                        className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
                      >
                        Submit Another Enquiry
                      </button>
                    </div>
                  </div>
                </motion.div>
              ) : (
                /* Form View */
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="border-b border-slate-100 pb-4 mb-2">
                    <h3 className="text-xl font-bold text-slate-900">
                      Enrolment & Diagnostic Request
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Fill out this quick form and our team will get in touch with you.
                    </p>
                  </div>

                  {/* Row 1: Parent Name & Child Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Parent / Guardian Name <span className="text-amber-600">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Pooja Mehta"
                        value={formData.parent_name}
                        onChange={(e) => setFormData({ ...formData, parent_name: e.target.value })}
                        className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border bg-slate-50/50 focus:bg-white focus:outline-none transition-colors ${
                          errors.parent_name
                            ? 'border-rose-400 focus:ring-2 focus:ring-rose-200'
                            : 'border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100'
                        }`}
                      />
                      {errors.parent_name && (
                        <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.parent_name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Child's Name <span className="text-amber-600">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Aarav Mehta"
                        value={formData.child_name}
                        onChange={(e) => setFormData({ ...formData, child_name: e.target.value })}
                        className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border bg-slate-50/50 focus:bg-white focus:outline-none transition-colors ${
                          errors.child_name
                            ? 'border-rose-400 focus:ring-2 focus:ring-rose-200'
                            : 'border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100'
                        }`}
                      />
                      {errors.child_name && (
                        <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.child_name}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Child Age & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Child's Age (Years) <span className="text-amber-600">*</span>
                      </label>
                      <input
                        type="number"
                        min="4"
                        max="18"
                        placeholder="e.g. 7"
                        value={formData.child_age}
                        onChange={(e) => setFormData({ ...formData, child_age: e.target.value })}
                        className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border bg-slate-50/50 focus:bg-white focus:outline-none transition-colors ${
                          errors.child_age
                            ? 'border-rose-400 focus:ring-2 focus:ring-rose-200'
                            : 'border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100'
                        }`}
                      />
                      {errors.child_age && (
                        <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.child_age}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Phone Number (WhatsApp) <span className="text-amber-600">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. 98200 12345"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border bg-slate-50/50 focus:bg-white focus:outline-none transition-colors ${
                          errors.phone
                            ? 'border-rose-400 focus:ring-2 focus:ring-rose-200'
                            : 'border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 3: Email */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Email Address <span className="text-slate-400 font-normal">(Optional, for syllabus copy)</span>
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. pooja.mehta@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border bg-slate-50/50 focus:bg-white focus:outline-none transition-colors ${
                        errors.email
                          ? 'border-rose-400 focus:ring-2 focus:ring-rose-200'
                          : 'border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Row 4: Preferred Program & Preferred Batch */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Preferred Program
                      </label>
                      <select
                        value={formData.program}
                        onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-blue-600 focus:outline-none transition-colors"
                      >
                        {INSTITUTE_CONFIG.programs.map((p) => (
                          <option key={p.id} value={p.name}>
                            {p.name} ({p.badge})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Preferred Batch
                      </label>
                      <select
                        value={formData.batch}
                        onChange={(e) => setFormData({ ...formData, batch: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-blue-600 focus:outline-none transition-colors"
                      >
                        {INSTITUTE_CONFIG.batches.map((b) => (
                          <option key={b.id} value={b.name}>
                            {b.name} ({b.days})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 5: Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Any Specific Note or Question? <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. My child is in 2nd grade and struggles with addition speed. Would like an afternoon slot..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-blue-600 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl bg-blue-900 hover:bg-blue-800 active:scale-[0.99] text-white text-sm font-bold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Processing Enquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Enquiry</span>
                          <Send className="w-4 h-4 text-amber-400" />
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-center text-slate-400 mt-2.5">
                      🔒 No spam. Your phone number is strictly used for admissions consultation.
                    </p>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>

      {/* Admin Enquiries Drawer */}
      <AnimatePresence>
        {showAdminDrawer && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-3xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[85vh] flex flex-col"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center gap-2.5">
                  <Database className="w-5 h-5 text-blue-900" />
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Institute Admissions Submissions
                    </h3>
                    <p className="text-xs text-slate-500">
                      Locally stored enquiries ({savedEnquiries.length} records)
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {savedEnquiries.length > 0 && (
                    <>
                      <button
                        onClick={exportEnquiriesJSON}
                        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                        title="Download JSON export"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Export</span>
                      </button>
                      <button
                        onClick={clearAllEnquiries}
                        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 rounded-lg transition-colors"
                        title="Clear all"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Clear</span>
                      </button>
                    </>
                  )}
                  <button
                    onClick={() => setShowAdminDrawer(false)}
                    className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Records table/list */}
              <div className="overflow-y-auto flex-1 py-4 space-y-3">
                {savedEnquiries.length === 0 ? (
                  <div className="py-12 text-center text-slate-400 text-xs">
                    No enquiries submitted yet. Fill out the form above to test!
                  </div>
                ) : (
                  savedEnquiries.map((enq) => (
                    <div
                      key={enq.id}
                      className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1.5"
                    >
                      <div className="flex items-center justify-between font-mono">
                        <span className="font-bold text-blue-900">{enq.id}</span>
                        <span className="text-slate-400">{new Date(enq.created_at).toLocaleString()}</span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 font-sans">
                        <div>
                          <span className="text-slate-400 block text-[10px]">Parent:</span>
                          <span className="font-semibold text-slate-800">{enq.parent_name}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block text-[10px]">Child:</span>
                          <span className="font-semibold text-slate-800">{enq.child_name} ({enq.child_age} yrs)</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block text-[10px]">Phone:</span>
                          <span className="font-mono text-slate-800">{enq.phone}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block text-[10px]">Program:</span>
                          <span className="text-slate-800">{enq.program}</span>
                        </div>
                      </div>
                      {enq.message && (
                        <div className="pt-1 text-slate-500 italic bg-white p-2 rounded border border-slate-100 mt-1">
                          "{enq.message}"
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
