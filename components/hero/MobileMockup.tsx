'use client';

import React from 'react';
import {
  Sparkles,
  Briefcase,
  Heart,
  Handshake,
  UserCheck,
  Send,
  Building2,
  Calendar,
  CheckCircle2,
} from 'lucide-react';

import { ZoomableImage } from '@/components/ui/LightboxProvider';

interface MobileMockupProps {
  imageSrc?: string;
}

export default function MobileMockup({ imageSrc }: MobileMockupProps) {
  if (imageSrc) {
    return (
      <div className="w-[280px] sm:w-[310px] mx-auto bg-slate-900 rounded-xl p-2.5 shadow-2xl border border-slate-700">
        <div className="bg-white rounded-lg overflow-hidden border border-slate-200">
          <ZoomableImage src={imageSrc} alt="Alumni Mobile Portal" className="w-full h-auto object-cover" />
        </div>
      </div>
    );
  }

  return (
    <div className="w-[280px] sm:w-[310px] mx-auto bg-slate-900 rounded-xl p-2.5 shadow-2xl border border-slate-800 transition-all duration-300 hover:scale-[1.02]">
      {/* Phone Bezel Top */}
      <div className="bg-slate-900 pt-1 pb-2 flex justify-center items-center relative">
        <div className="w-16 h-3 bg-slate-800 rounded-full flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-950/80 mr-2" />
          <div className="w-5 h-1 bg-slate-700 rounded-full" />
        </div>
      </div>

      {/* Screen Body */}
      <div className="bg-gradient-to-b from-sky-50/70 via-white to-slate-50 rounded-lg overflow-hidden border border-slate-200 p-3 space-y-2.5 text-left text-slate-900 text-xs">
        {/* Mobile Header */}
        <div className="flex items-center justify-between pb-2 border-b border-slate-200">
          <div className="flex items-center gap-1.5">
            <div className="w-6 h-6 rounded-md bg-blue-600 text-white flex items-center justify-center font-bold text-[10px]">
              MG
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-900 leading-tight">Alumni Network</p>
              <p className="text-[8px] text-slate-500 font-medium">Batch 2020 • Computer Engg</p>
            </div>
          </div>
          <span className="text-[9px] font-bold bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded-md">
            Verified
          </span>
        </div>

        {/* Live Mentorship Card */}
        <div className="bg-white p-2.5 rounded-lg border border-purple-200/80 shadow-xs space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-[8px] font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-1.5 py-0.5 rounded border border-purple-200">
              Mentorship Open
            </span>
            <span className="text-[8px] text-slate-400 font-mono">Today, 5:00 PM</span>
          </div>
          <p className="text-[11px] font-bold text-slate-900 leading-snug">
            1-on-1 Guidance: Cracking Product & Tech Roles
          </p>
          <div className="flex items-center gap-1.5 text-[9px] text-slate-600">
            <div className="w-4 h-4 rounded-full bg-slate-200 text-[8px] flex items-center justify-center font-bold">
              RA
            </div>
            <span>Rahul Agrawal • Senior SDE @ Google</span>
          </div>
          <button className="w-full py-1 text-[10px] font-bold text-white bg-purple-600 rounded-md shadow-xs text-center flex items-center justify-center gap-1">
            <CheckCircle2 size={10} />
            <span>One-Tap Register (Prefilled)</span>
          </button>
        </div>

        {/* Live Job Opportunity Card */}
        <div className="bg-white p-2.5 rounded-lg border border-blue-200/80 shadow-xs space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-[8px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200">
              Hiring Alumni
            </span>
            <span className="text-[9px] font-bold text-emerald-700">₹14 - 18 LPA</span>
          </div>
          <p className="text-[11px] font-bold text-slate-900 leading-snug">
            Associate Product Manager
          </p>
          <div className="flex items-center justify-between text-[9px] text-slate-500">
            <span>Microsoft • Hyderabad (Hybrid)</span>
            <span className="text-blue-600 font-bold">Apply Now →</span>
          </div>
        </div>

        {/* Live School Cause Mini Bar */}
        <div className="bg-amber-50/80 p-2 rounded-lg border border-amber-200/80 flex items-center justify-between">
          <div>
            <p className="text-[9px] font-bold text-amber-900">Campus STEM Lab Fund</p>
            <p className="text-[8px] text-amber-700 font-medium">₹3.8L of ₹5L raised • 80G Tax Exemption</p>
          </div>
          <span className="text-[9px] font-bold text-amber-900 bg-white px-2 py-0.5 rounded-md border border-amber-300">
            76%
          </span>
        </div>
      </div>
    </div>
  );
}
