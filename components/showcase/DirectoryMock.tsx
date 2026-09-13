'use client';

import React from 'react';
import { Search, MapPin, Building2, GraduationCap, ExternalLink, Globe, Mail, Filter } from 'lucide-react';

interface Props {
  imageSrc?: string;
}

export default function DirectoryMock({ imageSrc }: Props) {
  if (imageSrc) {
    return (
      <div className="bg-white rounded-xl border border-slate-200 shadow-md overflow-hidden">
        <img src={imageSrc} alt="Global Alumni Directory" className="w-full h-auto object-cover" />
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-md p-5 sm:p-6 space-y-4 text-left">
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200">
            Global Alumni Directory
          </span>
          <h4 className="text-base font-bold text-slate-900 mt-1">
            Search 10,000+ Verified Graduates Across 40+ Countries
          </h4>
        </div>
        <span className="text-xs font-bold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-lg border border-purple-200">
          Search by Batch / Industry
        </span>
      </div>

      {/* Search Filter Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200 text-xs">
        <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-md border border-slate-200 shadow-xs">
          <Search size={14} className="text-slate-400" />
          <span className="text-slate-700 font-medium truncate">Search by Name, Skill, Company...</span>
        </div>
        <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-md border border-slate-200 shadow-xs text-slate-600">
          <GraduationCap size={14} className="text-slate-400" />
          <span>Batch: 2015 - 2024</span>
        </div>
        <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-md border border-slate-200 shadow-xs text-slate-600">
          <MapPin size={14} className="text-slate-400" />
          <span>City: Mumbai, London, SF...</span>
        </div>
      </div>

      {/* Directory Member Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-xs flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-sm">
              ZS
            </div>
            <div>
              <h5 className="text-xs font-bold text-slate-900">Dr. Zoya Shaikh</h5>
              <p className="text-[11px] text-slate-500 font-medium">Chief of Cardiology @ Apollo Hospitals</p>
              <p className="text-[9px] text-slate-400">Batch 2012 • St. Mary's Campus</p>
            </div>
          </div>
          <button className="p-2 bg-slate-50 hover:bg-blue-50 text-slate-600 hover:text-blue-700 rounded-lg border border-slate-200 transition-colors">
            <Globe size={14} />
          </button>
        </div>

        <div className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-xs flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">
              FA
            </div>
            <div>
              <h5 className="text-xs font-bold text-slate-900">Faizan Ansari</h5>
              <p className="text-[11px] text-slate-500 font-medium">Founder & CEO @ FinTech Scaleup</p>
              <p className="text-[9px] text-slate-400">Batch 2016 • Main Campus</p>
            </div>
          </div>
          <button className="p-2 bg-slate-50 hover:bg-blue-50 text-slate-600 hover:text-blue-700 rounded-lg border border-slate-200 transition-colors">
            <Globe size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
