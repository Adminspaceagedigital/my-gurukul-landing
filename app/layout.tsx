import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'My Gurukul | Unified Institutional Platform & Alumni Ecosystem',
  description:
    'The premier digital platform empowering Educational Trusts, Universities, School Leaders, and Global Alumni with sovereign web portals, automated Section 80G philanthropy, and career mentorship.',
  keywords: [
    'My Gurukul',
    'Educational Trust Platform',
    'University Alumni Network',
    'School Management System',
    '80G Tax Exemption Donations',
    'Alumni Mentorship Hub',
    'Educational Philanthropy',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable} scroll-smooth`}>
      <body className="font-sans min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#f1f7fd] to-[#eaf2fb] text-slate-900 antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
