"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { ServicePageLayout } from "@/components/ServicePageLayout";

const content = {
  ko: {
    badge: "서비스 02",
    title: "토큰/마이크로결제 개발",
    accentTitle: "스마트 컨트랙트부터\nX402까지",
    desc: "스마트 컨트랙트 설계·개발, X402 프로토콜 도입, DApp 구축, 토큰노믹스 설계 — 블록체인 기술 전반을 원스톱으로 지원합니다.",
    cta: "상담 문의하기",
    servicesTitle: "주요 서비스",
    items: [
      { title: "스마트 컨트랙트 설계 및 개발", desc: "ERC-20, ERC-721, ERC-1155 등 표준 기반의 스마트 컨트랙트를 설계하고 개발합니다.", tag: "Smart Contract", icon: "🔗" },
      { title: "X402 프로토콜 도입", desc: "HTTP 402 기반의 X402 마이크로결제 프로토콜을 도입하여 콘텐츠·API·서비스에 토큰 기반 결제를 연동합니다.", tag: "X402", icon: "⚡" },
      { title: "DApp 개발", desc: "탈중앙화 애플리케이션 프론트엔드·백엔드를 개발합니다. 지갑 연동, 트랜잭션 처리, 사용자 경험 최적화를 포함합니다.", tag: "DApp", icon: "🌐" },
      { title: "토큰노믹스 설계", desc: "토큰 공급량, 분배 구조, 인센티브 메커니즘을 정밀하게 설계합니다.", tag: "Tokenomics", icon: "📊" },
      { title: "Paymaster / SBT / DID / NFT 구조 자문", desc: "가스비 대납, 영혼 결합 토큰, 탈중앙화 신원, NFT 등 고급 Web3 구조에 대한 설계 자문을 제공합니다.", tag: "Advanced Web3", icon: "🧩" },
      { title: "코드 보안 감사 (Audit)", desc: "스마트 컨트랙트의 보안 취약점을 철저히 검사하고 공식 감사 보고서를 발행합니다.", tag: "Security Audit", icon: "🔒" },
    ],
    techTitle: "기술 스택",
    stackLabel: ["블록체인", "스마트 컨트랙트", "마이크로결제", "Web3 통합"],
    stacks: [
      ["Ethereum", "Polygon", "Base", "Arbitrum"],
      ["Solidity", "Hardhat", "Foundry", "OpenZeppelin"],
      ["X402", "Lightning", "Payment Channels"],
      ["ethers.js", "wagmi", "viem", "WalletConnect"],
    ],
    ctaTitle: "블록체인 개발이 필요하신가요?",
    ctaDesc: "델브의 기술팀이 귀사의 Web3 제품을 함께 구현합니다.",
  },
  en: {
    badge: "Service 02",
    title: "Token / Micropayment Dev",
    accentTitle: "From Smart Contracts\nto X402",
    desc: "Smart contract design & development, X402 protocol integration, DApp building, and tokenomics design — full-stack blockchain technology support.",
    cta: "Contact Us",
    servicesTitle: "Core Services",
    items: [
      { title: "Smart Contract Design & Development", desc: "Design and develop smart contracts based on ERC-20, ERC-721, ERC-1155 standards.", tag: "Smart Contract", icon: "🔗" },
      { title: "X402 Protocol Integration", desc: "Integrate the X402 micropayment protocol based on HTTP 402 to connect token-based payments.", tag: "X402", icon: "⚡" },
      { title: "DApp Development", desc: "Develop decentralized application frontend and backend. Includes wallet integration and UX optimization.", tag: "DApp", icon: "🌐" },
      { title: "Tokenomics Design", desc: "Precisely design token supply, distribution structure, and incentive mechanisms.", tag: "Tokenomics", icon: "📊" },
      { title: "Paymaster / SBT / DID / NFT Advisory", desc: "Provide design advisory on advanced Web3 structures including Paymaster, SBT, DID, and NFTs.", tag: "Advanced Web3", icon: "🧩" },
      { title: "Code Security Audit", desc: "Thoroughly inspect smart contract security vulnerabilities and issue official audit reports.", tag: "Security Audit", icon: "🔒" },
    ],
    techTitle: "Tech Stack",
    stackLabel: ["Blockchain", "Smart Contract", "Micropayment", "Web3 Integration"],
    stacks: [
      ["Ethereum", "Polygon", "Base", "Arbitrum"],
      ["Solidity", "Hardhat", "Foundry", "OpenZeppelin"],
      ["X402", "Lightning", "Payment Channels"],
      ["ethers.js", "wagmi", "viem", "WalletConnect"],
    ],
    ctaTitle: "Need Blockchain Development?",
    ctaDesc: "DELV's tech team will build your Web3 product together.",
  },
};

export default function TokenPage() {
  const { language } = useLanguage();
  const t = content[language];
  return (
    <ServicePageLayout>
      <section className="relative bg-[#0D1117] pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #a78bfa 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-violet-500/10 blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="inline-block text-violet-400 text-sm font-mono font-bold tracking-widest mb-6 border border-violet-400/30 px-3 py-1 rounded-full">{t.badge}</span>
            <div className="text-5xl md:text-7xl font-black text-white mb-2 leading-none tracking-tight"><span className="text-violet-400">Token</span> /</div>
            <div className="text-4xl md:text-6xl font-black text-white mb-6 leading-none tracking-tight">Micropayment Dev</div>
            <p className="text-xl text-violet-300/70 mb-6 leading-relaxed whitespace-pre-line">{t.accentTitle}</p>
            <p className="text-gray-500 mb-10 max-w-xl leading-relaxed">{t.desc}</p>
            <Link href="/#contact-form" className="inline-flex items-center gap-3 bg-violet-600 hover:bg-violet-500 text-white font-bold px-8 py-4 rounded-xl transition-all text-base">{t.cta} →</Link>
          </div>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[200px] font-black text-white/[0.025] leading-none select-none pointer-events-none pr-8">02</div>
      </section>
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end gap-4 mb-16">
            <h2 className="text-4xl font-black text-gray-900">{t.servicesTitle}</h2>
            <div className="h-1 flex-1 bg-gradient-to-r from-violet-400 to-transparent mb-2 rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.items.map((item, i) => (
              <div key={i} className="group relative bg-gray-50 hover:bg-[#0D1117] rounded-2xl p-8 transition-all duration-300 border border-gray-100 hover:border-violet-500/30 cursor-default">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-white transition-colors mb-4">{item.title}</h3>
                <p className="text-gray-500 group-hover:text-gray-400 text-sm leading-relaxed transition-colors mb-4">{item.desc}</p>
                <span className="text-xs font-mono text-violet-500 group-hover:text-violet-400 border border-violet-200 group-hover:border-violet-500/30 px-2 py-1 rounded-full transition-all">{item.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#0D1117] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-white mb-16">{t.techTitle}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {t.stacks.map((stack, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-violet-500/30 transition-colors">
                <h3 className="text-violet-400 font-mono text-xs font-bold uppercase tracking-wider mb-4">{t.stackLabel[i]}</h3>
                <ul className="space-y-2">{stack.map((item, j) => (<li key={j} className="flex items-center text-gray-300 text-sm"><span className="w-1.5 h-1.5 bg-violet-500 rounded-full mr-2.5 flex-shrink-0"></span>{item}</li>))}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-24 relative overflow-hidden border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">{t.ctaTitle}</h2>
          <p className="text-xl text-gray-500 mb-10">{t.ctaDesc}</p>
          <Link href="/#contact-form" className="inline-flex items-center gap-3 bg-violet-600 hover:bg-violet-500 text-white font-bold px-10 py-5 rounded-xl transition-all text-lg">{t.cta} →</Link>
        </div>
      </section>
    </ServicePageLayout>
  );
}
