"use client";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { ServicePageLayout } from "@/components/ServicePageLayout";

const content = {
  ko: {
    badge: "서비스 01", title: "BM 개발 패키지", accentTitle: "귀사의 기존 서비스에\nWeb3를 접목합니다",
    desc: "이미 운영 중인 비즈니스에 Web3를 도입하여 새로운 가치와 수익 모델을 창출합니다. 도입 타당성 진단부터 전환 로드맵, 토큰 이코노미, IR 자료까지 — 기존 서비스의 Web3 전환을 원스톱으로 설계합니다.", cta: "상담 문의하기",
    items: [
      { num: "01", title: "Web3 도입 타당성 분석", desc: "기존 비즈니스에 Web3 기술이 실제로 필요한지, 도입 시 기대 효과와 리스크를 객관적으로 진단합니다.", tag: "Business Audit" },
      { num: "02", title: "Web3 전환 로드맵 설계", desc: "단계별 Web3 도입 계획, 기술 스택 선정, 일정 및 예산 계획을 수립합니다.", tag: "Roadmap" },
      { num: "03", title: "토큰 이코노미 설계", desc: "기존 서비스와 연계된 토큰 발행·유통·소각 구조와 인센티브 모델을 설계합니다.", tag: "Tokenomics" },
      { num: "04", title: "신규 수익 모델 설계", desc: "Web3 도입으로 창출 가능한 새로운 수익 구조와 가치 제안을 도출합니다.", tag: "Revenue Model" },
      { num: "05", title: "IR 피치덱 및 투자자 전략", desc: "Web3 전환 스토리를 담은 전문 IR 자료와 투자자 유치 전략을 수립합니다.", tag: "IR Deck" },
      { num: "06", title: "GTM 전략 및 커뮤니티 빌딩", desc: "Web3 전환 후 시장 진입 전략, 초기 사용자 확보, 커뮤니티 운영 계획을 수립합니다.", tag: "Go-To-Market" },
    ],
    ctaTitle: "귀사 서비스에 Web3 도입을 검토 중이신가요?", ctaDesc: "델브가 기존 비즈니스에 최적화된 Web3 전환 전략을 함께 설계합니다.",
  },
  en: {
    badge: "Service 01", title: "BM Development Package", accentTitle: "We integrate Web3 into\nyour existing service",
    desc: "We create new value and revenue models by introducing Web3 to your existing business. From feasibility diagnosis to roadmap, tokenomics, and IR materials — we design your Web3 transformation end-to-end.", cta: "Contact Us",
    items: [
      { num: "01", title: "Web3 Feasibility Analysis", desc: "We objectively diagnose whether Web3 technology is truly needed for your existing business and assess expected benefits and risks.", tag: "Business Audit" },
      { num: "02", title: "Web3 Transformation Roadmap", desc: "We establish a phased Web3 adoption plan including technology stack selection, timeline, and budget.", tag: "Roadmap" },
      { num: "03", title: "Token Economy Design", desc: "We design token issuance, circulation, and burning structures with incentive models linked to your existing service.", tag: "Tokenomics" },
      { num: "04", title: "New Revenue Model Design", desc: "We identify new revenue structures and value propositions achievable through Web3 adoption.", tag: "Revenue Model" },
      { num: "05", title: "IR Pitch Deck & Investor Strategy", desc: "We create professional IR materials showcasing your Web3 transformation story and develop investor attraction strategies.", tag: "IR Deck" },
      { num: "06", title: "GTM Strategy & Community Building", desc: "We establish market entry strategy, initial user acquisition, and community management plans post-Web3 transition.", tag: "Go-To-Market" },
    ],
    ctaTitle: "Considering Web3 adoption for your service?", ctaDesc: "DELV will design a Web3 transformation strategy optimized for your existing business.",
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
