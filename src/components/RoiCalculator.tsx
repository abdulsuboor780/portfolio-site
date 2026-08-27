import React, { useState } from 'react';
import { Calculator, DollarSign, Users, PhoneCall, ArrowRight, Sparkles, TrendingUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface RoiCalculatorProps {
  onOpenAudit: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenAudit }) => {
  const [avgCustomerValue, setAvgCustomerValue] = useState<number>(450);
  const [estimatedMonthlySearches, setEstimatedMonthlySearches] = useState<number>(1200);
  const [closeRate, setCloseRate] = useState<number>(25);

  // Math:
  // In Google 3-Pack, top position captures ~30% CTR on local intent searches.
  // 1200 searches * 30% CTR = 360 monthly visits / calls.
  // Conversion to lead = ~15% = 54 direct quote calls.
  // Closed jobs = 54 * (closeRate / 100)
  // Projected Gross Revenue = closedJobs * avgCustomerValue
  
  const estimatedClicks = Math.round(estimatedMonthlySearches * 0.28);
  const estimatedInquiries = Math.round(estimatedClicks * 0.16);
  const projectedClosedDeals = Math.max(1, Math.round(estimatedInquiries * (closeRate / 100)));
  const projectedMonthlyRevenue = projectedClosedDeals * avgCustomerValue;
  const projectedAnnualRevenue = projectedMonthlyRevenue * 12;

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 rounded-3xl border border-emerald-500/30 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Lead & Revenue Estimator</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Calculate Your Business's Local Search Revenue Potential
          </h3>
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            See how much organic revenue you could generate by dominating the Google Maps 3-pack and capturing high-intent local customer calls.
          </p>
        </div>

        {/* Inputs & Results Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Sliders on Left */}
          <div className="lg:col-span-6 space-y-6 bg-slate-950/80 p-6 rounded-2xl border border-slate-800">
            
            {/* Slider 1: Customer Value */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-semibold">
                <span className="text-slate-300">Average Customer / Job Value:</span>
                <span className="text-emerald-400 font-mono text-base font-bold">${avgCustomerValue.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="100"
                max="5000"
                step="50"
                value={avgCustomerValue}
                onChange={(e) => setAvgCustomerValue(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
              <div className="flex justify-between text-[10px] text-slate-500">
                <span>$100 (Routine Services)</span>
                <span>$2,500 (Contractors)</span>
                <span>$5,000+ (High-Ticket)</span>
              </div>
            </div>

            {/* Slider 2: Monthly Search Volume */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-semibold">
                <span className="text-slate-300">Estimated Monthly Local Searches in Your City:</span>
                <span className="text-cyan-400 font-mono text-base font-bold">{estimatedMonthlySearches.toLocaleString()} searches</span>
              </div>
              <input
                type="range"
                min="300"
                max="5000"
                step="100"
                value={estimatedMonthlySearches}
                onChange={(e) => setEstimatedMonthlySearches(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[10px] text-slate-500">
                <span>300 (Small Town)</span>
                <span>2,000 (Mid-Sized City)</span>
                <span>5,000 (Metro Area)</span>
              </div>
            </div>

            {/* Slider 3: Close Rate */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-semibold">
                <span className="text-slate-300">Your Sales Close Rate from Inbound Phone Inquiries:</span>
                <span className="text-teal-300 font-mono text-base font-bold">{closeRate}%</span>
              </div>
              <input
                type="range"
                min="10"
                max="60"
                step="5"
                value={closeRate}
                onChange={(e) => setCloseRate(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-teal-400"
              />
              <div className="flex justify-between text-[10px] text-slate-500">
                <span>10% (Conservative)</span>
                <span>25% (Average)</span>
                <span>50%+ (High Converter)</span>
              </div>
            </div>

          </div>

          {/* Projection Card on Right */}
          <div className="lg:col-span-6 bg-gradient-to-b from-slate-900 to-slate-950 p-6 sm:p-7 rounded-2xl border border-emerald-500/40 shadow-xl space-y-6">
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-emerald-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Estimated Monthly Organic Value</span>
              </div>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                #1 Position Model
              </span>
            </div>

            <div className="space-y-1 text-center py-2">
              <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 font-mono">
                ${projectedMonthlyRevenue.toLocaleString()}/mo
              </div>
              <p className="text-xs text-slate-400">
                Projected Annual Organic Revenue: <strong className="text-emerald-400 font-mono">${projectedAnnualRevenue.toLocaleString()}/yr</strong>
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800 text-center">
                <div className="flex items-center justify-center gap-1 text-[11px] text-slate-400 mb-1">
                  <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Est. Inbound Inquiries</span>
                </div>
                <div className="text-lg font-bold text-white font-mono">~{estimatedInquiries} Calls/mo</div>
              </div>
              <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800 text-center">
                <div className="flex items-center justify-center gap-1 text-[11px] text-slate-400 mb-1">
                  <Users className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Closed Customers</span>
                </div>
                <div className="text-lg font-bold text-white font-mono">~{projectedClosedDeals} Deals/mo</div>
              </div>
            </div>

            {/* Direct CTA */}
            <div className="pt-2">
              <button
                onClick={onOpenAudit}
                className="w-full py-3.5 px-3 sm:px-5 rounded-xl font-extrabold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 hover:shadow-lg hover:shadow-emerald-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Claim Your Free Quick SEO Audit Report (PDF)</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
