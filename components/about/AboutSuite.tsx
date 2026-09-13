'use client';

import React from 'react';
import {
  ShieldCheck,
  Target,
  Sparkles,
  Building2,
  School,
  GraduationCap,
  Globe,
  FileCheck2,
  Layers,
  ArrowRight,
  CheckCircle2,
  Zap,
} from 'lucide-react';

export default function AboutSuite() {
  return (
    <section id="about" className="py-20 bg-white/90 border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* 1. Who We Are */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4 text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-lg">
              Who We Are
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              The Digital Backbone for India's Educational Trusts
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
              <strong>My Gurukul</strong> is a sovereign institutional platform engineered specifically to bridge the gap between educational trust governance, campus administration, and lifelong alumni communities.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
              We empower trusts to operate their own self-funded, digitally connected network without relying on fragmented spreadsheets or third-party portals.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-slate-50 rounded-xl border border-blue-100 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                <Target size={16} />
              </div>
              <h4 className="text-sm font-bold text-slate-900">Our Mission</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                To transform every educational trust into a self-sustaining, globally connected power center driven by active alumni philanthropy and mentorship.
              </p>
            </div>

            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-slate-50 rounded-xl border border-emerald-100 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">
                <ShieldCheck size={16} />
              </div>
              <h4 className="text-sm font-bold text-slate-900">Our Standard</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Bank-grade security, 100% brand sovereignty on your own domain, and zero-compromise Indian Section 80G tax exemption compliance.
              </p>
            </div>
          </div>
        </div>

        {/* 2. What We Do: The 3-Tier Architecture */}
        <div className="space-y-8 text-center">
          <div className="max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-purple-700 bg-purple-50 border border-purple-200 px-3 py-1 rounded-lg">
              What We Do
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              A Unified 3-Tier Architecture
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              Seamlessly synchronizing Trustees, Campus Principals, and Alumni in one sovereign ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-left">
            {/* Super Admin Tier */}
            <div className="p-6 bg-gradient-to-br from-[#0B1525] to-[#162A45] text-white rounded-xl shadow-lg border border-slate-800 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2 bg-white/10 rounded-lg text-blue-300">
                    <Building2 size={18} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#AAFFC7] bg-white/10 px-2 py-0.5 rounded border border-white/10">
                    Trust Level
                  </span>
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Super Admin Tier</h4>
                  <p className="text-[11px] text-slate-300 font-medium mt-0.5">
                    For Trust Trustees & Chancellors
                  </p>
                </div>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={13} className="text-[#AAFFC7] shrink-0 mt-0.5" />
                    <span>Multi-trust & multi-school provisioning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={13} className="text-[#AAFFC7] shrink-0 mt-0.5" />
                    <span>Sub-Admin account delegation & access control</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={13} className="text-[#AAFFC7] shrink-0 mt-0.5" />
                    <span>Trust-wide 80G tax exemption approval ledger</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={13} className="text-[#AAFFC7] shrink-0 mt-0.5" />
                    <span>Live security audit telemetry and monitoring</span>
                  </li>
                </ul>
              </div>
              <div className="pt-3 border-t border-white/10">
                <p className="text-[10px] text-slate-400 font-mono">Cockpit: /superadmin/dashboard</p>
              </div>
            </div>

            {/* Sub-Admin Tier */}
            <div className="p-6 bg-white rounded-xl border border-emerald-200 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2 bg-emerald-50 rounded-lg text-emerald-700">
                    <School size={18} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Campus Level
                  </span>
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">Sub-Admin Tier</h4>
                  <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                    For Principals, Deans & Campus Officers
                  </p>
                </div>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={13} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Manage academic cycles & term calendars</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={13} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Student batch records & merit rank topper lists</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={13} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Broadcast Google Meet alumni reunion invites</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={13} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Post official campus news & academic updates</span>
                  </li>
                </ul>
              </div>
              <div className="pt-3 border-t border-slate-100">
                <p className="text-[10px] text-slate-400 font-mono">Cockpit: /subadmin/dashboard</p>
              </div>
            </div>

            {/* Alumni Tier */}
            <div className="p-6 bg-white rounded-xl border border-purple-200 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2 bg-purple-50 rounded-lg text-purple-700">
                    <GraduationCap size={18} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-purple-800 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                    Community Level
                  </span>
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">Alumni Tier</h4>
                  <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                    For Verified Graduates & Corporate Patrons
                  </p>
                </div>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={13} className="text-purple-600 shrink-0 mt-0.5" />
                    <span>LinkedIn-style community feed for jobs & updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={13} className="text-purple-600 shrink-0 mt-0.5" />
                    <span>Book 1-on-1 mentorship with junior students</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={13} className="text-purple-600 shrink-0 mt-0.5" />
                    <span>Instant 80G tax-exempt donations to school causes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={13} className="text-purple-600 shrink-0 mt-0.5" />
                    <span>Searchable directory by company, industry & city</span>
                  </li>
                </ul>
              </div>
              <div className="pt-3 border-t border-slate-100">
                <p className="text-[10px] text-slate-400 font-mono">Portal: /alumni/dashboard</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Why We Are Unique (Our Moat) */}
        <div className="bg-gradient-to-br from-slate-50 via-sky-50/30 to-blue-50/20 p-8 sm:p-10 rounded-xl border border-slate-200 space-y-8 text-left">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-lg">
              Why We Are Unique
            </span>
            <h3 className="text-xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              4 Reasons Why Institutions Choose My Gurukul
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-blue-100 text-blue-800 rounded-lg">
                  <Globe size={16} />
                </div>
                <h4 className="text-sm font-bold text-slate-900">100% Brand Sovereignty</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                No third-party logos or shared generic portals. Your system runs directly on your official domain (e.g. <strong className="text-slate-800">portal.yourtrust.edu</strong>) with auto-renewing SSL.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-emerald-100 text-emerald-800 rounded-lg">
                  <FileCheck2 size={16} />
                </div>
                <h4 className="text-sm font-bold text-slate-900">Automated Section 80G Tax Engine</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Instant donor PAN validation, Razorpay/UPI gateway integration, and immediate dispatch of digitally signed 80G tax exemption certificates to donors.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-purple-100 text-purple-800 rounded-lg">
                  <Layers size={16} />
                </div>
                <h4 className="text-sm font-bold text-slate-900">Unified 3-Tier Synergy</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Unlike fragmented single-purpose apps, My Gurukul connects Super Admin trustees, Sub-Admin campus principals, and Alumni in one real-time data layer.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-amber-100 text-amber-800 rounded-lg">
                  <Zap size={16} />
                </div>
                <h4 className="text-sm font-bold text-slate-900">Rapid 24-Hour Deployment</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Zero server configuration, zero lengthy developer retainers. Your multi-campus network can be completely live and operational in less than 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
