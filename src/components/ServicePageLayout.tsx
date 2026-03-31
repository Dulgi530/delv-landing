"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";

interface ServiceLink {
  href: string;
  labelKo: string;
  labelEn: string;
}

const serviceLinks: ServiceLink[] = [
  { href: "/services/bm", labelKo: "BM 개발 패키지", labelEn: "BM Development" },
  { href: "/services/token", labelKo: "토큰/마이크로결제 개발", labelEn: "Token / Micropayment Dev" },
  { href: "/services/ico", labelKo: "ICO 상장 패키지", labelEn: "ICO Listing Package" },
  { href: "/services/rwa", labelKo: "RWA 도입 자문", labelEn: "RWA Advisory" },
  { href: "/services/global", labelKo: "자회사 설립·해외진출", labelEn: "Subsidiary & Global" },
  { href: "/services/tax", labelKo: "세무 진단", labelEn: "Tax Diagnosis" },
];

interface ServicePageLayoutProps {
  children: React.ReactNode;
}

export function ServicePageLayout({ children }: ServicePageLayoutProps) {
  const { language, toggleLanguage } = useLanguage();
  const t = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0D1117] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Image src="/delv-logo.png" alt="DELV Logo" width={60} height={60} className="h-8 w-auto object-contain" />
          </Link>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-1">
              <Link href="/about" className="text-gray-300 px-4 py-2 rounded-lg hover:text-white hover:bg-white/10 transition-all text-sm font-medium">{t.nav.company}</Link>
              <Link href="/services" className="text-white px-4 py-2 rounded-lg bg-white/10 text-sm font-medium">{t.nav.services}</Link>
              <Link href="/newsletter" className="text-gray-300 px-4 py-2 rounded-lg hover:text-white hover:bg-white/10 transition-all text-sm font-medium">{t.nav.newsletter}</Link>
              <Link href="/#contact-form" className="text-gray-300 px-4 py-2 rounded-lg hover:text-white hover:bg-white/10 transition-all text-sm font-medium">{t.nav.contact}</Link>
              <Link href="/chat" className="text-[#c084fc] px-4 py-2 rounded-lg hover:bg-[#c084fc]/10 transition-all text-sm font-medium">DELV CHAT</Link>
            </div>
            <button onClick={toggleLanguage} className="text-gray-300 px-3 py-1.5 rounded-md border border-white/20 hover:bg-white/10 transition-all text-xs font-bold">
              {t.nav.language}
            </button>
          </div>
        </div>
      </header>

      {children}

      <footer className="bg-[#0D1117] border-t border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <Link href="/" className="flex items-start mb-6 hover:opacity-80">
                <Image src="/delv-logo.png" alt="DELV Logo" width={120} height={120} className="w-28 h-28 object-contain" />
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed">{t.footer.description}</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{t.footer.servicesTitle}</h3>
              <ul className="space-y-2">
                {serviceLinks.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {language === "ko" ? s.labelKo : s.labelEn}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{t.footer.companyTitle}</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">{t.footer.aboutUs}</Link></li>
                <li><Link href="/#team" className="text-gray-400 hover:text-white transition-colors text-sm">{t.footer.teamLabel}</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{t.footer.contactTitle}</h3>
              <ul className="space-y-2">
                <li><Link href="mailto:admin@delv.team" className="text-gray-400 hover:text-white transition-colors text-sm">admin@delv.team</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
