'use client';

import React, { useState } from 'react';
import { Calculator, Sparkles, TrendingUp, Handshake, HeartHandshake, ArrowRight } from 'lucide-react';

export default function ImpactCalculator() {
  const [alumniCount, setAlumniCount] = useState<number>(5000);
  const [avgDonation, setAvgDonation] = useState<number>(2500);

  // Assumptions: 10% active participation rate for annual fund
  const activeDonors = Math.round(alumniCount * 0.10);
  const annualAlumniFund = activeDonors * avgDonation;
  
  // CSR multiplier: ~35% of total alumni fund generated through corporate matching & CSR referrals
  const csrPipeline = Math.round(annualAlumniFund * 0.35);
  const totalEndowment = annualAlumniFund + csrPipeline;

  const formatCurrency = (amount: number) => {
    if (amount >= 10000000) {
      return `₹ ${(amount / 10000000).toFixed(2)} Crore`;
    }
    if (amount >= 100000) {
      return `₹ ${(amount / 100000).toFixed(2)} Lakhs`;
    }
    return `₹ ${amount.toLocaleString('en-IN')}`;
  };

  return (
    <section id="calculator" className="py-20 bg-gradient-to-br from-blue-50/40 via-sky-50/20 to-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Calculator size={13} />
            <span>Interactive Philanthropy & Endowment Estimator</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Calculate the Dormant Financial Power of Your Alumni Network
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            See how much non-tuition endowment capital and corporate CSR grants your institution can unlock with an organized digital ecosystem.
          </p>
        </div>

        {/* Interactive Estimator Canvas */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-xl p-6 sm:p-10 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Sliders (Left 6-7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Slider 1: Total Alumni Base */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Total Graduated Alumni Base
                </label>
                <span className="text-sm font-extrabold text-blue-700 bg-blue-50 px-3 py-1 rounded-lg border border-blue-200">
                  {alumniCount.toLocaleString('en-IN')} Graduates
                </span>
              </div>
              <input
                type="range"
                min="1000"
                max="50000"
                step="1000"
                value={alumniCount}
                onChange={(e) => setAlumniCount(Number(e.target.value))}
                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                <span>1,000 Alumni</span>
                <span>25,000</span>
                <span>50,000+ Alumni</span>
              </div>
            </div>

            {/* Slider 2: Average Annual Contribution */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Average Annual Giving per Supporter
                </label>
                <span className="text-sm font-extrabold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200">
                  ₹ {avgDonation.toLocaleString('en-IN')} / year
                </span>
              </div>
              <input
                type="range"
                min="1000"
                max="15000"
                step="500"
                value={avgDonation}
                onChange={(e) => setAvgDonation(Number(e.target.value))}
                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                <span>₹ 1,000</span>
                <span>₹ 7,500</span>
                <span>₹ 15,000 / year</span>
              </div>
            </div>

            {/* Explanatory notes */}
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1 text-xs text-slate-600">
              <p className="font-bold text-slate-900">Conservative Industry Modeling:</p>
              <p className="text-[11px] leading-relaxed">
                Calculated on a standard <strong>10% active participation rate</strong> of verified alumni plus a <strong>35% corporate CSR matching pipeline</strong> from alumni employers.
              </p>
            </div>
          </div>

          {/* Results Output Card (Right 5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0B1525] to-[#162A45] text-white p-6 sm:p-7 rounded-xl shadow-xl space-y-5 text-left">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#AAFFC7] bg-white/10 px-2.5 py-0.5 rounded-md border border-white/10">
                Annual Institutional Upside
              </span>
              <p className="text-2xl sm:text-3xl font-extrabold text-white mt-2 tracking-tight">
                {formatCurrency(totalEndowment)}
              </p>
              <p className="text-xs text-slate-300 mt-0.5">Estimated Total Annual Philanthropy</p>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/10 text-xs">
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Direct Alumni Giving:</span>
                <span className="font-bold text-white">{formatCurrency(annualAlumniFund)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Corporate CSR Referrals:</span>
                <span className="font-bold text-[#AAFFC7]">{formatCurrency(csrPipeline)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Section 80G Tax Exemption:</span>
                <span className="font-bold text-emerald-400">100% Tax Deductible</span>
              </div>
            </div>

            <a
              href="#contact"
              className="w-full block text-center py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold shadow-md transition-all"
            >
              Unlock This Capital for Your Trust →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
