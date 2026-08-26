export interface ServicePricingOption {
  tier: string;
  links?: string;
  price: string;
  drTarget?: string;
  features: string[];
  popular?: boolean;
}

export interface ServicePackage {
  id: string;
  name: string;
  badge?: string;
  popular?: boolean;
  isMain?: boolean;
  price: string;
  period: string;
  tagline: string;
  description: string;
  highlights: string[];
  deliverables: string[];
  idealFor: string;
  turnaround: string;
  techStack?: string[];
  customPricingNote?: string;
  unitPrice?: number;
  unitLabel?: string;
  maxUnits?: number;
  pricingOptions?: ServicePricingOption[];
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  niche: string;
  location: string;
  duration: string;
  summary: string;
  beforeMetrics: {
    rank: string;
    traffic: string;
    calls: string;
  };
  afterMetrics: {
    rank: string;
    traffic: string;
    calls: string;
  };
  growthPercentage: string;
  strategy: string[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
    rating: number;
  };
  keywordsRanked: { keyword: string; before: string; after: string }[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: 'Local SEO' | 'GBP Optimization' | 'Off-Page SEO' | 'Technical SEO' | 'Conversion Strategy';
  readTime: string;
  date: string;
  coverImage?: string;
  content: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  niche: string;
  avatar: string;
  location: string;
  rating: number;
  text: string;
  result: string;
  service: string;
  verified: boolean;
}

export interface NicheInfo {
  id: string;
  name: string;
  icon: string;
  typicalKeywords: string[];
  expectedImpact: string;
  turnaround: string;
  strategyFocus: string;
}

export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

