'use client';

import React from 'react';
import DesktopMockup from './DesktopMockup';
import MobileMockup from './MobileMockup';
import { ArrowRight, ShieldCheck, Sparkles, Building2, Users, CheckCircle2, ChevronRight, Activity } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-300/30 rounded-full blur-[120px]" />
        <div className="absolute top-12 right-1/4 w-96 h-96 bg-sky-200/40 rounded-full blur-[120px]" />
        <div className="absolute top-36 left-1/2 -translate-x-1/2 w-80 h-80 bg-emerald-200/25 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 shadow-xs backdrop-blur-md">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-xs font-bold text-slate-800">
            The Premier Digital Platform for Educational Trusts & Universities
          </span>
        </div>

        {/* Master Headline */}
        <div className="max-w-4xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Unify Your Educational Network with a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-sky-600">
              Sovereign Command Center
            </span>{' '}
            & Global Alumni Hub.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Eliminate fragmented spreadsheets and lost graduate connections. Bring all your campuses, sub-admin officers, and alumni communities under your own trusted domain name.
          </p>
        </div>

        {/* Primary CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <a
            href="#contact"
            className="w-full sm:w-auto text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
          >
            <span>Schedule Institutional Consultation</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#platform"
            className="w-full sm:w-auto text-sm font-bold text-slate-700 hover:text-slate-900 bg-white border border-slate-200 hover:bg-slate-50 px-6 py-3.5 rounded-xl shadow-xs transition-all flex items-center justify-center gap-2"
          >
            <span>Explore Platform Architecture</span>
            <ChevronRight size={16} className="text-slate-400" />
          </a>
        </div>

        {/* The Institutional Imperative Callout */}
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 text-left">
          <div className="bg-white/80 p-3.5 rounded-xl border border-slate-200 shadow-xs">
            <p className="text-[10px] font-bold uppercase tracking-wider text-rose-700 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
              Why It Is Crucial Today
            </p>
            <p className="text-xs text-slate-600 font-medium mt-1">
              Institutions lose over <strong className="text-slate-900">85% of graduate touchpoints</strong> within 3 years, missing out on crores in alumni donations, CSR funding, and accreditation rankings.
            </p>
          </div>
          <div className="bg-white/80 p-3.5 rounded-xl border border-slate-200 shadow-xs">
            <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              What Is Happening Live
            </p>
            <p className="text-xs text-slate-600 font-medium mt-1">
              Live multi-school networks actively verifying alumni, hosting 1-on-1 mentorships, and processing Section 80G tax-exempt donations in real-time.
            </p>
          </div>
        </div>

        {/* Dual-Device Mockup Showcase */}
        <div className="pt-8 relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Desktop Mockup (Left 7-8 cols) */}
            <div className="lg:col-span-8">
              <DesktopMockup />
            </div>

            {/* Mobile Mockup (Right 4-5 cols) */}
            <div className="lg:col-span-4 flex justify-center">
              <MobileMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
