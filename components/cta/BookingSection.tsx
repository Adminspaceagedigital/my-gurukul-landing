'use client';

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Building2, Mail, Phone, School, Sparkles, Loader2 } from 'lucide-react';

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
      }
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#0A1931] via-[#0F284E] to-[#1A3D63] text-white p-8 sm:p-12 rounded-xl shadow-xl border border-slate-700/60 relative overflow-hidden text-left">
          {/* Decorative ambient background */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left pitch */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#AAFFC7] bg-white/10 px-2.5 py-0.5 rounded-md border border-white/10">
                Institutional Transformation
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Bring Your Entire Educational Network into the Modern Era.
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                Connect all your campuses, empower your school principals, and build a flourishing, self-funding alumni community in less than 24 hours.
              </p>

              <div className="space-y-2 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#AAFFC7]" />
                  <span>Sovereign custom domain setup with free SSL</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#AAFFC7]" />
                  <span>Automated Indian Section 80G tax receipt compliance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#AAFFC7]" />
                  <span>Full student records and multi-campus sub-admin roster</span>
                </div>
              </div>
            </div>

            {/* Right form */}
            <div className="lg:col-span-6 bg-white text-slate-900 p-6 sm:p-7 rounded-xl shadow-lg border border-slate-200">
              {submitted ? (
                <div className="text-center py-8 space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                    <CheckCircle2 size={24} />
                  </div>
                  <h4 className="text-base font-bold text-slate-900">Institutional Consultation Scheduled!</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium max-w-sm mx-auto">
                    Thank you. Our institutional architecture team will reach out to schedule a personalized demonstration for your trust.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <h4 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-2">
                    Request Private Institutional Demonstration
                  </h4>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-600">
                      Institution / Trust Name
                    </label>
                    <div className="relative">
                      <Building2 size={14} className="absolute left-3 top-3 text-slate-400" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Apex Global Education Trust"
                        value={formData.institutionName}
                        onChange={(e) => setFormData({ ...formData, institutionName: e.target.value })}
                        className="w-full pl-8 pr-3 py-2 text-xs bg-slate-50 rounded-lg border border-slate-200 focus:outline-none focus:border-blue-600 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-600">
                        Official Work Email
                      </label>
                      <div className="relative">
                        <Mail size={14} className="absolute left-3 top-3 text-slate-400" />
                        <input
                          type="email"
                          required
                          placeholder="trustee@institution.edu"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-8 pr-3 py-2 text-xs bg-slate-50 rounded-lg border border-slate-200 focus:outline-none focus:border-blue-600 focus:bg-white"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-600">
                        Phone / WhatsApp
                      </label>
                      <div className="relative">
                        <Phone size={14} className="absolute left-3 top-3 text-slate-400" />
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-8 pr-3 py-2 text-xs bg-slate-50 rounded-lg border border-slate-200 focus:outline-none focus:border-blue-600 focus:bg-white"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-600">
                      Campuses / Schools to Onboard
                    </label>
                    <select
                      value={formData.campusCount}
                      onChange={(e) => setFormData({ ...formData, campusCount: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-slate-50 rounded-lg border border-slate-200 focus:outline-none focus:border-blue-600 focus:bg-white"
                    >
                      <option value="1">1 Single Campus / School</option>
                      <option value="2-5">2 to 5 Campuses</option>
                      <option value="6-15">6 to 15 Campuses</option>
                      <option value="16+">16+ Multi-Trust Network</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <Loader2 size={14} className="animate-spin" />
                        <span>Processing Consultation...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Consultation Request</span>
                        <ArrowRight size={14} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
