"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";

export default function Home() {
  const { language, toggleLanguage } = useLanguage();
  const t = useTranslation();
  
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    privacy: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [newsletters, setNewsletters] = useState<any[]>([]);

  useEffect(() => {
    fetchNewsletters();
  }, []);

  const fetchNewsletters = async () => {
    try {
      const { data, error } = await supabase
        .from("newsletters")
        .select(
          "id, title, content, author, created_at, category, thumbnail_url"
        )
        .order("created_at", { ascending: false })
        .limit(3);

      if (data && !error) {
        setNewsletters(data);
      }
    } catch (error) {
      console.error("Error fetching newsletters:", error);
    }
  };

  const truncateContent = (content: string, maxLength: number = 100) => {
    const textOnly = content.replace(/<[^>]*>/g, "");
    if (textOnly.length <= maxLength) return textOnly;
    return textOnly.substring(0, maxLength) + "...";
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === "ko" ? "ko-KR" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          message: "",
          privacy: false,
        });
      } else {
        setSubmitStatus("error");
        console.error("Error:", result.error);
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
                  href="#contact-form"
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

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1A202C] to-[#2D3748] py-20 pt-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            <span>{t.hero.title}<br /></span>
            <span>{t.hero.titleBreak}</span>
          </h1>
          <p className="text-xl text-gray-300 mb-4 max-w-3xl mx-auto">
            {t.hero.subtitle}
          </p>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            {t.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact-form"
              className="bg-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-600 transition-colors inline-block"
            >
              {t.hero.ctaStart}
            </a>
            <Link
              href="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-slate-900 transition-colors inline-block"
            >
              {t.hero.ctaLearn}
            </Link>
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section id="services" className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t.services.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.services.subtitle}
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
                {t.services.globalLegal.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                {t.services.globalLegal.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {t.services.globalLegal.tags.map((tag, index) => (
                  <span key={index} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href="/legal-expansion"
                className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors inline-block text-center mt-auto"
              >
                {t.services.globalLegal.learnMore}
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
                {t.services.technology.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                {t.services.technology.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {t.services.technology.tags.map((tag, index) => (
                  <span key={index} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href="/technology-consulting"
                className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors inline-block text-center mt-auto"
              >
                {t.services.technology.learnMore}
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
                {t.services.network.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                {t.services.network.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {t.services.network.tags.map((tag, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href="/network-marketing"
                className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors inline-block text-center mt-auto"
              >
                {t.services.network.learnMore}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t.newsletter.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.newsletter.subtitle}
            </p>
          </div>

          {newsletters.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {newsletters.map((newsletter) => (
                  <Link
                    key={newsletter.id}
                    href={`/newsletter/${newsletter.id}`}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    {newsletter.thumbnail_url && (
                      <div className="h-48 overflow-hidden">
                        <img
                          src={newsletter.thumbnail_url}
                          alt={newsletter.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      {newsletter.category && (
                        <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium mb-3 inline-block">
                          {newsletter.category}
                        </span>
                      )}
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {newsletter.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {truncateContent(newsletter.content, 120)}
                      </p>
                      <div className="text-sm text-gray-500">
                        <span>
                          {t.newsletter.author}: {newsletter.author}
                        </span>
                        <span className="mx-2">•</span>
                        <span>{formatDate(newsletter.created_at)}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="text-center">
                <Link
                  href="/newsletter"
                  className="inline-block bg-cyan-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-cyan-600 transition-colors"
                >
                  {t.newsletter.viewAll}
                </Link>
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">
                최신 뉴스레터가 곧 업데이트됩니다.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* DELV CHAT Section */}
      <section className="bg-gradient-to-r from-[#1A202C] to-[#2D3748] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
              <svg
                className="w-5 h-5 text-white mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-white font-semibold">
                {t.delvChat.subtitle}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t.delvChat.title}
            </h2>
            <p className="text-xl text-white/90 mb-8">
              {t.delvChat.description}
            </p>
            <Link
              href="/chat"
              className="inline-flex items-center bg-[#4FD1C7] text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-[#3BB5AC] transition-all transform hover:scale-105 shadow-2xl"
            >
              <svg
                className="w-6 h-6 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
              </svg>
              {t.delvChat.startChat} →
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              고객 리뷰
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              델브와 함께한 고객들의 생생한 경험담을 들어보세요
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-white/90 text-lg leading-relaxed mb-4">
                &ldquo;스위스 법인 설립을 준비하면서 막막함이 많았습니다. 델브의
                컨설팅을 받으면서 단계별로 차근차근 준비할 수 있었고, 현지
                전문가와 네트워크까지 연결해 주셔서 든든했습니다. 이제는 스위스
                진출에 자신감을 갖게 되었고, 글로벌 파트너십 기회도 넓어지고
                있습니다.&rdquo;
              </div>
              <div className="text-cyan-300 font-semibold">— B사, 대표</div>
            </div>

            {/* Review 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-white/90 text-lg leading-relaxed mb-4">
                &ldquo;웹3 서비스와 코인 비즈니스를 준비하면서 가장 큰 걱정은
                규제와 법적 리스크였습니다. 델브는 핀테크·가상자산 관련 법령을
                세밀하게 검토해주셨고, 저희 상황에 맞는 리스크 최소화 전략을
                제시해 주셨습니다. 덕분에 프로젝트를 안심하고 진행할 수 있었고,
                투자자에게도 신뢰를 줄 수 있었습니다.&rdquo;
              </div>
              <div className="text-cyan-300 font-semibold">— F사, 대표</div>
            </div>

            {/* Review 3 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-white/90 text-lg leading-relaxed mb-4">
                &ldquo;토큰 이코노미 설계가 막연해서 프로젝트가 늘
                제자리걸음이었습니다. 델브는 저희 사업모델을 철저히 분석해 토큰
                구조와 규제 리스크를 동시에 해결해 주셨습니다. 그 결과, 초기
                사용자 확보와 커뮤니티 지지도 빠르게 늘어났고 투자 유치까지
                이어졌습니다. 웹3를 고민하는 모든 기업에 델브를
                추천합니다.&rdquo;
              </div>
              <div className="text-cyan-300 font-semibold">— S사, 대표</div>
            </div>

            {/* Review 4 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-white/90 text-lg leading-relaxed mb-4">
                &ldquo;글로벌 ESG 기준에 맞추라는 압박이 커지던 중 델브와 함께
                블록체인 기반 공급망 관리 솔루션을 도입했습니다. 원자재와 제품
                이동을 실시간으로 추적할 수 있게 되었고, 해외 바이어와
                투자자에게 높은 신뢰를 얻었습니다. 델브와의 협업은 단순한
                컨설팅을 넘어 비즈니스 가치 그 자체를 높여주었습니다.&rdquo;
              </div>
              <div className="text-cyan-300 font-semibold">— P사, 대표</div>
            </div>

            {/* Review 5 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-white/90 text-lg leading-relaxed mb-4">
                &ldquo;기존 웹2 서비스에 블록체인을 접목하고 싶었지만,
                어디서부터 시작해야 할지 몰라 고민이 많았습니다. 델브는 저희의
                기술 수준과 시장 상황을 고려한 단계별 로드맵을 제시했고, 그
                과정에서 규제 대응부터 파트너십 구축까지 함께 해주셨습니다. 이제
                자신 있게 웹3 기업으로 성장해가고 있습니다. 감사합니다!&rdquo;
              </div>
              <div className="text-cyan-300 font-semibold">— M사, 대표</div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section id="team" className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t.team.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.team.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 - Park Sungyeon */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-20 h-20 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                <Image
                  src="/parksungyeon.jpeg"
                  alt="SUNGYEON PARK"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
                SUNGYEON PARK
              </h3>
              <p className="text-gray-600 text-center mb-3">
                {t.team.members.sungyeon.position}
              </p>
              <p
                className="text-gray-500 text-sm text-center mb-4"
                dangerouslySetInnerHTML={{
                  __html: t.team.members.sungyeon.description,
                }}
              />
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">
                  Corporate Law
                </span>
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">
                  Blockchain Legal
                </span>
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">
                  International Affairs
                </span>
              </div>
            </div>

            {/* Team Member 2 - ILHUN KIM */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-20 h-20 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                <Image
                  src="/kimilhoon.jpeg"
                  alt="ILHUN KIM"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
                ILHUN KIM
              </h3>
              <p className="text-gray-600 text-center mb-3">
                {t.team.members.ilhun.position}
              </p>
              <p
                className="text-gray-500 text-sm text-center mb-4"
                dangerouslySetInnerHTML={{
                  __html: t.team.members.ilhun.description,
                }}
              />
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                  Accounting
                </span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                  Tax Advisory
                </span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                  Finance
                </span>
              </div>
            </div>

            {/* Team Member 3 - ROSA */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-20 h-20 bg-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                <Image
                  src="/rosa.jpeg"
                  alt="JIYOUNG SUK (ROSA)"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
                JIYOUNG SUK (ROSA)
              </h3>
              <p className="text-gray-600 text-center mb-3">
                {t.team.members.rosa.position}
              </p>
              <p
                className="text-gray-500 text-sm text-center mb-4"
                dangerouslySetInnerHTML={{
                  __html: t.team.members.rosa.description,
                }}
              />
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="bg-pink-100 text-pink-800 px-2 py-1 rounded-full text-xs">
                  Blockchain
                </span>
                <span className="bg-pink-100 text-pink-800 px-2 py-1 rounded-full text-xs">
                  Web3
                </span>
                <span className="bg-pink-100 text-pink-800 px-2 py-1 rounded-full text-xs">
                  Investment
                </span>
                <span className="bg-pink-100 text-pink-800 px-2 py-1 rounded-full text-xs">
                  Switzerland
                </span>
              </div>
            </div>

            {/* Team Member 4 - Im Hyeongjun */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-20 h-20 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                <Image
                  src="/imhyeongjun.jpeg"
                  alt="HYEONGJUN IM"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
                HYEONGJUN IM
              </h3>
              <p className="text-gray-600 text-center mb-3">
                {t.team.members.hyeongjun.position}
              </p>
              <p
                className="text-gray-500 text-sm text-center mb-4"
                dangerouslySetInnerHTML={{
                  __html: t.team.members.hyeongjun.description,
                }}
              />
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                  Tech Leadership
                </span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                  Web3 Innovation
                </span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                  Award Winner
                </span>
              </div>
            </div>

            {/* Team Member 5 - Kim Youngdae */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-20 h-20 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                <Image
                  src="/youngdaekim.jpeg"
                  alt="YOUNGDAE KIM"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
                YOUNGDAE KIM
              </h3>
              <p className="text-gray-600 text-center mb-3">
                {t.team.members.youngdae.position}
              </p>
              <p
                className="text-gray-500 text-sm text-center mb-4"
                dangerouslySetInnerHTML={{
                  __html: t.team.members.youngdae.description,
                }}
              />
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">
                  Community Building
                </span>
                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">
                  Network Development
                </span>
                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">
                  Engagement
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
            {t.partner.title}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Link
              href="https://www.wiw3ch.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 rounded-lg p-8 h-32 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <Image
                src="/w3w-logo.avif"
                alt="WiW3CH Logo"
                width={180}
                height={90}
                className="max-w-full max-h-full object-contain"
              />
            </Link>
            <Link
              href="https://aidenteti.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 rounded-lg p-8 h-32 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <Image
                src="/aidenteticrew.png"
                alt="아이덴티티크루 Logo"
                width={180}
                height={90}
                className="max-w-full max-h-full object-contain"
              />
            </Link>
            <Link
              href="https://www.moalaw.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 rounded-lg p-8 h-32 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <Image
                src="/Moa-logo.png"
                alt="MOA Logo"
                width={180}
                height={90}
                className="max-w-full max-h-full object-contain"
              />
            </Link>
            <Link
              href="https://www.build-up.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 rounded-lg p-8 h-32 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <Image
                src="/buildup-logo.svg"
                alt="Build-Up Logo"
                width={180}
                height={90}
                className="max-w-full max-h-full object-contain"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        id="contact-form"
        className="bg-gradient-to-r from-cyan-500 to-slate-900 py-20"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t.ready.title}
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              {t.ready.subtitle}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                문의가 성공적으로 전송되었습니다! 담당자가 확인 후
                연락드리겠습니다.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                문의 전송에 실패했습니다. 다시 시도해주세요.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    이름 *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-gray-900"
                    placeholder="이름을 입력해주세요"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    소속 *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-gray-900"
                    placeholder="회사명을 입력해주세요"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    이메일 *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-gray-900"
                    placeholder="이메일을 입력해주세요"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    전화번호 *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-gray-900"
                    placeholder="전화번호를 입력해주세요"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  문의내용 (선택)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-gray-900"
                  placeholder="문의하실 내용을 입력해주세요"
                ></textarea>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="privacy"
                  name="privacy"
                  checked={formData.privacy}
                  onChange={handleInputChange}
                  required
                  className="mt-1 h-4 w-4 text-cyan-600 focus:ring-cyan-500 border-gray-300 rounded"
                />
                <label htmlFor="privacy" className="ml-3 text-sm text-gray-700">
                  개인정보 제공에 동의합니다 *
                </label>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "전송 중..." : "문의하기"}
                </button>
              </div>

              <p className="text-center text-sm text-gray-500">
                * 담당자가 확인 후 순차적으로 연락 드립니다.
              </p>
            </form>
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
                {t.footer.services}
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Technology
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Legal Advisory
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Global Expansion
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-semibold mb-4">
                {t.footer.company}
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-semibold mb-4">
                {t.footer.contact}
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="mailto:delv.web3@gmail.com"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    delv.web3@gmail.com
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
