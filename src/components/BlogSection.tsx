import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  Clock, 
  Calendar, 
  ArrowRight, 
  Tag, 
  X, 
  MessageCircle, 
  Sparkles, 
  Share2, 
  CheckCircle2 
} from 'lucide-react';
import { BLOG_POSTS, PERSONAL_INFO } from '../data/portfolioData';
import { BlogPost } from '../types';

interface BlogSectionProps {
  onOpenAudit: () => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onOpenAudit }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

  const categories = ['all', 'Local SEO', 'GBP Optimization', 'Off-Page SEO', 'Conversion Strategy'];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="blog" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Search Engine Knowledge & Case Insights</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            SEO & Local Domination <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Insights</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300">
            Actionable strategies, algorithm breakdown guides, and conversion blueprints written by Abdul Suboor to help small businesses scale their search traffic.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-5xl mx-auto">
          {/* Category Chips */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold capitalize transition-all ${
                  selectedCategory === cat
                    ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat === 'all' ? 'All Articles' : cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search guides, GBP, links..."
              className="w-full bg-slate-900/80 text-xs text-white placeholder-slate-500 pl-10 pr-4 py-2.5 rounded-xl border border-slate-800 focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => setActiveArticle(post)}
              className="bg-slate-900/70 border border-slate-800 hover:border-emerald-500/40 rounded-3xl p-6 sm:p-7 flex flex-col justify-between space-y-6 transition-all hover:shadow-xl hover:shadow-emerald-950/20 group cursor-pointer"
            >
              <div className="space-y-4">
                {/* Meta */}
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-2 text-slate-400 text-[11px] font-mono">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-500" />
                      {post.readTime}
                    </span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-400 transition-colors leading-snug">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-[10px] px-2 py-0.5 rounded-md bg-slate-950 text-slate-400 border border-slate-800">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Read More Link */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold text-emerald-400 group-hover:text-emerald-300">
                <span>Read Full Blueprint</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12 text-slate-400 text-sm">
            No articles found matching "{searchQuery}". Try searching for "GBP", "Local", or "Backlinks".
          </div>
        )}

      </div>

      {/* Full Article Reading Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 shadow-2xl space-y-6 relative my-auto">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Article Header */}
            <div className="space-y-3 pr-8">
              <div className="flex items-center gap-2 text-xs">
                <span className="px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-semibold">
                  {activeArticle.category}
                </span>
                <span className="text-slate-400 font-mono text-[11px]">{activeArticle.date}</span>
                <span className="text-slate-400 font-mono text-[11px]">• {activeArticle.readTime}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                {activeArticle.title}
              </h2>

              <div className="flex items-center gap-2 pt-1 text-xs text-slate-400">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-[10px]">
                  AS
                </div>
                <span>Written by <strong className="text-white">{PERSONAL_INFO.name}</strong> (iSkills Certified)</span>
              </div>
            </div>

            {/* Content Body */}
            <div className="border-t border-b border-slate-800 py-6 text-slate-200 text-sm sm:text-base leading-relaxed space-y-4 whitespace-pre-line font-sans">
              {activeArticle.content}
            </div>

            {/* Bottom Callout */}
            <div className="bg-slate-950 p-5 rounded-2xl border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="text-sm font-bold text-white">Want Abdul to execute this strategy for your business?</h4>
                <p className="text-xs text-slate-400">Get a tailored plan and ranking roadmap within 24 hours.</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={`https://wa.me/923365336008?text=${encodeURIComponent(`Hi Abdul, I read your article "${activeArticle.title}" and want to discuss this for my business.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-400 text-slate-950 hover:bg-emerald-300 transition-all flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Discuss on WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
