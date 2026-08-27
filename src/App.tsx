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
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { AuditModal } from './components/AuditModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isAuditModalOpen, setIsAuditModalOpen] = useState<boolean>(false);
  const [preselectedService, setPreselectedService] = useState<string>('');

  // Handle service selection from pricing cards to pre-fill in contact section
  const handleSelectService = (serviceName: string) => {
    setPreselectedService(serviceName);
    setActiveTab('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenAuditModal = () => {
    setIsAuditModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950 flex flex-col justify-between">
      
      {/* Sticky Modern Navbar */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenAuditModal={handleOpenAuditModal}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        
        {/* Dynamic Route Switching */}
        {activeTab === 'home' && (
          <div className="space-y-12">
            <Hero
              onOpenAudit={handleOpenAuditModal}
              onNavigateServices={() => setActiveTab('services')}
              onNavigateCertification={() => setActiveTab('certification')}
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
            <BlogSection onOpenAudit={handleOpenAuditModal} />

            {/* Direct Contact & WhatsApp Booking */}
            <ContactSection preselectedService={preselectedService} />
          </div>
        )}

        {activeTab === 'services' && (
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
        )}

        {activeTab === 'case-studies' && (
          <div className="pt-16">
            <CaseStudiesSection onOpenAudit={handleOpenAuditModal} />
            <NichesSection onOpenAudit={handleOpenAuditModal} />
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
              <GeoGridSimulator />
            </section>
            <ContactSection preselectedService={preselectedService} />
          </div>
        )}

        {activeTab === 'certification' && (
          <div className="pt-8">
            <CertificationPage 
              onOpenAudit={handleOpenAuditModal} 
              onNavigateContact={() => {
                setActiveTab('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
            <ContactSection preselectedService="iSkills Certified SEO Partnership" />
          </div>
        )}

        {activeTab === 'blog' && (
          <div className="pt-16">
            <BlogSection onOpenAudit={handleOpenAuditModal} />
            <ContactSection preselectedService={preselectedService} />
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="pt-20">
            <ContactSection preselectedService={preselectedService} />
          </div>
        )}

      </main>

      {/* Footer */}
      <Footer
        onNavigate={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
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

