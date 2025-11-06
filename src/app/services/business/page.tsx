"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";

export default function BusinessDevelopment() {
  const { toggleLanguage } = useLanguage();
  const t = useTranslation();

  const services = [
    {
      title: "스위스 Crypto Valley 중심 글로벌 투자 네트워크 연결",
      titleEn: "Global Investment Network Connection via Swiss Crypto Valley",
      description:
        "스위스 크립토밸리를 중심으로 한 글로벌 투자자 네트워크와 한국 프로젝트를 연결합니다.",
      descriptionEn:
        "Connect Korean projects with global investor networks centered around Swiss Crypto Valley.",
    },
    {
      title: "한국 프로젝트의 해외 재단 설립 지원",
      titleEn: "Overseas Foundation Establishment Support for Korean Projects",
      description:
        "스위스, 싱가포르 등 주요 국가에서의 재단 설립 전 과정을 지원합니다.",
      descriptionEn:
        "Support the entire process of foundation establishment in major countries such as Switzerland and Singapore.",
    },
    {
      title: "유럽 VC·PE·재단 매칭 및 협상 주선",
      titleEn: "European VC·PE·Foundation Matching & Negotiation",
      description:
        "유럽의 주요 벤처캐피탈, 프라이빗 에쿼티, 재단과의 투자 매칭 및 협상을 주선합니다.",
      descriptionEn:
        "Arrange investment matching and negotiations with major European venture capital, private equity, and foundations.",
    },
    {
      title: "IR Pitch Deck 제작 / 투자유치 전략 수립",
      titleEn: "IR Pitch Deck Creation / Investment Strategy Development",
      description:
        "글로벌 투자자를 대상으로 한 전문적인 IR 피치덱을 제작하고 최적의 투자유치 전략을 수립합니다.",
      descriptionEn:
        "Create professional IR pitch decks for global investors and develop optimal investment strategies.",
    },
    {
      title: "Tokenomics 설계 및 Revenue Model 구조화",
      titleEn: "Tokenomics Design & Revenue Model Structuring",
      description:
        "지속 가능한 토큰 이코노미와 수익 모델을 설계하여 프로젝트의 장기적 성장을 지원합니다.",
      descriptionEn:
        "Design sustainable token economics and revenue models to support long-term project growth.",
    },
    {
      title: "글로벌 VC / 재단 대상 투자 네트워킹",
      titleEn: "Investment Networking with Global VCs & Foundations",
      description:
        "글로벌 벤처캐피탈 및 재단과의 지속적인 네트워킹을 통해 투자 기회를 창출합니다.",
      descriptionEn:
        "Create investment opportunities through continuous networking with global venture capital and foundations.",
    },
    {
      title: "프로젝트별 IR 컨설팅 및 딜 구조 설계",
      titleEn: "Project-specific IR Consulting & Deal Structure Design",
      description:
        "각 프로젝트의 특성에 맞는 맞춤형 IR 컨설팅과 최적의 딜 구조를 설계합니다.",
      descriptionEn:
        "Provide customized IR consulting and design optimal deal structures for each project's characteristics.",
    },
    {
      title: "글로벌 투자유치용 공식 보고서 (영문 포함)",
      titleEn: "Official Reports for Global Fundraising (Including English)",
      description:
        "글로벌 투자자를 위한 전문적인 공식 보고서를 영문으로 작성합니다.",
      descriptionEn:
        "Prepare professional official reports in English for global investors.",
    },
    {
      title: "투자자용 Valuation Report 발행",
      titleEn: "Investor Valuation Report Issuance",
      description:
        "객관적이고 신뢰할 수 있는 기업가치 평가 보고서를 발행합니다.",
      descriptionEn:
        "Issue objective and reliable corporate valuation reports.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#1A202C]">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
            >
              <Image
                src="/delv-logo.png"
                alt="DELV Logo"
                width={60}
                height={60}
                className="w-30 h-8 object-contain"
              />
            </Link>

            {/* Right side navigation and buttons */}
            <div className="flex items-center space-x-4">
              {/* Service Buttons */}
              <div className="hidden md:flex items-center space-x-3">
                <Link
                  href="/about"
                  className="text-white px-4 py-2 rounded-lg hover:text-[#3BB5AC] transition-colors text-sm font-medium"
                >
                  {t.nav.company}
                </Link>
                <Link
                  href="/services"
                  className="text-white px-4 py-2 rounded-lg hover:text-[#3BB5AC] transition-colors text-sm font-medium"
                >
                  {t.nav.services}
                </Link>
                <Link
                  href="/newsletter"
                  className="text-white px-4 py-2 rounded-lg hover:text-[#3BB5AC] transition-colors text-sm font-medium"
                >
                  {t.nav.newsletter}
                </Link>
                <Link
                  href="/#contact-form"
                  className="text-white px-4 py-2 rounded-lg hover:text-[#3BB5AC] transition-colors text-sm font-medium"
                >
                  {t.nav.contact}
                </Link>
                <Link
                  href="/chat"
                  className="text-[#c084fc] px-4 py-2 rounded-lg hover:text-[#c084fc] transition-colors text-sm font-medium"
                >
                  DELV CHAT
                </Link>
              </div>

              {/* Language Selector */}
              <button
                onClick={toggleLanguage}
                className="text-white px-4 py-2 rounded-lg border border-white hover:bg-[#3BB5AC] hover:border-[#3BB5AC] transition-colors text-xs font-bold"
              >
                {t.nav.language}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="bg-white">
        {/* Hero Section */}
        <section className="relative py-20 pt-32 overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/outsea.webp"
              alt="Business Development Background"
              fill
              className="object-cover opacity-90"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/80 to-white/80"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="text-6xl mb-6">💼</div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                비즈니스 개발
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Business Development & IR
              </p>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
                글로벌 투자 유치와 사업 확장을 위한 전략적 파트너십 구축 및 IR
                서비스를 제공합니다.
              </p>
            </div>
          </div>
        </section>

        {/* Services Details Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              주요 서비스
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-yellow-600 font-bold">
                        {index + 1}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-500 mb-3 italic">
                        {service.titleEn}
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              델브 비즈니스 개발의 강점
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-yellow-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  글로벌 네트워크
                </h3>
                <p className="text-gray-600">
                  스위스 크립토밸리를 중심으로 한 유럽·아시아 투자자 네트워크
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-yellow-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  검증된 실적
                </h3>
                <p className="text-gray-600">
                  다수의 Web3 프로젝트 투자 유치 및 재단 설립 경험
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-yellow-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  End-to-End 지원
                </h3>
                <p className="text-gray-600">
                  IR 전략 수립부터 투자 유치 완료까지 전 과정 지원
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              글로벌 투자 유치가 필요하신가요?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              델브의 비즈니스 개발팀이 귀사의 성공적인 투자 유치를 지원합니다.
            </p>
            <Link
              href="/#contact-form"
              className="inline-block bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-yellow-700 transition-colors text-lg"
            >
              상담 문의하기
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1A202C] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-1">
              <Link
                href="/"
                className="flex items-center space-x-3 mb-4 hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/delv-logo.png"
                  alt="DELV Logo"
                  width={60}
                  height={60}
                  className="w-16 h-16 object-contain"
                />
              </Link>
              <p className="text-gray-300 leading-relaxed">
                {t.footer.description}
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold mb-4">
                {t.footer.servicesTitle}
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/services/legal"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {t.services.legal.title}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/accounting"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {t.services.accounting.title}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/technical"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {t.services.technical.title}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/business"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {t.services.business.title}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/networking"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {t.services.networking.title}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-semibold mb-4">
                {t.footer.companyTitle}
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {t.footer.aboutUs}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#team"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {t.footer.teamLabel}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-semibold mb-4">
                {t.footer.contactTitle}
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="mailto:delv.team@gmail.com"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    delv.team@gmail.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
