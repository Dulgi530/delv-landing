import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 개발 서버용 설정
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
