import React, { useState } from 'react';
import { MessageCircle, X, Send, CheckCheck, Sparkles, Phone, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const quickPrompts = [
    'Hi Abdul, I want to order the $500 Micro Local Site package.',
    'Hello, can you audit my Google Business Profile (GBP)?',
    'Hey Abdul, need help with Local SEO & Google 3-Pack rankings.',
    'I want to inquire about Off-Page high-DA backlinks.',
  ];

  const handleSend = (text: string) => {
    const messageToSend = text || customMsg || 'Hi Abdul, I would like to discuss SEO services for my business.';
    const url = `https://wa.me/923365336008?text=${encodeURIComponent(messageToSend)}`;
    window.open(url, '_blank');
    setCustomMsg('');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Mini Chat Popup */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 rounded-2xl bg-slate-900/95 border border-emerald-500/40 shadow-2xl shadow-emerald-950/50 backdrop-blur-xl overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-700 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-slate-950/40 flex items-center justify-center font-bold text-emerald-200 border border-white/20">
                  AS
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-emerald-900 rounded-full animate-pulse" />
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight flex items-center gap-1.5">
                  {PERSONAL_INFO.name}
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-200" />
                </h4>
                <p className="text-[11px] text-emerald-100/90 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300"></span>
                  Online • Replies usually in &lt; 15 mins
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition-colors"
              aria-label="Close Chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 space-y-3 bg-slate-950/80">
            <div className="bg-slate-900/90 p-3 rounded-2xl rounded-tl-sm border border-slate-800 text-xs text-slate-200 space-y-1.5">
              <p className="font-medium text-emerald-400">👋 Welcome! I'm Abdul Suboor.</p>
              <p className="leading-relaxed">
                Need help ranking your business on <strong>Google Maps</strong>, getting local customer calls, or building a high-converting <strong>$500 Micro Local Site</strong>?
              </p>
              <div className="flex items-center justify-end gap-1 text-[10px] text-slate-400 pt-1">
                <span>Direct WhatsApp line: +92 336 5336008</span>
                <CheckCheck className="w-3.5 h-3.5 text-emerald-400" />
              </div>
            </div>

            {/* Quick Prompts */}
            <div className="space-y-1.5 pt-1">
              <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Tap a quick inquiry:</p>
              <div className="flex flex-col gap-1.5">
                {quickPrompts.map((prompt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(prompt)}
                    className="text-left text-xs bg-slate-900 hover:bg-emerald-950/40 text-slate-300 hover:text-emerald-300 px-3 py-2 rounded-xl border border-slate-800 hover:border-emerald-500/40 transition-all flex items-center justify-between group"
                  >
                    <span className="truncate pr-2">{prompt}</span>
                    <Send className="w-3 h-3 text-slate-500 group-hover:text-emerald-400 shrink-0" />
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Input */}
            <div className="pt-2 flex items-center gap-1.5">
              <input
                type="text"
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                placeholder="Type your message..."
                onKeyDown={(e) => e.key === 'Enter' && handleSend(customMsg)}
                className="flex-1 bg-slate-900 text-xs text-slate-100 placeholder-slate-500 px-3 py-2 rounded-xl border border-slate-800 focus:outline-none focus:border-emerald-500"
              />
              <button
                onClick={() => handleSend(customMsg)}
                className="p-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold transition-all shadow-md shadow-emerald-500/20"
                aria-label="Send via WhatsApp"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Footer note */}
          <div className="bg-slate-900/90 py-2 px-3 text-center text-[10px] text-slate-400 border-t border-slate-800 flex items-center justify-center gap-1">
            <Phone className="w-2.5 h-2.5 text-emerald-400" />
            <span>Instant connection via official WhatsApp Web / App</span>
          </div>
        </div>
      )}

      {/* Floating Button with Pulse Glow */}
      <div className="relative group">
        {/* Animated Glow Halo */}
        <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600 rounded-full blur-md opacity-70 group-hover:opacity-100 animate-pulse transition duration-500" />
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          id="floating-whatsapp-widget-btn"
          className="relative flex items-center gap-2.5 px-4 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm rounded-full shadow-2xl shadow-emerald-600/40 hover:scale-105 active:scale-95 transition-all duration-200"
          aria-label="Chat on WhatsApp"
        >
          <div className="relative">
            <MessageCircle className="w-5 h-5 fill-slate-950" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-slate-950 border border-emerald-300 animate-ping" />
          </div>
          <span className="hidden sm:inline font-extrabold tracking-tight">Chat with Abdul</span>
        </button>
      </div>
    </div>
  );
};
