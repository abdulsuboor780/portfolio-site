import React, { useState } from 'react';
import { 
  Award, 
  ShieldCheck, 
  ExternalLink, 
  CheckCircle2, 
  QrCode, 
  Calendar, 
  User, 
  Building2, 
  Sparkles,
  ArrowRight,
  Download,
  Copy,
  Check,
  Search
} from 'lucide-react';
import { CERTIFICATION_DETAILS, PERSONAL_INFO } from '../data/portfolioData';

interface CertificationPageProps {
  onOpenAudit: () => void;
  onNavigateContact: () => void;
}

export const CertificationPage: React.FC<CertificationPageProps> = ({ 
  onOpenAudit, 
  onNavigateContact 
}) => {
  const [copiedId, setCopiedId] = useState(false);
  const [certImgError, setCertImgError] = useState<boolean>(false);

  const handleCopyId = () => {
    navigator.clipboard.writeText(CERTIFICATION_DETAILS.credentialId);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  return (
    <div className="py-12 sm:py-20 relative space-y-16">
      
      {/* Background glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-emerald-500/5 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Hero Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Official Credential Verification</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            iSkills LLC (USA) <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Verified Certificate</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300">
            Graduated under the mentorship of <strong className="text-white">M Tanveer Nandla</strong> after completing the rigorous 1-year master training in SEO, Digital Marketing and AI Automations.
          </p>
        </div>

        {/* Certificate Display & Verification Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left / Center: High-Fidelity Certificate Visual Canvas */}
          <div className="lg:col-span-8 space-y-6">
            
            <div className="relative rounded-3xl bg-slate-900 border-2 border-emerald-500/40 p-3 sm:p-6 shadow-2xl shadow-emerald-950/50">
              
              {/* Certificate Image Display & High-Fidelity Representation */}
              {!certImgError ? (
                <div className="rounded-2xl overflow-hidden border border-slate-800 relative group bg-slate-950 shadow-2xl">
                  <img
                    src="/images/certificate-sebt-13-Abdul-Suboor.webp"
                    alt={`iSkills Certificate - ${CERTIFICATION_DETAILS.recipient} (Credential ID: ${CERTIFICATION_DETAILS.credentialId})`}
                    onError={() => setCertImgError(true)}
                    className="w-full h-auto object-contain rounded-xl"
                  />
                  <div className="absolute top-4 right-4 bg-slate-950/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-emerald-500/40 text-xs text-emerald-400 font-bold flex items-center gap-1.5 shadow-lg">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Official iSkills Certificate Document</span>
                  </div>
                </div>
              ) : (
                /* High-Craft Rendered Certificate Representation */
                <div className="relative rounded-2xl bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border border-emerald-500/30 p-6 sm:p-10 text-center space-y-8 overflow-hidden">
                  
                  {/* Decorative Border & Corner Accents */}
                  <div className="absolute inset-2 sm:inset-4 border border-emerald-500/20 rounded-xl pointer-events-none" />
                  <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-emerald-400 rounded-tl-lg pointer-events-none" />
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-emerald-400 rounded-tr-lg pointer-events-none" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-emerald-400 rounded-bl-lg pointer-events-none" />
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-emerald-400 rounded-br-lg pointer-events-none" />

                  {/* Organization Header */}
                  <div className="space-y-2 relative z-10 pt-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 text-xs font-bold font-mono">
                      <Building2 className="w-3.5 h-3.5" />
                      <span>{CERTIFICATION_DETAILS.organization}</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-widest font-serif">
                      Training Certificate
                    </h2>
                    <p className="text-[11px] text-slate-400 uppercase tracking-wider">
                      This is to certify that
                    </p>
                  </div>

                  {/* Recipient Name */}
                  <div className="relative z-10 py-2 border-y border-emerald-500/20 max-w-lg mx-auto">
                    <h3 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300 font-serif">
                      {CERTIFICATION_DETAILS.recipient}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="space-y-2 relative z-10 max-w-xl mx-auto text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      Has successfully completed the comprehensive professional training in
                    </p>
                    <p className="font-extrabold text-white text-sm sm:text-base text-emerald-300 tracking-wide uppercase">
                      "{CERTIFICATION_DETAILS.program}"
                    </p>
                    <p className="text-slate-400 text-xs">
                      Under the mentorship of <strong className="text-white">{CERTIFICATION_DETAILS.mentor}</strong> in accordance with all graduation standards and requirements.
                    </p>
                  </div>

                  {/* Bottom Certificate Meta: Signatures & QR Code */}
                  <div className="pt-6 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-6 items-center relative z-10 text-xs">
                    
                    {/* Mentor Signature */}
                    <div className="text-center sm:text-left space-y-1">
                      <div className="font-serif italic text-base text-emerald-400">M Tanveer Nandla</div>
                      <div className="h-[1px] w-28 bg-slate-700 mx-auto sm:mx-0" />
                      <p className="text-[10px] text-slate-400 font-bold uppercase">{CERTIFICATION_DETAILS.ceoTitle}</p>
                    </div>

                    {/* QR Code & Verify Link */}
                    <div className="flex flex-col items-center justify-center space-y-1">
                      <div className="w-14 h-14 bg-white rounded-lg p-1 shadow-md flex items-center justify-center">
                        <QrCode className="w-12 h-12 text-slate-950" />
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono">Scan QR to Verify</span>
                    </div>

                    {/* Credential ID & Date */}
                    <div className="text-center sm:text-right space-y-1">
                      <p className="text-[10px] text-slate-400 uppercase font-bold">Certificate ID</p>
                      <p className="font-mono text-xs font-bold text-emerald-400">{CERTIFICATION_DETAILS.credentialId}</p>
                      <p className="text-[10px] text-slate-400">{CERTIFICATION_DETAILS.issueDate}</p>
                    </div>

                  </div>

                </div>
              )}

            </div>

            {/* Skills & Knowledge Verification Grid */}
            <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>Core Competencies Tested & Certified</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {CERTIFICATION_DETAILS.skillsCovered.map((skill, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950 border border-slate-800/80 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Live Verification Portal Details */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Live Verification Card */}
            <div className="rounded-3xl bg-slate-900/90 border-2 border-emerald-500/40 p-6 space-y-5 shadow-xl">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Official Online Verification</span>
                </div>
                <h4 className="text-lg font-black text-white">How to Verify Authenticity</h4>
              </div>

              <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
                <p>
                  You can verify this certificate online at any time on the official iSkills portal:
                </p>

                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="flex justify-between items-center text-slate-400">
                    <span>Portal URL:</span>
                    <span className="font-mono text-emerald-400 font-semibold">app.iskills.com</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-400">
                    <span>Certificate ID:</span>
                    <div className="flex items-center gap-1.5">
                      <span className="font-mono text-white font-bold">{CERTIFICATION_DETAILS.credentialId}</span>
                      <button
                        onClick={handleCopyId}
                        className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                        title="Copy Certificate ID"
                      >
                        {copiedId ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      </button>
                    </div>
                  </div>
                </div>

                <a
                  href={CERTIFICATION_DETAILS.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl font-bold text-xs bg-emerald-400 text-slate-950 hover:bg-emerald-300 transition-all flex items-center justify-center gap-2 shadow-md shadow-emerald-500/20"
                >
                  <span>Verify on iSkills Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Program Details */}
            <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 space-y-4 text-xs">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Credential Metadata</h4>
              
              <div className="space-y-3 text-slate-300">
                <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-950 border border-slate-800">
                  <Calendar className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] text-slate-500 block">Training Period:</span>
                    <span className="text-white font-medium">{CERTIFICATION_DETAILS.trainingPeriod}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-950 border border-slate-800">
                  <User className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] text-slate-500 block">Master Mentor:</span>
                    <span className="text-white font-medium">{CERTIFICATION_DETAILS.mentor}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-950 border border-slate-800">
                  <Building2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] text-slate-500 block">Issuing Authority:</span>
                    <span className="text-white font-medium">{CERTIFICATION_DETAILS.organization}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action Card */}
            <div className="rounded-3xl bg-gradient-to-br from-emerald-950/50 to-slate-950 border border-emerald-500/30 p-6 text-center space-y-3">
              <h4 className="text-sm font-bold text-white">Work With a Certified Expert</h4>
              <p className="text-xs text-slate-300">
                Get a free video audit of your Google Business Profile and local keywords.
              </p>
              <button
                onClick={onOpenAudit}
                className="w-full py-3 rounded-xl font-extrabold text-xs bg-emerald-400 text-slate-950 hover:bg-emerald-300 transition-all flex items-center justify-center gap-1.5"
              >
                <span>Claim Free Local Audit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
