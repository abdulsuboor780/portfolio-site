import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  Clock, 
  Calendar, 
  ArrowRight, 
  Tag, 
  Sparkles, 
  CheckCircle2,
  Image as ImageIcon,
  Layers,
  FileCode,
  ShieldCheck,
  ChevronRight,
  TrendingUp,
  MapPin
} from 'lucide-react';
import { BLOG_POSTS, BLOG_CATEGORIES, PERSONAL_INFO } from '../data/portfolioData';
import { BlogPost } from '../types';

interface BlogSectionProps {
  onOpenAudit: () => void;
  onSelectPost?: (slug: string) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ 
  onOpenAudit, 
  onSelectPost 
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Articles');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === 'All Articles' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.focusKeyword.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.seoKeywords.some((k) => k.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handlePostClick = (slug: string) => {
    if (onSelectPost) {
      onSelectPost(slug);
    } else {
      // Fallback update URL
      window.history.pushState(null, '', `/blog/${slug}`);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  return (
    <section id="blog-section" className="py-16 sm:py-24 bg-slate-950 text-slate-100 relative">
      
      {/* Background ambient accents */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>SEO Knowledge Hub &amp; Blueprints</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Proven Systems for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Local &amp; Technical SEO</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            In-depth guides, ranking methodologies, and technical frameworks developed by Abdul Suboor to dominate local search, optimize Google Business Profiles, and scale organic pipeline revenue.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="space-y-4 max-w-4xl mx-auto">
          
          {/* Search Input Bar */}
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic, focus keyword (e.g., 'Google 3-pack', 'NAP citations', 'Cloud Stacking')..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Pills Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-800">
            {BLOG_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 shadow-md shadow-emerald-500/20'
                    : 'bg-slate-900/60 text-slate-300 border border-slate-800 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Blog Post Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => handlePostClick(post.slug)}
              id={`blog-card-${post.slug}`}
              className="bg-slate-900/70 border border-slate-800/90 hover:border-emerald-500/60 rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-500/10 flex flex-col justify-between group cursor-pointer"
            >
              
              {/* Card Image Cover with Fallback */}
              <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-950">
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src.endsWith('.png')) {
                      target.src = target.src.replace('.png', '.svg');
                    }
                  }}
                />
                
                {/* Category Badge overlay */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-slate-950/85 backdrop-blur-md text-emerald-400 border border-emerald-500/40 shadow-sm">
                    {post.category}
                  </span>
                </div>

                {/* Read time and date badge */}
                <div className="absolute bottom-3 right-3 flex items-center gap-2 text-[11px] text-slate-300 font-mono">
                  <span className="bg-slate-950/80 backdrop-blur-md px-2 py-0.5 rounded border border-slate-800 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-emerald-400" />
                    {post.readTime}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <span className="text-[11px] text-slate-400 font-mono block">
                    {post.publishDate}
                  </span>
                  
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-400 transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                {/* Focus Keyword Pill & Action CTA */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-mono">
                    <Tag className="w-3 h-3 text-teal-400" />
                    <span className="truncate max-w-[150px]">{post.focusKeyword}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-bold text-emerald-400 group-hover:text-emerald-300">
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty Search Feedback */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16 bg-slate-900/40 rounded-3xl border border-slate-800 max-w-xl mx-auto space-y-3">
            <p className="text-slate-300 text-sm font-semibold">
              No blueprints found matching "{searchQuery}" in "{selectedCategory}".
            </p>
            <button
              onClick={() => { setSelectedCategory('All Articles'); setSearchQuery(''); }}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-400 text-slate-950 hover:bg-emerald-300 transition-colors cursor-pointer"
            >
              Reset Filters &amp; View All 6 Blueprints
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
