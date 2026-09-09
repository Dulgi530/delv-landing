import Link from "next/link";

const MESSAGES: Record<string, { title: string; body: string }> = {
  ok: {
    title: "구독이 완료되었습니다",
    body: "매주 월요일 아침, 한 주간의 Web3 소식을 보내드리겠습니다.",
  },
  already: {
    title: "이미 구독 중입니다",
    body: "이 이메일은 이미 구독이 확정된 상태입니다.",
  },
  invalid: {
    title: "유효하지 않은 링크입니다",
    body: "링크가 만료되었거나 잘못되었습니다. 구독 폼에서 다시 신청해주세요.",
  },
  error: {
    title: "처리 중 오류가 발생했습니다",
    body: "잠시 후 다시 시도해주세요. 문제가 계속되면 admin@delv.team 으로 알려주세요.",
  },
};

export default async function SubscribedPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  const { status } = await searchParams;
  const content = MESSAGES[status ?? ""] ?? MESSAGES.error;
  const isSuccess = status === "ok" || status === "already";

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#1A202C] to-[#2D3748] flex items-center justify-center px-6">
      <div className="max-w-md w-full bg-white rounded-2xl p-8 text-center shadow-2xl">
        <div className="text-5xl mb-4">{isSuccess ? "✅" : "⚠️"}</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-3">
          {content.title}
        </h1>
        <p className="text-gray-600 leading-relaxed mb-8">{content.body}</p>
        <Link
          href="/"
          className="inline-block bg-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-600 transition-colors"
        >
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
}
