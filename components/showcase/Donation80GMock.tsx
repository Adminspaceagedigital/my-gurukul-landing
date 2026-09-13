'use client';

import React from 'react';
import { Heart, FileCheck2, ShieldCheck, CheckCircle2, Award } from 'lucide-react';

interface Props {
  imageSrc?: string;
}

export default function Donation80GMock({ imageSrc }: Props) {
  if (imageSrc) {
    return (
      <div className="bg-white rounded-xl border border-slate-200 shadow-md overflow-hidden">
        <img src={imageSrc} alt="Philanthropy and 80G Tax Engine" className="w-full h-auto object-cover" />
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-md p-5 sm:p-6 space-y-4 text-left">
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
            Institutional Philanthropy Suite
          </span>
          <h4 className="text-base font-bold text-slate-900 mt-1">
            Crowdfunded Campus Upgrades & Automated 80G Receipts
          </h4>
        </div>
        <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-200">
          Section 80G Verified
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Cause Crowdfunding Card */}
        <div className="p-4 bg-gradient-to-br from-emerald-50/50 via-white to-emerald-50/20 rounded-xl border border-emerald-200 space-y-3">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-[9px] font-bold uppercase text-emerald-800 bg-white px-2 py-0.5 rounded border border-emerald-200">
                Active Infrastructure Cause
              </span>
              <p className="text-sm font-bold text-slate-900 mt-1">
                Modern AI & Robotics Lab Upgrade
              </p>
            </div>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
              82% Funded
            </span>
          </div>

          <div className="space-y-1">
            <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
              <div className="bg-emerald-500 h-full rounded-full w-[82%]" />
            </div>
            <div className="flex justify-between text-[10px] text-slate-500 font-semibold">
              <span>Raised: ₹ 4,10,000</span>
              <span>Target: ₹ 5,00,000</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-1">
            <span className="text-[10px] text-slate-600 font-medium">34 Alumni Donors Contributed</span>
            <button className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold shadow-xs">
              Donate with 80G Rebate →
            </button>
          </div>
        </div>

        {/* 80G Instant Certificate Ledger Card */}
        <div className="p-4 bg-gradient-to-br from-blue-50/50 via-white to-blue-50/20 rounded-xl border border-blue-200 space-y-2.5">
          <div className="flex justify-between items-center">
            <span className="text-[9px] font-bold uppercase text-blue-800 bg-white px-2 py-0.5 rounded border border-blue-200">
              Instant Compliance Receipt
            </span>
            <span className="text-[9px] font-mono text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">
              APPROVED & SENT
            </span>
          </div>

          <div className="bg-white p-2.5 rounded-lg border border-slate-200 space-y-1 text-[11px]">
            <div className="flex justify-between text-slate-500">
              <span>Certificate No:</span>
              <span className="font-mono font-bold text-slate-800">EDU-80G-2025-0842</span>
            </div>
            <div className="flex justify-between text-slate-500">
              <span>Donor PAN:</span>
              <span className="font-mono font-bold text-slate-800">ABCDE1234F</span>
            </div>
            <div className="flex justify-between text-slate-500">
              <span>Exemption Eligible:</span>
              <span className="font-bold text-emerald-700">₹ 50,000 (100% Tax Deductible)</span>
            </div>
          </div>

          <p className="text-[10px] text-slate-500 italic">
            * Formal PDF Tax Certificate automatically emailed to donor with trust digital signature.
          </p>
        </div>
      </div>
    </div>
  );
}
