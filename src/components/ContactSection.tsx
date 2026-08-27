import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp,
  Globe,
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO, SERVICES_DATA, FAQS } from '../data/portfolioData';

interface ContactSectionProps {
  preselectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    niche: 'Bathroom & Kitchen Remodeling',
    service: preselectedService || 'Google Business Profile (GBP) Optimization ($300 / $150 mo)',
    budget: '$300 - $600',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedDetails, setCopiedDetails] = useState(false);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const buildInquiryMessage = () => {
    return (
      `Hi Abdul,\n\n` +
      `I am interested in your SEO and Local Web services:\n\n` +
      `• Name: ${formData.name}\n` +
      `• Email: ${formData.email}\n` +
      `• WhatsApp/Phone: ${formData.phone || 'Not provided'}\n` +
      `• Website / GBP: ${formData.website || 'Not provided'}\n` +
      `• Business Niche: ${formData.niche}\n` +
      `• Selected Service: ${formData.service}\n` +
      `• Project Details: ${formData.message || 'Ready to discuss project scope.'}\n\n` +
      `Looking forward to hearing from you!`
    );
  };

  const handleSendWhatsApp = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!formData.name || !formData.website) return;

    setIsSubmitting(true);
    const text = buildInquiryMessage();
    const waUrl = `https://wa.me/923365336008?text=${encodeURIComponent(text)}`;

    window.open(waUrl, '_blank', 'noopener,noreferrer');

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#10b981', '#06b6d4', '#3b82f6'],
      });
    }, 600);
  };

  const handleSendEmail = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!formData.name || !formData.website) return;

    setIsSubmitting(true);
    const subject = encodeURIComponent(`New SEO Project Inquiry: ${formData.name} (${formData.niche})`);
    const body = encodeURIComponent(buildInquiryMessage());

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}&su=${subject}&body=${body}`;
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;

    try {
      window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    } catch {
      window.location.href = mailtoUrl;
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#10b981', '#06b6d4', '#3b82f6'],
      });
    }, 600);
  };

  const handleCopyDetails = () => {
    navigator.clipboard.writeText(buildInquiryMessage());
    setCopiedDetails(true);
    setTimeout(() => setCopiedDetails(false), 2500);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      website: '',
      niche: 'Bathroom & Kitchen Remodeling',
      service: 'Google Business Profile (GBP) Optimization ($300 / $150 mo)',
      budget: '$300 - $600',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative bg-slate-950/70">
      
      {/* Background glow */}
      <div className="absolute top-1/4 right-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready to Dominate Search & Get Clients?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Let's Talk About Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Local Growth</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300">
            Get in touch directly with Abdul Suboor. Message on WhatsApp for immediate response, or submit your business details below to dispatch directly to <strong className="text-emerald-400">{PERSONAL_INFO.email}</strong>.
          </p>
        </div>

        {/* Main Grid: Form on Left, Contact Cards & WhatsApp on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Form Card */}
          <div className="lg:col-span-7 bg-slate-900/90 rounded-3xl border border-slate-800 p-6 sm:p-10 shadow-2xl backdrop-blur-xl relative">
            
            {isSubmitted ? (
              <div className="py-10 text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto ring-8 ring-emerald-500/10">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-white">Inquiry Prepared for Abdul Suboor!</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Your inquiry details for <span className="text-white font-medium">{formData.service}</span> in the <span className="text-emerald-400 font-semibold">{formData.niche}</span> niche are ready to be dispatched.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 space-y-2 max-w-md mx-auto text-left">
                  <div className="flex justify-between items-center text-slate-400">
                    <span>Receiver:</span>
                    <span className="font-mono text-emerald-400 font-bold">{PERSONAL_INFO.email}</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-400">
                    <span>Target Service:</span>
                    <span className="text-white font-medium">{formData.service}</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-400">
                    <span>WhatsApp Direct:</span>
                    <span className="font-mono text-emerald-400 font-bold">+92 336 5336008</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/923365336008?text=${encodeURIComponent(buildInquiryMessage())}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-xs bg-emerald-400 text-slate-950 hover:bg-emerald-300 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
                  >
                    <MessageCircle className="w-4 h-4 fill-slate-950" />
                    <span>Send Details to WhatsApp (+92 336 5336008)</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyDetails}
                    className="w-full sm:w-auto px-4 py-3.5 rounded-xl font-semibold text-xs text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors flex items-center justify-center gap-1.5"
                  >
                    {copiedDetails ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedDetails ? 'Copied to Clipboard!' : 'Copy Form Details'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="w-full sm:w-auto px-4 py-3.5 rounded-xl font-semibold text-xs text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-800 transition-colors"
                  >
                    New Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSendWhatsApp} className="space-y-5">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white">Request a Proposal & Consultation</h3>
                  <p className="text-xs text-slate-400">Fill in your business details. Send directly via WhatsApp or Email.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 flex items-center gap-1">
                      <span>Your Full Name</span>
                      <span className="text-red-500 font-bold">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-950 text-xs text-white placeholder-slate-500 px-3.5 py-3 rounded-xl border border-slate-800 focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Your Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. john@business.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-950 text-xs text-white placeholder-slate-500 px-3.5 py-3 rounded-xl border border-slate-800 focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Website URL */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 flex items-center gap-1">
                      <span>Website or GBP Link</span>
                      <span className="text-red-500 font-bold">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. https://mybusiness.com or Business GBP Name"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      className="w-full bg-slate-950 text-xs text-white placeholder-slate-500 px-3.5 py-3 rounded-xl border border-slate-800 focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>

                  {/* WhatsApp / Phone */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      WhatsApp / Phone Number <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +1 555 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-950 text-xs text-white placeholder-slate-500 px-3.5 py-3 rounded-xl border border-slate-800 focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Business Niche */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Business Industry / Niche</label>
                    <select
                      value={formData.niche}
                      onChange={(e) => setFormData({ ...formData, niche: e.target.value })}
                      className="w-full bg-slate-950 text-xs text-white px-3.5 py-3 rounded-xl border border-slate-800 focus:outline-none focus:border-emerald-500 transition-colors"
                    >
                      <option value="Bathroom & Kitchen Remodeling">Bathroom & Kitchen Remodeling</option>
                      <option value="Solar Installation & Energy">Solar Installation & Energy</option>
                      <option value="Dentist & Dental Clinics">Dentist & Dental Clinics</option>
                      <option value="Plumber & Drain Services">Plumber & Drain Services</option>
                      <option value="Roofers & Exterior Contractors">Roofers & Exterior Contractors</option>
                      <option value="Environmental Consultancies">Environmental Consultancies</option>
                      <option value="HVAC Heating & AC">HVAC Heating & AC</option>
                      <option value="Other Local Business / Contractor">Other Local Business / Contractor</option>
                    </select>
                  </div>

                  {/* Target Service */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Target Service / Package</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-slate-950 text-xs text-white px-3.5 py-3 rounded-xl border border-slate-800 focus:outline-none focus:border-emerald-500 transition-colors"
                    >
                      <option value="Turnkey Micro Local Site + GBP ($500)">👑 Main: Turnkey Micro Local Site + GBP ($500)</option>
                      <option value="Website Development (WordPress/HTML/Next.js - from $300)">🌐 Web Development (WordPress / HTML / Next.js from $300)</option>
                      <option value="Cloudstack Backlinks ($1.50/link up to 30 links)">☁️ Cloudstack High-Power Backlinks ($1.50/link)</option>
                      <option value="One GBP Optimization ($300 one-time)">📍 GBP 3-Pack 1-Time Optimization ($300)</option>
                      <option value="GBP Optimization + Monthly Handling ($150/mo)">📍 GBP Monthly Growth Retainer ($150/mo)</option>
                      <option value="DR & AS Authority Backlinks ($50 - $300)">🔗 DR & AS Authority Backlinks ($50 - $300)</option>
                      <option value="Custom Pricing Consultation on WhatsApp">⚡ Custom Business Pricing (Set via WhatsApp)</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    Project Details or Goal <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell Abdul about your city, competitors, current ranking issues, or goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-950 text-xs text-white placeholder-slate-500 px-3.5 py-3 rounded-xl border border-slate-800 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>

                {/* Action Buttons */}
                <div className="space-y-2.5 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl font-black text-sm text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 hover:shadow-xl hover:shadow-emerald-500/25 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    <MessageCircle className="w-4 h-4 fill-slate-950" />
                    <span>Send Inquiry via WhatsApp (Fastest Response)</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSendEmail}
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-xl font-bold text-xs text-emerald-400 hover:text-emerald-300 bg-emerald-950/40 hover:bg-emerald-950/70 border border-emerald-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Or Send Details via Email (Gmail / Mail Client)</span>
                  </button>
                </div>

                <p className="text-center text-[11px] text-slate-400 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Inquiries are delivered directly to Abdul Suboor (+92 336 5336008). Zero spam guaranteed.</span>
                </p>
              </form>
            )}

          </div>

          {/* Right Column: Direct WhatsApp Card & Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Highlight Box */}
            <div className="rounded-3xl bg-gradient-to-br from-emerald-950/70 via-slate-900 to-slate-950 border-2 border-emerald-500/40 p-6 sm:p-7 shadow-xl space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6 fill-emerald-400/20" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Direct WhatsApp Fast-Response</h4>
                  <p className="text-xs text-emerald-400 font-mono font-semibold">+92 336 5336008</p>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Prefer a fast, direct conversation? Abdul responds rapidly on WhatsApp for custom pricing, site audits, voice notes, and quick strategy checks.
              </p>

              <a
                href={`https://wa.me/923365336008?text=${encodeURIComponent('Hi Abdul, I want to talk about SEO, GBP Optimization, and custom pricing.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl font-bold text-xs text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all flex items-center justify-center gap-2 shadow-md shadow-emerald-500/20"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950" />
                <span>Open WhatsApp Chat Now</span>
              </a>
            </div>

            {/* Direct Contact Metrics */}
            <div className="bg-slate-900/80 rounded-3xl border border-slate-800 p-6 space-y-4 text-xs">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Direct Verified Channels</h4>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-950 border border-slate-800 text-slate-300">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 block">Direct Email:</span>
                      <a href={`mailto:${PERSONAL_INFO.email}`} className="text-white hover:text-emerald-400 font-medium break-all">
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-emerald-400 transition-colors shrink-0 ml-2"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <div className="flex items-center gap-3 text-slate-300 p-3 rounded-2xl bg-slate-950 border border-slate-800">
                  <div className="w-8 h-8 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-teal-400 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block">Response Guarantee:</span>
                    <span className="text-white font-medium">Within 2 to 4 Business Hours</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-300 p-3 rounded-2xl bg-slate-950 border border-slate-800">
                  <div className="w-8 h-8 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 shrink-0">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block">Service Reach:</span>
                    <span className="text-white font-medium">US, UK, Canada, Australia & Global SMBs</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* FAQs Accordion */}
        <div className="max-w-4xl mx-auto space-y-6 pt-12 border-t border-slate-800">
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-bold text-white">Frequently Asked Questions</h3>
            <p className="text-xs text-slate-400">Everything you need to know about working with Abdul Suboor.</p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-slate-900/80 border border-slate-800 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                    className="w-full text-left p-5 text-sm font-bold text-white hover:text-emerald-400 flex items-center justify-between gap-4 transition-colors"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-emerald-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
