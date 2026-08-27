import { ServicePricingOption } from '../types';

export interface ServiceDetail {
  id: string;
  slug: string;
  name: string;
  badge: string;
  price: string;
  period: string;
  unitPrice?: number;
  maxUnits?: number;
  unitLabel?: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  canonicalUrl: string;
  focusKeywords: string[];
  heroStats: { label: string; value: string }[];
  executiveSummary: string;
  whyChooseThis: {
    heading: string;
    points: { title: string; desc: string; icon: string }[];
  };
  methodologySteps: {
    step: string;
    title: string;
    description: string;
    timeframe: string;
    deliverables: string[];
  }[];
  detailedDeliverables: {
    category: string;
    items: string[];
  }[];
  nicheApplications: {
    niche: string;
    icon: string;
    benefit: string;
    exampleKeyword: string;
  }[];
  pricingOptions?: ServicePricingOption[];
  customPricingNote: string;
  relatedServiceSlugs: string[];
  relatedCaseStudyId?: string;
  relatedBlogSlug?: string;
  faqs: { question: string; answer: string }[];
}

export const DETAILED_SERVICES: Record<string, ServiceDetail> = {
  'micro-local-site-gbp': {
    id: 'micro-local-site-gbp',
    slug: 'micro-local-site-gbp',
    name: 'Turnkey Micro Local Site + Google Business Profile',
    badge: '👑 Flagship Main Service',
    price: '$500',
    period: 'one-time turnkey setup (1 Service + 1 Location)',
    tagline: 'The complete local client-acquisition engine: A lightning-fast, high-converting micro site engineered for 1 specific service & 1 target city, integrated with full Google 3-Pack ranking architecture.',
    metaTitle: 'Turnkey Micro Local Website & GBP 3-Pack Funnel ($500) | Abdul Suboor',
    metaDescription: 'Get a high-converting 1-service, 1-location local business micro website and complete Google Maps 3-Pack optimization for $500 turnkey. Sub-second speed and local schema graph included.',
    canonicalUrl: 'https://abdulsuboor.com/services/micro-local-site-gbp',
    focusKeywords: [
      'micro local website design',
      'google business profile ranking service',
      'local seo funnel for contractors',
      'google 3 pack optimization',
      'local lead generation website'
    ],
    heroStats: [
      { label: 'Turnkey Investment', value: '$500 Flat' },
      { label: 'Delivery Turnaround', value: '7-10 Days' },
      { label: 'Mobile PageSpeed', value: '98 - 100/100' },
      { label: 'Target Focus', value: '1 Service + 1 City' },
    ],
    executiveSummary:
      'Most local business websites fail because they are bloated with 30 generic pages, slow themes, and buried contact numbers. The Turnkey Micro Local Site is an ultra-focused conversion machine built strictly around your most profitable service in your primary service city. We combine sub-second mobile code, rich LocalBusiness Schema Graph, click-to-call funnels, and full Google Business Profile 3-Pack optimization to capture high-intent local homeowners and clients actively searching for emergency or scheduled services.',
    whyChooseThis: {
      heading: 'Why the 1-Service + 1-Location Model Beats Traditional $3,000 Agency Websites',
      points: [
        {
          title: 'Laser-Focused Topical & Geo-Entity Relevance',
          desc: 'Google ranks hyper-specific relevance over generic websites. By dedicating the entire domain structure, H1-H3 hierarchy, schema, and content to ONE profitable service (e.g. "Bathroom Remodeling in Dallas" or "Emergency AC Repair in Phoenix"), Google immediately categorizes your business as the premier authority.',
          icon: 'Target',
        },
        {
          title: 'Sub-1-Second Mobile Load Times',
          desc: 'Built with clean semantic code, eliminating bulky page builders and heavy plugins. Homeowners needing immediate assistance get an instant-loading page with zero friction.',
          icon: 'Zap',
        },
        {
          title: 'Direct Click-to-Call & WhatsApp Conversion Funnel',
          desc: 'Every element is engineered for phone calls and direct WhatsApp chats. Sticky mobile call bars, floating chat prompts, and friction-free inquiry forms turn traffic into paying jobs.',
          icon: 'PhoneCall',
        },
        {
          title: 'Complete Google Business Profile 3-Pack Synergy',
          desc: 'Your micro site and GBP listing are bi-directionally synchronized with identical NAP data, geo-coordinates, service categories, and embedded Google Maps entities.',
          icon: 'MapPin',
        },
      ],
    },
    methodologySteps: [
      {
        step: 'Phase 1',
        title: 'High-Intent Keyword & Geo-Competitor Research',
        description: 'We audit your top 3 local Google 3-Pack competitors, identify the highest-converting commercial search terms, and map out the exact primary and secondary GBP categories.',
        timeframe: 'Days 1 - 2',
        deliverables: ['Competitor Geo-Grid baseline scan', 'Target commercial keyword cluster', 'Site architecture roadmap'],
      },
      {
        step: 'Phase 2',
        title: 'Micro Funnel Development & High-Speed Build',
        description: 'We build your responsive, mobile-first micro site featuring clean layout, high-contrast CTA buttons, trust badges, verified reviews, and customer before/after gallery integration.',
        timeframe: 'Days 3 - 5',
        deliverables: ['Complete responsive micro site', 'Sub-second PageSpeed optimization', 'Click-to-call & WhatsApp routing'],
      },
      {
        step: 'Phase 3',
        title: 'Advanced Local Schema Graph & On-Page SEO',
        description: 'We write and validate custom JSON-LD schema (LocalBusiness, GeoCoordinates, OpeningHours, Service, Offer, and Review graphs) to feed Google search spiders structured business entity data.',
        timeframe: 'Days 6 - 7',
        deliverables: ['Custom validated Schema Graph', 'Google Search Console & GA4 setup', 'Meta titles and OpenGraph tags'],
      },
      {
        step: 'Phase 4',
        title: 'GBP Overhaul & 30 High-Authority Local Citations',
        description: 'We optimize your Google Business Profile with geo-tagged images, keyword-rich service menus, and submit 30 top localized citations with 100% NAP consistency.',
        timeframe: 'Days 8 - 10',
        deliverables: ['Fully optimized GBP listing', '30 Local Citation spreadsheet with credentials', '30-day ranking tracker access'],
      },
    ],
    detailedDeliverables: [
      {
        category: 'Micro Website Assets',
        items: [
          'Custom mobile-responsive 1-service, 1-location landing funnel',
          'Ultra-fast load time (< 1.0 second on 4G mobile)',
          'High-converting Click-to-Call header & sticky mobile bottom bar',
          'Instant WhatsApp chat routing widget integration',
          'Interactive contact form with instant email notification',
          'Customer before & after photo showcase / review integration',
        ],
      },
      {
        category: 'Local SEO & Schema Architecture',
        items: [
          'Comprehensive LocalBusiness & GeoCoordinates Schema Graph',
          'Semantic H1, H2, H3 hierarchy optimized for commercial queries',
          'Dynamic OpenGraph and Twitter card metadata',
          'Google Search Console & Google Analytics 4 verification',
          'XML Sitemap and Robots.txt configuration',
        ],
      },
      {
        category: 'Google Business Profile Domination',
        items: [
          'Primary & Secondary category selection based on geo-grid data',
          'Optimized 750-character business bio with localized keyword density',
          'Complete Services and Products menu structure with pricing',
          'Geo-tagged metadata embedded into business and project photos',
          'Review generation blueprint & customer response templates',
        ],
      },
      {
        category: 'Off-Page & Authority Boost',
        items: [
          '30 High-DA local directory and citation submissions',
          '100% Exact Name, Address, and Phone (NAP) synchronization',
          'Full Excel report with live citation URLs and login credentials',
          '30-Day post-launch ranking check-in with Abdul Suboor',
        ],
      },
    ],
    nicheApplications: [
      {
        niche: 'Bathroom & Kitchen Remodelers',
        icon: 'Hammer',
        benefit: 'Target $25k - $60k renovation contracts in affluent suburbs.',
        exampleKeyword: 'kitchen remodeling contractor in [Target City]',
      },
      {
        niche: 'Plumbing & Emergency Rooter',
        icon: 'Wrench',
        benefit: 'Capture high-urgency burst pipe and drain calls 24/7.',
        exampleKeyword: 'emergency plumber near me [Target City]',
      },
      {
        niche: 'Solar Panel Installation',
        icon: 'Sun',
        benefit: 'Generate high-ticket commercial & residential solar consultations.',
        exampleKeyword: 'residential solar panel installer [Target City]',
      },
      {
        niche: 'Dentists & Dental Implants',
        icon: 'Stethoscope',
        benefit: 'Drive daily cosmetic, invisalign, and emergency dental bookings.',
        exampleKeyword: 'emergency dental clinic in [Target City]',
      },
      {
        niche: 'Roofers & Exterior Pros',
        icon: 'Home',
        benefit: 'Book full roof replacements and storm inspection jobs.',
        exampleKeyword: 'roof replacement contractor [Target City]',
      },
      {
        niche: 'HVAC Heating & AC Repair',
        icon: 'Wind',
        benefit: 'Secure emergency seasonal AC and furnace maintenance calls.',
        exampleKeyword: 'ac repair near me [Target City]',
      },
    ],
    customPricingNote:
      'Need to target multiple suburbs or expand to 3-5 service silos? Message directly on WhatsApp for tailored multi-location expansion quotes.',
    relatedServiceSlugs: ['cloudstack-backlinks', 'gbp-optimization', 'dr-as-backlinks'],
    relatedCaseStudyId: 'elite-kitchen-bath',
    relatedBlogSlug: 'how-to-rank-in-google-map-3-pack',
    faqs: [
      {
        question: 'What is included in the $500 Turnkey Micro Local Site package?',
        answer:
          'Everything you need to capture local clients: A custom-coded, ultra-fast 1-service + 1-location micro site, complete Google Business Profile 3-pack optimization, LocalBusiness Schema markup, click-to-call and WhatsApp lead funnels, and 30 top local NAP citations.',
      },
      {
        question: 'Why only 1 service and 1 location?',
        answer:
          'Search engines reward hyper-specific relevance. When a homeowner searches "emergency water heater repair in Dallas", Google prefers a website completely dedicated to that exact service in that exact city rather than a generic multi-purpose site. For multi-service businesses, we build modular silos at custom rates.',
      },
      {
        question: 'Do I need to pay monthly retainer fees?',
        answer:
          'No! The $500 package is a one-time turnkey investment. You own the website, code, citations, and profile completely with zero ongoing mandatory fees. Optional monthly GBP management is available for $150/month if desired.',
      },
      {
        question: 'How fast can this be delivered?',
        answer:
          'Standard turnaround is 7 to 10 business days from the moment we receive your business details, target city, and service focus.',
      },
    ],
  },

  'website-development': {
    id: 'website-development',
    slug: 'website-development',
    name: 'Custom Website Development (WordPress, HTML/CSS, Next.js)',
    badge: '⚡ High-Performance Tech',
    price: '$300',
    period: 'micro site base from $300 / custom quotes on WhatsApp',
    tagline: 'Modern, ultra-fast websites engineered on WordPress, clean HTML5/CSS, or Next.js — custom crafted to turn search traffic into paying clients.',
    metaTitle: 'Custom Web Development (WordPress, HTML5, Next.js) | Abdul Suboor',
    metaDescription: 'Professional web development from $300. Choose pure HTML5 for 100/100 Core Web Vitals, WordPress CMS for easy editing, or Next.js React for scalable web apps.',
    canonicalUrl: 'https://abdulsuboor.com/services/website-development',
    focusKeywords: [
      'custom wordpress website development',
      'high speed html5 website design',
      'nextjs seo web development',
      'local business web design',
      'fast loading lead generation website'
    ],
    heroStats: [
      { label: 'Starting Price', value: '$300 Base' },
      { label: 'Core Web Vitals', value: '100 / 100 Speed' },
      { label: 'Tech Stack', value: 'WP / HTML / Next.js' },
      { label: 'Delivery Time', value: '5-10 Days' },
    ],
    executiveSummary:
      'A slow or clunky website kills your conversion rates and hurts your organic rankings. We build clean, secure, and blazing-fast websites tailored to your exact tech requirements. Whether you want a featherweight pure HTML5/Tailwind landing page with sub-0.4s load speed, an easy-to-manage WordPress CMS site for your team, or a modern enterprise Next.js/React web app with dynamic routing, we deliver clean code with zero bloat and complete SEO readiness.',
    whyChooseThis: {
      heading: 'Choose the Right Architecture for Your Business Goals',
      points: [
        {
          title: 'Pure HTML5 & Tailwind CSS: Unmatched 100/100 PageSpeed',
          desc: 'Zero database overhead, zero plugin bloat, and sub-0.4s loading times. Ideal for local contractors and lead funnels wanting the absolute fastest load times on mobile devices.',
          icon: 'Zap',
        },
        {
          title: 'WordPress CMS: Easy Content Publishing & Control',
          desc: 'Custom Gutenberg or Elementor setups engineered with clean lightweight code. Easily update text, publish blog articles, and add portfolio photos without touching code.',
          icon: 'Globe',
        },
        {
          title: 'Next.js & React: Scalable Modern Web Applications',
          desc: 'Server-side rendering (SSR), static generation (SSG), dynamic programmatic SEO city pages, and custom API integrations for growing companies and web platforms.',
          icon: 'Code2',
        },
        {
          title: 'Built-In Conversion & On-Page SEO Standard',
          desc: 'Every site comes pre-configured with semantic HTML5 tags, OpenGraph sharing cards, structured schema markup, and click-to-call mobile lead capture.',
          icon: 'ShieldCheck',
        },
      ],
    },
    methodologySteps: [
      {
        step: 'Phase 1',
        title: 'Requirements & Architecture Selection',
        description: 'We evaluate your business goals, content needs, and feature set to recommend the ideal framework: pure HTML/Tailwind, WordPress CMS, or Next.js.',
        timeframe: 'Day 1',
        deliverables: ['Tech stack selection', 'Sitemap and wireframe layout', 'Asset & branding collection'],
      },
      {
        step: 'Phase 2',
        title: 'Custom UI/UX & Responsive Development',
        description: 'We code the frontend with pixel-perfect attention to typography, mobile touch targets, color contrast, and seamless navigation.',
        timeframe: 'Days 2 - 5',
        deliverables: ['Complete responsive layout', 'Interactive forms & WhatsApp widgets', 'Speed optimization'],
      },
      {
        step: 'Phase 3',
        title: 'SEO Integration & Analytics Tracking',
        description: 'We implement semantic H1-H3 tagging, metadata, OpenGraph tags, schema markup, Google Analytics 4, and Search Console verification.',
        timeframe: 'Days 6 - 7',
        deliverables: ['On-page SEO optimization', 'GA4 & GSC tracking verification', 'Cross-browser testing'],
      },
      {
        step: 'Phase 4',
        title: 'Deployment, Testing & Source Code Handover',
        description: 'We deploy the website to your hosting or server (Vercel, Netlify, cPanel, or Cloudflare), run final performance audits, and hand over 100% source code.',
        timeframe: 'Days 8 - 10',
        deliverables: ['Live production deployment', '100% Full source code handover', '14-day technical support warranty'],
      },
    ],
    detailedDeliverables: [
      {
        category: 'Frontend & Architecture',
        items: [
          'Choice of WordPress CMS, Pure HTML5/Tailwind, or Next.js React',
          '100% Mobile-first responsive design across all smartphones, tablets, and desktops',
          'Sub-second page loading speeds with optimized WebP images and compressed assets',
          'High-converting Click-to-Call, WhatsApp, and interactive inquiry forms',
          'Clean, semantic, W3C-compliant code structure',
        ],
      },
      {
        category: 'SEO & Technical Foundation',
        items: [
          'Full On-Page SEO setup with optimized titles, meta descriptions, and alt tags',
          'LocalBusiness / Organization JSON-LD Schema markup injection',
          'OpenGraph and Twitter Card metadata for social media previews',
          'Automated XML sitemap and clean Robots.txt configuration',
          'SSL security certificate setup and HTTPS enforcement',
        ],
      },
      {
        category: 'Integrations & Analytics',
        items: [
          'Google Analytics 4 (GA4) event tracking setup',
          'Google Search Console indexing setup',
          'Spam-protected contact forms with reCAPTCHA',
          'Direct WhatsApp chat widget with custom greeting message',
        ],
      },
    ],
    nicheApplications: [
      {
        niche: 'Local Trade Contractors',
        icon: 'Hammer',
        benefit: 'Lightning-fast landing funnels that convert emergency and scheduled inquiries.',
        exampleKeyword: 'local contractor website design',
      },
      {
        niche: 'Medical & Dental Clinics',
        icon: 'Stethoscope',
        benefit: 'Clean patient booking funnels and doctor bio directories with schema.',
        exampleKeyword: 'dental clinic web development',
      },
      {
        niche: 'Consultancies & B2B Services',
        icon: 'Leaf',
        benefit: 'Authoritative corporate websites showcasing whitepapers and client case studies.',
        exampleKeyword: 'consulting agency web design',
      },
      {
        niche: 'Home Improvement Companies',
        icon: 'Home',
        benefit: 'Interactive project galleries with before/after visual sliders.',
        exampleKeyword: 'home remodel portfolio website',
      },
    ],
    pricingOptions: [
      {
        tier: 'Micro Site Base',
        price: '$300',
        features: [
          '1-2 Page High-Speed Funnel',
          'Choice of HTML/Tailwind or WordPress',
          'Mobile-First Responsive Layout',
          'Contact & WhatsApp Lead CTAs',
          'Basic On-Page SEO Setup',
          '5-7 Day Turnaround',
        ],
      },
      {
        tier: 'Multi-Page Business Site',
        price: 'Custom on WhatsApp',
        popular: true,
        features: [
          '5-10 Custom Structured Pages',
          'WordPress CMS or Next.js SSR',
          'Service Silos & Suburb Landing Pages',
          'Advanced Local Schema Graph',
          'Speed Optimization (90+ PageSpeed)',
          'Priority Turnaround',
        ],
      },
      {
        tier: 'Enterprise & Web App',
        price: 'Custom on WhatsApp',
        features: [
          'Custom Next.js & React Architecture',
          'API Integrations & Booking Engines',
          'Multi-Location Dynamic Routing',
          'Dedicated Technical Consultation',
          'Priority WhatsApp Support',
        ],
      },
    ],
    customPricingNote:
      'Pricing starts at $300 for a micro site. For multi-page business websites, booking integrations, or custom Next.js web applications, pricing is tailored transparently on WhatsApp.',
    relatedServiceSlugs: ['micro-local-site-gbp', 'cloudstack-backlinks', 'dr-as-backlinks'],
    relatedCaseStudyId: 'apex-dental-care',
    relatedBlogSlug: 'local-website-technical-seo-audit',
    faqs: [
      {
        question: 'Which framework should I choose: WordPress, HTML, or Next.js?',
        answer:
          'If you need simple lead generation with the fastest possible speed, pure HTML/Tailwind is unbeatable. If you want to publish regular blog articles and edit text yourself, WordPress CMS is best. If you need complex data, custom calculators, or enterprise scale, Next.js React is ideal. We help you choose on our initial call.',
      },
      {
        question: 'Do you provide website hosting?',
        answer:
          'We can deploy directly to your existing host (cPanel, Hostinger, Siteground, AWS) or set up free/low-cost modern hosting on Vercel, Netlify, or Cloudflare Pages with SSL included.',
      },
      {
        question: 'Do I own the source code after delivery?',
        answer:
          'Yes, 100%! You own all code, assets, domains, and database files. We do not hold client websites hostage with locked proprietary platforms.',
      },
    ],
  },

  'cloudstack-backlinks': {
    id: 'cloudstack-backlinks',
    slug: 'cloudstack-backlinks',
    name: 'Cloudstack High-Power Entity Backlinks',
    badge: '☁️ High Cloud Authority',
    price: '$1.50',
    period: 'per cloudstack link (available up to 30 links)',
    unitPrice: 1.5,
    maxUnits: 30,
    unitLabel: 'Cloudstack Link',
    tagline: 'Supercharge your search entity authority and Google indexation speed with authoritative cloud properties across AWS, Google Cloud, Azure, and Oracle.',
    metaTitle: 'Cloudstack Entity Backlinks ($1.50/Link) | Abdul Suboor',
    metaDescription: 'Boost search rankings and indexation with high-DA cloud stack backlinks hosted on Amazon AWS S3, Google Cloud, Microsoft Azure, and Oracle Cloud for $1.50 per link.',
    canonicalUrl: 'https://abdulsuboor.com/services/cloudstack-backlinks',
    focusKeywords: [
      'cloudstack backlinks service',
      'amazon aws s3 backlinks',
      'google cloud storage entity backlinks',
      'cloud stacking seo',
      'high domain rating cloud links'
    ],
    heroStats: [
      { label: 'Unit Price', value: '$1.50 / Link' },
      { label: 'Platform Tier', value: 'AWS, GCP, Azure, Oracle' },
      { label: 'Seed Domain DR', value: 'DR 90 - 100' },
      { label: 'Indexation Impact', value: 'Rapid Crawler Trigger' },
    ],
    executiveSummary:
      'Cloud Stacking harnesses high-trust cloud hosting infrastructure (Amazon AWS S3, Google Cloud Storage, Microsoft Azure Blob, Oracle Cloud, and IBM Cloud) to build semantic HTML entity bridges. Because these cloud storage buckets reside on the world’s most trusted seed domains (with Domain Ratings of 90 to 100), Google crawlers trust and crawl them constantly. We inject your Google Maps CID, target keywords, NAP data, and money site URLs to transfer immense authority directly into your local properties with zero toxic footprint.',
    whyChooseThis: {
      heading: 'Why Cloud Entity Stacking Outperforms Generic PBNs and Web 2.0 Links',
      points: [
        {
          title: 'Hosted on World-Class Seed Domains (DR 90+)',
          desc: 'Links are deployed on amazonaws.com, storage.googleapis.com, blob.core.windows.net, and oraclecloud.com — domains Google can never penalize or ignore.',
          icon: 'Cloud',
        },
        {
          title: 'Permanent Semantic Entity Stacking',
          desc: 'Each cloud property contains structured HTML with your target schema, business citations, geo-coordinates, and contextual anchor text bridges.',
          icon: 'Layers',
        },
        {
          title: 'Accelerated Google Crawler Stimulation',
          desc: 'Google spiders crawl major cloud platforms continuously. Cloudstack links act as an indexing expressway for newly built or stuck money pages.',
          icon: 'Zap',
        },
        {
          title: '100% White-Hat & Penalty-Proof',
          desc: 'Unlike spammy private blog networks (PBNs) or automated link blasts, cloud stacking uses real cloud storage hosting with zero spam footprints.',
          icon: 'ShieldCheck',
        },
      ],
    },
    methodologySteps: [
      {
        step: 'Phase 1',
        title: 'Entity & Target URL Architecture',
        description: 'We collect your target money site URLs, Google Business Profile CID link, primary geo-coordinates, and contextual target keywords.',
        timeframe: 'Day 1',
        deliverables: ['Entity anchor mapping', 'Target keyword distribution table'],
      },
      {
        step: 'Phase 2',
        title: 'Semantic HTML Cloud Property Generation',
        description: 'We code custom semantic HTML files embedded with Schema.org JSON-LD markup, Google Maps embeds, and structured citation bridges.',
        timeframe: 'Days 2 - 3',
        deliverables: ['Custom semantic HTML files', 'Schema entity integration', 'Map iframe embedding'],
      },
      {
        step: 'Phase 3',
        title: 'Multi-Cloud Platform Deployment',
        description: 'We deploy the files across Amazon AWS S3, Google Cloud Storage, Microsoft Azure Blob Storage, and Oracle Cloud buckets with public permissions.',
        timeframe: 'Days 3 - 4',
        deliverables: ['Live public cloud URLs', 'Cross-platform server distribution'],
      },
      {
        step: 'Phase 4',
        title: 'Verification, Indexing Trigger & Report Delivery',
        description: 'We verify HTTP 200 status on all cloud properties, submit to tier-1 indexation pipelines, and deliver a comprehensive spreadsheet report.',
        timeframe: 'Day 5',
        deliverables: ['Excel / Google Sheet with live URLs', 'Indexation status report', 'Anchor text log'],
      },
    ],
    detailedDeliverables: [
      {
        category: 'Cloud Hosting Distribution',
        items: [
          'Amazon AWS S3 Cloud Storage HTML properties',
          'Google Cloud Storage (GCP) static entity pages',
          'Microsoft Azure Blob Storage cloud assets',
          'Oracle Cloud Infrastructure & IBM Cloud properties',
          'Publicly accessible, permanent cloud endpoints with HTTPS encryption',
        ],
      },
      {
        category: 'Entity & SEO Injection',
        items: [
          'Embedded Google Business Profile map and review link',
          'Exact NAP (Name, Address, Phone) consistency sync',
          'LocalBusiness / Service schema graph embedded into cloud files',
          'Diversified natural anchor text (exact, partial, branded, and URL anchors)',
          'Direct dofollow link juice flow to money site and GBP entity',
        ],
      },
      {
        category: 'Reporting & Transparency',
        items: [
          'Detailed spreadsheet with 100% of live cloud URLs',
          'Platform origin log (AWS, GCP, Azure, Oracle)',
          'Anchor text distribution breakdown',
          'Direct WhatsApp turnaround & support from Abdul Suboor',
        ],
      },
    ],
    nicheApplications: [
      {
        niche: 'Local GBP Ranking Boosts',
        icon: 'MapPin',
        benefit: 'Injects immense entity relevance into your Google Maps CID link to expand 3-Pack geo-grid radius.',
        exampleKeyword: 'plumber in [city] / roofing company near me',
      },
      {
        niche: 'Competitive Commercial Keywords',
        icon: 'Target',
        benefit: 'Helps high-difficulty pages jump from positions #11-#20 onto page 1.',
        exampleKeyword: 'solar panel installation cost / cosmetic dentist',
      },
      {
        niche: 'Hard-to-Index New Sites & Pages',
        icon: 'Zap',
        benefit: 'Forces Google search bots to crawl and index stubborn pages rapidly.',
        exampleKeyword: 'new suburb location pages and service silos',
      },
    ],
    pricingOptions: [
      {
        tier: 'Cloud Starter (10 Links)',
        links: '10 Cloudstack Links',
        price: '$15',
        features: [
          '10 High-Authority Cloud Properties',
          'Amazon AWS S3 & Google Cloud Storage',
          'GBP Map Embed & NAP Sync',
          'Live URL Excel Sheet Report',
          '3-Day Fast Turnaround',
        ],
      },
      {
        tier: 'Cloud Growth (20 Links)',
        links: '20 Cloudstack Links',
        price: '$30',
        popular: true,
        features: [
          '20 Multi-Cloud Platform Properties',
          'AWS, Google Cloud, Azure & Oracle',
          'Entity Relevance & Schema Injection',
          'Accelerated Indexing Trigger',
          'Full Verification Spreadsheet',
        ],
      },
      {
        tier: 'Cloud Max (30 Links)',
        links: '30 Cloudstack Links',
        price: '$45',
        features: [
          'Full 30 Cloudstack Tier (Max Pack)',
          'Complete 5-Cloud Platform Diversity',
          'Maximum Entity Authority Stack',
          'Priority WhatsApp Turnaround',
          'Full Verification Spreadsheet',
        ],
      },
    ],
    customPricingNote:
      'Order anywhere from 1 to 30 links at $1.50 per link. For bulk monthly agency orders over 30 links, message on WhatsApp for volume discounts.',
    relatedServiceSlugs: ['micro-local-site-gbp', 'gbp-optimization', 'dr-as-backlinks'],
    relatedBlogSlug: 'cloud-stacking-authority-backlinks',
    faqs: [
      {
        question: 'Are cloudstack backlinks safe from Google penalties?',
        answer:
          'Yes, 100%. Cloudstack links reside on authoritative, verified cloud infrastructure (Amazon AWS, Google Cloud, Microsoft Azure). They contain clean semantic HTML and do not use automated bot spam or private blog networks.',
      },
      {
        question: 'How many cloudstack links should I order?',
        answer:
          'For a local business targeting a medium competition metro area, the 20-link tier ($30) or 30-link tier ($45) provides the ideal cross-cloud platform diversity.',
      },
      {
        question: 'How long do cloudstack links stay live?',
        answer:
          'All cloudstack properties are hosted permanently on cloud storage buckets, providing continuous authority and crawling signals over the long term.',
      },
    ],
  },

  'gbp-optimization': {
    id: 'gbp-optimization',
    slug: 'gbp-optimization',
    name: 'Google Business Profile (GBP) 3-Pack Optimization',
    badge: '📍 Local SEO Specialist',
    price: '$300',
    period: 'one-time setup / $150 monthly handling',
    tagline: 'Complete Google 3-Pack optimization with category architecture, geo-signals, spam competitor removal, and optional $150/mo management.',
    metaTitle: 'Google Business Profile (GBP) 3-Pack Optimization ($300) | Abdul Suboor',
    metaDescription: 'Rank in Google Maps top 3 results with complete GBP optimization for $300 one-time or $150/mo management. Category tuning, geo-tagged photos, spam removal, and review velocity.',
    canonicalUrl: 'https://abdulsuboor.com/services/gbp-optimization',
    focusKeywords: [
      'google business profile optimization service',
      'google maps 3 pack ranking',
      'gbp spam competitor redressal',
      'local seo google my business',
      'geo grid proximity ranking'
    ],
    heroStats: [
      { label: 'One-Time Setup', value: '$300 Flat' },
      { label: 'Monthly Growth (Opt.)', value: '$150 / mo' },
      { label: '3-Pack Proximity', value: 'Expanded Radius' },
      { label: 'Setup Turnaround', value: '3-5 Days' },
    ],
    executiveSummary:
      'Over 70% of high-intent local service calls originate directly from the Google Maps 3-Pack. If your business is sitting at position #7 or #14, you are losing dozens of qualified homeowner jobs to your competitors every single week. Our Google Business Profile (GBP) optimization service conducts a forensic overhaul of your listing: aligning primary and secondary categories with exact local search intent, embedding geo-coordinates into your media, removing keyword-stuffed spam competitors via Google Redressals, and installing a review-generation blueprint.',
    whyChooseThis: {
      heading: 'The Core Ranking Factors We Target to Win the Google 3-Pack',
      points: [
        {
          title: 'Primary & Secondary Category Optimization',
          desc: 'The #1 ranking factor in local search. We analyze local geo-grid data to select the exact category combinations that trigger maximum map visibility.',
          icon: 'Target',
        },
        {
          title: 'Competitor Spam Removal (Google Redressals)',
          desc: 'Fake business names and keyword-stuffed listings steal your rankings. We submit official Google Redressal Complaints to eliminate spam competitors and bump you up.',
          icon: 'ShieldCheck',
        },
        {
          title: 'Geo-Tagged Photo & Media Architecture',
          desc: 'We optimize and upload geotagged project photos containing EXIF location metadata that reinforces your physical service area radius.',
          icon: 'MapPin',
        },
        {
          title: 'Review Velocity & Keyword-Enriched Responses',
          desc: 'We provide automated templates for generating 5-star customer reviews enriched with target service keywords and craft owner responses within 24 hours.',
          icon: 'Star',
        },
      ],
    },
    methodologySteps: [
      {
        step: 'Phase 1',
        title: 'Geo-Grid Proximity Audit & Category Mapping',
        description: 'We run a 7x7 geo-grid scan across your metropolitan area to benchmark your current map rank and identify category mismatches.',
        timeframe: 'Day 1',
        deliverables: ['Baseline Geo-Grid ranking scan', 'Category optimization blueprint', 'Competitor spam audit'],
      },
      {
        step: 'Phase 2',
        title: 'Complete Profile Optimization & Media Uploads',
        description: 'We rewrite your 750-character business description, structure complete Services & Products menus, and upload geo-tagged project photos.',
        timeframe: 'Days 2 - 3',
        deliverables: ['Optimized description and bio', 'Complete service menu structure', 'Geotagged image assets'],
      },
      {
        step: 'Phase 3',
        title: 'Spam Competitor Removal & Citation Sync',
        description: 'We identify illegitimate competitors using keyword stuffing or fake addresses and file official redressal cases to clean up the 3-Pack.',
        timeframe: 'Days 3 - 4',
        deliverables: ['Redressal case submissions', 'NAP consistency verification', 'Q&A section seeding'],
      },
      {
        step: 'Phase 4',
        title: 'Review Blueprint & Ongoing Growth Plan',
        description: 'We deliver your customer review generation guide and establish optional weekly posting and reporting workflows for monthly management clients.',
        timeframe: 'Day 5',
        deliverables: ['Review generation template', 'Final Geo-Grid comparison scan', 'Monthly performance roadmap'],
      },
    ],
    detailedDeliverables: [
      {
        category: 'Profile Core Setup',
        items: [
          'In-depth audit of Primary and Secondary GBP categories',
          'Keyword-optimized 750-character business description',
          'Complete Services and Products menu with pricing details',
          'Service area boundary configuration for maximum proximity radius',
          'Business hours, holiday hours, and special attributes configuration',
        ],
      },
      {
        category: 'Visuals & Geo-Assets',
        items: [
          'High-resolution cover and logo optimization',
          'Geotagged project photo uploads with embedded coordinates',
          'Before-and-after project photos for home improvement niches',
        ],
      },
      {
        category: 'Spam Redressal & Reputation',
        items: [
          'Competitor name-spam audit and Google Redressal case filing',
          'Review response optimization blueprint (keyword-enriched owner replies)',
          'Pre-populated Local Q&A section answering top customer questions',
        ],
      },
      {
        category: 'Optional Monthly Management ($150/mo)',
        items: [
          '2 Weekly high-intent GBP Posts with local keyword targeting',
          'Weekly owner responses to all new incoming customer reviews',
          'Ongoing spam competitor monitoring and removal',
          'Monthly Geo-Grid ranking and phone call analytics report',
        ],
      },
    ],
    nicheApplications: [
      {
        niche: 'Plumbers & Emergency Rooters',
        icon: 'Wrench',
        benefit: 'Dominates urgent 24/7 plumbing search queries across the metropolitan radius.',
        exampleKeyword: 'emergency plumber near me',
      },
      {
        niche: 'Bathroom & Kitchen Remodelers',
        icon: 'Hammer',
        benefit: 'Showcases luxury photo galleries that convert high-budget renovation shoppers.',
        exampleKeyword: 'kitchen remodeler [city]',
      },
      {
        niche: 'Roofers & Exterior Contractors',
        icon: 'Home',
        benefit: 'Captures storm season insurance replacement leads directly from maps.',
        exampleKeyword: 'roof repair contractor [city]',
      },
      {
        niche: 'Dentists & Orthodontists',
        icon: 'Stethoscope',
        benefit: 'Fills the schedule with emergency dental appointments and cosmetic consultations.',
        exampleKeyword: 'dentist open today near me',
      },
      {
        niche: 'HVAC Specialists',
        icon: 'Wind',
        benefit: 'Drives phone calls during seasonal heatwaves and winter freezes.',
        exampleKeyword: 'ac repair near me',
      },
    ],
    pricingOptions: [
      {
        tier: '1-Time Complete Optimization',
        price: '$300',
        popular: true,
        features: [
          'Complete Forensic GBP Audit',
          'Primary & Secondary Category Tuning',
          '750-Character Keyword Bio & Menus',
          'Geotagged Photo Uploads & Q&A',
          'Competitor Spam Redressal Filing',
          '3-5 Day Delivery Turnaround',
        ],
      },
      {
        tier: 'Ongoing Monthly Growth',
        price: '$150 / mo',
        features: [
          '2 Weekly Keyword-Optimized GBP Posts',
          '100% 24-Hour Review Response Handling',
          'Ongoing Spam Competitor Removal',
          'Monthly Geo-Grid Tracking Report',
          'Direct WhatsApp Support with Abdul',
        ],
      },
    ],
    customPricingNote:
      'Manage multiple locations? We offer discounted multi-location GBP bundle pricing on WhatsApp.',
    relatedServiceSlugs: ['micro-local-site-gbp', 'cloudstack-backlinks', 'dr-as-backlinks'],
    relatedCaseStudyId: 'apex-dental-care',
    relatedBlogSlug: 'gbp-optimization-convert-map-views',
    faqs: [
      {
        question: 'How quickly can I expect to see ranking improvements on Google Maps?',
        answer:
          'Most clients notice significant geo-grid ranking improvements and increased call volume within 14 to 30 days after category correction, spam competitor removal, and citation synchronization.',
      },
      {
        question: 'Do I have to share my Google password?',
        answer:
          'No! You simply add our official email as a "Manager" inside your Google Business Profile settings. You retain 100% primary ownership at all times.',
      },
      {
        question: 'What is competitor spam redressal?',
        answer:
          'Many unscrupulous competitors stuff their Google business title with fake keywords (e.g. "Apex Dallas Emergency Plumber 24/7 Rooter Service"). Google guidelines strictly prohibit this. We submit official redressal documentation to Google support to have the spam titles corrected or removed, immediately elevating your legitimate listing.',
      },
    ],
  },

  'dr-as-backlinks': {
    id: 'dr-as-backlinks',
    slug: 'dr-as-backlinks',
    name: 'DR & AS Authority Backlinks Service',
    badge: '🔗 High Domain Authority',
    price: 'From $50',
    period: 'one-time package / tiered delivery',
    tagline: 'Boost your Domain Rating (DR) & Authority Score (AS) with 100% manual organic dofollow comment backlinks on low OBL pages.',
    metaTitle: 'DR & AS Authority Backlinks Service (From $50) | Abdul Suboor',
    metaDescription: 'Increase your website Domain Rating (DR) and Authority Score (AS) with 100% organic dofollow comment backlinks on verified low Outbound Link (OBL) pages from $50.',
    canonicalUrl: 'https://abdulsuboor.com/services/dr-as-backlinks',
    focusKeywords: [
      'increase domain rating service',
      'dofollow comment backlinks low obl',
      'boost authority score semrush',
      'ahrefs dr increase service',
      'safe organic backlinks for seo'
    ],
    heroStats: [
      { label: 'Starting Price', value: '$50 Package' },
      { label: 'Link Type', value: '100% Dofollow' },
      { label: 'OBL Standard', value: 'Strict Low OBL Only' },
      { label: 'Safety Profile', value: 'Zero Spam / White-Hat' },
    ],
    executiveSummary:
      'Domain authority is the foundational bedrock of Google organic rankings. If your website has a Domain Rating (DR) or Authority Score (AS) under 20, even the best on-page content will struggle to reach page 1 for lucrative commercial keywords. We provide manual, contextual, 100% organic dofollow comment backlinks placed on genuine high-authority websites with strict low Outbound Links (OBL). We use diversified, natural anchor texts to safely transfer domain trust and elevate your organic search rankings without triggering Google algorithm filters.',
    whyChooseThis: {
      heading: 'Why Our Low-OBL Dofollow Backlinks Pass Real Link Equity',
      points: [
        {
          title: 'Strict Low OBL (Outbound Link) Curation',
          desc: 'Most cheap backlink sellers drop links on pages with 500+ spam comments where link equity is diluted to zero. We manually curate pages with low outbound links so your link receives maximum link juice.',
          icon: 'Target',
        },
        {
          title: '100% Real Dofollow Link Equity',
          desc: 'Every link passes PageRank and domain authority, directly increasing your Ahrefs DR, Moz DA, and Semrush Authority Score metrics.',
          icon: 'Link2',
        },
        {
          title: 'Natural Anchor Text Diversification',
          desc: 'We mix exact match, partial match, branded, and generic anchors (e.g. brand name, website URL, click here) to build a natural link profile that withstands Google core updates.',
          icon: 'ShieldCheck',
        },
        {
          title: 'Complete Live URL Verification Spreadsheet',
          desc: 'You receive a transparent Google Sheet / Excel file listing every live URL, verified metrics, anchor text, and indexation status.',
          icon: 'CheckCircle2',
        },
      ],
    },
    methodologySteps: [
      {
        step: 'Phase 1',
        title: 'Target URL & Anchor Text Strategy',
        description: 'We review your target money pages and construct a balanced anchor text plan to avoid over-optimization while maximizing ranking potential.',
        timeframe: 'Day 1',
        deliverables: ['Anchor text distribution ratio', 'Target landing page checklist'],
      },
      {
        step: 'Phase 2',
        title: 'Low OBL High-Authority Site Prospecting',
        description: 'We filter our database for active, indexed high-DA websites with low comment counts and verified dofollow attributes.',
        timeframe: 'Days 2 - 3',
        deliverables: ['Vetted high-authority URL pool', 'Contextual comment draft matching page topic'],
      },
      {
        step: 'Phase 3',
        title: 'Manual Placement & Contextual Insertion',
        description: 'We manually submit thoughtful, contextual comments with your website URL and targeted anchor text across the selected domains.',
        timeframe: 'Days 4 - 7',
        deliverables: ['Live placement execution', 'HTTP status code verification'],
      },
      {
        step: 'Phase 4',
        title: 'Indexing Verification & Final Reporting',
        description: 'We verify all links are live, run indexation checks, and deliver the final transparent spreadsheet report.',
        timeframe: 'Days 8 - 10',
        deliverables: ['Live URL spreadsheet with metrics', 'Ahrefs/Semrush before & after metric snapshot'],
      },
    ],
    detailedDeliverables: [
      {
        category: 'Backlink Quality & Standards',
        items: [
          '100% Manual, organic dofollow comment backlinks',
          'Strict Low OBL (Outbound Link) web pages only (No link farms or automated bot spam)',
          'High Domain Rating / Authority Score seed websites',
          'Natural anchor text ratio distribution to maintain white-hat compliance',
          'Permanent links passing continuous domain equity',
        ],
      },
      {
        category: 'Transparency & Verification',
        items: [
          'Comprehensive Excel / Google Sheet with 100% live verified backlink URLs',
          'Ahrefs DR / Moz DA / Semrush AS metric indicators',
          'Fast turnaround (5-10 business days per sprint)',
          'Direct WhatsApp support with Abdul Suboor',
        ],
      },
    ],
    nicheApplications: [
      {
        niche: 'Contractors & Service Pros',
        icon: 'Hammer',
        benefit: 'Pushes difficult commercial service pages onto page 1 of Google organic search.',
        exampleKeyword: 'kitchen remodeling / roof replacement cost',
      },
      {
        niche: 'Healthcare & Dental Practices',
        icon: 'Stethoscope',
        benefit: 'Builds foundational authority so localized clinic pages outrank hospital aggregators.',
        exampleKeyword: 'cosmetic dentist / dental implants near me',
      },
      {
        niche: 'Affiliate & Niche Websites',
        icon: 'Globe',
        benefit: 'Boosts overall domain authority to accelerate indexing and ranking of new articles.',
        exampleKeyword: 'best product reviews & buyer guides',
      },
    ],
    pricingOptions: [
      {
        tier: 'DR 20+ Authority',
        links: '100 Dofollow Links',
        price: '$50',
        drTarget: 'DR / AS 20 - 35+',
        features: [
          '100 Contextual Dofollow Links',
          'Low OBL Verified Pages',
          'Full Live URL Report Sheet',
          'Fast 5-Day Delivery',
        ],
      },
      {
        tier: 'DR 40+ Power',
        links: '200 Dofollow Links',
        price: '$100',
        drTarget: 'DR / AS 40 - 55+',
        popular: true,
        features: [
          '200 High-Authority Dofollow Links',
          'Strict Low OBL Curation',
          'Tier-1 Indexation Support',
          'Full Live URL Report Sheet',
        ],
      },
      {
        tier: 'DR 60+ Enterprise',
        links: '350 Dofollow Links',
        price: '$300',
        drTarget: 'DR / AS 60 - 75+',
        features: [
          '350 Elite Authority Dofollow Links',
          'Ultra-Low OBL Guaranteed',
          'Maximum Domain Juice Transfer',
          'Priority Turnaround & WhatsApp Support',
        ],
      },
    ],
    customPricingNote:
      'Need a customized multi-month backlink sprint for a portfolio of client websites? Message Abdul directly on WhatsApp for agency bulk pricing.',
    relatedServiceSlugs: ['micro-local-site-gbp', 'cloudstack-backlinks', 'gbp-optimization'],
    relatedCaseStudyId: 'elite-kitchen-bath',
    relatedBlogSlug: 'advanced-schema-markup-local-seo',
    faqs: [
      {
        question: 'What is OBL and why does it matter?',
        answer:
          'OBL stands for Outbound Links. When a blog post has 1,000 spam comments, the link juice is divided by 1,000, making each link practically worthless. We curate web pages with low outbound links so your backlink receives maximum PageRank transfer.',
      },
      {
        question: 'Will these links increase my Ahrefs DR or Semrush AS?',
        answer:
          'Yes! Because these backlinks are 100% dofollow and hosted on genuine high-authority domains, they directly elevate domain metrics across Ahrefs, Semrush, Moz, and Google search equity.',
      },
      {
        question: 'Do you guarantee a live URL report?',
        answer:
          'Yes, every single order includes a transparent spreadsheet containing all live backlink URLs, anchor texts, and verified metrics.',
      },
    ],
  },
};
