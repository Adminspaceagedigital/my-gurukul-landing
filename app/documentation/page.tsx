'use client';

import React, { useState } from 'react';
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
  CheckCircle2,
  AlertCircle,
  Clock,
  Key,
  Layers,
  Heart,
  Briefcase,
  Calendar,
  Sparkles,
  Camera,
  Mail,
  Shield,
  Activity,
  FileCheck2,
  Handshake,
  UserCog,
  DollarSign,
  Send,
  HelpCircle,
  Bell
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

interface TocItem {
  id: string;
  title: string;
}

export default function DocumentationPage() {
  const [activeCategory, setActiveCategory] = useState<string>('overview');
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    'getting-started': true,
    'super-admin': true,
    'sub-admin': true,
    'alumni-portal': true,
    'security-compliance': true,
    'api-docs': true,
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
        { id: 'student-sync-api', title: 'Student Batch Ingestion API' },
      ],
    },
    { id: 'glossary', title: 'Glossary' },
  ];

  const tableOfContentsMap: Record<string, TocItem[]> = {
    overview: [
      { id: 'trust-governance', title: 'Trust Governance' },
      { id: 'campus-operations', title: 'Campus Operations' },
      { id: 'alumni-ecosystem', title: 'Alumni Ecosystem' },
      { id: 'tax-receipts', title: 'Section 80G Tax Engine' },
    ],
    'architecture-tiers': [
      { id: 'tier-1-trust', title: 'Tier 1: Trust Super Admin' },
      { id: 'tier-2-school', title: 'Tier 2: Campus Sub-Admin' },
      { id: 'tier-3-alumni', title: 'Tier 3: Alumni Mobile Hub' },
      { id: 'security-boundary', title: 'Data Isolation' },
    ],
    'deployment-dns': [
      { id: 'dns-cname', title: 'DNS CNAME Setup' },
      { id: 'ssl-tls', title: 'Automated Let\'s Encrypt TLS' },
      { id: 'verification-steps', title: 'Verification Steps' },
    ],
    'launch-checklist': [
      { id: 'phase-1-onboarding', title: 'Phase 1: Trust Profile' },
      { id: 'phase-2-campus', title: 'Phase 2: Campus Provisioning' },
      { id: 'phase-3-rosters', title: 'Phase 3: Student Ingestion' },
      { id: 'phase-4-alumni', title: 'Phase 4: Alumni Activation' },
    ],
    'trust-cockpit': [
      { id: 'kpi-cards', title: 'Trust Command Metrics' },
      { id: 'trust-profile-setup', title: '12A/80G Profile Setup' },
      { id: 'bank-settlement', title: 'Bank Settlement Accounts' },
      { id: 'authorized-signatory', title: 'Signatures & Official Seals' },
    ],
    'provision-schools': [
      { id: 'campus-onboarding', title: 'Campus Onboarding Wizard' },
      { id: 'board-affiliation', title: 'DISE & Board Affiliation' },
      { id: 'medium-standards', title: 'Medium & Standards' },
      { id: 'campus-status', title: 'Activation Status Toggle' },
    ],
    'subadmin-access': [
      { id: 'principal-provisioning', title: 'Principal Account Setup' },
      { id: 'rbac-permissions', title: 'Role-Based Access Control' },
      { id: 'credential-reset', title: 'Password & Access Resets' },
      { id: 'security-vault', title: '2FA Policy Enforcement' },
    ],
    'tax-engine': [
      { id: 'tax-exemption-rules', title: 'Section 80G Verification' },
      { id: 'pan-validation', title: 'Automated PAN Validation' },
      { id: 'pdf-receipt-engine', title: 'Dynamic PDF Generation' },
      { id: 'form-10bd-export', title: 'Form 10BD Annual Tax Filing' },
    ],
    'audit-stream': [
      { id: 'activity-log-table', title: 'Immutable ActivityLog' },
      { id: 'email-audit-stream', title: 'Email Dispatch Audit' },
      { id: 'security-telemetry', title: 'IP & Security Tracking' },
    ],
    'school-ops': [
      { id: 'academic-calendar-setup', title: 'Academic Year Cycles' },
      { id: 'class-setup', title: 'Class & Division Setup' },
      { id: 'principal-workflow', title: 'Principal Daily Operations' },
    ],
    'student-csv': [
      { id: 'csv-format-rules', title: 'CSV Schema & Headers' },
      { id: 'sample-csv-data', title: 'Sample CSV Template' },
      { id: 'validation-rules', title: 'Automated Validation' },
      { id: 'troubleshooting', title: 'Error Remediation' },
    ],
    'graduation-alumni': [
      { id: 'batch-graduation-workflow', title: '1-Click Batch Graduation' },
      { id: 'automated-alumni-creation', title: 'Automated Alumni Accounts' },
      { id: 'activation-invites', title: 'Email & Push Notifications' },
    ],
    'events-memories': [
      { id: 'nostalgic-photo-archive', title: 'School Memory Gallery' },
      { id: 'reunion-event-creation', title: 'Reunions & RSVPs' },
      { id: 'moderation-workflow', title: 'Content Approval' },
    ],
    'alumni-login': [
      { id: 'verification-methods', title: 'Roll Number Matching' },
      { id: 'zero-password-flow', title: 'Email OTP & Direct Login' },
      { id: 'profile-enrichment', title: 'Career & Industry Setup' },
    ],
    'social-jobs': [
      { id: 'community-feed-portal', title: 'Verified Community Feed' },
      { id: 'job-board-hiring', title: 'Alumni Job Referrals' },
      { id: 'company-tagging', title: 'Corporate Network Tagging' },
    ],
    'mentorship': [
      { id: 'mentorship-hub', title: 'Mentorship Opportunities Hub' },
      { id: 'domain-focus-tracks', title: 'Professional Categories' },
      { id: 'student-registration', title: 'Student Connection Workflow' },
    ],
    'donations-80g': [
      { id: 'cause-campaign-giving', title: 'Targeted Cause Campaigns' },
      { id: 'payment-gateway-settlement', title: 'Direct Bank Settlement' },
      { id: 'instant-tax-pdf', title: 'Instant 80G Receipt PDF' },
    ],
    'totp-2fa': [
      { id: 'totp-rfc-standard', title: 'RFC 6238 Protocol' },
      { id: 'authenticator-setup', title: 'QR Code Pairing Wizard' },
      { id: 'emergency-recovery', title: 'Emergency Backup Codes' },
    ],
    'schema-isolation': [
      { id: 'tenant-segregation', title: 'Tenant Schema Isolation' },
      { id: 'row-level-security', title: 'PostgreSQL RLS Rules' },
      { id: 'zero-data-leakage', title: 'Zero Cross-Tenant Leakage' },
    ],
    'audit-compliance': [
      { id: 'charity-commissioner-audit', title: 'Charity Commissioner Compliance' },
      { id: 'form-10bd-guidance', title: 'Form 10BD Preparation' },
      { id: 'statutory-retention', title: '7-Year Audit Trail Retention' },
    ],
    'webhooks-payments': [
      { id: 'razorpay-upi-payload', title: 'Webhook JSON Payload' },
      { id: 'hmac-sha256-verification', title: 'HMAC SHA-256 Verification' },
      { id: 'idempotent-handling', title: 'Idempotency Rules' },
    ],
    'student-sync-api': [
      { id: 'batch-api-endpoint', title: 'Student Ingestion Endpoint' },
      { id: 'bearer-authentication', title: 'Session Authentication' },
      { id: 'sync-json-schema', title: 'Batch Upload Schema' },
    ],
    glossary: [
      { id: 'tax-terms', title: 'Tax & Compliance Terms' },
      { id: 'platform-roles', title: 'Platform Roles' },
      { id: 'technical-terms', title: 'Technical Architecture' },
    ],
  };

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
  const currentToc = tableOfContentsMap[activeCategory] || [];

  return (
    <LightboxProvider>
      <div className="min-h-screen bg-white text-slate-800 font-sans antialiased">
        {/* ──── TOP GLOBAL NAVIGATION BAR ──── */}
        <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
          <div className="max-w-[1550px] mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
                className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
                aria-label="Toggle navigation menu"
              >
                {mobileSidebarOpen ? <X size={20} /> : <MenuIcon size={20} />}
              </button>

              <Link href="/" className="flex items-center gap-3">
                <Image
                  src="/my-gurukul.png"
                  alt="My Gurukul"
                  width={140}
                  height={38}
                  className="h-8 w-auto object-contain"
                  priority
                />
              </Link>

              <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400 font-medium pl-3 border-l border-slate-200">
                <BookOpen size={14} className="text-[#0066FF]" />
                <span className="text-slate-900 font-semibold font-jakarta">Documentation Hub</span>
                <span className="bg-blue-50 text-[#0066FF] px-2 py-0.5 rounded-full text-[10px] font-bold">
                  v2.4 LTS
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/#home"
                className="hidden md:inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-[#0066FF] transition-colors px-3 py-1.5 rounded-lg hover:bg-slate-50"
              >
                <span>Live Platform</span>
                <ArrowUpRight size={13} />
              </Link>
              <Link
                href="/#booking"
                className="inline-flex items-center gap-2 bg-[#0066FF] hover:bg-blue-700 text-white font-semibold text-xs px-4 py-2 rounded-lg shadow-sm transition-all"
              >
                <span>Request Trust Demo</span>
              </Link>
            </div>
          </div>
        </header>

        {/* ──── MAIN 3-COLUMN LAYOUT ──── */}
        <div className="max-w-[1550px] mx-auto flex min-h-[calc(100vh-64px)]">
          {/* ──── LEFT SIDEBAR NAVIGATION ──── */}
          <aside
            className={`fixed lg:sticky top-16 z-30 w-72 h-[calc(100vh-64px)] bg-[#FAFBFD] border-r border-slate-200 overflow-y-auto shrink-0 transition-transform duration-200 ease-in-out ${
              mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
            }`}
          >
            <div className="p-4 border-b border-slate-200">
              <div className="relative">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-full bg-white border border-slate-200 rounded-lg pl-8 pr-3 py-1.5 text-xs text-slate-700 placeholder-slate-400 focus:outline-none focus:border-[#0066FF]"
                />
              </div>
            </div>

            <nav className="p-3 space-y-1 text-left">
              {categories.map((cat) => {
                const isStandAlone = !cat.subPages;
                const isExpanded = expandedCategories[cat.id] ?? true;
                const isCurrentActive = activeCategory === cat.id;

                if (isStandAlone) {
                  return (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setActiveCategory(cat.id);
                        setMobileSidebarOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 text-xs font-semibold rounded-lg transition-colors text-left ${
                        isCurrentActive
                          ? 'bg-blue-50 text-[#0066FF] font-bold'
                          : 'text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <span>{cat.title}</span>
                    </button>
                  );
                }

                return (
                  <div key={cat.id} className="pt-2">
                    <button
                      onClick={() => toggleCategory(cat.id)}
                      className="w-full flex items-center justify-between px-3 py-1.5 text-xs font-bold text-slate-900 hover:text-[#0066FF] transition-colors uppercase tracking-wider"
                    >
                      <span className="font-jakarta">{cat.title}</span>
                      <ChevronDown
                        size={14}
                        className={`text-slate-400 transition-transform duration-150 ${
                          isExpanded ? 'rotate-0' : '-rotate-90'
                        }`}
                      />
                    </button>

                    {isExpanded && (
                      <div className="mt-1 space-y-0.5 pl-2 border-l-2 border-slate-200 ml-3">
                        {cat.subPages?.map((sub) => {
                          const isSubActive = activeCategory === sub.id;
                          return (
                            <button
                              key={sub.id}
                              onClick={() => {
                                setActiveCategory(sub.id);
                                setMobileSidebarOpen(false);
                              }}
                              className={`w-full block text-left px-3 py-1.5 text-xs rounded-md transition-colors ${
                                isSubActive
                                  ? 'text-[#0066FF] font-bold bg-blue-50/80 border-r-2 border-[#0066FF]'
                                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
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
            {/* Breadcrumb Navigation */}
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
              <span className="bg-slate-100 px-2.5 py-0.5 rounded text-slate-700 font-semibold text-[11px]">
                {breadcrumbs.title}
              </span>
            </div>

            {/* =========================================================================
                1. GETTING STARTED ARTICLES
            ========================================================================= */}

            {/* ── ARTICLE: OVERVIEW ── */}
            {activeCategory === 'overview' && (
              <article className="space-y-10 max-w-3xl">
                <div>
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-jakarta leading-tight">
                    Overview of My Gurukul Platform
                  </h1>
                  <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed">
                    My Gurukul is a sovereign SaaS operating system purpose-built for Educational Trusts, Group of Schools, and Multi-Campus Institutions. It decouples institutional governance across three isolated tiers to ensure complete brand sovereignty, seamless principal delegation, and automated Section 80G philanthropic endowments.
                  </p>
                </div>

                <section id="trust-governance" className="space-y-3 scroll-mt-24">
                  <h2 className="text-xl font-bold text-slate-900 font-jakarta">
                    1. Central Trust Governance & Multi-Campus Management
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    The Super Admin Cockpit operates at the highest governing level. It enables trust boards to manage multiple school campuses, configure 12A/80G tax exemption numbers, provision campus-level principal accounts, and oversee unified student rosters under a single sovereign portal.
                  </p>
                </section>

                <section id="campus-operations" className="space-y-3 scroll-mt-24">
                  <h2 className="text-xl font-bold text-slate-900 font-jakarta">
                    2. Campus Operations & Batch Transitions
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    School Principals and Deans use the Sub-Admin Portal to manage campus academic operations, import student cohorts via bulk CSV ingestion, record achievements, and execute 1-click batch graduations that automatically transition students into verified alumni profiles.
                  </p>
                </section>

                <section id="alumni-ecosystem" className="space-y-3 scroll-mt-24">
                  <h2 className="text-xl font-bold text-slate-900 font-jakarta">
                    3. Alumni Community & Career Network
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Verified graduates access a private mobile web application offering professional job referrals, 1-on-1 student mentorship bookings, campus memory archives, and seamless philanthropic contributions.
                  </p>
                </section>

                <section id="tax-receipts" className="space-y-3 scroll-mt-24">
                  <h2 className="text-xl font-bold text-slate-900 font-jakarta">
                    4. Automated Indian Section 80G Tax Philanthropy
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    The integrated philanthropy engine accepts donations via UPI, Cards, and Net Banking, validates donor PAN numbers against ITD standards, and instantly issues digitally signed Section 80G tax-deductible PDF receipts with Form 10BD export readiness.
                  </p>
                </section>

                <div className="pt-4 space-y-3">
                  <div className="rounded-xl overflow-hidden border border-slate-200 shadow-md">
                    <ZoomableImage
                      src="/screenshots/superadmin/superadmin-dashboard.png"
                      alt="Super Admin Cockpit Overview"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <p className="text-xs text-slate-400 italic text-center">
                    Figure 1: Super Admin Multi-Campus Central Command Center.
                  </p>
                </div>
              </article>
            )}

            {/* ── ARTICLE: ARCHITECTURE & 3-TIERS ── */}
            {activeCategory === 'architecture-tiers' && (
              <article className="space-y-8 max-w-3xl">
                <div>
                  <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight font-jakarta">
                    3-Tier Multi-Tenant Architecture
                  </h1>
                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                    My Gurukul implements strict 3-tier architectural separation to ensure complete data security, role governance, and high-performance scalability across large educational networks.
                  </p>
                </div>

                <div className="space-y-6 text-sm">
                  <div id="tier-1-trust" className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-2 scroll-mt-24">
                    <div className="flex items-center gap-2 text-[#0066FF] font-bold">
                      <Building2 size={18} />
                      <h3 className="text-base font-bold text-slate-900 font-jakarta">Tier 1: Central Trust Super Admin</h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Governs the entire trust entity. Manages custom domain CNAME mappings, 12A/80G compliance certificate authorities, campus provisioning, principal RBAC credentials, and consolidated financial oversight.
                    </p>
                  </div>

                  <div id="tier-2-school" className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-2 scroll-mt-24">
                    <div className="flex items-center gap-2 text-emerald-600 font-bold">
                      <School size={18} />
                      <h3 className="text-base font-bold text-slate-900 font-jakarta">Tier 2: Campus Sub-Admin Portal</h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Dedicated to school principals and campus coordinators. Controls academic batches, standard divisions, student CSV roster ingestion, campus memory albums, and batch graduation conversion.
                    </p>
                  </div>

                  <div id="tier-3-alumni" className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-2 scroll-mt-24">
                    <div className="flex items-center gap-2 text-indigo-600 font-bold">
                      <GraduationCap size={18} />
                      <h3 className="text-base font-bold text-slate-900 font-jakarta">Tier 3: Alumni & Student Mobile Hub</h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Progressive web application for alumni and senior students. Features verified roll-number verification, alumni career directory, job referral postings, and direct cause donation checkout.
                    </p>
                  </div>
                </div>

                <section id="security-boundary" className="space-y-3 scroll-mt-24 pt-4">
                  <h2 className="text-xl font-bold text-slate-900 font-jakarta">
                    Tenant Data Isolation & Security Boundaries
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Each educational trust is logically isolated with strict tenant-level identifiers (<code className="bg-slate-100 px-1 py-0.5 rounded text-[#0066FF]">trustId</code> and <code className="bg-slate-100 px-1 py-0.5 rounded text-[#0066FF]">schoolId</code>). Sub-admin principals can never access student data from sister campuses without explicit cross-trust delegation.
                  </p>
                </section>

                <div className="rounded-xl overflow-hidden border border-slate-200 shadow-md">
                  <ZoomableImage
                    src="/screenshots/subadmin/school-showing-student-timeline.png"
                    alt="Sub Admin Academic Operations"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <p className="text-xs text-slate-400 italic text-center">
                  Figure 2: Sub-Admin Campus Operations & Student Timeline.
                </p>
              </article>
            )}

            {/* ── ARTICLE: 24-HOUR DEPLOYMENT & DNS ── */}
            {activeCategory === 'deployment-dns' && (
              <article className="space-y-8 max-w-3xl">
                <div>
                  <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight font-jakarta">
                    24-Hour Deployment & Custom Domain DNS Guide
                  </h1>
                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                    Deploying your sovereign institutional network under your custom trust domain (e.g., <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-xs">portal.yourtrust.org</code>) requires adding a single DNS CNAME record.
                  </p>
                </div>

                <section id="dns-cname" className="space-y-4 scroll-mt-24">
                  <h2 className="text-lg font-bold text-slate-900 font-jakarta">1. Configure Required DNS CNAME Record</h2>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Log in to your DNS provider (Cloudflare, GoDaddy, AWS Route 53, Namecheap) and create the following entry:
                  </p>

                  <div className="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-xs space-y-3">
                    <div className="flex justify-between items-center pb-2 border-b border-slate-800 text-slate-400">
                      <span>DNS RECORD CONFIGURATION</span>
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
                      <div><strong className="text-slate-500">Target Value:</strong> cname.mygurukul.app</div>
                    </div>
                  </div>
                </section>

                <section id="ssl-tls" className="space-y-3 scroll-mt-24">
                  <h2 className="text-lg font-bold text-slate-900 font-jakarta">2. Automated SSL/TLS Certificate Provisioning</h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Once the DNS record propagates, our edge infrastructure automatically issues and renews a high-grade 256-bit Let's Encrypt TLS certificate with automated zero-touch HTTPS renewal.
                  </p>
                </section>

                <section id="verification-steps" className="space-y-3 scroll-mt-24">
                  <h2 className="text-lg font-bold text-slate-900 font-jakarta">3. Domain Verification Check</h2>
                  <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-900 space-y-1">
                    <div className="font-bold flex items-center gap-1.5">
                      <CheckCircle2 size={15} className="text-emerald-600" />
                      <span>Zero Downtime Verification</span>
                    </div>
                    <p>DNS propagation typically completes within 10 to 60 minutes. Your custom institutional branding will immediately be served upon verification.</p>
                  </div>
                </section>
              </article>
            )}

            {/* ── ARTICLE: LAUNCH CHECKLIST ── */}
            {activeCategory === 'launch-checklist' && (
              <article className="space-y-8 max-w-3xl">
                <div>
                  <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight font-jakarta">
                    Institutional Launch Checklist
                  </h1>
                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                    Follow this 5-stage go-live roadmap to successfully onboard your educational trust, configure subsidiary campuses, and invite alumni.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      id: 'phase-1-onboarding',
                      step: '1',
                      title: 'Configure Trust Legal Profile & Tax Certificates',
                      desc: 'Set up Trust Legal Name, 12A & Section 80G registration numbers, and upload official digital signatures and seals.',
                    },
                    {
                      id: 'phase-2-campus',
                      step: '2',
                      title: 'Provision Subsidiary Campuses & School Principals',
                      desc: 'Create campus records with DISE codes, affiliation boards (CBSE/ICSE/State), and invite campus principals with sub-admin credentials.',
                    },
                    {
                      id: 'phase-3-rosters',
                      step: '3',
                      title: 'Bulk Ingest Student Rosters via CSV Ingestion',
                      desc: 'School principals upload active student batches using the standardized CSV format with admission numbers and batch years.',
                    },
                    {
                      id: 'phase-4-alumni',
                      step: '4',
                      title: 'Execute Batch Graduation & Invite Alumni Network',
                      desc: 'Execute 1-click batch promotion to automatically convert graduating students into verified alumni profiles and dispatch onboarding invitations.',
                    },
                  ].map((item) => (
                    <div
                      key={item.step}
                      id={item.id}
                      className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200 scroll-mt-24"
                    >
                      <span className="w-7 h-7 rounded-full bg-[#0066FF] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        {item.step}
                      </span>
                      <div className="space-y-1">
                        <h3 className="text-sm font-bold text-slate-900 font-jakarta">{item.title}</h3>
                        <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            )}

            {/* =========================================================================
                2. SUPER ADMIN (TRUST LEVEL) ARTICLES
            ========================================================================= */}

            {/* ── ARTICLE: SUPER ADMIN - COMMAND CENTER ── */}
            {activeCategory === 'trust-cockpit' && (
              <article className="space-y-8 max-w-3xl">
                <div>
                  <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight font-jakarta">
                    Super Admin Command Center & Real-Time Analytics
                  </h1>
                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                    The Super Admin Dashboard (<code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-xs">/superadmin/dashboard</code>) serves as the primary governance cockpit for Educational Trust Trustees, Secretary Generals, and Platform Administrators.
                  </p>
                </div>

                <section id="kpi-cards" className="space-y-3 scroll-mt-24">
                  <h2 className="text-lg font-bold text-slate-900 font-jakarta">1. Live Institutional KPI Metrics</h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    The Command Center aggregates real-time telemetry from all subsidiary schools, including:
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                    <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-center">
                      <div className="text-xl font-bold text-slate-900 font-jakarta">Active</div>
                      <div className="text-[11px] text-slate-500 uppercase font-semibold">Trust Status</div>
                    </div>
                    <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-center">
                      <div className="text-xl font-bold text-[#0066FF] font-jakarta">100%</div>
                      <div className="text-[11px] text-slate-500 uppercase font-semibold">School Nodes</div>
                    </div>
                    <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-center">
                      <div className="text-xl font-bold text-emerald-600 font-jakarta">Live</div>
                      <div className="text-[11px] text-slate-500 uppercase font-semibold">Student Base</div>
                    </div>
                    <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-center">
                      <div className="text-xl font-bold text-indigo-600 font-jakarta">Verified</div>
                      <div className="text-[11px] text-slate-500 uppercase font-semibold">Alumni Base</div>
                    </div>
                  </div>
                </section>

                <section id="trust-profile-setup" className="space-y-3 scroll-mt-24">
                  <h2 className="text-lg font-bold text-slate-900 font-jakarta">2. Trust Legal Profile & 12A/80G Setup</h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Under <code className="bg-slate-100 px-1 py-0.5 rounded text-[#0066FF]">/superadmin/trust</code>, trustees configure official registration details, 12A registration numbers, 80G tax exemption validity dates, official communication addresses, and trust logos.
                  </p>
                </section>

                <section id="bank-settlement" className="space-y-3 scroll-mt-24">
                  <h2 className="text-lg font-bold text-slate-900 font-jakarta">3. Direct Bank Settlement Accounts</h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Configure authorized institutional bank accounts, IFSC codes, and Razorpay/Cashfree payment gateway credentials for direct philanthropic settlements into the Trust account without intermediaries.
                  </p>
                </section>

                <section id="authorized-signatory" className="space-y-3 scroll-mt-24">
                  <h2 className="text-lg font-bold text-slate-900 font-jakarta">4. Authorized Signatures & Official Seals</h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Upload PNG transparent signatures of the Managing Trustee and the official Trust stamp. These assets are securely embedded into dynamically generated PDF tax receipts.
                  </p>
                </section>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="rounded-xl overflow-hidden border border-slate-200 shadow-md">
                    <ZoomableImage
                      src="/screenshots/superadmin/superadmin-dashboard.png"
                      alt="Trust Command Center"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden border border-slate-200 shadow-md">
                    <ZoomableImage
                      src="/screenshots/superadmin/superadmin-trust-data.png"
                      alt="Trust Profile & Tax Details"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                <p className="text-xs text-slate-400 italic text-center">
                  Figure: Super Admin Live Command Center & Trust Organization Vault.
                </p>
              </article>
            )}

            {/* ── ARTICLE: SUPER ADMIN - PROVISIONING CAMPUSES ── */}
            {activeCategory === 'provision-schools' && (
              <article className="space-y-8 max-w-3xl">
                <div>
                  <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight font-jakarta">
                    Provisioning School & College Campuses
                  </h1>
                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                    Super Admins can provision, configure, and monitor multiple educational institutions under the Trust umbrella via <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-xs">/superadmin/school</code>.
                  </p>
                </div>

                <section id="campus-onboarding" className="space-y-3 scroll-mt-24">
                  <h2 className="text-lg font-bold text-slate-900 font-jakarta">1. Campus Onboarding Wizard</h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Click <strong>Add School</strong> to open the provisioning modal. Required parameters include School Legal Name, Campus Address, Contact Phone, and Official Notification Email.
                  </p>
                </section>

                <section id="board-affiliation" className="space-y-3 scroll-mt-24">
                  <h2 className="text-lg font-bold text-slate-900 font-jakarta">2. DISE Code & Board Affiliations</h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Configure institutional regulatory parameters to ensure state and national compliance:
                  </p>
                  <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-xs space-y-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700">
                      <div><strong>School DISE Number:</strong> Unique 11-digit national identifier</div>
                      <div><strong>SSC / 10th Index No:</strong> Secondary education state board code</div>
                      <div><strong>HSC / 12th Index No:</strong> Higher secondary affiliation code</div>
                      <div><strong>RTE Status:</strong> Right to Education quota configuration</div>
                    </div>
                  </div>
                </section>

                <section id="medium-standards" className="space-y-3 scroll-mt-24">
                  <h2 className="text-lg font-bold text-slate-900 font-jakarta">3. Medium of Instruction & Standards</h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Define the primary medium (English, Hindi, Regional languages) and the total active standards (e.g. Standard 1 through 12, or Undergraduate Degree courses).
                  </p>
                </section>

                <section id="campus-status" className="space-y-3 scroll-mt-24">
                  <h2 className="text-lg font-bold text-slate-900 font-jakarta">4. Campus Activation & Status Toggle</h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Super Admins can activate, temporarily freeze, or archive subsidiary school operations with a single click, instantly managing principal access.
                  </p>
                </section>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="rounded-xl overflow-hidden border border-slate-200 shadow-md">
                    <ZoomableImage
                      src="/screenshots/superadmin/superadmin-schools-list.png"
                      alt="Superadmin School List"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden border border-slate-200 shadow-md">
                    <ZoomableImage
                      src="/screenshots/superadmin/superadmin-school-data.png"
                      alt="Superadmin School Profile"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                <p className="text-xs text-slate-400 italic text-center">
                  Figure: Super Admin Campus Provisioning & Multi-School Index.
                </p>
              </article>
            )}

            {/* ── ARTICLE: SUPER ADMIN - PRINCIPAL ROLE DELEGATION ── */}
            {activeCategory === 'subadmin-access' && (
              <article className="space-y-8 max-w-3xl">
                <div>
                  <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight font-jakarta">
                    Principal & Sub-Admin Role Delegation
                  </h1>
                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                    Super Admins can delegate administrative authority to School Principals, Deans, and Campus Coordinators using the Sub-Admin Governance module (<code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-xs">/superadmin/subadmin</code>).
                  </p>
                </div>

                <section id="principal-provisioning" className="space-y-3 scroll-mt-24">
                  <h2 className="text-lg font-bold text-slate-900 font-jakarta">1. Provisioning Principal Accounts</h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    To onboard a school principal, specify the Principal Name, Official Institutional Email, Mobile Number, and bind the user directly to their assigned campus ID.
                  </p>
                </section>

                <section id="rbac-permissions" className="space-y-3 scroll-mt-24">
                  <h2 className="text-lg font-bold text-slate-900 font-jakarta">2. Role-Based Access Control (RBAC) Matrix</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left border border-slate-200 rounded-lg">
                      <thead className="bg-slate-100 text-slate-700 font-bold">
                        <tr>
                          <th className="p-3 border-b">Feature / Module</th>
                          <th className="p-3 border-b">Super Admin</th>
                          <th className="p-3 border-b">Sub-Admin (Principal)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 text-slate-600">
                        <tr>
                          <td className="p-3 font-semibold text-slate-900">Multi-Trust Governance</td>
                          <td className="p-3 text-emerald-600 font-bold">Full Access</td>
                          <td className="p-3 text-slate-400">No Access</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-slate-900">Campus Provisioning</td>
                          <td className="p-3 text-emerald-600 font-bold">Full Access</td>
                          <td className="p-3 text-slate-400">No Access</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-slate-900">Student CSV Batch Upload</td>
                          <td className="p-3 text-emerald-600 font-bold">Global View</td>
                          <td className="p-3 text-emerald-600 font-bold">Assigned Campus Only</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-slate-900">Batch Graduation Workflow</td>
                          <td className="p-3 text-emerald-600 font-bold">Global View</td>
                          <td className="p-3 text-emerald-600 font-bold">Assigned Campus Only</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-slate-900">80G Tax Approval & Signatures</td>
                          <td className="p-3 text-emerald-600 font-bold">Sole Authority</td>
                          <td className="p-3 text-slate-400">View Only</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section id="credential-reset" className="space-y-3 scroll-mt-24">
                  <h2 className="text-lg font-bold text-slate-900 font-jakarta">3. Credential Resets & Account Suspension</h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Super Admins can trigger instant password reset links, modify principal contact details, or temporarily suspend access during administrative transitions.
                  </p>
                </section>

                <section id="security-vault" className="space-y-3 scroll-mt-24">
                  <h2 className="text-lg font-bold text-slate-900 font-jakarta">4. Two-Factor Authentication Enforcement</h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Super Admins can enforce mandatory TOTP 2FA for all sub-admin accounts, ensuring zero unauthorized access to sensitive student records.
                  </p>
                </section>

                <div className="rounded-xl overflow-hidden border border-slate-200 shadow-md">
                  <ZoomableImage
                    src="/screenshots/superadmin/superadmin-profile.png"
                    alt="Principal Role Delegation"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <p className="text-xs text-slate-400 italic text-center">
                  Figure: Super Admin Principal Credential & Role Delegation Management.
                </p>
              </article>
            )}

            {/* ── ARTICLE: SUPER ADMIN - 80G TAX ENGINE ── */}
            {activeCategory === 'tax-engine' && (
              <article className="space-y-8 max-w-3xl">
                <div>
                  <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight font-jakarta">
                    Indian Section 80G Tax Engine & Form 10BD Export
                  </h1>
                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                    My Gurukul includes an automated Section 80G Philanthropy Engine (<code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-xs">/superadmin/80g-requests</code>) designed to satisfy the compliance requirements of the Indian Income Tax Department.
                  </p>
                </div>

                <section id="tax-exemption-rules" className="space-y-3 scroll-mt-24">
                  <h2 className="text-lg font-bold text-slate-900 font-jakarta">1. Section 80G Verification Pipeline</h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    When alumni or corporate donors contribute to campus causes, the transaction record is logged in the 80G verification vault with Donor Name, Email, Phone, PAN Number, Donation Amount, and Payment Gateway ID.
                  </p>
                </section>

                <section id="pan-validation" className="space-y-3 scroll-mt-24">
                  <h2 className="text-lg font-bold text-slate-900 font-jakarta">2. Automated PAN Validation</h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    The platform validates donor PAN numbers against the standard 10-character Indian alphanumeric format (<code className="bg-slate-100 px-1 py-0.5 rounded font-mono">[A-Z]{5}[0-9]{4}[A-Z]{1}</code>) to guarantee compliance for tax-deductible claims.
                  </p>
                </section>

                <section id="pdf-receipt-engine" className="space-y-3 scroll-mt-24">
                  <h2 className="text-lg font-bold text-slate-900 font-jakarta">3. Dynamic PDF Receipt Generation</h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Upon approval, the system dynamically compiles an official A4 PDF certificate (<code className="bg-slate-100 px-1 py-0.5 rounded text-[#0066FF]">generateReceiptPdf.ts</code>) containing:
                  </p>
                  <ul className="list-disc pl-5 text-xs text-slate-600 space-y-1">
                    <li>Unique Sequential Receipt Number (e.g., <code className="font-mono">MG-80G-2026-0042</code>)</li>
                    <li>Trust 12A and 80G Approval Registration Code</li>
                    <li>Donor Full Legal Name & Verified PAN Number</li>
                    <li>Donation Cause & Designated School Campus</li>
                    <li>Authorized Digital Signature & Official Trust Seal</li>
                  </ul>
                </section>

                <section id="form-10bd-export" className="space-y-3 scroll-mt-24">
                  <h2 className="text-lg font-bold text-slate-900 font-jakarta">4. Form 10BD Annual Tax Compliance Export</h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Super Admins can export all approved donor contributions into the standardized CSV/Excel structure mandated for annual <strong>Form 10BD</strong> filing on the Income Tax e-Filing portal.
                  </p>
                </section>

                <div className="rounded-xl overflow-hidden border border-slate-200 shadow-md">
                  <ZoomableImage
                    src="/screenshots/alumni/till-now-alumni-donation-recipts-data.png"
                    alt="80G Donation Receipts Table"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <p className="text-xs text-slate-400 italic text-center">
                  Figure: Section 80G Verified Donation Receipts & Tax Exemption Audit Ledger.
                </p>
              </article>
            )}

            {/* ── ARTICLE: SUPER ADMIN - AUDIT STREAM ── */}
            {activeCategory === 'audit-stream' && (
              <article className="space-y-8 max-w-3xl">
                <div>
                  <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight font-jakarta">
                    Cryptographic Audit Stream & Monitoring
                  </h1>
                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                    The Monitoring & Audit Stream (<code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-xs">/superadmin/monitoring</code>) records an immutable, tamper-evident log of all institutional actions across the platform.
                  </p>
                </div>

                <section id="activity-log-table" className="space-y-3 scroll-mt-24">
                  <h2 className="text-lg font-bold text-slate-900 font-jakarta">1. Immutable ActivityLog Schema</h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Every administrative action automatically creates a structured entry in the <code className="bg-slate-100 px-1 py-0.5 rounded text-[#0066FF]">ActivityLog</code> table:
                  </p>
                  <div className="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-xs space-y-2">
                    <pre className="text-sky-300">
{`{
  "actorRole": "SUPER_ADMIN",
  "actorEmail": "trustee@institution.edu",
  "category": "CAMPUS_PROVISIONING",
  "action": "CREATE_SCHOOL",
  "title": "Provisioned Campus Code APEX-04",
  "schoolId": "school_982631",
  "timestamp": "2026-09-16T14:22:00Z"
}`}
                    </pre>
                  </div>
                </section>

                <section id="email-audit-stream" className="space-y-3 scroll-mt-24">
                  <h2 className="text-lg font-bold text-slate-900 font-jakarta">2. Email Delivery & Communication Audit</h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Tracks the delivery state (<code className="text-emerald-600 font-bold">SENT</code>, <code className="text-amber-600 font-bold">SKIPPED</code>, <code className="text-red-600 font-bold">FAILED</code>) of all system notifications, alumni verification links, and 80G tax receipts via <code className="bg-slate-100 px-1 py-0.5 rounded text-[#0066FF]">EmailLog</code>.
                  </p>
                </section>

                <section id="security-telemetry" className="space-y-3 scroll-mt-24">
                  <h2 className="text-lg font-bold text-slate-900 font-jakarta">3. IP Telemetry & Anomaly Tracking</h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Monitors login anomalies, multiple failed attempts, and privilege escalations to guarantee comprehensive compliance with Indian Charity Commissioner statutory guidelines.
                  </p>
                </section>

                <div className="rounded-xl overflow-hidden border border-slate-200 shadow-md">
                  <ZoomableImage
                    src="/screenshots/superadmin/superadmin-monitoring.png"
                    alt="Cryptographic Monitoring Console"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <p className="text-xs text-slate-400 italic text-center">
                  Figure: Super Admin Live Monitoring & Immutable Cryptographic Audit Stream.
                </p>
              </article>
            )}

            {/* =========================================================================
                3. SUB-ADMIN (CAMPUS LEVEL) ARTICLES
            ========================================================================= */}

            {/* ── ARTICLE: SUB-ADMIN - CAMPUS OPS ── */}
            {activeCategory === 'school-ops' && (
              <article className="space-y-8 max-w-3xl">
                <div>
                  <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight font-jakarta">
                    Campus Academic Operations (Principal Portal)
                  </h1>
                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                    The Sub-Admin Portal provides School Principals, Vice Principals, and Academic Deans with a focused operational console dedicated strictly to their assigned campus.
                  </p>
                </div>

                <section id="academic-calendar-setup" className="space-y-3 scroll-mt-24">
                  <h2 className="text-lg font-bold text-slate-900 font-jakarta">1. Academic Year Cycles</h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Principals configure current session terms, batch milestones, examination schedules, and standard promotion schedules.
                  </p>
                </section>

                <section id="class-setup" className="space-y-3 scroll-mt-24">
                  <h2 className="text-lg font-bold text-slate-900 font-jakarta">2. Class Setup & Division Structuring</h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Manage active divisions (e.g. Standard 10-A, 10-B, 12-Science, 12-Commerce), assign class teachers, and monitor cohort strengths.
                  </p>
                </section>

                <section id="principal-workflow" className="space-y-3 scroll-mt-24">
                  <h2 className="text-lg font-bold text-slate-900 font-jakarta">3. Daily Principal Operations</h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Search active student profiles, review academic toppers, publish school updates, and manage campus event calendars.
                  </p>
                </section>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="rounded-xl overflow-hidden border border-slate-200 shadow-md">
                    <ZoomableImage
                      src="/screenshots/subadmin/school-standards-with-fess-list.png"
                      alt="School Standards Setup"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden border border-slate-200 shadow-md">
                    <ZoomableImage
                      src="/screenshots/subadmin/school-showing-student-timeline.png"
                      alt="Campus Operations Timeline"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                <p className="text-xs text-slate-400 italic text-center">
                  Figure: Sub-Admin Standards Setup & Student Timeline Operations.
                </p>
              </article>
            )}

            {/* ── ARTICLE: SUB-ADMIN - STUDENT CSV INGESTION ── */}
            {activeCategory === 'student-csv' && (
              <article className="space-y-8 max-w-3xl">
                <div>
                  <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight font-jakarta">
                    Student Roster CSV Batch Ingestion
                  </h1>
                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                    Ingest entire student cohorts in seconds using the high-speed CSV ingestion parser with automatic validation and duplicate detection.
                  </p>
                </div>

                <section id="csv-format-rules" className="space-y-3 scroll-mt-24">
                  <h2 className="text-lg font-bold text-slate-900 font-jakarta">1. Standardized CSV Schema</h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Ensure your CSV file contains the following required column headers:
                  </p>
                </section>

                <section id="sample-csv-data" className="space-y-3 scroll-mt-24">
                  <div className="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-xs space-y-2">
                    <div className="flex justify-between items-center pb-2 border-b border-slate-800 text-slate-400">
                      <span>STUDENT_ROSTER_SAMPLE.CSV</span>
                      <button
                        onClick={() => copyToClipboard('admission_no,first_name,last_name,email,phone,standard,division,gender,dob\n2024-001,Aarav,Sharma,aarav@edu.in,9876543210,10,A,MALE,2010-05-14\n2024-002,Priya,Patel,priya@edu.in,9876543211,10,A,FEMALE,2010-08-22', 'csv-sample')}
                        className="text-[#0066FF] hover:underline flex items-center gap-1"
                      >
                        {copiedId === 'csv-sample' ? <Check size={12} /> : <Copy size={12} />}
                        <span>{copiedId === 'csv-sample' ? 'Copied' : 'Copy Template'}</span>
                      </button>
                    </div>
                    <pre className="text-emerald-400">
{`admission_no,first_name,last_name,email,phone,standard,division,gender,dob
2024-001,Aarav,Sharma,aarav@edu.in,9876543210,10,A,MALE,2010-05-14
2024-002,Priya,Patel,priya@edu.in,9876543211,10,A,FEMALE,2010-08-22
2024-003,Rahul,Verma,rahul@edu.in,9876543212,12,Science,MALE,2008-01-19`}
                    </pre>
                  </div>
                </section>

                <section id="validation-rules" className="space-y-3 scroll-mt-24">
                  <h2 className="text-lg font-bold text-slate-900 font-jakarta">2. Automated Ingestion Validation</h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    The parser checks for duplicate admission numbers, invalid email formats, and incorrect date structures before writing to the database.
                  </p>
                </section>

                <section id="troubleshooting" className="space-y-3 scroll-mt-24">
                  <h2 className="text-lg font-bold text-slate-900 font-jakarta">3. Error Remediation</h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If rows contain formatting errors, the portal provides a detailed row-by-row error report allowing principals to fix and re-upload with zero data loss.
                  </p>
                </section>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="rounded-xl overflow-hidden border border-slate-200 shadow-md">
                    <ZoomableImage
                      src="/screenshots/subadmin/add-school-and-student-setup-step-2.png"
                      alt="Student CSV Ingestion Wizard"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden border border-slate-200 shadow-md">
                    <ZoomableImage
                      src="/screenshots/subadmin/school-shows-student-profile.png"
                      alt="Student Profile Verification"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                <p className="text-xs text-slate-400 italic text-center">
                  Figure: Student CSV Ingestion Wizard & Roster Ingestion Verification.
                </p>
              </article>
            )}

            {/* ── ARTICLE: SUB-ADMIN - BATCH GRADUATION ── */}
            {activeCategory === 'graduation-alumni' && (
              <article className="space-y-8 max-w-3xl">
                <div>
                  <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight font-jakarta">
                    1-Click Batch Graduation & Alumni Conversion
                  </h1>
                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                    Transitioning graduating cohorts into verified alumni accounts is fully automated with My Gurukul's 1-click batch graduation pipeline.
                  </p>
                </div>

                <section id="batch-graduation-workflow" className="space-y-3 scroll-mt-24">
                  <h2 className="text-lg font-bold text-slate-900 font-jakarta">1. Graduation Execution Workflow</h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Under <code className="bg-slate-100 px-1 py-0.5 rounded text-[#0066FF]">/subadmin/promotion</code>, select the graduating academic year and target standard (e.g. Standard 10 or 12). Click <strong>Execute Batch Graduation</strong>.
                  </p>
                </section>

                <section id="automated-alumni-creation" className="space-y-3 scroll-mt-24">
                  <h2 className="text-lg font-bold text-slate-900 font-jakarta">2. Automated Alumni Profile Creation</h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    The system updates student records to <code className="font-mono text-emerald-600">GRADUATED</code> status and creates verified entries in the <code className="font-mono">Alumni</code> registry linked to their school and batch year.
                  </p>
                </section>

                <section id="activation-invites" className="space-y-3 scroll-mt-24">
                  <h2 className="text-lg font-bold text-slate-900 font-jakarta">3. Automated Email & Push Notification Broadcasts</h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Automated welcome notices and activation links are dispatched via the transactional email engine (Brevo/Resend) and Firebase Cloud Messaging (FCM) web push notifications, providing graduates immediate access to their mobile alumni hub.
                  </p>
                </section>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="rounded-xl overflow-hidden border border-slate-200 shadow-md">
                    <ZoomableImage
                      src="/screenshots/subadmin/school-do-promotion.png"
                      alt="Batch Promotion Execution"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden border border-slate-200 shadow-md">
                    <ZoomableImage
                      src="/screenshots/subadmin/school-makes-alumni.png"
                      alt="Alumni Conversion Confirmation"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                <p className="text-xs text-slate-400 italic text-center">
                  Figure: Batch Graduation & Automated Alumni Conversion Pipeline.
                </p>
              </article>
            )}

            {/* ── ARTICLE: SUB-ADMIN - CAMPUS MEMORIES ── */}
            {activeCategory === 'events-memories' && (
              <article className="space-y-8 max-w-3xl">
                <div>
                  <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight font-jakarta">
                    Campus Memories, Photo Archives & Reunions
                  </h1>
                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                    Preserve school heritage and organize milestone reunions with the School Memories and Events suite.
                  </p>
                </div>

                <section id="nostalgic-photo-archive" className="space-y-3 scroll-mt-24">
                  <h2 className="text-lg font-bold text-slate-900 font-jakarta">1. Historical Photo Archives</h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Upload and categorize high-resolution photos of annual gatherings, sports days, cultural festivals, and batch toppers categorized by academic year.
                  </p>
                </section>

                <section id="reunion-event-creation" className="space-y-3 scroll-mt-24">
                  <h2 className="text-lg font-bold text-slate-900 font-jakarta">2. Alumni Reunions & Event RSVPs</h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Publish campus reunion events with date, venue maps, agenda, and track live RSVP attendance across different alumni batches.
                  </p>
                </section>

                <section id="moderation-workflow" className="space-y-3 scroll-mt-24">
                  <h2 className="text-lg font-bold text-slate-900 font-jakarta">3. Content Approval Workflow</h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Sub-admin principals review and approve photo uploads submitted by alumni before they appear on the public campus feed.
                  </p>
                </section>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="rounded-xl overflow-hidden border border-slate-200 shadow-md">
                    <ZoomableImage
                      src="/screenshots/subadmin/school-adds-event-construction-cost.png"
                      alt="Campus Event & Cause Creation"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden border border-slate-200 shadow-md">
                    <ZoomableImage
                      src="/screenshots/alumni/school-memorites-page.png"
                      alt="School Memories Photo Archive"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                <p className="text-xs text-slate-400 italic text-center">
                  Figure: Campus Event Creation & Nostalgic Memories Gallery.
                </p>
              </article>
            )}

            {/* =========================================================================
                4. ALUMNI ECOSYSTEM ARTICLES
            ========================================================================= */}

            {/* ── ARTICLE: ALUMNI - LOGIN & ONBOARDING ── */}
            {activeCategory === 'alumni-login' && (
              <article className="space-y-8 max-w-3xl">
                <div>
                  <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight font-jakarta">
                    1-Click Verification & Frictionless Onboarding
                  </h1>
                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                    Alumni onboarding requires zero tedious paperwork. Verification is instant using historical school roll numbers and registered student emails.
                  </p>
                </div>

                <section id="verification-methods" className="space-y-3 scroll-mt-24">
                  <h2 className="text-lg font-bold text-slate-900 font-jakarta">1. Roll Number & School Verification</h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Alumni enter their School Name, Admission Roll Number, and Email. The system instantly cross-references the historical school student database and activates their verified alumni profile.
                  </p>
                </section>

                <section id="zero-password-flow" className="space-y-3 scroll-mt-24">
                  <h2 className="text-lg font-bold text-slate-900 font-jakarta">2. Direct Email OTP & Passwordless Login</h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Alumni authenticate via 6-digit secure Email OTPs or their registered password for an instant, frictionless mobile login experience.
                  </p>
                </section>

                <section id="profile-enrichment" className="space-y-3 scroll-mt-24">
                  <h2 className="text-lg font-bold text-slate-900 font-jakarta">3. Career Profile Setup</h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Alumni can add their current employer, designation, LinkedIn profile, industry domain, and willingness to mentor junior students.
                  </p>
                </section>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="rounded-xl overflow-hidden border border-slate-200 shadow-md">
                    <ZoomableImage
                      src="/screenshots/alumni/alumni-login.png"
                      alt="Alumni Instant Login"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden border border-slate-200 shadow-md">
                    <ZoomableImage
                      src="/screenshots/alumni/alumni-otp.png"
                      alt="OTP Magic Link Verification"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                <p className="text-xs text-slate-400 italic text-center">
                  Figure: Frictionless 1-Click Roll Number & Mobile OTP Onboarding.
                </p>
              </article>
            )}

            {/* ── ARTICLE: ALUMNI - SOCIAL JOBS ── */}
            {activeCategory === 'social-jobs' && (
              <article className="space-y-8 max-w-3xl">
                <div>
                  <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight font-jakarta">
                    Professional Feed & Alumni Job Board
                  </h1>
                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                    Empower verified graduates with an exclusive, high-trust institutional career network.
                  </p>
                </div>

                <section id="community-feed-portal" className="space-y-3 scroll-mt-24">
                  <h2 className="text-lg font-bold text-slate-900 font-jakarta">1. Verified Institutional Community Feed</h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Share career milestones, academic advice, startup ventures, and alumni reunions in a clean, private, ad-free community environment.
                  </p>
                </section>

                <section id="job-board-hiring" className="space-y-3 scroll-mt-24">
                  <h2 className="text-lg font-bold text-slate-900 font-jakarta">2. Alumni Job Postings & Hiring Referrals</h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Alumni working at top corporations can post open positions, offer employee referrals, and discover verified candidates from their own alma mater.
                  </p>
                </section>

                <section id="company-tagging" className="space-y-3 scroll-mt-24">
                  <h2 className="text-lg font-bold text-slate-900 font-jakarta">3. Corporate Network Tagging</h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Search alumni by employer (e.g. Google, Microsoft, TCS, Infosys, Big 4) to facilitate warm corporate introductions and career guidance.
                  </p>
                </section>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
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
                      alt="Alumni Job Postings"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                <p className="text-xs text-slate-400 italic text-center">
                  Figure: Verified Alumni Community Feed & Exclusive Job Referral Board.
                </p>
              </article>
            )}

            {/* ── ARTICLE: ALUMNI - MENTORSHIP ── */}
            {activeCategory === 'mentorship' && (
              <article className="space-y-8 max-w-3xl">
                <div>
                  <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight font-jakarta">
                    1-on-1 Student Mentorship & Career Guidance
                  </h1>
                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                    Connect current students and recent graduates with seasoned alumni mentors across various professional fields using the built-in Alumni Mentorship Hub.
                  </p>
                </div>

                <section id="mentorship-hub" className="space-y-3 scroll-mt-24">
                  <h2 className="text-lg font-bold text-slate-900 font-jakarta">1. Mentorship Opportunity Hub</h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Alumni mentors post guidance offerings specifying their background, availability hours, and target student cohorts (e.g., 10th/12th grade or recent college grads).
                  </p>
                </section>

                <section id="domain-focus-tracks" className="space-y-3 scroll-mt-24">
                  <h2 className="text-lg font-bold text-slate-900 font-jakarta">2. Professional Categories</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                    <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg font-medium">Engineering & Tech</div>
                    <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg font-medium">Business & Finance</div>
                    <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg font-medium">Healthcare & Medicine</div>
                    <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg font-medium">Law & Public Policy</div>
                    <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg font-medium">Arts & Design</div>
                    <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg font-medium">Education & Academics</div>
                    <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg font-medium">Sales & Marketing</div>
                    <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg font-medium">Competitive Exams</div>
                  </div>
                </section>

                <section id="student-registration" className="space-y-3 scroll-mt-24">
                  <h2 className="text-lg font-bold text-slate-900 font-jakarta">3. Student Registration & Connection Workflow</h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Students click <strong>Register for Guidance</strong> to submit their contact details, questions, and goals. Mentors receive instant email notifications and connect directly to guide the student.
                  </p>
                </section>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="rounded-xl overflow-hidden border border-slate-200 shadow-md">
                    <ZoomableImage
                      src="/screenshots/alumni/find-alumni-page.png"
                      alt="Find Alumni Mentors"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden border border-slate-200 shadow-md">
                    <ZoomableImage
                      src="/screenshots/alumni/other-alumni-profiles.png"
                      alt="Alumni Mentor Profile"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                <p className="text-xs text-slate-400 italic text-center">
                  Figure: Alumni Directory Search & Mentor Profile Discovery.
                </p>
              </article>
            )}

            {/* ── ARTICLE: ALUMNI - DONATIONS & 80G ── */}
            {activeCategory === 'donations-80g' && (
              <article className="space-y-8 max-w-3xl">
                <div>
                  <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight font-jakarta">
                    Endowment Giving & Instant 80G Receipts
                  </h1>
                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                    Alumni can support specific school causes (scholarships, science labs, libraries, smart classrooms) with 100% transparency and instant tax benefits.
                  </p>
                </div>

                <section id="cause-campaign-giving" className="space-y-3 scroll-mt-24">
                  <h2 className="text-lg font-bold text-slate-900 font-jakarta">1. Targeted Cause Campaigns</h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Donors choose exact causes and track live campaign funding progress bars with complete financial transparency.
                  </p>
                </section>

                <section id="payment-gateway-settlement" className="space-y-3 scroll-mt-24">
                  <h2 className="text-lg font-bold text-slate-900 font-jakarta">2. Direct Bank Settlement</h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Supports UPI, Credit/Debit Cards, Net Banking, and Corporate CSR transfers directly settling into the Trust bank account.
                  </p>
                </section>

                <section id="instant-tax-pdf" className="space-y-3 scroll-mt-24">
                  <h2 className="text-lg font-bold text-slate-900 font-jakarta">3. Instant 80G Receipt PDF Download</h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Upon payment completion, the platform immediately generates an official PDF receipt with the Trust 80G code and donor PAN number ready for tax filing.
                  </p>
                </section>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="rounded-xl overflow-hidden border border-slate-200 shadow-md">
                    <ZoomableImage
                      src="/screenshots/alumni/alumni-give-donation-construction-event-cost-1.png"
                      alt="Campaign Philanthropy Checkout"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden border border-slate-200 shadow-md">
                    <ZoomableImage
                      src="/screenshots/alumni/till-now-alumni-donation-recipts-data.png"
                      alt="Instant 80G Tax Receipt Ledger"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                <p className="text-xs text-slate-400 italic text-center">
                  Figure: Targeted Philanthropy Giving & Instant 80G Receipt Ledger.
                </p>
              </article>
            )}

            {/* =========================================================================
                5. SECURITY & 80G TAX ARTICLES
            ========================================================================= */}

            {/* ── ARTICLE: SECURITY - TOTP 2FA ── */}
            {activeCategory === 'totp-2fa' && (
              <article className="space-y-8 max-w-3xl">
                <div>
                  <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight font-jakarta">
                    Mandatory TOTP Two-Factor Authentication Vault
                  </h1>
                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                    Bank-grade security architecture enforcing RFC 6238 Time-based One-Time Password (TOTP) two-factor authentication across all Super Admin and Sub-Admin accounts.
                  </p>
                </div>

                <section id="totp-rfc-standard" className="space-y-3 scroll-mt-24">
                  <h2 className="text-lg font-bold text-slate-900 font-jakarta">1. RFC 6238 Standard Implementation</h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Compatible with standard authenticator applications including Google Authenticator, Microsoft Authenticator, and 1Password using secure SHA-1/SHA-256 HMAC tokens.
                  </p>
                </section>

                <section id="authenticator-setup" className="space-y-3 scroll-mt-24">
                  <h2 className="text-lg font-bold text-slate-900 font-jakarta">2. QR Code Pairing Wizard</h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Admins pair their mobile devices during initial login by scanning an encrypted QR code with instantaneous 6-digit confirmation verification.
                  </p>
                </section>

                <section id="emergency-recovery" className="space-y-3 scroll-mt-24">
                  <h2 className="text-lg font-bold text-slate-900 font-jakarta">3. Emergency Backup Recovery Codes</h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Each admin is provided 8 one-time cryptographic recovery codes in case of lost mobile devices, securely hashed using bcrypt in the database.
                  </p>
                </section>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="rounded-xl overflow-hidden border border-slate-200 shadow-md">
                    <ZoomableImage
                      src="/screenshots/superadmin/superadmin-2fa.png"
                      alt="Superadmin 2FA Setup"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden border border-slate-200 shadow-md">
                    <ZoomableImage
                      src="/screenshots/subadmin/school-2fa.png"
                      alt="Subadmin 2FA Setup"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                <p className="text-xs text-slate-400 italic text-center">
                  Figure: Super Admin & Sub-Admin Bank-Grade TOTP 2FA Vault.
                </p>
              </article>
            )}

            {/* ── ARTICLE: SECURITY - SCHEMA ISOLATION ── */}
            {activeCategory === 'schema-isolation' && (
              <article className="space-y-8 max-w-3xl">
                <div>
                  <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight font-jakarta">
                    PostgreSQL Schema Isolation & Row-Level Security
                  </h1>
                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                    Multi-tenant data integrity is guaranteed at the PostgreSQL database engine level using strict tenant keys and Row-Level Security (RLS).
                  </p>
                </div>

                <section id="tenant-segregation" className="space-y-3 scroll-mt-24">
                  <h2 className="text-lg font-bold text-slate-900 font-jakarta">1. Tenant Key Segregation</h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    All database queries enforce <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-[#0066FF]">trustId</code> and <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-[#0066FF]">schoolId</code> scope boundaries, preventing any cross-tenant data leakage.
                  </p>
                </section>

                <section id="row-level-security" className="space-y-3 scroll-mt-24">
                  <h2 className="text-lg font-bold text-slate-900 font-jakarta">2. PostgreSQL RLS Policies</h2>
                  <div className="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-xs space-y-2">
                    <pre className="text-sky-300">
{`CREATE POLICY tenant_isolation_policy ON "Student"
FOR ALL
USING ("schoolId" = current_setting('app.current_school_id'));`}
                    </pre>
                  </div>
                </section>

                <section id="zero-data-leakage" className="space-y-3 scroll-mt-24">
                  <h2 className="text-lg font-bold text-slate-900 font-jakarta">3. Zero Cross-Tenant Data Leakage</h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Even under direct API manipulation, unauthorized tenant requests are immediately rejected at the query execution level.
                  </p>
                </section>

                <div className="rounded-xl overflow-hidden border border-slate-200 shadow-md">
                  <ZoomableImage
                    src="/screenshots/subadmin/school-do-monitoring.png"
                    alt="Campus Security Monitoring"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <p className="text-xs text-slate-400 italic text-center">
                  Figure: Real-Time School Node Isolation & Security Telemetry.
                </p>
              </article>
            )}

            {/* ── ARTICLE: SECURITY - AUDIT COMPLIANCE ── */}
            {activeCategory === 'audit-compliance' && (
              <article className="space-y-8 max-w-3xl">
                <div>
                  <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight font-jakarta">
                    Indian Trust Audit Filing & Charity Commissioner Compliance
                  </h1>
                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                    Comprehensive compliance documentation for Educational Trusts operating under the Bombay Public Trusts Act and Indian Trusts Act, 1882.
                  </p>
                </div>

                <section id="charity-commissioner-audit" className="space-y-3 scroll-mt-24">
                  <h2 className="text-lg font-bold text-slate-900 font-jakarta">1. Charity Commissioner Compliance</h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Export structured transaction logs, donor PAN details, and utilization certificates ready for submission during annual institutional trust audits.
                  </p>
                </section>

                <section id="form-10bd-guidance" className="space-y-3 scroll-mt-24">
                  <h2 className="text-lg font-bold text-slate-900 font-jakarta">2. Annual Form 10BD Preparation</h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Automatic reconciliation of donor contributions with unique certificate issuance numbers formatted according to CBDT standards.
                  </p>
                </section>

                <section id="statutory-retention" className="space-y-3 scroll-mt-24">
                  <h2 className="text-lg font-bold text-slate-900 font-jakarta">3. 7-Year Statutory Audit Retention</h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    All receipts, transaction payloads, and activity logs are archived in tamper-evident cold storage for 7+ years to meet statutory requirements.
                  </p>
                </section>

                <div className="rounded-xl overflow-hidden border border-slate-200 shadow-md">
                  <ZoomableImage
                    src="/screenshots/subadmin/school-email-automation-log.png"
                    alt="Statutory Audit Communications Trail"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <p className="text-xs text-slate-400 italic text-center">
                  Figure: Statutory Automated Communication Trail for Charity Audit Compliance.
                </p>
              </article>
            )}

            {/* =========================================================================
                6. API DOCUMENTATION ARTICLES
            ========================================================================= */}

            {/* ── ARTICLE: API - WEBHOOKS ── */}
            {activeCategory === 'webhooks-payments' && (
              <article className="space-y-8 max-w-3xl">
                <div>
                  <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight font-jakarta">
                    Razorpay & UPI Payment Webhook Integration
                  </h1>
                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                    Handle real-time payment capture events, automated 80G tax receipt triggering, and campaign ledger updates.
                  </p>
                </div>

                <section id="razorpay-upi-payload" className="space-y-3 scroll-mt-24">
                  <h2 className="text-lg font-bold text-slate-900 font-jakarta">1. Webhook JSON Payload Schema</h2>
                  <div className="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-xs space-y-2">
                    <div className="flex justify-between items-center pb-2 border-b border-slate-800 text-slate-400">
                      <span>POST /api/webhooks/razorpay</span>
                      <button
                        onClick={() => copyToClipboard('{\n  "event": "payment.captured",\n  "payload": {\n    "payment": {\n      "id": "pay_Nx982718",\n      "amount": 500000,\n      "currency": "INR",\n      "donor_pan": "ABCDE1234F",\n      "donor_email": "alumni@corporate.in",\n      "cause_id": "stem-lab-2026"\n    }\n  }\n}', 'webhook-code')}
                        className="text-[#0066FF] hover:underline flex items-center gap-1"
                      >
                        {copiedId === 'webhook-code' ? <Check size={12} /> : <Copy size={12} />}
                        <span>{copiedId === 'webhook-code' ? 'Copied' : 'Copy Payload'}</span>
                      </button>
                    </div>
                    <pre className="text-sky-300">
{`{
  "event": "payment.captured",
  "payload": {
    "payment": {
      "id": "pay_Nx982718",
      "amount": 500000,
      "currency": "INR",
      "donor_pan": "ABCDE1234F",
      "donor_email": "alumni@corporate.in",
      "cause_id": "stem-lab-2026"
    }
  }
}`}
                    </pre>
                  </div>
                </section>

                <section id="hmac-sha256-verification" className="space-y-3 scroll-mt-24">
                  <h2 className="text-lg font-bold text-slate-900 font-jakarta">2. HMAC SHA-256 Signature Verification</h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Verify incoming webhook signatures using the shared secret key in the <code className="bg-slate-100 px-1 py-0.5 rounded font-mono">X-Razorpay-Signature</code> header before processing payment records.
                  </p>
                </section>

                <section id="idempotent-handling" className="space-y-3 scroll-mt-24">
                  <h2 className="text-lg font-bold text-slate-900 font-jakarta">3. Idempotent Processing</h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    All payment events are checked against the unique <code className="font-mono text-xs">paymentId</code> to prevent duplicate receipts during network retries.
                  </p>
                </section>

                <div className="rounded-xl overflow-hidden border border-slate-200 shadow-md">
                  <ZoomableImage
                    src="/screenshots/alumni/alumni-give-donation-construction-event-cost-2.png"
                    alt="Razorpay Payment Gateway Checkout"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <p className="text-xs text-slate-400 italic text-center">
                  Figure: Real-time Razorpay Payment Webhook Trigger & Cause Funding.
                </p>
              </article>
            )}

            {/* ── ARTICLE: API - STUDENT BATCH INGESTION ── */}
            {activeCategory === 'student-sync-api' && (
              <article className="space-y-8 max-w-3xl">
                <div>
                  <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight font-jakarta">
                    Student Roster Batch Ingestion & Sync API
                  </h1>
                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                    Programmatic batch ingestion endpoint used by institutional database administrators to import student records and batch rosters directly into school nodes.
                  </p>
                </div>

                <section id="batch-api-endpoint" className="space-y-3 scroll-mt-24">
                  <h2 className="text-lg font-bold text-slate-900 font-jakarta">1. API Endpoint: Student Batch Upload</h2>
                  <div className="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-xs space-y-2">
                    <div className="text-slate-400 pb-2 border-b border-slate-800">
                      POST /api/subadmin/students/import
                    </div>
                    <pre className="text-emerald-400">
{`{
  "schoolId": "school_982631",
  "students": [
    {
      "admissionNo": "ADM-2024-0091",
      "firstName": "Aarav",
      "lastName": "Sharma",
      "email": "aarav@institution.edu",
      "standard": 10,
      "division": "A",
      "academicYear": "2024-2025"
    }
  ]
}`}
                    </pre>
                  </div>
                </section>

                <section id="bearer-authentication" className="space-y-3 scroll-mt-24">
                  <h2 className="text-lg font-bold text-slate-900 font-jakarta">2. Authenticated Session Security</h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Protected by HTTP-only secure cookie session tokens with strict campus-level sub-admin verification.
                  </p>
                </section>

                <section id="sync-json-schema" className="space-y-3 scroll-mt-24">
                  <h2 className="text-lg font-bold text-slate-900 font-jakarta">3. Response & Ingestion Report</h2>
                  <div className="bg-slate-900 text-slate-100 p-3 rounded-lg font-mono text-xs text-sky-300">
{`{
  "status": "success",
  "inserted": 45,
  "duplicatesSkipped": 0,
  "errors": []
}`}
                  </div>
                </section>

                <div className="rounded-xl overflow-hidden border border-slate-200 shadow-md">
                  <ZoomableImage
                    src="/screenshots/subadmin/school-sees-students-according-to-standards.png"
                    alt="Synchronized Student Roster"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <p className="text-xs text-slate-400 italic text-center">
                  Figure: Real-time Student Roster Breakdown by Academic Standard.
                </p>
              </article>
            )}

            {/* =========================================================================
                7. GLOSSARY
            ========================================================================= */}

            {/* ── ARTICLE: GLOSSARY ── */}
            {activeCategory === 'glossary' && (
              <article className="space-y-8 max-w-3xl">
                <div>
                  <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight font-jakarta">
                    Institutional Glossary & Regulatory Terms
                  </h1>
                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                    Key compliance, educational, and architectural definitions utilized across the My Gurukul platform.
                  </p>
                </div>

                <section id="tax-terms" className="space-y-3 scroll-mt-24">
                  <h2 className="text-lg font-bold text-slate-900 font-jakarta">Tax & Compliance Terms</h2>
                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                      <p className="font-bold text-slate-900">Section 80G:</p>
                      <p className="text-slate-600 leading-relaxed">A statutory provision under the Indian Income Tax Act, 1961 granting donors a 50% deduction on taxable income for qualifying contributions made to approved charitable trusts.</p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                      <p className="font-bold text-slate-900">Section 12A / 12AB:</p>
                      <p className="text-slate-600 leading-relaxed">Income tax registration granting charitable status and tax exemption on total income to educational and religious trusts.</p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                      <p className="font-bold text-slate-900">Form 10BD:</p>
                      <p className="text-slate-600 leading-relaxed">Annual electronic statement of donations required to be filed by educational trusts with the Income Tax Department to cross-validate donor tax claims.</p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                      <p className="font-bold text-slate-900">CSR Section 135:</p>
                      <p className="text-slate-600 leading-relaxed">Mandatory corporate philanthropy provision under the Indian Companies Act, 2013 requiring qualifying companies to invest 2% of net profit into social initiatives.</p>
                    </div>
                  </div>
                </section>

                <section id="platform-roles" className="space-y-3 scroll-mt-24">
                  <h2 className="text-lg font-bold text-slate-900 font-jakarta">Platform Roles</h2>
                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                      <p className="font-bold text-slate-900">Super Admin (Trustee):</p>
                      <p className="text-slate-600 leading-relaxed">The highest governing authority with multi-campus provisioning rights, 80G tax certificate controls, and macro financial oversight.</p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                      <p className="font-bold text-slate-900">Sub-Admin (Principal / Dean):</p>
                      <p className="text-slate-600 leading-relaxed">Campus-level administrator managing student admission rosters, standard divisions, campus memories, and batch graduation conversion.</p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                      <p className="font-bold text-slate-900">Alumni / Graduate:</p>
                      <p className="text-slate-600 leading-relaxed">Verified past student with mobile hub access for job referrals, student mentorship, memory galleries, and cause giving.</p>
                    </div>
                  </div>
                </section>

                <section id="technical-terms" className="space-y-3 scroll-mt-24">
                  <h2 className="text-lg font-bold text-slate-900 font-jakarta">Technical & Architectural Terms</h2>
                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                      <p className="font-bold text-slate-900">Row-Level Security (RLS):</p>
                      <p className="text-slate-600 leading-relaxed">Database security mechanism in PostgreSQL ensuring queries only return rows matching the authenticated tenant's identifier.</p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                      <p className="font-bold text-slate-900">RFC 6238 TOTP:</p>
                      <p className="text-slate-600 leading-relaxed">Time-based One-Time Password algorithm powering two-factor authentication for administrative accounts.</p>
                    </div>
                  </div>
                </section>
              </article>
            )}
          </main>

          {/* ──── RIGHT TABLE OF CONTENTS (Dynamic Zomato Blue Links) ──── */}
          <aside className="hidden xl:block w-64 sticky top-16 h-[calc(100vh-64px)] p-8 text-left border-l border-slate-100 overflow-y-auto">
            <div className="space-y-3">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-jakarta">
                On this page
              </span>
              <div className="space-y-2">
                {currentToc.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block text-xs font-semibold text-[#0066FF] hover:underline leading-relaxed"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </LightboxProvider>
  );
}
