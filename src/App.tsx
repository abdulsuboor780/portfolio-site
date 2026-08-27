import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { GeoGridSimulator } from './components/GeoGridSimulator';
import { RoiCalculator } from './components/RoiCalculator';
import { ServicesSection } from './components/ServicesSection';
import { NichesSection } from './components/NichesSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { CertificationPage } from './components/CertificationPage';
import { BlogSection } from './components/BlogSection';
import { BlogPostPage } from './components/BlogPostPage';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { AuditModal } from './components/AuditModal';
import { BLOG_POSTS } from './data/portfolioData';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [activePostSlug, setActivePostSlug] = useState<string | null>(null);
  const [isAuditModalOpen, setIsAuditModalOpen] = useState<boolean>(false);
  const [preselectedService, setPreselectedService] = useState<string>('');

  // Synchronize route from browser URL / Hash on initial load & popstate
  useEffect(() => {
    const parseUrlRoute = () => {
      const path = window.location.pathname.replace(/^\/+|\/+$/g, '');
      const hash = window.location.hash.replace(/^#\/?/, '');

      // Check if URL is for an individual blog post (e.g. /blog/how-to-rank-in-google-map-3-pack or #blog/slug or #blog-slug)
      if (path.startsWith('blog/')) {
        const slug = path.replace('blog/', '');
        if (BLOG_POSTS.some((p) => p.slug === slug)) {
          setActivePostSlug(slug);
          setActiveTab('blog');
          return;
        }
      }

      if (hash.startsWith('blog/') || hash.startsWith('blog-')) {
        const slug = hash.startsWith('blog/') ? hash.replace('blog/', '') : hash.replace('blog-', '');
        if (BLOG_POSTS.some((p) => p.slug === slug)) {
          setActivePostSlug(slug);
          setActiveTab('blog');
          return;
        }
      }

      // Check standard section tabs
      if (path === 'blog' || hash === 'blog') {
        setActivePostSlug(null);
        setActiveTab('blog');
      } else if (path === 'services' || hash === 'services') {
        setActivePostSlug(null);
        setActiveTab('services');
      } else if (path === 'case-studies' || hash === 'case-studies') {
        setActivePostSlug(null);
        setActiveTab('case-studies');
      } else if (path === 'certification' || hash === 'certification') {
        setActivePostSlug(null);
        setActiveTab('certification');
      } else if (path === 'contact' || hash === 'contact') {
        setActivePostSlug(null);
        setActiveTab('contact');
      } else if (!path && !hash) {
        setActivePostSlug(null);
        setActiveTab('home');
      }
    };

    parseUrlRoute();
    window.addEventListener('popstate', parseUrlRoute);
    window.addEventListener('hashchange', parseUrlRoute);

    return () => {
      window.removeEventListener('popstate', parseUrlRoute);
      window.removeEventListener('hashchange', parseUrlRoute);
    };
  }, []);

  // Handle opening a separate blog post with SEO URL
  const handleSelectPost = (slug: string) => {
    setActivePostSlug(slug);
    setActiveTab('blog');
    window.history.pushState(null, '', `/blog/${slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle navigating back to the main blog directory
  const handleNavigateBlogDirectory = () => {
    setActivePostSlug(null);
    setActiveTab('blog');
    window.history.pushState(null, '', '/blog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle tab switching from Header / Footer
  const handleTabChange = (tabId: string) => {
    setActivePostSlug(null);
    setActiveTab(tabId);
    
    if (tabId === 'home') {
      window.history.pushState(null, '', '/');
    } else {
      window.history.pushState(null, '', `/${tabId}`);
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle service selection from pricing cards to pre-fill in contact section
  const handleSelectService = (serviceName: string) => {
    setPreselectedService(serviceName);
    handleTabChange('contact');
  };

  const handleOpenAuditModal = () => {
    setIsAuditModalOpen(true);
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950 flex flex-col justify-between">
      
      {/* Sticky Modern Navbar */}
      <Header
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        onOpenAuditModal={handleOpenAuditModal}
      />

      {/* Main Content Area */}
      <main className="flex-grow w-full max-w-full overflow-x-hidden">
        
        {/* Dynamic Route Switching */}
        {activePostSlug ? (
          /* Separate Dedicated Blog Post Page View with SEO-Optimized URL */
          <BlogPostPage
            slug={activePostSlug}
            onNavigateHome={() => handleTabChange('home')}
            onNavigateBlog={handleNavigateBlogDirectory}
            onSelectPost={handleSelectPost}
            onOpenAudit={handleOpenAuditModal}
          />
        ) : activeTab === 'home' ? (
          <div className="space-y-12">
            <Hero
              onOpenAudit={handleOpenAuditModal}
              onNavigateServices={() => handleTabChange('services')}
              onNavigateCertification={() => handleTabChange('certification')}
            />

            {/* Specialized Niches Covered */}
            <NichesSection onOpenAudit={handleOpenAuditModal} />

            {/* Interactive Geo-Grid Ranking Visualizer */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <GeoGridSimulator />
            </section>

            {/* Services, GBP $300, Backlinks & Custom Pricing */}
            <ServicesSection
              onSelectService={handleSelectService}
              onOpenAudit={handleOpenAuditModal}
            />

            {/* Interactive ROI & Lead Revenue Calculator */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <RoiCalculator onOpenAudit={handleOpenAuditModal} />
            </section>

            {/* Real Case Studies & Before/After Proof */}
            <CaseStudiesSection onOpenAudit={handleOpenAuditModal} />

            {/* Blog & Thought Leadership Insights */}
            <BlogSection 
              onOpenAudit={handleOpenAuditModal} 
              onSelectPost={handleSelectPost}
            />

            {/* Direct Contact & WhatsApp Booking */}
            <ContactSection preselectedService={preselectedService} />
          </div>
        ) : activeTab === 'services' ? (
          <div className="pt-16">
            <ServicesSection
              onSelectService={handleSelectService}
              onOpenAudit={handleOpenAuditModal}
            />
            <NichesSection onOpenAudit={handleOpenAuditModal} />
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
              <RoiCalculator onOpenAudit={handleOpenAuditModal} />
            </section>
            <ContactSection preselectedService={preselectedService} />
          </div>
        ) : activeTab === 'case-studies' ? (
          <div className="pt-16">
            <CaseStudiesSection onOpenAudit={handleOpenAuditModal} />
            <NichesSection onOpenAudit={handleOpenAuditModal} />
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
              <GeoGridSimulator />
            </section>
            <ContactSection preselectedService={preselectedService} />
          </div>
        ) : activeTab === 'certification' ? (
          <div className="pt-8">
            <CertificationPage 
              onOpenAudit={handleOpenAuditModal} 
              onNavigateContact={() => {
                handleTabChange('contact');
              }}
            />
            <ContactSection preselectedService="iSkills Certified SEO Partnership" />
          </div>
        ) : activeTab === 'blog' ? (
          <div className="pt-16">
            <BlogSection 
              onOpenAudit={handleOpenAuditModal} 
              onSelectPost={handleSelectPost}
            />
            <ContactSection preselectedService={preselectedService} />
          </div>
        ) : activeTab === 'contact' ? (
          <div className="pt-20">
            <ContactSection preselectedService={preselectedService} />
          </div>
        ) : null}

      </main>

      {/* Footer */}
      <Footer
        onNavigate={(tab) => {
          handleTabChange(tab);
        }}
        onOpenAudit={handleOpenAuditModal}
      />

      {/* Floating Interactive WhatsApp Widget */}
      <WhatsAppWidget />

      {/* Free Quick SEO Audit (PDF) Modal */}
      <AuditModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
      />

    </div>
  );
}
