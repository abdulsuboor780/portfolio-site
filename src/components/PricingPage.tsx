import React, { useState, useEffect } from 'react';
import { 
  Check, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  MessageCircle, 
  ChevronRight, 
  ChevronDown,
  Clock, 
  Award,
  CreditCard,
  CheckCircle2,
  HelpCircle,
  TrendingUp,
  FileText
} from 'lucide-react';
import { SERVICES_DATA, PERSONAL_INFO } from '../data/portfolioData';

interface PricingPageProps {
  onNavigateHome: () => void;
  onNavigateServices: () => void;
  onSelectServiceSlug: (slug: string) => void;
  onSelectServiceForContact: (serviceName: string) => void;
  onOpenAudit: () => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({
  onNavigateHome,
  onNavigateServices,
  onSelectServiceSlug,
  onSelectServiceForContact,
  onOpenAudit,
}) => {
  const [cloudLinksCount, setCloudLinksCount] = useState<number>(20);
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(0);

  // SEO & Schema Setup
  useEffect(() => {
    document.title = 'Transparent Local SEO & Web Development Pricing (2026) | Abdul Suboor';

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      'content',
      'Flat, transparent pricing for Turnkey Micro Local Sites ($500), GBP 3-Pack Optimization ($300), Cloudstack Backlinks ($1.50/link), and Web Development. Zero agency markup.'
    );

    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', 'https://abdulsuboor.com/pricing');

    // JSON-LD Structured Data
    const scriptId = 'pricing-structured-data-jsonld';
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = scriptId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const structuredData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': 'https://abdulsuboor.com/pricing#webpage',
          name: 'Transparent Local SEO & Web Development Pricing',
          url: 'https://abdulsuboor.com/pricing',
          description: 'Flat, transparent pricing for Turnkey Micro Local Sites, GBP Optimization, Cloudstack Backlinks, and Web Development.',
          isPartOf: {
            '@type': 'WebSite',
            name: 'Abdul Suboor SEO & Web Development',
            url: 'https://abdulsuboor.com',
          },
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://abdulsuboor.com',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Pricing',
              item: 'https://abdulsuboor.com/pricing',
            },
          ],
        },
      ],
    };

    scriptTag.text = JSON.stringify(structuredData);

    return () => {
      const existing = document.getElementById(scriptId);
      if (existing) existing.remove();
    };
  }, []);

  const cloudTotalCost = (cloudLinksCount * 1.5).toFixed(cloudLinksCount % 2 === 0 ? 0 : 2);

  const pricingFaqs = [
    {
      question: 'Are there any hidden monthly retainers or setup fees?',
      answer:
        'None whatsoever. Our turnkey micro sites ($500), cloudstack links ($1.50/link), web dev builds ($300+), and GBP optimizations ($300) are clear flat rates. You only pay for what you order, with zero forced monthly contracts.',
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept international bank transfers, Wise (TransferWise), Payoneer, direct crypto payments (USDT/BTC), or verified milestone contracts through Upwork or Fiverr if preferred by corporate clients.',
    },
    {
      question: 'Do you offer bulk discounts for agencies or multi-location businesses?',
      answer:
        'Yes! For agencies managing 5+ client accounts or multi-location franchises ordering multiple micro sites or bulk cloudstack link stacks, we provide custom discounted bundle rates via WhatsApp.',
    },
    {
      question: 'How do I receive proof of work and deliverables?',
      answer:
        'Every project includes complete transparent reporting: live URL spreadsheets for all backlinks and cloud properties, full source code handover for web builds, and before/after Geo-Grid tracking scans for Google Maps rankings.',
    },
  ];

  return (
    <div className="pt-24 pb-20 relative overflow-hidden bg-slate-950 text-slate-100">
      
      {/* Background Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* ========================================================================= */}
        {/* Breadcrumbs */}
        {/* ========================================================================= */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400">
          <button 
            onClick={onNavigateHome}
            className="hover:text-emerald-400 transition-colors cursor-pointer"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-emerald-400 font-semibold">Pricing & Plans</span>
        </nav>

        {/* ========================================================================= */}
        {/* Header Hero */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>100% Transparent Investment</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Clear, Flat-Rate SEO & Development Pricing
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            No bloated $3,000/month agency lock-in traps. You get direct access to an iSkills Certified SEO specialist delivering tangible ranking assets with complete proof of work.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-xs text-slate-400">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4" /> 100% White-Hat Only
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-4 h-4 text-emerald-400" /> 3 - 10 Day Fast Turnaround
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Award className="w-4 h-4 text-emerald-400" /> Certified iSkills ID: 726553
            </span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* Main 5-Tier Pricing Cards Grid */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service) => {
            const isFeatured = service.isMain;
            return (
              <div
                key={service.id}
                className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all relative ${
                  isFeatured
                    ? 'bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border-2 border-emerald-400 shadow-2xl shadow-emerald-500/20 lg:-translate-y-2'
                    : 'bg-slate-900/70 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-emerald-400 text-slate-950 font-black text-[11px] uppercase tracking-wider shadow-md">
                    👑 Most Popular Choice
                  </div>
                )}

                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                      {service.badge}
                    </span>
                    <h2 className="text-xl font-bold text-white">
                      {service.name}
                    </h2>
                    <p className="text-xs text-slate-400 line-clamp-2">
                      {service.description}
                    </p>
                  </div>

                  <div className="py-2 border-y border-slate-800/80">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-black text-white">
                        {service.price}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">
                        {service.period}
                      </span>
                    </div>
                  </div>

                  {/* Highlights Checklist */}
                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] uppercase font-bold text-slate-400 block tracking-wider">
                      Included Deliverables:
                    </span>
                    <ul className="space-y-2 text-xs text-slate-300">
                      {service.highlights.slice(0, 5).map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 space-y-2.5">
                  <button
                    onClick={() => onSelectServiceForContact(service.name)}
                    className={`w-full py-3 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      isFeatured
                        ? 'bg-gradient-to-r from-emerald-400 to-teal-300 text-slate-950 hover:scale-[1.02] shadow-lg shadow-emerald-500/25'
                        : 'bg-slate-800 hover:bg-slate-700 text-white'
                    }`}
                  >
                    <Zap className="w-3.5 h-3.5" />
                    <span>Select {service.name.split(' ')[0]}</span>
                  </button>

                  <button
                    onClick={() => onSelectServiceSlug(service.id)}
                    className="w-full py-2.5 rounded-xl text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>View Dedicated Page & Breakdown</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* Interactive Link Volume Calculator */}
        {/* ========================================================================= */}
        <div className="rounded-3xl bg-slate-900 border border-emerald-500/30 p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                Micro Order Calculator
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-white">
                Customize Your Cloudstack Link Stack ($1.50 / Link)
              </h2>
            </div>
            <div className="text-right">
              <span className="text-3xl font-black text-emerald-400">${cloudTotalCost}</span>
              <span className="text-xs text-slate-400 block font-medium">({cloudLinksCount} Links Total)</span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between text-xs font-bold text-slate-400">
              <span>1 Link ($1.50)</span>
              <span className="text-emerald-400 font-bold">{cloudLinksCount} Cloudstack Links Selected</span>
              <span>30 Links ($45.00 Max Tier)</span>
            </div>
            <input
              type="range"
              min="1"
              max="30"
              value={cloudLinksCount}
              onChange={(e) => setCloudLinksCount(parseInt(e.target.value))}
              className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-800">
            <p className="text-xs text-slate-400">
              Deploys across Amazon AWS S3, Google Cloud Storage, Microsoft Azure, and Oracle Cloud with live Excel sheet.
            </p>
            <button
              onClick={() => onSelectServiceForContact(`Cloudstack Backlinks (${cloudLinksCount} Links - $${cloudTotalCost})`)}
              className="px-5 py-2.5 rounded-xl bg-emerald-400 text-slate-950 font-bold text-xs hover:bg-emerald-300 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>Order {cloudLinksCount} Cloudstack Links</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* Payment Methods & Verification */}
        {/* ========================================================================= */}
        <div className="rounded-3xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-emerald-400" />
            <span>Accepted Payment Channels & Safe Escrow</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            We support flexible, secure international payment methods to ensure smooth transactions for US, UK, European, Canadian, Australian, and global clients:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2 text-center text-xs font-semibold">
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-300">
              Wise (TransferWise)
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-300">
              Payoneer
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-300">
              Direct Bank Wire
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-300">
              Crypto (USDT / BTC)
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-300">
              Upwork / Fiverr Escrow
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* Pricing FAQs */}
        {/* ========================================================================= */}
        <div className="space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Pricing & Ordering FAQs
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Common questions answered honestly with zero sales jargon.
            </p>
          </div>

          <div className="space-y-3 max-w-3xl mx-auto">
            {pricingFaqs.map((faq, idx) => {
              const isOpen = activeFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-slate-900/80 border border-slate-800 overflow-hidden"
                >
                  <button
                    onClick={() => setActiveFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 text-left font-bold text-sm text-white flex items-center justify-between gap-4 hover:text-emerald-400 transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-emerald-400 shrink-0 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* Final CTA Bar */}
        {/* ========================================================================= */}
        <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-emerald-950/40 to-slate-900 border-2 border-emerald-500/40 p-8 sm:p-10 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Need a Custom Quote or Multi-City Package?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Chat directly with Abdul Suboor on WhatsApp for an immediate consultation on your local niche and keyword difficulty.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/923365336008?text=Hi%20Abdul%2C%20I%20want%20to%20discuss%20a%20custom%20SEO%20and%20web%20package%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl font-bold text-xs text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all flex items-center gap-2 shadow-lg shadow-emerald-500/20"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp: +92 336 5336008</span>
            </a>
            <button
              onClick={onOpenAudit}
              className="px-6 py-3 rounded-xl font-bold text-xs text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-all flex items-center gap-2 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-emerald-400" />
              <span>Get Free 2026 Audit (PDF)</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
