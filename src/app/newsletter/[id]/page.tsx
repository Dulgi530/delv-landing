"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
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

export default function NewsletterDetail() {
  const params = useParams();
  const router = useRouter();
  const [language, setLanguage] = useState<"en" | "ko">("ko");
  const [post, setPost] = useState<NewsletterPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ko" : "en");
  };

  useEffect(() => {
    if (params.id) {
      fetchPost(Number(params.id));
    }
  }, [params.id]);

  const fetchPost = async (id: number) => {
    try {
      const { data, error } = await supabase
        .from("newsletters")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error fetching newsletter:", error);
        // 예시 데이터 사용
        setPost({
          id: id,
          title: "Web3 산업의 최신 동향",
          content: `
            <h2>Web3 산업 개요</h2>
            <p>Web3 산업은 급속도로 성장하고 있으며, 블록체인 기술을 기반으로 한 다양한 서비스들이 등장하고 있습니다.</p>
            
            <h3>주요 동향</h3>
            <ul>
              <li>탈중앙화 금융(DeFi) 시장의 확대</li>
              <li>NFT 시장의 성숙화</li>
              <li>메타버스 플랫폼의 발전</li>
              <li>웹3 게임의 상용화</li>
            </ul>
            
            <p>이러한 변화 속에서 기업들은 새로운 비즈니스 모델을 탐색하고 있으며, 법적 규제와 기술적 도전에 직면하고 있습니다.</p>
            
            <h3>전망</h3>
            <p>앞으로 Web3 산업은 더욱 성장할 것으로 예상되며, 기업들은 이를 위한 준비가 필요합니다.</p>
          `,
          author: "DELV Team",
          created_at: new Date().toISOString(),
          views: 150,
          category: "업계 동향",
        });
      } else {
        setPost(data);
      }
    } catch (error) {
      console.error("Error:", error);
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

  const content = {
    en: {
      navigation: {
        company: "Company",
        services: "Services",
        newsletter: "Newsletter",
        contact: "Contact",
        language: "ENG",
      },
      backToList: "Back to List",
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
      backToList: "목록으로",
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

      {/* Newsletter Detail Section */}
      <section className="py-20 pt-32">
        <div className="max-w-4xl mx-auto px-6">
          {/* Back Button */}
          <Link
            href="/newsletter"
            className="inline-flex items-center text-cyan-500 hover:text-cyan-600 mb-8"
          >
            ← {t.backToList}
          </Link>

          {isLoading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
              <p className="mt-4 text-gray-600">Loading...</p>
            </div>
          ) : !post ? (
            <div className="text-center py-12">
              <p className="text-gray-600">Post not found</p>
            </div>
          ) : (
            <article className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Thumbnail Image */}
              {post.thumbnail_url && (
                <div className="w-full h-96 overflow-hidden">
                  <img
                    src={post.thumbnail_url}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Post Header */}
              <header className="mb-8 p-8 pb-0">
                <div className="flex items-center gap-3 mb-4">
                  {post.category && (
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  )}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {post.title}
                </h1>
                <div className="flex items-center gap-4 text-sm text-gray-500 border-b pb-4">
                  <span>
                    {t.author}: {post.author}
                  </span>
                  <span>•</span>
                  <span>{formatDate(post.created_at)}</span>
                </div>
              </header>

              {/* Post Content */}
              <div
                className="prose prose-lg max-w-none p-8 pt-0 text-black"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-16 mt-20">
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
                    href="/services/legal"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {language === "ko" ? "법률자문" : "Legal Advisory"}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/accounting"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {language === "ko" ? "회계 세무 자문" : "Accounting & Tax"}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/technical"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {language === "ko"
                      ? "기술 자문 설계"
                      : "Technical Advisory"}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/business"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {language === "ko"
                      ? "비지니스 개발"
                      : "Business Development"}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/networking"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {language === "ko"
                      ? "네트워킹 커뮤니티"
                      : "Networking Community"}
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
                    href="mailto:admin@delv.team"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    admin@delv.team
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
