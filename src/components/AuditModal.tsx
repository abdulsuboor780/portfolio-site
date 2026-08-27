import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  MessageCircle, 
  ShieldCheck, 
  Globe, 
  FileText,
  Mail,
  Copy,
  Check,
  Video,
  Send
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
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const buildAuditMessage = () => {
    return (
      `Hi Abdul,\n\n` +
      `I would like to request a Free Quick SEO & GBP Audit Report (PDF) for my local business:\n\n` +
      `• Name: ${name}\n` +
      `• Email: ${email}\n` +
      `• WhatsApp/Phone: ${phone || 'Not provided'}\n` +
      `• Website / GBP: ${website}\n` +
      `• Business Niche: ${niche}\n` +
      `• Primary Goal: ${primaryGoal}\n` +
      (notes ? `• Specific Notes: ${notes}\n` : '') +
      `\nPlease provide the quick PDF audit report. If I agree with the findings and action plan, we can schedule an online meeting or proceed directly through WhatsApp/Email.`
    );
  };

  const handleSendWhatsApp = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!website || !name || !email) return;

    setIsSubmitting(true);
    const text = buildAuditMessage();
    const waUrl = `https://wa.me/923365336008?text=${encodeURIComponent(text)}`;

    window.open(waUrl, '_blank', 'noopener,noreferrer');

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#10b981', '#14b8a6', '#06b6d4'],
      });
    }, 600);
  };

  const handleSendEmail = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!website || !name || !email) return;

    setIsSubmitting(true);
    const subject = encodeURIComponent(`Free Quick SEO Audit Request (PDF): ${name} (${niche})`);
    const body = encodeURIComponent(buildAuditMessage());

    // Try opening Gmail compose in browser first (universal reliability)
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
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#10b981', '#14b8a6', '#06b6d4'],
      });
    }, 600);
  };

  const handleCopyDetails = () => {
    navigator.clipboard.writeText(buildAuditMessage());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setWebsite('');
    setName('');
    setEmail('');
    setPhone('');
    setNotes('');
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
              <h3 className="text-2xl font-black text-white">Free Quick Audit Request Ready!</h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Abdul Suboor will review <strong className="text-emerald-400">{website}</strong> in the <span className="text-white font-bold">{niche}</span> niche and provide a <strong>Quick Audit Report in PDF</strong>. If you agree with the findings, we will schedule an online meeting or discuss the next steps via WhatsApp/Email.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800 text-xs text-slate-400 text-left space-y-2">
              <div className="flex justify-between">
                <span>Receiver:</span>
                <span className="font-mono text-emerald-400 font-bold">{PERSONAL_INFO.email}</span>
              </div>
              <div className="flex justify-between">
                <span>WhatsApp:</span>
                <span className="font-mono text-emerald-400 font-bold">+92 336 5336008</span>
              </div>
              <div className="flex justify-between">
                <span>Format:</span>
                <span className="text-white font-medium">Quick Audit Report (PDF)</span>
              </div>
            </div>

            <div className="pt-2 space-y-2.5">
              <a
                href={`https://wa.me/923365336008?text=${encodeURIComponent(buildAuditMessage())}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl font-bold text-xs bg-emerald-400 text-slate-950 hover:bg-emerald-300 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950" />
                <span>Send Audit Details via WhatsApp (+92 336 5336008)</span>
              </a>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleCopyDetails}
                  className="flex-1 py-2.5 px-3 rounded-xl font-semibold text-xs text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors flex items-center justify-center gap-1.5"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied to Clipboard!' : 'Copy Form Details'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleReset}
                  className="py-2.5 px-4 rounded-xl font-semibold text-xs text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-800 transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSendWhatsApp} className="space-y-5">
            
            {/* Header */}
            <div className="space-y-2 pr-6">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[11px] font-bold border border-emerald-500/30">
                <FileText className="w-3.5 h-3.5" />
                <span>100% Free Quick Audit Report (PDF)</span>
              </div>
              <h3 className="text-2xl font-black text-white leading-tight">
                Request Free Quick SEO & GBP Audit Report (PDF)
              </h3>
              <p className="text-xs text-slate-300">
                I will first provide a quick audit report in PDF with actionable findings. If you agree with the strategic plan, we can do an online meeting (Zoom / Google Meet) or close the deal directly via WhatsApp.
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
                  <label className="text-xs font-semibold text-slate-300">WhatsApp / Phone (Fastest Delivery)</label>
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

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">Target Competitor or Additional Notes (Optional)</label>
                <input
                  type="text"
                  placeholder="e.g. competitors in my area, target cities, or current ranking issues"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-slate-950 text-xs text-white placeholder-slate-500 px-3.5 py-2.5 rounded-xl border border-slate-800 focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>

            {/* Submission Action Options */}
            <div className="space-y-2.5 pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl font-extrabold text-sm text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 hover:shadow-xl hover:shadow-emerald-500/30 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950" />
                <span>Send Audit Request via WhatsApp (Fastest Delivery)</span>
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

            <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400 text-center">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Free Quick PDF Audit Report delivered directly by Abdul Suboor. 100% confidential.</span>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
