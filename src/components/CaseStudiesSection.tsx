import React, { useState } from 'react';
import { 
  TrendingUp, 
  MapPin, 
  PhoneCall, 
  Star, 
  CheckCircle2, 
  ArrowUpRight, 
  Building2, 
  Calendar, 
  ShieldCheck,
  Quote,
  Sparkles
} from 'lucide-react';
import { CASE_STUDIES, TESTIMONIALS } from '../data/portfolioData';

interface CaseStudiesSectionProps {
  onOpenAudit: () => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onOpenAudit }) => {
  const [selectedCaseId, setSelectedCaseId] = useState<string>(CASE_STUDIES[0].id);

  const activeCase = CASE_STUDIES.find((c) => c.id === selectedCaseId) || CASE_STUDIES[0];

  return (
    <section id="case-studies" className="py-16 sm:py-24 relative bg-slate-950/60">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Proven Track Record & Client Results</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Real Ranking Proof & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Revenue Growth</span>
          </h2>
          
          <p className="text-sm sm:text-base text-slate-300">
            See how Abdul Suboor's strategic Local SEO and GBP optimization transformed struggling small businesses into market leaders in their service areas.
          </p>
        </div>

        {/* Case Study Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
          {CASE_STUDIES.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCaseId(c.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                selectedCaseId === c.id
                  ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/25 scale-[1.02]'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>{c.client}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                selectedCaseId === c.id ? 'bg-slate-950/20 text-slate-950' : 'bg-slate-800 text-emerald-400'
              }`}>
                {c.growthPercentage}
              </span>
            </button>
          ))}
        </div>

        {/* Active Case Study Spotlight Card */}
        <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-10 shadow-2xl backdrop-blur-xl space-y-8">
          
          {/* Top Headline and Tags */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
                <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-bold">
                  Niche: {activeCase.niche || activeCase.industry}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  {activeCase.location}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  Duration: {activeCase.duration}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                {activeCase.title}
              </h3>
            </div>

            <div className="bg-emerald-500/10 border border-emerald-500/30 px-4 py-3 rounded-2xl text-center shrink-0">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Total Result</span>
              <span className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">
                {activeCase.growthPercentage}
              </span>
            </div>
          </div>

          {/* Metric Comparison Boxes (Before vs After) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Box 1: Rank */}
            <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800 space-y-2">
              <span className="text-xs font-semibold text-slate-400">Google Map Position</span>
              <div className="flex items-center justify-between pt-1">
                <div className="text-xs">
                  <span className="text-slate-500 block text-[10px]">Before:</span>
                  <span className="font-mono text-rose-400 font-bold">{activeCase.beforeMetrics.rank}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-emerald-400" />
                <div className="text-right text-xs">
                  <span className="text-slate-500 block text-[10px]">After Abdul:</span>
                  <span className="font-mono text-emerald-400 font-black text-sm">{activeCase.afterMetrics.rank}</span>
                </div>
              </div>
            </div>

            {/* Box 2: Traffic */}
            <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800 space-y-2">
              <span className="text-xs font-semibold text-slate-400">Monthly Organic Traffic</span>
              <div className="flex items-center justify-between pt-1">
                <div className="text-xs">
                  <span className="text-slate-500 block text-[10px]">Before:</span>
                  <span className="font-mono text-slate-400 font-bold">{activeCase.beforeMetrics.traffic}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-emerald-400" />
                <div className="text-right text-xs">
                  <span className="text-slate-500 block text-[10px]">After Abdul:</span>
                  <span className="font-mono text-emerald-400 font-black text-sm">{activeCase.afterMetrics.traffic}</span>
                </div>
              </div>
            </div>

            {/* Box 3: Calls */}
            <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800 space-y-2">
              <span className="text-xs font-semibold text-slate-400">Inbound Leads & Phone Calls</span>
              <div className="flex items-center justify-between pt-1">
                <div className="text-xs">
                  <span className="text-slate-500 block text-[10px]">Before:</span>
                  <span className="font-mono text-slate-400 font-bold">{activeCase.beforeMetrics.calls}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-emerald-400" />
                <div className="text-right text-xs">
                  <span className="text-slate-500 block text-[10px]">After Abdul:</span>
                  <span className="font-mono text-emerald-400 font-black text-sm">{activeCase.afterMetrics.calls}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Strategy Checklist & Ranked Keywords Table */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left Strategy */}
            <div className="lg:col-span-6 space-y-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                Implementation Strategy Executed:
              </h4>
              <ul className="space-y-2">
                {activeCase.strategy.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Keywords Movement */}
            <div className="lg:col-span-6 bg-slate-950/90 p-4 rounded-2xl border border-slate-800 space-y-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                Keyword Ranking Movements:
              </h4>
              <div className="space-y-2">
                {activeCase.keywordsRanked.map((kw, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2 rounded-xl bg-slate-900/80 text-xs">
                    <span className="text-slate-200 font-medium truncate pr-2">"{kw.keyword}"</span>
                    <div className="flex items-center gap-2 shrink-0 font-mono">
                      <span className="text-rose-400 line-through">{kw.before}</span>
                      <span className="text-slate-500">&rarr;</span>
                      <span className="text-emerald-400 font-extrabold px-2 py-0.5 rounded bg-emerald-500/20 border border-emerald-500/30">
                        {kw.after}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Verified Client Testimonial Quote */}
          <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-6 rounded-2xl border border-emerald-500/20 relative">
            <Quote className="absolute top-4 right-4 w-8 h-8 text-emerald-500/15" />
            <div className="space-y-3">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(activeCase.testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
                <span className="text-xs text-slate-400 ml-1">5.0 Verified Review</span>
              </div>
              <p className="text-sm text-slate-200 italic leading-relaxed">
                "{activeCase.testimonial.quote}"
              </p>
              <div className="pt-1">
                <span className="font-bold text-white text-xs block">{activeCase.testimonial.author}</span>
                <span className="text-[11px] text-emerald-400 font-mono">{activeCase.testimonial.role}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Client Testimonials Carousel / Grid */}
        <div className="space-y-6 pt-8 border-t border-slate-800">
          <div className="text-center space-y-1">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              What Business Owners Say About Working with Abdul Suboor
            </h3>
            <p className="text-xs text-slate-400">Direct feedback from verified small business owners across the US, UK, and globally.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-slate-900/70 p-6 rounded-2xl border border-slate-800 hover:border-emerald-500/40 transition-all space-y-4 flex flex-col justify-between relative overflow-hidden group"
              >
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                        {t.result}
                      </span>
                    </div>
                  </div>

                  {/* Explicit Niche Tag */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-[11px] font-bold text-teal-300">
                    <span className="text-slate-500 font-normal">Niche:</span>
                    <span>{t.niche}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                    "{t.text}"
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-800/80">
                  <div className="flex items-center gap-3">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      referrerPolicy="no-referrer"
                      className="w-10 h-10 rounded-full object-cover border border-slate-700"
                    />
                    <div>
                      <h5 className="text-xs font-bold text-white">{t.name}</h5>
                      <p className="text-[11px] text-slate-400">{t.role}, {t.company}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-500 font-mono block">{t.location}</span>
                    <span className="text-[10px] text-emerald-400 font-semibold">{t.service}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Trigger */}
        <div className="text-center pt-4">
          <button
            onClick={onOpenAudit}
            className="px-6 py-3.5 rounded-xl font-bold text-sm text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-lg shadow-emerald-500/20"
          >
            Want Results Like These for Your Business? Request a Free Audit &rarr;
          </button>
        </div>

      </div>
    </section>
  );
};
