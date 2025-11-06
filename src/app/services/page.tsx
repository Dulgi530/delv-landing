"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";

export default function Services() {
  const { toggleLanguage } = useLanguage();
  const t = useTranslation();

  const servicesList = [
    { key: "legal" as const, colorClass: "purple" },
    { key: "accounting" as const, colorClass: "blue" },
    { key: "technical" as const, colorClass: "green" },
    { key: "business" as const, colorClass: "yellow" },
    { key: "networking" as const, colorClass: "pink" },
  ];

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
                  {t.nav.company}
                </Link>
                <Link
                  href="/services"
                  className="text-[#3BB5AC] px-4 py-2 rounded-lg text-sm font-medium"
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

      {/* Services Overview Section */}
      <section className="bg-gray-100 py-20 pt-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t.services.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList.map(({ key, colorClass }) => (
              <div
                key={key}
                id={key}
                className="bg-white rounded-2xl p-6 shadow-lg flex flex-col hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{t.services[key].icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {t.services[key].title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed flex-grow text-sm">
                  {t.services[key].description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {t.services[key].tags.map((tag: string, index: number) => (
                    <span
                      key={index}
                      className={`bg-${colorClass}-100 text-${colorClass}-800 px-2 py-1 rounded-full text-xs`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/services/${key}`}
                  className="border-2 border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:border-gray-400 transition-colors inline-block text-center mt-auto text-sm"
                >
                  {t.services[key].learnMore}
                </Link>
              </div>
            ))}
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
                    href="#legal"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {t.services.legal.title}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#accounting"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {t.services.accounting.title}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#technical"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {t.services.technical.title}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#business"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {t.services.business.title}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#networking"
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
