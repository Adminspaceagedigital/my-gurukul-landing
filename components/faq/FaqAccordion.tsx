'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Can our Educational Trust use our own custom domain name?',
      a: 'Yes, 100%. Your institutional portal runs entirely under your official brand (e.g. portal.yourtrust.edu or alumni.schoolname.org). We configure automatic CNAME routing and provision free, auto-renewing SSL encryption certificates.',
    },
    {
      q: 'How does the automated Section 80G tax exemption workflow operate?',
      a: 'When an alumnus or corporate patron donates to a verified campus cause via UPI/Cards/NetBanking, the system collects donor PAN and contact details, verifies the transaction, generates an official 80G tax certificate with your Trust registration details, and automatically emails the PDF to the donor.',
    },
    {
      q: 'Can we manage multiple schools and delegate officers under one Trust?',
      a: 'Yes. The Super Admin Command Center allows Trust Trustees to provision unlimited schools, assign dedicated Sub-Admin accounts to Principals/Officers with role-based restrictions, and maintain central oversight across all campuses.',
    },
    {
      q: 'How do alumni register, verify their identities, and connect?',
      a: 'Graduates select their school and graduation batch year, verify their email address, and instantly gain access to the LinkedIn-style Community Feed, 1-on-1 Mentorship Booking, Job Board, and Searchable Alumni Directory.',
    },
    {
      q: 'What is the deployment timeline to launch our institutional network?',
      a: 'Because My Gurukul is pre-architected for rapid institutional deployment, an entire educational trust with multiple campuses can be configured, branded, and live in less than 24 hours with zero operational downtime.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-transparent via-slate-50/50 to-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider">
            <HelpCircle size={13} />
            <span>Institutional Clarity & FAQ</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            Everything you need to know about deploying My Gurukul across your educational campuses.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3 text-left">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-4 hover:bg-slate-50 transition-colors"
                >
                  <span className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3 font-medium">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
