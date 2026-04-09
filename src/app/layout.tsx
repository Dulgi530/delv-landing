import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

export const metadata: Metadata = {
  title: "DELV - Web3 Consulting & Global Expansion",
  description: "델브는 웹3 컨설팅 및 글로벌 진출을 돕는 전문가 그룹입니다.",
  icons: {
    icon: [{ url: "/symbol.svg", sizes: "any", type: "image/svg+xml" }],
    apple: [
      { url: "/symbol.svg", sizes: "180x180", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    title: "DELV - Web3 Consulting & Global Expansion",
    description: "델브는 웹3 컨설팅 및 글로벌 진출을 돕는 전문가 그룹입니다.",
    url: "https://delv.team",
    siteName: "DELV",
    images: [
      {
        url: "/DELV 1.png",
        width: 1200,
        height: 630,
        alt: "DELV Logo - Web3 Consulting",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DELV - Web3 Consulting & Global Expansion",
    description: "델브는 웹3 컨설팅 및 글로벌 진출을 돕는 전문가 그룹입니다.",
    images: ["/DELV 1.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
