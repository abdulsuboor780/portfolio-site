import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Tag, 
  Share2, 
  CheckCircle2, 
  Sparkles, 
  MessageCircle, 
  ChevronRight, 
  HelpCircle, 
  ArrowRight,
  BookOpen,
  Copy,
  ExternalLink,
  ShieldCheck,
  ChevronDown,
  Layers,
  MapPin,
  TrendingUp
} from 'lucide-react';
import { BlogPost } from '../types';
import { BLOG_POSTS, PERSONAL_INFO } from '../data/portfolioData';

interface BlogPostPageProps {
  slug: string;
  onNavigateHome: () => void;
  onNavigateBlog: () => void;
  onSelectPost: (slug: string) => void;
  onOpenAudit: () => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({
  slug,
  onNavigateHome,
  onNavigateBlog,
  onSelectPost,
  onOpenAudit,
}) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const post = BLOG_POSTS.find((p) => p.slug === slug) || BLOG_POSTS[0];

  // Find previous and next posts for seamless navigation
  const currentIndex = BLOG_POSTS.findIndex((p) => p.slug === post.slug);
  const prevPost = currentIndex > 0 ? BLOG_POSTS[currentIndex - 1] : null;
  const nextPost = currentIndex < BLOG_POSTS.length - 1 ? BLOG_POSTS[currentIndex + 1] : null;
  const relatedPosts = BLOG_POSTS.filter((p) => p.id !== post.id && p.category === post.category).slice(0, 2);
  const fallbackRelated = relatedPosts.length < 2 
    ? [...relatedPosts, ...BLOG_POSTS.filter((p) => p.id !== post.id && !relatedPosts.some(r => r.id === p.id)).slice(0, 2 - relatedPosts.length)]
    : relatedPosts;

  // SEO: Dynamically update document title, meta tags, and schema on post mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Update document title
    const originalTitle = document.title;
    document.title = `${post.metaTitle} | Abdul Suboor SEO`;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', post.metaDescription);

    // Injected Article Schema
    const scriptId = 'blog-article-jsonld';
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = scriptId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const articleSchema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      'headline': post.title,
      'name': post.title,
      'description': post.metaDescription,
      'image': [
        `${window.location.origin}${post.featuredImage}`,
        ...(post.contentImages?.map(img => `${window.location.origin}${img.url}`) || [])
      ],
      'datePublished': post.publishDate,
      'dateModified': post.publishDate,
      'author': {
        '@type': 'Person',
        'name': post.author.name,
        'jobTitle': post.author.role,
        'url': window.location.origin
      },
      'publisher': {
        '@type': 'Person',
        'name': PERSONAL_INFO.name,
        'url': window.location.origin
      },
      'keywords': post.seoKeywords.join(', '),
      'mainEntityOfPage': {
        '@type': 'WebPage',
        '@id': `${window.location.origin}/blog/${post.slug}`
      }
    };

    scriptTag.text = JSON.stringify(articleSchema);

    return () => {
      document.title = originalTitle;
      const scriptToRemove = document.getElementById(scriptId);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [post]);

  const handleShare = () => {
    const postUrl = `${window.location.origin}/blog/${post.slug}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(postUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const shareViaWhatsApp = () => {
    const postUrl = `${window.location.origin}/blog/${post.slug}`;
    const text = `Check out this Local SEO Blueprint by Abdul Suboor: "${post.title}" - ${postUrl}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  };

  const shareViaLinkedIn = () => {
    const postUrl = `${window.location.origin}/blog/${post.slug}`;
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(postUrl)}`, '_blank');
  };

  // Render markdown-like content blocks
  const renderContentBlocks = (content: string) => {
    const lines = content.trim().split('\n');
    return lines.map((line, idx) => {
      const trimmed = line.trim();
      
      if (!trimmed) {
        return <div key={idx} className="h-4" />;
      }
      
      if (trimmed.startsWith('## ')) {
        return (
          <h2 key={idx} className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white pt-8 pb-3 border-b border-slate-800 flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0"></span>
            <span>{trimmed.replace('## ', '')}</span>
          </h2>
        );
      }
      
      if (trimmed.startsWith('### ')) {
        return (
          <h3 key={idx} className="text-lg sm:text-xl font-bold text-emerald-300 pt-5 pb-2">
            {trimmed.replace('### ', '')}
          </h3>
        );
      }
      
      if (trimmed.startsWith('#### ')) {
        return (
          <h4 key={idx} className="text-base sm:text-lg font-bold text-teal-200 pt-4 pb-1">
            {trimmed.replace('#### ', '')}
          </h4>
        );
      }
      
      if (trimmed === '---') {
        return <hr key={idx} className="border-slate-800 my-8" />;
      }
      
      if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        const itemText = trimmed.replace(/^[-*]\s+/, '');
        return (
          <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm sm:text-base leading-relaxed pl-2 my-1">
            <span className="text-emerald-400 font-bold mt-1 text-sm shrink-0">◆</span>
            <span dangerouslySetInnerHTML={{
              __html: itemText
                .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-bold">$1</strong>')
                .replace(/\*(.*?)\*/g, '<em class="text-emerald-300 font-medium">$1</em>')
                .replace(/`([^`]+)`/g, '<code class="px-2 py-0.5 rounded bg-slate-800/90 text-emerald-300 font-mono text-xs border border-slate-700">$1</code>')
            }} />
          </li>
        );
      }
      
      if (/^\d+\.\s+/.test(trimmed)) {
        const num = trimmed.match(/^(\d+)\.\s+/)?.[1] || '1';
        const itemText = trimmed.replace(/^\d+\.\s+/, '');
        return (
          <div key={idx} className="flex items-start gap-3 text-slate-300 text-sm sm:text-base leading-relaxed pl-2 my-1.5">
            <span className="font-mono text-emerald-400 font-bold text-xs bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30 mt-0.5 shrink-0">{num}.</span>
            <span dangerouslySetInnerHTML={{
              __html: itemText
                .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-bold">$1</strong>')
                .replace(/\*(.*?)\*/g, '<em class="text-emerald-300 font-medium">$1</em>')
                .replace(/`([^`]+)`/g, '<code class="px-2 py-0.5 rounded bg-slate-800/90 text-emerald-300 font-mono text-xs border border-slate-700">$1</code>')
            }} />
          </div>
        );
      }

      return (
        <p key={idx} className="text-slate-300 text-sm sm:text-base leading-relaxed my-2" dangerouslySetInnerHTML={{
          __html: trimmed
            .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
            .replace(/\*(.*?)\*/g, '<em class="text-emerald-300">$1</em>')
            .replace(/`([^`]+)`/g, '<code class="px-2 py-0.5 rounded bg-slate-800/90 text-emerald-300 font-mono text-xs border border-slate-700">$1</code>')
        }} />
      );
    });
  };

  return (
    <article className="min-h-screen bg-slate-950 text-slate-100 pt-24 pb-20 selection:bg-emerald-500 selection:text-slate-950">
      
      {/* Top Breadcrumb Navigation & Back Links */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-slate-400 pb-4 border-b border-slate-800/80">
          <button 
            onClick={onNavigateHome}
            className="hover:text-emerald-400 transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span>Home</span>
          </button>
          <ChevronRight className="w-3 h-3 text-slate-600" />
          <button 
            onClick={onNavigateBlog}
            className="hover:text-emerald-400 transition-colors cursor-pointer"
          >
            <span>SEO Insights</span>
          </button>
          <ChevronRight className="w-3 h-3 text-slate-600" />
          <span className="text-emerald-400 font-medium truncate max-w-[280px] sm:max-w-md">
            {post.title}
          </span>
        </nav>
      </div>

      {/* Main Post Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Post Header */}
        <header className="space-y-5">
          <div className="flex flex-wrap items-center gap-2.5 text-xs">
            <span className="px-3 py-1 rounded-lg bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-bold uppercase tracking-wider text-[11px]">
              {post.category}
            </span>
            <span className="text-slate-400 font-mono flex items-center gap-1 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">
              <Calendar className="w-3.5 h-3.5 text-slate-500" />
              {post.publishDate}
            </span>
            <span className="text-slate-400 font-mono flex items-center gap-1 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">
              <Clock className="w-3.5 h-3.5 text-teal-400" />
              {post.readTime}
            </span>
            <span className="px-2.5 py-1 rounded bg-teal-950/60 text-teal-300 border border-teal-500/30 text-[11px] font-mono">
              Focus: {post.focusKeyword}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal border-l-2 border-emerald-500/60 pl-4 py-1">
            {post.excerpt}
          </p>

          {/* Author Card (Cleaned without iSkills text) & Sharing Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-b border-slate-800/80 py-4">
            
            {/* Author Profile */}
            <div className="flex items-center gap-3.5">
              <img
                src={post.author.avatar || '/images/abdulsuboor-hero.webp'}
                alt={post.author.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-emerald-500/40 shadow-md"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/abdulsuboor-hero.webp';
                }}
              />
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-white">{post.author.name}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-semibold border border-emerald-500/30">
                    Author
                  </span>
                </div>
                <p className="text-xs text-slate-400 font-medium">
                  {post.author.role}
                </p>
              </div>
            </div>

            {/* Social & Direct Sharing Tools */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                id="blog-share-copy-btn"
                className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
                title="Copy permanent SEO link"
              >
                {copiedLink ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Link Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>Copy URL</span>
                  </>
                )}
              </button>

              <button
                onClick={shareViaWhatsApp}
                className="px-3.5 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
                title="Share via WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </button>

              <button
                onClick={shareViaLinkedIn}
                className="px-3.5 py-2 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
                title="Share on LinkedIn"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </header>

        {/* Featured Image Canvas with Enhanced Retina Clarity & Fallback */}
        <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60 shadow-2xl relative">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-auto object-contain transition-all block"
            onError={(e) => {
              // Fallback to SVG if PNG fails
              const target = e.target as HTMLImageElement;
              if (target.src.endsWith('.png')) {
                target.src = target.src.replace('.png', '.svg');
              }
            }}
          />
        </div>

        {/* Key Executive Takeaways Summary Box */}
        {post.keyTakeaways && post.keyTakeaways.length > 0 && (
          <section className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/40 border border-emerald-500/30 space-y-4 shadow-xl">
            <div className="flex items-center gap-2.5 text-emerald-400 font-bold text-base">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Key Executive Takeaways</span>
            </div>
            <ul className="space-y-2.5 text-sm sm:text-base text-slate-300">
              {post.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-emerald-400 font-bold text-lg leading-none mt-0.5">•</span>
                  <span className="leading-relaxed">{takeaway}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Strategy & Workflow Inline Diagram Figures */}
        {post.contentImages && post.contentImages.length > 0 && (
          <section className="space-y-4 pt-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
              <Layers className="w-4 h-4 text-emerald-400" />
              <span>Architecture &amp; Strategy Diagrams</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {post.contentImages.map((img, idx) => (
                <div key={idx} className="rounded-xl overflow-hidden border border-slate-800 bg-slate-900/90 space-y-2.5 p-3 flex flex-col justify-between shadow-lg">
                  <img
                    src={img.url}
                    alt={img.alt}
                    className="w-full h-52 object-cover rounded-lg border border-slate-800"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (target.src.endsWith('.png')) {
                        target.src = target.src.replace('.png', '.svg');
                      }
                    }}
                  />
                  <p className="text-xs text-slate-400 leading-relaxed italic px-1">
                    {img.caption}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Main Article Prose Content */}
        <section className="prose prose-invert max-w-none space-y-4 text-slate-300 leading-relaxed pt-4 border-t border-slate-800/80">
          {renderContentBlocks(post.content)}
        </section>

        {/* Structured FAQ Accordion with Schema Support */}
        {post.faqSchema && post.faqSchema.length > 0 && (
          <section className="space-y-4 pt-8 border-t border-slate-800">
            <div className="flex items-center gap-2 text-white font-bold text-lg sm:text-xl">
              <HelpCircle className="w-5 h-5 text-emerald-400" />
              <span>Frequently Asked Questions</span>
            </div>
            
            <div className="space-y-3">
              {post.faqSchema.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-xl bg-slate-900/70 border border-slate-800 overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 text-sm sm:text-base font-bold text-white hover:text-emerald-400 transition-colors cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-emerald-400 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* SEO Keywords Tags Bar */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-slate-400 flex items-center gap-1 mr-2">
            <Tag className="w-3.5 h-3.5 text-teal-400" />
            <span>Indexed Topics:</span>
          </span>
          {post.seoKeywords.map((kw, idx) => (
            <span
              key={idx}
              className="text-xs px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 border border-slate-800 font-mono"
            >
              #{kw}
            </span>
          ))}
        </div>

        {/* In-Article Action Banner / Consultation CTA */}
        <section className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-950/60 via-slate-900 to-teal-950/60 border border-emerald-500/40 space-y-4 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider">
                Need Help Executing This?
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Get a Customized Local SEO Strategy for Your Business
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Connect directly with Abdul Suboor to audit your Google Business Profile, identify proximate ranking barriers, and deploy this blueprint for your market.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <button
                onClick={onOpenAudit}
                className="px-5 py-3 rounded-xl font-extrabold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 transition-all shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Free SEO Audit PDF</span>
              </button>

              <a
                href={`https://wa.me/923365336008?text=${encodeURIComponent(`Hi Abdul, I just read your article "${post.title}" and want to discuss implementing this for my business.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-slate-900 hover:bg-slate-800 border border-emerald-500/30 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Abdul</span>
              </a>
            </div>
          </div>
        </section>

        {/* Previous & Next Post Navigation */}
        <nav aria-label="Article pagination" className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-slate-800">
          {prevPost ? (
            <button
              onClick={() => onSelectPost(prevPost.slug)}
              className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 text-left space-y-1 transition-all group cursor-pointer"
            >
              <div className="flex items-center gap-1 text-[11px] font-bold text-slate-400 group-hover:text-emerald-400">
                <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                <span>Previous Blueprint</span>
              </div>
              <p className="text-xs sm:text-sm font-bold text-white group-hover:text-emerald-300 line-clamp-1">
                {prevPost.title}
              </p>
            </button>
          ) : (
            <div />
          )}

          {nextPost ? (
            <button
              onClick={() => onSelectPost(nextPost.slug)}
              className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 text-right space-y-1 transition-all group cursor-pointer sm:col-start-2"
            >
              <div className="flex items-center justify-end gap-1 text-[11px] font-bold text-slate-400 group-hover:text-emerald-400">
                <span>Next Blueprint</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
              <p className="text-xs sm:text-sm font-bold text-white group-hover:text-emerald-300 line-clamp-1">
                {nextPost.title}
              </p>
            </button>
          ) : (
            <div />
          )}
        </nav>

        {/* Related Articles Section */}
        <section className="space-y-4 pt-10 border-t border-slate-800">
          <div className="flex items-center justify-between">
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-emerald-400" />
              <span>Related SEO Blueprints</span>
            </h3>
            <button
              onClick={onNavigateBlog}
              className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 cursor-pointer"
            >
              <span>View All 6 Guides</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {fallbackRelated.map((rel) => (
              <div
                key={rel.id}
                onClick={() => onSelectPost(rel.slug)}
                className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-emerald-500/50 transition-all cursor-pointer group flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span className="text-emerald-400 font-bold">{rel.category}</span>
                    <span>{rel.readTime}</span>
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-emerald-400 transition-colors line-clamp-2">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {rel.excerpt}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-xs font-bold text-emerald-400 group-hover:text-emerald-300 pt-2 border-t border-slate-800/80">
                  <span>Read Guide</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </article>
  );
};
