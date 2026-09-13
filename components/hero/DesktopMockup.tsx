'use client';

import React from 'react';
import {
  Building2,
  School,
  Users,
  ShieldCheck,
  ArrowUpRight,
  Plus,
  Activity,
  ChevronRight,
  Lock,
} from 'lucide-react';

import { ZoomableImage } from '@/components/ui/LightboxProvider';

interface DesktopMockupProps {
  imageSrc?: string;
}

export default function DesktopMockup({ imageSrc }: DesktopMockupProps) {
  if (imageSrc) {
    return (
      <div className="bg-white rounded-xl border border-slate-200 shadow-xl overflow-hidden group">
        <div className="bg-slate-100/90 px-4 py-2.5 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          </div>
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-500 bg-white px-3 py-1 rounded-md border border-slate-200 shadow-xs max-w-xs truncate">
            <Lock size={10} className="text-emerald-600 shrink-0" />
            <span>portal.yourtrust.edu/superadmin</span>
          </div>
          <div className="w-8" />
        </div>
        <ZoomableImage
          src={imageSrc}
          alt="Super Admin Command Center"
          className="w-full h-auto object-cover"
        />
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
      {/* Browser Bar */}
      <div className="bg-slate-100/90 px-4 py-2.5 border-b border-slate-200 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
        </div>
        <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono text-slate-600 bg-white px-3 py-0.5 rounded-md border border-slate-200 shadow-xs max-w-[260px] sm:max-w-xs truncate">
          <Lock size={10} className="text-emerald-600 shrink-0" />
          <span>https://portal.yourtrust.edu/superadmin</span>
        </div>
        <div className="flex items-center gap-1 text-[9px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>Live 99.9%</span>
        </div>
      </div>

      {/* Internal Dashboard View */}
      <div className="p-4 sm:p-5 bg-gradient-to-br from-slate-50 via-sky-50/20 to-slate-50 text-slate-900 space-y-4 text-left">
        {/* Header Strip */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-md">
                Super Admin Cockpit
              </span>
            </div>
            <h4 className="text-sm sm:text-base font-bold text-slate-900 mt-1">
              Apex Global Education Trust
            </h4>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-semibold text-slate-500 hidden sm:inline">
              Terms: 2025-2026
            </span>
            <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center text-xs font-bold shadow-xs">
              AG
            </div>
          </div>
        </div>

        {/* 3 Metric Cards */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          <div className="bg-white p-2.5 sm:p-3 rounded-lg border border-slate-200 shadow-xs">
            <div className="flex justify-between items-start">
              <div className="p-1.5 bg-blue-50 text-blue-700 rounded-md">
                <Building2 size={14} />
              </div>
              <ArrowUpRight size={12} className="text-slate-400" />
            </div>
            <div className="mt-2">
              <p className="text-[9px] font-bold uppercase text-slate-400">Total Trusts</p>
              <p className="text-base sm:text-xl font-bold text-slate-900">4 Trusts</p>
            </div>
          </div>

          <div className="bg-white p-2.5 sm:p-3 rounded-lg border border-slate-200 shadow-xs">
            <div className="flex justify-between items-start">
              <div className="p-1.5 bg-emerald-50 text-emerald-700 rounded-md">
                <School size={14} />
              </div>
              <span className="text-[8px] font-bold bg-emerald-100 text-emerald-800 px-1 py-0.5 rounded">
                Active
              </span>
            </div>
            <div className="mt-2">
              <p className="text-[9px] font-bold uppercase text-slate-400">Schools</p>
              <p className="text-base sm:text-xl font-bold text-slate-900">18 Campuses</p>
            </div>
          </div>

          <div className="bg-white p-2.5 sm:p-3 rounded-lg border border-slate-200 shadow-xs">
            <div className="flex justify-between items-start">
              <div className="p-1.5 bg-purple-50 text-purple-700 rounded-md">
                <Users size={14} />
              </div>
              <ArrowUpRight size={12} className="text-slate-400" />
            </div>
            <div className="mt-2">
              <p className="text-[9px] font-bold uppercase text-slate-400">Sub-Admins</p>
              <p className="text-base sm:text-xl font-bold text-slate-900">36 Officers</p>
            </div>
          </div>
        </div>

        {/* Live Operational Feed preview */}
        <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-xs space-y-2">
          <div className="flex items-center justify-between text-[11px] font-bold text-slate-700 pb-1 border-b border-slate-100">
            <div className="flex items-center gap-1.5">
              <Activity size={12} className="text-blue-600" />
              <span>Live Institutional Audit Stream</span>
            </div>
            <span className="text-[9px] text-emerald-600 font-mono">Syncing Now</span>
          </div>

          <div className="space-y-1.5 text-[10px]">
            <div className="flex items-center justify-between p-1.5 bg-slate-50 rounded-md border border-slate-100">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="font-semibold text-slate-800">80G Tax Exemption Dispatched</span>
                <span className="text-slate-400">| ₹50,000 to STEM Lab</span>
              </div>
              <span className="text-slate-400 font-mono text-[9px]">2m ago</span>
            </div>
            <div className="flex items-center justify-between p-1.5 bg-slate-50 rounded-md border border-slate-100">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span className="font-semibold text-slate-800">New Alumni Mentorship Hosted</span>
                <span className="text-slate-400">| Tech & AI Career Guidance</span>
              </div>
              <span className="text-slate-400 font-mono text-[9px]">14m ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
