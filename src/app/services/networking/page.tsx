"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";

export default function NetworkingGrowth() {
  const { toggleLanguage } = useLanguage();
  const t = useTranslation();

  const services = [
    {
      title: "DAO·Social-Fi 커뮤니티 설계 및 운영 전략",
      titleEn: "DAO·Social-Fi Community Design & Operation Strategy",
      description:
        "탈중앙화 자율조직(DAO)과 소셜파이 커뮤니티의 구조를 설계하고 지속 가능한 운영 전략을 수립합니다.",
      descriptionEn:
        "Design decentralized autonomous organization (DAO) and Social-Fi community structures and establish sustainable operation strategies.",
    },
    {
      title: "글로벌 커뮤니티 세팅 및 관리",
      titleEn: "Global Community Setup & Management",
      description:
        "디스코드, 텔레그램 등 주요 플랫폼에서 글로벌 커뮤니티를 구축하고 효과적으로 관리합니다.",
      descriptionEn:
        "Build and effectively manage global communities on major platforms such as Discord and Telegram.",
    },
    {
      title: "브랜드 밋업·해커톤·포럼 기획 및 실행",
      titleEn: "Brand Meetup·Hackathon·Forum Planning & Execution",
      description:
        "브랜드 인지도를 높이고 커뮤니티를 활성화하는 다양한 오프라인/온라인 이벤트를 기획하고 실행합니다.",
      descriptionEn:
        "Plan and execute various offline/online events to increase brand awareness and activate communities.",
    },
    {
      title: "DELV 인증 프로젝트 중심의 파트너십 네트워크 구축",
      titleEn:
        "Partnership Network Building Centered on DELV Certified Projects",
      description:
        "델브가 검증한 프로젝트들을 중심으로 신뢰할 수 있는 파트너십 네트워크를 구축합니다.",
      descriptionEn:
        "Build a reliable partnership network centered on projects verified by DELV.",
    },
    {
      title: "Web3 전문가 네트워킹 프로그램 운영",
      titleEn: "Web3 Expert Networking Program Operation",
      description:
        "Web3 업계 전문가들과의 지속적인 네트워킹 기회를 제공하는 프로그램을 운영합니다.",
      descriptionEn:
        "Operate programs that provide continuous networking opportunities with Web3 industry experts.",
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
              src="/marketing.webp"
              alt="Networking Background"
              fill
              className="object-cover opacity-90"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-pink-50/80 to-white/80"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="text-6xl mb-6">🌐</div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                네트워킹·커뮤니티
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Networking & Growth
              </p>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
                Web3 프로젝트의 성공적인 커뮤니티 구축과 글로벌 네트워크 확장을
                지원합니다.
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
                    <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-pink-600 font-bold">
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

        {/* Community Platforms Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              커뮤니티 플랫폼
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-gray-50 rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-pink-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026 13.83 13.83 0 0 0 1.226-1.963.074.074 0 0 0-.041-.104 13.201 13.201 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Discord</h3>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-pink-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Telegram</h3>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-pink-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Twitter/X</h3>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-pink-600"
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
                <h3 className="text-lg font-bold text-gray-900">Community</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              델브 네트워킹·커뮤니티의 강점
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-pink-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  글로벌 네트워크
                </h3>
                <p className="text-gray-600">
                  한국과 유럽을 잇는 Web3 전문가 네트워크
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-pink-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  이벤트 전문성
                </h3>
                <p className="text-gray-600">
                  다수의 밋업, 해커톤, 컨퍼런스 기획 및 운영 경험
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-pink-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  커뮤니티 활성화
                </h3>
                <p className="text-gray-600">
                  지속 가능한 커뮤니티 성장 전략 수립 및 실행
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              커뮤니티 구축이 필요하신가요?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              델브의 네트워킹 전문가가 귀사의 글로벌 커뮤니티를 성장시킵니다.
            </p>
            <Link
              href="/#contact-form"
              className="inline-block bg-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-pink-700 transition-colors text-lg"
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
