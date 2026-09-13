'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Heart, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 text-xs py-14 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Image
                src="/my-gurukul.png"
                alt="My Gurukul"
                width={60}
                height={60}
                className="h-10 w-auto object-contain brightness-0 invert"
              />
              <div>
                <p className="text-white font-bold text-sm tracking-tight">My Gurukul</p>
                <p className="text-[10px] text-slate-400">Institutional Platform</p>
              </div>
            </div>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              The flagship digital ecosystem empowering educational trusts, school leadership, and global alumni networks with brand sovereignty and 80G philanthropy.
            </p>
          </div>

          {/* Col 2: Platform */}
          <div className="space-y-2">
            <p className="text-white font-bold text-xs uppercase tracking-wider">Platform Hubs</p>
            <ul className="space-y-1.5 text-[11px]">
              <li><a href="#platform" className="hover:text-white transition-colors">Trust Governance Cockpit</a></li>
              <li><a href="#alumni" className="hover:text-white transition-colors">Alumni Career & Mentorship</a></li>
              <li><a href="#philanthropy" className="hover:text-white transition-colors">Section 80G Philanthropy</a></li>
              <li><a href="#platform" className="hover:text-white transition-colors">Global Graduate Directory</a></li>
            </ul>
          </div>

          {/* Col 3: Leadership */}
          <div className="space-y-2">
            <p className="text-white font-bold text-xs uppercase tracking-wider">Solutions</p>
            <ul className="space-y-1.5 text-[11px]">
              <li><a href="#solutions" className="hover:text-white transition-colors">For Trustees & Founders</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">For Principals & Deans</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">For Distinguished Alumni</a></li>
              <li><a href="#calculator" className="hover:text-white transition-colors">Philanthropy Estimator</a></li>
            </ul>
          </div>

          {/* Col 4: Trust & Compliance */}
          <div className="space-y-2">
            <p className="text-white font-bold text-xs uppercase tracking-wider">Enterprise Security</p>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              PostgreSQL Schema Isolation • Mandatory TOTP 2FA • TLS 1.3 Bank-Grade Encryption • Automated Section 80G Indian Tax Exemption.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 text-[10px] text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-2.5 py-1 rounded-md">
                <ShieldCheck size={12} />
                <span>99.9% Uptime SLA Verified</span>
              </span>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <p>© {new Date().getFullYear()} My Gurukul Institutional Platform. All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-400">
            <a href="#security" className="hover:text-white transition-colors">Security Architecture</a>
            <a href="#contact" className="hover:text-white transition-colors">Institutional Inquiries</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
