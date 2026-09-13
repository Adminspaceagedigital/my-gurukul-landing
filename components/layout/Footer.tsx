'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0A1931] text-slate-400 text-xs py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 text-center md:text-left">
          {/* Brand & Purpose */}
          <div className="space-y-3 max-w-sm">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <Image
                src="/my-gurukul.png"
                alt="My Gurukul"
                width={70}
                height={70}
                className="h-10 w-auto object-contain brightness-0 invert"
              />
              <div>
                <p className="text-white font-bold text-sm tracking-tight">My Gurukul</p>
                <p className="text-[11px] text-slate-400">Institutional Platform</p>
              </div>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              The sovereign multi-tenant digital platform for Educational Trusts, school leadership, and global alumni networks.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs font-semibold text-slate-300">
            <a href="/#home" className="hover:text-white transition-colors">
              Home
            </a>
            <a href="/#about" className="hover:text-white transition-colors">
              About & Tiers
            </a>
            <a href="/#features" className="hover:text-white transition-colors">
              Features
            </a>
            <a href="/#onboard" className="hover:text-white transition-colors">
              Onboard
            </a>
            <Link href="/documentation" className="hover:text-white transition-colors">
              Documentation
            </Link>
            <a href="/#contact" className="hover:text-white transition-colors">
              Contact Demo
            </a>
          </div>

          {/* Security & Verification Pill */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-3 py-1 rounded-lg">
              <ShieldCheck size={14} />
              <span>Section 80G Tax Compliant</span>
            </span>
            <span className="text-[11px] text-slate-500">
              PostgreSQL Schema Isolation & 2FA
            </span>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} My Gurukul Institutional Platform. All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Enterprise SLA 99.9%</span>
            <span>•</span>
            <Link href="/documentation" className="hover:text-white transition-colors">
              API Docs
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
