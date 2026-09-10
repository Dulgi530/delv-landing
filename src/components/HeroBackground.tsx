/**
 * 히어로 배경.
 *
 * GIF 대신 CSS 애니메이션을 쓴다. 같은 인상을 내면서 파일이 몇 KB에 그치고,
 * 어떤 해상도에서도 선명하며, prefers-reduced-motion 을 존중할 수 있다.
 * (GIF 는 보통 수 MB에 256색 제한이라 LCP 를 크게 떨어뜨린다.)
 */
export default function HeroBackground() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* 바탕 — 완전한 검정이 아니라 색이 얹힐 여지를 남긴다 */}
      <div className="absolute inset-0 bg-[#141A26]" />

      {/* 오로라 — 느리게 표류하는 색 덩어리 */}
      <div
        className="hero-aurora hero-aurora-a absolute -top-[25%] -left-[5%] w-[60vw] h-[60vw] rounded-full blur-[90px]"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(79,209,199,0.75), rgba(79,209,199,0) 68%)",
        }}
      />
      <div
        className="hero-aurora hero-aurora-b absolute top-[0%] -right-[10%] w-[55vw] h-[55vw] rounded-full blur-[100px]"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(99,102,241,0.7), rgba(99,102,241,0) 68%)",
        }}
      />
      <div
        className="hero-aurora hero-aurora-c absolute -bottom-[35%] left-[22%] w-[55vw] h-[55vw] rounded-full blur-[100px]"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(168,85,247,0.55), rgba(168,85,247,0) 68%)",
        }}
      />

      {/* 격자 — 아주 옅게, 천천히 흐른다 */}
      <div
        className="hero-grid absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.4), rgba(255,255,255,0.4) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, rgba(255,255,255,0.4), rgba(255,255,255,0.4) 1px, transparent 1px, transparent 40px)",
        }}
      />

      {/* 중앙 텍스트 가독성을 위한 옅은 비네트 */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 45%, rgba(10,13,20,0.45) 0%, rgba(10,13,20,0.15) 45%, rgba(10,13,20,0.45) 100%)",
        }}
      />

      {/* 하단 페이드로 다음 섹션과 이어지게 */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-[#0D1117]" />
    </div>
  );
}
