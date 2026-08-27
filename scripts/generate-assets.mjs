import { Resvg } from '@resvg/resvg-js';
import fs from 'fs';
import path from 'path';

const outDir = path.resolve(process.cwd(), 'public/images');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 1. HERO PORTFOLIO SECTION IMAGE (800x1000)
// Clean professional studio portrait of Abdul Suboor on dark background
const heroSvg = `
<svg width="800" height="1000" viewBox="0 0 800 1000" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background Gradients -->
    <radialGradient id="bgGlow" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#0f2b38"/>
      <stop offset="45%" stop-color="#091424"/>
      <stop offset="100%" stop-color="#020617"/>
    </radialGradient>

    <radialGradient id="emeraldRim" cx="50%" cy="30%" r="45%">
      <stop offset="0%" stop-color="#10b981" stop-opacity="0.25"/>
      <stop offset="70%" stop-color="#06b6d4" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>

    <!-- Face & Skin Lighting Gradients -->
    <linearGradient id="skinBase" x1="20%" y1="0%" x2="80%" y2="100%">
      <stop offset="0%" stop-color="#f8c9a3"/>
      <stop offset="50%" stop-color="#e8a87c"/>
      <stop offset="100%" stop-color="#cc8258"/>
    </linearGradient>

    <linearGradient id="skinShadow" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#b86d43" stop-opacity="0.6"/>
      <stop offset="30%" stop-color="#e8a87c" stop-opacity="0"/>
      <stop offset="70%" stop-color="#e8a87c" stop-opacity="0"/>
      <stop offset="100%" stop-color="#b86d43" stop-opacity="0.6"/>
    </linearGradient>

    <linearGradient id="beardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1e2430"/>
      <stop offset="50%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#050811"/>
    </linearGradient>

    <!-- Suit & Fabric Gradients -->
    <linearGradient id="suitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="40%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#020617"/>
    </linearGradient>

    <linearGradient id="tieGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399"/>
      <stop offset="50%" stop-color="#10b981"/>
      <stop offset="100%" stop-color="#047857"/>
    </linearGradient>

    <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>

    <pattern id="subtleGrid" width="30" height="30" patternUnits="userSpaceOnUse">
      <circle cx="15" cy="15" r="1" fill="#1e293b" fill-opacity="0.4"/>
    </pattern>
  </defs>

  <!-- Dark Studio Background -->
  <rect width="800" height="1000" fill="url(#bgGlow)"/>
  <rect width="800" height="1000" fill="url(#subtleGrid)"/>
  <circle cx="400" cy="380" r="360" fill="url(#emeraldRim)"/>

  <!-- Modern Ambient Accent Arcs -->
  <circle cx="400" cy="400" r="320" fill="none" stroke="#10b981" stroke-opacity="0.15" stroke-width="1.5" stroke-dasharray="6 8"/>
  <circle cx="400" cy="400" r="360" fill="none" stroke="#06b6d4" stroke-opacity="0.1" stroke-width="1"/>

  <!-- Character / Portrait Figure: Abdul Suboor -->
  <g transform="translate(400, 480)">

    <!-- Broad Shoulders & Tailored Suit Jacket -->
    <path d="M-280,520 C-270,300 -180,210 -80,180 L-40,290 L40,290 L80,180 C180,210 270,300 280,520 Z" fill="url(#suitGrad)" stroke="#334155" stroke-width="2"/>

    <!-- Crisp White Collared Shirt -->
    <path d="M-55,190 L0,295 L55,190 L35,160 L-35,160 Z" fill="#f8fafc"/>
    <path d="M-55,190 L-10,210 L-35,160 Z" fill="#e2e8f0"/>
    <path d="M55,190 L10,210 L35,160 Z" fill="#e2e8f0"/>

    <!-- Emerald Silk Tie -->
    <path d="M-12,205 L12,205 L18,340 L0,370 L-18,340 Z" fill="url(#tieGrad)" filter="url(#softGlow)"/>
    <polygon points="-12,205 12,205 8,225 -8,225" fill="#059669"/>

    <!-- Left & Right Suit Lapels -->
    <path d="M-80,180 L-25,320 L-95,320 Z" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
    <path d="M80,180 L25,320 L95,320 Z" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>

    <!-- Neck with Anatomical Shading -->
    <rect x="-42" y="90" width="84" height="85" rx="12" fill="#d98c5b"/>
    <path d="M-42,100 Q0,145 42,100 L42,175 L-42,175 Z" fill="#c47746" opacity="0.5"/>

    <!-- Face Structure -->
    <ellipse cx="0" cy="80" rx="90" ry="105" fill="url(#skinBase)"/>
    <ellipse cx="0" cy="80" rx="90" ry="105" fill="url(#skinShadow)"/>

    <!-- Well-Groomed Modern Beard & Mustache -->
    <path d="M-86,75 C-86,155 -40,185 0,185 C40,185 86,155 86,75 C86,115 60,170 0,170 C-60,170 -86,115 -86,75 Z" fill="url(#beardGrad)"/>
    <path d="M-36,120 Q0,135 36,120 Q0,150 -36,120 Z" fill="url(#beardGrad)"/>

    <!-- Confident Smile & Lips -->
    <path d="M-28,112 Q0,130 28,112" fill="none" stroke="#9a3412" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M-20,114 Q0,126 20,114" fill="#ffffff"/>

    <!-- Nose -->
    <path d="M0,58 L6,88 L-6,88 Z" fill="#c47746" opacity="0.6"/>
    <ellipse cx="-7" cy="88" rx="4" ry="2.5" fill="#a0522d"/>
    <ellipse cx="7" cy="88" rx="4" ry="2.5" fill="#a0522d"/>

    <!-- Eyes (Focused & Friendly) -->
    <!-- Left Eye -->
    <ellipse cx="-34" cy="56" rx="12" ry="7" fill="#ffffff"/>
    <circle cx="-33" cy="56" r="6" fill="#1e293b"/>
    <circle cx="-31" cy="54" r="2" fill="#ffffff"/>
    <path d="M-47,54 Q-34,46 -21,54" fill="none" stroke="#0f172a" stroke-width="3"/>
    
    <!-- Right Eye -->
    <ellipse cx="34" cy="56" rx="12" ry="7" fill="#ffffff"/>
    <circle cx="35" cy="56" r="6" fill="#1e293b"/>
    <circle cx="37" cy="54" r="2" fill="#ffffff"/>
    <path d="M21,54 Q34,46 47,54" fill="none" stroke="#0f172a" stroke-width="3"/>

    <!-- Well-Defined Eyebrows -->
    <path d="M-50,42 Q-32,32 -16,42" fill="none" stroke="#090d16" stroke-width="6" stroke-linecap="round"/>
    <path d="M16,42 Q32,32 50,42" fill="none" stroke="#090d16" stroke-width="6" stroke-linecap="round"/>

    <!-- Hair Style (Modern Professional Dark Fade) -->
    <path d="M-92,50 C-96,-35 -50,-65 0,-65 C50,-65 96,-35 92,50 C80,-15 50,-42 0,-42 C-50,-42 -80,-15 -92,50 Z" fill="#090d16"/>
    <path d="M-90,30 Q-70,-45 0,-50 Q70,-45 90,30 Q55,-20 0,-20 Q-55,-20 -90,30 Z" fill="#1e2430"/>

    <!-- Ears -->
    <ellipse cx="-90" cy="78" rx="12" ry="20" fill="#d98c5b"/>
    <ellipse cx="90" cy="78" rx="12" ry="20" fill="#d98c5b"/>
  </g>

  <!-- Floating Proximity Indicator Ring -->
  <g transform="translate(400, 880)">
    <rect x="-350" y="-40" width="700" height="80" rx="20" fill="#030712" fill-opacity="0.9" stroke="#10b981" stroke-width="1.5"/>
    <circle cx="-300" cy="0" r="14" fill="#10b981" fill-opacity="0.2"/>
    <circle cx="-300" cy="0" r="6" fill="#10b981"/>
    <text x="-270" y="7" fill="#ffffff" font-family="system-ui, sans-serif" font-size="20" font-weight="900" letter-spacing="1">ABDUL SUBOOR</text>
    <text x="50" y="6" fill="#34d399" font-family="system-ui, sans-serif" font-size="13" font-weight="700" letter-spacing="1.5">SEO &amp; GOOGLE 3-PACK SPECIALIST</text>
  </g>
</svg>
`;

// 2. ISKILLS CERTIFICATE IMAGE SVG (1600x1130)
const certSvg = `
<svg width="1600" height="1130" viewBox="0 0 1600 1130" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="certBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#060c18"/>
      <stop offset="50%" stop-color="#0c172e"/>
      <stop offset="100%" stop-color="#030712"/>
    </linearGradient>

    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#f59e0b"/>
      <stop offset="50%" stop-color="#fef08a"/>
      <stop offset="100%" stop-color="#d97706"/>
    </linearGradient>

    <linearGradient id="emeraldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#10b981"/>
      <stop offset="50%" stop-color="#5eead4"/>
      <stop offset="100%" stop-color="#0d9488"/>
    </linearGradient>

    <linearGradient id="cardDark" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#020617"/>
    </linearGradient>

    <pattern id="certPattern" width="60" height="60" patternUnits="userSpaceOnUse">
      <circle cx="30" cy="30" r="1.5" fill="#38bdf8" fill-opacity="0.15"/>
    </pattern>
  </defs>

  <!-- Outer Background -->
  <rect width="1600" height="1130" fill="url(#certBg)"/>
  <rect width="1600" height="1130" fill="url(#certPattern)"/>

  <!-- Ornate Double Outer Border Frame -->
  <rect x="40" y="40" width="1520" height="1050" rx="20" fill="none" stroke="url(#goldGrad)" stroke-width="4"/>
  <rect x="55" y="55" width="1490" height="1020" rx="14" fill="none" stroke="#10b981" stroke-width="1.5" stroke-dasharray="10 6"/>
  <rect x="68" y="68" width="1464" height="994" rx="10" fill="url(#cardDark)" fill-opacity="0.95" stroke="#1e293b" stroke-width="2"/>

  <!-- Corner Ornaments -->
  <g fill="url(#goldGrad)">
    <!-- Top-Left -->
    <path d="M75,75 L125,75 L125,85 L85,85 L85,125 L75,125 Z"/>
    <circle cx="95" cy="95" r="4"/>
    <!-- Top-Right -->
    <path d="M1525,75 L1475,75 L1475,85 L1515,85 L1515,125 L1525,125 Z"/>
    <circle cx="1505" cy="95" r="4"/>
    <!-- Bottom-Left -->
    <path d="M75,1055 L125,1055 L125,1045 L85,1045 L85,1005 L75,1005 Z"/>
    <circle cx="95" cy="1035" r="4"/>
    <!-- Bottom-Right -->
    <path d="M1525,1055 L1475,1055 L1475,1045 L1515,1045 L1515,1005 L1525,1005 Z"/>
    <circle cx="1505" cy="1035" r="4"/>
  </g>

  <!-- Top Logo & Issuing Organization Header -->
  <g transform="translate(800, 160)">
    <!-- Shield / Seal -->
    <circle cx="0" cy="0" r="48" fill="#020617" stroke="url(#goldGrad)" stroke-width="3"/>
    <path d="M-22,-20 L22,-20 L22,5 C22,22 0,34 0,34 C0,34 -22,22 -22,5 Z" fill="url(#goldGrad)"/>
    <path d="M-8,-10 L8,-10 L8,2 C8,12 0,18 0,18 C0,18 -8,12 -8,2 Z" fill="#020617"/>
    <text x="0" y="72" text-anchor="middle" fill="url(#goldGrad)" font-family="Georgia, serif" font-size="28" font-weight="bold" letter-spacing="4">iSKILLS LLC (USA)</text>
    <text x="0" y="98" text-anchor="middle" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="14" font-weight="600" letter-spacing="3">TRAINING DEVELOPMENT MENTORING</text>
  </g>

  <!-- Certificate Main Title -->
  <g transform="translate(800, 340)">
    <text x="0" y="0" text-anchor="middle" fill="#ffffff" font-family="Georgia, serif" font-size="44" font-weight="bold" letter-spacing="2">TRAINING CERTIFICATE</text>
    <text x="0" y="36" text-anchor="middle" fill="url(#emeraldGrad)" font-family="system-ui, sans-serif" font-size="18" font-weight="bold" letter-spacing="6">OF PROFESSIONAL MASTERY</text>
    
    <line x1="-260" y1="65" x2="260" y2="65" stroke="url(#goldGrad)" stroke-width="2"/>
    <circle cx="0" cy="65" r="5" fill="#f59e0b"/>
  </g>

  <!-- Recipient Presentation -->
  <g transform="translate(800, 470)">
    <text x="0" y="0" text-anchor="middle" fill="#94a3b8" font-family="Georgia, serif" font-style="italic" font-size="20">This is proudly presented to</text>
    <text x="0" y="65" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="58" font-weight="900" letter-spacing="2">ABDUL SUBOOR</text>
    <line x1="-320" y1="95" x2="320" y2="95" stroke="url(#emeraldGrad)" stroke-width="3"/>
  </g>

  <!-- Training Citation / Details -->
  <g transform="translate(800, 630)">
    <text x="0" y="0" text-anchor="middle" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="18" font-weight="400">In recognition of hard work, dedication and mastery in completing the intensive 1-year training in</text>
    <text x="0" y="38" text-anchor="middle" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="24" font-weight="800" letter-spacing="1">SEO, Digital Marketing and AI Automations (Batch SEBT-13)</text>
    <text x="0" y="74" text-anchor="middle" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="16">under the mentorship of M Tanveer Nandla in accordance with all graduation standards.</text>
  </g>

  <!-- Bottom Metadata & Signatures Grid -->
  <g transform="translate(200, 830)">
    
    <!-- Mentor Signature -->
    <g transform="translate(100, 0)">
      <!-- Stylized signature curve -->
      <path d="M-80,-20 Q-40,-60 0,-30 T80,-10 T120,-40" fill="none" stroke="url(#emeraldGrad)" stroke-width="3" stroke-linecap="round"/>
      <line x1="-120" y1="10" x2="160" y2="10" stroke="#475569" stroke-width="1.5"/>
      <text x="20" y="34" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="18" font-weight="bold">M Tanveer Nandla</text>
      <text x="20" y="56" text-anchor="middle" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13" font-weight="600">CEO, iSkills LLC (USA)</text>
    </g>

    <!-- Official Gold Seal & QR Code -->
    <g transform="translate(600, 0)">
      <!-- Official Gold Ribbon Seal -->
      <circle cx="0" cy="-20" r="54" fill="#020617" stroke="url(#goldGrad)" stroke-width="4"/>
      <circle cx="0" cy="-20" r="46" fill="none" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="6 4"/>
      <text x="0" y="-32" text-anchor="middle" fill="url(#goldGrad)" font-family="system-ui, sans-serif" font-size="11" font-weight="900" letter-spacing="1">OFFICIAL</text>
      <text x="0" y="-14" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="16" font-weight="900">VERIFIED</text>
      <text x="0" y="4" text-anchor="middle" fill="url(#goldGrad)" font-family="system-ui, sans-serif" font-size="10" font-weight="800">SEAL</text>
      <!-- Ribbon Tails -->
      <path d="M-22,30 L-34,75 L-12,65 L0,80 L0,30 Z" fill="#d97706"/>
      <path d="M22,30 L34,75 L12,65 L0,80 L0,30 Z" fill="#f59e0b"/>
    </g>

    <!-- Verification Info & Credential ID -->
    <g transform="translate(1050, 0)">
      <rect x="-130" y="-55" width="260" height="90" rx="14" fill="#020617" stroke="#10b981" stroke-width="1.5"/>
      <text x="0" y="-30" text-anchor="middle" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11" font-weight="700" letter-spacing="1">CREDENTIAL ID</text>
      <text x="0" y="-2" text-anchor="middle" fill="#34d399" font-family="monospace" font-size="24" font-weight="900">726553</text>
      <text x="0" y="22" text-anchor="middle" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="11" font-weight="600">Verify: app.iskills.com/certificate</text>
      
      <text x="0" y="56" text-anchor="middle" fill="#64748b" font-family="system-ui, sans-serif" font-size="12">Issue Date: October 01, 2024</text>
    </g>

  </g>

  <!-- Bottom Brand Footnote -->
  <g transform="translate(800, 1030)">
    <text x="0" y="0" text-anchor="middle" fill="#475569" font-family="system-ui, sans-serif" font-size="12" font-weight="600" letter-spacing="2">iSKILLS TRAINING • iSKILLS MARKETPLACE • YOUTH SUMMIT • SEOLYTICS</text>
  </g>
</svg>
`;

async function renderAssets() {
  console.log('Rendering portfolio hero section image...');
  const heroResvg = new Resvg(heroSvg, {
    fitTo: { mode: 'width', value: 800 }
  });
  const heroPngData = heroResvg.render();
  const heroPngBuffer = heroPngData.asPng();
  fs.writeFileSync(path.join(outDir, 'portfolio-hero-section.jpg'), heroPngBuffer);
  console.log('Saved /public/images/portfolio-hero-section.jpg (size:', heroPngBuffer.length, 'bytes)');

  console.log('Rendering iSkills certificate image...');
  const certResvg = new Resvg(certSvg, {
    fitTo: { mode: 'width', value: 1600 }
  });
  const certPngData = certResvg.render();
  const certPngBuffer = certPngData.asPng();
  fs.writeFileSync(path.join(outDir, 'certificate-sebt-13-Abdul-Suboor.jpg'), certPngBuffer);
  console.log('Saved /public/images/certificate-sebt-13-Abdul-Suboor.jpg (size:', certPngBuffer.length, 'bytes)');
}

renderAssets().catch(err => {
  console.error('Error generating assets:', err);
  process.exit(1);
});
