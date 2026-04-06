"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { ServicePageLayout } from "@/components/ServicePageLayout";

const content = {
  ko: {
    badge: "서비스 06",
    title: "법률·세무 진단",
    accentLine: "2027년 가상자산 과세\n지금 준비해야 합니다",
    urgentTitle: "⚠️ 2027년부터 가상자산 과세 시행",
    urgentDesc: "연간 250만원 초과 가상자산 소득에 대해 20% 세율이 적용됩니다. 법률 컴플라이언스와 세무 진단을 지금 받고 미리 대비하세요.",
    cta: "법률·세무 진단 문의하기",
    timelineTitle: "과세 타임라인",
    timeline: [
      { year: "2025", label: "현재", desc: "가상자산 소득 과세 유예 중", current: true },
      { year: "2026", label: "준비기", desc: "신고 의무 사전 준비", warn: true },
      { year: "2027", label: "과세 시행", desc: "250만원 초과 소득 20% 과세", danger: true },
    ],
    legalTitle: "법률 파트",
    legalSubtitle: "규제 불확실성을 관리하는 Legal Compliance 서비스",
    legalItems: [
      { title: "법률·규제 거버넌스 관리", desc: "분기별 법률 건강 점검(Quarterly Legal Health Check)을 통해 운영 리스크와 규제 불확실성을 정기적으로 관리합니다.", icon: "⚖️", tag: "Legal Compliance" },
      { title: "VASP 신고 및 유지 관리 컨설팅", desc: "특금법상 가상자산사업자(VASP) 신고 대상 여부, 위탁 구조 변경 시 신고 수리 조건 유지 여부를 정기적으로 점검합니다.", icon: "🏛️", tag: "VASP" },
      { title: "이용자보호법 준수 실태 점검", desc: "2024년 시행 '가상자산 이용자 보호법'에 따라 고객 자산 분리 보관, 콜드월렛 보관 비율의 법적 기준 충족 여부를 확인하고 보고서를 발행합니다.", icon: "🛡️", tag: "User Protection" },
      { title: "스테이킹 계약서(SLA) 최적화", desc: "슬래싱(Slashing) 발생 시 책임 소재, 네트워크 업그레이드(Pectra 등)에 따른 권리 변동을 최신 기술 변화에 맞춰 계약서를 정기적으로 갱신합니다.", icon: "📝", tag: "SLA" },
      { title: "내부통제 기준 수립 및 교육", desc: "임직원의 미공개 정보 이용 금지, 가상자산 거래 제한 등 내부통제 기준이 작동하고 있는지 분기별로 감사하고 교육 세션을 제공합니다.", icon: "🎓", tag: "Internal Control" },
    ],
    taxTitle: "세무·회계 파트",
    taxSubtitle: "실시간 데이터 기반 Financial Integrity 서비스",
    taxItems: [
      { title: "스테이킹 보상 회계처리 자문", desc: "매 에포크(Epoch)마다 발생하는 보상의 수익 인식 시점, 적용 환율, 미실현 손익 처리 기준을 제시하고 전표 작성을 검토합니다.", icon: "💰", tag: "Staking Rewards" },
      { title: "온체인 자산 실사 (Proof of Reserve)", desc: "거래소·커스터디에 맡긴 가상자산이 실제 온체인에 존재하는지 정기 실사하여 '자산 존재 증명서'를 발행합니다.", icon: "🔍", tag: "Proof of Reserve" },
      { title: "세무 리스크 관리", desc: "법인세법상 가상자산 평가 손익 반영 여부, 스테이킹 보상의 배당·사업소득 분류 등 최신 세무 당국 해석에 따른 법인세 신고 지원 서비스를 제공합니다.", icon: "📊", tag: "Tax Risk" },
      { title: "SaaS 솔루션 연계 데이터 검증", desc: "기관이 사용하는 회계 솔루션(파라메타, 코드박스 등)의 데이터가 온체인 데이터와 일치하는지 제3자 입장에서 검증(Reconciliation)합니다.", icon: "🔄", tag: "Reconciliation" },
      { title: "보유 자산 세무 진단 및 절세 전략", desc: "현재 보유 가상자산의 세무 현황을 진단하고, 취득 단가 관리·손익 상계·법인/개인 구조 최적화 등 합법적 절세 전략을 수립합니다.", icon: "📉", tag: "Tax Strategy" },
      { title: "세무 신고 대행", desc: "가상자산 관련 소득세·법인세·부가세 신고를 대행하며, 해외 거래소 이용 시 발생하는 세무 이슈에 대한 전문 자문을 제공합니다.", icon: "📤", tag: "Filing" },
    ],
    ctaTitle: "지금 법률·세무 진단을 받으세요",
    ctaDesc: "2027년 과세 전에 미리 준비하면 법률 리스크와 세금 부담을 최소화할 수 있습니다.",
  },
  en: {
    badge: "Service 06",
    title: "Legal & Tax Diagnosis",
    accentLine: "2027 Virtual Asset Taxation\nPrepare now",
    urgentTitle: "⚠️ Virtual Asset Taxation Starts in 2027",
    urgentDesc: "A 20% tax rate applies to annual virtual asset income exceeding KRW 2.5 million. Get legal compliance and tax diagnosis now to prepare in advance.",
    cta: "Get Legal & Tax Diagnosis",
    timelineTitle: "Tax Timeline",
    timeline: [
      { year: "2025", label: "Now", desc: "Virtual asset income tax deferred", current: true },
      { year: "2026", label: "Prep Phase", desc: "Advance preparation for filing obligations", warn: true },
      { year: "2027", label: "Tax Enforcement", desc: "20% tax on income exceeding KRW 2.5M", danger: true },
    ],
    legalTitle: "Legal Part",
    legalSubtitle: "Legal Compliance services to manage regulatory uncertainty",
    legalItems: [
      { title: "Legal & Regulatory Governance", desc: "We manage operational risks and regulatory uncertainty through a Quarterly Legal Health Check program.", icon: "⚖️", tag: "Legal Compliance" },
      { title: "VASP Registration & Maintenance", desc: "We regularly review whether your service is subject to VASP registration under the FTRA and whether approval conditions are maintained when structures change.", icon: "🏛️", tag: "VASP" },
      { title: "User Protection Act Compliance", desc: "Under the 2024 Virtual Asset User Protection Act, we verify customer asset segregation and cold wallet storage ratios, and issue compliance reports.", icon: "🛡️", tag: "User Protection" },
      { title: "Staking SLA Optimization", desc: "We regularly update contracts to reflect the latest technical changes including Slashing liability, and rights changes from network upgrades like Pectra.", icon: "📝", tag: "SLA" },
      { title: "Internal Control & Training", desc: "We conduct quarterly audits on internal control standards — including insider trading prohibitions and virtual asset transaction restrictions — and provide training sessions.", icon: "🎓", tag: "Internal Control" },
    ],
    taxTitle: "Tax & Accounting Part",
    taxSubtitle: "Financial Integrity services based on real-time on-chain data",
    taxItems: [
      { title: "Staking Rewards Accounting Advisory", desc: "We provide standards for revenue recognition timing, applicable exchange rates, and unrealized P&L treatment for rewards generated each epoch, and review journal entries.", icon: "💰", tag: "Staking Rewards" },
      { title: "On-chain Asset Due Diligence (Proof of Reserve)", desc: "We regularly verify that virtual assets held at exchanges or custodians actually exist on-chain and issue a Proof of Reserve certificate.", icon: "🔍", tag: "Proof of Reserve" },
      { title: "Tax Risk Management", desc: "We provide corporate tax filing support based on the latest tax authority interpretations — including virtual asset valuation P&L treatment and staking reward income classification.", icon: "📊", tag: "Tax Risk" },
      { title: "SaaS Data Reconciliation", desc: "As an independent third party, we verify that data from accounting solutions (Parameta, Codebox, etc.) matches on-chain data through Reconciliation.", icon: "🔄", tag: "Reconciliation" },
      { title: "Tax Diagnosis & Minimization Strategy", desc: "We diagnose your current virtual asset tax status and establish legal tax minimization strategies including acquisition cost management, P&L netting, and structure optimization.", icon: "📉", tag: "Tax Strategy" },
      { title: "Tax Filing Agency", desc: "We handle income tax, corporate tax, and VAT filings related to virtual assets, and provide professional advisory on overseas exchange tax issues.", icon: "📤", tag: "Filing" },
    ],
    ctaTitle: "Get Your Legal & Tax Diagnosis Now",
    ctaDesc: "Preparing before 2027 taxation minimizes legal risks and unnecessary tax burdens.",
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
              {language === "ko" ? (<><span className="text-rose-400">법률·세무</span> 진단<br /><span className="text-4xl md:text-5xl text-rose-300/60 font-black">2027 과세 대비</span></>) : (<><span className="text-rose-400">Legal & Tax</span><br />Diagnosis</>)}
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
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end gap-4 mb-4">
            <h2 className="text-4xl font-black text-gray-900">{t.legalTitle}</h2>
            <div className="h-1 flex-1 bg-gradient-to-r from-rose-400 to-transparent mb-2 rounded-full" />
          </div>
          <p className="text-gray-500 mb-12">{t.legalSubtitle}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.legalItems.map((s, i) => (
              <div key={i} className="group bg-gray-50 hover:bg-[#0D1117] rounded-2xl p-7 border border-gray-100 hover:border-rose-500/30 transition-all duration-300 cursor-default">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{s.icon}</div>
                  <span className="text-xs font-mono text-rose-500 group-hover:text-rose-400 border border-rose-200 group-hover:border-rose-500/30 px-2 py-1 rounded-full transition-all">{s.tag}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-white mb-3 transition-colors">{s.title}</h3>
                <p className="text-gray-500 group-hover:text-gray-400 text-sm leading-relaxed transition-colors">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end gap-4 mb-4">
            <h2 className="text-4xl font-black text-gray-900">{t.taxTitle}</h2>
            <div className="h-1 flex-1 bg-gradient-to-r from-rose-400 to-transparent mb-2 rounded-full" />
          </div>
          <p className="text-gray-500 mb-12">{t.taxSubtitle}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.taxItems.map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-rose-200 hover:shadow-md transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{s.icon}</div>
                  <span className="text-xs font-mono text-rose-500 border border-rose-100 px-2 py-1 rounded-full">{s.tag}</span>
                </div>
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
