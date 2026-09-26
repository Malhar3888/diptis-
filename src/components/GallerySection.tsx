import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, ChevronLeft, ChevronRight, Calculator, Trophy, Sparkles, Users, Award, BookOpen } from 'lucide-react';
import { INSTITUTE_CONFIG, GalleryItem } from '../data/instituteConfig';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const categories = ['All', 'Classroom', 'Abacus Learning', 'Activities', 'Events', 'Student Practice'];

  const filteredItems = activeCategory === 'All'
    ? INSTITUTE_CONFIG.gallery
    : INSTITUTE_CONFIG.gallery.filter((item) => item.category === activeCategory);

  const handleNext = () => {
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((selectedItemIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = () => {
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((selectedItemIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const getVisualIcon = (category: string) => {
    switch (category) {
      case 'Classroom':
        return <Users className="w-10 h-10 text-blue-300" />;
      case 'Abacus Learning':
        return <Calculator className="w-10 h-10 text-amber-300" />;
      case 'Activities':
        return <Sparkles className="w-10 h-10 text-sky-300" />;
      case 'Events':
        return <Trophy className="w-10 h-10 text-emerald-300" />;
      case 'Student Practice':
        return <BookOpen className="w-10 h-10 text-purple-300" />;
      default:
        return <Award className="w-10 h-10 text-amber-300" />;
    }
  };

  return (
    <section id="gallery" className="py-20 md:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
            Life at the Institute
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Institute Gallery
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed" style={{ textWrap: 'balance' }}>
            A glimpse into our vibrant learning spaces, student milestones, active practice sessions, and celebratory achievements.
          </p>
        </div>

        {/* Category Filter Tabs (Clean Segmented Control) */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-blue-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item: GalleryItem, idx: number) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedItemIndex(idx)}
              className="cursor-pointer group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Graphic Card Stage */}
              <div
                className="h-64 sm:h-72 w-full p-6 flex flex-col justify-between relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${item.accentColor}dd 0%, #0f172a 100%)`,
                }}
              >
                {/* Background decorative bead grid */}
                <div className="absolute inset-0 opacity-15 pointer-events-none">
                  <div className="grid grid-cols-6 gap-3 p-4">
                    {[...Array(24)].map((_, i) => (
                      <div key={i} className="w-4 h-3 rounded-full bg-white/40" />
                    ))}
                  </div>
                </div>

                {/* Top Badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-lg bg-black/40 backdrop-blur-md text-[11px] font-semibold text-white border border-white/10">
                    {item.category}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Center Visual Icon */}
                <div className="relative z-10 flex flex-col items-center justify-center py-4 group-hover:scale-110 transition-transform duration-300">
                  {getVisualIcon(item.category)}
                  <span className="text-xs text-white/80 font-mono mt-2 tracking-wide uppercase">
                    {item.tag}
                  </span>
                </div>

                {/* Bottom Title & Scrim */}
                <div className="relative z-10 pt-2 border-t border-white/10">
                  <h3 className="text-base font-bold text-white leading-snug group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/70 line-clamp-1 mt-0.5">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItemIndex !== null && filteredItems[selectedItemIndex] && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-3xl bg-slate-900 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl text-white"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItemIndex(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Large Feature Visual */}
              <div
                className="h-80 sm:h-96 w-full p-8 flex flex-col justify-between relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${filteredItems[selectedItemIndex].accentColor} 0%, #0f172a 100%)`,
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold text-white">
                    {filteredItems[selectedItemIndex].category}
                  </span>
                  <span className="text-xs text-white/60 font-mono">
                    {selectedItemIndex + 1} of {filteredItems.length}
                  </span>
                </div>

                <div className="flex flex-col items-center justify-center my-auto">
                  <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 mb-3">
                    {getVisualIcon(filteredItems[selectedItemIndex].category)}
                  </div>
                  <span className="text-sm font-semibold tracking-wider uppercase text-amber-300">
                    {filteredItems[selectedItemIndex].tag}
                  </span>
                </div>

                {/* Left/Right Navigation inside image */}
                <div className="flex items-center justify-between z-20">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrev();
                    }}
                    className="p-2.5 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext();
                    }}
                    className="p-2.5 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Lightbox Caption */}
              <div className="p-6 bg-slate-900 border-t border-slate-800">
                <h3 className="text-xl font-bold text-white mb-1.5">
                  {filteredItems[selectedItemIndex].title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {filteredItems[selectedItemIndex].description}
                </p>
                <div className="mt-4 flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-slate-800">
                  <span>Dipti's Pro Abacus Institute, Mumbai</span>
                  <span>Interactive Abacus Training</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
