'use client';

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Building2, Mail, Phone, School, ShieldCheck, Loader2, Sparkles, Clock, Lock } from 'lucide-react';

export default function BookingSection() {
  const [formData, setFormData] = useState({
    institutionName: '',
    email: '',
    phone: '',
    campusCount: '1-5',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/demo-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setSubmitted(true);
      }
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#0A1931] via-[#0F284E] to-[#122E54] text-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl border border-slate-700/70 relative overflow-hidden text-left">
          {/* Subtle ambient lighting */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
            {/* Left Column: Pitch & Value Pillars */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-bold uppercase tracking-wider text-[#AAFFC7]">
                <Sparkles size={12} />
                <span>Institutional Transformation</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
                Bring Your Entire Educational Network into the Modern Era.
              </h2>

              <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                Connect all your campuses, empower your school principals, and build a flourishing, self-funding alumni community in less than 24 hours.
              </p>

              {/* 3 Core Value Pillars */}
              <div className="space-y-3.5 pt-2 text-xs sm:text-sm text-slate-200">
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400 mt-0.5 shrink-0">
                    <CheckCircle2 size={16} />
                  </div>
                  <span>Sovereign custom domain setup with free automated SSL</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400 mt-0.5 shrink-0">
                    <CheckCircle2 size={16} />
                  </div>
                  <span>Automated Indian Section 80G tax receipt compliance</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400 mt-0.5 shrink-0">
                    <CheckCircle2 size={16} />
                  </div>
                  <span>Full student records and multi-campus sub-admin roster</span>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-blue-400" />
                  <span>24-Hour Network Onboarding</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock size={14} className="text-emerald-400" />
                  <span>Bank-Grade Data Privacy</span>
                </div>
              </div>
            </div>

            {/* Right Column: High-Conversion Demo Booking Card */}
            <div className="lg:col-span-6 bg-white text-slate-900 p-7 sm:p-9 rounded-2xl shadow-2xl border border-slate-100">
              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200 shadow-sm">
                    <CheckCircle2 size={32} />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-slate-900">Demonstration Scheduled!</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
                      Thank you. Our institutional solutions team will contact you within 2 business hours to confirm your private walkthrough.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-slate-100 pb-3">
                    <h3 className="text-lg font-bold text-slate-900">
                      Request Private Institutional Demonstration
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Schedule a 20-minute platform walkthrough tailored for your leadership team.
                    </p>
                  </div>

                  {/* Field 1: Institution / Trust Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      Institution / Trust Name
                    </label>
                    <div className="relative">
                      <Building2 size={16} className="absolute left-3.5 top-3 text-slate-400" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Apex Global Education Trust"
                        value={formData.institutionName}
                        onChange={(e) => setFormData({ ...formData, institutionName: e.target.value })}
                        className="w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 focus:bg-white transition-all placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  {/* Two-Column: Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">
                        Official Work Email
                      </label>
                      <div className="relative">
                        <Mail size={16} className="absolute left-3.5 top-3 text-slate-400" />
                        <input
                          type="email"
                          required
                          placeholder="trustee@institution.edu"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 focus:bg-white transition-all placeholder:text-slate-400"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">
                        Phone / WhatsApp
                      </label>
                      <div className="relative">
                        <Phone size={16} className="absolute left-3.5 top-3 text-slate-400" />
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 focus:bg-white transition-all placeholder:text-slate-400"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Field 3: Campuses to Onboard */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      Campuses / Schools to Onboard
                    </label>
                    <div className="relative">
                      <School size={16} className="absolute left-3.5 top-3 text-slate-400 pointer-events-none" />
                      <select
                        value={formData.campusCount}
                        onChange={(e) => setFormData({ ...formData, campusCount: e.target.value })}
                        className="w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 focus:bg-white transition-all appearance-none cursor-pointer"
                      >
                        <option value="1">1 Single Campus / School</option>
                        <option value="2-5">2 to 5 Campuses</option>
                        <option value="6-15">6 to 15 Campuses</option>
                        <option value="16+">16+ Multi-Trust Network</option>
                      </select>
                    </div>
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 bg-[#0066FF] hover:bg-blue-700 text-white rounded-xl text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 mt-2"
                  >
                    {loading ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        <span>Scheduling Demonstration...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Consultation Request</span>
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-slate-400">
                    Strict privacy assured. Data is protected by institutional compliance standards.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
