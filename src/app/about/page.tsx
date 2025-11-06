"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function About() {
  const [language, setLanguage] = useState<"en" | "ko">("ko");

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ko" : "en");
  };

  const content = {
    en: {
      navigation: {
        home: "Home",
        services: "Services",
        newsletter: "Newsletter",
        contact: "Contact",
        language: "ENG",
      },
      hero: {
        title: "About DELV",
        subtitle: "Empowering businesses through expert consulting services",
      },
      whatIsDelv: {
        title: "What is Delv?",
        description:
          "Delv라는 이름은 '몰두하다, 깊이 파고들다'라는 뜻의 Delve에서 비롯되었습니다.",
        content: [
          "델브는 웹3 분야에서 활동해온 전문가들이 모여, 원스톱 웹3 컨설팅 서비스를 제공하기 위해 만들어졌습니다.",
          "웹3 프로젝트의 성공은 단순히 기술에만 달려 있지 않습니다. 제도와 규제, 기술, 마케팅이 유기적으로 결합하고, 동시에 국경을 넘어 사용자와 커뮤니티를 확보할 때 비로소 성과를 낼 수 있습니다.",
          "델브는 이미 웹3에서 활동 중인 기업의 해외 진출·현지화 전략은 물론, 아직 웹3 경험이 없는 기업까지도 안전하게 웹3 세계에 온보딩할 수 있도록 돕습니다.",
          "축적된 경험과 긴밀한 글로벌 네트워크를 바탕으로, 델브는 여러분의 프로젝트가 성공적으로 안착하고 성장할 수 있도록 든든한 파트너가 되어 드립니다.",
        ],
      },
    },
    ko: {
      navigation: {
        home: "홈",
        services: "서비스",
        newsletter: "뉴스레터",
        contact: "문의하기",
        language: "한국어",
      },
      hero: {
        title: "DELV 소개",
        subtitle: "전문 컨설팅 서비스를 통해 비즈니스를 강화합니다",
      },
      whatIsDelv: {
        title: "What is Delv?",
        description:
          "Delv라는 이름은 '몰두하다, 깊이 파고들다'라는 뜻의 Delve에서 비롯되었습니다.",
        content: [
          "델브는 웹3 분야에서 활동해온 전문가들이 모여, 원스톱 웹3 컨설팅 서비스를 제공하기 위해 만들어졌습니다.",
          "웹3 프로젝트의 성공은 단순히 기술에만 달려 있지 않습니다. 제도와 규제, 기술, 마케팅이 유기적으로 결합하고, 동시에 국경을 넘어 사용자와 커뮤니티를 확보할 때 비로소 성과를 낼 수 있습니다.",
          "델브는 이미 웹3에서 활동 중인 기업의 해외 진출·현지화 전략은 물론, 아직 웹3 경험이 없는 기업까지도 안전하게 웹3 세계에 온보딩할 수 있도록 돕습니다.",
          "축적된 경험과 긴밀한 글로벌 네트워크를 바탕으로, 델브는 여러분의 프로젝트가 성공적으로 안착하고 성장할 수 있도록 든든한 파트너가 되어 드립니다.",
        ],
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
                  href="/"
                  className="text-white px-4 py-2 rounded-lg hover:text-[#3BB5AC] transition-colors text-sm font-medium"
                >
                  {t.navigation.home}
                </Link>
                <Link
                  href="/services"
                  className="text-white px-4 py-2 rounded-lg hover:text-[#3BB5AC] transition-colors text-sm font-medium"
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

      {/* Hero Section */}
      <section className="relative py-20 pt-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/delvteam.jpeg"
            alt="DELV Team Background"
            fill
            className="object-cover opacity-95"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A202C]/90 to-[#2D3748]/90"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {t.hero.title}
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>
        </div>
      </section>

      {/* What is Delv Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t.whatIsDelv.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
              {t.whatIsDelv.description}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {t.whatIsDelv.content.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg text-gray-700 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
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
