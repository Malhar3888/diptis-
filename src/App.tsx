/**
 * Dipti's Pro Abacus Institute
 * Premium Educational Website for Abacus & Mental Mathematics Training in Mumbai
 * @license Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustHighlights } from './components/TrustHighlights';
import { AboutSection } from './components/AboutSection';
import { WhyAbacusSection } from './components/WhyAbacusSection';
import { ProgramsSection } from './components/ProgramsSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { BenefitsSection } from './components/BenefitsSection';
import { BatchesSection } from './components/BatchesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { GallerySection } from './components/GallerySection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [preselectedProgram, setPreselectedProgram] = useState('');
  const [preselectedBatch, setPreselectedBatch] = useState('');

  const handleOpenEnquiryModal = (program?: string, batch?: string) => {
    if (program) setPreselectedProgram(program);
    if (batch) setPreselectedBatch(batch);
    setModalOpen(true);
  };

  const handleSelectBatchForEnquiry = (batchName: string) => {
    setPreselectedBatch(batchName);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      setModalOpen(true);
    }
  };

  const handleSelectProgramForEnquiry = (programName?: string) => {
    if (programName) setPreselectedProgram(programName);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      setModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-amber-100 selection:text-amber-900">
      {/* Sticky Glass Navbar */}
      <Navbar onOpenEnquiryModal={() => handleOpenEnquiryModal()} />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection onOpenEnquiryModal={() => handleOpenEnquiryModal()} />

        {/* 2. Trust / Highlights Section */}
        <TrustHighlights />

        {/* 3. About Section */}
        <AboutSection onOpenEnquiryModal={() => handleOpenEnquiryModal()} />

        {/* 4. Why Abacus Section */}
        <WhyAbacusSection />

        {/* 5. Programs Section */}
        <ProgramsSection onOpenEnquiryModal={handleSelectProgramForEnquiry} />

        {/* 6. How It Works Timeline */}
        <HowItWorksSection />

        {/* 7. Holistic Benefits Section */}
        <BenefitsSection onOpenEnquiryModal={() => handleOpenEnquiryModal()} />

        {/* 8. Upcoming Batches Section */}
        <BatchesSection onSelectBatchForEnquiry={handleSelectBatchForEnquiry} />

        {/* 9. Parent Testimonials */}
        <TestimonialsSection />

        {/* 10. Gallery with Lightbox */}
        <GallerySection />

        {/* 11. FAQ Section */}
        <FAQSection />

        {/* 12. Contact & Admission Enquiry Form */}
        <ContactSection
          preselectedProgram={preselectedProgram}
          preselectedBatch={preselectedBatch}
        />

        {/* 13. Location & Google Maps Section */}
        <LocationSection />
      </main>

      {/* 14. Professional Footer */}
      <Footer />

      {/* 15. Floating Actions: WhatsApp CTA, Back to Top, and Quick Enquiry Modal */}
      <FloatingActions
        modalOpen={modalOpen}
        onCloseModal={() => setModalOpen(false)}
        preselectedProgram={preselectedProgram}
        preselectedBatch={preselectedBatch}
      />
    </div>
  );
}
