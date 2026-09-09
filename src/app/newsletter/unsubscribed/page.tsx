import Link from "next/link";

const MESSAGES: Record<string, { title: string; body: string }> = {
  ok: {
    title: "수신거부 처리되었습니다",
    body: "더 이상 뉴스레터를 보내지 않습니다. 언제든 다시 구독하실 수 있습니다.",
  },
  already: {
    title: "이미 수신거부 상태입니다",
    body: "이 이메일로는 뉴스레터가 발송되지 않습니다.",
  },
  invalid: {
    title: "유효하지 않은 링크입니다",
    body: "링크가 잘못되었습니다. admin@delv.team 으로 문의해주세요.",
  },
  error: {
    title: "처리 중 오류가 발생했습니다",
    body: "잠시 후 다시 시도해주세요. 문제가 계속되면 admin@delv.team 으로 알려주세요.",
  },
};

export default async function UnsubscribedPage({
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
        <div className="text-5xl mb-4">{isSuccess ? "👋" : "⚠️"}</div>
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
