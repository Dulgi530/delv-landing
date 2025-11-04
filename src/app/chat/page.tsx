"use client";

import Image from "next/image";
import Link from "next/link";

export default function ChatPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0F1E] via-[#1A1F2E] to-[#0A0F1E]">
      {/* 헤더 */}
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

            {/* Navigation */}
            <div className="hidden md:flex items-center space-x-3">
              <Link
                href="/about"
                className="text-white px-4 py-2 rounded-lg hover:text-[#3BB5AC] transition-colors text-sm font-medium"
              >
                회사소개
              </Link>
              <Link
                href="/services"
                className="text-white px-4 py-2 rounded-lg hover:text-[#3BB5AC] transition-colors text-sm font-medium"
              >
                서비스
              </Link>
              <Link
                href="/newsletter"
                className="text-white px-4 py-2 rounded-lg hover:text-[#3BB5AC] transition-colors text-sm font-medium"
              >
                뉴스레터
              </Link>
              <Link
                href="/#contact-form"
                className="text-white px-4 py-2 rounded-lg hover:text-[#3BB5AC] transition-colors text-sm font-medium"
              >
                문의하기
              </Link>
              <Link
                href="/chat"
                className="text-[#c084fc] px-4 py-2 rounded-lg text-sm font-medium"
              >
                DELV CHAT
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8">
            <span className="text-purple-400 text-sm font-medium">
              🤖 AI-Powered Web3 Learning Assistant
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            DELV CHAT
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Web3 용어와 개념을 쉽게 이해할 수 있도록 도와주는
            <br />
            AI 학습 도우미입니다.
          </p>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="text-3xl mb-3">💬</div>
              <h3 className="text-lg font-semibold text-white mb-2">
                실시간 대화
              </h3>
              <p className="text-gray-400 text-sm">
                Web3 관련 질문에 즉시 답변을 받아보세요
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="text-3xl mb-3">📚</div>
              <h3 className="text-lg font-semibold text-white mb-2">
                용어 설명
              </h3>
              <p className="text-gray-400 text-sm">
                복잡한 블록체인 용어를 쉽게 이해하세요
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-lg font-semibold text-white mb-2">
                맞춤 학습
              </h3>
              <p className="text-gray-400 text-sm">
                개인 수준에 맞는 설명과 예시를 제공합니다
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href="https://delv-chat-lphugp3zc-juns-projects-8d9b4fd0.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/50"
          >
            <span>DELV CHAT 시작하기</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>

          <p className="text-gray-500 text-sm mt-6">
            새 탭에서 DELV CHAT이 열립니다
          </p>
        </div>
      </main>
    </div>
  );
}
