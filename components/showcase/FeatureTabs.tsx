'use client';

import React, { useState } from 'react';
import MentorshipCardMock from './MentorshipCardMock';
import Donation80GMock from './Donation80GMock';
import DirectoryMock from './DirectoryMock';
import DesktopMockup from '../hero/DesktopMockup';
import {
  Building2,
  Users,
  Heart,
  Search,
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
  Sparkles,
} from 'lucide-react';

export default function FeatureTabs() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const features = [
    {
      id: 'governance',
      label: 'Multi-Campus Cockpit',
      icon: <Building2 size={16} />,
      title: 'Unified Trust & Multi-School Governance',
      challenge: 'Multi-school trusts struggle with fragmented spreadsheets, isolated school offices, and zero centralized financial audit trails.',
      overcomes: 'Provides a single sovereign Super Admin cockpit to govern all campuses, provision Sub-Admin accounts for principals, and monitor operations in real-time.',
      component: <DesktopMockup />,
    },
    {
      id: 'mentorship',
      label: 'Alumni Careers & Mentorship',
      icon: <Users size={16} />,
      title: 'LinkedIn-Style Alumni Career Network',
      challenge: 'Graduates lose touch within 3 years, leaving institutions with dormant alumni rosters and students without senior career mentorship.',
      overcomes: 'A thriving community where verified alumni post jobs, offer 1-on-1 guidance sessions, and hire junior graduates with 1-click profile applications.',
      component: <MentorshipCardMock />,
    },
    {
      id: 'philanthropy',
      label: 'Section 80G Philanthropy',
      icon: <Heart size={16} />,
      title: 'Automated 80G Tax-Exempt Giving',
      challenge: 'Donors hesitate due to slow offline processes, lack of cause transparency, and delayed tax-exemption receipts.',
      overcomes: 'Enables direct digital giving for STEM labs, libraries, and scholarships with instant PAN verification and automated 80G tax certificates.',
      component: <Donation80GMock />,
    },
    {
      id: 'directory',
      label: 'Global Graduate Directory',
      icon: <Search size={16} />,
      title: 'Searchable Alumni Directory',
      challenge: 'Alumni contact information is trapped in unorganized Excel sheets and disorganized WhatsApp groups.',
      overcomes: 'A searchable directory allowing graduates and trust leaders to find peers by passing batch, industry, company, or city across the globe.',
      component: <DirectoryMock />,
    },
  ];

  const current = features[activeTab];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-transparent via-sky-50/30 to-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Clean Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-lg">
            Core Capabilities
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How My Gurukul Overcomes Institutional Bottlenecks
          </h2>
          <p className="text-sm text-slate-600 font-medium">
            Designed specifically to replace legacy paperwork with automated, sovereign digital workflows.
          </p>
        </div>

        {/* Clean Tab Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-white border border-slate-200 rounded-xl shadow-xs max-w-3xl mx-auto">
          {features.map((item, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Feature Display Card */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-lg p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Challenge vs How It Overcomes */}
          <div className="lg:col-span-5 space-y-5 text-left">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                {current.title}
              </h3>
            </div>

            {/* The Challenge Box */}
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                The Common Bottleneck
              </p>
              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                {current.challenge}
              </p>
            </div>

            {/* How It Overcomes Box */}
            <div className="p-4 bg-emerald-50/70 rounded-xl border border-emerald-200 space-y-1.5">
              <p className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider flex items-center gap-1.5">
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
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right: Mockup Container */}
          <div className="lg:col-span-7">
            {current.component}
          </div>
        </div>
      </div>
    </section>
  );
}
