import { ServicePackage, CaseStudy, BlogPost, Testimonial, FAQ, NicheInfo } from '../types';

export const PERSONAL_INFO = {
  name: 'Abdul Suboor',
  photo: '/images/abdulsuboor-hero.webp',
  title: 'SEO & Local SEO Specialist',
  tagline: 'Driving Predictable Organic Leads & Google 3-Pack Rankings for Small Businesses',
  experience: '3+ Years of Hands-On SEO & GBP Experience',
  certification: 'iSkills Certified SEO Professional (ID: 726553)',
  whatsapp: '+923365336008',
  whatsappFormatted: '+92 336 5336008',
  whatsappUrl: 'https://wa.me/923365336008',
  email: 'abdulsuboor780@gmail.com',
  linkedin: 'https://www.linkedin.com/in/abdul-suboor/',
  facebook: 'https://www.facebook.com/abd.suboor/',
  location: 'Serving US, UK, Canada, Australia & Worldwide Local Businesses',
  stats: [
    { label: 'Years Experience', value: '3+' },
    { label: 'GBP Profiles Ranked', value: '95+' },
    { label: 'Organic Traffic Lift', value: '+380%' },
    { label: 'Client Retention Rate', value: '96%' },
  ],
  skills: [
    'Google Business Profile (GBP) 3-Pack Domination',
    'Local SEO Geo-Grid Proximity Ranking',
    'DR & AS High-Authority Dofollow Backlinks',
    'Micro Local Website Funnels ($500 Turnkey)',
    'On-Page Optimization & Local Schema Graph',
    'Organic Dofollow Comment Backlinks (Low OBL)',
    'NAP Consistency & Citations Cleaning',
    'Google Map Spam Competitor Removal',
  ],
};

export const NICHES_COVERED: NicheInfo[] = [
  {
    id: 'bathroom-kitchen-remodeling',
    name: 'Bathroom & Kitchen Remodeling',
    icon: 'Hammer',
    typicalKeywords: ['kitchen remodeling near me', 'bathroom renovation contractor', 'custom cabinet installation'],
    expectedImpact: 'High-Ticket Project Inquiries ($15k - $60k+ contracts)',
    turnaround: '4 to 6 Weeks to 3-Pack Domination',
    strategyFocus: 'Geo-tagged project galleries, before/after schema, suburb landing pages, and local homeowner backlinks.',
  },
  {
    id: 'solar-installation',
    name: 'Solar Installation & Energy',
    icon: 'Sun',
    typicalKeywords: ['residential solar installer', 'commercial solar panel cost', 'best solar company near me'],
    expectedImpact: 'Commercial & Residential Consultation Leads',
    turnaround: '5 to 8 Weeks for Top Search Exposure',
    strategyFocus: 'Rebate calculators, local city authority backlinks, and high-intent commercial keyword clustering.',
  },
  {
    id: 'dentist',
    name: 'Dentist & Dental Clinics',
    icon: 'Stethoscope',
    typicalKeywords: ['emergency dentist near me', 'invisalign specialist', 'family dental clinic in [city]'],
    expectedImpact: 'Daily New Patient Appointments & Emergency Calls',
    turnaround: '3 to 5 Weeks for Geo-Proximity Jump',
    strategyFocus: 'MedicalSchema, localized insurance/service silos, and review velocity automation.',
  },
  {
    id: 'plumber',
    name: 'Plumbers & Drain Specialists',
    icon: 'Wrench',
    typicalKeywords: ['emergency plumber 24/7', 'water heater repair', 'clogged drain cleaning service'],
    expectedImpact: 'Immediate Emergency Call Volume',
    turnaround: '3 to 4 Weeks for 3-Pack Trigger',
    strategyFocus: '24/7 Click-to-call mobile funnels, primary category tuning, and local citation geo-signals.',
  },
  {
    id: 'roofers',
    name: 'Roofers & Exterior Contractors',
    icon: 'Home',
    typicalKeywords: ['roof repair contractor', 'commercial roof replacement', 'storm damage roof inspection'],
    expectedImpact: 'High-Volume Storm Season Insurance Leads',
    turnaround: '4 to 7 Weeks for Metropolitan Radius',
    strategyFocus: 'Drone imagery geotagging, suburb silos, and high-DA home improvement editorial backlinks.',
  },
  {
    id: 'environmental-consultancies',
    name: 'Environmental Consultancies',
    icon: 'Leaf',
    typicalKeywords: ['environmental compliance consultant', 'phase 1 esa assessment', 'soil and water testing firm'],
    expectedImpact: 'Corporate & Government RFP Inquiries',
    turnaround: '6 to 8 Weeks for B2B Authority',
    strategyFocus: 'B2B topical authority, technical white-paper siloing, and high-AS domain rating backlinks.',
  },
  {
    id: 'hvac',
    name: 'HVAC Heating & Air Conditioning',
    icon: 'Wind',
    typicalKeywords: ['ac repair near me', 'furnace installation cost', 'emergency hvac technician'],
    expectedImpact: 'Year-Round Service Agreement Calls',
    turnaround: '4 to 6 Weeks to Map Dominance',
    strategyFocus: 'Seasonal campaign pages, neighborhood geo-grids, and instant quote WhatsApp funneling.',
  },
];

export const SERVICES_DATA: ServicePackage[] = [
  {
    id: 'micro-local-site-gbp',
    name: 'Turnkey Micro Local Site + Google Business Profile',
    badge: '👑 Flagship Main Service',
    popular: true,
    isMain: true,
    price: '$500',
    period: 'one-time turnkey setup (1 Service + 1 Location)',
    tagline: 'The ultimate local client-acquisition engine: A lightning-fast conversion micro site built for 1 specific service & 1 target city, integrated with full Google 3-Pack ranking architecture.',
    description:
      'Engineered specifically for local contractors, remodelers, solar specialists, plumbers, and clinics. Instead of a bloated generic website that does not rank, you get a razor-sharp, sub-second conversion funnel focused on ONE profitable service in ONE prime location paired with complete Google Business Profile domination.',
    highlights: [
      'Complete 1 Service + 1 Location Micro Local Site: $500 Turnkey',
      'Full Google Business Profile (GBP) 3-Pack Setup, Category Mapping & Optimization',
      'Local Schema Markup (LocalBusiness, GeoCoordinates, Service Schema & NAP Graph)',
      'Sub-1-Second Mobile PageSpeed for instant bounce reduction and max conversions',
      'High-converting Click-to-Call & Direct WhatsApp Lead Routing Funnel',
      '30 High-Authority Local NAP Citations & Geo-directory submissions',
      'Custom pricing available on WhatsApp for multi-service or multi-location expansion',
    ],
    deliverables: [
      'Turnkey custom responsive mobile-first website (1 Service + 1 Location focus)',
      '100% verified & optimized Google Business Profile with geo-tagged media',
      'Complete Local Schema Graph & Google Search Console / GA4 verification',
      '30 Top Local Citation login sheet + 30-day post-launch ranking tracking',
    ],
    customPricingNote:
      'Need multiple locations (e.g. 3-5 service areas) or multi-service silos? We set custom pricing directly on WhatsApp according to your business expansion scale.',
    idealFor: 'Bathroom & Kitchen Remodelers, Solar Installers, Plumbers, Dentists, Roofers, HVAC & Local Pros',
    turnaround: '7 - 10 Business Days',
  },
  {
    id: 'website-development',
    name: 'Custom Website Development (WordPress, HTML/CSS, Next.js)',
    badge: '⚡ High-Performance Tech',
    popular: false,
    price: '$300',
    period: 'micro site base from $300 / custom quotes on WhatsApp',
    tagline: 'Modern, ultra-fast websites engineered on WordPress, clean HTML/CSS, or Next.js — custom crafted to turn traffic into paying clients.',
    description:
      'We build clean, secure, and blazing-fast websites tailored to your exact tech preference. Whether you need a featherweight pure HTML/CSS landing page with 100/100 PageSpeed, an easy-to-manage WordPress CMS site, or a modern enterprise Next.js/React web app, we deliver clean code with zero bloat.',
    techStack: ['WordPress', 'HTML5 & CSS3', 'Next.js', 'React', 'Tailwind CSS'],
    highlights: [
      'Micro Site Base Package: $300 (Clean, mobile-responsive 1-2 page funnel)',
      'WordPress CMS: Custom themes, Elementor/Gutenberg, blogs & easy content editor',
      'Pure HTML5 / Tailwind CSS: Instant <0.4s load time, zero plugin bloat, 100/100 Core Web Vitals',
      'Next.js & React: Modern server-side rendering (SSR), dynamic interactivity & scalability',
      'Custom pricing set on WhatsApp based on your exact business requirements & feature scope',
      'Integrated Contact Forms, WhatsApp Chat Widgets, and Google Analytics 4 tracking',
    ],
    deliverables: [
      'Fully responsive, mobile-first website deployed to your domain / hosting',
      'SEO-ready semantic HTML structure with OpenGraph & Meta tag hierarchy',
      'Cross-browser & cross-device compatibility testing',
      'Full source code transfer & 14-day post-delivery technical support',
    ],
    customPricingNote:
      'Pricing starts at $300 for a micro site. For multi-page business websites, booking integrations, or custom Next.js applications, pricing is tailored transparently on WhatsApp.',
    idealFor: 'Local businesses, startups, service professionals, and agencies needing high-converting web presence',
    turnaround: '5 - 10 Business Days',
    pricingOptions: [
      {
        tier: 'Micro Site Base',
        price: '$300',
        features: [
          '1-2 Pages Conversion Funnel',
          'Choice of HTML/CSS or WordPress',
          'Mobile-First Responsive Layout',
          'Contact & WhatsApp Lead CTAs',
          'Basic On-Page SEO Setup',
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
  },
  {
    id: 'cloudstack-backlinks',
    name: 'Cloudstack High-Power Entity Backlinks',
    badge: '☁️ High Cloud Authority',
    popular: false,
    price: '$1.50',
    period: 'per cloudstack link (available up to 30 links)',
    unitPrice: 1.5,
    maxUnits: 30,
    unitLabel: 'Cloudstack Link',
    tagline: 'Supercharge your search entity and indexing speed with authoritative cloud stack properties across AWS, Google Cloud, Azure, and Oracle.',
    description:
      'Cloud Stacking harnesses high-trust cloud hosting platforms (Amazon AWS S3, Google Cloud Storage, Microsoft Azure Blob, Oracle Cloud, and IBM Cloud) to build semantic HTML entity bridges. These dofollow cloud properties pass immense domain trust, accelerate Google crawler indexing, and pump authority into your Google Maps profile and money site.',
    highlights: [
      'Affordable Cloudstack Power: Just $1.50 per link (Order 1 to 30 links)',
      '10 Links = $15 | 20 Links = $30 | 30 Links = $45 (Max Tier)',
      'Hosted on Tier-1 Cloud Giants: Amazon AWS, Google Cloud, Microsoft Azure, Oracle & IBM',
      'Semantic HTML entity stacking connecting your GBP, NAP, and money site',
      'Massive crawl budget stimulation & accelerated Google indexation trigger',
      '100% Safe, White-Hat, permanent cloud properties with zero toxic footprint',
      'Complete live URL spreadsheet with anchor distribution and cloud platform logs',
    ],
    deliverables: [
      'Live Cloudstack HTML pages hosted on global cloud servers',
      'Full Excel / Google Sheet with live URL verification',
      'Map Embed & Schema entity integration inside cloud files',
      'Fast turnaround within 3-5 business days',
    ],
    customPricingNote:
      'Select any quantity from 1 to 30 links ($1.50/link). For bulk monthly agency cloudstack builds over 30 links, message on WhatsApp for custom volume discounts.',
    idealFor: 'Competitive local niches, hard-to-index new pages, GBP map power boosts & target keyword surges',
    turnaround: '3 - 5 Business Days',
    pricingOptions: [
      {
        tier: 'Cloud Starter (10 Links)',
        links: '10 Cloudstack Links',
        price: '$15',
        features: [
          '10 High-Authority Cloud Properties',
          'AWS S3 & Google Cloud Storage',
          'GBP Map Embed & NAP Sync',
          'Live URL Excel Sheet Report',
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
        ],
      },
    ],
  },
  {
    id: 'gbp-optimization',
    name: 'Google Business Profile (GBP) 3-Pack Optimization',
    badge: '📍 Local SEO Specialist',
    popular: false,
    price: '$300',
    period: 'one-time setup / $150 monthly handling',
    tagline: 'Complete 3-Pack optimization with category setup, geo-signals, spam competitor redressals, and optional $150/mo management.',
    description:
      'Turn your Google Business Profile into a 24/7 client-generating magnet. Includes exhaustive category mapping, keyword-optimized descriptions, geo-tagged photo uploads, citation sync, and spam competitor removal.',
    highlights: [
      'Complete 1-Time Full GBP Optimization: Just $300 (One-Time Setup)',
      'Optional Monthly Ongoing Handling & Growth: Just $150 / month',
      'Primary & Secondary Category Deep Audit for maximum search proximity',
      'Geo-tagged service photos, products, and services architecture setup',
      'Weekly GBP Posts & Q&A seeding with local keyword targeting (Monthly plan)',
      'Spam competitor removal via Google Redressal Complaints to open up #1 rankings',
      'Review generation blueprint & customer response guidance',
    ],
    deliverables: [
      'Fully optimized Google Business Profile ready to rank in Google 3-Pack',
      'Before & After Geo-Grid proximity visual scan',
      'Direct WhatsApp access with Abdul Suboor for ongoing recommendations',
      'Monthly performance and phone call analytics report (if monthly handling chosen)',
    ],
    idealFor: 'Contractors, Dentists, Plumbers, Roofers, Remodelers, Solar Installers & Local Stores',
    turnaround: '3 - 5 Business Days (Setup)',
  },
  {
    id: 'dr-as-backlinks',
    name: 'DR & AS Authority Backlinks Service',
    badge: '🔗 High Domain Authority',
    popular: false,
    price: 'From $50',
    period: 'one-time package / tiered delivery',
    tagline: 'Boost your Domain Rating (DR) & Authority Score (AS) with 100% organic dofollow comment backlinks on low OBL pages.',
    description:
      'Safe, natural, and white-hat link power. We place manual, contextual organic dofollow comment backlinks on real high-authority websites with low Outbound Links (OBL) and zero spamming to skyrocket your search equity.',
    highlights: [
      'DR 20+ Package: 100 Dofollow Links = $50',
      'DR 40+ Package: 200 Dofollow Links = $100',
      'DR 60+ Package: 350 Dofollow Links = $300',
      '100% Organic Dofollow Comment Backlinks with high indexation',
      'Strict Low OBL (Outbound Link) web pages only (No link farms or spam)',
      'Natural Anchor Text diversification to protect against Google core updates',
      'Permanent links passing continuous link juice and domain trust',
    ],
    deliverables: [
      'Comprehensive Excel / Google Sheet with live backlink URLs',
      'Ahrefs / Moz / Semrush metrics verification (DR, AS, UR)',
      'Target anchor text & indexed page status report',
    ],
    idealFor: 'Websites wanting to jump from page 2/3 to page 1 for competitive commercial keywords',
    turnaround: '5 - 10 Business Days per Sprint',
    pricingOptions: [
      {
        tier: 'DR 20+ Authority',
        links: '100 Dofollow Links',
        price: '$50',
        drTarget: 'DR / AS 20 - 35+',
        features: ['100 Contextual Dofollow Links', 'Low OBL Verified Pages', 'Full Live URL Report', 'Fast 5-Day Delivery'],
      },
      {
        tier: 'DR 40+ Power',
        links: '200 Dofollow Links',
        price: '$100',
        drTarget: 'DR / AS 40 - 55+',
        popular: true,
        features: ['200 High-Authority Dofollow Links', 'Strict Low OBL Curation', 'Tier-1 Indexation Support', 'Full Live URL Report'],
      },
      {
        tier: 'DR 60+ Enterprise',
        links: '350 Dofollow Links',
        price: '$300',
        drTarget: 'DR / AS 60 - 75+',
        features: ['350 Elite Authority Dofollow Links', 'Ultra-Low OBL Guaranteed', 'Maximum Domain Juice Transfer', 'Priority Turnaround & Support'],
      },
    ],
  },
];

export const CERTIFICATION_DETAILS = {
  organization: 'iSkills LLC (USA)',
  program: 'SEO, DIGITAL MARKETING AND AI AUTOMATIONS',
  title: 'Training Certificate of Professional Mastery',
  recipient: 'Abdul Suboor',
  credentialId: '726553',
  certificateImage: '/images/certificate-sebt-13-Abdul-Suboor.webp',
  issueDate: 'October 01, 2024',
  trainingPeriod: 'Sept 2023 to Sept 2024',
  mentor: 'M Tanveer Nandla',
  ceoTitle: 'CEO, iSkills LLC',
  verificationUrl: 'https://app.iskills.com/certificate',
  verificationInstruction: 'Verify at https://app.iskills.com/certificate with Certificate ID: 726553 or with the QR code present on the certificate.',
  partners: ['iSkills Training Development Mentoring', 'iSkills MARKETPLACE', 'YOUTH SUMMIT', 'SEOLYTICS'],
  status: 'Official Active & Verified Credential',
  skillsCovered: [
    'Advanced Google Search Ranking Algorithms & Core AI Updates',
    'Local SEO, Google Business Profile (GBP) 3-Pack Proximity Domination',
    'Organic Dofollow Backlinks, Authority Score & DR Increasing Strategies',
    'Technical Core Web Vitals, Crawl Budget & Schema Graph Optimization',
    'Topical Authority, Semantic Siloing & High-Intent Conversion Mapping',
    'AI Marketing Automations, Prompt Engineering & Search Workflows',
  ],
  description:
    'Issued by iSkills LLC (USA) in recognition of hard work and dedication in completing the comprehensive 1-year intensive training in SEO, Digital Marketing and AI Automations under the mentorship of M Tanveer Nandla in accordance with all requirements of graduation.',
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'apex-dental-care',
    title: 'From Position #14 to #1 in Google 3-Pack within 75 Days',
    client: 'Apex Family Dental Care',
    industry: 'Healthcare / Dental Clinic',
    niche: 'Dentist & Dental Implants',
    location: 'Austin, Texas',
    duration: '75 Days',
    summary:
      'Apex Dental was losing high-ticket cosmetic and emergency dental patients to competing clinics. Abdul implemented a full GBP overhaul, category correction, and localized medical schema.',
    beforeMetrics: {
      rank: '#14 (Google Maps)',
      traffic: '320 monthly visits',
      calls: '12 phone calls/mo',
    },
    afterMetrics: {
      rank: '#1 (Google 3-Pack)',
      traffic: '1,490 monthly visits',
      calls: '74 phone calls/mo',
    },
    growthPercentage: '+516% Patient Inquiries',
    strategy: [
      'Fixed 42 citation NAP mismatches across core local healthcare directories',
      'Optimized primary and secondary GBP categories with high-intent patient keywords',
      'Implemented custom DentalSchema and geo-specific service area landing pages',
      'Built 100+ low OBL organic dofollow backlinks to boost domain rating from DR 14 to DR 38',
    ],
    testimonial: {
      quote:
        'Abdul transformed our dental practice. We went from barely getting 2 calls a week to our phones ringing daily with patients looking for emergency and cosmetic dentistry. He is truly an SEO master!',
      author: 'Dr. Marcus Vance',
      role: 'Lead Dentist, Apex Dental Care',
      rating: 5,
    },
    keywordsRanked: [
      { keyword: 'emergency dentist near me', before: '#16', after: '#1' },
      { keyword: 'invisalign dentist austin', before: '#24', after: '#2' },
      { keyword: 'family dental clinic central', before: '#11', after: '#1' },
    ],
  },
  {
    id: 'elite-kitchen-bath',
    title: 'Ranking #1 for $35,000 Kitchen & Bathroom Remodeling Projects',
    client: 'Elite Craft Remodeling',
    industry: 'Home Renovation / Interior Contracting',
    niche: 'Bathroom & Kitchen Remodeling',
    location: 'Phoenix, Arizona',
    duration: '60 Days',
    summary:
      'Elite Craft Remodeling wanted high-budget remodel contracts. Abdul overhauled their GBP profile for $300, uploaded 45 geotagged project photos, and deployed suburb landing pages.',
    beforeMetrics: {
      rank: '#19 (Google Maps)',
      traffic: '280 monthly visits',
      calls: '8 quote requests/mo',
    },
    afterMetrics: {
      rank: '#1 (Google 3-Pack)',
      traffic: '1,890 monthly visits',
      calls: '42 qualified bids/mo',
    },
    growthPercentage: '+425% Inbound Quotes',
    strategy: [
      'Complete $300 GBP Optimization with primary category "Kitchen Remodeler" and secondary "Bathroom Remodeler"',
      'Uploaded 45 high-resolution geotagged project photos of real completed kitchens',
      'Generated 30 localized contractor citations with exact NAP consistency',
      'Secured 150 DR 40+ organic dofollow comment backlinks to core remodel landing pages',
    ],
    testimonial: {
      quote:
        'In our niche of Bathroom & Kitchen Remodeling, high-value leads are everything. Abdul’s GBP optimization generated multiple $30k+ contracts in our very first month!',
      author: 'Robert Sterling',
      role: 'Managing Partner, Elite Craft Remodeling',
      rating: 5,
    },
    keywordsRanked: [
      { keyword: 'kitchen remodeling phoenix', before: '#21', after: '#1' },
      { keyword: 'bathroom renovation contractor near me', before: '#17', after: '#1' },
      { keyword: 'custom kitchen cabinets installation', before: '#28', after: '#2' },
    ],
  },
  {
    id: 'sunpower-solar',
    title: 'Dominating Commercial & Residential Solar Searches in 90 Days',
    client: 'SunPeak Solar Systems',
    industry: 'Renewable Energy & Contracting',
    niche: 'Solar Installation & Energy',
    location: 'San Diego, California',
    duration: '90 Days',
    summary:
      'SunPeak Solar needed to outrank national aggregators. Abdul built a tailored off-page link profile with DR 60+ backlinks and optimized their Google Business Profile for local solar queries.',
    beforeMetrics: {
      rank: '#26 (Google Search)',
      traffic: '410 monthly visits',
      calls: '11 consultation calls/mo',
    },
    afterMetrics: {
      rank: '#1 3-Pack & #2 Organic',
      traffic: '3,200 monthly visits',
      calls: '68 consultation calls/mo',
    },
    growthPercentage: '+518% Solar Consultations',
    strategy: [
      'Deployed 350 DR 60+ high-authority organic dofollow backlinks on energy & green tech domains',
      'Optimized GBP with primary category "Solar Energy Equipment Supplier" & "Solar Energy Contractor"',
      'Set up suburb landing pages targeting high-income zip codes with solar potential',
      'Automated WhatsApp inquiry CTA connecting directly to sales reps',
    ],
    testimonial: {
      quote:
        'For our solar installation business, Abdul Suboor delivered exceptional organic rankings. We cut our Google Ads budget by 60% because organic calls flooded in.',
      author: 'David Chen',
      role: 'Marketing VP, SunPeak Solar',
      rating: 5,
    },
    keywordsRanked: [
      { keyword: 'commercial solar installation san diego', before: '#32', after: '#1' },
      { keyword: 'residential solar panel installer near me', before: '#25', after: '#2' },
      { keyword: 'best solar company ca', before: '#41', after: '#3' },
    ],
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'google-3-pack-domination-2026',
    slug: 'how-to-rank-number-1-in-google-3-pack-2026',
    title: 'How to Rank in the Google Maps 3-Pack in 2026: The Definitive Local SEO Blueprint',
    category: 'Local SEO',
    readTime: '6 min read',
    date: 'August 24, 2026',
    excerpt:
      'Discover the exact step-by-step strategy for capturing local search proximity, optimizing GBP categories, and dominating local search results for your service area.',
    tags: ['Local SEO', 'GBP Optimization', 'Google 3-Pack', 'Small Business'],
    content: `
### Why the Google 3-Pack is the Most Valuable Real Estate on the Internet

Over 76% of consumers who conduct a local search on their smartphone visit a business within 24 hours, and 28% of those searches result in a purchase. If your business is not sitting in the top 3 positions on the Google Map pack, you are essentially invisible to customers who have cash in hand.

#### 1. Perfecting Your Primary Category
The single heaviest ranking factor for local proximity is your **Primary Google Business Profile Category**. 
- Never guess your primary category. Audit the top 3 ranking competitors in your city.
- In niches like Bathroom & Kitchen Remodeling, Plumbers, Roofers, or Solar Installation, picking the wrong primary category can halve your impression volume instantly.

#### 2. Geo-Tagged Photos & Consistent Activity
Google monitors profile freshness. Upload 3 to 5 real, high-resolution photos of your actual work, truck, team, and location weekly. Geotagging metadata reinforces your physical service perimeter.

#### 3. High-Quality Dofollow Authority Backlinks
Off-page signals directly impact local pack rankings. Backlinks with DR 20 to DR 60+ from clean, low-OBL sites signal to Google that your business is an established authority.

#### 4. The Review Velocity Engine
It is not just about total star count; Google heavily weighs **review velocity** and **keyword-rich customer feedback**. Encourage clients to mention the exact service (e.g. "kitchen remodeling" or "emergency plumbing") and city in their feedback.
    `,
  },
  {
    id: 'dr-authority-backlinks-guide',
    slug: 'how-dr-and-as-backlinks-skyrocket-search-rankings',
    title: 'Why Organic Dofollow Comment Backlinks (Low OBL) Build Safe, Long-Lasting Domain Authority',
    category: 'Off-Page SEO',
    readTime: '5 min read',
    date: 'August 18, 2026',
    excerpt:
      'Learn how high Domain Rating (DR) and Authority Score (AS) links pass real link equity without risk of algorithmic penalties.',
    tags: ['Off-Page SEO', 'Backlinks', 'Domain Rating', 'Authority Score'],
    content: `
### Quality vs. Spam in Modern Link Building

In 2026, Google effortlessly filters out automated spam networks, private blog networks (PBNs), and bloated link farms with thousands of outbound links.

#### What Makes an Effective Backlink Strategy?
1. **Low Outbound Links (Low OBL)**: When a web page only has a handful of links, the passed link equity (link juice) is concentrated and significantly more powerful.
2. **Real High Domain Authority**: Links from DR 20+, DR 40+, and DR 60+ websites pass genuine trust to your money pages.
3. **Natural Anchor Distribution**: Mixing brand names, generic anchors, and natural keyword phrases keeps your link profile natural and immune to Google spam updates.

Abdul's manual outreach approach guarantees 100% white-hat organic dofollow links with detailed live URL reporting.
    `,
  },
  {
    id: 'micro-local-website-strategy',
    slug: 'why-a-micro-local-website-is-the-highest-converting-funnel',
    title: 'Why a $500 Micro Local Website is the Highest-Converting Funnel for Local Contractors',
    category: 'Conversion Strategy',
    readTime: '4 min read',
    date: 'July 28, 2026',
    excerpt:
      'Heavy WordPress themes packed with bloated plugins kill your conversion rates. Here is why lightweight, purpose-built local landing sites close more paying customers.',
    tags: ['Micro Sites', 'Web Design', 'Conversion Funnel', 'Local Business'],
    content: `
### Speed and Simplicity Always Win

When a homeowner has a burst pipe or needs an urgent kitchen remodel quote, they do not want to navigate through a slow 20-page corporate website with confusing menus.

They want three things immediately:
1. **Proof of credibility & local reviews**
2. **Instant clarity on what you do and where you operate**
3. **One-click buttons to call your phone or send a WhatsApp message**

#### Core Components of Our $500 Micro Local Site:
- **Sub-1-Second Load Times**: Built with clean, modern code that scores 95+ on Google PageSpeed Insights.
- **Sticky Call-To-Action Header**: Mobile searchers can tap to dial or message in less than 2 seconds.
- **Deep Schema Integration**: Machine-readable JSON-LD structured data feeding Google accurate NAP details directly.
- **Local Social Proof**: Highlighting 5-star Google badges, before/after galleries, and verified client testimonials.
    `,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'David Kincaid',
    role: 'Owner & Founder',
    company: 'Kincaid Roofing & Solar',
    niche: 'Roofers & Solar Installation',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    location: 'Denver, Colorado',
    rating: 5,
    text: 'Abdul Suboor completely revamped our local search presence in our roofing and solar niche. Within 60 days of his $300 GBP optimization and citation strategy, we jumped from position #12 to #1 across the entire metropolitan area. Our phone rings with real quote requests every day!',
    result: '+420% Organic Inquiries',
    service: 'GBP Optimization & Local SEO',
    verified: true,
  },
  {
    id: 't2',
    name: 'Elena Rostova',
    role: 'Managing Partner',
    company: 'AquaPure Living & Environmental',
    niche: 'Environmental Consultancies',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    location: 'Miami, Florida',
    rating: 5,
    text: 'In the Environmental Consultancy niche, high-trust backlinks and domain authority make all the difference. Abdul built 200 DR 40+ dofollow backlinks that bumped our authority score by 22 points and ranked us on page 1 for corporate compliance keywords. Amazing work!',
    result: 'DR Lift +22 & Page 1 Rankings',
    service: 'DR & AS Backlink Service',
    verified: true,
  },
  {
    id: 't3',
    name: 'Brian Murphy',
    role: 'Master Plumber & Co-Founder',
    company: 'Murphy & Sons Plumbing',
    niche: 'Plumber & Emergency Services',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    location: 'Dallas, Texas',
    rating: 5,
    text: 'For emergency plumbing, if you are not in the Google 3-Pack you get zero calls. Abdul took over our GBP profile for $300 one-time plus $150/mo management. We went from 5 calls a week to 30+ weekly high-ticket emergency calls. Direct communication on WhatsApp is unmatched!',
    result: '#1 in Google 3-Pack for 16 Keywords',
    service: 'GBP Optimization & Monthly Handling',
    verified: true,
  },
  {
    id: 't4',
    name: 'Sarah Jenkins',
    role: 'Lead Designer & General Contractor',
    company: 'Jenkins Kitchen & Bath Studios',
    niche: 'Bathroom & Kitchen Remodeling',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    location: 'Atlanta, Georgia',
    rating: 5,
    text: 'We hired Abdul to build our $500 Micro Local Site and optimize our GBP for Bathroom & Kitchen Remodeling in Atlanta. He delivered in 8 days. Within 3 weeks we closed two full master-bathroom renovations ($24k each). The ROI is simply astronomical!',
    result: 'Closed $48,000 in Remodeling Jobs',
    service: 'Micro Local Site + GBP ($500)',
    verified: true,
  },
  {
    id: 't5',
    name: 'Dr. Arthur Mitchell',
    role: 'Clinical Director',
    company: 'Mitchell Family & Cosmetic Dental',
    niche: 'Dentist',
    avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=150&auto=format&fit=crop&q=80',
    location: 'Chicago, Illinois',
    rating: 5,
    text: 'Abdul’s understanding of dental local SEO is remarkable. He cleaned up our categories, eliminated spam competitors, and our dental clinic jumped to #1 for family and cosmetic dentistry in our neighborhood.',
    result: '+340% New Patient Bookings',
    service: 'Local SEO & GBP Optimization',
    verified: true,
  },
];

export const FAQS: FAQ[] = [
  {
    category: 'Pricing & Packages',
    question: 'How much does Google Business Profile (GBP) Optimization cost?',
    answer:
      'Abdul offers complete one-time Google Business Profile Optimization for just $300. If you want continuous monthly management, geo-grid monitoring, weekly posts, review strategy, and spam competitor removal, ongoing monthly handling is just $150/month.',
  },
  {
    category: 'Pricing & Packages',
    question: 'What are the pricing tiers for the DR & AS Backlink Service?',
    answer:
      'We offer 3 high-impact tiers: DR 20+ (100 dofollow comment links for $50), DR 40+ (200 dofollow comment links for $100), and DR 60+ (350 dofollow comment links for $300). All links are placed manually on clean, low-OBL pages with zero spam.',
  },
  {
    category: 'Custom Pricing',
    question: 'Can I get a custom pricing plan tailored to my business or multiple locations?',
    answer:
      'Yes! We offer flexible Custom Pricing for businesses with unique requirements, multiple branch locations, or agency white-label needs. You can message Abdul directly on WhatsApp (+92 336 5336008) to set up a personalized price package that fits your exact budget and goals.',
  },
  {
    category: 'Credentials & Verification',
    question: 'How can I verify Abdul Suboor’s iSkills certification?',
    answer:
      'Abdul Suboor is officially certified by iSkills LLC (USA) in SEO, Digital Marketing and AI Automations under the mentorship of M Tanveer Nandla. You can verify his certificate online anytime at https://app.iskills.com/certificate using Certificate ID: 726553 or via the QR code on the certificate.',
  },
  {
    category: 'Free Audit',
    question: 'What is included in the Free Quick SEO & GBP Audit (PDF)?',
    answer:
      'Abdul provides a 100% free, personalized Quick Audit Report (PDF) covering your Google Business Profile, local keyword rankings, competitor gaps, and site speed. If you agree with the findings and strategic plan, you can schedule an online meeting or finalize the deal directly via WhatsApp (+92 336 5336008) or Email.',
  },
  {
    category: 'Niches',
    question: 'Which specific industries and niches do you specialize in?',
    answer:
      'Abdul specializes in high-intent local service niches including Bathroom & Kitchen Remodeling, Solar Installation & Energy, Dentists & Dental Clinics, Plumbers, Roofers & Exterior Contractors, Environmental Consultancies, HVAC & Air Conditioning, and Home Service providers.',
  },
];
