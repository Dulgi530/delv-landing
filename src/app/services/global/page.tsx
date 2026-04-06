"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { ServicePageLayout } from "@/components/ServicePageLayout";

const content = {
  ko: {
    badge: "서비스 05",
    title: "자회사 설립·해외진출 자문",
    accentLine: "국내외 재단·법인 설립부터\n해외진출 전략까지",
    desc: "자회사 설립, 해외진출 자문, 국내외 재단·법인 설립을 지원합니다. 스위스·싱가포르 등 글로벌 거점 진출과 Korean Market Entry 서비스로 해외 기업의 한국 시장 진출도 원스톱으로 지원합니다.",
    cta: "상담 문의하기",
    locTitle: "주요 진출 거점",
    locations: [
      { flag: "🇨🇭", country: "스위스", city: "Zug / Lugano", tag: "Crypto Valley", desc: "전 세계 최대 블록체인 허브. 현지 주재원을 통한 네트워크 연결·투자자 미팅·재단 설립까지 원스톱 지원." },
      { flag: "🇸🇬", country: "싱가포르", city: "Singapore", tag: "Asia Hub", desc: "아시아 Web3 허브. 규제 친화적 환경에서의 법인·재단 설립 및 현지 파트너십 구축 지원." },
      { flag: "🇰🇷", country: "한국", city: "Seoul", tag: "Korean Market Entry", desc: "해외 프로젝트의 한국 시장 진출 전담 지원. 현지화 전략, 규제 대응, 커뮤니티 빌딩, 파트너십 구축까지." },
      { flag: "🌐", country: "기타", city: "Global", tag: "Custom", desc: "케이맨, UAE, 홍콩 등 프로젝트 특성에 맞는 최적의 거점 선정 및 법인·재단 설립 지원." },
    ],
    servicesTitle: "주요 서비스",
    services: [
      { title: "해외진출 자문", desc: "목적과 사업 구조에 맞는 최적의 해외 진출 전략, 거점 선정, 규제 대응 방안을 자문합니다." },
      { title: "국내 법인·재단 설립", desc: "국내 법인·재단 설립 절차 전반 지원. 블록체인 특화 법인 구조 설계 및 규제 준수 전략 포함." },
      { title: "해외 재단·법인 설립", desc: "스위스·싱가포르·케이맨 등 주요 거점에서 재단 및 법인 설립 전 과정을 지원합니다." },
      { title: "스위스 Crypto Valley 진출", desc: "현지 주재원을 통한 글로벌 네트워크 연결, 투자자 미팅, 재단 설립까지 원스톱 지원." },
      { title: "Korean Market Entry", desc: "해외 Web3 프로젝트의 한국 시장 진출 전담 지원. 현지화 전략, 규제 대응, 파트너십 구축 포함." },
      { title: "글로벌 파트너십 구축", desc: "현지 거래소, VC, 미디어, 커뮤니티와의 파트너십 구축으로 빠른 시장 정착을 지원합니다." },
    ],
    ctaTitle: "해외 진출 또는 법인 설립을 준비하고 계신가요?",
    ctaDesc: "델브의 글로벌 네트워크로 국내외 법인 설립과 해외진출을 빠르고 안전하게 지원합니다.",
  },
  en: {
    badge: "Service 05",
    title: "Subsidiary Setup · Global Expansion Advisory",
    accentLine: "From domestic & overseas\nfoundation setup to global strategy",
    desc: "We support subsidiary establishment, global expansion advisory, and domestic/overseas foundation & entity setup. From Swiss/Singapore entry to Korean Market Entry — we guide overseas companies into Korea end-to-end.",
    cta: "Contact Us",
    locTitle: "Key Expansion Locations",
    locations: [
      { flag: "🇨🇭", country: "Switzerland", city: "Zug / Lugano", tag: "Crypto Valley", desc: "World's largest blockchain hub. One-stop support from network connections and investor meetings to foundation establishment via our local representative." },
      { flag: "🇸🇬", country: "Singapore", city: "Singapore", tag: "Asia Hub", desc: "Asia's Web3 hub. Support for entity and foundation establishment in a regulation-friendly environment with local partnership building." },
      { flag: "🇰🇷", country: "Korea", city: "Seoul", tag: "Korean Market Entry", desc: "Dedicated support for overseas projects entering the Korean market. Localization strategy, regulatory compliance, community building, and partnership setup." },
      { flag: "🌐", country: "Others", city: "Global", tag: "Custom", desc: "Support for selecting and establishing the optimal entity/foundation in Cayman, UAE, Hong Kong, and more." },
    ],
    servicesTitle: "Core Services",
    services: [
      { title: "Global Expansion Advisory", desc: "Advisory on optimal overseas expansion strategy, location selection, and regulatory response tailored to your business structure." },
      { title: "Domestic Entity & Foundation Setup", desc: "Full support for domestic entity and foundation establishment with blockchain-specialized structure design and compliance strategy." },
      { title: "Overseas Foundation & Entity Setup", desc: "Full process support for foundation and entity establishment in Switzerland, Singapore, Cayman Islands, and more." },
      { title: "Swiss Crypto Valley Entry", desc: "One-stop support through our local representative: global network connections, investor meetings, and foundation establishment." },
      { title: "Korean Market Entry", desc: "Dedicated support for overseas Web3 projects entering Korea. Includes localization strategy, regulatory compliance, and partnership building." },
      { title: "Global Partnership Building", desc: "Build partnerships with local exchanges, VCs, media, and communities to ensure fast and solid market entry." },
    ],
    ctaTitle: "Planning global expansion or entity setup?",
    ctaDesc: "DELV supports domestic and overseas entity establishment and global expansion quickly and safely.",
  },
};

export default function GlobalPage() {
  const { language } = useLanguage();
  const t = content[language];
  return (
    <ServicePageLayout>
      <section className="relative bg-[#0D1117] pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(ellipse at center, #3b82f6 0%, transparent 60%)", backgroundSize: "200px 200px" }} />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-transparent" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="inline-block text-blue-400 text-sm font-mono font-bold tracking-widest mb-6 border border-blue-400/30 px-3 py-1 rounded-full">{t.badge}</span>
            <div className="flex gap-3 text-3xl mb-4">🇨🇭 🇸🇬 🇰🇷</div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-none tracking-tight">
              {language === "ko" ? (<><span className="text-blue-400">자회사 설립</span>·<br />해외진출</>) : (<><span className="text-blue-400">Global</span><br />Expansion</>)}
            </h1>
            <p className="text-xl text-blue-300/60 mb-8 leading-relaxed whitespace-pre-line">{t.accentLine}</p>
            <p className="text-gray-500 mb-10 max-w-xl leading-relaxed">{t.desc}</p>
            <Link href="/#contact-form" className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-all text-base">{t.cta} →</Link>
          </div>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[200px] font-black text-white/[0.025] leading-none select-none pointer-events-none pr-8">05</div>
      </section>
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end gap-4 mb-16">
            <h2 className="text-4xl font-black text-gray-900">{t.locTitle}</h2>
            <div className="h-1 flex-1 bg-gradient-to-r from-blue-400 to-transparent mb-2 rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.locations.map((loc, i) => (
              <div key={i} className="group bg-gray-50 hover:bg-[#0D1117] rounded-2xl p-8 border border-gray-100 hover:border-blue-500/30 transition-all cursor-default">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <span className="text-5xl">{loc.flag}</span>
                    <div>
                      <h3 className="text-xl font-black text-gray-900 group-hover:text-white transition-colors">{loc.country}</h3>
                      <p className="text-blue-500 group-hover:text-blue-400 text-sm font-mono">{loc.city}</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono border border-blue-200 group-hover:border-blue-500/40 text-blue-500 group-hover:text-blue-400 px-2 py-1 rounded-full transition-all">{loc.tag}</span>
                </div>
                <p className="text-gray-500 group-hover:text-gray-400 text-sm leading-relaxed transition-colors">{loc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-gray-900 mb-16">{t.servicesTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.services.map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mb-4"><span className="text-blue-600 font-bold text-sm">{String(i + 1).padStart(2, "0")}</span></div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#0D1117] py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">{t.ctaTitle}</h2>
          <p className="text-xl text-gray-400 mb-10">{t.ctaDesc}</p>
          <Link href="/#contact-form" className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-bold px-10 py-5 rounded-xl transition-all text-lg">{t.cta} →</Link>
        </div>
      </section>
    </ServicePageLayout>
  );
}
