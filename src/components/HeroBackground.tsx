/**
 * 히어로 배경.
 *
 * GIF 대신 CSS 애니메이션을 쓴다. 같은 인상을 내면서 파일이 몇 KB에 그치고,
 * 어떤 해상도에서도 선명하며, prefers-reduced-motion 을 존중할 수 있다.
 * (GIF 는 보통 수 MB에 256색 제한이라 LCP 를 크게 떨어뜨린다.)
 */
export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* 바탕 */}
      <div className="absolute inset-0 bg-[#12161F]" />

      {/* 오로라 — 느리게 표류하는 색 덩어리 */}
      <div
        className="hero-aurora hero-aurora-a absolute -top-1/3 -left-1/4 w-[70vw] h-[70vw] rounded-full blur-[110px] opacity-50"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(79,209,199,0.45), rgba(79,209,199,0) 70%)",
        }}
      />
      <div
        className="hero-aurora hero-aurora-b absolute top-1/4 -right-1/4 w-[65vw] h-[65vw] rounded-full blur-[120px] opacity-45"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(99,102,241,0.40), rgba(99,102,241,0) 70%)",
        }}
      />
      <div
        className="hero-aurora hero-aurora-c absolute -bottom-1/3 left-1/4 w-[60vw] h-[60vw] rounded-full blur-[130px] opacity-35"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(168,85,247,0.32), rgba(168,85,247,0) 70%)",
        }}
      />

      {/* 격자 — 아주 옅게, 천천히 흐른다 */}
      <div
        className="hero-grid absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.35), rgba(255,255,255,0.35) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, rgba(255,255,255,0.35), rgba(255,255,255,0.35) 1px, transparent 1px, transparent 40px)",
        }}
      />

      {/* 비네트 + 하단 페이드로 다음 섹션과 이어지게 */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, transparent 35%, rgba(10,13,20,0.55) 100%)",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#0D1117]" />
    </div>
  );
}
