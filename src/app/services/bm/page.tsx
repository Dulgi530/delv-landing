"use client";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { ServicePageLayout } from "@/components/ServicePageLayout";

const content = {
  ko: {
    badge: "서비스 01", title: "BM 개발 패키지", accentTitle: "비즈니스의 핵심을\n처음부터 함께 설계합니다",
    desc: "Web3 비즈니스 모델 설계부터 수익 구조 검증, 시장 진입 전략, IR 피치덱 제작까지 — 사업의 기반을 완성합니다.", cta: "상담 문의하기",
    items: [
      { num: "01", title: "Web3 비즈니스 모델 설계", desc: "탈중앙화 구조에 적합한 수익 모델과 가치 제안을 설계합니다.", tag: "Business Model" },
      { num: "02", title: "토큰 이코노미 설계", desc: "토큰 발행·유통·소각 구조, 인센티브 모델, 거버넌스 구조를 설계합니다.", tag: "Tokenomics" },
      { num: "03", title: "시장 조사 및 경쟁사 분석", desc: "목표 시장의 규모와 트렌드를 분석하고 차별화 포인트를 도출합니다.", tag: "Market Research" },
      { num: "04", title: "IR 피치덱 제작", desc: "투자자를 설득할 수 있는 전문적인 IR 피치덱을 제작합니다.", tag: "IR Deck" },
      { num: "05", title: "GTM 전략 수립", desc: "제품 출시 전략, 초기 사용자 확보 방법, 커뮤니티 빌딩 계획을 수립합니다.", tag: "Go-To-Market" },
      { num: "06", title: "재무 모델링 및 수익 예측", desc: "3~5년 재무 모델을 구축하고 현실적인 수익 예측 시나리오를 제시합니다.", tag: "Financial Model" },
    ],
    ctaTitle: "BM 개발이 필요하신가요?", ctaDesc: "델브가 귀사의 Web3 비즈니스 기반을 함께 설계합니다.",
  },
  en: {
    badge: "Service 01", title: "BM Development Package", accentTitle: "We design the core of\nyour business from scratch",
    desc: "From Web3 business model design to revenue structure validation, market entry strategy, and IR pitch deck — we complete your business foundation.", cta: "Contact Us",
    items: [
      { num: "01", title: "Web3 Business Model Design", desc: "Design revenue models and value propositions suited for decentralized structures.", tag: "Business Model" },
      { num: "02", title: "Token Economy Design", desc: "Design token issuance, circulation, burning structures, incentive models, and governance.", tag: "Tokenomics" },
      { num: "03", title: "Market Research & Competitor Analysis", desc: "Analyze target market size and trends, and identify differentiation points.", tag: "Market Research" },
      { num: "04", title: "IR Pitch Deck Creation", desc: "Create professional IR pitch decks to persuade investors.", tag: "IR Deck" },
      { num: "05", title: "Go-To-Market Strategy", desc: "Establish product launch strategy, initial user acquisition, and community building plans.", tag: "Go-To-Market" },
      { num: "06", title: "Financial Modeling & Revenue Projection", desc: "Build 3-5 year financial models and present realistic revenue projection scenarios.", tag: "Financial Model" },
    ],
    ctaTitle: "Need BM Development?", ctaDesc: "DELV will design your Web3 business foundation together.",
  },
};

export default function BMPage() {
  const { language } = useLanguage();
  const t = content[language];
  return (
    <ServicePageLayout>
      <section className="relative bg-[#0D1117] pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#22d3ee 1px, transparent 1px), linear-gradient(90deg, #22d3ee 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="inline-block text-cyan-400 text-sm font-mono font-bold tracking-widest mb-6 border border-cyan-400/30 px-3 py-1 rounded-full">{t.badge}</span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-none tracking-tight">{t.title.split(" ").slice(0,2).join(" ")}<br /><span className="text-cyan-400">{t.title.split(" ").slice(2).join(" ")}</span></h1>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed whitespace-pre-line">{t.accentTitle}</p>
            <p className="text-gray-500 mb-10 max-w-xl leading-relaxed">{t.desc}</p>
            <Link href="/#contact-form" className="inline-flex items-center gap-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8 py-4 rounded-xl transition-all text-base">{t.cta} →</Link>
          </div>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[200px] font-black text-white/[0.03] leading-none select-none pointer-events-none pr-8">01</div>
      </section>
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end gap-4 mb-16">
            <h2 className="text-4xl font-black text-gray-900">{language === "ko" ? "주요 서비스" : "Core Services"}</h2>
            <div className="h-1 flex-1 bg-gradient-to-r from-cyan-400 to-transparent mb-2 rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.items.map((item) => (
              <div key={item.num} className="group relative bg-gray-50 hover:bg-[#0D1117] rounded-2xl p-8 transition-all duration-300 border border-gray-100 hover:border-cyan-500/30 cursor-default">
                <div className="flex items-start justify-between mb-6">
                  <span className="text-4xl font-black text-gray-200 group-hover:text-cyan-500/30 transition-colors leading-none">{item.num}</span>
                  <span className="text-xs font-mono text-gray-400 group-hover:text-cyan-400/70 border border-gray-200 group-hover:border-cyan-500/30 px-2 py-1 rounded-full transition-all">{item.tag}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-white mb-3 transition-colors">{item.title}</h3>
                <p className="text-gray-500 group-hover:text-gray-400 text-sm leading-relaxed transition-colors">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#0D1117] py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">{t.ctaTitle}</h2>
          <p className="text-xl text-gray-400 mb-10">{t.ctaDesc}</p>
          <Link href="/#contact-form" className="inline-flex items-center gap-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-10 py-5 rounded-xl transition-all text-lg">{t.cta} →</Link>
        </div>
      </section>
    </ServicePageLayout>
  );
}
