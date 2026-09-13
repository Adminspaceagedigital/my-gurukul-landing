'use client';

import React from 'react';
import { Building2, School, GraduationCap, CheckCircle2, ArrowRight } from 'lucide-react';

export default function StakeholderCards() {
  const stakeholders = [
    {
      role: 'Trustees & Founders',
      title: 'Trust Leadership',
      icon: <Building2 className="text-blue-600" size={22} />,
      borderColor: 'border-blue-200',
      overcomes: 'Overcomes multi-school blind spots and disconnected campus records.',
      benefits: [
        'Complete brand sovereignty on your custom domain',
        'Direct non-tuition fundraising & corporate CSR pipeline',
        'Centralized financial analytics across all campuses',
        'Strengthens NAAC & NIRF alumni credentials',
      ],
    },
    {
      role: 'Principals & Deans',
      title: 'School Administrators',
      icon: <School className="text-emerald-600" size={22} />,
      borderColor: 'border-emerald-200',
      overcomes: 'Overcomes manual paper rosters and chaotic event coordination.',
      benefits: [
        'Dedicated Sub-Admin login with school-level roles',
        'Organize student batches, terms, and merit toppers',
        'One-click Google Meet webinar and reunion broadcasts',
        'Zero IT maintenance or server setup required',
      ],
    },
    {
      role: 'Alumni & Donors',
      title: 'Graduates & Patrons',
      icon: <GraduationCap className="text-purple-600" size={22} />,
      borderColor: 'border-purple-200',
      overcomes: 'Overcomes lost graduate networks and untraceable donation receipts.',
      benefits: [
        'LinkedIn-style professional feed for jobs and mentorship',
        'Instant Section 80G tax exemption certificates',
        'Global directory to find schoolmates in top companies',
        'Direct 1-on-1 career guidance booking with juniors',
      ],
    },
  ];

  return (
    <section className="py-20 bg-white/80 border-y border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Simple Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-purple-700 bg-purple-50 border border-purple-200 px-3 py-1 rounded-lg">
            Stakeholder Alignment
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Tailored for Every Decision Maker
          </h2>
          <p className="text-sm text-slate-600 font-medium">
            Clear, tangible outcomes for trust trustees, campus principals, and proud graduates.
          </p>
        </div>

        {/* 3 Stakeholder Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {stakeholders.map((card, idx) => (
            <div
              key={idx}
              className={`bg-white p-6 sm:p-7 rounded-xl border ${card.borderColor} shadow-sm hover:shadow-md transition-all duration-300 space-y-5 flex flex-col justify-between`}
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
                  <p className="text-xs text-slate-500 font-medium mt-1">
                    {card.overcomes}
                  </p>
                </div>

                <ul className="space-y-2.5 text-xs text-slate-700">
                  {card.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-snug">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <a
                  href="#contact"
                  className="w-full py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-lg text-xs font-bold border border-slate-200 transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Onboard this role</span>
                  <ArrowRight size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
