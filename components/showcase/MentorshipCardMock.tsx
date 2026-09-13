'use client';

import React from 'react';
import {
  Briefcase,
  Users,
  Calendar,
  CheckCircle2,
  Building2,
  ExternalLink,
  Sparkles,
} from 'lucide-react';

interface Props {
  imageSrc?: string;
}

export default function MentorshipCardMock({ imageSrc }: Props) {
  if (imageSrc) {
    return (
      <div className="bg-white rounded-xl border border-slate-200 shadow-md overflow-hidden">
        <img src={imageSrc} alt="Alumni Mentorship & Career Hub" className="w-full h-auto object-cover" />
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-md p-5 sm:p-6 space-y-4 text-left">
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md border border-purple-200">
            Alumni Mentorship & Career Network
          </span>
          <h4 className="text-base font-bold text-slate-900 mt-1">
            Active 1-on-1 Guidance & Verified Job Postings
          </h4>
        </div>
        <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
          Live Session Ready
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* Mentorship Slot Card */}
        <div className="p-4 bg-gradient-to-br from-purple-50/50 via-white to-purple-50/20 rounded-xl border border-purple-200 space-y-2.5">
          <div className="flex justify-between items-start">
            <span className="text-[9px] font-bold uppercase text-purple-800 bg-white px-2 py-0.5 rounded border border-purple-200">
              Tech Leadership
            </span>
            <span className="text-[10px] text-slate-500 font-mono">Slot: Sat 4 PM</span>
          </div>
          <p className="text-xs font-bold text-slate-900">
            Roadmap to FAANG & System Design for 3rd/4th Year Engineers
          </p>
          <div className="flex items-center gap-2 text-[11px] text-slate-600">
            <div className="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-[10px]">
              AK
            </div>
            <div>
              <p className="font-bold text-slate-800 leading-tight">Ananya Kulkarni</p>
              <p className="text-[9px] text-slate-400">Senior Staff Eng @ Amazon (Batch 2017)</p>
            </div>
          </div>
          <button className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-xs font-bold shadow-xs transition-colors flex items-center justify-center gap-1.5">
            <CheckCircle2 size={13} />
            <span>Register Mentorship Session</span>
          </button>
        </div>

        {/* Career Post Card */}
        <div className="p-4 bg-gradient-to-br from-blue-50/50 via-white to-blue-50/20 rounded-xl border border-blue-200 space-y-2.5">
          <div className="flex justify-between items-start">
            <span className="text-[9px] font-bold uppercase text-blue-800 bg-white px-2 py-0.5 rounded border border-blue-200">
              Direct Referral
            </span>
            <span className="text-[10px] font-bold text-emerald-700">₹12 - 16 LPA</span>
          </div>
          <p className="text-xs font-bold text-slate-900">
            Junior DevOps & Cloud Infrastructure Engineer
          </p>
          <div className="flex items-center gap-2 text-[11px] text-slate-600">
            <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-[10px]">
              MS
            </div>
            <div>
              <p className="font-bold text-slate-800 leading-tight">Mohsin Sayyed</p>
              <p className="text-[9px] text-slate-400">VP Cloud @ Zynteq (Batch 2015)</p>
            </div>
          </div>
          <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold shadow-xs transition-colors flex items-center justify-center gap-1.5">
            <Briefcase size={13} />
            <span>Apply with 1-Click Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
}
