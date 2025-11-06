"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";

export default function LegalAdvisory() {
  const { toggleLanguage } = useLanguage();
  const t = useTranslation();

  const services = [
    {
      title: "DAO 법인화 및 해외 법인 설립 자문",
      titleEn: "DAO Incorporation & Overseas Entity Setup Advisory",
      description:
        "한국·스위스·싱가포르 등 주요 국가에서의 DAO 법인화 및 해외 법인 설립을 위한 전문 자문을 제공합니다.",
      descriptionEn:
        "Professional advisory services for DAO incorporation and overseas entity setup in major countries including Korea, Switzerland, and Singapore.",
    },
    {
      title: "스위스 크립토밸리 특화 지원",
      titleEn: "Swiss Crypto Valley Specialized Support",
      description:
        "크립토 생태계의 허브인 Zug 및 Lugano를 중심으로 법인 설립, 현지 투자 지원, 네트워크 연결을 집중 지원합니다.",
      descriptionEn:
        "Focused support for entity establishment, local investment, and network connections centered around Zug and Lugano, hubs of the crypto ecosystem.",
    },
    {
      title: "Token 발행 구조 검토",
      titleEn: "Token Issuance Structure Review",
      description:
        "토큰의 증권성 및 투자계약성 판단을 통해 법적 리스크를 최소화하고 안전한 토큰 발행 구조를 설계합니다.",
      descriptionEn:
        "Minimize legal risks and design safe token issuance structures through securities and investment contract analysis.",
    },
    {
      title: "계약서 작성 및 검토",
      titleEn: "Contract Drafting & Review",
      description:
        "MOU, SAFE, Token Warrant 등 Web3 프로젝트에 필요한 다양한 계약서 작성 및 법적 검토를 제공합니다.",
      descriptionEn:
        "Drafting and legal review of various contracts required for Web3 projects, including MOU, SAFE, and Token Warrant.",
    },
    {
      title: "규제 대응 자문",
      titleEn: "Regulatory Compliance Advisory",
      description:
        "VASP 등록, 금융위/금감원 대응, 공시 리스크 분석 등 국내외 규제 환경에 대한 종합적인 대응 전략을 수립합니다.",
      descriptionEn:
        "Develop comprehensive regulatory response strategies including VASP registration, FSC/FSS response, and disclosure risk analysis.",
    },
    {
      title: "IP·데이터 라이선스 자문",
      titleEn: "IP & Data Licensing Advisory",
      description:
        "Web3 사업 관련 지적재산권 및 데이터 라이선스에 대한 전문적인 법률 자문을 제공합니다.",
      descriptionEn:
        "Professional legal advisory on intellectual property and data licensing related to Web3 business.",
    },
    {
      title: "투자 유치 법률 자문 (LDD)",
      titleEn: "Investment Fundraising Legal Advisory (LDD)",
      description:
        "Legal Due Diligence를 통해 투자 유치 과정에서 발생할 수 있는 법적 리스크를 사전에 점검하고 해결합니다.",
      descriptionEn:
        "Identify and resolve legal risks that may arise during the investment fundraising process through Legal Due Diligence.",
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
              src="/law.avif"
              alt="Legal Advisory Background"
              fill
              className="object-cover opacity-90"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50/80 to-white/80"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="text-6xl mb-6">⚖️</div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                법률 자문
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Legal Advisory
              </p>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
                Web3 프로젝트의 법적 리스크를 최소화하고 안전한 비즈니스 환경을
                구축하기 위한 종합 법률 자문 서비스를 제공합니다.
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
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-600 font-bold">
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
              델브 법률 자문의 강점
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-purple-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  로펌 변호사 직접 자문
                </h3>
                <p className="text-gray-600">
                  대형 로펌 출신 변호사가 직접 프로젝트를 검토하고 자문합니다
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-purple-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  풍부한 크립토 자문 경험
                </h3>
                <p className="text-gray-600">
                  다수의 Web3·블록체인 프로젝트 법률 자문 경험 보유
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-purple-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  글로벌 네트워크
                </h3>
                <p className="text-gray-600">
                  한국·스위스 법률 전문가 네트워크 보유
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              법률 자문이 필요하신가요?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              델브의 전문 법률팀이 귀사의 Web3 프로젝트를 안전하게 지원합니다.
            </p>
            <Link
              href="/#contact-form"
              className="inline-block bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-lg"
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
