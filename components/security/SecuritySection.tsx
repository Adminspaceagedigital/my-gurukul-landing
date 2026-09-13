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

        {/* Security Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          {/* Left: 4 Security Cards (lg: 7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {securityPoints.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md hover:border-slate-300 transition-all space-y-2.5 text-left"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-slate-50 rounded-xl border border-slate-100">
                    {item.icon}
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">{item.title}</h4>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-medium">{item.desc}</p>

                <div className="pt-2 border-t border-slate-100">
                  <p className="text-[10.5px] text-slate-500">
                    <strong className="text-slate-800 font-bold">Why Essential:</strong> {item.whyCrucial}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: 2FA Authentication Visual Mockup (lg: 5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden group">
              <div className="bg-slate-100/90 px-4 py-2.5 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>
                <div className="flex items-center gap-1 text-[10px] font-mono text-slate-600 bg-white px-2.5 py-0.5 rounded-md border border-slate-200 shadow-xs">
                  <Lock size={10} className="text-emerald-600 shrink-0" />
                  <span>Two-Factor Security Vault</span>
                </div>
                <div className="w-6" />
              </div>
              <div className="relative bg-slate-50 overflow-hidden">
                <img
                  src="/screenshots/superadmin/superadmin-2fa.png"
                  alt="Super Admin Two-Factor Authentication"
                  className="w-full h-auto object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
