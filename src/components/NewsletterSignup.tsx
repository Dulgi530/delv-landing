"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;

    setStatus("submitting");
    setMessage("");

    try {
      const res = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const result = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage(result.message ?? "확인 메일을 보냈습니다.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(result.error ?? "구독 신청에 실패했습니다.");
      }
    } catch {
      setStatus("error");
      setMessage("네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 mt-12 pt-10 border-t border-white/10">
      <div className="max-w-2xl">
        <h3 className="text-white font-semibold mb-2">
          주간 Web3 뉴스레터
        </h3>
        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
          매주 월요일, 한 주간의 주요 블록체인·Web3 소식을 정리해 보내드립니다.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="이메일 주소"
            aria-label="이메일 주소"
            className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4FD1C7] focus:border-transparent text-sm"
          />
          <button
            type="submit"
            disabled={status === "submitting"}
            className="bg-[#4FD1C7] text-slate-900 px-6 py-3 rounded-lg font-semibold text-sm hover:bg-[#3BB5AC] transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
          >
            {status === "submitting" ? "신청 중..." : "구독하기"}
          </button>
        </form>

        {message && (
          <p
            role="status"
            className={`mt-3 text-sm ${
              status === "error" ? "text-red-400" : "text-[#4FD1C7]"
            }`}
          >
            {message}
          </p>
        )}

        <p className="mt-3 text-xs text-gray-500 leading-relaxed">
          신청하시면 확인 메일이 발송됩니다. 메일의 링크를 눌러야 구독이 완료되며,
          언제든 수신거부할 수 있습니다.
        </p>
      </div>
    </div>
  );
}
