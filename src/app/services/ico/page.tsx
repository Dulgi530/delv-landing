"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { ServicePageLayout } from "@/components/ServicePageLayout";

const content = {
  ko: {
    badge: "서비스 03",
    title: "ICO 상장 패키지",
    accentLine: "3종 보고서로\n상장의 문을 열다",
    desc: "거래소 상장에 필요한 법률검토의견서, 재무보고서, 코드 감사보고서를 원스톱으로 제공합니다.",
    cta: "상담 문의하기",
    packagesTitle: "3종 패키지 구성",
    packagesDesc: "법률 · 재무 · 기술 전문가가 동시에 진행합니다",
    packages: [
      { num: "01", title: "법률검토의견서", en: "Legal Review Opinion", items: ["토큰의 증권성 여부 분석 (자본시장법)", "특금법상 VASP 신고 대상 여부 및 수리 조건 검토", "가상자산 이용자 보호법 준수 여부 검토", "해당 국가 법령 적합성 및 규제 리스크 분석", "공식 법률 의견서 발행 (변호사 서명)"] },
      { num: "02", title: "재무보고서", en: "Financial Report", items: ["토큰 발행·유통·소각 회계처리 기준 수립", "자금 사용 계획 검증 및 투명성 보고", "가상자산 평가 손익 처리 기준 제시", "투자유치용 재무 모델링 및 수익 예측", "공인 회계사 서명 공식 재무보고서 발행"] },
      { num: "03", title: "코드 감사보고서", en: "Code Audit Report", items: ["스마트 컨트랙트 보안 취약점 전수 분석", "재진입 공격·오버플로우·접근 제어 등 검사", "비즈니스 로직 정확성 및 토큰노믹스 구현 검증", "가스 최적화 및 업그레이드 가능성 점검", "공식 Audit 보고서 발행 (감사기관 서명)"] },
    ],
    processTitle: "진행 프로세스",
    process: [
      { step: "01", title: "초기 상담", desc: "프로젝트 현황 파악 및 필요 서류 확인" },
      { step: "02", title: "자료 수집", desc: "화이트페이퍼, 코드, 재무자료 등 제출" },
      { step: "03", title: "전문가 검토", desc: "변호사·회계사·감사 전문가 동시 진행" },
      { step: "04", title: "보고서 발행", desc: "3종 공식 보고서 발행 및 상장 지원" },
    ],
    ctaTitle: "ICO 상장을 준비하고 계신가요?",
    ctaDesc: "델브의 법률·재무·기술 전문가가 함께 상장을 준비합니다.",
  },
  en: {
    badge: "Service 03",
    title: "ICO Listing Package",
    accentLine: "Open the door to\nlisting with 3 reports",
    desc: "We provide the Legal Review Opinion, Financial Report, and Code Audit Report required for exchange listing — all in one package.",
    cta: "Contact Us",
    packagesTitle: "3-Report Package",
    packagesDesc: "Legal · Financial · Technical experts proceed simultaneously",
    packages: [
      { num: "01", title: "Legal Review Opinion", en: "Legal Review Opinion", items: ["Token securities classification analysis (Capital Markets Act)", "VASP registration requirement & approval condition review", "Virtual Asset User Protection Act compliance review", "Jurisdiction compliance & regulatory risk analysis", "Official legal opinion issuance (attorney-signed)"] },
      { num: "02", title: "Financial Report", en: "Financial Report", items: ["Token issuance, circulation & burn accounting standards", "Fund usage plan verification & transparency report", "Virtual asset valuation & profit/loss treatment guidelines", "Financial modeling & revenue projection for fundraising", "CPA-signed official financial report issuance"] },
      { num: "03", title: "Code Audit Report", en: "Code Audit Report", items: ["Comprehensive smart contract vulnerability analysis", "Reentrancy, overflow & access control checks", "Business logic accuracy & tokenomics implementation verification", "Gas optimization & upgradeability review", "Official audit report issuance (auditor-signed)"] },
    ],
    processTitle: "Our Process",
    process: [
      { step: "01", title: "Initial Consultation", desc: "Understand project status and required documents" },
      { step: "02", title: "Document Collection", desc: "Submit whitepaper, code, financial data, etc." },
      { step: "03", title: "Expert Review", desc: "Lawyers, accountants & auditors proceed simultaneously" },
      { step: "04", title: "Report Issuance", desc: "Issue 3 official reports and support listing" },
    ],
    ctaTitle: "Preparing for ICO Listing?",
    ctaDesc: "DELV's legal, financial, and technical experts will prepare your listing together.",
  },
};

export default function ICOPage() {
  const { language } = useLanguage();
  const t = content[language];
  return (
    <ServicePageLayout>
      <section className="relative bg-[#0D1117] pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(45deg, #f59e0b 25%, transparent 25%), linear-gradient(-45deg, #f59e0b 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f59e0b 75%), linear-gradient(-45deg, transparent 75%, #f59e0b 75%)", backgroundSize: "60px 60px", backgroundPosition: "0 0, 0 30px, 30px -30px, -30px 0px" }} />
        <div className="absolute bottom-0 left-0 w-[600px] h-[300px] bg-amber-500/10 blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="inline-block text-amber-400 text-sm font-mono font-bold tracking-widest mb-6 border border-amber-400/30 px-3 py-1 rounded-full">{t.badge}</span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-none tracking-tight">ICO<br /><span className="text-amber-400">상장</span> {language === "ko" ? "패키지" : "Listing"}</h1>
            <p className="text-xl text-amber-300/60 mb-6 leading-relaxed whitespace-pre-line font-light">{t.accentLine}</p>
            <p className="text-gray-500 mb-10 max-w-xl leading-relaxed">{t.desc}</p>
            <div className="flex flex-wrap gap-3 mb-10">
              {["Legal Review", "Financial Report", "Code Audit"].map((label) => (<span key={label} className="text-xs font-mono border border-amber-400/40 text-amber-400 px-3 py-1.5 rounded-full">{label}</span>))}
            </div>
            <Link href="/#contact-form" className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-4 rounded-xl transition-all text-base">{t.cta} →</Link>
          </div>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[200px] font-black text-white/[0.025] leading-none select-none pointer-events-none pr-8">03</div>
      </section>
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-3">{t.packagesTitle}</h2>
            <p className="text-gray-500">{t.packagesDesc}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.packages.map((pkg, i) => (
              <div key={i} className="rounded-2xl overflow-hidden border border-gray-100 hover:border-amber-200 transition-colors shadow-sm hover:shadow-lg">
                <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 text-[80px] font-black text-white/10 leading-none pr-4 pt-2">{pkg.num}</div>
                  <h3 className="text-2xl font-black text-white mb-1 relative">{pkg.title}</h3>
                  <p className="text-amber-100/70 text-sm relative">{pkg.en}</p>
                </div>
                <div className="bg-white p-8">
                  <ul className="space-y-3">{pkg.items.map((item, j) => (<li key={j} className="flex items-start gap-3 text-gray-600 text-sm"><span className="w-5 h-5 rounded-full bg-amber-100 text-amber-600 text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">✓</span>{item}</li>))}</ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-gray-900 mb-16 text-center">{t.processTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="absolute top-8 left-[12.5%] right-[12.5%] h-px bg-amber-200 hidden md:block" />
            {t.process.map((p, i) => (
              <div key={i} className="text-center relative">
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-5 relative z-10 shadow-lg shadow-amber-200"><span className="text-lg font-black text-white">{p.step}</span></div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#0D1117] py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">{t.ctaTitle}</h2>
          <p className="text-xl text-gray-400 mb-10">{t.ctaDesc}</p>
          <Link href="/#contact-form" className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-black font-bold px-10 py-5 rounded-xl transition-all text-lg">{t.cta} →</Link>
        </div>
      </section>
    </ServicePageLayout>
  );
}
