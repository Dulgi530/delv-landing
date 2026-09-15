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
      "USDC 기반 결제·정산과 기업 지갑 운영을\n직접 설계하고 구축합니다",
    introBadge: "개발 부문",
    introDesc:
      "자문에서 끝내지 않고 실제로 돌아가는 인프라를 만듭니다. 결제 주소 발급과 입금 확인, 상태 추적, Webhook 전달까지의 결제 흐름과 기업 지갑·트레저리 운영 체계를 함께 구축합니다.",
    cta: "도입 문의하기",
    productsTitle: "제공 모듈",
    products: [
      {
        tag: "01",
        name: "Stablecoin Payment Gateway",
        desc: "USDC 기반 입금·송금·정산을 처리하는 결제 게이트웨이입니다.",
        items: [
          "USDC 기반 입금 · 송금 · 정산 기능",
          "거래별 전용 결제 주소 또는 Invoice 생성",
          "입금 확인 및 Transaction Status 추적",
          "결제 완료 Webhook / API 제공",
          "Ethereum · Base 등 EVM 체인 우선 지원",
          "향후 CCTP 기반 크로스체인 USDC 정산 지원",
        ],
        note: "Circle CCTP는 USDC를 체인 간 burn-and-mint 방식으로 이동시켜 크로스체인 결제에도 쓸 수 있습니다.",
      },
      {
        tag: "02",
        name: "Corporate Wallet & Treasury API",
        desc: "기업이 직접 지갑과 자금을 통제할 수 있는 운영 체계입니다.",
        items: [
          "기업별 Wallet 생성 및 관리",
          "고객사 · 거래별 Wallet Mapping",
          "입출금 승인 프로세스",
          "다중 승인 · Role 기반 권한관리",
          "Wallet Balance 및 Transaction History API",
          "운영자 Dashboard 제공",
        ],
        note: null,
      },
    ],
    processTitle: "구축 절차",
    steps: [
      { num: "01", title: "요건 정의", desc: "결제 흐름과 승인 체계, 대상 체인과 통화 확정" },
      { num: "02", title: "인프라 설계", desc: "지갑 구조, 주소 발급 정책, 키 관리 방식 설계" },
      { num: "03", title: "구현 · 연동", desc: "게이트웨이와 Treasury API 구현, 기존 시스템 연동" },
      { num: "04", title: "검증 · 운영", desc: "테스트넷 검증 후 운영 전환과 모니터링 체계 구성" },
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
      "We design and build USDC-based payment, settlement,\nand corporate wallet operations",
    introBadge: "Engineering",
    introDesc:
      "We do not stop at advice — we build infrastructure that actually runs. That covers the payment path from address issuance through deposit confirmation, status tracking, and webhook delivery, alongside the corporate wallet and treasury operations around it.",
    cta: "Request a Consultation",
    productsTitle: "Modules",
    products: [
      {
        tag: "01",
        name: "Stablecoin Payment Gateway",
        desc: "A payment gateway handling USDC deposits, transfers, and settlement.",
        items: [
          "USDC deposits, transfers, and settlement",
          "Per-transaction deposit address or invoice generation",
          "Deposit confirmation and transaction status tracking",
          "Payment-complete webhook and API delivery",
          "EVM chains first — Ethereum, Base, and others",
          "Cross-chain USDC settlement via CCTP on the roadmap",
        ],
        note: "Circle's CCTP moves USDC across chains by burn-and-mint, which also makes it usable for cross-chain payments.",
      },
      {
        tag: "02",
        name: "Corporate Wallet & Treasury API",
        desc: "An operating layer that puts wallets and funds under the company's own control.",
        items: [
          "Wallet creation and management per company",
          "Wallet mapping by client and by transaction",
          "Deposit and withdrawal approval flow",
          "Multi-signature approval and role-based access control",
          "Wallet balance and transaction history API",
          "Operator dashboard",
        ],
        note: null,
      },
    ],
    processTitle: "How We Deliver",
    steps: [
      { num: "01", title: "Define Requirements", desc: "Fix the payment flow, approval model, target chains and currencies" },
      { num: "02", title: "Design", desc: "Wallet structure, address issuance policy, and key management" },
      { num: "03", title: "Build & Integrate", desc: "Implement the gateway and treasury API, wire into existing systems" },
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
          <div className="flex items-end gap-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight">
              {t.productsTitle}
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-cyan-300 to-transparent mb-3" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {t.products.map((product) => (
              <div
                key={product.tag}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
              >
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-cyan-600 font-mono font-semibold text-sm">
                    {product.tag}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {product.name}
                  </h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {product.desc}
                </p>
                <ul className="space-y-2.5">
                  {product.items.map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-gray-700">
                      <span className="text-cyan-500 mt-[3px] shrink-0">▸</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                {product.note && (
                  <p className="mt-6 pt-5 border-t border-gray-200 text-xs text-gray-400 leading-relaxed">
                    {product.note}
                  </p>
                )}
              </div>
            ))}
          </div>
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
