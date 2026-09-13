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
  ShieldCheck,
  ChevronRight,
} from 'lucide-react';

export default function FeatureTabs() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const tabs = [
    {
      id: 'governance',
      label: 'Multi-Campus Cockpit',
      badge: 'Super Admin',
      icon: <Building2 size={16} />,
      title: 'Unified Trust Governance & Sub-Admin Delegation',
      description:
        'Govern all schools, colleges, and campuses under a single sovereign command center. Delegate dedicated Sub-Admin accounts to school officers with zero IT friction.',
      whyCrucial:
        'Prevents administrative fragmentation across multi-school trusts, ensures strict financial audit trails, and eliminates manual paperwork bottlenecks.',
      livePulse:
        'Multi-campus directories synced in real-time with automated role permissions and live audit telemetry.',
      component: <DesktopMockup />,
    },
    {
      id: 'mentorship',
      label: 'Careers & Mentorship',
      badge: 'Alumni Network',
      icon: <Users size={16} />,
      title: 'LinkedIn-Style Professional Community & 1-on-1 Mentorship',
      description:
        'Enable distinguished graduates to post job openings, offer 1-on-1 career guidance, share industry achievements, and conduct live Google Meet reunions.',
      whyCrucial:
        'Drives student career placements, strengthens NIRF/NAAC alumni engagement accreditation, and keeps top graduates actively invested in their alma mater.',
      livePulse:
        'Graduates actively mentoring juniors, sharing verified job referrals, and booking 1-on-1 sessions with pre-filled profiles.',
      component: <MentorshipCardMock />,
    },
    {
      id: 'philanthropy',
      label: 'Philanthropy & 80G',
      badge: 'Endowment Engine',
      icon: <Heart size={16} />,
      title: 'Targeted Campus Crowdfunding & Automated Section 80G Tax Receipts',
      description:
        'Raise capital directly for science labs, scholarships, libraries, and sports infrastructure with instantaneous donor PAN validation and 80G certificate generation.',
      whyCrucial:
        'Unlocks non-tuition revenue streams. Transparent 80G tax deductions dramatically increase high-ticket alumni and CSR corporate contributions.',
      livePulse:
        'Active campus infrastructure causes hitting funding milestones with real-time Razorpay/UPI gateway compliance.',
      component: <Donation80GMock />,
    },
    {
      id: 'directory',
      label: 'Global Alumni Directory',
      badge: 'Peer Discovery',
      icon: <Search size={16} />,
      title: 'Filterable Graduate Directory Across Batches, Industries & Cities',
      description:
        'A high-speed directory allowing alumni and institutional leaders to find schoolmates by graduation year, current company, profession, or global location.',
      whyCrucial:
        'Transforms static Excel lists into an active, searchable global network of doctors, engineers, civil servants, and entrepreneurs.',
      livePulse:
        'Verified alumni discovering peers in top multinational companies and organizing regional city chapter meetups.',
      component: <DirectoryMock />,
    },
  ];

  const current = tabs[activeTab];

  return (
    <section id="platform" className="py-20 bg-gradient-to-b from-transparent via-sky-50/30 to-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <span>The 4 Core Platform Pillars</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Engineered for Complete Institutional Mastery
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Explore how My Gurukul seamlessly bridges multi-school trust governance with a thriving global alumni ecosystem.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-white/80 border border-slate-200 rounded-xl shadow-xs max-w-4xl mx-auto">
          {tabs.map((tab, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Canvas */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-lg p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Context & Importance */}
          <div className="lg:col-span-5 space-y-5 text-left">
            <div>
              <span className="text-[10px] font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-md uppercase tracking-wider">
                {current.badge}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2 leading-tight">
                {current.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2 font-medium">
                {current.description}
              </p>
            </div>

            {/* Why It Is Crucial */}
            <div className="p-3.5 bg-rose-50/60 rounded-xl border border-rose-200/80 space-y-1">
              <p className="text-[10px] font-bold text-rose-800 uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                Why This Matters to Your Institution
              </p>
              <p className="text-xs text-rose-950 leading-relaxed font-medium">
                {current.whyCrucial}
              </p>
            </div>

            {/* What Is Happening Live */}
            <div className="p-3.5 bg-emerald-50/60 rounded-xl border border-emerald-200/80 space-y-1">
              <p className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Live Inside the Platform Right Now
              </p>
              <p className="text-xs text-emerald-950 leading-relaxed font-medium">
                {current.livePulse}
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-700 pt-1 group"
            >
              <span>See live interactive demo for your school</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right Showcase Mockup Container */}
          <div className="lg:col-span-7">
            {current.component}
          </div>
        </div>
      </div>
    </section>
  );
}
