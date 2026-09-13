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
      {/* 1. Sticky Glass Navigation (Home, Features, Onboard, Documentation, Contact Us) */}
      <Header />

      <main>
        {/* 2. Flagship Hero Section (id="home") with Dual-Device Mockup */}
        <section id="home">
          <HeroSection />
        </section>

        {/* 3. Institutional Reliability & Telemetry Strip */}
        <MetricsStrip />

        {/* 4. Interactive 4-Pillar Showcase (id="features") with Live UI Mockup Slots */}
        <section id="features">
          <FeatureTabs />
        </section>

        {/* 5. Stakeholder Onboarding Perspective Matrix (id="onboard") */}
        <section id="onboard">
          <StakeholderCards />
          <ImpactCalculator />
        </section>

        {/* 6. Technical Architecture, Security & FAQs (id="documentation") */}
        <section id="documentation">
          <SecuritySection />
          <FaqAccordion />
        </section>

        {/* 7. Closing Consultation Booking Form (id="contact") */}
        <section id="contact">
          <BookingSection />
        </section>
      </main>

      {/* 8. Institutional Enterprise Footer */}
      <Footer />
    </div>
  );
}
