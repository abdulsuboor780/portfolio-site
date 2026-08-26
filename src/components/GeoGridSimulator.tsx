import React, { useState } from 'react';
import { MapPin, ArrowRight, ShieldCheck, Sparkles, TrendingUp, CheckCircle, RefreshCw } from 'lucide-react';

export const GeoGridSimulator: React.FC = () => {
  const [viewMode, setViewMode] = useState<'before' | 'after'>('after');
  const [selectedKeyword, setSelectedKeyword] = useState('emergency plumber near me');

  const keywords = [
    'emergency plumber near me',
    'dental implants clinic',
    'ac repair contractor',
    'personal injury attorney',
  ];

  // 5x5 Grid Simulation coordinates
  // Before ranks: mostly 8-20+ (red/orange)
  const beforeGrid = [
    [14, 18, 19, 21, 25],
    [12, 9, 14, 17, 20],
    [11, 8, 4, 12, 16], // Center is 4
    [15, 12, 16, 18, 22],
    [19, 22, 24, 25, 27],
  ];

  // After Abdul's GBP & Local SEO Optimization: solid #1s and #2s (green)
  const afterGrid = [
    [1, 1, 2, 1, 2],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1], // Center #1
    [2, 1, 1, 1, 2],
    [2, 2, 1, 2, 3],
  ];

  const currentGrid = viewMode === 'before' ? beforeGrid : afterGrid;

  const getRankColor = (rank: number) => {
    if (rank <= 3) return 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-emerald-500/50';
    if (rank <= 7) return 'bg-teal-600 text-white border-teal-400 shadow-teal-600/30';
    if (rank <= 12) return 'bg-amber-500 text-slate-950 border-amber-400 shadow-amber-500/30';
    return 'bg-rose-500 text-white border-rose-400 shadow-rose-500/30';
  };

  return (
    <div className="bg-slate-900/80 rounded-3xl border border-slate-800 p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Explanation Column */}
        <div className="lg:col-span-5 space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Geo-Grid Demonstration</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            How Abdul Turns Local Map Radiuses Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Solid #1 Green Pins</span>
          </h3>

          <p className="text-sm text-slate-300 leading-relaxed">
            Most businesses only rank at their exact front door (red pins across town). Abdul's multi-layered citation, geo-silo, and GBP category architecture expands your high-converting <strong>Google 3-Pack radius up to 10+ miles</strong>.
          </p>

          {/* Toggle Buttons */}
          <div className="bg-slate-950 p-1.5 rounded-2xl border border-slate-800 flex items-center">
            <button
              onClick={() => setViewMode('before')}
              className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                viewMode === 'before'
                  ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-rose-500" />
              Before (Unoptimized)
            </button>
            <button
              onClick={() => setViewMode('after')}
              className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                viewMode === 'after'
                  ? 'bg-emerald-500 text-slate-950 font-black shadow-lg shadow-emerald-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-slate-950 animate-ping" />
              After Abdul's Optimization
            </button>
          </div>

          {/* Keyword Selector Chips */}
          <div className="space-y-2 pt-1">
            <p className="text-xs font-semibold text-slate-400">Select target search query:</p>
            <div className="flex flex-wrap gap-1.5">
              {keywords.map((kw) => (
                <button
                  key={kw}
                  onClick={() => setSelectedKeyword(kw)}
                  className={`text-xs px-3 py-1.5 rounded-lg border transition-all ${
                    selectedKeyword === kw
                      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50 font-semibold'
                      : 'bg-slate-950/60 text-slate-400 border-slate-800 hover:text-slate-200'
                  }`}
                >
                  "{kw}"
                </button>
              ))}
            </div>
          </div>

          {/* Metric Summary */}
          <div className="pt-2 grid grid-cols-2 gap-3 text-xs">
            <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800">
              <span className="text-slate-400 block text-[11px]">Avg. Map Rank</span>
              <span className={`text-xl font-black ${viewMode === 'after' ? 'text-emerald-400' : 'text-rose-400'}`}>
                {viewMode === 'after' ? '1.2 (Dominant)' : '16.4 (Invisible)'}
              </span>
            </div>
            <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800">
              <span className="text-slate-400 block text-[11px]">Estimated Monthly Inquiries</span>
              <span className={`text-xl font-black ${viewMode === 'after' ? 'text-emerald-400' : 'text-slate-400'}`}>
                {viewMode === 'after' ? '65 - 90 Calls' : '3 - 6 Calls'}
              </span>
            </div>
          </div>
        </div>

        {/* Right Simulated Map Matrix */}
        <div className="lg:col-span-7 flex flex-col items-center">
          <div className="w-full max-w-md bg-slate-950 p-5 sm:p-6 rounded-3xl border border-slate-800/90 shadow-2xl relative">
            
            {/* Map Header Status */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-semibold text-slate-200">5×5 Mile City Proximity Scan</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-slate-900 text-slate-400 text-[10px] font-mono border border-slate-800">
                Lat/Lng: Local Grid
              </span>
            </div>

            {/* Grid Canvas */}
            <div className="relative aspect-square w-full rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 p-4 border border-slate-800 flex flex-col justify-between overflow-hidden">
              
              {/* Simulated Map Streets & Grid Lines */}
              <div className="absolute inset-0 opacity-15 pointer-events-none">
                <div className="w-full h-full border-t border-b border-dashed border-emerald-400/40 my-auto" />
                <div className="w-full h-full border-l border-r border-dashed border-cyan-400/40 mx-auto" />
              </div>

              {/* 5x5 Points */}
              <div className="grid grid-cols-5 gap-2 sm:gap-3 h-full items-center justify-items-center relative z-10">
                {currentGrid.map((row, rIdx) =>
                  row.map((rank, cIdx) => {
                    const isCenter = rIdx === 2 && cIdx === 2;
                    return (
                      <div
                        key={`${rIdx}-${cIdx}`}
                        className="relative group flex items-center justify-center"
                      >
                        <div
                          className={`w-7 h-7 sm:w-9 sm:h-9 rounded-full flex items-center justify-center font-black text-xs sm:text-sm border shadow-lg transition-all duration-300 transform group-hover:scale-125 ${getRankColor(
                            rank
                          )} ${isCenter ? 'ring-2 ring-white ring-offset-2 ring-offset-slate-950' : ''}`}
                        >
                          {rank}
                        </div>

                        {/* Hover Tooltip */}
                        <div className="absolute bottom-full mb-1 hidden group-hover:flex flex-col items-center z-30 pointer-events-none">
                          <div className="bg-slate-900 text-slate-100 text-[10px] px-2 py-1 rounded shadow-xl border border-slate-700 whitespace-nowrap font-medium">
                            Position #{rank} in Local 3-Pack
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>

            {/* Grid Legend */}
            <div className="pt-4 mt-3 flex items-center justify-center gap-4 text-[11px] text-slate-400 font-medium">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-emerald-500 border border-emerald-400" />
                <span>#1 - #3 (Top 3 Pack)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-amber-500 border border-amber-400" />
                <span>#8 - #12 (Page 2)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500 border border-rose-400" />
                <span>#13+ (No Traffic)</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
