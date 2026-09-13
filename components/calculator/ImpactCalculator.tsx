'use client';

import React from 'react';
import { HeartHandshake, Building, Award, ShieldCheck, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function ImpactCalculator() {
  const benefits = [
    {
      icon: HeartHandshake,
      title: 'Direct Alumni Endowments',
      description: 'Enable frictionless one-click giving campaigns for scholarships, department funds, and campus development projects.',
      highlight: 'Automated 80G Tax Receipts',
      accentColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    },
    {
      icon: Building,
      title: 'Corporate CSR & Grants',
      description: 'Tap into corporate CSR budgets and employer matching gifts by connecting with alumni working at top enterprises.',
      highlight: 'Enterprise CSR Pipelines',
      accentColor: 'text-blue-700 bg-blue-50 border-blue-200',
    },
    {
      icon: Award,
      title: 'Mentorship & Placements',
      description: 'Foster student-alumni career guidance, campus recruitment drives, guest lectures, and industry masterclasses.',
      highlight: 'Lifelong Career Ecosystem',
      accentColor: 'text-purple-700 bg-purple-50 border-purple-200',
    },
  ];

  return (
    <section id="endowment" className="py-20 bg-slate-50/70 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Unlock the Dormant Financial & Mentorship Power of Your Alumni Network
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
            See how much non-tuition endowment capital and corporate CSR grants your institution can unlock with an organized digital ecosystem.
          </p>
        </div>

        {/* 3 Simple Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-800 group-hover:bg-[#0A1931] group-hover:text-white transition-all">
                      <Icon size={22} />
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border ${item.accentColor}`}>
                      {item.highlight}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 size={15} className="text-emerald-500 shrink-0" />
                  <span>Integrated with Central Trust Command</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Institutional Trust Compliance Strip */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs text-left">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center shrink-0">
              <ShieldCheck size={22} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                100% Direct Trust Settlement & Compliance
              </h4>
              <p className="text-xs text-slate-600">
                All donations and CSR disbursements flow directly into your official Trust bank account with instant automated PDF receipts.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="w-full sm:w-auto text-xs font-bold text-white bg-[#0A1931] hover:bg-blue-700 px-5 py-3 rounded-xl shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-1.5 shrink-0"
          >
            <span>Activate Giving Network</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

