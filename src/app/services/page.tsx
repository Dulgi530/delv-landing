"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";

export default function Services() {
  const { toggleLanguage } = useLanguage();
  const t = useTranslation();

  const servicesList = [
    { key: "bm" as const, href: "/services/bm", tagColor: "bg-cyan-100 text-cyan-800" },
    { key: "token" as const, href: "/services/token", tagColor: "bg-violet-100 text-violet-800" },
    { key: "ico" as const, href: "/services/ico", tagColor: "bg-amber-100 text-amber-800" },
    { key: "rwa" as const, href: "/services/rwa", tagColor: "bg-emerald-100 text-emerald-800" },
    { key: "global" as const, href: "/services/global", tagColor: "bg-blue-100 text-blue-800" },
    { key: "tax" as const, href: "/services/tax", tagColor: "bg-rose-100 text-rose-800" },
  ] as const;

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#1A202C]">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <Image src="/delv-logo.png" alt="DELV Logo" width={60} height={60} className="w-30 h-8 object-contain" />
            </Link>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-3">
                <Link href="/about" className="text-white px-4 py-2 rounded-lg hover:text-[#3BB5AC] transition-colors text-sm font-medium">{t.nav.company}</Link>
                <Link href="/services" className="text-[#3BB5AC] px-4 py-2 rounded-lg text-sm font-medium">{t.nav.services}</Link>
                <Link href="/newsletter" className="text-white px-4 py-2 rounded-lg hover:text-[#3BB5AC] transition-colors text-sm font-medium">{t.nav.newsletter}</Link>
                <Link href="/#contact-form" className="text-white px-4 py-2 rounded-lg hover:text-[#3BB5AC] transition-colors text-sm font-medium">{t.nav.contact}</Link>
                <Link href="/chat" className="text-[#c084fc] px-4 py-2 rounded-lg text-sm font-medium">DELV CHAT</Link>
              </div>
              <button onClick={toggleLanguage} className="text-white px-4 py-2 rounded-lg border border-white hover:bg-[#3BB5AC] hover:border-[#3BB5AC] transition-colors text-xs font-bold">
                {t.nav.language}
              </button>
            </div>
          </div>
        </div>
      </header>

      <section className="bg-gray-100 py-20 pt-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t.services.title}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.services.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList.map(({ key, href, tagColor }) => (
              <div key={key} className="bg-white rounded-2xl p-6 shadow-lg flex flex-col hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{t.services[key].icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t.services[key].title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed flex-grow text-sm">{t.services[key].description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {t.services[key].tags.map((tag: string, index: number) => (
                    <span key={index} className={`${tagColor} px-2 py-1 rounded-full text-xs`}>{tag}</span>
                  ))}
                </div>
                <Link href={href} className="border-2 border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:border-gray-400 transition-colors inline-block text-center mt-auto text-sm">
                  {t.services[key].learnMore}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <Link href="/about" className="flex items-start mb-4 hover:opacity-80">
                <Image src="/delv-logo.png" alt="DELV Logo" width={120} height={120} className="w-32 h-32 object-contain" />
              </Link>
              <p className="text-gray-300 leading-relaxed">{t.footer.description}</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">{t.footer.servicesTitle}</h3>
              <ul className="space-y-2">
                {servicesList.map(({ key, href }) => (
                  <li key={key}><Link href={href} className="text-gray-300 hover:text-white transition-colors">{t.services[key].title}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">{t.footer.companyTitle}</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">{t.footer.aboutUs}</Link></li>
                <li><Link href="/#team" className="text-gray-300 hover:text-white transition-colors">{t.footer.teamLabel}</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">{t.footer.contactTitle}</h3>
              <ul className="space-y-2">
                <li><Link href="mailto:admin@delv.team" className="text-gray-300 hover:text-white transition-colors">admin@delv.team</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
