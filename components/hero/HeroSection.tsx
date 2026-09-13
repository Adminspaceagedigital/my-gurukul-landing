'use client';

import React from 'react';
import DesktopMockup from './DesktopMockup';
import MobileMockup from './MobileMockup';
import { ArrowRight, ShieldCheck, Sparkles, Building2, Users, CheckCircle2, ChevronRight, Check } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] pointer-events-none -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-[130px]" />
        <div className="absolute top-12 right-1/4 w-96 h-96 bg-sky-200/40 rounded-full blur-[130px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        {/* Simple Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200/80 shadow-xs backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-bold text-slate-800">
            Unified Institutional Platform
          </span>
        </div>

        {/* Clean, Strong Title */}
        <div className="max-w-4xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            One Sovereign Network for Your Entire{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-sky-600">
              Educational Trust
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Centralize multi-campus governance, build a flourishing alumni career network, and unlock automated Section 80G tax-exempt donations.
          </p>
        </div>

        {/* Clean CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <a
            href="#contact"
            className="w-full sm:w-auto text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
          >
            <span>Request Institutional Demo</span>
            <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="#features"
            className="w-full sm:w-auto text-xs sm:text-sm font-bold text-slate-700 hover:text-slate-900 bg-white border border-slate-200 hover:bg-slate-50 px-6 py-3.5 rounded-xl shadow-xs transition-all flex items-center justify-center gap-1.5"
          >
            <span>Explore Key Features</span>
            <ChevronRight size={15} className="text-slate-400" />
          </a>
        </div>

        {/* Clean 3 Key Value Points */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 pt-2 text-xs font-semibold text-slate-600">
          <span className="flex items-center gap-1.5 bg-white/80 border border-slate-200 px-3 py-1.5 rounded-xl shadow-xs">
            <Check size={14} className="text-emerald-600" />
            Runs on Your Own Domain (<span className="text-slate-900 font-bold">portal.yourtrust.edu</span>)
          </span>
          <span className="flex items-center gap-1.5 bg-white/80 border border-slate-200 px-3 py-1.5 rounded-xl shadow-xs">
            <Check size={14} className="text-emerald-600" />
            Automated Indian Section 80G Receipts
          </span>
          <span className="flex items-center gap-1.5 bg-white/80 border border-slate-200 px-3 py-1.5 rounded-xl shadow-xs">
            <Check size={14} className="text-emerald-600" />
            Live in Under 24 Hours
          </span>
        </div>

        {/* Dual Mockup Showcase Canvas */}
        <div className="pt-8 relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Desktop Mockup */}
            <div className="lg:col-span-8">
              <DesktopMockup />
            </div>

            {/* Mobile Mockup */}
            <div className="lg:col-span-4 flex justify-center">
              <MobileMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
