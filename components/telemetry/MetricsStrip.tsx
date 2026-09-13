'use client';

import React from 'react';
import { Globe, FileCheck2, Shield, Zap } from 'lucide-react';

export default function MetricsStrip() {
  const metrics = [
    {
      icon: <Globe className="text-blue-600" size={20} />,
      title: 'Brand Sovereignty',
      tag: 'Custom Domain',
      desc: 'Runs on your own official domain with automated free SSL certificates.',
      overcomes: 'Overcomes generic third-party portal branding.',
    },
    {
      icon: <FileCheck2 className="text-emerald-600" size={20} />,
      title: 'Automated 80G',
      tag: 'Tax Exemption',
      desc: 'Instant PAN verification and automated 80G certificate PDF dispatch.',
      overcomes: 'Overcomes slow manual donation receipts.',
    },
    {
      icon: <Shield className="text-purple-600" size={20} />,
      title: 'Bank-Grade Privacy',
      tag: 'TOTP 2FA & Isolation',
      desc: 'Dedicated PostgreSQL database schema isolation with authenticator 2FA.',
      overcomes: 'Overcomes student data leakage risks.',
    },
    {
      icon: <Zap className="text-amber-600" size={20} />,
      title: 'Rapid Deployment',
      tag: '< 24 Hours',
      desc: 'Complete multi-school campus network onboarding in under one day.',
      overcomes: 'Overcomes lengthy 6-month IT delays.',
    },
  ];

  return (
    <section className="py-12 bg-white/60 border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((item, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs hover:shadow-md transition-all duration-300 space-y-2.5 text-left"
            >
              <div className="flex items-center justify-between">
                <div className="p-2 bg-slate-50 rounded-lg border border-slate-100">
                  {item.icon}
                </div>
                <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                  {item.tag}
                </span>
              </div>

              <div>
                <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed mt-1 font-medium">{item.desc}</p>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <p className="text-[11px] text-emerald-800 font-semibold flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-emerald-500" />
                  {item.overcomes}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
