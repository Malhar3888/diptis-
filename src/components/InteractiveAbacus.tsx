import React, { useState } from 'react';
import { RotateCcw, Sparkles } from 'lucide-react';

interface RodState {
  upper: boolean; // true = active (value 5, moved down toward beam)
  lower: number;  // 0 to 4 (number of beads moved up toward beam)
}

export const InteractiveAbacus: React.FC = () => {
  // 5 rods: [10000, 1000, 100, 10, 1]
  const [rods, setRods] = useState<RodState[]>([
    { upper: false, lower: 0 },
    { upper: false, lower: 0 },
    { upper: false, lower: 2 },
    { upper: true, lower: 3 }, // 5 + 3 = 8
    { upper: false, lower: 4 }, // 4 -> total: 284 as default interactive display
  ]);

  // Calculate current numerical value
  const calculateTotal = (): number => {
    return rods.reduce((acc, rod, idx) => {
      const power = Math.pow(10, rods.length - 1 - idx);
      const rodVal = (rod.upper ? 5 : 0) + rod.lower;
      return acc + rodVal * power;
    }, 0);
  };

  const toggleUpper = (rodIndex: number) => {
    setRods((prev) =>
      prev.map((rod, i) => (i === rodIndex ? { ...rod, upper: !rod.upper } : rod))
    );
  };

  const setLower = (rodIndex: number, count: number) => {
    setRods((prev) =>
      prev.map((rod, i) => {
        if (i !== rodIndex) return rod;
        // If clicking the current count, decrement by 1; otherwise set to clicked count
        return {
          ...rod,
          lower: rod.lower === count ? count - 1 : count,
        };
      })
    );
  };

  const resetAbacus = () => {
    setRods([
      { upper: false, lower: 0 },
      { upper: false, lower: 0 },
      { upper: false, lower: 0 },
      { upper: false, lower: 0 },
      { upper: false, lower: 0 },
    ]);
  };

  const loadPreset = (val: number) => {
    const digits = val.toString().padStart(5, '0').split('').map(Number);
    const newRods = digits.map((d) => ({
      upper: d >= 5,
      lower: d % 5,
    }));
    setRods(newRods);
  };

  const totalValue = calculateTotal();
  const rodPlaceNames = ['Ten Thousands', 'Thousands', 'Hundreds', 'Tens', 'Ones'];

  return (
    <div className="w-full bg-slate-900 text-white rounded-2xl p-5 md:p-6 shadow-2xl border border-slate-800">
      {/* Header bar */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <h4 className="text-sm font-semibold tracking-wide uppercase text-amber-400">
              Interactive Soroban Abacus
            </h4>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Click beads to calculate · Upper bead = 5 · Lower beads = 1
          </p>
        </div>

        <button
          onClick={resetAbacus}
          className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-lg transition-colors border border-slate-700"
          title="Reset to 0"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset</span>
        </button>
      </div>

      {/* Soroban Frame */}
      <div className="relative bg-amber-950/60 rounded-xl p-3 md:p-4 border-4 border-amber-900 shadow-inner">
        {/* Rods container */}
        <div className="grid grid-cols-5 gap-2 md:gap-4 relative">
          {rods.map((rod, rodIdx) => {
            const rodVal = (rod.upper ? 5 : 0) + rod.lower;
            return (
              <div key={rodIdx} className="flex flex-col items-center">
                {/* Place value indicator */}
                <span className="text-[10px] text-amber-200/70 font-mono mb-1.5 uppercase">
                  {rodPlaceNames[rodIdx].slice(0, 3)}
                </span>

                {/* Upper Deck (Heaven Bead, value 5) */}
                <div className="relative w-full flex justify-center items-center h-16 bg-slate-900/60 rounded-t-lg border-x border-t border-amber-900/50">
                  {/* Vertical rod metal line */}
                  <div className="absolute top-0 bottom-0 w-1 bg-amber-200/40 rounded-full pointer-events-none" />

                  {/* Upper bead */}
                  <button
                    type="button"
                    onClick={() => toggleUpper(rodIdx)}
                    className={`relative z-10 w-9 md:w-12 h-6 rounded-md shadow-md transform transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                      rod.upper
                        ? 'translate-y-3 bg-gradient-to-r from-amber-500 to-amber-400 text-amber-950 font-bold border border-amber-300'
                        : '-translate-y-3 bg-gradient-to-r from-slate-600 to-slate-500 border border-slate-400/50'
                    }`}
                    title={`Rod ${rodIdx + 1}: Toggle 5 (${rod.upper ? 'Active' : 'Inactive'})`}
                  >
                    <span className="text-[9px] font-mono select-none block text-center">
                      5
                    </span>
                  </button>
                </div>

                {/* Center Beam (Reckoning Bar) */}
                <div className="relative w-full h-3 bg-amber-900 border-y border-amber-700/80 flex items-center justify-center">
                  {rodIdx === 2 && (
                    <div className="w-1.5 h-1.5 bg-amber-300 rounded-full shadow-sm" title="Unit Point" />
                  )}
                </div>

                {/* Lower Deck (Earth Beads, 4 beads, value 1 each) */}
                <div className="relative w-full flex flex-col justify-end items-center h-32 bg-slate-900/60 rounded-b-lg border-x border-b border-amber-900/50 p-1 space-y-1">
                  {/* Vertical rod metal line */}
                  <div className="absolute top-0 bottom-0 w-1 bg-amber-200/40 rounded-full pointer-events-none" />

                  {[1, 2, 3, 4].map((beadNumber) => {
                    const isActive = rod.lower >= beadNumber;
                    return (
                      <button
                        key={beadNumber}
                        type="button"
                        onClick={() => setLower(rodIdx, beadNumber)}
                        className={`relative z-10 w-9 md:w-12 h-5 rounded-md shadow-sm transform transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                          isActive
                            ? '-translate-y-1.5 bg-gradient-to-r from-sky-400 to-blue-500 text-white font-bold border border-sky-300'
                            : 'translate-y-1.5 bg-gradient-to-r from-slate-600 to-slate-500 border border-slate-400/50'
                        }`}
                        title={`Rod ${rodIdx + 1}: Bead ${beadNumber} (Value 1)`}
                      >
                        <span className="text-[8px] font-mono select-none block text-center opacity-80">
                          1
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Single rod sum display */}
                <div className="mt-2 text-center">
                  <span className="inline-block px-1.5 py-0.5 text-xs font-mono font-semibold bg-slate-800 text-amber-300 rounded border border-slate-700">
                    {rodVal}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Value Readout & Preset Buttons */}
      <div className="mt-4 pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="text-xs text-slate-400">Total Represented:</div>
          <div className="px-3.5 py-1.5 bg-slate-800/90 rounded-xl border border-amber-500/30 font-mono text-2xl font-bold text-amber-300 tracking-wider">
            {totalValue.toLocaleString('en-IN')}
          </div>
        </div>

        {/* Quick presets for parents & students */}
        <div className="flex items-center gap-1.5 flex-wrap justify-center">
          <span className="text-[11px] text-slate-400 flex items-center gap-1 mr-1">
            <Sparkles className="w-3 h-3 text-amber-400" /> Presets:
          </span>
          <button
            onClick={() => loadPreset(8)}
            className="px-2 py-1 text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 rounded border border-slate-700 transition-colors"
          >
            8
          </button>
          <button
            onClick={() => loadPreset(25)}
            className="px-2 py-1 text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 rounded border border-slate-700 transition-colors"
          >
            25
          </button>
          <button
            onClick={() => loadPreset(149)}
            className="px-2 py-1 text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 rounded border border-slate-700 transition-colors"
          >
            149
          </button>
          <button
            onClick={() => loadPreset(2026)}
            className="px-2 py-1 text-xs bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 rounded border border-amber-500/40 transition-colors font-medium"
          >
            2026
          </button>
        </div>
      </div>
    </div>
  );
};
