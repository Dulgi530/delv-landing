"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";

export default function AccountingAdvisory() {
  const { toggleLanguage } = useLanguage();
  const t = useTranslation();

  const services = [
    {
      title: "재무제표 및 토큰 회계장부 설계",
      titleEn: "Financial Statements & Token Accounting Ledger Design",
      description:
        "토큰발행·소각·보상 등 Web3 프로젝트 특성에 맞는 회계처리 방식을 설계하고 정확한 재무제표를 작성합니다.",
      descriptionEn:
        "Design accounting methods suitable for Web3 project characteristics such as token issuance, burning, and rewards, and prepare accurate financial statements.",
    },
    {
      title: "세무 신고 대행 및 자문",
      titleEn: "Tax Filing Agency & Advisory",
      description:
        "원천세·부가세·법인세 등 각종 세무 신고를 대행하고, 토큰 관련 세무 이슈에 대한 전문적인 자문을 제공합니다.",
      descriptionEn:
        "Handle various tax filings including withholding tax, VAT, and corporate tax, and provide professional advisory on token-related tax issues.",
    },
    {
      title: "토큰 수익 인식 구조화",
      titleEn: "Token Revenue Recognition Structuring",
      description:
        "토큰 판매 및 운용에 따른 수익 인식(Revenue Recognition) 기준을 정립하고 회계 처리 구조를 체계화합니다.",
      descriptionEn:
        "Establish revenue recognition standards for token sales and operations, and systematize accounting treatment structures.",
    },
    {
      title: "분기별 회계보고 및 KPI·재무 리포트 작성",
      titleEn: "Quarterly Accounting Reports & KPI/Financial Reporting",
      description:
        "분기별 재무 상황을 정확하게 분석하고, 주요 성과지표(KPI)와 함께 체계적인 재무 리포트를 작성합니다.",
      descriptionEn:
        "Accurately analyze quarterly financial status and prepare systematic financial reports with key performance indicators (KPI).",
    },
    {
      title: "투자유치용 재무자료 검증 (FDD/TDD)",
      titleEn: "Investment Fundraising Financial Verification (FDD/TDD)",
      description:
        "Financial Due Diligence와 Tax Due Diligence를 통해 투자 유치 과정에서 필요한 재무자료의 정확성과 신뢰성을 검증합니다.",
      descriptionEn:
        "Verify the accuracy and reliability of financial data required during the investment fundraising process through Financial Due Diligence and Tax Due Diligence.",
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
              src="/tax.jpg"
              alt="Accounting Advisory Background"
              fill
              className="object-cover opacity-90"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-white/80"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="text-6xl mb-6">📊</div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                회계·세무 자문
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Accounting & Tax Advisory
              </p>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
                Web3 프로젝트의 복잡한 회계 및 세무 이슈를 해결하고, 정확한 재무
                관리를 통해 투명하고 신뢰받는 비즈니스를 구축합니다.
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
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 font-bold">
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
              델브 회계·세무 자문의 강점
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path
                      fillRule="evenodd"
                      d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Web3 전문성
                </h3>
                <p className="text-gray-600">
                  토큰 이코노미와 블록체인 특성을 반영한 전문적인 회계 처리
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-blue-600"
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">정확성</h3>
                <p className="text-gray-600">
                  검증된 회계사의 정밀한 분석과 정확한 재무 리포팅
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  신속한 대응
                </h3>
                <p className="text-gray-600">
                  변화하는 규제 환경에 맞춘 빠른 세무 자문 및 신고 대행
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              회계·세무 자문이 필요하신가요?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              델브의 전문 회계사가 귀사의 재무 투명성과 신뢰성을 높여드립니다.
            </p>
            <Link
              href="/#contact-form"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
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
