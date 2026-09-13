'use client';

import React from 'react';
import DesktopMockup from './DesktopMockup';
import MobileMockup from './MobileMockup';
import { ArrowUpRight, Check, ShieldCheck, Sparkles, Building2, ChevronRight, Activity } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden awwwards-grid">
      {/* Ambient gradient spotlight */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[450px] pointer-events-none -z-10">
        <div className="absolute top-0 left-1/3 w-[500px] h-[350px] bg-blue-200/25 rounded-full blur-[140px]" />
        <div className="absolute top-12 right-1/4 w-[400px] h-[300px] bg-sky-200/35 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
        {/* Micro Category Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 shadow-xs backdrop-blur-md">
          <span className="text-[10px] font-mono font-bold text-blue-700 uppercase tracking-[0.2em]">
            01 // SOVEREIGN INSTITUTIONAL PLATFORM
          </span>
        </div>

        {/* Master Editorial Headline */}
        <div className="max-w-4xl mx-auto space-y-5">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-[-0.035em] leading-[1.08]">
            One Sovereign Network for Your Entire{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-sky-600">
              Educational Trust.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Centralize multi-campus governance, empower school officers, and build a flourishing, self-funding alumni community under your official domain.
          </p>
        </div>

        {/* Action Button Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <a
            href="#contact"
            className="w-full sm:w-auto text-xs sm:text-sm font-bold text-white bg-[#0A1931] hover:bg-blue-700 px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
          >
            <span>Request Institutional Demo</span>
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#about"
            className="w-full sm:w-auto text-xs sm:text-sm font-bold text-slate-700 hover:text-slate-900 bg-white border border-slate-200 hover:bg-slate-50 px-6 py-3.5 rounded-xl shadow-xs transition-all flex items-center justify-center gap-2"
          >
            <span>Explore 3-Tier Architecture</span>
            <ChevronRight size={16} className="text-slate-400" />
          </a>
        </div>

        {/* 3 Editorial Value Anchors */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs font-semibold text-slate-600">
          <div className="flex items-center gap-2 bg-white/80 border border-slate-200 px-3.5 py-1.5 rounded-xl shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>Dedicated Domain (<strong className="text-slate-900 font-bold">portal.yourtrust.edu</strong>)</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 border border-slate-200 px-3.5 py-1.5 rounded-xl shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span>Automated Indian Section 80G Receipts</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 border border-slate-200 px-3.5 py-1.5 rounded-xl shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
            <span>24-Hour Zero-Downtime Launch</span>
          </div>
        </div>

        {/* Dual-Device Showcase Grid */}
        <div className="pt-8 relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Desktop Mockup (Super Admin Cockpit) */}
            <div className="lg:col-span-8">
              <DesktopMockup imageSrc="/screenshots/superadmin/superadmin-dashboard.png" />
            </div>

            {/* Mobile Mockup (Alumni Mobile Feed) */}
            <div className="lg:col-span-4 flex justify-center">
              <MobileMockup imageSrc="/screenshots/alumni/alumni-dashboard-1.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
