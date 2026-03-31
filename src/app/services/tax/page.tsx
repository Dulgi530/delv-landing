"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { ServicePageLayout } from "@/components/ServicePageLayout";

const content = {
  ko: {
    badge: "서비스 06",
    title: "세무 진단",
    accentLine: "2027년 가상자산 과세\n지금 준비해야 합니다",
    urgentTitle: "⚠️ 2027년부터 가상자산 과세 시행",
    urgentDesc: "연간 250만원 초과 가상자산 소득에 대해 20% 세율이 적용됩니다. 지금 세무 진단을 받고 미리 대비하세요.",
    cta: "세무 진단 문의하기",
    timelineTitle: "과세 타임라인",
    timeline: [
      { year: "2025", label: "현재", desc: "가상자산 소득 과세 유예 중", current: true },
      { year: "2026", label: "준비기", desc: "신고 의무 사전 준비", warn: true },
      { year: "2027", label: "과세 시행", desc: "250만원 초과 소득 20% 과세", danger: true },
    ],
    servicesTitle: "세무 진단 서비스",
    services: [
      { title: "보유 자산 세무 진단", desc: "현재 보유 중인 가상자산의 세무 현황을 진단하고, 2027년 과세 시행 시 예상 세액을 산출합니다.", icon: "🔍" },
      { title: "절세 전략 수립", desc: "합법적인 절세 전략을 수립합니다. 취득 시점 및 단가 관리, 손익 상계, 법인·개인 구조 최적화 등 맞춤 전략을 제안합니다.", icon: "📉" },
      { title: "2027 과세 컴플라이언스", desc: "가상자산 과세 관련 법령 변화를 모니터링하고, 신고·납부 의무를 사전에 준비할 수 있도록 안내합니다.", icon: "📋" },
      { title: "법인 가상자산 회계처리", desc: "법인이 보유·운영 중인 가상자산의 회계처리 방법을 설계하고, 재무제표에 적정하게 반영될 수 있도록 지원합니다.", icon: "🏢" },
      { title: "세무 신고 대행", desc: "가상자산 관련 소득세·법인세·부가세 신고를 대행합니다.", icon: "📤" },
      { title: "해외 거래소 세무 이슈 대응", desc: "해외 거래소 이용 시 발생하는 세무 이슈에 대한 전문 자문을 제공합니다.", icon: "🌐" },
    ],
    ctaTitle: "지금 세무 진단을 받으세요",
    ctaDesc: "2027년 과세 전에 미리 준비하면 절세 기회를 극대화할 수 있습니다.",
  },
  en: {
    badge: "Service 06",
    title: "Tax Diagnosis",
    accentLine: "2027 Virtual Asset Taxation\nPrepare now",
    urgentTitle: "⚠️ Virtual Asset Taxation Starts in 2027",
    urgentDesc: "A 20% tax rate applies to annual virtual asset income exceeding KRW 2.5 million. Get a tax diagnosis now and prepare in advance.",
    cta: "Get Tax Diagnosis",
    timelineTitle: "Tax Timeline",
    timeline: [
      { year: "2025", label: "Now", desc: "Virtual asset income tax deferred", current: true },
      { year: "2026", label: "Prep Phase", desc: "Advance preparation for filing obligations", warn: true },
      { year: "2027", label: "Tax Enforcement", desc: "20% tax on income exceeding KRW 2.5M", danger: true },
    ],
    servicesTitle: "Tax Diagnosis Services",
    services: [
      { title: "Virtual Asset Tax Diagnosis", desc: "Diagnose the tax status of virtual assets you currently hold and calculate estimated tax amount for 2027 enforcement.", icon: "🔍" },
      { title: "Tax Minimization Strategy", desc: "Establish legitimate tax minimization strategies including acquisition timing management and corporate/individual structure optimization.", icon: "📉" },
      { title: "2027 Tax Compliance", desc: "Monitor changes in virtual asset tax-related laws and guide you to prepare for reporting obligations in advance.", icon: "📋" },
      { title: "Corporate Virtual Asset Accounting", desc: "Design accounting methods for virtual assets held by corporations and support proper reflection in financial statements.", icon: "🏢" },
      { title: "Tax Filing Agency", desc: "Handle income tax, corporate tax, and VAT filings related to virtual assets.", icon: "📤" },
      { title: "Overseas Exchange Tax Issues", desc: "Provide professional advisory on tax issues arising from using overseas exchanges.", icon: "🌐" },
    ],
    ctaTitle: "Get Your Tax Diagnosis Now",
    ctaDesc: "Preparing before the 2027 taxation maximizes your tax saving opportunities.",
  },
};

export default function TaxPage() {
  const { language } = useLanguage();
  const t = content[language];
  return (
    <ServicePageLayout>
      <section className="relative bg-[#0D1117] pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(135deg, #f43f5e 0, #f43f5e 1px, transparent 0, transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-rose-500/10 blur-3xl pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-600 via-rose-400 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="inline-block text-rose-400 text-sm font-mono font-bold tracking-widest mb-6 border border-rose-400/30 px-3 py-1 rounded-full">{t.badge}</span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-none tracking-tight">
              {language === "ko" ? (<><span className="text-rose-400">세무</span> 진단<br /><span className="text-4xl md:text-5xl text-rose-300/60 font-black">2027 과세 대비</span></>) : (<><span className="text-rose-400">Tax</span><br />Diagnosis</>)}
            </h1>
            <p className="text-xl text-rose-300/60 mb-8 leading-relaxed whitespace-pre-line">{t.accentLine}</p>
            <div className="bg-rose-500/15 border border-rose-500/40 rounded-2xl p-6 mb-10">
              <p className="text-rose-400 font-bold mb-2">{t.urgentTitle}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{t.urgentDesc}</p>
            </div>
            <Link href="/#contact-form" className="inline-flex items-center gap-3 bg-rose-600 hover:bg-rose-500 text-white font-bold px-8 py-4 rounded-xl transition-all text-base">{t.cta} →</Link>
          </div>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[200px] font-black text-white/[0.025] leading-none select-none pointer-events-none pr-8">06</div>
      </section>
      <section className="bg-white py-20 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-black text-gray-900 mb-12 text-center">{t.timelineTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.timeline.map((item, i) => (
              <div key={i} className={`rounded-2xl p-8 text-center relative overflow-hidden border ${item.danger ? "bg-rose-600 border-rose-700" : item.warn ? "bg-rose-50 border-rose-200" : "bg-gray-50 border-gray-200"}`}>
                <div className={`text-5xl font-black mb-3 ${item.danger ? "text-white" : item.warn ? "text-rose-600" : "text-gray-300"}`}>{item.year}</div>
                <h3 className={`text-lg font-bold mb-2 ${item.danger ? "text-white" : "text-gray-900"}`}>{item.label}</h3>
                <p className={`text-sm ${item.danger ? "text-rose-200" : "text-gray-500"}`}>{item.desc}</p>
                {item.current && (<div className="absolute top-4 right-4 w-2 h-2 bg-green-400 rounded-full animate-pulse" />)}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end gap-4 mb-16">
            <h2 className="text-4xl font-black text-gray-900">{t.servicesTitle}</h2>
            <div className="h-1 flex-1 bg-gradient-to-r from-rose-400 to-transparent mb-2 rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.services.map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-rose-200 hover:shadow-md transition-all">
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#0D1117] py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-rose-500/10 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">{t.ctaTitle}</h2>
          <p className="text-xl text-gray-400 mb-10">{t.ctaDesc}</p>
          <Link href="/#contact-form" className="inline-flex items-center gap-3 bg-rose-600 hover:bg-rose-500 text-white font-bold px-10 py-5 rounded-xl transition-all text-lg">{t.cta} →</Link>
        </div>
      </section>
    </ServicePageLayout>
  );
}
