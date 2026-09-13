'use client';

import React from 'react';
import { Building2, School, GraduationCap, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

export default function StakeholderCards() {
  const stakeholders = [
    {
      role: 'Trustees & Chancellors',
      title: 'For Educational Trust Leadership',
      icon: <Building2 className="text-blue-600" size={24} />,
      color: 'from-blue-500/10 to-transparent',
      borderColor: 'border-blue-200',
      bullets: [
        'Preserve sovereign branding on your official domain (portal.yourtrust.edu)',
        'Unlock crores in alumni endowments & corporate CSR grant referrals',
        'Centralized financial and multi-campus governance cockpit',
        'Boost institutional legacy and accreditation credentials (NAAC/NIRF)',
      ],
      whyCrucial: 'Eliminates reliance on outdated paper records and establishes a self-funding institutional endowment.',
      liveReality: 'Trustees gaining bird’s-eye financial transparency and monitoring multi-campus growth in real-time.',
    },
    {
      role: 'Principals & Deans',
      title: 'For Campus Administrators & Officers',
      icon: <School className="text-emerald-600" size={24} />,
      color: 'from-emerald-500/10 to-transparent',
      borderColor: 'border-emerald-200',
      bullets: [
        'Dedicated Sub-Admin login with automated school-level permissions',
        'Manage academic terms, student batches, and merit topper rankings',
        'Broadcast Google Meet alumni reunions and official webinar invites',
        'Zero server setup, zero maintenance, and automated data backups',
      ],
      whyCrucial: 'Reduces operational chaos, frees up administrative bandwidth, and connects students with senior mentors.',
      liveReality: 'Principals seamlessly dispatching cross-batch invites and tracking topper records with zero tech friction.',
    },
    {
      role: 'Distinguished Alumni & Donors',
      title: 'For Graduates & Corporate Patrons',
      icon: <GraduationCap className="text-purple-600" size={24} />,
      color: 'from-purple-500/10 to-transparent',
      borderColor: 'border-purple-200',
      bullets: [
        'LinkedIn-style community feed to post jobs, internships, and achievements',
        'Host 1-on-1 mentorship sessions with junior students in your domain',
        'Instant Section 80G tax exemption certificates on all cause donations',
        'Filterable alumni directory to discover batchmates in top global firms',
      ],
      whyCrucial: 'Provides a prestigious, secure platform to stay connected, advance careers, and give back with tax savings.',
      liveReality: 'Graduates across Google, Microsoft, Apollo, and top startups actively mentoring juniors and funding campus causes.',
    },
  ];

  return (
    <section id="solutions" className="py-20 bg-white/70 border-y border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-purple-50 border border-purple-200 text-purple-700 text-xs font-bold uppercase tracking-wider">
            <span>Tailored Stakeholder Solutions</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Built to Inspire Confidence in Every Educational Leader
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Whether you govern an entire educational trust, manage a campus, or represent a distinguished alumni body, My Gurukul delivers unmatched value.
          </p>
        </div>

        {/* 3 Stakeholder Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {stakeholders.map((card, idx) => (
            <div
              key={idx}
              className={`bg-white p-6 sm:p-7 rounded-xl border ${card.borderColor} shadow-sm hover:shadow-lg transition-all duration-300 space-y-5 flex flex-col justify-between`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                    {card.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                    {card.role}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900">{card.title}</h3>
                </div>

                <ul className="space-y-2.5 text-xs text-slate-700">
                  {card.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-snug">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-slate-100 text-xs">
                <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200/80">
                  <p className="text-[10px] font-bold text-slate-900 uppercase tracking-wider">Why Essential:</p>
                  <p className="text-slate-600 text-[11px] leading-relaxed mt-0.5">{card.whyCrucial}</p>
                </div>
                <div className="p-2.5 bg-emerald-50/70 rounded-lg border border-emerald-200/80">
                  <p className="text-[10px] font-bold text-emerald-900 uppercase tracking-wider flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Live Reality:
                  </p>
                  <p className="text-emerald-950 text-[11px] leading-relaxed mt-0.5">{card.liveReality}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
