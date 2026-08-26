import React, { useState } from 'react';
import { 
  Check, 
  Sparkles, 
  Layers, 
  MapPin, 
  Link2, 
  Rocket, 
  ArrowRight, 
  MessageCircle, 
  Clock, 
  Target, 
  Zap, 
  ShieldCheck, 
  Globe, 
  Code2, 
  Cloud, 
  Cpu, 
  CheckCircle2, 
  ExternalLink,
  ChevronRight,
  Sliders,
  Flame,
  Star
} from 'lucide-react';
import { SERVICES_DATA, PERSONAL_INFO } from '../data/portfolioData';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
  onOpenAudit: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ 
  onSelectService, 
  onOpenAudit 
}) => {
  // State for interactive widgets
  const [activeTab, setActiveTab] = useState<'all' | 'flagship' | 'web-dev' | 'backlinks' | 'gbp'>('all');
  const [cloudLinksCount, setCloudLinksCount] = useState<number>(20); // 1 to 30
  const [selectedDrTier, setSelectedDrTier] = useState<number>(1); // 0: DR20, 1: DR40, 2: DR60
  const [activeWebTech, setActiveWebTech] = useState<'all' | 'wordpress' | 'html' | 'nextjs'>('all');

  const mainPackage = SERVICES_DATA.find((s) => s.id === 'micro-local-site-gbp');
  const webDevPackage = SERVICES_DATA.find((s) => s.id === 'website-development');
  const cloudstackPackage = SERVICES_DATA.find((s) => s.id === 'cloudstack-backlinks');
  const gbpPackage = SERVICES_DATA.find((s) => s.id === 'gbp-optimization');
  const drBacklinksPackage = SERVICES_DATA.find((s) => s.id === 'dr-as-backlinks');

  // Cloudstack link cost calculation: $1.50 per link
  const cloudTotalCost = (cloudLinksCount * 1.5).toFixed(cloudLinksCount % 2 === 0 ? 0 : 2);

  return (
    <section id="services" className="py-16 sm:py-24 relative">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[550px] bg-emerald-500/5 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            <Layers className="w-3.5 h-3.5" />
            <span>High-Converting Services & Transparent Pricing</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            SEO, Web Development & Authority Systems Built to <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300">Generate Real Revenue</span>
          </h2>
          
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Direct pricing with zero agency fluff. From turnkey $500 micro funnels to high-power cloudstack links and custom tech builds — choose your growth engine or set custom pricing directly on WhatsApp.
          </p>

          {/* Service Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/30'
                  : 'bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              All Services & Pricing
            </button>
            <button
              onClick={() => setActiveTab('flagship')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'flagship'
                  ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/30'
                  : 'bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              <Flame className="w-3.5 h-3.5 fill-current" />
              <span>$500 Flagship Funnel</span>
            </button>
            <button
              onClick={() => setActiveTab('web-dev')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'web-dev'
                  ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/30'
                  : 'bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Web Development ($300+)</span>
            </button>
            <button
              onClick={() => setActiveTab('backlinks')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'backlinks'
                  ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/30'
                  : 'bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              <Cloud className="w-3.5 h-3.5" />
              <span>Cloudstack & Backlinks</span>
            </button>
            <button
              onClick={() => setActiveTab('gbp')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'gbp'
                  ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/30'
                  : 'bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>GBP 3-Pack ($300)</span>
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 1. 👑 MAIN FLAGSHIP SERVICE: $500 Micro Local Site (1 Service + 1 Location + GBP) */}
        {/* ========================================================================= */}
        {(activeTab === 'all' || activeTab === 'flagship') && mainPackage && (
          <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950 border-2 border-emerald-500/50 p-6 sm:p-10 shadow-2xl shadow-emerald-950/40 overflow-hidden">
            
            {/* Top Ribbon */}
            <div className="absolute top-0 right-0">
              <div className="bg-gradient-to-l from-emerald-400 via-teal-300 to-cyan-400 text-slate-950 text-xs font-black uppercase tracking-wider py-1.5 px-6 rounded-bl-2xl shadow-lg flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 fill-slate-950" />
                <span>Primary All-In-One Main Service</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4 lg:pt-0">
              
              {/* Left Column: Comprehensive Scope */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center gap-1.5">
                    <Target className="w-3.5 h-3.5" />
                    <span>1 Core Service • 1 Target City / Location</span>
                  </span>
                  <span className="flex items-center gap-1 text-xs text-slate-400 font-mono">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" />
                    Delivery: {mainPackage.turnaround}
                  </span>
                </div>

                <div className="space-y-2.5">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                    {mainPackage.name}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {mainPackage.description}
                  </p>
                </div>

                {/* 3 Core Pillars Architecture */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                  <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                      <Globe className="w-4 h-4" />
                    </div>
                    <h5 className="text-xs font-bold text-white">Sub-1s Micro Site</h5>
                    <p className="text-[11px] text-slate-400 leading-tight">1 Service + 1 City conversion landing asset with direct WhatsApp & Call funnel.</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
                    <div className="w-7 h-7 rounded-lg bg-teal-500/10 text-teal-400 flex items-center justify-center">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <h5 className="text-xs font-bold text-white">Full GBP 3-Pack</h5>
                    <p className="text-[11px] text-slate-400 leading-tight">Category audit, geo-tagged photos, spam redressals & search proximity.</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
                    <div className="w-7 h-7 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <h5 className="text-xs font-bold text-white">Schema & 30 Citations</h5>
                    <p className="text-[11px] text-slate-400 leading-tight">LocalBusiness JSON-LD, NAP synchronization & Google Console setup.</p>
                  </div>
                </div>

                {/* Detailed Deliverables Checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                  {mainPackage.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Custom Multi-Location Notice */}
                <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-xs text-slate-300 flex items-center justify-between gap-3">
                  <div>
                    <strong className="text-emerald-300">Need Multiple Locations or Multi-Service Silos?</strong>
                    <p className="text-[11px] text-slate-400">Set custom scalable pricing directly on WhatsApp according to your business size.</p>
                  </div>
                  <a
                    href={`https://wa.me/923365336008?text=${encodeURIComponent('Hi Abdul, I want custom pricing for a multi-location / multi-service site.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 px-3 py-1.5 rounded-lg bg-emerald-400 text-slate-950 font-extrabold text-[11px] hover:bg-emerald-300 transition-colors"
                  >
                    Custom Quote
                  </a>
                </div>
              </div>

              {/* Right Column: Price & Direct Booking Box */}
              <div className="lg:col-span-5 bg-slate-950/95 p-6 sm:p-8 rounded-3xl border border-emerald-500/40 text-center space-y-6 shadow-xl relative">
                
                <div className="space-y-1">
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-400">Turnkey Complete Investment</span>
                  <div className="flex items-baseline justify-center gap-1.5 pt-1">
                    <span className="text-5xl sm:text-6xl font-black text-white font-mono tracking-tight">$500</span>
                    <span className="text-xs text-slate-400 font-semibold">Flat One-Time</span>
                  </div>
                  <p className="text-xs text-emerald-300 font-medium pt-1">
                    1 Micro Site + 1 Location + Complete GBP Domination
                  </p>
                </div>

                {/* Value Guarantee */}
                <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-left space-y-2 text-xs">
                  <div className="flex items-center justify-between text-slate-300">
                    <span>⚡ Site Speed:</span>
                    <span className="text-emerald-400 font-mono font-bold">&lt; 0.8s Load Time</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span>📍 Google 3-Pack Setup:</span>
                    <span className="text-emerald-400 font-bold">100% Fully Configured</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span>📋 Verified Citations:</span>
                    <span className="text-emerald-400 font-mono font-bold">30 Local Directories</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span>💬 Direct Communication:</span>
                    <span className="text-emerald-400 font-bold">Abdul Suboor (WhatsApp)</span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="space-y-2.5 pt-1">
                  <a
                    href={`https://wa.me/923365336008?text=${encodeURIComponent('Hi Abdul, I want to book the $500 Main Service: Micro Site (1 Service + 1 Location) with GBP Optimization for my business.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 px-5 rounded-2xl font-extrabold text-sm text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 hover:shadow-xl hover:shadow-emerald-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 fill-slate-950" />
                    <span>Order $500 Turnkey Package on WhatsApp</span>
                  </a>

                  <button
                    onClick={() => onSelectService('Turnkey Micro Local Site + Google Business Profile ($500)')}
                    className="w-full py-3 px-4 rounded-xl font-bold text-xs text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-colors"
                  >
                    Inquire via Contact Form
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>iSkills Certified Specialist ID: 726553</span>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 2. 🌐 WEBSITE DEVELOPMENT SERVICE (WordPress, HTML/CSS, Next.js) */}
        {/* ========================================================================= */}
        {(activeTab === 'all' || activeTab === 'web-dev') && webDevPackage && (
          <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 sm:p-10 shadow-xl space-y-8">
            
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold border border-cyan-500/30">
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Web Engineering & Funnel Architecture</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  Custom Website Development <span className="text-cyan-400 font-mono">(WordPress, HTML/CSS, Next.js)</span>
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  We engineer high-speed, conversion-oriented websites across your preferred technology stack. 
                  Micro sites start at <strong>$300</strong>, with custom pricing set transparently on WhatsApp according to your business requirements and feature scope.
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <span className="px-3 py-1 rounded-lg bg-slate-950 border border-cyan-500/30 text-cyan-300 text-xs font-bold flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-cyan-400" />
                    WordPress CMS
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-slate-950 border border-emerald-500/30 text-emerald-300 text-xs font-bold flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                    Pure HTML5 / Tailwind CSS
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-slate-950 border border-teal-500/30 text-teal-300 text-xs font-bold flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-teal-400" />
                    Next.js & React
                  </span>
                </div>
              </div>

              {/* Base Price Callout Box */}
              <div className="bg-slate-950 p-6 rounded-2xl border border-cyan-500/30 text-left space-y-3 shrink-0 lg:w-80">
                <span className="text-[10px] uppercase font-bold text-cyan-400 block tracking-wider">Web Dev Base Pricing</span>
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-white font-mono">$300</span>
                    <span className="text-xs text-slate-400">/ Micro Site</span>
                  </div>
                  <span className="text-[11px] text-slate-300 font-medium">Custom scoped for multi-page or web apps</span>
                </div>

                <a
                  href={`https://wa.me/923365336008?text=${encodeURIComponent('Hi Abdul, I want to discuss Website Development for my business (WordPress/HTML/Next.js). Base $300 micro site or custom quote.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl font-bold text-xs text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-slate-950" />
                  <span>Discuss Web Dev on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* 3 Tier Web Dev Architecture Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              {webDevPackage.pricingOptions?.map((tier, idx) => (
                <div
                  key={idx}
                  className={`rounded-2xl p-6 flex flex-col justify-between space-y-6 transition-all border ${
                    tier.popular
                      ? 'bg-slate-950 border-cyan-500/60 shadow-xl shadow-cyan-950/30 ring-1 ring-cyan-500/40 relative'
                      : 'bg-slate-950/70 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {tier.popular && (
                    <span className="absolute -top-3 left-6 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-cyan-400 text-slate-950">
                      Most Popular Scope
                    </span>
                  )}

                  <div className="space-y-4">
                    <div className="space-y-1">
                      <h4 className="text-base font-black text-white">{tier.tier}</h4>
                      <div className="text-2xl sm:text-3xl font-black text-cyan-400 font-mono">
                        {tier.price}
                      </div>
                    </div>

                    <ul className="space-y-2.5 pt-2 border-t border-slate-800">
                      {tier.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={`https://wa.me/923365336008?text=${encodeURIComponent(`Hi Abdul, I want to discuss the ${tier.tier} web development package (${tier.price}).`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3.5 rounded-xl font-bold text-xs text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-cyan-400/50 transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Set Scope on WhatsApp</span>
                  </a>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* 3. ☁️ CLOUDSTACK HIGH-POWER ENTITY BACKLINKS ($1.50 per link, up to 30) */}
        {/* ========================================================================= */}
        {(activeTab === 'all' || activeTab === 'backlinks') && cloudstackPackage && (
          <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-cyan-500/40 p-6 sm:p-10 shadow-xl space-y-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold border border-cyan-500/30">
                  <Cloud className="w-3.5 h-3.5" />
                  <span>Cloud Authority Entity Stacking</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  Get Cloudstack Backlinks — <span className="text-cyan-300 font-mono">$1.50 Per Link</span>
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Harness the supreme domain authority of global cloud platforms: <strong>Amazon AWS S3, Google Cloud Storage, Microsoft Azure, Oracle Cloud, and IBM Cloud</strong>. 
                  Semantic HTML entity stacks passing massive crawl budget, indexation juice, and map proximity trust to your GBP and money site. Available from <strong>1 up to 30 links</strong>.
                </p>

                {/* Cloud Provider Pills */}
                <div className="flex flex-wrap gap-2 text-[11px] font-semibold text-slate-300 pt-1">
                  <span className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800">☁️ Amazon AWS S3</span>
                  <span className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800">☁️ Google Cloud</span>
                  <span className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800">☁️ Microsoft Azure</span>
                  <span className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800">☁️ Oracle Cloud</span>
                  <span className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800">☁️ IBM Cloud</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 pt-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>$1.50 per link (Order 1 to 30 links)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Schema Graph & Map Embed injection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Accelerated Google indexation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Full Live URL Excel spreadsheet</span>
                  </div>
                </div>
              </div>

              {/* Interactive Cloudstack Link Calculator */}
              <div className="lg:col-span-5 bg-slate-950 p-6 sm:p-8 rounded-3xl border border-cyan-500/30 text-center space-y-6 shadow-xl">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1 text-[11px] font-bold text-cyan-400 uppercase tracking-wider">
                    <Sliders className="w-3.5 h-3.5" />
                    <span>Interactive Cloudstack Calculator</span>
                  </div>
                  <h4 className="text-xl font-bold text-white">Select Your Link Volume</h4>
                </div>

                {/* Slider / Counter */}
                <div className="space-y-4 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-300">Quantity of Links:</span>
                    <span className="text-lg font-black text-cyan-400 font-mono">{cloudLinksCount} Links</span>
                  </div>

                  <input
                    type="range"
                    min="1"
                    max="30"
                    step="1"
                    value={cloudLinksCount}
                    onChange={(e) => setCloudLinksCount(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                  />

                  <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                    <span>1 Link ($1.50)</span>
                    <span>15 Links ($22.50)</span>
                    <span>30 Links ($45 Max)</span>
                  </div>

                  {/* Quick Preset Buttons */}
                  <div className="flex gap-2 pt-1">
                    {[10, 20, 30].map((preset) => (
                      <button
                        key={preset}
                        onClick={() => setCloudLinksCount(preset)}
                        className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${
                          cloudLinksCount === preset
                            ? 'bg-cyan-500 text-slate-950'
                            : 'bg-slate-950 text-slate-300 hover:text-white border border-slate-800'
                        }`}
                      >
                        {preset} Links (${(preset * 1.5).toFixed(0)})
                      </button>
                    ))}
                  </div>
                </div>

                {/* Calculated Price */}
                <div className="space-y-1">
                  <div className="text-4xl font-black text-white font-mono tracking-tight">
                    ${cloudTotalCost}
                  </div>
                  <p className="text-xs text-cyan-300">
                    For {cloudLinksCount} authoritative cloudstack dofollow links ($1.50 / link)
                  </p>
                </div>

                <a
                  href={`https://wa.me/923365336008?text=${encodeURIComponent(`Hi Abdul, I want to order ${cloudLinksCount} Cloudstack Backlinks for $${cloudTotalCost} ($1.50/link).`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl font-extrabold text-xs text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-slate-950" />
                  <span>Order {cloudLinksCount} Cloudstack Links on WhatsApp (${cloudTotalCost})</span>
                </a>

                <p className="text-[10px] text-slate-400">
                  ⚡ 3-5 business days turnaround • Complete Excel report with live links
                </p>
              </div>

            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* 4. 📍 GOOGLE BUSINESS PROFILE (GBP) 3-PACK OPTIMIZATION ($300 / $150 mo) */}
        {/* ========================================================================= */}
        {(activeTab === 'all' || activeTab === 'gbp') && gbpPackage && (
          <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 sm:p-10 shadow-xl space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/30">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Google Maps Ranking Specialist</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  {gbpPackage.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {gbpPackage.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200 pt-2">
                  {gbpPackage.highlights.slice(2).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Two Clear Pricing Options */}
              <div className="lg:col-span-5 bg-slate-950 p-6 sm:p-8 rounded-3xl border border-emerald-500/30 text-center space-y-5">
                <div className="grid grid-cols-2 gap-3 p-1.5 bg-slate-900 rounded-2xl border border-slate-800 text-left">
                  <div className="p-3.5 rounded-xl bg-slate-950/90 border border-emerald-500/30 space-y-1">
                    <span className="text-[10px] uppercase font-bold text-emerald-400 block">Option A</span>
                    <p className="text-xs font-bold text-white">1-Time Setup</p>
                    <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">$300</div>
                    <span className="text-[10px] text-slate-400 block">Complete Overhaul</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950/90 border border-teal-500/30 space-y-1">
                    <span className="text-[10px] uppercase font-bold text-teal-300 block">Option B</span>
                    <p className="text-xs font-bold text-white">Monthly Growth</p>
                    <div className="text-2xl sm:text-3xl font-black text-teal-300 font-mono">$150<span className="text-[11px] font-sans font-normal text-slate-400">/mo</span></div>
                    <span className="text-[10px] text-slate-400 block">Ongoing Handling</span>
                  </div>
                </div>

                <a
                  href={`https://wa.me/923365336008?text=${encodeURIComponent('Hi Abdul, I want to book GBP Optimization ($300 one-time setup / $150 monthly) for my Google Business Profile.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl font-extrabold text-xs text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-slate-950" />
                  <span>Order GBP Setup on WhatsApp ($300)</span>
                </a>
              </div>

            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 5. 🔗 DR & AS INCREASING AUTHORITY BACKLINKS ($50 to $300) */}
        {/* ========================================================================= */}
        {(activeTab === 'all' || activeTab === 'backlinks') && drBacklinksPackage && drBacklinksPackage.pricingOptions && (
          <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 sm:p-10 shadow-xl space-y-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="space-y-2 max-w-2xl">
                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold border border-cyan-500/30">
                  <Link2 className="w-3.5 h-3.5" />
                  <span>Organic Domain Rating Boost</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  DR & AS Increasing Dofollow Backlinks
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Organic dofollow comment backlinks on low Outbound Links (OBL) pages with zero toxic networks or link farms. Safe, white-hat link power engineered to elevate Ahrefs DR and Moz/Semrush Authority Score.
                </p>
              </div>

              <div className="bg-slate-950 p-4 rounded-2xl border border-cyan-500/20 shrink-0 text-left space-y-1">
                <span className="text-[10px] uppercase font-bold text-cyan-400">Strict Quality Standard:</span>
                <p className="text-xs font-semibold text-white">✓ 100% Organic Dofollow Links</p>
                <p className="text-xs font-semibold text-white">✓ Low OBL Pages (No Spam Farms)</p>
                <p className="text-xs font-semibold text-white">✓ Live Excel/Sheet URL Report</p>
              </div>
            </div>

            {/* Backlink Tier Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {drBacklinksPackage.pricingOptions.map((tier, idx) => (
                <div
                  key={idx}
                  className={`rounded-2xl p-6 flex flex-col justify-between space-y-6 transition-all border cursor-pointer ${
                    selectedDrTier === idx
                      ? 'bg-slate-950 border-cyan-400 shadow-xl shadow-cyan-950/40 ring-1 ring-cyan-400'
                      : 'bg-slate-950/70 border-slate-800 hover:border-slate-700'
                  }`}
                  onClick={() => setSelectedDrTier(idx)}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                        {tier.tier}
                      </span>
                      <span className="text-xs font-mono font-bold text-emerald-400">
                        {tier.drTarget}
                      </span>
                    </div>

                    <div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-black text-white font-mono">{tier.price}</span>
                        <span className="text-xs text-slate-400">/ package</span>
                      </div>
                      <p className="text-xs text-cyan-300 font-semibold mt-1">{tier.links}</p>
                    </div>

                    <ul className="space-y-2 pt-2 border-t border-slate-800">
                      {tier.features.map((f, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={`https://wa.me/923365336008?text=${encodeURIComponent(`Hi Abdul, I want to order the ${tier.tier} (${tier.links} for ${tier.price}) backlink package.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3.5 rounded-xl font-bold text-xs text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Order on WhatsApp ({tier.price})</span>
                  </a>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* 6. ⚡ HIGH-FOCUS FEATURE: Set Custom Pricing on WhatsApp */}
        {/* ========================================================================= */}
        <div className="relative rounded-3xl bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 border-2 border-emerald-500/50 p-8 sm:p-10 shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-black bg-emerald-400 text-slate-950">
                <Zap className="w-3.5 h-3.5 fill-slate-950" />
                <span>Custom Pricing According to Your Business Scale</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                Need a Bespoke Scope, Multi-Location Funnel, or Tailored Retainer?
              </h3>

              <p className="text-sm text-slate-200 leading-relaxed max-w-2xl">
                Every business model is different. Whether you need a multi-page WordPress website, an enterprise Next.js portal, multi-city GBP expansion, or volume cloudstack link campaigns, <strong>Abdul sets custom pricing directly with you on WhatsApp</strong> based on your competition and target goals.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-300 font-medium">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Multi-Location Businesses</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Custom Tech Stack & Next.js</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Flexible Retainers on WhatsApp</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-950/90 p-6 rounded-2xl border border-emerald-500/40 text-center space-y-4">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-bold">Direct WhatsApp Consultation</span>
                <h4 className="text-lg font-bold text-white">Chat Directly With Abdul</h4>
                <p className="text-xs text-emerald-400 font-mono">+92 336 5336008</p>
              </div>

              <a
                href={`https://wa.me/923365336008?text=${encodeURIComponent('Hi Abdul, I want to discuss a Custom Pricing package for my business (Tech / SEO / Locations).')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-5 rounded-xl font-extrabold text-sm text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 hover:shadow-lg hover:shadow-emerald-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950" />
                <span>Set Pricing on WhatsApp</span>
              </a>

              <p className="text-[11px] text-slate-400">
                ⚡ Direct consultation • Fast response within 10-15 minutes
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
