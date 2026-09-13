'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'About & Tiers', href: '/#about' },
    { name: 'Features', href: '/#features' },
    { name: 'Onboard', href: '/#onboard' },
    { name: 'Documentation', href: '/documentation' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
      <div
        className={`max-w-7xl mx-auto rounded-xl transition-all duration-300 flex items-center justify-between px-4 sm:px-6 py-2.5 ${
          scrolled
            ? 'glass-border shadow-md bg-white/85 backdrop-blur-md border border-slate-200/80'
            : 'bg-transparent border border-transparent shadow-none'
        }`}
      >
        {/* Brand Logo Only */}
        <Link href="#home" className="flex items-center group">
          <Image
            src="/my-gurukul.png"
            alt="My Gurukul"
            width={100}
            height={100}
            className="h-12 md:h-14 w-auto object-contain mix-blend-multiply drop-shadow-xs transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </Link>

        {/* Desktop Nav Links (Text only, clean) */}
        <nav className="hidden lg:flex items-center gap-1.5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-semibold text-slate-700 hover:text-blue-600 px-3.5 py-1.5 rounded-lg hover:bg-slate-100/70 transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-2.5">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-emerald-700 bg-emerald-50/90 border border-emerald-200/80 px-2.5 py-1 rounded-lg backdrop-blur-xs tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            LIVE NETWORK
          </span>
          <a
            href="#contact"
            className="text-xs font-bold text-white bg-[#0A1931] hover:bg-blue-700 px-4 py-2 rounded-xl shadow-sm hover:shadow-md transition-all flex items-center gap-1.5 group"
          >
            <span>Request Demo</span>
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl border border-slate-200/80 bg-white/90 text-slate-700 shadow-xs backdrop-blur-xs"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-xl p-5 shadow-xl max-w-7xl mx-auto animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-1 text-left">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-slate-700 hover:text-blue-700 py-2.5 px-3 rounded-lg hover:bg-slate-50 flex items-center justify-between border-b border-slate-100"
              >
                <span>{link.name}</span>
                <ArrowUpRight size={14} className="text-slate-400" />
              </a>
            ))}
            <div className="pt-3">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center text-xs font-bold text-white bg-[#0A1931] py-3 rounded-xl shadow-md block"
              >
                Request Institutional Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

