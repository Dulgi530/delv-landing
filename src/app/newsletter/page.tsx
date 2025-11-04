"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

interface NewsletterPost {
  id: number;
  title: string;
  content: string;
  author: string;
  created_at: string;
  views: number;
  category?: string;
  thumbnail_url?: string;
}

export default function Newsletter() {
  const [language, setLanguage] = useState<"en" | "ko">("ko");
  const [posts, setPosts] = useState<NewsletterPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ko" : "en");
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from("newsletters")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching newsletters:", error);
        // 에러 발생 시 예시 데이터 사용
        setPosts([
          {
            id: 1,
            title: "Web3 산업의 최신 동향",
            content: "Web3 산업의 최신 동향에 대해 알아보세요...",
            author: "DELV Team",
            created_at: new Date().toISOString(),
            views: 150,
            category: "업계 동향",
          },
          {
            id: 2,
            title: "글로벌 법무 확장 전략",
            content: "해외 진출을 위한 법무 전략에 대해...",
            author: "DELV Team",
            created_at: new Date(Date.now() - 86400000).toISOString(),
            views: 89,
            category: "법무",
          },
        ]);
      } else {
        setPosts(data || []);
      }
    } catch (error) {
      console.error("Error:", error);
      // 에러 발생 시 예시 데이터 사용
      setPosts([
        {
          id: 1,
          title: "Web3 산업의 최신 동향",
          content: "Web3 산업의 최신 동향에 대해 알아보세요...",
          author: "DELV Team",
          created_at: new Date().toISOString(),
          views: 150,
          category: "업계 동향",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === "ko" ? "ko-KR" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const truncateContent = (content: string, maxLength: number = 100) => {
    // HTML 태그 제거
    const textOnly = content.replace(/<[^>]*>/g, "");
    if (textOnly.length <= maxLength) return textOnly;
    return textOnly.substring(0, maxLength) + "...";
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
      title: "Newsletter",
      subtitle: "Stay updated with our latest insights and updates",
      noPosts: "No newsletters available yet.",
      readMore: "Read More",
      author: "Author",
      views: "Views",
      date: "Date",
      category: "Category",
    },
    ko: {
      navigation: {
        company: "회사소개",
        services: "서비스",
        newsletter: "뉴스레터",
        contact: "문의하기",
        language: "한국어",
      },
      title: "뉴스레터",
      subtitle: "최신 인사이트와 업데이트를 받아보세요",
      noPosts: "아직 뉴스레터가 없습니다.",
      readMore: "더보기",
      author: "작성자",
      views: "조회수",
      date: "작성일",
      category: "카테고리",
    },
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-gray-50">
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
                  className="text-white px-4 py-2 rounded-lg hover:text-[#3BB5AC] transition-colors text-sm font-medium"
                >
                  {t.navigation.services}
                </Link>
                <Link
                  href="/newsletter"
                  className="text-[#3BB5AC] px-4 py-2 rounded-lg text-sm font-medium"
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

      {/* Newsletter List Section */}
      <section className="py-20 pt-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.subtitle}
            </p>
          </div>

          {/* Newsletter Posts List */}
          {isLoading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
              <p className="mt-4 text-gray-600">Loading...</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600">{t.noPosts}</p>
            </div>
          ) : (
            <div className="space-y-4">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  href={`/newsletter/${post.id}`}
                  className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    {post.thumbnail_url && (
                      <div className="md:w-64 h-48 md:h-auto flex-shrink-0">
                        <img
                          src={post.thumbnail_url}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div
                      className={`flex-1 p-6 ${
                        post.thumbnail_url ? "md:py-6 md:pr-6 md:pl-0" : ""
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        {post.category && (
                          <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">
                            {post.category}
                          </span>
                        )}
                        <h3 className="text-xl font-bold text-gray-900">
                          {post.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 mb-3">
                        {truncateContent(post.content)}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>
                          {t.author}: {post.author}
                        </span>
                        <span>•</span>
                        <span>{formatDate(post.created_at)}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-16 mt-20">
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
