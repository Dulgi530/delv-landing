#!/bin/bash

# DELV Landing - 서비스 6개 재구성 배포 스크립트
# 사용법: 프로젝트 루트 폴더에서 실행
# bash deploy.sh

set -e

echo "🚀 DELV 서비스 재구성 시작..."

# ───────────────────────────────────────────
# 1. translations.ts
# ───────────────────────────────────────────
cat > src/locales/translations.ts << 'TRANSLATIONS_EOF'
export const translations = {
  ko: {
    nav: {
      company: "회사소개",
      services: "서비스",
      newsletter: "뉴스레터",
      contact: "문의하기",
      language: "한국어",
    },
    hero: {
      title: "전문 컨설팅으로",
      titleBreak: "비즈니스를 혁신하세요",
      subtitle: "BM 개발 / 블록체인 기술 / ICO 상장 / RWA / 해외진출 / 세무",
      description: "Web3 분야의 종합적인 컨설팅 서비스를 통해 귀하의 성장을 가속화합니다.",
      ctaStart: "컨설팅 시작하기",
      ctaLearn: "더 알아보기",
    },
    services: {
      title: "컨설팅 서비스",
      subtitle: "비즈니스 요구에 맞춘 종합적인 Web3 컨설팅 서비스",
      bm: {
        icon: "🚀",
        title: "BM 개발 패키지",
        titleEn: "Business Model Development Package",
        description: "Web3 비즈니스 모델 설계부터 수익 구조 검증, 시장 진입 전략 수립까지 — 사업의 핵심 기반을 함께 만들어 드립니다. 토큰 이코노미 설계, 경쟁사 분석, IR 피치덱 제작을 포함합니다.",
        learnMore: "더 알아보기",
        tags: ["비즈니스 모델", "Tokenomics", "IR Deck"],
      },
      token: {
        icon: "⛓️",
        title: "토큰/마이크로결제 개발",
        titleEn: "Token & Micropayment Development",
        description: "스마트 컨트랙트 설계·개발, X402 프로토콜 도입, DApp 구축, 토큰노믹스 설계까지. ERC 표준, Paymaster, SBT, DID, NFT 구조 자문 및 코드 보안 감사(Audit)를 제공합니다.",
        learnMore: "더 알아보기",
        tags: ["스마트 컨트랙트", "X402", "DApp", "Audit"],
      },
      ico: {
        icon: "📋",
        title: "ICO 상장 패키지",
        titleEn: "ICO Listing Package",
        description: "거래소 상장에 필요한 3종 보고서를 원스톱으로 제공합니다. 법률검토의견서, 재무보고서, 코드 감사보고서를 통해 투자자와 거래소의 신뢰를 확보하세요.",
        learnMore: "더 알아보기",
        tags: ["법률검토의견서", "재무보고서", "코드감사보고서"],
      },
      rwa: {
        icon: "🏛️",
        title: "RWA 도입 자문",
        titleEn: "RWA (Real World Asset) Advisory",
        description: "실물 자산(갤러리·부동산·현물 등)을 블록체인에 토큰화하여 새로운 자금조달 경로를 열어드립니다. RWA 구조 설계, 법적 검토, 투자자 매칭까지 전 과정을 지원합니다.",
        learnMore: "더 알아보기",
        tags: ["부동산 토큰화", "갤러리", "자금조달"],
      },
      global: {
        icon: "🌏",
        title: "자회사 설립·해외진출",
        titleEn: "Subsidiary & Global Expansion",
        description: "스위스·싱가포르·한국 등 주요 거점의 재단·법인 설립을 지원합니다. Korean Market Entry 서비스로 해외 기업의 한국 진출도 원스톱으로 도와드립니다.",
        learnMore: "더 알아보기",
        tags: ["해외법인 설립", "스위스", "Korean Market Entry"],
      },
      tax: {
        icon: "🧾",
        title: "세무 진단",
        titleEn: "Tax Diagnosis (2027 Crypto Tax)",
        description: "2027년 가상자산 과세 시행을 앞두고 지금 준비하세요. 보유 자산 세무 진단, 절세 전략 수립, 신고 대행까지 — 불필요한 세금 부담 없이 대비할 수 있도록 도와드립니다.",
        learnMore: "더 알아보기",
        tags: ["2027 과세", "절세 전략", "가상자산 세무"],
      },
    },
    newsletter: {
      title: "뉴스레터",
      subtitle: "최신 인사이트와 업데이트를 확인하세요",
      viewAll: "전체 보기",
      noContent: "최신 뉴스레터가 곧 업데이트됩니다.",
      author: "작성자",
    },
    delvChat: {
      badge: "Web3 학습 도우미",
      subtitle: "Web3 학습 도우미",
      title: "DELV CHAT",
      description: "Web3 용어와 개념을 쉬운 대화로 배워보세요",
      cta: "채팅 시작하기",
    },
    team: {
      title: "팀 소개",
      subtitle: "기술, 법무, 글로벌 시장에서 입증된 실적을 가진 업계 전문가들",
      members: {
        sungyeon: {
          position: "변호사",
          description: "- 고려대학교 경영학 학사 / 고려대 법학전문대학원 석사<br />- 셀트리온, 풀무원 법무팀 근무 경력<br />- ABB 블록체인 해커톤 최우수상 수상<br />- 국제법무, 블록체인 자문, 강의 경험",
        },
        ilhun: {
          position: "회계사",
          description: "- 고려대학교 경영 MBA 수료<br />- 前 삼정회계법인 회계사<br />- 現 한울회계법인 이사 (회계사)<br />- 국내 대기업 금융그룹, 투자회사 회계 용역 多<br />- 국제조세 자문 수행",
        },
        rosa: {
          position: "주재원 (스위스)",
          description: "- 성신여자대학교 컴퓨터공학 / 정보공학 석사<br />- SKB(Swiss Korean Blockchain) Advisors 파운더<br />- Women in Web3 Switzerland (WIW3.ch) 파트너십팀 핵심 기여자<br />- 스위스와 한국 간 블록체인 산업 교류 및 협력 경험 多",
        },
        hyeongjun: {
          position: "기술 리드",
          description: "- aɪˈdentəti CEO & 빌더 아카데미 커뮤니티 파운더<br />- 유네스코 디지털 강의 강사<br />- ETHGlobal 해커톤 수상(2023,2024)<br />- ABB 블록체인 해커톤 최우수상 수상",
        },
        youngdae: {
          position: "커뮤니티 리드",
          description: "- aɪdentəti COO 및 커뮤니티 관리<br />- Web3 프로젝트 커뮤니티 빌더 경험<br />- MEXC 거래소 BD/운영 매니저<br />- 국내외 이벤트 참여 및 관리 풍부한 경험",
        },
      },
    },
    partners: { title: "파트너" },
    contactForm: {
      title: "Web3, 무한한 가능성의 첫걸음",
      subtitle: "델브와의 전략 미팅을 통해, 성장 로드맵을 설계하세요.",
      nameLabel: "이름",
      companyLabel: "소속",
      emailLabel: "이메일",
      phoneLabel: "전화번호",
      messageLabel: "문의내용 (선택)",
      privacyLabel: "개인정보 제공에 동의합니다",
      submitButton: "문의하기",
      successMessage: "문의가 성공적으로 전송되었습니다!",
      errorMessage: "문의 전송에 실패했습니다. 다시 시도해주세요.",
      note: "* 담당자가 확인 후 순차적으로 연락 드립니다.",
      namePlaceholder: "이름을 입력해주세요",
      companyPlaceholder: "회사명을 입력해주세요",
      emailPlaceholder: "이메일을 입력해주세요",
      phonePlaceholder: "전화번호를 입력해주세요",
      messagePlaceholder: "문의하실 내용을 입력해주세요",
    },
    footer: {
      description: "전문 컨설팅 서비스를 통해 비즈니스를 강화합니다.",
      servicesTitle: "서비스",
      companyTitle: "회사",
      contactTitle: "연락처",
      technology: "기술",
      legalAdvisory: "법무 자문",
      globalExpansion: "글로벌 확장",
      aboutUs: "회사소개",
      teamLabel: "팀",
      careers: "채용",
    },
  },
  en: {
    nav: {
      company: "Company",
      services: "Services",
      newsletter: "Newsletter",
      contact: "Contact",
      language: "ENG",
    },
    hero: {
      title: "Transform Your Business",
      titleBreak: "with Expert Web3 Consulting",
      subtitle: "BM Development / Blockchain Tech / ICO Listing / RWA / Global Expansion / Tax",
      description: "Accelerate your growth through comprehensive consulting services in Web3.",
      ctaStart: "Start Consulting",
      ctaLearn: "Learn More",
    },
    services: {
      title: "Our Services",
      subtitle: "Comprehensive Web3 consulting tailored to your business needs",
      bm: {
        icon: "🚀",
        title: "BM Development Package",
        titleEn: "Business Model Development Package",
        description: "From Web3 business model design to revenue structure validation and market entry strategy — we help build your core business foundation. Includes token economy design, competitor analysis, and IR pitch deck creation.",
        learnMore: "Learn More",
        tags: ["Business Model", "Tokenomics", "IR Deck"],
      },
      token: {
        icon: "⛓️",
        title: "Token / Micropayment Dev",
        titleEn: "Token & Micropayment Development",
        description: "Smart contract design & development, X402 protocol integration, DApp building, and tokenomics design. ERC standards, Paymaster, SBT, DID, NFT structure advisory and security audit included.",
        learnMore: "Learn More",
        tags: ["Smart Contract", "X402", "DApp", "Audit"],
      },
      ico: {
        icon: "📋",
        title: "ICO Listing Package",
        titleEn: "ICO Listing Package",
        description: "One-stop solution for the 3 key reports required for exchange listing: Legal Review Opinion, Financial Report, and Code Audit Report. Build trust with investors and exchanges.",
        learnMore: "Learn More",
        tags: ["Legal Opinion", "Financial Report", "Code Audit"],
      },
      rwa: {
        icon: "🏛️",
        title: "RWA Advisory",
        titleEn: "Real World Asset Advisory",
        description: "Tokenize real-world assets (galleries, real estate, commodities, etc.) on the blockchain to open new fundraising channels. We support the full process: structure design, legal review, and investor matching.",
        learnMore: "Learn More",
        tags: ["Real Estate", "Tokenization", "Fundraising"],
      },
      global: {
        icon: "🌏",
        title: "Subsidiary & Global Expansion",
        titleEn: "Subsidiary & Global Expansion",
        description: "We support foundation and entity establishment in Switzerland, Singapore, Korea, and beyond. Our Korean Market Entry service also helps overseas companies enter the Korean market end-to-end.",
        learnMore: "Learn More",
        tags: ["Overseas Entity", "Switzerland", "Korean Market Entry"],
      },
      tax: {
        icon: "🧾",
        title: "Tax Diagnosis",
        titleEn: "Tax Diagnosis (2027 Crypto Tax)",
        description: "Prepare now for the 2027 virtual asset taxation enforcement. We offer asset tax diagnostics, tax minimization strategy, and filing agency services — so you can stay ahead without unnecessary tax burdens.",
        learnMore: "Learn More",
        tags: ["2027 Tax", "Tax Strategy", "Crypto Tax"],
      },
    },
    newsletter: {
      title: "Newsletter",
      subtitle: "Stay updated with our latest insights",
      viewAll: "View All",
      noContent: "Latest newsletters coming soon.",
      author: "Author",
    },
    delvChat: {
      badge: "Web3 Learning Assistant",
      subtitle: "Web3 Learning Assistant",
      title: "DELV CHAT",
      description: "Learn Web3 terms and concepts through easy conversations",
      cta: "Start Chatting",
    },
    team: {
      title: "Meet Our Team",
      subtitle: "Industry experts with proven track records in technology, legal, and global markets",
      members: {
        sungyeon: {
          position: "Lawyer",
          description: "- B.A. in Business Administration, Korea University / J.D., Korea University School of Law<br />- Former in-house counsel at Celltrion and Pulmuone<br />- Grand Prize, ABB Blockchain Hackathon<br />- International legal affairs, blockchain advisory experience",
        },
        ilhun: {
          position: "Accountant",
          description: "- MBA, Korea University<br />- Former Accountant at Samjong Accounting Corporation<br />- Current Director at Hanwool Accounting Corporation<br />- International tax advisory experience",
        },
        rosa: {
          position: "Representative (Switzerland)",
          description: "- Master's in Computer Engineering, Sungshin Women's University<br />- Founder of SKB (Swiss Korean Blockchain) Advisors<br />- Key contributor, Women in Web3 Switzerland (WIW3.ch)<br />- Extensive Korea-Switzerland blockchain industry exchange experience",
        },
        hyeongjun: {
          position: "Tech Lead",
          description: "- aɪˈdentəti CEO & Builder Academy Community Founder<br />- UNESCO Digital lecture professor<br />- ETH Global Hackathon Award (2023, 2024)<br />- ABB Blockchain Hackathon Grand Prize",
        },
        youngdae: {
          position: "Community Lead",
          description: "- aɪdentəti COO and Community Management<br />- Web3 Project Community Builder<br />- BD/Operations Manager at MEXC Exchange<br />- Extensive hackathon & meetup event experience",
        },
      },
    },
    partners: { title: "Partners" },
    contactForm: {
      title: "Web3, The First Step to Infinite Possibilities",
      subtitle: "Design your growth roadmap through a strategic meeting with DELV.",
      nameLabel: "Name",
      companyLabel: "Company",
      emailLabel: "Email",
      phoneLabel: "Phone",
      messageLabel: "Message (Optional)",
      privacyLabel: "I agree to provide personal information",
      submitButton: "Submit",
      successMessage: "Your inquiry has been successfully submitted!",
      errorMessage: "Failed to submit inquiry. Please try again.",
      note: "* Our team will contact you sequentially after review.",
      namePlaceholder: "Enter your name",
      companyPlaceholder: "Enter company name",
      emailPlaceholder: "Enter your email",
      phonePlaceholder: "Enter your phone number",
      messagePlaceholder: "Enter your message",
    },
    footer: {
      description: "Empowering businesses through expert consulting services.",
      servicesTitle: "Services",
      companyTitle: "Company",
      contactTitle: "Contact",
      technology: "Technology",
      legalAdvisory: "Legal Advisory",
      globalExpansion: "Global Expansion",
      aboutUs: "About Us",
      teamLabel: "Team",
      careers: "Careers",
    },
  },
};

export type TranslationKey = keyof typeof translations.ko;
export type Language = "ko" | "en";
TRANSLATIONS_EOF

echo "✅ translations.ts 완료"

# ───────────────────────────────────────────
# 2. ServicePageLayout 컴포넌트 생성
# ───────────────────────────────────────────
mkdir -p src/components

cat > src/components/ServicePageLayout.tsx << 'LAYOUT_EOF'
"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";

interface ServiceLink {
  href: string;
  labelKo: string;
  labelEn: string;
}

const serviceLinks: ServiceLink[] = [
  { href: "/services/bm", labelKo: "BM 개발 패키지", labelEn: "BM Development" },
  { href: "/services/token", labelKo: "토큰/마이크로결제 개발", labelEn: "Token / Micropayment Dev" },
  { href: "/services/ico", labelKo: "ICO 상장 패키지", labelEn: "ICO Listing Package" },
  { href: "/services/rwa", labelKo: "RWA 도입 자문", labelEn: "RWA Advisory" },
  { href: "/services/global", labelKo: "자회사 설립·해외진출", labelEn: "Subsidiary & Global" },
  { href: "/services/tax", labelKo: "세무 진단", labelEn: "Tax Diagnosis" },
];

interface ServicePageLayoutProps {
  children: React.ReactNode;
}

export function ServicePageLayout({ children }: ServicePageLayoutProps) {
  const { language, toggleLanguage } = useLanguage();
  const t = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0D1117] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Image src="/delv-logo.png" alt="DELV Logo" width={60} height={60} className="h-8 w-auto object-contain" />
          </Link>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-1">
              <Link href="/about" className="text-gray-300 px-4 py-2 rounded-lg hover:text-white hover:bg-white/10 transition-all text-sm font-medium">{t.nav.company}</Link>
              <Link href="/services" className="text-white px-4 py-2 rounded-lg bg-white/10 text-sm font-medium">{t.nav.services}</Link>
              <Link href="/newsletter" className="text-gray-300 px-4 py-2 rounded-lg hover:text-white hover:bg-white/10 transition-all text-sm font-medium">{t.nav.newsletter}</Link>
              <Link href="/#contact-form" className="text-gray-300 px-4 py-2 rounded-lg hover:text-white hover:bg-white/10 transition-all text-sm font-medium">{t.nav.contact}</Link>
              <Link href="/chat" className="text-[#c084fc] px-4 py-2 rounded-lg hover:bg-[#c084fc]/10 transition-all text-sm font-medium">DELV CHAT</Link>
            </div>
            <button onClick={toggleLanguage} className="text-gray-300 px-3 py-1.5 rounded-md border border-white/20 hover:bg-white/10 transition-all text-xs font-bold">
              {t.nav.language}
            </button>
          </div>
        </div>
      </header>

      {children}

      <footer className="bg-[#0D1117] border-t border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <Link href="/" className="flex items-start mb-6 hover:opacity-80">
                <Image src="/delv-logo.png" alt="DELV Logo" width={120} height={120} className="w-28 h-28 object-contain" />
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed">{t.footer.description}</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{t.footer.servicesTitle}</h3>
              <ul className="space-y-2">
                {serviceLinks.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {language === "ko" ? s.labelKo : s.labelEn}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{t.footer.companyTitle}</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">{t.footer.aboutUs}</Link></li>
                <li><Link href="/#team" className="text-gray-400 hover:text-white transition-colors text-sm">{t.footer.teamLabel}</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{t.footer.contactTitle}</h3>
              <ul className="space-y-2">
                <li><Link href="mailto:admin@delv.team" className="text-gray-400 hover:text-white transition-colors text-sm">admin@delv.team</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
LAYOUT_EOF

echo "✅ ServicePageLayout.tsx 완료"

# ───────────────────────────────────────────
# 3. 새 서비스 폴더 생성 + 기존 삭제
# ───────────────────────────────────────────
mkdir -p src/app/services/bm
mkdir -p src/app/services/token
mkdir -p src/app/services/ico
mkdir -p src/app/services/rwa
mkdir -p src/app/services/global
mkdir -p src/app/services/tax

# 기존 서비스 폴더 삭제
rm -rf src/app/services/legal
rm -rf src/app/services/accounting
rm -rf src/app/services/technical
rm -rf src/app/services/business
rm -rf src/app/services/networking

echo "✅ 폴더 구조 완료"

# ───────────────────────────────────────────
# 4. services/page.tsx
# ───────────────────────────────────────────
cat > src/app/services/page.tsx << 'SERVICES_EOF'
"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";

export default function Services() {
  const { toggleLanguage } = useLanguage();
  const t = useTranslation();

  const servicesList = [
    { key: "bm" as const, href: "/services/bm", tagColor: "bg-cyan-100 text-cyan-800" },
    { key: "token" as const, href: "/services/token", tagColor: "bg-violet-100 text-violet-800" },
    { key: "ico" as const, href: "/services/ico", tagColor: "bg-amber-100 text-amber-800" },
    { key: "rwa" as const, href: "/services/rwa", tagColor: "bg-emerald-100 text-emerald-800" },
    { key: "global" as const, href: "/services/global", tagColor: "bg-blue-100 text-blue-800" },
    { key: "tax" as const, href: "/services/tax", tagColor: "bg-rose-100 text-rose-800" },
  ] as const;

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#1A202C]">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <Image src="/delv-logo.png" alt="DELV Logo" width={60} height={60} className="w-30 h-8 object-contain" />
            </Link>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-3">
                <Link href="/about" className="text-white px-4 py-2 rounded-lg hover:text-[#3BB5AC] transition-colors text-sm font-medium">{t.nav.company}</Link>
                <Link href="/services" className="text-[#3BB5AC] px-4 py-2 rounded-lg text-sm font-medium">{t.nav.services}</Link>
                <Link href="/newsletter" className="text-white px-4 py-2 rounded-lg hover:text-[#3BB5AC] transition-colors text-sm font-medium">{t.nav.newsletter}</Link>
                <Link href="/#contact-form" className="text-white px-4 py-2 rounded-lg hover:text-[#3BB5AC] transition-colors text-sm font-medium">{t.nav.contact}</Link>
                <Link href="/chat" className="text-[#c084fc] px-4 py-2 rounded-lg text-sm font-medium">DELV CHAT</Link>
              </div>
              <button onClick={toggleLanguage} className="text-white px-4 py-2 rounded-lg border border-white hover:bg-[#3BB5AC] hover:border-[#3BB5AC] transition-colors text-xs font-bold">
                {t.nav.language}
              </button>
            </div>
          </div>
        </div>
      </header>

      <section className="bg-gray-100 py-20 pt-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t.services.title}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.services.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList.map(({ key, href, tagColor }) => (
              <div key={key} className="bg-white rounded-2xl p-6 shadow-lg flex flex-col hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{t.services[key].icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t.services[key].title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed flex-grow text-sm">{t.services[key].description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {t.services[key].tags.map((tag: string, index: number) => (
                    <span key={index} className={`${tagColor} px-2 py-1 rounded-full text-xs`}>{tag}</span>
                  ))}
                </div>
                <Link href={href} className="border-2 border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:border-gray-400 transition-colors inline-block text-center mt-auto text-sm">
                  {t.services[key].learnMore}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <Link href="/about" className="flex items-start mb-4 hover:opacity-80">
                <Image src="/delv-logo.png" alt="DELV Logo" width={120} height={120} className="w-32 h-32 object-contain" />
              </Link>
              <p className="text-gray-300 leading-relaxed">{t.footer.description}</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">{t.footer.servicesTitle}</h3>
              <ul className="space-y-2">
                {servicesList.map(({ key, href }) => (
                  <li key={key}><Link href={href} className="text-gray-300 hover:text-white transition-colors">{t.services[key].title}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">{t.footer.companyTitle}</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">{t.footer.aboutUs}</Link></li>
                <li><Link href="/#team" className="text-gray-300 hover:text-white transition-colors">{t.footer.teamLabel}</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">{t.footer.contactTitle}</h3>
              <ul className="space-y-2">
                <li><Link href="mailto:admin@delv.team" className="text-gray-300 hover:text-white transition-colors">admin@delv.team</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
SERVICES_EOF

echo "✅ services/page.tsx 완료"

# ───────────────────────────────────────────
# 5~10. 각 서비스 상세 페이지 (파일 복사)
# ───────────────────────────────────────────

# BM
cp "$(dirname "$0")/outputs/services-new/bm/page.tsx" src/app/services/bm/page.tsx 2>/dev/null || \
cat > src/app/services/bm/page.tsx << 'BM_EOF'
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
BM_EOF

echo "✅ services/bm/page.tsx 완료"

# Token, ICO, RWA, Global, Tax 페이지는 다운받은 파일에서 복사
for service in token ico rwa global tax; do
  if [ -f "$(dirname "$0")/outputs/services-new/$service/page.tsx" ]; then
    cp "$(dirname "$0")/outputs/services-new/$service/page.tsx" "src/app/services/$service/page.tsx"
    echo "✅ services/$service/page.tsx 완료 (복사)"
  else
    echo "⚠️  services/$service/page.tsx - 파일을 outputs 폴더에서 찾을 수 없어 수동으로 추가 필요"
  fi
done

# ───────────────────────────────────────────
# 11. Git push
# ───────────────────────────────────────────
echo ""
echo "📦 Git 커밋 및 푸시 중..."
git add .
git commit -m "feat: 서비스 6개로 재구성 + 새 디자인 적용

- BM 개발 패키지
- 토큰/마이크로결제 개발 (X402)
- ICO 상장 패키지 (3종 보고서)
- RWA 도입 자문
- 자회사 설립·해외진출
- 세무 진단 (2027 과세 대비)
- ServicePageLayout 공통 컴포넌트 추가
- translations.ts 새 6개 서비스로 전면 교체
- 기존 legal/accounting/technical/business/networking 폴더 삭제"

git push origin main

echo ""
echo "🎉 완료! Vercel이 자동으로 배포를 시작합니다."
echo "👉 https://vercel.com/juns-projects-8d9b4fd0/delv-landing 에서 배포 상태 확인 가능"
