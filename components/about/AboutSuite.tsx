'use client';

import React from 'react';
import {
  Building2,
  School,
  GraduationCap,
  Globe,
  FileCheck2,
  Layers,
  Zap,
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
} from 'lucide-react';
import { ZoomableImage } from '@/components/ui/LightboxProvider';

export default function AboutSuite() {
  return (
    <section id="about" className="py-24 bg-white border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* 1. Who We Are: Editorial Split Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 space-y-3 text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              The Sovereign Digital Infrastructure for Educational Trusts.
            </h2>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left border-t lg:border-t-0 lg:border-l border-slate-200 pt-6 lg:pt-0 lg:pl-8">
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Institutional Heritage</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                Educational Trusts and Universities represent decades of academic prestige. <strong>My Gurukul</strong> protects this legacy by replacing third-party dependencies with a fully branded digital command center.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Lifelong Ecosystem</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                From kindergarten enrollment to senior alumni career mentorship and corporate CSR endowment funds, we unify all stakeholders into one real-time operational layer.
              </p>
            </div>
          </div>
        </div>

        {/* 2. What We Do: The 3-Tier Architecture Bento Grid */}
        <div className="space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-left border-b border-slate-200 pb-4">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                The 3-Tier Multi-Tenant Ecosystem
              </h3>
            </div>
            <p className="text-xs text-slate-500 font-medium max-w-md">
              Synchronizing Trustees, School Principals, and Alumni into one cohesive digital infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-left">
            {/* Tier 1: Super Admin */}
            <div className="bg-gradient-to-br from-[#0B1525] to-[#162A45] text-white p-6 sm:p-7 rounded-2xl shadow-xl border border-slate-800 flex flex-col justify-between space-y-5 group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-[#AAFFC7] tracking-widest uppercase">
                    TIER 01 / TRUST
                  </span>
                  <div className="p-2 bg-white/10 rounded-lg text-white">
                    <Building2 size={18} />
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white">Super Admin Tier</h4>
                  <p className="text-xs text-slate-300 font-medium mt-0.5">
                    For Trust Trustees, Chancellors & Board Members
                  </p>
                </div>

                {/* Screenshot Preview — Desktop/Landscape */}
                <div className="relative rounded-xl overflow-hidden border border-white/15 bg-slate-900 shadow-md group-hover:border-emerald-400/40 transition-colors">
                  <div className="bg-slate-900 px-3 py-1.5 border-b border-white/10 flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-rose-400/80" />
                    <div className="w-2 h-2 rounded-full bg-amber-400/80" />
                    <div className="w-2 h-2 rounded-full bg-emerald-400/80" />
                    <span className="text-[9px] font-semibold text-slate-400 ml-1 truncate">Trust Governance & Schools</span>
                  </div>
                  <ZoomableImage
                    src="/screenshots/superadmin/superadmin-trust-data.png"
                    alt="Super Admin Trust Governance"
                    className="w-full h-44 object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <ul className="space-y-2 text-xs text-slate-300 pt-1">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-[#AAFFC7] shrink-0 mt-0.5" />
                    <span>Multi-trust & multi-school provisioning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-[#AAFFC7] shrink-0 mt-0.5" />
                    <span>Sub-Admin delegation & role access controls</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-[#AAFFC7] shrink-0 mt-0.5" />
                    <span>Trust-wide Section 80G tax exemption approval</span>
                  </li>
                </ul>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                <span className="font-semibold">Route: /superadmin</span>
                <span className="text-[#AAFFC7] font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-0.5">
                  Cockpit <ArrowUpRight size={12} />
                </span>
              </div>
            </div>

            {/* Tier 2: Sub-Admin */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-5 group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-emerald-700 tracking-widest uppercase">
                    TIER 02 / CAMPUS
                  </span>
                  <div className="p-2 bg-emerald-50 text-emerald-700 rounded-lg">
                    <School size={18} />
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-slate-900">Sub-Admin Tier</h4>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    For Principals, Deans & Campus Administrative Officers
                  </p>
                </div>

                {/* Screenshot Preview — Desktop/Landscape */}
                <div className="relative rounded-xl overflow-hidden border border-slate-200 bg-slate-50 shadow-xs group-hover:border-emerald-300 transition-colors">
                  <div className="bg-slate-100 px-3 py-1.5 border-b border-slate-200 flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-rose-400/80" />
                    <div className="w-2 h-2 rounded-full bg-amber-400/80" />
                    <div className="w-2 h-2 rounded-full bg-emerald-400/80" />
                    <span className="text-[9px] font-semibold text-slate-500 ml-1 truncate">Student Academic Timeline</span>
                  </div>
                  <ZoomableImage
                    src="/screenshots/subadmin/school-showing-student-timeline.png"
                    alt="School Operations Student Timeline"
                    className="w-full h-44 object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <ul className="space-y-2 text-xs text-slate-700 pt-1">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Manage academic cycles & term calendars</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Student batch records & merit topper ranks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Batch graduation & automated alumni conversion</span>
                  </li>
                </ul>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span className="font-semibold">Route: /subadmin</span>
                <span className="text-emerald-700 font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-0.5">
                  Campus <ArrowUpRight size={12} />
                </span>
              </div>
            </div>

            {/* Tier 3: Alumni */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-5 group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-purple-700 tracking-widest uppercase">
                    TIER 03 / COMMUNITY
                  </span>
                  <div className="p-2 bg-purple-50 text-purple-700 rounded-lg">
                    <GraduationCap size={18} />
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-slate-900">Alumni Tier</h4>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    For Verified Graduates, Mentors & Corporate Donors
                  </p>
                </div>

                {/* Screenshot Preview — Portrait Mobile Phone Mockup */}
                <div className="flex items-center justify-center py-2 gap-2 sm:gap-3 overflow-hidden">
                  {/* Phone 1 */}
                  <div className="relative w-[75px] xs:w-[82px] sm:w-[90px] bg-slate-900 rounded-xl sm:rounded-2xl p-1 shadow-xl border border-slate-700 shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <div className="w-4 sm:w-5 h-1 bg-slate-700 rounded-full mx-auto mb-1" />
                    <div className="rounded-lg sm:rounded-xl overflow-hidden bg-slate-800">
                      <ZoomableImage
                        src="/screenshots/alumni/alumni-community-feed.png"
                        alt="Alumni Community Feed"
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                  {/* Phone 2 */}
                  <div className="relative w-[75px] xs:w-[82px] sm:w-[90px] bg-slate-900 rounded-xl sm:rounded-2xl p-1 shadow-xl border border-slate-700 shrink-0">
                    <div className="w-4 sm:w-5 h-1 bg-slate-700 rounded-full mx-auto mb-1" />
                    <div className="rounded-lg sm:rounded-xl overflow-hidden bg-slate-800">
                      <ZoomableImage
                        src="/screenshots/alumni/alumni-dashboard-1.png"
                        alt="Alumni Dashboard"
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                  {/* Phone 3 */}
                  <div className="relative w-[75px] xs:w-[82px] sm:w-[90px] bg-slate-900 rounded-xl sm:rounded-2xl p-1 shadow-xl border border-slate-700 shrink-0">
                    <div className="w-4 sm:w-5 h-1 bg-slate-700 rounded-full mx-auto mb-1" />
                    <div className="rounded-lg sm:rounded-xl overflow-hidden bg-slate-800">
                      <ZoomableImage
                        src="/screenshots/alumni/alumni-job-post-page.png"
                        alt="Alumni Job Board"
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 text-xs text-slate-700 pt-1">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-purple-600 shrink-0 mt-0.5" />
                    <span>LinkedIn-style career feed for jobs & mentorship</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-purple-600 shrink-0 mt-0.5" />
                    <span>School Memories & historical event galleries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-purple-600 shrink-0 mt-0.5" />
                    <span>Instant Section 80G tax-exempt cause donations</span>
                  </li>
                </ul>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span className="font-semibold">Route: /alumni</span>
                <span className="text-purple-700 font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-0.5">
                  Portal <ArrowUpRight size={12} />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Why We Are Unique: 4 Numbered Engineering Moats */}
        <div className="bg-gradient-to-br from-slate-50 via-sky-50/20 to-blue-50/30 p-8 sm:p-12 rounded-xl border border-slate-200 text-left space-y-8">
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              4 Structural Advantages Built for Education Leaders
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-blue-700 bg-white border border-blue-200 px-2 py-0.5 rounded-md shadow-xs">
                  01
                </span>
                <h4 className="text-sm sm:text-base font-bold text-slate-900">100% Brand Sovereignty</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                No third-party branding or external portal redirections. Your ecosystem operates under your official institution domain (e.g. <strong className="text-slate-800">portal.yourtrust.edu</strong>) with automated SSL.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-emerald-700 bg-white border border-emerald-200 px-2 py-0.5 rounded-md shadow-xs">
                  02
                </span>
                <h4 className="text-sm sm:text-base font-bold text-slate-900">Automated Section 80G Tax Engine</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Instant donor PAN validation, Razorpay/UPI integration, and instant generation and email dispatch of digitally signed Indian 80G tax exemption certificates.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-purple-700 bg-white border border-purple-200 px-2 py-0.5 rounded-md shadow-xs">
                  03
                </span>
                <h4 className="text-sm sm:text-base font-bold text-slate-900">Unified 3-Tier Synergy</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Instead of 4 disconnected tools for administration, alumni, donations, and communication, My Gurukul runs a unified, real-time database across all campuses.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-amber-700 bg-white border border-amber-200 px-2 py-0.5 rounded-md shadow-xs">
                  04
                </span>
                <h4 className="text-sm sm:text-base font-bold text-slate-900">Rapid 24-Hour Deployment</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Zero infrastructure headaches or lengthy 6-month development cycles. Your entire multi-campus trust network can be live and active in under 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
