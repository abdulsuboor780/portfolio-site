import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Check, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  Zap, 
  Target, 
  MessageCircle, 
  PhoneCall, 
  MapPin, 
  Code2, 
  Cloud, 
  Link2, 
  Layers, 
  Globe, 
  Star, 
  ChevronDown, 
  ChevronRight, 
  ExternalLink,
  Hammer,
  Wrench,
  Sun,
  Stethoscope,
  Home,
  Wind,
  CheckCircle2,
  DollarSign,
  TrendingUp,
  FileText,
  Flame
} from 'lucide-react';
import { DETAILED_SERVICES, ServiceDetail } from '../data/servicesDetailedData';
import { CASE_STUDIES, BLOG_POSTS, PERSONAL_INFO } from '../data/portfolioData';

interface ServiceDetailPageProps {
  slug: string;
  onNavigateHome: () => void;
  onNavigateServices: () => void;
  onNavigatePricing: () => void;
  onSelectService: (serviceName: string) => void;
  onSelectOtherService: (serviceSlug: string) => void;
  onSelectPost: (postSlug: string) => void;
  onOpenAudit: () => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  slug,
  onNavigateHome,
  onNavigateServices,
  onNavigatePricing,
  onSelectService,
  onSelectOtherService,
  onSelectPost,
  onOpenAudit,
}) => {
  const service = DETAILED_SERVICES[slug] || DETAILED_SERVICES['micro-local-site-gbp'];

  // State for interactive features
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(0);
  const [cloudLinksCount, setCloudLinksCount] = useState<number>(20);
  const [selectedDrTier, setSelectedDrTier] = useState<number>(1);
  const [activeTechTab, setActiveTechTab] = useState<'html' | 'wordpress' | 'nextjs'>('html');

  // Dynamic SEO Meta Tags & Schema Injection
  useEffect(() => {
    // 1. Update Document Title
    document.title = service.metaTitle;

    // 2. Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', service.metaDescription);

    // 3. Update Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', service.canonicalUrl);

    // 4. Update OpenGraph Tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', service.metaTitle);
    
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', service.metaDescription);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', service.canonicalUrl);

    // 5. Inject Rich JSON-LD Structured Data (Service + BreadcrumbList + FAQPage)
    const scriptId = 'service-structured-data-jsonld';
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
          '@type': 'Service',
          '@id': `${service.canonicalUrl}#service`,
          name: service.name,
          serviceType: service.name,
          description: service.metaDescription,
          url: service.canonicalUrl,
          provider: {
            '@type': 'Person',
            name: PERSONAL_INFO.name,
            jobTitle: PERSONAL_INFO.title,
            url: 'https://abdulsuboor.com',
            sameAs: [PERSONAL_INFO.linkedin, PERSONAL_INFO.facebook],
          },
          offers: {
            '@type': 'Offer',
            price: service.price.replace(/[^0-9.]/g, '') || '500',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
            validFrom: '2026-01-01',
          },
          areaServed: {
            '@type': 'AdministrativeArea',
            name: 'Worldwide, US, UK, Canada, Australia',
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
              name: 'Services',
              item: 'https://abdulsuboor.com/services',
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: service.name,
              item: service.canonicalUrl,
            },
          ],
        },
        {
          '@type': 'FAQPage',
          mainEntity: service.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        },
      ],
    };

    scriptTag.text = JSON.stringify(structuredData);

    return () => {
      const existing = document.getElementById(scriptId);
      if (existing) existing.remove();
    };
  }, [service]);

  // Find related case study
  const relatedCaseStudy = CASE_STUDIES.find((c) => c.id === service.relatedCaseStudyId);
  // Find related blog post
  const relatedBlogPost = BLOG_POSTS.find((b) => b.slug === service.relatedBlogSlug);

  // Icon mapper helper
  const renderIcon = (iconName: string, className: string = 'w-5 h-5') => {
    switch (iconName) {
      case 'Target': return <Target className={className} />;
      case 'Zap': return <Zap className={className} />;
      case 'PhoneCall': return <PhoneCall className={className} />;
      case 'MapPin': return <MapPin className={className} />;
      case 'ShieldCheck': return <ShieldCheck className={className} />;
      case 'Star': return <Star className={className} />;
      case 'Cloud': return <Cloud className={className} />;
      case 'Layers': return <Layers className={className} />;
      case 'Globe': return <Globe className={className} />;
      case 'Code2': return <Code2 className={className} />;
      case 'Link2': return <Link2 className={className} />;
      case 'Hammer': return <Hammer className={className} />;
      case 'Wrench': return <Wrench className={className} />;
      case 'Sun': return <Sun className={className} />;
      case 'Stethoscope': return <Stethoscope className={className} />;
      case 'Home': return <Home className={className} />;
      case 'Wind': return <Wind className={className} />;
      default: return <Sparkles className={className} />;
    }
  };

  const cloudTotalCost = (cloudLinksCount * 1.5).toFixed(cloudLinksCount % 2 === 0 ? 0 : 2);

  return (
    <div className="pt-24 pb-20 relative overflow-hidden bg-slate-950 text-slate-100">
      
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-96 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* ========================================================================= */}
        {/* Breadcrumb Navigation */}
        {/* ========================================================================= */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400">
          <button 
            onClick={onNavigateHome}
            className="hover:text-emerald-400 transition-colors flex items-center gap-1 cursor-pointer"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <button 
            onClick={onNavigateServices}
            className="hover:text-emerald-400 transition-colors cursor-pointer"
          >
            Services
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-emerald-400 font-semibold truncate max-w-[240px] sm:max-w-none">
            {service.name}
          </span>
        </nav>

        {/* ========================================================================= */}
        {/* Hero Section */}
        {/* ========================================================================= */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{service.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            {service.name}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-4xl leading-relaxed">
            {service.tagline}
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            {service.heroStats.map((stat, idx) => (
              <div 
                key={idx} 
                className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-center space-y-1 shadow-lg"
              >
                <div className="text-xl sm:text-2xl font-black text-emerald-400">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-4">
            <button
              onClick={() => onSelectService(service.name)}
              className="px-6 py-3.5 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer"
            >
              <Zap className="w-4 h-4 fill-slate-950 text-slate-950" />
              <span>Get Started with {service.name.split(' ')[0]}</span>
            </button>

            <a
              href={`https://wa.me/923365336008?text=${encodeURIComponent(`Hi Abdul, I want to discuss the "${service.name}" package (${service.price}) for my business.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-xl font-semibold text-sm text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition-all flex items-center gap-2 hover:scale-[1.02]"
            >
              <MessageCircle className="w-4 h-4 fill-emerald-400/20 text-emerald-400" />
              <span>Direct WhatsApp Discussion</span>
            </a>

            <button
              onClick={onOpenAudit}
              className="px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-300 bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 transition-all flex items-center gap-2 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-emerald-400" />
              <span>Free 2026 Local SEO Audit</span>
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* Executive Summary & Strategic Rationale */}
        {/* ========================================================================= */}
        <div className="rounded-3xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
            <ShieldCheck className="w-6 h-6 text-emerald-400" />
            <span>Service Overview & High-Impact Strategy</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {service.executiveSummary}
          </p>
        </div>

        {/* ========================================================================= */}
        {/* Interactive Feature Widget per Service Type */}
        {/* ========================================================================= */}
        {service.id === 'cloudstack-backlinks' && (
          <div className="rounded-3xl bg-slate-900 border-2 border-emerald-500/30 p-6 sm:p-8 space-y-6 shadow-xl shadow-emerald-950/20">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Interactive Order Estimator</span>
                <h3 className="text-xl sm:text-2xl font-black text-white">Select Your Cloudstack Link Volume</h3>
              </div>
              <div className="text-right">
                <span className="text-3xl font-black text-emerald-400">${cloudTotalCost}</span>
                <span className="text-xs text-slate-400 block font-medium">({cloudLinksCount} links × $1.50)</span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-xs font-bold text-slate-400">
                <span>1 Link ($1.50)</span>
                <span className="text-emerald-400 font-bold">{cloudLinksCount} Cloudstack Links</span>
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

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-center text-xs">
              <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-300 font-medium">
                Amazon AWS S3
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-300 font-medium">
                Google Cloud (GCP)
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-300 font-medium">
                Microsoft Azure
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-300 font-medium">
                Oracle Cloud & IBM
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-800">
              <p className="text-xs text-slate-400">
                Includes full spreadsheet report with verified live URLs and indexation submission.
              </p>
              <button
                onClick={() => onSelectService(`Cloudstack Backlinks (${cloudLinksCount} Links - $${cloudTotalCost})`)}
                className="px-5 py-2.5 rounded-xl bg-emerald-400 text-slate-950 font-bold text-xs hover:bg-emerald-300 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span>Order {cloudLinksCount} Cloudstack Links</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {service.id === 'dr-as-backlinks' && (
          <div className="rounded-3xl bg-slate-900 border-2 border-emerald-500/30 p-6 sm:p-8 space-y-6 shadow-xl shadow-emerald-950/20">
            <div>
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Authority Tier Selection</span>
              <h3 className="text-xl sm:text-2xl font-black text-white">Choose Your DR Sprint Package</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {service.pricingOptions?.map((tier, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedDrTier(idx)}
                  className={`p-5 rounded-2xl border-2 transition-all cursor-pointer space-y-3 ${
                    selectedDrTier === idx
                      ? 'bg-slate-950 border-emerald-400 shadow-lg shadow-emerald-500/20'
                      : 'bg-slate-950/50 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-white">{tier.tier}</span>
                    {tier.popular && (
                      <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                        Popular
                      </span>
                    )}
                  </div>
                  <div className="text-2xl font-black text-emerald-400">{tier.price}</div>
                  <div className="text-xs text-slate-400 font-semibold">{tier.links}</div>
                  <ul className="space-y-1.5 text-xs text-slate-300 pt-2 border-t border-slate-800/80">
                    {tier.features.map((f, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-800">
              <p className="text-xs text-slate-400">
                100% Organic Dofollow Comment Backlinks on verified low OBL pages with Excel URL report.
              </p>
              <button
                onClick={() => {
                  const selectedTierName = service.pricingOptions?.[selectedDrTier]?.tier || 'DR Backlinks';
                  onSelectService(`DR & AS Backlinks (${selectedTierName})`);
                }}
                className="px-5 py-2.5 rounded-xl bg-emerald-400 text-slate-950 font-bold text-xs hover:bg-emerald-300 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span>Book Selected DR Package</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {service.id === 'website-development' && (
          <div className="rounded-3xl bg-slate-900 border-2 border-emerald-500/30 p-6 sm:p-8 space-y-6 shadow-xl shadow-emerald-950/20">
            <div>
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Technology Comparison</span>
              <h3 className="text-xl sm:text-2xl font-black text-white">Compare Frontend & CMS Frameworks</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveTechTab('html')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTechTab === 'html'
                    ? 'bg-emerald-400 text-slate-950 shadow-md'
                    : 'bg-slate-950 text-slate-400 border border-slate-800'
                }`}
              >
                Pure HTML5 + Tailwind (Sub-0.4s)
              </button>
              <button
                onClick={() => setActiveTechTab('wordpress')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTechTab === 'wordpress'
                    ? 'bg-emerald-400 text-slate-950 shadow-md'
                    : 'bg-slate-950 text-slate-400 border border-slate-800'
                }`}
              >
                WordPress CMS (Easy Client Editing)
              </button>
              <button
                onClick={() => setActiveTechTab('nextjs')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTechTab === 'nextjs'
                    ? 'bg-emerald-400 text-slate-950 shadow-md'
                    : 'bg-slate-950 text-slate-400 border border-slate-800'
                }`}
              >
                Next.js & React (Enterprise SSR)
              </button>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 text-xs space-y-3">
              {activeTechTab === 'html' && (
                <div className="space-y-2">
                  <div className="font-bold text-white text-sm flex items-center gap-2">
                    <Zap className="w-4 h-4 text-emerald-400" />
                    <span>Pure HTML5 & Tailwind CSS: 100/100 Core Web Vitals Guaranteed</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Zero database latency, zero plugin vulnerabilities, and instant sub-second rendering. Perfect for high-converting local service landing pages and paid ads funnels.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2 font-mono text-[11px] text-emerald-300">
                    <div>⚡ LCP: &lt; 0.4s</div>
                    <div>⚡ CLS: 0.00</div>
                    <div>⚡ FID / INP: &lt; 20ms</div>
                  </div>
                </div>
              )}

              {activeTechTab === 'wordpress' && (
                <div className="space-y-2">
                  <div className="font-bold text-white text-sm flex items-center gap-2">
                    <Globe className="w-4 h-4 text-emerald-400" />
                    <span>WordPress CMS: Flexible Blogging & Team Content Updates</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Custom themes built with lightweight block patterns or Elementor Pro. Allows your in-house team to publish case studies, update pricing, and write blog posts with ease.
                  </p>
                </div>
              )}

              {activeTechTab === 'nextjs' && (
                <div className="space-y-2">
                  <div className="font-bold text-white text-sm flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-emerald-400" />
                    <span>Next.js & React: Dynamic Multi-City Programmatic SEO</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Enterprise architecture capable of scaling to hundreds of localized suburb landing pages, dynamic booking integrations, and complex web applications with lightning fast SSR.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* Why Choose This: Core Benefits Grid */}
        {/* ========================================================================= */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              {service.whyChooseThis.heading}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Built on mathematical SEO principles, topical authority, and real conversion data.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.whyChooseThis.points.map((point, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-3 hover:border-emerald-500/30 transition-all group"
              >
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  {renderIcon(point.icon)}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {point.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* Step-by-Step 4-Phase Methodology */}
        {/* ========================================================================= */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Step-by-Step Execution Blueprint
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Transparent, repeatable workflow delivered with precision and accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.methodologySteps.map((step, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between space-y-4 relative"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2.5 py-0.5 rounded-full font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      {step.step}
                    </span>
                    <span className="text-slate-400 font-medium text-[11px] flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-500" />
                      {step.timeframe}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-white pt-1">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 space-y-1.5">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                    Key Outputs:
                  </span>
                  {step.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-1.5 text-[11px] text-slate-300">
                      <Check className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* Complete Deliverables Checklist */}
        {/* ========================================================================= */}
        <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 sm:p-10 space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
              Exact Deliverables Scope
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              What You Receive in Your {service.name} Package
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.detailedDeliverables.map((group, idx) => (
              <div key={idx} className="space-y-3">
                <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>{group.category}</span>
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  {group.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* Specialized Niche Applications */}
        {/* ========================================================================= */}
        <div className="space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Tailored for High-Ticket Trade & Clinic Niches
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Battle-tested keyword clusters and high-converting structures for competitive industries.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.nicheApplications.map((app, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-2.5 hover:border-slate-700 transition-all"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    {renderIcon(app.icon, 'w-4 h-4')}
                  </div>
                  <h3 className="font-bold text-sm text-white">{app.niche}</h3>
                </div>
                <p className="text-xs text-slate-300">{app.benefit}</p>
                <div className="text-[11px] font-mono text-emerald-300 bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800">
                  Target: {app.exampleKeyword}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* Related Case Study & Proof */}
        {/* ========================================================================= */}
        {relatedCaseStudy && (
          <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-emerald-500/40 p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  Verified Client Proof
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  {relatedCaseStudy.title}
                </h3>
              </div>
              <div className="px-3.5 py-1.5 rounded-full bg-emerald-400 text-slate-950 font-black text-xs">
                {relatedCaseStudy.growthPercentage}
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {relatedCaseStudy.summary}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-center">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-xs text-slate-500 block">Initial Rank</span>
                <span className="text-sm font-bold text-slate-300">{relatedCaseStudy.beforeMetrics.rank}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-xs text-slate-500 block">Final Result</span>
                <span className="text-sm font-bold text-emerald-400">{relatedCaseStudy.afterMetrics.rank}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 col-span-2 sm:col-span-1">
                <span className="text-xs text-slate-500 block">Monthly Inquiries</span>
                <span className="text-sm font-bold text-emerald-400">{relatedCaseStudy.afterMetrics.calls}</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 italic text-xs text-slate-300">
              "{relatedCaseStudy.testimonial.quote}"
              <span className="block not-italic font-bold text-white pt-2 text-[11px]">
                — {relatedCaseStudy.testimonial.author} ({relatedCaseStudy.testimonial.role})
              </span>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* Related Strategy Blueprint (Blog) */}
        {/* ========================================================================= */}
        {relatedBlogPost && (
          <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl text-center sm:text-left">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                Related Deep-Dive Guide
              </span>
              <h3 className="text-lg font-bold text-white">
                {relatedBlogPost.title}
              </h3>
              <p className="text-xs text-slate-400">
                {relatedBlogPost.excerpt}
              </p>
            </div>
            <button
              onClick={() => onSelectPost(relatedBlogPost.slug)}
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-all flex items-center gap-1.5 shrink-0 cursor-pointer"
            >
              <span>Read Strategy Blueprint</span>
              <ChevronRight className="w-4 h-4 text-emerald-400" />
            </button>
          </div>
        )}

        {/* ========================================================================= */}
        {/* Internal Links to Other Services & Pricing */}
        {/* ========================================================================= */}
        <div className="space-y-6 pt-6 border-t border-slate-900">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Explore Related SEO & Authority Services
              </h2>
              <p className="text-xs text-slate-400">
                Combine with cloudstack links, custom web builds, or authority backlinks for maximum search impact.
              </p>
            </div>
            <button
              onClick={onNavigatePricing}
              className="text-xs text-emerald-400 hover:underline font-bold flex items-center gap-1 cursor-pointer"
            >
              <span>View All Pricing & Packages</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {service.relatedServiceSlugs.map((relSlug) => {
              const relService = DETAILED_SERVICES[relSlug];
              if (!relService) return null;
              return (
                <div
                  key={relSlug}
                  onClick={() => onSelectOtherService(relSlug)}
                  className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 transition-all cursor-pointer space-y-2 group"
                >
                  <div className="text-xs font-bold text-emerald-400">{relService.price}</div>
                  <h3 className="font-bold text-sm text-white group-hover:text-emerald-300 transition-colors">
                    {relService.name}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2">
                    {relService.tagline}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 font-bold pt-1">
                    <span>View Service Page</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* In-Depth FAQ Accordion */}
        {/* ========================================================================= */}
        <div className="space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Clear answers regarding deliverables, turnaround times, and guarantees.
            </p>
          </div>

          <div className="space-y-3 max-w-3xl mx-auto">
            {service.faqs.map((faq, idx) => {
              const isOpen = activeFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-slate-900/80 border border-slate-800 overflow-hidden transition-all"
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
        {/* Final Conversion CTA Banner */}
        {/* ========================================================================= */}
        <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-emerald-950/40 to-slate-900 border-2 border-emerald-500/40 p-8 sm:p-12 text-center space-y-6 shadow-2xl">
          <div className="space-y-2 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Ready to Dominate Your Local Market with {service.name}?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Lock in your sprint today with Abdul Suboor. Flat transparent pricing with zero agency retainer locks.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onSelectService(service.name)}
              className="px-6 py-3.5 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-300 hover:scale-[1.03] transition-all flex items-center gap-2 shadow-lg shadow-emerald-500/30 cursor-pointer"
            >
              <Zap className="w-4 h-4 fill-slate-950 text-slate-950" />
              <span>Book {service.name} ({service.price})</span>
            </button>

            <a
              href={`https://wa.me/923365336008?text=${encodeURIComponent(`Hi Abdul, I want to get started with ${service.name} (${service.price}).`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl font-semibold text-sm text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-emerald-400/20 text-emerald-400" />
              <span>WhatsApp: +92 336 5336008</span>
            </a>
          </div>
        </div>

      </div>

    </div>
  );
};
