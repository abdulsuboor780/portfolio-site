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
  const [web20LinksCount, setWeb20LinksCount] = useState<number>(10);
  const [activeCalcTab, setActiveCalcTab] = useState<'web20' | 'cloud'>('web20');
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(0);

  // SEO & Schema Setup
  useEffect(() => {
    document.title = 'Transparent SEO, AI SEO & Backlink Pricing (2026) | Abdul Suboor';

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      'content',
      'Transparent SEO pricing: Local SEO + AI SEO & GEO ($800/mo), Turnkey Micro Local Sites ($500/mo), Indexable Web 2.0 Parasite Backlinks ($1.50/link - 20 available), Cloudstack links ($1.50/link), and Forum links.'
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
          name: 'Transparent SEO, AI SEO & Backlink Pricing',
          url: 'https://abdulsuboor.com/pricing',
          description: 'Transparent SEO pricing for Local SEO + AI SEO & GEO ($800/mo), Turnkey Micro Local Sites ($500/mo), and Web 2.0 Parasite Backlinks ($1.50/link).',
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
  const web20TotalCost = (web20LinksCount * 1.5).toFixed(web20LinksCount % 2 === 0 ? 0 : 2);

  const pricingFaqs = [
    {
      question: 'What is included in the $800/month Local SEO + AI SEO & GEO + GBP Retainer?',
      answer:
        'The $800/mo retainer is our ultimate search ecosystem. It combines traditional Local SEO (micro landing pages, geo-grid 3-Pack rankings, schema graph, NAP velocity) with modern AI SEO (semantic entity clustering, knowledge graph triples) and GEO (Generative Engine Optimization to secure citations in Google Gemini AI Overviews, Perplexity AI, and ChatGPT Search), along with continuous GBP management and spam competitor removal over a 6 to 12-month contract.',
    },
    {
      question: 'How does the $1.50 Indexable Web 2.0 Parasite Backlinks service work?',
      answer:
        'We build handcrafted, high-authority Web 2.0 properties (DA 80–95+ on platforms like WordPress.com, Blogger, Medium, Wix, Substack) with unique handwritten niche articles and fast indexation signals. Each link is $1.50 USD, and supply is strictly capped at 20 available spots to ensure 100% manual quality and indexability.',
    },
    {
      question: 'Why are the Local SEO & Micro Site packages structured as 6 to 12-month contracts?',
      answer:
        'Google 3-Pack proximity algorithms, citation velocity, review accumulation, and AI answer engine training loops require sustained authority building. A 6 to 12-month contract guarantees that your business not only reaches #1 but defends that position against aggressive competitors.',
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept international bank transfers, Wise (TransferWise), Payoneer, direct crypto payments (USDT/BTC), or verified milestone contracts through Upwork or Fiverr if preferred by corporate clients.',
    },
    {
      question: 'How do I receive proof of work and deliverables?',
      answer:
        'Every project includes complete transparent reporting: live URL spreadsheets for all backlinks and Web 2.0 properties (including account login credentials), full source code handover for web builds, and before/after Geo-Grid tracking scans for Google Maps rankings.',
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
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                Micro Order & Volume Calculator
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-white">
                Customize Your Link Order ($1.50 / Link)
              </h2>
            </div>
            <div className="flex items-center gap-2 p-1 rounded-xl bg-slate-950 border border-slate-800">
              <button
                onClick={() => setActiveCalcTab('web20')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeCalcTab === 'web20'
                    ? 'bg-emerald-400 text-slate-950'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Web 2.0 Parasite (20 Max)
              </button>
              <button
                onClick={() => setActiveCalcTab('cloud')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeCalcTab === 'cloud'
                    ? 'bg-emerald-400 text-slate-950'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Cloudstack Links
              </button>
            </div>
          </div>

          {activeCalcTab === 'web20' ? (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Zap className="w-4 h-4 text-emerald-400" />
                    <span>Indexable Web 2.0 Parasite Backlinks</span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      Strict Cap: 20 Available Spots
                    </span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    DA 80–95+ authority web 2.0 properties with handwritten niche content, media embeds & rapid indexing signals.
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-black text-emerald-400">${web20TotalCost}</span>
                  <span className="text-xs text-slate-400 block font-medium">({web20LinksCount} of 20 Max Selected)</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-xs font-bold text-slate-400">
                  <span>1 Link ($1.50)</span>
                  <span className="text-emerald-400 font-bold">{web20LinksCount} Web 2.0 Links Selected (${web20TotalCost})</span>
                  <span>20 Links ($30.00 Max Cap)</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={web20LinksCount}
                  onChange={(e) => setWeb20LinksCount(parseInt(e.target.value))}
                  className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-800">
                <p className="text-xs text-slate-400">
                  Includes unique handwritten niche article, media embeds, full login credentials, and fast indexation pings.
                </p>
                <button
                  onClick={() => onSelectServiceForContact(`Indexable Web 2.0 Backlinks (${web20LinksCount} Links - $${web20TotalCost})`)}
                  className="px-5 py-2.5 rounded-xl bg-emerald-400 text-slate-950 font-bold text-xs hover:bg-emerald-300 transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Order {web20LinksCount} Web 2.0 Links ($${web20TotalCost})</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                    <span>Cloudstack Entity Backlinks (AWS, GCP, Azure, Oracle)</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Multi-cloud authority properties engineered to transfer massive raw root trust and shield against algorithm updates.
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-black text-emerald-400">${cloudTotalCost}</span>
                  <span className="text-xs text-slate-400 block font-medium">({cloudLinksCount} Links Total)</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-xs font-bold text-slate-400">
                  <span>1 Link ($1.50)</span>
                  <span className="text-emerald-400 font-bold">{cloudLinksCount} Cloudstack Links Selected (${cloudTotalCost})</span>
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
                  <span>Order {cloudLinksCount} Cloudstack Links ($${cloudTotalCost})</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
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
