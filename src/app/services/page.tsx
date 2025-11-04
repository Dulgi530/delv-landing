"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Services() {
  const [language, setLanguage] = useState<"en" | "ko">("ko");

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ko" : "en");
  };

  const content = {
    en: {
      navigation: {
        company: "Company",
        services: "Services",
        newsletter: "Newsletter",
        contact: "Contact",
        language: "ENG",
      },
      expertise: {
        title: "Our Expertise",
        subtitle:
          "Comprehensive consulting services tailored to your business needs",
      },
      globalLegal: {
        title: "Global / Legal Expansion",
        description:
          "Corporate law, compliance, intellectual property, and contract management services for comprehensive legal support.",
        learnMore: "Learn More",
      },
      technology: {
        title: "Technology Consulting",
        description:
          "Digital transformation, software development, and IT infrastructure optimization for modern businesses.",
        learnMore: "Learn More",
      },
      network: {
        title: "Network Marketing",
        description:
          "Market entry strategies, international partnerships, and cross-border business development for global growth.",
        learnMore: "Learn More",
      },
    },
    ko: {
      navigation: {
        company: "회사소개",
        services: "서비스",
        newsletter: "뉴스레터",
        contact: "문의하기",
        language: "한국어",
      },
      expertise: {
        title: "컨설팅 서비스",
        subtitle: "비즈니스 요구에 맞춘 종합적인 컨설팅 서비스",
      },
      globalLegal: {
        title: "글로벌 / 법무 확장",
        description:
          "포괄적인 법무 지원을 위한 기업법, 컴플라이언스, 지적재산권, 계약 관리 서비스",
        learnMore: "더 알아보기",
      },
      technology: {
        title: "기술 컨설팅",
        description:
          "현대 비즈니스를 위한 디지털 전환, 소프트웨어 개발, IT 인프라 최적화",
        learnMore: "더 알아보기",
      },
      network: {
        title: "네트워크 마케팅",
        description:
          "글로벌 성장을 위한 시장 진입 전략, 국제 파트너십, 국경 간 비즈니스 개발",
        learnMore: "더 알아보기",
      },
    },
  };

  const t = content[language];

  return (
    <div className="min-h-screen">
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
              <span className="text-xl font-bold text-white"></span>
            </Link>

            {/* Right side navigation and buttons */}
            <div className="flex items-center space-x-4">
              {/* Service Buttons */}
              <div className="hidden md:flex items-center space-x-3">
                <Link
                  href="/about"
                  className="text-white px-4 py-2 rounded-lg hover:text-[#3BB5AC] transition-colors text-sm font-medium"
                >
                  {t.navigation.company}
                </Link>
                <Link
                  href="/services"
                  className="text-[#3BB5AC] px-4 py-2 rounded-lg text-sm font-medium"
                >
                  {t.navigation.services}
                </Link>
                <Link
                  href="/newsletter"
                  className="text-white px-4 py-2 rounded-lg hover:text-[#3BB5AC] transition-colors text-sm font-medium"
                >
                  {t.navigation.newsletter}
                </Link>
                <Link
                  href="/#contact-form"
                  className="text-white px-4 py-2 rounded-lg hover:text-[#3BB5AC] transition-colors text-sm font-medium"
                >
                  {t.navigation.contact}
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
                {t.navigation.language}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Services Overview Section */}
      <section className="bg-gray-100 py-20 pt-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t.expertise.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.expertise.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Global / Legal Expansion */}
            <div className="bg-white rounded-2xl p-8 shadow-lg flex flex-col">
              <div className="w-16 h-16 bg-pink-500 rounded-2xl mb-6 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t.globalLegal.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                {t.globalLegal.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                  지적재산권 보호
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                  규정 준수
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                  계약 관리
                </span>
              </div>
              <Link
                href="/legal-expansion"
                className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors inline-block text-center mt-auto"
              >
                {t.globalLegal.learnMore}
              </Link>
            </div>

            {/* Technology Consulting */}
            <div className="bg-white rounded-2xl p-8 shadow-lg flex flex-col">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl mb-6 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t.technology.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                {t.technology.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                  AI/ML 통합
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                  클라우드 마이그레이션
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                  데브옵스
                </span>
              </div>
              <Link
                href="/technology-consulting"
                className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors inline-block text-center mt-auto"
              >
                {t.technology.learnMore}
              </Link>
            </div>

            {/* Network Marketing */}
            <div className="bg-white rounded-2xl p-8 shadow-lg flex flex-col">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl mb-6 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t.network.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                {t.network.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  시장 조사
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  파트너십 구축
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  현지화
                </span>
              </div>
              <Link
                href="/network-marketing"
                className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors inline-block text-center mt-auto"
              >
                {t.network.learnMore}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/delv-logo.png"
                  alt="DELV Logo"
                  width={60}
                  height={60}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <p className="text-gray-300 leading-relaxed">
                {language === "ko"
                  ? "전문 컨설팅 서비스를 통해 비즈니스를 강화합니다."
                  : "Empowering businesses through expert consulting services."}
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold mb-4">
                {language === "ko" ? "서비스" : "Services"}
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/technology-consulting"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {language === "ko" ? "기술" : "Technology"}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/legal-expansion"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {language === "ko" ? "법무 자문" : "Legal Advisory"}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/network-marketing"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {language === "ko" ? "글로벌 확장" : "Global Expansion"}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-semibold mb-4">
                {language === "ko" ? "회사" : "Company"}
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {language === "ko" ? "회사소개" : "About Us"}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#team"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {language === "ko" ? "팀" : "Team"}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-semibold mb-4">
                {language === "ko" ? "연락처" : "Contact"}
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
