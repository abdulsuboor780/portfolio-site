import React, { useState } from 'react';
import { 
  Sparkles, 
  Award, 
  CheckCircle2, 
  MessageCircle, 
  ArrowRight, 
  Star, 
  TrendingUp, 
  MapPin, 
  ShieldCheck, 
  Zap, 
  Eye,
  PhoneCall
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenAudit: () => void;
  onNavigateServices: () => void;
  onNavigateCertification: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onOpenAudit, 
  onNavigateServices, 
  onNavigateCertification 
}) => {
  const [photoError, setPhotoError] = useState<boolean>(false);

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
      
      {/* Background Animated Pulse Glow Elements */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[650px] h-[450px] bg-gradient-to-tr from-emerald-600/15 via-teal-500/10 to-cyan-500/15 rounded-full blur-[110px] pointer-events-none -z-10 animate-pulse [animation-duration:6s]" />
      <div className="absolute -top-10 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-80 left-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Value Proposition */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            
            {/* Top Credential Badges with Pulse Glow */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <button 
                onClick={onNavigateCertification}
                className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-slate-900/90 text-emerald-400 border border-emerald-500/40 shadow-sm shadow-emerald-500/20 hover:bg-emerald-500/10 transition-all cursor-pointer"
                id="hero-iskills-badge"
              >
                <Award className="w-3.5 h-3.5 text-emerald-400 group-hover:rotate-12 transition-transform" />
                <span>iSkills Certified SEO Specialist</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              </button>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-900/70 text-slate-300 border border-slate-800">
                <Zap className="w-3 h-3 text-cyan-400" />
                <span>3+ Years Hands-On Experience</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
                Rank <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 underline decoration-emerald-500/30 decoration-wavy decoration-2">#1 on Google Maps</span> & Turn Searchers Into Paying Clients.
              </h1>
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Hi, I'm <strong className="text-white font-semibold">{PERSONAL_INFO.name}</strong>. I help small businesses, local contractors, and service clinics dominate local search, optimize their Google Business Profile, and build conversion-ready funnels that generate predictable phone calls and sales.
              </p>
            </div>

            {/* Key Benefit Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300 font-medium pt-1">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>$500 Turnkey Micro Site (1 Service + 1 Location + GBP)</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Google 3-Pack Proximity Domination ($300 Setup)</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Web Dev (WordPress, HTML/CSS, Next.js from $300)</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Cloudstack Backlinks ($1.50/Link) & DR/AS Links</span>
              </div>
            </div>

            {/* CTAs: WhatsApp FIRST, then Free Audit Form */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2 w-full">
              <a
                href={`https://wa.me/923365336008?text=${encodeURIComponent('Hi Abdul, I want to talk about SEO, GBP Optimization, Web Development, and local rankings for my business.')}`}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-cta"
                className="w-full sm:w-auto relative group overflow-hidden px-4 sm:px-6 py-3.5 sm:py-4 rounded-xl font-extrabold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-slate-950 shrink-0" />
                <span>Chat on WhatsApp: +92 336 5336008</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </a>

              <button
                onClick={onOpenAudit}
                id="hero-book-audit-cta"
                className="w-full sm:w-auto px-4 sm:px-6 py-3.5 sm:py-4 rounded-xl font-bold text-xs sm:text-sm text-emerald-400 bg-slate-900/90 hover:bg-slate-800/90 border border-emerald-500/30 hover:border-emerald-500/60 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-emerald-400 group-hover:rotate-12 transition-transform shrink-0" />
                <span>Free Audit for Local Business</span>
              </button>
            </div>

            {/* Quick Pricing Highlights Banner */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs text-slate-300">
              <span className="px-2.5 py-1 rounded-lg bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-mono font-bold">
                👑 Main: $500 Micro Site + GBP
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-teal-500/10 text-teal-300 border border-teal-500/20 font-mono font-bold">
                Web Dev: From $300
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-mono font-bold">
                Cloudstack: $1.50/Link
              </span>
              <button
                onClick={onNavigateServices}
                className="text-emerald-400 font-semibold underline hover:text-emerald-300 ml-1 transition-colors"
              >
                View All Pricing &rarr;
              </button>
            </div>

          </div>

          {/* Right Column: Stylized Portrait Frame & Floating Badges */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            
            {/* Glowing Ambient Halo behind picture frame */}
            <div className="absolute inset-0 max-w-sm mx-auto bg-gradient-to-b from-emerald-500/25 via-teal-500/20 to-cyan-500/15 rounded-3xl blur-2xl -z-10" />

            <div 
              className="relative w-full max-w-sm rounded-3xl bg-slate-900/90 border-2 border-emerald-500/40 p-4 shadow-2xl shadow-emerald-950/60 backdrop-blur-xl group"
            >
              {/* Top Frame Bar */}
              <div className="flex items-center justify-between pb-3 px-1 border-b border-slate-800/80">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Verified Specialist Profile
                </span>
              </div>

              {/* Picture / Avatar Container */}
              <div className="relative aspect-[4/4.5] w-full rounded-2xl bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 overflow-hidden mt-3 border border-slate-800 flex items-center justify-center">
                
                {!photoError ? (
                  <div className="w-full h-full relative group">
                    <img
                      src="/images/abdulsuboor-hero.webp"
                      alt={`${PERSONAL_INFO.name} - SEO & Local SEO Specialist`}
                      onError={() => setPhotoError(true)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center space-y-4 relative">
                    
                    {/* Stylized Avatar & Specialist Illustration */}
                    <div className="relative">
                      <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-tr from-emerald-500 via-teal-400 to-cyan-400 p-[2px] shadow-xl shadow-emerald-500/30 flex items-center justify-center">
                        <div className="w-full h-full bg-slate-950 rounded-[14px] flex flex-col items-center justify-center relative overflow-hidden">
                          <div className="relative flex items-center justify-center">
                            <MapPin className="w-12 h-12 text-emerald-400 fill-emerald-400/20" />
                            <span className="absolute -top-1 -right-1 px-1.5 py-0.5 bg-gradient-to-r from-emerald-400 to-teal-300 text-slate-950 font-black text-[10px] rounded-full shadow-md">
                              #1
                            </span>
                          </div>
                          <span className="text-[10px] text-emerald-400 uppercase tracking-widest font-mono mt-1 font-bold">Abdul Suboor</span>
                        </div>
                      </div>
                      <span className="absolute -bottom-2 -right-2 p-1.5 rounded-xl bg-emerald-400 text-slate-950 shadow-md">
                        <ShieldCheck className="w-4 h-4" />
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h4 className="font-bold text-white text-base">{PERSONAL_INFO.name}</h4>
                      <p className="text-xs text-slate-300 font-medium">SEO, Local SEO & GBP Specialist</p>
                      <p className="text-[11px] text-emerald-400 font-mono font-semibold">iSkills Certified • ID: 726553</p>
                    </div>

                  </div>
                )}

                {/* Floating Overlay Badge: Local Rank #1 */}
                <div className="absolute top-4 left-4 bg-slate-950/90 backdrop-blur-md border border-emerald-500/40 px-3 py-1.5 rounded-xl shadow-xl flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black text-xs">
                    #1
                  </div>
                  <div className="text-left">
                    <p className="text-[9px] uppercase tracking-wider text-slate-400 font-bold">Google Maps</p>
                    <p className="text-xs font-extrabold text-white">3-Pack Ranking</p>
                  </div>
                </div>

                {/* Floating Overlay Badge: 3+ Years */}
                <div className="absolute bottom-4 right-4 bg-slate-950/90 backdrop-blur-md border border-teal-500/40 px-3 py-1.5 rounded-xl shadow-xl flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-teal-500/20 text-teal-300 flex items-center justify-center font-black text-xs">
                    3+
                  </div>
                  <div className="text-left">
                    <p className="text-[9px] uppercase tracking-wider text-slate-400 font-bold">Experience</p>
                    <p className="text-xs font-extrabold text-white">Years Proven</p>
                  </div>
                </div>

              </div>

              {/* Bottom Quick Bar */}
              <div className="pt-3 px-1 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-slate-300 font-medium">Available for New Clients</span>
                </div>
                <span className="font-mono text-emerald-400 text-[11px]">+92 336 5336008</span>
              </div>

            </div>

          </div>

        </div>

        {/* Live Metrics Row */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-slate-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {PERSONAL_INFO.stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-slate-900/60 p-4 sm:p-5 rounded-2xl border border-slate-800 hover:border-emerald-500/30 transition-all text-center relative overflow-hidden group"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 font-mono tracking-tight group-hover:scale-105 transition-transform">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">
                  {stat.label}
                </div>
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
