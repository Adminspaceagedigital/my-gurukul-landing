'use client';

import React, { useState } from 'react';
import {
  Building2,
  Camera,
  Heart,
  Search,
  ArrowUpRight,
  Lock,
} from 'lucide-react';

interface FeatureItem {
  id: string;
  num: string;
  label: string;
  icon: React.ReactNode;
  title: string;
  challenge: string;
  overcomes: string;
  imageSrc: string;
  urlLabel: string;
}

export default function FeatureTabs() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const features: FeatureItem[] = [
    {
      id: 'governance',
      num: '01',
      label: 'Multi-Campus Cockpit',
      icon: <Building2 size={15} />,
      title: 'Unified Trust Governance & Sub-Admin Delegation',
      challenge: 'Multi-school trusts struggle with fragmented spreadsheets, isolated school offices, and zero centralized financial audit trails.',
      overcomes: 'Provides a single sovereign Super Admin cockpit to govern all campuses, provision Sub-Admin accounts for principals, and monitor operations in real-time.',
      imageSrc: '/screenshots/superadmin/superadmin-dashboard.png',
      urlLabel: 'portal.yourtrust.edu/superadmin/dashboard',
    },
    {
      id: 'memories',
      num: '02',
      label: 'Campus Memories & Events',
      icon: <Camera size={15} />,
      title: 'School Memories & Historical Event Gallery',
      challenge: 'School memories, annual day victories, sports milestones, and nostalgic photo albums are lost over time across scattered personal drives.',
      overcomes: 'A centralized memories hub with school and batch-year filters, high-resolution photo lightbox albums, and video highlights for lifelong engagement.',
      imageSrc: '/screenshots/alumni/school-memorites-page.png',
      urlLabel: 'portal.yourtrust.edu/alumni/dashboard?tab=memories',
    },
    {
      id: 'philanthropy',
      num: '03',
      label: 'Section 80G Philanthropy',
      icon: <Heart size={15} />,
      title: 'Automated 80G Tax-Exempt Giving & Receipts',
      challenge: 'Donors hesitate due to slow offline processes, lack of cause transparency, and delayed manual tax-exemption receipts.',
      overcomes: 'Enables direct digital giving for STEM labs, libraries, and scholarships with instant PAN verification and automated 80G tax certificates.',
      imageSrc: '/screenshots/alumni/till-now-alumni-donation-recipts-data.png',
      urlLabel: 'portal.yourtrust.edu/alumni/dashboard?tab=impact',
    },
    {
      id: 'directory',
      num: '04',
      label: 'Global Alumni Directory',
      icon: <Search size={15} />,
      title: 'Searchable Alumni Directory & Networking',
      challenge: 'Alumni contact information is trapped in unorganized Excel sheets and disorganized WhatsApp groups.',
      overcomes: 'A searchable directory allowing graduates and trust leaders to find peers by passing batch, industry, company, or city across the globe.',
      imageSrc: '/screenshots/alumni/find-alumni-page.png',
      urlLabel: 'portal.yourtrust.edu/alumni/dashboard?tab=find-alumni',
    },
  ];

  const current = features[activeTab];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-transparent via-sky-50/20 to-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-blue-700 uppercase bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-md">
            05 // PLATFORM CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            How My Gurukul Overcomes Institutional Bottlenecks
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            Designed specifically to replace legacy paperwork with automated, sovereign digital workflows.
          </p>
        </div>

        {/* Numbered Pill Selectors */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-white border border-slate-200 rounded-xl shadow-xs max-w-3xl mx-auto">
          {features.map((item, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all duration-200 ${
                  isActive
                    ? 'bg-[#0A1931] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <span className={`text-[10px] font-mono ${isActive ? 'text-[#AAFFC7]' : 'text-slate-400'}`}>
                  {item.num}
                </span>
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Feature Display Card */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Challenge vs Overcomes */}
          <div className="lg:col-span-5 space-y-5 text-left">
            <div>
              <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                MODULE {current.num}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight mt-1">
                {current.title}
              </h3>
            </div>

            {/* The Challenge Box */}
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
              <p className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                The Common Bottleneck
              </p>
              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                {current.challenge}
              </p>
            </div>

            {/* How It Overcomes Box */}
            <div className="p-4 bg-emerald-50/70 rounded-xl border border-emerald-200 space-y-1.5">
              <p className="text-[10px] font-mono font-bold text-emerald-800 uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                How My Gurukul Overcomes It
              </p>
              <p className="text-xs text-emerald-950 leading-relaxed font-semibold">
                {current.overcomes}
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 pt-1 group"
            >
              <span>Request demonstration for this module</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Right: Mockup Container */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-xl border border-slate-200 shadow-xl overflow-hidden group">
              <div className="bg-slate-100/90 px-4 py-2.5 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>
                <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono text-slate-600 bg-white px-3 py-0.5 rounded-md border border-slate-200 shadow-xs max-w-[280px] sm:max-w-xs truncate">
                  <Lock size={10} className="text-emerald-600 shrink-0" />
                  <span>https://{current.urlLabel}</span>
                </div>
                <div className="flex items-center gap-1 text-[9px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Verified</span>
                </div>
              </div>
              <div className="relative overflow-hidden bg-slate-50">
                <img
                  src={current.imageSrc}
                  alt={current.title}
                  className="w-full h-auto max-h-[480px] object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
