'use client';

import React from 'react';
import { ShieldCheck, Lock, QrCode, Server, KeyRound, FileCheck } from 'lucide-react';

export default function SecuritySection() {
  const securityPoints = [
    {
      icon: <QrCode className="text-blue-600" size={20} />,
      title: 'Mandatory TOTP Two-Factor Authentication',
      desc: 'All Super Admin and Sub-Admin accounts require Google Authenticator/Authy 2FA with single-use backup recovery codes.',
      whyCrucial: 'Prevents unauthorized administrative hijacking and shields institutional records.',
    },
    {
      icon: <Server className="text-emerald-600" size={20} />,
      title: 'Dedicated PostgreSQL & Supabase Data Isolation',
      desc: 'Institutional records, alumni contact details, and financial ledgers are securely isolated with strict schema partitioning.',
      whyCrucial: 'Guarantees zero data leakage across different school campuses and parent trusts.',
    },
    {
      icon: <Lock className="text-purple-600" size={20} />,
      title: 'TLS 1.3 & Automated Auto-Renewing SSL',
      desc: 'Every custom subdomain (portal.school.edu) is automatically provisioned with 256-bit bank-grade SSL encryption.',
      whyCrucial: 'Ensures safe online donation processing via Razorpay/UPI with zero security warnings for visitors.',
    },
    {
      icon: <FileCheck className="text-amber-600" size={20} />,
      title: 'Tamper-Proof Audit Telemetry & Logs',
      desc: 'Live telemetry tracks every login, sub-admin action, donation event, and content moderation change.',
      whyCrucial: 'Provides complete compliance documentation for annual trust audits and charity commissioner filings.',
    },
  ];

  return (
    <section id="security" className="py-20 bg-white/80 border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck size={14} className="text-emerald-600" />
            <span>Enterprise Security Architecture</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Bank-Grade Security Built for Educational Institutions
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Confidential student records, donor PAN credentials, and institutional funds protected with multi-layered enterprise defense.
          </p>
        </div>

        {/* Security Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {securityPoints.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-3 text-left"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                  {item.icon}
                </div>
                <h4 className="text-sm font-bold text-slate-900 leading-snug">{item.title}</h4>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed font-medium">{item.desc}</p>

              <div className="pt-2.5 border-t border-slate-100">
                <p className="text-[11px] text-slate-500">
                  <strong className="text-slate-800 font-bold">Why Essential:</strong> {item.whyCrucial}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
