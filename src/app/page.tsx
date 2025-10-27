"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [language, setLanguage] = useState<"en" | "ko">("ko");
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

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ko" : "en");
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

  const content = {
    en: {
      navigation: {
        company: "Company",
        globalLegal: "Global/Legal",
        tech: "Tech",
        network: "Network",
        overseas: "Overseas",
        contact: "Contact",
        language: "ENG",
      },
      hero: {
        title: "Transform Your Business\nWith Expert Consulting",
        subtitle:
          "We provide comprehensive consulting services in technology, legal advisory, and global expansion to accelerate your growth.",
        startButton: "Start Consulting",
        learnButton: "Learn More",
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
      team: {
        title: "Meet Our Team",
        subtitle:
          "Industry experts with proven track records across technology, legal, and global markets",
        members: {
          rosa: {
            position: "주재원 (스위스)",
            description:
              "- 성신여자대학교 컴퓨터공학 / 정보공학 석사<br />- SKB(Swiss Korean Blockchain) Advisors 파운더<br />- Women in Web3 Switzerland (WIW3.ch) 파트너십팀 핵심 기여자<br />- 스위스와 한국 간 블록체인 산업 교류 및 협력 경험 多<br />- 스위스 스타트업의 한국 블록체인 프로젝트 투자 유치 및 자금 조달 지원 경험 多",
          },
          ilhun: {
            position: "회계사",
            description:
              "- 고려대학교 경영 MBA 수료<br />- 前 삼정회계법인 회계사<br />- 한울회계법인 파트너<br />- 국내 대기업 금융그룹, 투자회사 회계 용역 多<br />- 국제조세 자문 수행",
          },
          sungyeon: {
            position: "Lawyer",
            description:
              "- B.A. in Business Administration, Korea University / J.D., Korea University School of Law<br />- Former in-house counsel at Celltrion and Pulmuone<br />- Grand Prize, ABB Blockchain Hackathon<br />- Experienced in international legal affairs, blockchain advisory, and lecturing",
          },
          hyeongjun: {
            position: "Tech Lead",
            description:
              "- aɪdentəti CEO & Builder Academy Community Founder<br />- UNESCO Digital lecture professor<br />- ETH Global Hackathon Award (2023,2024)<br />- ABB BlockChain Hackathon Award (2023)<br />- Web3 Project PM / Design Department",
          },
          youngdae: {
            position: "Community Lead",
            description:
              "- aɪdentəti COO and Community Management<br />- Experience as a Web3 Project Community Builder<br />- Experience as a Moderator for Multiple Projects<br />- BD/Operations Manager at MEXC Exchange<br />- Extensive Experience Participating in and Managing Domestic & International Events (Hackathons, Meetups)",
          },
        },
      },
      partner: {
        title: "Partner",
      },
      ready: {
        title: "Web3, First Step to Infinite Possibilities",
        subtitle:
          "Design your growth roadmap through strategic meetings with Delv.",
        contact: "Contact Us",
        schedule: "Schedule Call",
      },
      footer: {
        description:
          "Empowering businesses through expert consulting services.",
        services: "Services",
        company: "Company",
        contact: "Contact",
      },
    },
    ko: {
      navigation: {
        company: "회사소개",
        globalLegal: "글로벌/법률",
        tech: "기술",
        network: "네트워크",
        overseas: "해외 진출",
        contact: "문의",
        language: "한국어",
      },
      hero: {
        title: "전문 컨설팅으로\n비즈니스를 혁신하세요",
        subtitle:
          "법령 검토 / 웹3 기술 자문 / 홍보, 마케팅 / 해외진출 Web3 분야의 종합적인 컨설팅 서비스를 통해 귀하의 성장을 가속화합니다.",
        startButton: "컨설팅 시작하기",
        learnButton: "더 알아보기",
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
      team: {
        title: "팀 소개",
        subtitle:
          "기술, 법무, 글로벌 시장에서 입증된 실적을 가진 업계 전문가들",
        members: {
          rosa: {
            position: "주재원 (스위스)",
            description:
              "- 성신여자대학교 컴퓨터공학 / 정보공학 석사<br />- SKB(Swiss Korean Blockchain) Advisors 파운더<br />- Women in Web3 Switzerland (WIW3.ch) 파트너십팀 핵심 기여자<br />- 스위스와 한국 간 블록체인 산업 교류 및 협력 경험 多<br />- 스위스 스타트업의 한국 블록체인 프로젝트 투자 유치 및 자금 조달 지원 경험 多",
          },
          ilhun: {
            position: "회계사",
            description:
              "- 고려대학교 경영 MBA 수료<br />- 前 삼정회계법인 회계사<br />- 現 한울회계법인 이사 (회계사)<br />- 국내 대기업 금융그룹, 투자회사 회계 용역 多<br />- 국제조세 자문 수행",
          },
          sungyeon: {
            position: "변호사",
            description:
              "- 고려대학교 경영학 학사 / 법학전문대학원 법학박사<br />- 셀트리온, 풀무원 법무팀 근무 경력<br />- ABB 블록체인 해커톤 대상 수상<br />- 국제법무, 블록체인 자문, 강의 경험",
          },
          hyeongjun: {
            position: "기술 리드",
            description:
              "- aɪˈdentəti CEO & 빌더 아카데미 커뮤니티 파운더<br />- 유네스코 디지털 강의 강사<br />- ETHGlobal 해커톤 수상(2023,2024)<br />- ABB 블록체인 해커톤 최우수상 수상<br />- Web3 Project 기획/디자인 경험 다수",
          },
          youngdae: {
            position: "커뮤니티 리드",
            description:
              "- aɪdentəti COO 및 커뮤니티 관리<br />- Web3 프로젝트 커뮤니티 빌더 경험<br />- 다수의 프로젝트 모더레이터 경험<br />- MEXC 거래소 BD/운영 매니저<br />- 국내외 이벤트 참여 및 관리 풍부한 경험 (해커톤, 밋업)",
          },
        },
      },
      partner: {
        title: "파트너",
      },
      ready: {
        title: "Web3, 무한한 가능성의 첫걸음",
        subtitle: "델브와의 전략 미팅을 통해, 성장 로드맵을 설계하세요.",
        contact: "문의하기",
        schedule: "상담 예약",
      },
      footer: {
        description: "전문 컨설팅 서비스를 통해 비즈니스를 강화합니다.",
        services: "서비스",
        company: "회사",
        contact: "연락처",
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
                  href="#overseas"
                  className="text-white px-4 py-2 rounded-lg hover:text-[#3BB5AC] transition-colors text-sm font-medium"
                >
                  {t.navigation.overseas}
                </Link>
                <Link
                  href="/legal-expansion"
                  className="text-white px-4 py-2 rounded-lg hover:text-[#3BB5AC] transition-colors text-sm font-medium"
                >
                  {t.navigation.globalLegal}
                </Link>
                <Link
                  href="/technology-consulting"
                  className="text-white px-4 py-2 rounded-lg hover:text-[#3BB5AC] transition-colors text-sm font-medium"
                >
                  {t.navigation.tech}
                </Link>
                <Link
                  href="/network-marketing"
                  className="text-white px-4 py-2 rounded-lg hover:text-[#3BB5AC] transition-colors text-sm font-medium"
                >
                  {t.navigation.network}
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
      <section className="bg-gradient-to-r from-[#1A202C] to-[#2D3748] py-20 pt-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {t.hero.title.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                {index < t.hero.title.split("\n").length - 1 && <br />}
              </span>
            ))}
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact-form"
              className="bg-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-600 transition-colors inline-block"
            >
              {t.hero.startButton}
            </a>
            <Link
              href="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-slate-900 transition-colors inline-block"
            >
              {t.hero.learnButton}
            </Link>
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section id="services" className="bg-gray-100 py-20">
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
                  IP Protection
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                  Compliance
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                  Contracts
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
                  AI/ML Integration
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                  Cloud Migration
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                  DevOps
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
                  Market Research
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  Partnerships
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  Localization
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

      {/* Statistics Section */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                200+
              </div>
              <div className="text-gray-300 text-lg">Projects Completed</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                50+
              </div>
              <div className="text-gray-300 text-lg">Enterprise Clients</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                15+
              </div>
              <div className="text-gray-300 text-lg">Countries Served</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                98%
              </div>
              <div className="text-gray-300 text-lg">Client Satisfaction</div>
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
