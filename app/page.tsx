'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import HeroSection from '@/components/hero/HeroSection';
import MetricsStrip from '@/components/telemetry/MetricsStrip';
import AboutSuite from '@/components/about/AboutSuite';
import FeatureTabs from '@/components/showcase/FeatureTabs';
import StakeholderCards from '@/components/stakeholders/StakeholderCards';
import ImpactCalculator from '@/components/calculator/ImpactCalculator';
import SecuritySection from '@/components/security/SecuritySection';
import FaqAccordion from '@/components/faq/FaqAccordion';
import BookingSection from '@/components/cta/BookingSection';
import Footer from '@/components/layout/Footer';
import { LightboxProvider } from '@/components/ui/LightboxProvider';

export default function LandingPage() {
  return (
    <LightboxProvider>
      <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#f1f7fd] to-[#eaf2fb] text-slate-900 font-sans antialiased overflow-x-hidden">
        {/* 1. Sticky Glass Navigation */}
        <Header />

      <main>
        {/* 2. Flagship Hero Section (#home) */}
        <section id="home">
          <HeroSection />
        </section>

        {/* 3. Reliability & Telemetry Strip */}
        <MetricsStrip />

        {/* 4. Who We Are, What We Do (3-Tiers) & Why We Are Unique */}
        <AboutSuite />

        {/* 5. Core Capabilities & Breakthroughs (#features) */}
        <section id="features">
          <FeatureTabs />
        </section>

        {/* 6. Stakeholder Onboarding Perspective Matrix (#onboard) */}
        <section id="onboard">
          <StakeholderCards />
          <ImpactCalculator />
        </section>

        {/* 7. Enterprise Security, Privacy & Compliance (#documentation) */}
        <section id="documentation">
          <SecuritySection />
          <FaqAccordion />
        </section>

        {/* 8. Institutional Demo Consultation Booking (#contact) */}
        <section id="contact">
          <BookingSection />
        </section>
      </main>

      {/* 9. Enterprise Institutional Footer */}
      <Footer />
    </div>
    </LightboxProvider>
  );
}
