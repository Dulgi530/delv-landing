"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { ServicePageLayout } from "@/components/ServicePageLayout";

const content = {
  ko: {
    badge: "서비스 04",
    title: "RWA 도입 자문",
    accentLine: "실물 자산을 블록체인으로\n새로운 자금조달의 길",
    rwaBadge: "RWA란?",
    rwaDesc: "Real World Asset — 부동산, 미술품, 금, 채권 등 실물 자산을 블록체인 토큰으로 표현하는 기술입니다.",
    cta: "상담 문의하기",
    assetsTitle: "토큰화 가능한 자산",
    assets: [
      { icon: "🏢", title: "부동산", desc: "상업용·주거용 부동산을 토큰화하여 소액 투자·유동성 확보" },
      { icon: "🎨", title: "갤러리·예술품", desc: "미술품·수집품의 소유권 분할로 글로벌 투자자 유치" },
      { icon: "🪙", title: "현물 자산", desc: "금·원자재 등 현물을 온체인으로 표현하여 거래 효율화" },
      { icon: "📄", title: "채권·금융 상품", desc: "사채·채권 토큰화로 새로운 자금조달 채널 확보" },
      { icon: "🏭", title: "인프라·설비", desc: "제조·에너지 설비 토큰화로 투자자와 수익 공유" },
      { icon: "💡", title: "지식재산권", desc: "특허·저작권 토큰화로 라이선스 수익 분배" },
    ],
    processTitle: "RWA 도입 프로세스",
    steps: [
      { num: "01", title: "자산 실사", desc: "보유 자산 가치 평가 및 토큰화 적합성 분석" },
      { num: "02", title: "구조 설계", desc: "법적·기술적 토큰화 구조 설계 및 규제 검토" },
      { num: "03", title: "토큰 발행", desc: "스마트 컨트랙트 개발 및 토큰 발행" },
      { num: "04", title: "투자자 매칭", desc: "글로벌 투자자 네트워크를 통한 자금조달 지원" },
    ],
    ctaTitle: "RWA 토큰화를 검토하고 계신가요?",
    ctaDesc: "자산 실사부터 투자자 매칭까지 전 과정을 지원합니다.",
  },
  en: {
    badge: "Service 04",
    title: "RWA Advisory",
    accentLine: "Real-world assets on blockchain\nA new path to fundraising",
    rwaBadge: "What is RWA?",
    rwaDesc: "Real World Asset — technology that represents real-world assets such as real estate, art, gold, and bonds as blockchain tokens.",
    cta: "Contact Us",
    assetsTitle: "Tokenizable Asset Types",
    assets: [
      { icon: "🏢", title: "Real Estate", desc: "Tokenize commercial/residential property for fractional investment and liquidity" },
      { icon: "🎨", title: "Art & Collectibles", desc: "Fractional ownership of artworks to attract global investors" },
      { icon: "🪙", title: "Physical Assets", desc: "Represent gold, commodities on-chain for efficient trading" },
      { icon: "📄", title: "Bonds & Financial Instruments", desc: "New fundraising channels through corporate bond tokenization" },
      { icon: "🏭", title: "Infrastructure & Equipment", desc: "Share revenue with investors through equipment tokenization" },
      { icon: "💡", title: "Intellectual Property", desc: "Distribute licensing revenue through IP tokenization" },
    ],
    processTitle: "RWA Integration Process",
    steps: [
      { num: "01", title: "Asset Due Diligence", desc: "Evaluate asset value and analyze tokenization suitability" },
      { num: "02", title: "Structure Design", desc: "Design legal & technical tokenization structure and regulatory review" },
      { num: "03", title: "Token Issuance", desc: "Develop smart contracts and issue tokens" },
      { num: "04", title: "Investor Matching", desc: "Support fundraising through global investor network" },
    ],
    ctaTitle: "Considering RWA Tokenization?",
    ctaDesc: "We support the entire process from asset due diligence to investor matching.",
  },
};

export default function RWAPage() {
  const { language } = useLanguage();
  const t = content[language];
  return (
    <ServicePageLayout>
      <section className="relative bg-[#0D1117] pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(0deg, #10b981, #10b981 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #10b981, #10b981 1px, transparent 1px, transparent 40px)" }} />
        <div className="absolute right-0 top-0 w-[500px] h-[500px] rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="inline-block text-emerald-400 text-sm font-mono font-bold tracking-widest mb-6 border border-emerald-400/30 px-3 py-1 rounded-full">{t.badge}</span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-none tracking-tight"><span className="text-emerald-400">RWA</span><br />{language === "ko" ? "도입 자문" : "Advisory"}</h1>
            <p className="text-xl text-emerald-300/60 mb-8 leading-relaxed whitespace-pre-line">{t.accentLine}</p>
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-6 mb-10">
              <div className="flex items-center gap-2 mb-3"><span className="w-2 h-2 bg-emerald-400 rounded-full"></span><span className="text-emerald-400 font-bold text-sm">{t.rwaBadge}</span></div>
              <p className="text-gray-400 text-sm leading-relaxed">{t.rwaDesc}</p>
            </div>
            <Link href="/#contact-form" className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-4 rounded-xl transition-all text-base">{t.cta} →</Link>
          </div>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[200px] font-black text-white/[0.025] leading-none select-none pointer-events-none pr-8">04</div>
      </section>
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end gap-4 mb-16">
            <h2 className="text-4xl font-black text-gray-900">{t.assetsTitle}</h2>
            <div className="h-1 flex-1 bg-gradient-to-r from-emerald-400 to-transparent mb-2 rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.assets.map((asset, i) => (
              <div key={i} className="group bg-gray-50 hover:bg-emerald-50 rounded-2xl p-7 border border-gray-100 hover:border-emerald-200 transition-all cursor-default">
                <div className="text-4xl mb-4">{asset.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-700">{asset.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{asset.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#0D1117] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-white mb-16">{t.processTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {t.steps.map((s, i) => (
              <div key={i} className="relative">
                {i < t.steps.length - 1 && (<div className="absolute top-8 left-full w-full h-px bg-emerald-800 hidden md:block -translate-x-1/2" />)}
                <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500/40 rounded-2xl flex items-center justify-center mb-5"><span className="text-emerald-400 font-black font-mono">{s.num}</span></div>
                <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-24 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">{t.ctaTitle}</h2>
          <p className="text-xl text-gray-500 mb-10">{t.ctaDesc}</p>
          <Link href="/#contact-form" className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-10 py-5 rounded-xl transition-all text-lg">{t.cta} →</Link>
        </div>
      </section>
    </ServicePageLayout>
  );
}
