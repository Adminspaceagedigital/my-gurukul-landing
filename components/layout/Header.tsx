'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ArrowRight, ChevronRight, Sparkles } from 'lucide-react';

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
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Onboard', href: '#onboard' },
    { name: 'Documentation', href: '#documentation' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="#home" className="flex items-center gap-3 group">
          <Image
            src="/my-gurukul.png"
            alt="My Gurukul Logo"
            width={70}
            height={70}
            className="h-12 md:h-14 w-auto object-contain mix-blend-multiply drop-shadow-xs transition-transform duration-300 group-hover:scale-105"
            priority
          />
          <div className="hidden sm:flex flex-col">
            <span className="text-[10px] font-bold text-blue-700 uppercase tracking-widest bg-blue-50 border border-blue-200/60 px-2 py-0.5 rounded-lg w-fit font-sans">
              Enterprise Ecosystem
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2 bg-white/80 border border-slate-200/80 px-4 py-1.5 rounded-xl shadow-xs backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-bold text-slate-600 hover:text-blue-700 px-3.5 py-1.5 rounded-lg hover:bg-slate-100/70 transition-all font-sans"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 px-4 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-1.5 group font-sans"
          >
            <span>Request Demo</span>
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl border border-slate-200 bg-white/90 text-slate-700 shadow-xs"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-5 shadow-lg animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold text-slate-700 hover:text-blue-700 py-2.5 px-3 rounded-xl hover:bg-slate-50 border-b border-slate-100 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ChevronRight size={16} className="text-slate-400" />
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-2.5">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center text-xs font-bold text-white bg-blue-600 py-3 rounded-xl shadow-md"
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
