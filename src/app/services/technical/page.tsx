"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";

export default function TechnicalAdvisory() {
  const { toggleLanguage } = useLanguage();
  const t = useTranslation();

  const services = [
    {
      title: "스마트컨트랙트 아키텍처 설계",
      titleEn: "Smart Contract Architecture Design",
      description:
        "프로젝트 요구사항에 최적화된 스마트컨트랙트 구조를 설계하고, 확장 가능하고 안전한 아키텍처를 구축합니다.",
      descriptionEn:
        "Design smart contract structures optimized for project requirements and build scalable and secure architectures.",
    },
    {
      title: "ERC / Paymaster / SBT / DID / NFT 구조 컨설팅 및 개발",
      titleEn:
        "ERC / Paymaster / SBT / DID / NFT Structure Consulting & Development",
      description:
        "다양한 토큰 표준과 Web3 기술 스택에 대한 전문 컨설팅을 제공하고, 실제 개발까지 지원합니다.",
      descriptionEn:
        "Provide expert consulting on various token standards and Web3 tech stacks, and support actual development.",
    },
    {
      title: "스마트컨트랙트 코드 보안·기능 Audit",
      titleEn: "Smart Contract Security & Functional Audit",
      description:
        "스마트컨트랙트의 보안 취약점과 기능적 결함을 철저히 검증하여 안전한 배포를 보장합니다.",
      descriptionEn:
        "Thoroughly verify security vulnerabilities and functional defects in smart contracts to ensure safe deployment.",
    },
    {
      title: "API·SDK 개발 인프라 설계",
      titleEn: "API·SDK Development Infrastructure Design",
      description:
        "Web3 프로젝트에 필요한 API와 SDK를 설계하고, 개발자 친화적인 모듈을 구축합니다.",
      descriptionEn:
        "Design APIs and SDKs required for Web3 projects and build developer-friendly modules.",
    },
    {
      title: "자체 개발 인력 HR (기획, 디자인, 개발)",
      titleEn: "In-house Development Team HR (Planning, Design, Development)",
      description:
        "프로젝트에 필요한 기획자, 디자이너, 개발자 등 전문 인력을 매칭하고 팀을 구성합니다.",
      descriptionEn:
        "Match and form teams with professional personnel such as planners, designers, and developers required for the project.",
    },
  ];

  const techStack = [
    {
      category: "Blockchain",
      items: ["Ethereum", "Polygon", "Arbitrum", "Optimism", "Base"],
    },
    {
      category: "Smart Contract",
      items: ["Solidity", "Hardhat", "Foundry", "OpenZeppelin"],
    },
    {
      category: "Web3 Integration",
      items: ["ethers.js", "web3.js", "wagmi", "viem"],
    },
    {
      category: "Backend & API",
      items: ["Node.js", "Express", "GraphQL", "REST API"],
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
              src="/dev.png"
              alt="Technical Advisory Background"
              fill
              className="object-cover opacity-90"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-green-50/80 to-white/80"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="text-6xl mb-6">🧠</div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                기술 자문·설계
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Technical Advisory & Audit
              </p>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
                Web3 프로젝트의 기술적 우수성을 확보하고, 안전하고 효율적인
                스마트컨트랙트와 인프라를 구축하는 종합 기술 자문 서비스를
                제공합니다.
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
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 font-bold">
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

        {/* Tech Stack Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              기술 스택
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {techStack.map((stack, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    {stack.category}
                  </h3>
                  <ul className="space-y-2">
                    {stack.items.map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <svg
                          className="w-4 h-4 text-green-600 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              개발 프로세스
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">1</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  요구사항 분석
                </h3>
                <p className="text-gray-600 text-sm">
                  프로젝트 목표와 기술적 요구사항을 면밀히 분석
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  설계 및 아키텍처
                </h3>
                <p className="text-gray-600 text-sm">
                  최적의 기술 스택과 시스템 구조 설계
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">3</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  개발 및 테스트
                </h3>
                <p className="text-gray-600 text-sm">
                  스마트컨트랙트 개발 및 철저한 테스트 수행
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">4</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  감사 및 배포
                </h3>
                <p className="text-gray-600 text-sm">
                  보안 감사 후 안전한 메인넷 배포
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              기술 자문이 필요하신가요?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              델브의 전문 개발팀이 귀사의 Web3 프로젝트를 성공적으로 구현합니다.
            </p>
            <Link
              href="/#contact-form"
              className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors text-lg"
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
                href="/about"
                className="flex items-start space-x-3 mb-4 hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/delv-logo.png"
                  alt="DELV Logo"
                  width={120}
                  height={120}
                  className="w-32 h-32 object-contain"
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
