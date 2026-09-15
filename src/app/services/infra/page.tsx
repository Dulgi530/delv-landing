"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { ServicePageLayout } from "@/components/ServicePageLayout";

const content = {
  ko: {
    badge: "서비스 03",
    titleLead: "스테이블코인 정산",
    titleRest: "인프라",
    subtitle: "Stablecoin Settlement / Tokenization Infrastructure",
    accentLine:
      "USDC 기반 결제·정산 흐름을\n직접 설계하고 구축합니다",
    introBadge: "개발 부문",
    introDesc:
      "자문에서 끝내지 않고 실제로 돌아가는 인프라를 만듭니다. 거래별 결제 주소 발급부터 입금 확인과 상태 추적, 결제 완료 Webhook 전달까지 결제 흐름 전체를 구축합니다.",
    cta: "도입 문의하기",
    featuresTitle: "Stablecoin Payment Gateway",
    featuresLead: "USDC 기반 입금·송금·정산을 처리하는 결제 게이트웨이입니다.",
    features: [
      {
        icon: "💸",
        title: "입금 · 송금 · 정산",
        desc: "USDC 기반 결제 흐름을 처리합니다.",
      },
      {
        icon: "🧾",
        title: "결제 주소 · Invoice",
        desc: "거래별 전용 결제 주소 또는 Invoice를 생성합니다.",
      },
      {
        icon: "🔎",
        title: "입금 확인 · 상태 추적",
        desc: "입금을 확인하고 Transaction Status를 추적합니다.",
      },
      {
        icon: "🔔",
        title: "Webhook · API",
        desc: "결제 완료 시 Webhook과 API로 결과를 전달합니다.",
      },
      {
        icon: "⛓️",
        title: "EVM 체인 지원",
        desc: "Ethereum · Base 등 EVM 계열 체인을 우선 지원합니다.",
      },
      {
        icon: "🌉",
        title: "크로스체인 정산",
        desc: "향후 CCTP 기반 크로스체인 USDC 정산을 지원합니다.",
      },
    ],
    note: "Circle CCTP는 USDC를 체인 간 burn-and-mint 방식으로 이동시켜 크로스체인 결제에도 쓸 수 있습니다.",
    processTitle: "구축 절차",
    steps: [
      { num: "01", title: "요건 정의", desc: "결제 흐름과 대상 체인, 통화와 정산 주기 확정" },
      { num: "02", title: "인프라 설계", desc: "주소 발급 정책과 입금 확인 기준, 연동 방식 설계" },
      { num: "03", title: "구현 · 연동", desc: "게이트웨이 구현과 기존 시스템 · 회계 연동" },
      { num: "04", title: "검증 · 운영", desc: "테스트넷 검증 후 운영 전환과 모니터링 구성" },
    ],
    ctaTitle: "스테이블코인 결제 인프라가 필요하신가요?",
    ctaDesc: "요건 정의부터 구현과 운영 전환까지 함께합니다.",
  },
  en: {
    badge: "Service 03",
    titleLead: "Stablecoin Settlement",
    titleRest: "Infrastructure",
    subtitle: "Stablecoin Settlement / Tokenization Infrastructure",
    accentLine:
      "We design and build the USDC payment\nand settlement path ourselves",
    introBadge: "Engineering",
    introDesc:
      "We do not stop at advice — we build infrastructure that actually runs, covering the whole payment path: per-transaction address issuance, deposit confirmation, status tracking, and payment-complete webhook delivery.",
    cta: "Request a Consultation",
    featuresTitle: "Stablecoin Payment Gateway",
    featuresLead:
      "A payment gateway handling USDC deposits, transfers, and settlement.",
    features: [
      {
        icon: "💸",
        title: "Deposits · Transfers · Settlement",
        desc: "Handles the USDC payment flow end to end.",
      },
      {
        icon: "🧾",
        title: "Addresses · Invoices",
        desc: "Generates a dedicated deposit address or invoice per transaction.",
      },
      {
        icon: "🔎",
        title: "Confirmation · Status",
        desc: "Confirms deposits and tracks transaction status.",
      },
      {
        icon: "🔔",
        title: "Webhook · API",
        desc: "Delivers the result by webhook and API once payment completes.",
      },
      {
        icon: "⛓️",
        title: "EVM Chains",
        desc: "Ethereum, Base, and other EVM chains supported first.",
      },
      {
        icon: "🌉",
        title: "Cross-Chain Settlement",
        desc: "Cross-chain USDC settlement via CCTP on the roadmap.",
      },
    ],
    note: "Circle's CCTP moves USDC across chains by burn-and-mint, which also makes it usable for cross-chain payments.",
    processTitle: "How We Deliver",
    steps: [
      { num: "01", title: "Define Requirements", desc: "Fix the payment flow, target chains, currencies, and settlement cycle" },
      { num: "02", title: "Design", desc: "Address issuance policy, confirmation criteria, and integration approach" },
      { num: "03", title: "Build & Integrate", desc: "Implement the gateway and wire it into existing and accounting systems" },
      { num: "04", title: "Verify & Operate", desc: "Testnet verification, cutover, and monitoring" },
    ],
    ctaTitle: "Need stablecoin payment infrastructure?",
    ctaDesc: "We work from requirements through build and into production.",
  },
};

export default function InfraPage() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <ServicePageLayout>
      <section className="relative bg-[#0D1117] pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, #06b6d4, #06b6d4 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #06b6d4, #06b6d4 1px, transparent 1px, transparent 40px)",
          }}
        />
        <div className="absolute right-0 top-0 w-[420px] h-[420px] rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="inline-block text-cyan-300 text-xs font-mono font-semibold tracking-[0.2em] mb-6 border border-cyan-400/25 px-3 py-1 rounded-full">
              {t.badge}
            </span>
            <h1 className="text-3xl md:text-5xl font-semibold text-white mb-3 leading-tight tracking-tight">
              <span className="text-cyan-300">{t.titleLead}</span> {t.titleRest}
            </h1>
            <p className="text-sm font-mono text-cyan-400/50 mb-6 tracking-wide">
              {t.subtitle}
            </p>
            <p className="text-base md:text-lg text-gray-400 mb-8 leading-relaxed whitespace-pre-line">
              {t.accentLine}
            </p>
            <div className="bg-cyan-500/[0.07] border border-cyan-500/20 rounded-2xl p-6 mb-9">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                <span className="text-cyan-300 font-semibold text-sm">
                  {t.introBadge}
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {t.introDesc}
              </p>
            </div>
            <Link
              href="/#contact-form"
              className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold px-7 py-3.5 rounded-xl transition-all text-sm"
            >
              {t.cta} →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end gap-4 mb-3">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight">
              {t.featuresTitle}
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-cyan-300 to-transparent mb-3" />
          </div>
          <p className="text-gray-500 text-sm mb-12">{t.featuresLead}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.features.map((item, i) => (
              <div
                key={i}
                className="group bg-gray-50 hover:bg-cyan-50/60 rounded-2xl p-7 border border-gray-100 hover:border-cyan-200 transition-all cursor-default"
              >
                <div className="text-2xl mb-4">{item.icon}</div>
                <h3 className="text-base font-semibold text-gray-900 mb-2 group-hover:text-cyan-700">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs text-gray-400 leading-relaxed max-w-3xl">
            {t.note}
          </p>
        </div>
      </section>

      <section className="bg-[#0D1117] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-12 tracking-tight">
            {t.processTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {t.steps.map((s, i) => (
              <div key={i} className="relative">
                {i < t.steps.length - 1 && (
                  <div className="absolute top-7 left-full w-full h-px bg-cyan-900 hidden md:block -translate-x-1/2" />
                )}
                <div className="w-14 h-14 bg-cyan-500/15 border border-cyan-500/30 rounded-2xl flex items-center justify-center mb-5">
                  <span className="text-cyan-300 font-semibold font-mono text-sm">
                    {s.num}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  {s.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 tracking-tight">
            {t.ctaTitle}
          </h2>
          <p className="text-base text-gray-500 mb-9">{t.ctaDesc}</p>
          <Link
            href="/#contact-form"
            className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold px-8 py-4 rounded-xl transition-all text-sm"
          >
            {t.cta} →
          </Link>
        </div>
      </section>
    </ServicePageLayout>
  );
}
