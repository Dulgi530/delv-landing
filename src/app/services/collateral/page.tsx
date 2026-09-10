"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { ServicePageLayout } from "@/components/ServicePageLayout";

const content = {
  ko: {
    badge: "서비스 02",
    titleLead: "담보",
    titleRest: "유동화",
    accentLine:
      "무역대금 등 해외결제에서 담보의 적정성을 판정하고\n그 판정을 회계처리까지 연결합니다",
    introBadge: "무엇을 만드는가",
    introDesc:
      "담보 심사 담당자가 발행자·수탁기관·운용사에게서 문서를 받아 등록하면, 판정 엔진이 토큰의 법적 형태를 가리고 적용할 규정 팩을 골라 적격 여부를 판정한 뒤 담보 값을 산정합니다. 규정 판단이 필요한 자리는 자동 처리하지 않고 예외 큐로 보내 사람이 검토합니다.",
    cta: "도입 문의하기",
    scopeTitle: "판정 엔진 구성",
    scope: [
      {
        icon: "🧾",
        title: "문서 확보·등록",
        desc: "발행 문서, 수탁 계약, 토큰 조건, 환매 조건, 규약·약관을 확보해 근거 사슬에 등록합니다. 발행 문서가 없으면 판정을 개시하지 않습니다.",
      },
      {
        icon: "🔍",
        title: "형태 판별",
        desc: "토큰이 기초자산에 대한 집행 가능한 권리인지, 수탁기관 보유 자산에 대한 증권적 권리인지, 펀드에 대한 경제적 지분인지를 가립니다.",
      },
      {
        icon: "📚",
        title: "규정 팩 적재",
        desc: "확정된 업권과 관할에 맞는 규정 팩을 고르고, 그 판본과 해시를 근거 사슬에 함께 기록합니다.",
      },
      {
        icon: "✅",
        title: "적격 판정",
        desc: "발행자 구분·신용등급·잔존만기를 규정 팩의 적격 목록과 대조합니다. 목록에 없으면 자동 비적격 처리하지 않고 준용 판단으로 넘깁니다.",
      },
      {
        icon: "📉",
        title: "담보 값 산정",
        desc: "haircut과 LTV, 청산 임계값을 산정하고 만기불일치 등 전제에 따라 조정합니다.",
      },
      {
        icon: "🔄",
        title: "회계 연계",
        desc: "판정 결과를 회계처리로 넘겨 부외 자산 처리, 잔액 대조, 정산 손익, 다통화 환산까지 이어지게 합니다.",
      },
    ],
    processTitle: "도입 절차",
    steps: [
      { num: "01", title: "업무흐름 정리", desc: "현행 담보 심사 절차와 수행 부서, 통제 지점을 문서화" },
      { num: "02", title: "규정 팩 설계", desc: "적용 업권·관할별 규정 팩과 적격 목록 구성" },
      { num: "03", title: "엔진 구축", desc: "판정 로직과 근거 사슬, 예외 큐 구현" },
      { num: "04", title: "회계 연계·검증", desc: "회계처리 연계와 오라클 기반 통제 시험" },
    ],
    ctaTitle: "담보 판정 체계를 준비하고 계신가요?",
    ctaDesc: "업무흐름 정리부터 엔진 구축과 회계 연계까지 함께합니다.",
  },
  en: {
    badge: "Service 02",
    titleLead: "Collateral",
    titleRest: "Liquidity",
    accentLine:
      "We judge collateral adequacy in cross-border settlement\nand carry that judgment through to accounting",
    introBadge: "What we build",
    introDesc:
      "A credit officer collects and registers documents from the issuer, custodian, and fund manager. The determination engine then classifies the token's legal form, selects the applicable rule pack, decides eligibility, and calculates the collateral value. Anything that calls for regulatory judgment is not auto-decided — it goes to an exception queue for a person to review.",
    cta: "Request a Consultation",
    scopeTitle: "Inside the Engine",
    scope: [
      {
        icon: "🧾",
        title: "Document Intake",
        desc: "Collect issuance documents, custody agreements, token terms, repo terms, and rules, and register them in the evidence chain. Without the issuance document, no determination starts.",
      },
      {
        icon: "🔍",
        title: "Form Classification",
        desc: "Determine whether the token is an enforceable right to the underlying, a securities-type right against custodian-held assets, or an economic interest in a fund.",
      },
      {
        icon: "📚",
        title: "Rule Pack Loading",
        desc: "Select the rule pack for the confirmed sector and jurisdiction, and record its version and hash in the evidence chain.",
      },
      {
        icon: "✅",
        title: "Eligibility Determination",
        desc: "Match issuer class, credit rating, and residual maturity against the rule pack's eligibility list. If nothing matches, it is routed to judgment rather than auto-rejected.",
      },
      {
        icon: "📉",
        title: "Valuation",
        desc: "Calculate haircut, LTV, and liquidation thresholds, then adjust for assumptions such as maturity mismatch.",
      },
      {
        icon: "🔄",
        title: "Accounting Handoff",
        desc: "Pass the determination into accounting treatment: off-balance-sheet handling, balance reconciliation, settlement gain and loss, and multi-currency translation.",
      },
    ],
    processTitle: "How We Deliver",
    steps: [
      { num: "01", title: "Map the Workflow", desc: "Document the current credit review process, owners, and control points" },
      { num: "02", title: "Design Rule Packs", desc: "Build rule packs and eligibility lists per sector and jurisdiction" },
      { num: "03", title: "Build the Engine", desc: "Implement determination logic, evidence chain, and exception queue" },
      { num: "04", title: "Wire & Verify", desc: "Connect accounting treatment and test controls against oracles" },
    ],
    ctaTitle: "Building a collateral determination system?",
    ctaDesc: "We work from workflow mapping through engine build and accounting integration.",
  },
};

export default function CollateralPage() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <ServicePageLayout>
      <section className="relative bg-[#0D1117] pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, #f59e0b, #f59e0b 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #f59e0b, #f59e0b 1px, transparent 1px, transparent 40px)",
          }}
        />
        <div className="absolute right-0 top-0 w-[420px] h-[420px] rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="inline-block text-amber-300 text-xs font-mono font-semibold tracking-[0.2em] mb-6 border border-amber-400/25 px-3 py-1 rounded-full">
              {t.badge}
            </span>
            <h1 className="text-3xl md:text-5xl font-semibold text-white mb-5 leading-tight tracking-tight">
              <span className="text-amber-300">{t.titleLead}</span>{" "}
              {t.titleRest}
            </h1>
            <p className="text-base md:text-lg text-gray-400 mb-8 leading-relaxed whitespace-pre-line">
              {t.accentLine}
            </p>
            <div className="bg-amber-500/[0.07] border border-amber-500/20 rounded-2xl p-6 mb-9">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 bg-amber-400 rounded-full"></span>
                <span className="text-amber-300 font-semibold text-sm">
                  {t.introBadge}
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {t.introDesc}
              </p>
            </div>
            <Link
              href="/#contact-form"
              className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white font-semibold px-7 py-3.5 rounded-xl transition-all text-sm"
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
              {t.scopeTitle}
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-amber-300 to-transparent mb-3" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.scope.map((item, i) => (
              <div
                key={i}
                className="group bg-gray-50 hover:bg-amber-50/60 rounded-2xl p-7 border border-gray-100 hover:border-amber-200 transition-all cursor-default"
              >
                <div className="text-2xl mb-4">{item.icon}</div>
                <h3 className="text-base font-semibold text-gray-900 mb-2 group-hover:text-amber-700">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
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
                  <div className="absolute top-7 left-full w-full h-px bg-amber-900 hidden md:block -translate-x-1/2" />
                )}
                <div className="w-14 h-14 bg-amber-500/15 border border-amber-500/30 rounded-2xl flex items-center justify-center mb-5">
                  <span className="text-amber-300 font-semibold font-mono text-sm">
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
            className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white font-semibold px-8 py-4 rounded-xl transition-all text-sm"
          >
            {t.cta} →
          </Link>
        </div>
      </section>
    </ServicePageLayout>
  );
}
