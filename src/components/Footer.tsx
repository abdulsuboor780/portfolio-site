import React, { useState } from 'react';
import { 
  Sparkles, 
  Award, 
  MessageCircle, 
  Mail, 
  Send, 
  CheckCircle2, 
  Heart, 
  ShieldCheck,
  MapPin,
  ArrowUp,
  Linkedin,
  Facebook,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onNavigate: (tab: string) => void;
  onNavigateServiceSlug?: (slug: string) => void;
  onOpenAudit: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onNavigate, 
  onNavigateServiceSlug,
  onOpenAudit 
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceClick = (slug: string) => {
    if (onNavigateServiceSlug) {
      onNavigateServiceSlug(slug);
    } else {
      onNavigate('services');
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 relative overflow-hidden text-slate-400 text-xs">
      
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-48 bg-emerald-500/5 blur-3xl pointer-events-none" />

      {/* Top Newsletter CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-slate-900">
        <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 border border-emerald-500/25 p-6 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="space-y-2 text-center lg:text-left max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[11px] font-bold border border-emerald-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Free VIP Growth Resource</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Subscribe to Abdul's 2026 Local SEO & GBP Checklist
            </h3>
            <p className="text-xs text-slate-300">
              Join 1,200+ small business owners receiving monthly ranking tips, algorithm change alerts, and local conversion templates.
            </p>
          </div>

          {/* Newsletter Form */}
          <div className="w-full lg:w-auto">
            {newsletterSubscribed ? (
              <div className="flex items-center gap-2 p-3.5 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-bold animate-in fade-in">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>You're subscribed! Checklist dispatched to your inbox.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2 w-full sm:w-96">
                <input
                  type="email"
                  required
                  placeholder="Enter your email..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="bg-slate-950 text-white placeholder-slate-500 px-4 py-3 rounded-xl border border-slate-800 text-xs focus:outline-none focus:border-emerald-500 flex-1"
                />
                <button
                  type="submit"
                  className="px-5 py-3 rounded-xl font-bold text-xs bg-emerald-400 text-slate-950 hover:bg-emerald-300 transition-all shrink-0 flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Get Checklist</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Col 1: Bio & Credentials */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 via-teal-400 to-cyan-400 p-[1.5px] shadow-md shadow-emerald-500/20 flex items-center justify-center">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center relative overflow-hidden">
                  <MapPin className="w-5 h-5 text-emerald-400 fill-emerald-400/20" />
                  <span className="absolute -top-1.5 -right-2 px-1 py-0.2 bg-gradient-to-r from-emerald-400 to-teal-300 text-slate-950 font-black text-[9px] rounded-full">
                    #1
                  </span>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-base text-white">{PERSONAL_INFO.name}</h4>
                <p className="text-xs text-emerald-400 font-medium">iSkills Certified SEO Specialist (ID: 726553)</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Helping local business owners, clinics, remodelers, solar installers, and contractors dominate Google 3-Pack rankings and boost organic phone inquiries.
            </p>

            <div className="pt-1 flex flex-wrap items-center gap-2.5">
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Contact"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-emerald-950 text-emerald-400 border border-emerald-500/30 text-xs font-semibold transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>+92 336 5336008</span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Email Contact"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs font-semibold transition-all"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email</span>
              </a>

              <a
                href="https://www.linkedin.com/in/abdul-suboor/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abdul Suboor LinkedIn Profile"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-blue-950/60 text-blue-400 border border-blue-500/30 text-xs font-semibold transition-all group"
              >
                <Linkedin className="w-3.5 h-3.5 fill-blue-400 group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://www.facebook.com/abd.suboor/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abdul Suboor Facebook Profile"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-indigo-950/60 text-indigo-400 border border-indigo-500/30 text-xs font-semibold transition-all group"
              >
                <Facebook className="w-3.5 h-3.5 fill-indigo-400 group-hover:scale-110 transition-transform" />
                <span>Facebook</span>
              </a>
            </div>
          </div>

          {/* Col 2: Services Directory (Individual Pages + Pricing) */}
          <div className="space-y-3">
            <h5 className="font-bold text-white text-xs uppercase tracking-wider">Services Directory</h5>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => onNavigate('services')} 
                  className="hover:text-emerald-400 transition-colors text-left font-bold text-slate-200 cursor-pointer"
                >
                  ⚡ All Services Overview
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleServiceClick('local-seo-ai-geo-gbp')} 
                  className="hover:text-emerald-400 transition-colors text-left cursor-pointer"
                >
                  🤖 Local SEO + AI SEO & GEO ($800/mo)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleServiceClick('micro-local-site-gbp')} 
                  className="hover:text-emerald-400 transition-colors text-left cursor-pointer"
                >
                  👑 Micro Local Site + GBP ($500/mo)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleServiceClick('indexable-web-20-parasite-backlinks')} 
                  className="hover:text-emerald-400 transition-colors text-left cursor-pointer"
                >
                  ⚡ Web 2.0 Parasite Links ($1.50/link)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleServiceClick('website-development')} 
                  className="hover:text-emerald-400 transition-colors text-left cursor-pointer"
                >
                  🌐 Web Dev: WP/HTML/Next.js ($300+)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleServiceClick('cloudstack-backlinks')} 
                  className="hover:text-emerald-400 transition-colors text-left cursor-pointer"
                >
                  ☁️ Cloudstack Links ($1.50/link)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleServiceClick('forum-backlinks')} 
                  className="hover:text-emerald-400 transition-colors text-left cursor-pointer"
                >
                  💬 Forum Backlinks ($2 = 3 links)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleServiceClick('blog-comments')} 
                  className="hover:text-emerald-400 transition-colors text-left cursor-pointer"
                >
                  📝 Blog Comments ($2 = 4 links)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleServiceClick('gbp-optimization')} 
                  className="hover:text-emerald-400 transition-colors text-left cursor-pointer"
                >
                  📍 GBP 3-Pack ($300 / $150 mo)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleServiceClick('dr-as-backlinks')} 
                  className="hover:text-emerald-400 transition-colors text-left cursor-pointer"
                >
                  🔗 DR & AS Backlinks (From $50)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('pricing')} 
                  className="hover:text-emerald-400 transition-colors text-left text-emerald-400 font-bold cursor-pointer flex items-center gap-1"
                >
                  <span>💎 Transparent Pricing & Plans</span>
                  <ChevronRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation */}
          <div className="space-y-3">
            <h5 className="font-bold text-white text-xs uppercase tracking-wider">Quick Navigation</h5>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('pricing')} className="hover:text-emerald-400 transition-colors cursor-pointer font-medium">
                  Pricing & Plans
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('case-studies')} className="hover:text-white transition-colors cursor-pointer">
                  Case Studies & Proof
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('certification')} className="hover:text-emerald-400 transition-colors flex items-center gap-1 cursor-pointer">
                  <Award className="w-3 h-3 text-emerald-400" />
                  iSkills Certification
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('blog')} className="hover:text-white transition-colors cursor-pointer">
                  SEO Blog & Knowledge Base
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors cursor-pointer">
                  Contact & Inquiries
                </button>
              </li>
              <li>
                <button onClick={onOpenAudit} className="hover:text-emerald-400 transition-colors text-left text-emerald-400 font-bold cursor-pointer">
                  Free Local SEO Audit (PDF)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Trust & Verification */}
          <div className="space-y-3">
            <h5 className="font-bold text-white text-xs uppercase tracking-wider">Trust & Quality</h5>
            <div className="space-y-2 text-[11px] text-slate-400">
              <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>100% White-Hat Only</span>
              </div>
              <p>Zero spam networks, zero private blog networks (PBNs), zero toxic links.</p>
              <div className="pt-2">
                <span className="text-slate-500 block">Verified iSkills Certificate ID:</span>
                <a 
                  href="https://app.iskills.com/certificate" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-mono text-emerald-400 font-bold hover:underline"
                >
                  726553 (Verify Online)
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            &copy; {new Date().getFullYear()} Abdul Suboor. All rights reserved. Built for high performance & local search conversion.
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://www.linkedin.com/in/abdul-suboor/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-1"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://www.facebook.com/abd.suboor/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-indigo-400 transition-colors flex items-center gap-1"
            >
              <Facebook className="w-3.5 h-3.5" />
              <span>Facebook</span>
            </a>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>

    </footer>
  );
};
