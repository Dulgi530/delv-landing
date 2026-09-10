"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { ServicePageLayout } from "@/components/ServicePageLayout";

const content = {
  ko: {
    badge: "서비스 01",
    titleLead: "토큰증권",
    titleRest: "(STO)",
    accentLine:
      "증권성 판단에서 발행 구조 설계, 인가·신고까지\n자본시장법을 기준으로 검토합니다",
    introBadge: "토큰증권이란?",
    introDesc:
      "토큰증권(Security Token)은 자본시장법상 증권에 해당하는 권리를 분산원장에 기록한 것입니다. 증권에 해당하는 순간 발행·유통·공시 규제가 그대로 적용되므로, 상품 설계 이전에 증권성 판단이 선행되어야 합니다.",
    cta: "상담 문의하기",
    scopeTitle: "자문 범위",
    scope: [
      {
        icon: "⚖️",
        title: "증권성 판단",
        desc: "투자계약증권·수익증권 등 어느 유형에 해당하는지, 혹은 비증권으로 설계 가능한지를 권리 구조에 근거해 판단합니다.",
      },
      {
        icon: "🧱",
        title: "발행 구조 설계",
        desc: "기초자산 보유 주체와 투자자 권리의 연결 구조를 설계하고, 신탁·SPC 등 발행 주체 형태를 비교합니다.",
      },
      {
        icon: "📑",
        title: "공시·신고 대응",
        desc: "증권신고서 제출 의무 여부와 소액공모·사모 요건을 검토하고 필요한 서류를 준비합니다.",
      },
      {
        icon: "🏛️",
        title: "인가·라이선스",
        desc: "발행·유통 플랫폼 운영에 필요한 인가 요건을 정리하고 규제 샌드박스 활용 가능성을 검토합니다.",
      },
      {
        icon: "🔗",
        title: "분산원장 요건",
        desc: "분산원장 기록의 법적 효력 요건과 계좌관리기관 연계 구조를 기술 구현과 함께 검토합니다.",
      },
      {
        icon: "🌐",
        title: "크로스보더 발행",
        desc: "국내외 동시 발행 시 각 관할 규제 충돌을 점검하고 외국환거래법상 신고 의무를 확인합니다.",
      },
    ],
    processTitle: "진행 절차",
    steps: [
      { num: "01", title: "권리 구조 분석", desc: "상품이 투자자에게 부여하는 권리를 문서 기준으로 분해" },
      { num: "02", title: "증권성 판단", desc: "자본시장법상 증권 해당 여부와 유형 확정" },
      { num: "03", title: "발행 구조 설계", desc: "발행 주체·기초자산·투자자 권리 연결 구조 확정" },
      { num: "04", title: "인가·신고 대응", desc: "필요 서류 작성과 감독당국 협의 진행" },
    ],
    ctaTitle: "토큰증권 발행을 검토하고 계신가요?",
    ctaDesc: "증권성 판단부터 인가 대응까지 전 과정을 함께합니다.",
  },
  en: {
    badge: "Service 01",
    titleLead: "Security Token",
    titleRest: "Offering",
    accentLine:
      "From security analysis to issuance structuring and licensing,\nreviewed against Korean capital markets law",
    introBadge: "What is an STO?",
    introDesc:
      "A security token records, on a distributed ledger, a right that qualifies as a security under the Financial Investment Services and Capital Markets Act. The moment it qualifies, the full issuance, distribution, and disclosure regime applies — so the security analysis has to come before the product design.",
    cta: "Contact Us",
    scopeTitle: "Scope of Advisory",
    scope: [
      {
        icon: "⚖️",
        title: "Security Analysis",
        desc: "Determine which category the instrument falls into — investment contract, beneficiary certificate — or whether it can be structured as a non-security, based on the rights it confers.",
      },
      {
        icon: "🧱",
        title: "Issuance Structuring",
        desc: "Design how the underlying asset holder connects to investor rights, and compare issuer vehicles such as trusts and SPCs.",
      },
      {
        icon: "📑",
        title: "Disclosure & Filing",
        desc: "Assess whether a securities registration statement is required, review small-offering and private-placement conditions, and prepare the filings.",
      },
      {
        icon: "🏛️",
        title: "Licensing",
        desc: "Map the licences required to run an issuance or trading platform, and evaluate regulatory sandbox routes.",
      },
      {
        icon: "🔗",
        title: "Ledger Requirements",
        desc: "Review what gives a distributed ledger record legal effect, and how it ties into account management institutions, alongside the technical implementation.",
      },
      {
        icon: "🌐",
        title: "Cross-Border Issuance",
        desc: "Check for conflicts between jurisdictions in a simultaneous offering and confirm reporting duties under the Foreign Exchange Transactions Act.",
      },
    ],
    processTitle: "How We Work",
    steps: [
      { num: "01", title: "Rights Analysis", desc: "Break down the rights granted to investors from the documents" },
      { num: "02", title: "Security Analysis", desc: "Determine whether and how it qualifies as a security" },
      { num: "03", title: "Structure Design", desc: "Fix the issuer, underlying asset, and investor rights structure" },
      { num: "04", title: "Filing & Licensing", desc: "Prepare documents and engage with the regulator" },
    ],
    ctaTitle: "Considering a security token offering?",
    ctaDesc: "We work with you from the security analysis through to licensing.",
  },
};

export default function STOPage() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <ServicePageLayout>
      <section className="relative bg-[#0D1117] pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, #8b5cf6, #8b5cf6 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #8b5cf6, #8b5cf6 1px, transparent 1px, transparent 40px)",
          }}
        />
        <div className="absolute right-0 top-0 w-[420px] h-[420px] rounded-full bg-violet-500/10 blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="inline-block text-violet-300 text-xs font-mono font-semibold tracking-[0.2em] mb-6 border border-violet-400/25 px-3 py-1 rounded-full">
              {t.badge}
            </span>
            <h1 className="text-3xl md:text-5xl font-semibold text-white mb-5 leading-tight tracking-tight">
              <span className="text-violet-300">{t.titleLead}</span>{" "}
              {t.titleRest}
            </h1>
            <p className="text-base md:text-lg text-gray-400 mb-8 leading-relaxed whitespace-pre-line">
              {t.accentLine}
            </p>
            <div className="bg-violet-500/[0.07] border border-violet-500/20 rounded-2xl p-6 mb-9">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 bg-violet-400 rounded-full"></span>
                <span className="text-violet-300 font-semibold text-sm">
                  {t.introBadge}
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {t.introDesc}
              </p>
            </div>
            <Link
              href="/#contact-form"
              className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-semibold px-7 py-3.5 rounded-xl transition-all text-sm"
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
            <div className="h-px flex-1 bg-gradient-to-r from-violet-300 to-transparent mb-3" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.scope.map((item, i) => (
              <div
                key={i}
                className="group bg-gray-50 hover:bg-violet-50/60 rounded-2xl p-7 border border-gray-100 hover:border-violet-200 transition-all cursor-default"
              >
                <div className="text-2xl mb-4">{item.icon}</div>
                <h3 className="text-base font-semibold text-gray-900 mb-2 group-hover:text-violet-700">
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
                  <div className="absolute top-7 left-full w-full h-px bg-violet-900 hidden md:block -translate-x-1/2" />
                )}
                <div className="w-14 h-14 bg-violet-500/15 border border-violet-500/30 rounded-2xl flex items-center justify-center mb-5">
                  <span className="text-violet-300 font-semibold font-mono text-sm">
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
            className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-semibold px-8 py-4 rounded-xl transition-all text-sm"
          >
            {t.cta} →
          </Link>
        </div>
      </section>
    </ServicePageLayout>
  );
}
