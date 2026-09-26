import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, Monitor, ArrowRight, Info } from 'lucide-react';
import { INSTITUTE_CONFIG, BatchItem } from '../data/instituteConfig';

interface BatchesSectionProps {
  onSelectBatchForEnquiry: (batchName: string) => void;
}

export const BatchesSection: React.FC<BatchesSectionProps> = ({ onSelectBatchForEnquiry }) => {
  return (
    <section id="batches" className="py-20 md:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
            Schedule & Batches
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Upcoming Batches
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed" style={{ textWrap: 'balance' }}>
            Flexible weekday, weekend, and personalized slots tailored for busy school schedules. Small batches ensure dedicated focus.
          </p>
        </div>

        {/* 4 Batches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSTITUTE_CONFIG.batches.map((batch: BatchItem, idx: number) => (
            <motion.div
              key={batch.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="rounded-3xl bg-slate-50/80 hover:bg-white border border-slate-200/90 hover:border-blue-200/90 hover:shadow-xl transition-all duration-200 p-6 flex flex-col justify-between group"
            >
              <div>
                {/* Header status */}
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-200/80">
                  <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wide">
                    {batch.seatsStatus}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 bg-white px-2 py-0.5 rounded border border-slate-200">
                    Mumbai
                  </span>
                </div>

                {/* Batch Name */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-900 transition-colors mb-4">
                  {batch.name}
                </h3>

                {/* Info List */}
                <div className="space-y-3 text-xs text-slate-600 mb-4">
                  <div className="flex items-center gap-2.5">
                    <Calendar className="w-4 h-4 text-blue-800 shrink-0" />
                    <span>Days: <strong className="text-slate-800">{batch.days}</strong></span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Time: <strong className="text-slate-800">{batch.time}</strong></span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Monitor className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span>Mode: <strong className="text-slate-800">{batch.mode}</strong></span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Location: <strong className="text-slate-800">{batch.location}</strong></span>
                  </div>
                </div>

                {/* Placeholder Notice Badge */}
                {batch.isPlaceholderNote && (
                  <div className="p-2.5 rounded-xl bg-slate-100/80 border border-slate-200 text-[11px] text-slate-500 mb-4 flex items-start gap-1.5">
                    <Info className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                    <span>{batch.isPlaceholderNote}</span>
                  </div>
                )}
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={() => onSelectBatchForEnquiry(batch.name)}
                  className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-blue-900 text-blue-950 hover:text-white border border-slate-200 hover:border-blue-900 text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-2xs group-hover:bg-blue-900 group-hover:text-white"
                >
                  <span>Check Availability</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom batch notice banner */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-slate-500">
            Need custom timings or private 1-on-1 sessions for your child?{' '}
            <button
              onClick={() => onSelectBatchForEnquiry('Personalized Batch')}
              className="text-blue-900 font-bold hover:underline"
            >
              Request a tailored slot →
            </button>
          </p>
        </div>

      </div>
    </section>
  );
};
