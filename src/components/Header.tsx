import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, 
  MessageCircle, 
  Menu, 
  X, 
  Award, 
  ChevronDown, 
  MapPin,
  Layers,
  Code2,
  Cloud,
  Link2,
  DollarSign,
  ChevronRight,
  Zap
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeaderProps {
  activeTab: string;
  activeServiceSlug: string | null;
  setActiveTab: (tab: string) => void;
  onSelectServiceSlug: (slug: string) => void;
  onOpenAuditModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  activeTab, 
  activeServiceSlug,
  setActiveTab, 
  onSelectServiceSlug,
  onOpenAuditModal 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close desktop dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const serviceSubLinks = [
    {
      slug: 'micro-local-site-gbp',
      name: 'Turnkey Micro Local Site + GBP',
      badge: '👑 Flagship ($500)',
      icon: MapPin,
      desc: '1-Service + 1-City local client ranking engine',
    },
    {
      slug: 'website-development',
      name: 'Custom Web Development',
      badge: '⚡ From $300',
      icon: Code2,
      desc: 'Pure HTML5/Tailwind, WordPress CMS & Next.js',
    },
    {
      slug: 'cloudstack-backlinks',
      name: 'Cloudstack Entity Backlinks',
      badge: '☁️ $1.50/link',
      icon: Cloud,
      desc: 'High-power AWS, Google Cloud, Azure & Oracle',
    },
    {
      slug: 'gbp-optimization',
      name: 'GBP 3-Pack Optimization',
      badge: '📍 $300 / $150 mo',
      icon: Zap,
      desc: 'Categories, geo-tagged assets & spam removal',
    },
    {
      slug: 'dr-as-backlinks',
      name: 'DR & AS Authority Backlinks',
      badge: '🔗 From $50',
      icon: Link2,
      desc: '100% Organic dofollow comment backlinks',
    },
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceSelect = (slug: string) => {
    onSelectServiceSlug(slug);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isServicesActive = activeTab === 'services' || activeServiceSlug !== null;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3' 
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand with GBP Ranking Icon */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-none cursor-pointer"
            id="brand-logo-btn"
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 via-teal-400 to-cyan-400 p-[1.5px] shadow-lg shadow-emerald-500/25 group-hover:shadow-emerald-500/40 transition-all flex items-center justify-center">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center relative overflow-hidden">
                  <div className="flex items-center justify-center relative">
                    <MapPin className="w-5 h-5 text-emerald-400 fill-emerald-400/20" />
                    <span className="absolute -top-1.5 -right-2 px-1 py-0.2 bg-gradient-to-r from-emerald-400 to-teal-300 text-slate-950 font-black text-[9px] rounded-full shadow-sm">
                      #1
                    </span>
                  </div>
                </div>
              </div>
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-slate-950 animate-pulse" />
            </div>
            
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-base sm:text-lg tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                  {PERSONAL_INFO.name}
                </span>
                <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  <Award className="w-2.5 h-2.5" /> iSkills
                </span>
              </div>
              <p className="text-xs text-slate-400 font-medium">SEO & Local GBP Specialist</p>
            </div>
          </button>

          {/* Desktop Nav with Services Dropdown */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
            
            {/* Home */}
            <button
              onClick={() => handleNavClick('home')}
              id="nav-link-home"
              className={`px-3.5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                activeTab === 'home' && !activeServiceSlug
                  ? 'text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 font-bold shadow-md shadow-emerald-500/20'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              Home
            </button>

            {/* Services with Dropdown */}
            <div 
              className="relative" 
              ref={dropdownRef}
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <div className="flex items-center">
                <button
                  onClick={() => handleNavClick('services')}
                  id="nav-link-services"
                  className={`px-3.5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                    isServicesActive
                      ? 'text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 font-bold shadow-md shadow-emerald-500/20'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {/* Dropdown Menu */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-950 border border-slate-800 rounded-2xl p-2.5 shadow-2xl shadow-black/80 z-50 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150">
                  
                  {/* All Services Overview Link */}
                  <button
                    onClick={() => handleNavClick('services')}
                    className="w-full p-2.5 rounded-xl hover:bg-slate-900 text-left transition-colors flex items-center justify-between group cursor-pointer border border-transparent hover:border-emerald-500/30"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                        <Layers className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-bold text-xs text-white group-hover:text-emerald-400 transition-colors block">
                          All Services Overview
                        </span>
                        <span className="text-[11px] text-slate-400">
                          Complete solutions & ROI calculator
                        </span>
                      </div>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
                  </button>

                  <div className="my-1.5 border-t border-slate-800/80" />

                  {/* Individual Dedicated Service Pages */}
                  <div className="space-y-1">
                    {serviceSubLinks.map((item) => {
                      const SubIcon = item.icon;
                      const isSubActive = activeServiceSlug === item.slug;
                      return (
                        <button
                          key={item.slug}
                          onClick={() => handleServiceSelect(item.slug)}
                          className={`w-full p-2 rounded-xl text-left transition-colors flex items-start gap-2.5 cursor-pointer ${
                            isSubActive
                              ? 'bg-emerald-500/15 border border-emerald-500/40 text-emerald-300'
                              : 'hover:bg-slate-900 text-slate-300 hover:text-white'
                          }`}
                        >
                          <div className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                            <SubIcon className="w-3.5 h-3.5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-1">
                              <span className="font-bold text-xs text-white truncate">
                                {item.name}
                              </span>
                              <span className="text-[10px] font-bold text-emerald-400 shrink-0">
                                {item.badge}
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-400 truncate">
                              {item.desc}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  <div className="my-1.5 border-t border-slate-800/80" />

                  {/* Pricing Page Link in Dropdown */}
                  <button
                    onClick={() => handleNavClick('pricing')}
                    className="w-full p-2 rounded-xl bg-slate-900/60 hover:bg-slate-900 text-left transition-colors flex items-center justify-between text-xs font-semibold text-emerald-400 cursor-pointer"
                  >
                    <span className="flex items-center gap-1.5">
                      <DollarSign className="w-3.5 h-3.5" />
                      <span>Transparent Pricing & Plans</span>
                    </span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>

            {/* Pricing Nav Link */}
            <button
              onClick={() => handleNavClick('pricing')}
              id="nav-link-pricing"
              className={`px-3.5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                activeTab === 'pricing' && !activeServiceSlug
                  ? 'text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 font-bold shadow-md shadow-emerald-500/20'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              Pricing
            </button>

            {/* Results & Proof */}
            <button
              onClick={() => handleNavClick('case-studies')}
              id="nav-link-case-studies"
              className={`px-3.5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                activeTab === 'case-studies' && !activeServiceSlug
                  ? 'text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 font-bold shadow-md shadow-emerald-500/20'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              Results & Proof
            </button>

            {/* iSkills Certificate */}
            <button
              onClick={() => handleNavClick('certification')}
              id="nav-link-certification"
              className={`px-3.5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 flex items-center gap-1 cursor-pointer ${
                activeTab === 'certification' && !activeServiceSlug
                  ? 'text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 font-bold shadow-md shadow-emerald-500/20'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <span>iSkills Certificate</span>
              <span className="text-[9px] uppercase px-1.5 py-0.2 rounded-full font-extrabold bg-emerald-500/20 text-emerald-400">
                Verified
              </span>
            </button>

            {/* SEO Insights (Blog) */}
            <button
              onClick={() => handleNavClick('blog')}
              id="nav-link-blog"
              className={`px-3.5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                activeTab === 'blog' && !activeServiceSlug
                  ? 'text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 font-bold shadow-md shadow-emerald-500/20'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              SEO Insights
            </button>

            {/* Contact */}
            <button
              onClick={() => handleNavClick('contact')}
              id="nav-link-contact"
              className={`px-3.5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                activeTab === 'contact' && !activeServiceSlug
                  ? 'text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 font-bold shadow-md shadow-emerald-500/20'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={`https://wa.me/923365336008?text=${encodeURIComponent('Hi Abdul, I saw your portfolio and want to discuss SEO/Local SEO for my business.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition-all hover:scale-[1.02]"
              id="header-whatsapp-cta"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-emerald-400/20 text-emerald-400" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onOpenAuditModal}
              id="header-free-audit-btn"
              className="relative group overflow-hidden inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 animate-spin text-slate-950 [animation-duration:4s]" />
                Free SEO Audit
              </span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenAuditModal}
              className="sm:hidden px-2.5 py-1.5 rounded-lg text-[11px] font-bold bg-emerald-400 text-slate-950 cursor-pointer"
            >
              Audit
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white cursor-pointer"
              aria-label="Toggle Navigation Menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-emerald-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 px-4 pt-3 pb-6 bg-slate-950/95 border-b border-slate-800 backdrop-blur-xl animate-in slide-in-from-top-4 duration-200 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col gap-1.5">
            
            {/* Home */}
            <button
              onClick={() => handleNavClick('home')}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-between cursor-pointer ${
                activeTab === 'home' && !activeServiceSlug
                  ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                  : 'text-slate-300 hover:bg-slate-900'
              }`}
            >
              <span>Home</span>
            </button>

            {/* Services with Mobile Collapsible Sub-links */}
            <div className="rounded-xl border border-slate-800/80 overflow-hidden bg-slate-900/30">
              <div className="flex items-center justify-between p-3">
                <button
                  onClick={() => handleNavClick('services')}
                  className={`text-sm font-bold text-left flex-1 cursor-pointer ${
                    isServicesActive ? 'text-emerald-400' : 'text-white'
                  }`}
                >
                  Services Overview
                </button>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="p-1 rounded-lg bg-slate-800 text-slate-400 hover:text-white cursor-pointer"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {mobileServicesOpen && (
                <div className="px-3 pb-3 space-y-1.5 pt-1 border-t border-slate-800">
                  {serviceSubLinks.map((item) => (
                    <button
                      key={item.slug}
                      onClick={() => handleServiceSelect(item.slug)}
                      className={`w-full text-left p-2 rounded-lg text-xs flex items-center justify-between cursor-pointer ${
                        activeServiceSlug === item.slug
                          ? 'bg-emerald-500/20 text-emerald-300 font-bold'
                          : 'text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      <span className="truncate">{item.name}</span>
                      <span className="text-[10px] text-emerald-400 font-semibold shrink-0 ml-2">
                        {item.badge}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Pricing */}
            <button
              onClick={() => handleNavClick('pricing')}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-between cursor-pointer ${
                activeTab === 'pricing' && !activeServiceSlug
                  ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                  : 'text-slate-300 hover:bg-slate-900'
              }`}
            >
              <span>Pricing & Plans</span>
            </button>

            {/* Results & Proof */}
            <button
              onClick={() => handleNavClick('case-studies')}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-between cursor-pointer ${
                activeTab === 'case-studies' && !activeServiceSlug
                  ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                  : 'text-slate-300 hover:bg-slate-900'
              }`}
            >
              <span>Results & Proof</span>
            </button>

            {/* Certificate */}
            <button
              onClick={() => handleNavClick('certification')}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-between cursor-pointer ${
                activeTab === 'certification' && !activeServiceSlug
                  ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                  : 'text-slate-300 hover:bg-slate-900'
              }`}
            >
              <span>iSkills Certificate</span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300">
                Verified ID: 726553
              </span>
            </button>

            {/* Blog */}
            <button
              onClick={() => handleNavClick('blog')}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-between cursor-pointer ${
                activeTab === 'blog' && !activeServiceSlug
                  ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                  : 'text-slate-300 hover:bg-slate-900'
              }`}
            >
              <span>SEO Insights & Knowledge Base</span>
            </button>

            {/* Contact */}
            <button
              onClick={() => handleNavClick('contact')}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-between cursor-pointer ${
                activeTab === 'contact' && !activeServiceSlug
                  ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                  : 'text-slate-300 hover:bg-slate-900'
              }`}
            >
              <span>Contact</span>
            </button>

            <div className="pt-4 mt-2 border-t border-slate-800/80 grid grid-cols-2 gap-2">
              <a
                href={`https://wa.me/923365336008?text=${encodeURIComponent('Hi Abdul, I want to discuss SEO/Local SEO.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuditModal();
                }}
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-emerald-400 text-slate-950 text-xs font-extrabold cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                Free Audit
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
