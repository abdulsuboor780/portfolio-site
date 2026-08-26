import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  Send, 
  CheckCircle2, 
  Video, 
  MessageCircle, 
  ShieldCheck, 
  Globe, 
  Clock 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuditModal: React.FC<AuditModalProps> = ({ isOpen, onClose }) => {
  const [website, setWebsite] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [niche, setNiche] = useState('Bathroom & Kitchen Remodeling');
  const [primaryGoal, setPrimaryGoal] = useState('Rank in Google 3-Pack');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Format mailto link to abdulsuboor780@gmail.com
    const subject = encodeURIComponent(`Free Audit Request: ${name} (${niche})`);
    const body = encodeURIComponent(
      `Hi Abdul,\n\n` +
      `I would like to request a Free Local Business Video Audit.\n\n` +
      `• Name: ${name}\n` +
      `• Email: ${email}\n` +
      `• WhatsApp/Phone: ${phone || 'Not provided'}\n` +
      `• Website / GBP: ${website}\n` +
      `• Niche: ${niche}\n` +
      `• Primary Goal: ${primaryGoal}\n\n` +
      `Please send the video breakdown to ${email} or WhatsApp.`
    );

    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;

    try {
      window.open(mailtoUrl, '_blank');
    } catch {
      // ignore popup blocker
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#10b981', '#14b8a6', '#06b6d4'],
      });
    }, 800);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setWebsite('');
    setName('');
    setEmail('');
    setPhone('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-emerald-500/40 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl shadow-emerald-950/60 relative my-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-6 text-center space-y-5 animate-in zoom-in-95">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto ring-8 ring-emerald-500/10">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-black text-white">Free Audit Request Dispatched!</h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Abdul Suboor will record a personalized 5-minute video breakdown of <strong className="text-emerald-400">{website}</strong> in the <span className="text-white font-bold">{niche}</span> niche and send it to <strong className="text-white">{email}</strong> within 24 hours.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-950/90 border border-slate-800 text-xs text-slate-400 text-left space-y-1">
              <div className="flex justify-between">
                <span>Receiver:</span>
                <span className="font-mono text-emerald-400 font-bold">{PERSONAL_INFO.email}</span>
              </div>
            </div>

            <div className="pt-2 space-y-2">
              <a
                href={`https://wa.me/923365336008?text=${encodeURIComponent(`Hi Abdul, I just requested a free 5-minute video audit for my business (${website}, ${niche}). My name is ${name}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl font-bold text-xs bg-emerald-400 text-slate-950 hover:bg-emerald-300 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950" />
                <span>Notify Abdul on WhatsApp Now (+92 336 5336008)</span>
              </a>

              <button
                onClick={handleReset}
                className="w-full py-2.5 px-4 rounded-xl font-semibold text-xs text-slate-400 hover:text-white bg-slate-800 transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Header */}
            <div className="space-y-2 pr-6">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[11px] font-bold border border-emerald-500/30">
                <Video className="w-3.5 h-3.5" />
                <span>100% Free Audit for Local Businesses</span>
              </div>
              <h3 className="text-2xl font-black text-white leading-tight">
                Get Your Free 5-Minute Video SEO & GBP Breakdown
              </h3>
              <p className="text-xs text-slate-300">
                Uncover why local competitors are outranking you on Google Maps 3-Pack, fix category gaps, and capture high-intent organic calls.
              </p>
            </div>

            {/* Fields */}
            <div className="space-y-3.5">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">Website or Google Business Profile Link *</label>
                <div className="relative">
                  <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input
                    type="text"
                    required
                    placeholder="https://yourbusiness.com or GBP name"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    className="w-full bg-slate-950 text-xs text-white placeholder-slate-500 pl-10 pr-3.5 py-3 rounded-xl border border-slate-800 focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Robert Sterling"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-slate-950 text-xs text-white placeholder-slate-500 px-3.5 py-3 rounded-xl border border-slate-800 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">Your Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. robert@biz.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-950 text-xs text-white placeholder-slate-500 px-3.5 py-3 rounded-xl border border-slate-800 focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">Your Industry / Niche</label>
                  <select
                    value={niche}
                    onChange={(e) => setNiche(e.target.value)}
                    className="w-full bg-slate-950 text-xs text-white px-3.5 py-3 rounded-xl border border-slate-800 focus:outline-none focus:border-emerald-500"
                  >
                    <option value="Bathroom & Kitchen Remodeling">Bathroom & Kitchen Remodeling</option>
                    <option value="Solar Installation & Energy">Solar Installation & Energy</option>
                    <option value="Dentist & Dental Clinics">Dentist & Dental Clinics</option>
                    <option value="Plumber & Drain Services">Plumber & Drain Services</option>
                    <option value="Roofers & Exterior Contractors">Roofers & Exterior Contractors</option>
                    <option value="Environmental Consultancies">Environmental Consultancies</option>
                    <option value="HVAC Heating & AC">HVAC Heating & AC</option>
                    <option value="Other Local Business">Other Local Business</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">WhatsApp / Phone</label>
                  <input
                    type="tel"
                    placeholder="e.g. +1 555 234 5678"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-slate-950 text-xs text-white placeholder-slate-500 px-3.5 py-3 rounded-xl border border-slate-800 focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">Biggest SEO / Web Goal</label>
                <select
                  value={primaryGoal}
                  onChange={(e) => setPrimaryGoal(e.target.value)}
                  className="w-full bg-slate-950 text-xs text-white px-3.5 py-3 rounded-xl border border-slate-800 focus:outline-none focus:border-emerald-500"
                >
                  <option value="Main: $500 Micro Local Site + GBP">👑 Main: $500 Micro Local Site (1 Service + 1 Location + GBP)</option>
                  <option value="Web Development (WordPress/HTML/Next.js from $300)">🌐 Web Development (WordPress / HTML / Next.js from $300)</option>
                  <option value="Cloudstack Backlinks ($1.50/link)">☁️ Cloudstack High-Power Backlinks ($1.50/link)</option>
                  <option value="Rank #1 in Google Maps 3-Pack ($300)">📍 Rank #1 in Google Maps 3-Pack ($300)</option>
                  <option value="DR/AS Authority Backlinks Boost">🔗 DR & AS Authority Backlinks Boost</option>
                  <option value="Custom Pricing Quote via WhatsApp">⚡ Custom Pricing Plan (Set via WhatsApp)</option>
                </select>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl font-extrabold text-sm text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 hover:shadow-xl hover:shadow-emerald-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
            >
              {isSubmitting ? (
                <span>Queueing Free Video Audit...</span>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 fill-slate-950" />
                  <span>Request Free Video Audit from Abdul</span>
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Delivered to abdulsuboor780@gmail.com • Direct review by Abdul Suboor</span>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
