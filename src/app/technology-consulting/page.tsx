"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";

export default function TechnologyConsulting() {
  const { toggleLanguage } = useLanguage();
  const t = useTranslation();

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
        {/* Service Details Section */}
        <section className="py-20 pt-32">
          <div className="max-w-7xl mx-auto px-6">
            {/* Page Title */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                서비스 상세
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                전문적인 컨설팅 역량을 자세히 알아보세요
              </p>
            </div>

            {/* Main Content Card */}
            <div className="bg-gray-50 rounded-3xl p-12 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left Section - Service Overview */}
                <div>
                  {/* Icon */}
                  <div className="w-20 h-20 bg-purple-500 rounded-2xl mb-6 flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-white"
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

                  {/* Service Title */}
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    기술 컨설팅
                  </h2>

                  {/* Description */}
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    최첨단 기술을 활용하여 혁신을 주도하고 운영을 간소화하며
                    디지털 전환을 통해 지속 가능한 성장을 달성할 수 있도록
                    돕습니다.
                  </p>

                  {/* Navigation Arrows */}
                  <div className="flex space-x-4"></div>
                </div>

                {/* Right Section - Our Process */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">
                    Our Process
                  </h3>

                  {/* Process Steps */}
                  <div className="space-y-8">
                    {/* Step 1 */}
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-lg font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">
                          Technology Assessment
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          Evaluate current infrastructure and identify
                          opportunities
                        </p>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-lg font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">
                          Strategy Development
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          Create comprehensive digital transformation roadmap
                        </p>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-lg font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">
                          Implementation
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          Execute solutions with ongoing support and
                          optimization
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                Empowering businesses through expert consulting services.
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/technology-consulting"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Technology
                  </Link>
                </li>
                <li>
                  <Link
                    href="/legal-expansion"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Legal Advisory
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#services"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Global Expansion
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/#about"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#team"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#contact"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="mailto:hello@delvconsulting.com"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    hello@delvconsulting.com
                  </Link>
                </li>
                <li>
                  <Link
                    href="tel:+15551234567"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    +1 (555) 123-4567
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
