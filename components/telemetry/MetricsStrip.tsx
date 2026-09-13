'use client';

import React from 'react';
import { Globe, FileCheck2, Shield, Zap } from 'lucide-react';

export default function MetricsStrip() {
  const metrics = [
    {
      icon: <Globe className="text-blue-600" size={22} />,
      title: '100% Brand Sovereignty',
      subtitle: 'Dedicated Custom Domain',
      detail: 'Runs directly on your domain (portal.yourtrust.edu) with free auto-renewing SSL.',
      whyCrucial: 'Preserves institutional prestige without third-party portal hijacking.',
      liveStatus: 'Active across all member campuses',
    },
    {
      icon: <FileCheck2 className="text-emerald-600" size={22} />,
      title: 'Automated Section 80G',
      subtitle: 'Instant Tax Exemption',
      detail: 'Captures donor PAN and automatically dispatches official 80G certificates.',
      whyCrucial: 'Eliminates manual audit paperwork and motivates high-value alumni giving.',
      liveStatus: 'Real-time receipt dispatch enabled',
    },
    {
      icon: <Shield className="text-purple-600" size={22} />,
      title: 'Bank-Grade Privacy',
      subtitle: 'PostgreSQL Isolation & 2FA',
      detail: 'Encrypted multi-layer storage with mandatory TOTP authenticator security for admins.',
      whyCrucial: 'Safeguards confidential student records and high-value endowment ledgers.',
      liveStatus: 'Zero breaches • AES-256 encryption',
    },
    {
      icon: <Zap className="text-amber-600" size={22} />,
      title: '< 24-Hour Launch',
      subtitle: 'Zero-Downtime Migration',
      detail: 'Pre-configured institutional architecture ready to go live in less than one day.',
      whyCrucial: 'No lengthy 6-month IT delays or expensive developer retainers.',
      liveStatus: 'Instant multi-campus setup ready',
    },
  ];

  return (
    <section className="py-12 bg-white/60 border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((item, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs hover:shadow-md transition-all duration-300 space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="p-2 bg-slate-50 rounded-lg border border-slate-100">
                  {item.icon}
                </div>
                <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md">
                  {item.liveStatus}
                </span>
              </div>

              <div>
                <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                <p className="text-xs font-semibold text-slate-500">{item.subtitle}</p>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">{item.detail}</p>

              <div className="pt-2 border-t border-slate-100">
                <p className="text-[10px] text-slate-500">
                  <strong className="text-slate-800">Why Essential:</strong> {item.whyCrucial}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
