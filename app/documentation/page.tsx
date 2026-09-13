'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Home,
  ChevronRight,
  ChevronDown,
  Building2,
  School,
  GraduationCap,
  ShieldCheck,
  FileText,
  Copy,
  Check,
  Menu as MenuIcon,
  X,
  ExternalLink,
  Lock,
  Search,
  BookOpen,
  ArrowUpRight,
  Globe,
  Database,
  QrCode,
  Users,
  Terminal,
  Zap,
} from 'lucide-react';
import { LightboxProvider, ZoomableImage } from '@/components/ui/LightboxProvider';

interface SubPage {
  id: string;
  title: string;
}

interface NavCategory {
  id: string;
  title: string;
  subPages?: SubPage[];
}

export default function DocumentationPage() {
  const [activeTab, setActiveTab] = useState<'guide' | 'api' | 'announcements'>('guide');
  const [activeCategory, setActiveCategory] = useState<string>('overview');
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    'getting-started': true,
    'super-admin': true,
    'sub-admin': false,
    'alumni-portal': false,
    'security-compliance': false,
    'api-docs': false,
  });
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState<boolean>(false);

  const toggleCategory = (catId: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [catId]: !prev[catId],
    }));
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Nav categories matching Zomato's left-sidebar structure
  const categories: NavCategory[] = [
    { id: 'overview', title: 'Overview' },
    {
      id: 'getting-started',
      title: 'Getting Started',
      subPages: [
        { id: 'architecture-tiers', title: 'Architecture & 3-Tiers' },
        { id: 'deployment-dns', title: '24-Hour Deployment & DNS' },
        { id: 'launch-checklist', title: 'Institutional Launch Checklist' },
      ],
    },
    {
      id: 'super-admin',
      title: 'Super Admin (Trust)',
      subPages: [
        { id: 'trust-cockpit', title: 'Command Center & Analytics' },
        { id: 'provision-schools', title: 'Provisioning Campuses' },
        { id: 'subadmin-access', title: 'Principal Role Delegation' },
        { id: 'tax-engine', title: 'Section 80G Tax Engine' },
        { id: 'audit-stream', title: 'Cryptographic Audit Stream' },
      ],
    },
    {
      id: 'sub-admin',
      title: 'Sub-Admin (School)',
      subPages: [
        { id: 'school-ops', title: 'Campus Academic Operations' },
        { id: 'student-csv', title: 'Student Roster CSV Ingestion' },
        { id: 'graduation-alumni', title: 'Batch Graduation & Conversion' },
        { id: 'events-memories', title: 'Campus Memories & Reunions' },
      ],
    },
    {
      id: 'alumni-portal',
      title: 'Alumni Ecosystem',
      subPages: [
        { id: 'alumni-login', title: '1-Click Verification Onboarding' },
        { id: 'social-jobs', title: 'Professional Feed & Job Board' },
        { id: 'mentorship', title: '1-on-1 Student Mentorship' },
        { id: 'donations-80g', title: 'Endowment Giving & Receipts' },
      ],
    },
    {
      id: 'security-compliance',
      title: 'Security & 80G Tax',
      subPages: [
        { id: 'totp-2fa', title: 'Mandatory TOTP 2FA Vault' },
        { id: 'schema-isolation', title: 'PostgreSQL Schema Isolation' },
        { id: 'audit-compliance', title: 'Indian Trust Audit Filing' },
      ],
    },
    {
      id: 'api-docs',
      title: 'API Documentation',
      subPages: [
        { id: 'webhooks-payments', title: 'Razorpay / UPI Webhooks' },
        { id: 'student-sync-api', title: 'ERP Student Sync API' },
      ],
    },
    { id: 'glossary', title: 'Glossary' },
  ];

  // Helper to get active title and category name
  const getBreadcrumbs = () => {
    if (activeCategory === 'overview') return { category: '', title: 'Overview' };
    if (activeCategory === 'glossary') return { category: '', title: 'Glossary' };

    for (const cat of categories) {
      if (cat.subPages) {
        const found = cat.subPages.find((p) => p.id === activeCategory);
        if (found) return { category: cat.title, title: found.title };
      }
    }
    return { category: '', title: 'Overview' };
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <LightboxProvider>
      <div className="min-h-screen bg-white text-slate-800 font-sans antialiased flex flex-col">
        {/* ── 1. Top Navbar (Identical to Zomato Documentation Header) ── */}
        <header className="sticky top-0 z-50 bg-white border-b border-slate-200 px-4 sm:px-8 py-3">
          <div className="max-w-[1440px] mx-auto flex items-center justify-between">
            {/* Left: Brand Logo & Mobile Drawer Toggle */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
                className="lg:hidden p-1.5 rounded-md border border-slate-200 text-slate-600 hover:bg-slate-50"
                aria-label="Toggle Navigation"
              >
                {mobileSidebarOpen ? <X size={18} /> : <MenuIcon size={18} />}
              </button>

              <Link href="/" className="flex items-center gap-2 group">
                <Image
                  src="/my-gurukul.png"
                  alt="My Gurukul"
                  width={110}
                  height={32}
                  className="h-8 sm:h-9 w-auto object-contain mix-blend-multiply"
                  priority
                />
              </Link>
            </div>

            {/* Right: Clean Navigation Links & Login Pill */}
            <div className="flex items-center gap-5 sm:gap-8">
              <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
                <Link
                  href="/"
                  className="text-slate-700 hover:text-blue-600 transition-colors"
                >
                  Home
                </Link>
                <button
                  onClick={() => {
                    setActiveTab('guide');
                    setActiveCategory('overview');
                  }}
                  className={`transition-colors font-bold ${
                    activeTab === 'guide' ? 'text-[#0066FF]' : 'text-slate-700 hover:text-blue-600'
                  }`}
                >
                  Integration guide
                </button>
                <button
                  onClick={() => {
                    setActiveTab('announcements');
                    setActiveCategory('events-memories');
                  }}
                  className={`transition-colors ${
                    activeTab === 'announcements' ? 'text-[#0066FF] font-bold' : 'text-slate-700 hover:text-blue-600'
                  }`}
                >
                  Announcements
                </button>
                <button
                  onClick={() => {
                    setActiveTab('api');
                    setActiveCategory('webhooks-payments');
                  }}
                  className={`flex items-center gap-1 transition-colors ${
                    activeTab === 'api' ? 'text-[#0066FF] font-bold' : 'text-slate-700 hover:text-blue-600'
                  }`}
                >
                  <span>API reference</span>
                  <ChevronDown size={14} className="text-slate-500" />
                </button>
              </nav>

              {/* Login Button (Blue rounded pill) */}
              <a
                href="/#contact"
                className="bg-[#0066FF] hover:bg-[#0052CC] text-white font-bold text-xs sm:text-sm px-6 py-2 rounded-full shadow-xs transition-all flex items-center gap-1"
              >
                <span>Login</span>
              </a>
            </div>
          </div>
        </header>

        {/* ── 2. Three-Column Documentation Layout ── */}
        <div className="flex-1 max-w-[1440px] w-full mx-auto flex relative">
          {/* ──── LEFT SIDEBAR (Zomato Category Accordion) ──── */}
          <aside
            className={`fixed lg:sticky top-[57px] left-0 z-40 h-[calc(100vh-57px)] w-64 xl:w-72 bg-white border-r border-slate-200/80 overflow-y-auto p-4 transition-transform duration-200 lg:translate-x-0 ${
              mobileSidebarOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'
            }`}
          >
            <nav className="space-y-1 text-left">
              {categories.map((cat) => {
                const hasChildren = Boolean(cat.subPages && cat.subPages.length > 0);
                const isExpanded = expandedCategories[cat.id];
                const isTopLevelActive = activeCategory === cat.id;

                if (!hasChildren) {
                  return (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setActiveCategory(cat.id);
                        setMobileSidebarOpen(false);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className={`w-full text-left px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                        isTopLevelActive
                          ? 'bg-slate-100 text-[#0066FF] font-bold'
                          : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                      }`}
                    >
                      {cat.title}
                    </button>
                  );
                }

                return (
                  <div key={cat.id} className="space-y-0.5">
                    <button
                      onClick={() => toggleCategory(cat.id)}
                      className="w-full flex items-center justify-between px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                    >
                      <span>{cat.title}</span>
                      {isExpanded ? (
                        <ChevronDown size={15} className="text-slate-400" />
                      ) : (
                        <ChevronRight size={15} className="text-slate-400" />
                      )}
                    </button>

                    {/* Subpages dropdown */}
                    {isExpanded && cat.subPages && (
                      <div className="pl-4 pr-1 py-0.5 space-y-0.5 border-l border-slate-100 ml-3">
                        {cat.subPages.map((sub) => {
                          const isSubActive = activeCategory === sub.id;
                          return (
                            <button
                              key={sub.id}
                              onClick={() => {
                                setActiveCategory(sub.id);
                                setMobileSidebarOpen(false);
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                              }}
                              className={`w-full text-left px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                                isSubActive
                                  ? 'bg-slate-100 text-[#0066FF] font-bold'
                                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                              }`}
                            >
                              {sub.title}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
          </aside>

          {/* ──── CENTER MAIN CONTENT ──── */}
          <main className="flex-1 min-w-0 px-6 sm:px-12 py-8 sm:py-10 text-left">
            {/* Breadcrumb row */}
            <div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
              <Link href="/" className="hover:text-blue-600 transition-colors">
                <Home size={14} />
              </Link>
              <ChevronRight size={12} className="text-slate-400" />
              {breadcrumbs.category && (
                <>
                  <span className="text-slate-500">{breadcrumbs.category}</span>
                  <ChevronRight size={12} className="text-slate-400" />
                </>
              )}
              <span className="bg-slate-100 px-2 py-0.5 rounded text-slate-700 font-medium text-[11px]">
                {breadcrumbs.title}
              </span>
            </div>

            {/* ── ARTICLE: OVERVIEW ── */}
            {activeCategory === 'overview' && (
              <article className="space-y-10 max-w-3xl">
                <div>
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    Overview of My Gurukul Platform
                  </h1>
                  <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed font-normal">
                    My Gurukul's institutional platform offers a comprehensive suite of features to empower Educational Trusts and group universities to streamline multi-campus operations. Communication between individual school campuses, central trust offices, and alumni is facilitated through a sovereign multi-tenant architecture designed to ensure seamless data exchange and 100% brand ownership. My Gurukul platform supports the following capabilities:
                  </p>
                </div>

                {/* Sub-section 1 */}
                <section id="trust-governance" className="space-y-3 scroll-mt-24">
                  <h2 className="text-xl font-bold text-slate-900">
                    Trust Governance & Multi-Campus Management
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    The Super Admin Cockpit allows Educational Trusts to manage all subsidiary schools, colleges, and polytechnics under one central console. Trustees can provision new campus units, delegate administrative privileges to school principals, and monitor real-time student and alumni analytics.
                  </p>
                </section>

                {/* Sub-section 2 */}
                <section id="campus-operations" className="space-y-3 scroll-mt-24">
                  <h2 className="text-xl font-bold text-slate-900">
                    Campus Operations & Batch Management
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    With the Sub-Admin Portal, school principals and administrative officers can handle student admissions, merit topper rankings, and historical batch graduation. Converting graduating students into verified alumni accounts is fully automated with a single click.
                  </p>
                </section>

                {/* Sub-section 3 */}
                <section id="alumni-ecosystem" className="space-y-3 scroll-mt-24">
                  <h2 className="text-xl font-bold text-slate-900">
                    Alumni Community & Career Ecosystem
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    The Alumni Mobile Portal gives verified graduates a dedicated space for peer networking, exclusive job postings, student mentorship booking, and nostalgic school memory photo galleries.
                  </p>
                </section>

                {/* Sub-section 4 */}
                <section id="tax-receipts" className="space-y-3 scroll-mt-24">
                  <h2 className="text-xl font-bold text-slate-900">
                    Automated Section 80G Tax Philanthropy
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Enables institutional fundraising campaigns with direct bank settlements. Donors receive an instant digitally signed Indian Section 80G tax exemption receipt PDF with automated PAN validation.
                  </p>
                </section>

                {/* Screenshot in center */}
                <div className="pt-2 space-y-3">
                  <div className="rounded-xl overflow-hidden border border-slate-200 shadow-md">
                    <ZoomableImage
                      src="/screenshots/superadmin/superadmin-dashboard.png"
                      alt="Super Admin Cockpit Overview"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <p className="text-xs text-slate-400 italic">
                    Figure 1: Super Admin Multi-Campus Central Command Center.
                  </p>
                </div>
              </article>
            )}

            {/* ── ARTICLE: ARCHITECTURE & 3-TIERS ── */}
            {activeCategory === 'architecture-tiers' && (
              <article className="space-y-8 max-w-3xl">
                <div>
                  <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                    3-Tier Multi-Tenant Architecture
                  </h1>
                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                    My Gurukul decouples educational operations into three isolated layers to guarantee security, role separation, and performance:
                  </p>
                </div>

                <div className="space-y-6 text-sm">
                  <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <h3 className="text-base font-bold text-slate-900">Tier 1: Central Trust Super Admin</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Operates at the Trust Foundation level. Manages institutional domains, financial accounts, 80G compliance certificate authority, and provisioning of school campuses.
                    </p>
                  </div>

                  <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <h3 className="text-base font-bold text-slate-900">Tier 2: Campus Sub-Admin Portal</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Operated by school principals and deans. Manages student rosters, grade promotions, campus memories, reunion events, and batch alumni transitions.
                    </p>
                  </div>

                  <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <h3 className="text-base font-bold text-slate-900">Tier 3: Alumni & Student Mobile Hub</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      End-user mobile experience for alumni and senior students. Provides career feeds, job applications, 1-on-1 mentorship bookings, and one-tap cause donations.
                    </p>
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden border border-slate-200 shadow-md">
                  <ZoomableImage
                    src="/screenshots/subadmin/school-showing-student-timeline.png"
                    alt="Sub Admin Academic Operations"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </article>
            )}

            {/* ── ARTICLE: 24-HOUR DEPLOYMENT & DNS ── */}
            {activeCategory === 'deployment-dns' && (
              <article className="space-y-8 max-w-3xl">
                <div>
                  <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                    24-Hour Deployment & DNS Guide
                  </h1>
                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                    Deploying your sovereign institutional network requires only a single CNAME record pointed to your designated Trust cluster.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-base font-bold text-slate-900">Required DNS CNAME Record</h3>
                  <div className="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-xs space-y-3">
                    <div className="flex justify-between items-center pb-2 border-b border-slate-800 text-slate-400">
                      <span>CNAME CONFIGURATION</span>
                      <button
                        onClick={() => copyToClipboard('CNAME portal cname.mygurukul.app', 'cname-copy')}
                        className="flex items-center gap-1 text-[#0066FF] hover:underline"
                      >
                        {copiedId === 'cname-copy' ? <Check size={12} /> : <Copy size={12} />}
                        <span>{copiedId === 'cname-copy' ? 'Copied' : 'Copy'}</span>
                      </button>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-slate-300">
                      <div><strong className="text-slate-500">Record Type:</strong> CNAME</div>
                      <div><strong className="text-slate-500">Host / Name:</strong> portal</div>
                      <div><strong className="text-slate-500">Points To:</strong> cname.mygurukul.app</div>
                    </div>
                  </div>
                </div>
              </article>
            )}

            {/* ── ARTICLE: LAUNCH CHECKLIST ── */}
            {activeCategory === 'launch-checklist' && (
              <article className="space-y-6 max-w-3xl">
                <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                  Institutional Launch Checklist
                </h1>
                <div className="space-y-3 pt-2">
                  {[
                    'Configure Trust custom domain & verify automated SSL certificate.',
                    'Upload Trust 12A / 80G tax exemption document for automated receipt signing.',
                    'Create subsidiary school campus entries and assign principal login credentials.',
                    'Import graduating batch student rosters via standard CSV ingestion.',
                    'Broadcast activation links via automated WhatsApp & email invitations.',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-lg border border-slate-200 text-xs sm:text-sm">
                      <span className="w-5 h-5 rounded-full bg-[#0066FF] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-slate-800 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </article>
            )}

            {/* ── ARTICLE: SUPER ADMIN COCKPIT ── */}
            {(activeCategory === 'trust-cockpit' || activeCategory === 'provision-schools' || activeCategory === 'subadmin-access' || activeCategory === 'tax-engine' || activeCategory === 'audit-stream') && (
              <article className="space-y-8 max-w-3xl">
                <div>
                  <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                    Super Admin Trust Governance & Management
                  </h1>
                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                    Detailed guide on managing multi-school networks, sub-admin credentials, Section 80G tax rules, and compliance logs.
                  </p>
                </div>

                <div className="rounded-xl overflow-hidden border border-slate-200 shadow-md">
                  <ZoomableImage
                    src="/screenshots/superadmin/superadmin-trust-data.png"
                    alt="Trust Level Operations"
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                  <h3 className="text-base font-bold text-slate-900">Key Administrative Workflows:</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Provisioning a Campus:</strong> Navigate to Super Admin → Schools → Add School. Enter campus code, principal email, and affiliation board.</li>
                    <li><strong>80G Receipt Automation:</strong> Set the Trust registration number and digital signature. The system will dispatch PDFs automatically upon donor payment.</li>
                    <li><strong>Audit Trail Review:</strong> View immutable logs with timestamp, IP address, user role, and action payload.</li>
                  </ul>
                </div>
              </article>
            )}

            {/* ── ARTICLE: SUB-ADMIN SCHOOL OPS ── */}
            {(activeCategory === 'school-ops' || activeCategory === 'student-csv' || activeCategory === 'graduation-alumni' || activeCategory === 'events-memories') && (
              <article className="space-y-8 max-w-3xl">
                <div>
                  <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                    Sub-Admin Campus Operations
                  </h1>
                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                    Designed for School Principals, Deans, and Campus Coordinators.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-base font-bold text-slate-900">Student CSV Template</h3>
                  <div className="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-xs space-y-2">
                    <div className="flex justify-between items-center pb-2 border-b border-slate-800 text-slate-400">
                      <span>CSV INGESTION FORMAT</span>
                      <button
                        onClick={() => copyToClipboard('admission_no,name,email,grad_year,stream\n2020-01,Aarav Sharma,aarav@edu.in,2024,Science', 'csv-btn')}
                        className="text-[#0066FF] hover:underline flex items-center gap-1"
                      >
                        {copiedId === 'csv-btn' ? <Check size={12} /> : <Copy size={12} />}
                        <span>{copiedId === 'csv-btn' ? 'Copied' : 'Copy'}</span>
                      </button>
                    </div>
                    <pre className="text-emerald-400">
{`admission_no,name,email,grad_year,stream
2020-01,Aarav Sharma,aarav@edu.in,2024,Science
2020-02,Priya Patel,priya@edu.in,2024,Commerce`}
                    </pre>
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden border border-slate-200 shadow-md">
                  <ZoomableImage
                    src="/screenshots/alumni/alumni-create-campaign-page.png"
                    alt="Campus Campaign Setup"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </article>
            )}

            {/* ── ARTICLE: ALUMNI ECOSYSTEM ── */}
            {(activeCategory === 'alumni-login' || activeCategory === 'social-jobs' || activeCategory === 'mentorship' || activeCategory === 'donations-80g') && (
              <article className="space-y-8 max-w-3xl">
                <div>
                  <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                    Alumni Mobile Portal & Philanthropy
                  </h1>
                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                    Empowering graduates with a private institutional network for career mentorship, jobs, and tax-exempt cause donations.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-xl overflow-hidden border border-slate-200 shadow-md">
                    <ZoomableImage
                      src="/screenshots/alumni/alumni-community-feed.png"
                      alt="Alumni Community Feed"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden border border-slate-200 shadow-md">
                    <ZoomableImage
                      src="/screenshots/alumni/alumni-job-post-page.png"
                      alt="Alumni Job Post"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </article>
            )}

            {/* ── ARTICLE: SECURITY & 2FA ── */}
            {(activeCategory === 'totp-2fa' || activeCategory === 'schema-isolation' || activeCategory === 'audit-compliance') && (
              <article className="space-y-8 max-w-3xl">
                <div>
                  <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                    Bank-Grade Security Architecture
                  </h1>
                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                    Mandatory TOTP Two-Factor Authentication and PostgreSQL schema isolation for all institutional administrative accounts.
                  </p>
                </div>

                <div className="rounded-xl overflow-hidden border border-slate-200 shadow-md">
                  <ZoomableImage
                    src="/screenshots/superadmin/superadmin-2fa.png"
                    alt="Two Factor Authentication Security"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </article>
            )}

            {/* ── ARTICLE: API DOCS & WEBHOOKS ── */}
            {(activeCategory === 'webhooks-payments' || activeCategory === 'student-sync-api') && (
              <article className="space-y-8 max-w-3xl">
                <div>
                  <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                    API Reference & Payment Webhooks
                  </h1>
                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                    Integrate institutional payment gateways and automated ERP student synchronization webhooks.
                  </p>
                </div>

                <div className="p-4 bg-slate-900 text-slate-100 rounded-xl font-mono text-xs space-y-2">
                  <div className="text-slate-400 pb-2 border-b border-slate-800">
                    POST /api/webhooks/razorpay-80g
                  </div>
                  <pre className="text-sky-300">
{`{
  "event": "payment.captured",
  "payload": {
    "payment": {
      "id": "pay_Kx9872619",
      "amount": 250000,
      "donor_pan": "ABCDE1234F",
      "donor_email": "alumni@corporate.com",
      "cause_id": "stem-lab-fund-2026"
    }
  }
}`}
                  </pre>
                </div>
              </article>
            )}

            {/* ── ARTICLE: GLOSSARY ── */}
            {activeCategory === 'glossary' && (
              <article className="space-y-6 max-w-3xl">
                <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                  Institutional Glossary
                </h1>
                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                    <p className="font-bold text-slate-900">Section 80G:</p>
                    <p className="text-slate-600">Provision under the Indian Income Tax Act granting donors a 50% deduction on taxable income for eligible contributions.</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                    <p className="font-bold text-slate-900">Super Admin:</p>
                    <p className="text-slate-600">The supreme administrative role with multi-trust governance and school provisioning rights.</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                    <p className="font-bold text-slate-900">Sub-Admin:</p>
                    <p className="text-slate-600">Campus-level principal or officer managing school-specific batches, students, and events.</p>
                  </div>
                </div>
              </article>
            )}
          </main>

          {/* ──── RIGHT TABLE OF CONTENTS (Zomato Blue Links Style) ──── */}
          <aside className="hidden xl:block w-60 sticky top-[57px] h-[calc(100vh-57px)] p-8 text-left">
            <div className="space-y-2.5">
              <a
                href="#trust-governance"
                className="block text-xs font-semibold text-[#0066FF] hover:underline"
              >
                Trust Governance
              </a>
              <a
                href="#campus-operations"
                className="block text-xs font-semibold text-[#0066FF] hover:underline"
              >
                Campus Operations
              </a>
              <a
                href="#alumni-ecosystem"
                className="block text-xs font-semibold text-[#0066FF] hover:underline"
              >
                Alumni Ecosystem
              </a>
              <a
                href="#tax-receipts"
                className="block text-xs font-semibold text-[#0066FF] hover:underline"
              >
                Section 80G Engine
              </a>
            </div>
          </aside>
        </div>
      </div>
    </LightboxProvider>
  );
}
