'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import HeroSection from '@/components/hero/HeroSection';
import MetricsStrip from '@/components/telemetry/MetricsStrip';
import FeatureTabs from '@/components/showcase/FeatureTabs';
import StakeholderCards from '@/components/stakeholders/StakeholderCards';
import ImpactCalculator from '@/components/calculator/ImpactCalculator';
import SecuritySection from '@/components/security/SecuritySection';
import FaqAccordion from '@/components/faq/FaqAccordion';
import BookingSection from '@/components/cta/BookingSection';
import Footer from '@/components/layout/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#f1f7fd] to-[#eaf2fb] text-slate-900 font-sans antialiased overflow-x-hidden">
      {/* 1. Sticky Glass Navigation */}
      <Header />

      <main>
        {/* 2. Flagship Hero Section with Dual-Device Mockup */}
        <HeroSection />

        {/* 3. Institutional Reliability & Telemetry Strip */}
        <MetricsStrip />

        {/* 4. Interactive 4-Pillar Showcase with Live UI Mockup Slots */}
        <FeatureTabs />

        {/* 5. Stakeholder Perspective Matrix (Trustees, Principals, Alumni) */}
        <StakeholderCards />

        {/* 6. Interactive Philanthropy & Endowment Estimator */}
        <ImpactCalculator />

        {/* 7. Enterprise Security, Privacy & Compliance */}
        <SecuritySection />

        {/* 8. Institutional FAQ */}
        <FaqAccordion />

        {/* 9. Closing Consultation Booking Form */}
        <BookingSection />
      </main>

      {/* 10. Institutional Enterprise Footer */}
      <Footer />
    </div>
  );
}
