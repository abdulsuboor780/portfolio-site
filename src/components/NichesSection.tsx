import React, { useState } from 'react';
import { 
  Hammer, 
  Sun, 
  Stethoscope, 
  Wrench, 
  Home, 
  Leaf, 
  Wind, 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle, 
  Sparkles,
  Search,
  Building2
} from 'lucide-react';
import { NICHES_COVERED, PERSONAL_INFO } from '../data/portfolioData';
import { NicheInfo } from '../types';

interface NichesSectionProps {
  onOpenAudit: () => void;
}

export const NichesSection: React.FC<NichesSectionProps> = ({ onOpenAudit }) => {
  const [selectedNicheId, setSelectedNicheId] = useState<string>(NICHES_COVERED[0].id);

  const activeNiche = NICHES_COVERED.find((n) => n.id === selectedNicheId) || NICHES_COVERED[0];

  const renderIcon = (id: string) => {
    switch (id) {
      case 'bathroom-kitchen-remodeling':
        return <Hammer className="w-5 h-5" />;
      case 'solar-installation':
        return <Sun className="w-5 h-5" />;
      case 'dentist':
        return <Stethoscope className="w-5 h-5" />;
      case 'plumber':
        return <Wrench className="w-5 h-5" />;
      case 'roofers':
        return <Home className="w-5 h-5" />;
      case 'environmental-consultancies':
        return <Leaf className="w-5 h-5" />;
      case 'hvac':
        return <Wind className="w-5 h-5" />;
      default:
        return <Building2 className="w-5 h-5" />;
    }
  };

  return (
    <section id="niches" className="py-16 sm:py-24 relative bg-slate-950/80 overflow-hidden">
      
      {/* Glow */}
      <div className="absolute top-1/3 right-0 w-80 sm:w-96 h-80 sm:h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            <Building2 className="w-3.5 h-3.5" />
            <span>Niches & Industries We Dominate</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Specialized Local SEO for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300">High-Ticket Service Niches</span>
          </h2>
          
          <p className="text-sm sm:text-base text-slate-300">
            Generic SEO strategies fail because local search patterns vary dramatically between industries. Abdul deploys battle-tested ranking frameworks specifically tailored for your vertical.
          </p>
        </div>

        {/* Niche Pill Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
          {NICHES_COVERED.map((niche) => {
            const isSelected = selectedNicheId === niche.id;
            return (
              <button
                key={niche.id}
                onClick={() => setSelectedNicheId(niche.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 shadow-lg shadow-emerald-500/25 scale-[1.03]'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700'
                }`}
              >
                <span className={isSelected ? 'text-slate-950' : 'text-emerald-400'}>
                  {renderIcon(niche.id)}
                </span>
                <span>{niche.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Niche Spotlight Card */}
        <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-10 shadow-2xl backdrop-blur-xl space-y-8">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
                <span className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-300">
                  {renderIcon(activeNiche.id)}
                </span>
                <span>Niche Blueprint & Ranking Playbook</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                {activeNiche.name}
              </h3>
              <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
                {activeNiche.strategyFocus}
              </p>
            </div>

            <div className="bg-slate-950 p-4 sm:p-5 rounded-2xl border border-emerald-500/30 text-left lg:text-right shrink-0 space-y-1">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Expected Business Impact</span>
              <span className="text-base sm:text-lg font-black text-emerald-400 block">
                {activeNiche.expectedImpact}
              </span>
              <span className="text-xs text-slate-400 block font-mono">
                ⏱ Expected Speed: {activeNiche.turnaround}
              </span>
            </div>
          </div>

          {/* Keywords & Strategy Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* High-Intent Money Keywords */}
            <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300">
                <Search className="w-4 h-4 text-emerald-400" />
                <span>Target High-Intent Search Keywords:</span>
              </div>
              <div className="space-y-2">
                {activeNiche.typicalKeywords.map((kw, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/90 text-xs">
                    <span className="text-emerald-300 font-mono font-semibold">"{kw}"</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      High Buyer Intent
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Execution Pillars */}
            <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300">
                <Sparkles className="w-4 h-4 text-teal-400" />
                <span>Abdul's Vertical Execution Stack:</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Google Business Profile primary & secondary category fine-tuning</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Geotagged actual project photos with localized EXIF metadata</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>DR 40+ to DR 60+ low-OBL organic dofollow comment backlinks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Direct WhatsApp and click-to-call lead funnels with instant alerts</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800">
            <span className="text-xs text-slate-400">
              Operate in <strong>{activeNiche.name}</strong>? Get a tailored breakdown of your competitors today.
            </span>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={`https://wa.me/923365336008?text=${encodeURIComponent(`Hi Abdul, I operate in the ${activeNiche.name} niche and want to rank #1 on Google Maps in my city.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3 rounded-xl font-bold text-xs bg-emerald-400 text-slate-950 hover:bg-emerald-300 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Discuss {activeNiche.name} on WhatsApp</span>
              </a>

              <button
                onClick={onOpenAudit}
                className="w-full sm:w-auto px-4 py-3 rounded-xl font-semibold text-xs text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
              >
                Free Audit
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
