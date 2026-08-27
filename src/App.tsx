import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { GeoGridSimulator } from './components/GeoGridSimulator';
import { RoiCalculator } from './components/RoiCalculator';
import { ServicesSection } from './components/ServicesSection';
import { ServiceDetailPage } from './components/ServiceDetailPage';
import { PricingPage } from './components/PricingPage';
import { NichesSection } from './components/NichesSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { CertificationPage } from './components/CertificationPage';
import { BlogSection } from './components/BlogSection';
import { BlogPostPage } from './components/BlogPostPage';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { AuditModal } from './components/AuditModal';
import { BLOG_POSTS, PERSONAL_INFO } from './data/portfolioData';
import { DETAILED_SERVICES } from './data/servicesDetailedData';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [activePostSlug, setActivePostSlug] = useState<string | null>(null);
  const [activeServiceSlug, setActiveServiceSlug] = useState<string | null>(null);
  const [isAuditModalOpen, setIsAuditModalOpen] = useState<boolean>(false);
  const [preselectedService, setPreselectedService] = useState<string>('');

  // Synchronize route from browser URL / Hash on initial load & popstate
  useEffect(() => {
    const parseUrlRoute = () => {
      const path = window.location.pathname.replace(/^\/+|\/+$/g, '');
      const hash = window.location.hash.replace(/^#\/?/, '');

      // 1. Check for individual dedicated Service page (e.g. /services/micro-local-site-gbp or #services/micro-local-site-gbp)
      if (path.startsWith('services/')) {
        const sSlug = path.replace('services/', '');
        if (DETAILED_SERVICES[sSlug]) {
          setActiveServiceSlug(sSlug);
          setActivePostSlug(null);
          setActiveTab('services');
          return;
        }
      }
      if (hash.startsWith('services/') || hash.startsWith('service-')) {
        const sSlug = hash.startsWith('services/') ? hash.replace('services/', '') : hash.replace('service-', '');
        if (DETAILED_SERVICES[sSlug]) {
          setActiveServiceSlug(sSlug);
          setActivePostSlug(null);
          setActiveTab('services');
          return;
        }
      }

      // 2. Check for individual blog post (e.g. /blog/how-to-rank-in-google-map-3-pack or #blog/slug)
      if (path.startsWith('blog/')) {
        const bSlug = path.replace('blog/', '');
        if (BLOG_POSTS.some((p) => p.slug === bSlug)) {
          setActivePostSlug(bSlug);
          setActiveServiceSlug(null);
          setActiveTab('blog');
          return;
        }
      }
      if (hash.startsWith('blog/') || hash.startsWith('blog-')) {
        const bSlug = hash.startsWith('blog/') ? hash.replace('blog/', '') : hash.replace('blog-', '');
        if (BLOG_POSTS.some((p) => p.slug === bSlug)) {
          setActivePostSlug(bSlug);
          setActiveServiceSlug(null);
          setActiveTab('blog');
          return;
        }
      }

      // 3. Check for dedicated Pricing page (/pricing or #pricing)
      if (path === 'pricing' || hash === 'pricing') {
        setActivePostSlug(null);
        setActiveServiceSlug(null);
        setActiveTab('pricing');
        return;
      }

      // 4. Check standard section tabs
      if (path === 'services' || hash === 'services') {
        setActivePostSlug(null);
        setActiveServiceSlug(null);
        setActiveTab('services');
      } else if (path === 'blog' || hash === 'blog') {
        setActivePostSlug(null);
        setActiveServiceSlug(null);
        setActiveTab('blog');
      } else if (path === 'case-studies' || hash === 'case-studies') {
        setActivePostSlug(null);
        setActiveServiceSlug(null);
        setActiveTab('case-studies');
      } else if (path === 'certification' || hash === 'certification') {
        setActivePostSlug(null);
        setActiveServiceSlug(null);
        setActiveTab('certification');
      } else if (path === 'contact' || hash === 'contact') {
        setActivePostSlug(null);
        setActiveServiceSlug(null);
        setActiveTab('contact');
      } else if (!path && !hash) {
        setActivePostSlug(null);
        setActiveServiceSlug(null);
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

  // Update Page Title and Meta for main sections when not on detailed post/service
  useEffect(() => {
    if (activeServiceSlug || activePostSlug) return; // Managed by their respective components

    let title = `${PERSONAL_INFO.name} | ${PERSONAL_INFO.title}`;
    let description = PERSONAL_INFO.tagline;
    let canonical = 'https://abdulsuboor.com';

    if (activeTab === 'services') {
      title = 'Local SEO, Web Development & GBP Optimization Services | Abdul Suboor';
      description = 'Explore turnkey micro local websites ($500), GBP 3-Pack optimization, Cloudstack backlinks ($1.50/link), and high-speed web development.';
      canonical = 'https://abdulsuboor.com/services';
    } else if (activeTab === 'pricing') {
      title = 'Transparent Local SEO & Web Development Pricing (2026) | Abdul Suboor';
      description = 'Flat transparent pricing for Turnkey Micro Local Sites ($500), GBP 3-Pack Optimization ($300), Cloudstack Backlinks ($1.50/link), and Custom Development.';
      canonical = 'https://abdulsuboor.com/pricing';
    } else if (activeTab === 'case-studies') {
      title = 'Local SEO Case Studies & Proven 3-Pack Rankings | Abdul Suboor';
      description = 'See real client proof and before/after rankings for kitchen remodelers, emergency plumbers, dental clinics, and roofers.';
      canonical = 'https://abdulsuboor.com/case-studies';
    } else if (activeTab === 'certification') {
      title = 'iSkills Certified SEO Specialist (ID: 726553) | Abdul Suboor';
      description = 'Verified iSkills Batch 13 Graduate certification credentials, technical curriculum, and verified authority standards.';
      canonical = 'https://abdulsuboor.com/certification';
    } else if (activeTab === 'blog') {
      title = 'Local SEO & Digital Marketing Blog | Abdul Suboor';
      description = 'Actionable blueprints on Google Maps 3-Pack rankings, GBP optimization, cloud stacking, schema markup, and technical SEO audits.';
      canonical = 'https://abdulsuboor.com/blog';
    } else if (activeTab === 'contact') {
      title = 'Contact Abdul Suboor | SEO Specialist & Web Developer';
      description = 'Get in touch for a free 2026 local SEO audit, project inquiry, or direct WhatsApp consultation.';
      canonical = 'https://abdulsuboor.com/contact';
    }

    document.title = title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonical);
  }, [activeTab, activeServiceSlug, activePostSlug]);

  // Handle opening a separate blog post with SEO URL
  const handleSelectPost = (slug: string) => {
    setActivePostSlug(slug);
    setActiveServiceSlug(null);
    setActiveTab('blog');
    window.history.pushState(null, '', `/blog/${slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle navigating back to the main blog directory
  const handleNavigateBlogDirectory = () => {
    setActivePostSlug(null);
    setActiveServiceSlug(null);
    setActiveTab('blog');
    window.history.pushState(null, '', '/blog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle navigating to an individual dedicated service page
  const handleSelectServiceSlug = (slug: string) => {
    setActiveServiceSlug(slug);
    setActivePostSlug(null);
    setActiveTab('services');
    window.history.pushState(null, '', `/services/${slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle navigating back to the main Services Overview page
  const handleNavigateServicesOverview = () => {
    setActiveServiceSlug(null);
    setActivePostSlug(null);
    setActiveTab('services');
    window.history.pushState(null, '', '/services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle navigating to the dedicated Pricing page
  const handleNavigatePricing = () => {
    setActiveServiceSlug(null);
    setActivePostSlug(null);
    setActiveTab('pricing');
    window.history.pushState(null, '', '/pricing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle tab switching from Header / Footer
  const handleTabChange = (tabId: string) => {
    setActivePostSlug(null);
    setActiveServiceSlug(null);
    setActiveTab(tabId);
    
    if (tabId === 'home') {
      window.history.pushState(null, '', '/');
    } else {
      window.history.pushState(null, '', `/${tabId}`);
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle service selection to pre-fill contact form
  const handleSelectService = (serviceName: string) => {
    setPreselectedService(serviceName);
    handleTabChange('contact');
  };

  const handleOpenAuditModal = () => {
    setIsAuditModalOpen(true);
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950 flex flex-col justify-between">
      
      {/* Sticky Navbar with Services Dropdown and Pricing */}
      <Header
        activeTab={activeTab}
        activeServiceSlug={activeServiceSlug}
        setActiveTab={handleTabChange}
        onSelectServiceSlug={handleSelectServiceSlug}
        onOpenAuditModal={handleOpenAuditModal}
      />

      {/* Main Content Area */}
      <main className="flex-grow w-full max-w-full overflow-x-hidden">
        
        {/* Dynamic Route Switching */}
        {activeServiceSlug ? (
          /* ========================================================================= */
          /* Dedicated Individual Service Page (e.g. /services/:serviceSlug) */
          /* ========================================================================= */
          <ServiceDetailPage
            slug={activeServiceSlug}
            onNavigateHome={() => handleTabChange('home')}
            onNavigateServices={handleNavigateServicesOverview}
            onNavigatePricing={handleNavigatePricing}
            onSelectService={handleSelectService}
            onSelectOtherService={handleSelectServiceSlug}
            onSelectPost={handleSelectPost}
            onOpenAudit={handleOpenAuditModal}
          />
        ) : activePostSlug ? (
          /* ========================================================================= */
          /* Dedicated Individual Blog Post Page (e.g. /blog/:slug) */
          /* ========================================================================= */
          <BlogPostPage
            slug={activePostSlug}
            onNavigateHome={() => handleTabChange('home')}
            onNavigateBlog={handleNavigateBlogDirectory}
            onSelectPost={handleSelectPost}
            onOpenAudit={handleOpenAuditModal}
          />
        ) : activeTab === 'pricing' ? (
          /* ========================================================================= */
          /* Dedicated Pricing Page (/pricing) */
          /* ========================================================================= */
          <PricingPage
            onNavigateHome={() => handleTabChange('home')}
            onNavigateServices={handleNavigateServicesOverview}
            onSelectServiceSlug={handleSelectServiceSlug}
            onSelectServiceForContact={handleSelectService}
            onOpenAudit={handleOpenAuditModal}
          />
        ) : activeTab === 'home' ? (
          /* ========================================================================= */
          /* Home Page */
          /* ========================================================================= */
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

            {/* Services Overview & Systems */}
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
          /* ========================================================================= */
          /* Existing Services Overview Page (Preserved Exactly As It Is) */
          /* ========================================================================= */
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
          /* ========================================================================= */
          /* Case Studies Page */
          /* ========================================================================= */
          <div className="pt-16">
            <CaseStudiesSection onOpenAudit={handleOpenAuditModal} />
            <NichesSection onOpenAudit={handleOpenAuditModal} />
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
              <GeoGridSimulator />
            </section>
            <ContactSection preselectedService={preselectedService} />
          </div>
        ) : activeTab === 'certification' ? (
          /* ========================================================================= */
          /* Certification Page */
          /* ========================================================================= */
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
          /* ========================================================================= */
          /* Blog Directory Page */
          /* ========================================================================= */
          <div className="pt-16">
            <BlogSection 
              onOpenAudit={handleOpenAuditModal} 
              onSelectPost={handleSelectPost}
            />
            <ContactSection preselectedService={preselectedService} />
          </div>
        ) : activeTab === 'contact' ? (
          /* ========================================================================= */
          /* Contact Page */
          /* ========================================================================= */
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
        onNavigateServiceSlug={(slug) => {
          handleSelectServiceSlug(slug);
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
