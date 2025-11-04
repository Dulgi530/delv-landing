import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/language-context";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DELV - Web3 Consulting & Global Expansion",
  description: "델브는 웹3 컨설팅 및 글로벌 진출을 돕는 전문가 그룹입니다.",
  icons: {
    icon: [
      { url: "/delv-logo.png", sizes: "any" },
      { url: "/delv-logo.png", sizes: "16x16", type: "image/png" },
      { url: "/delv-logo.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/delv-logo.png", sizes: "180x180", type: "image/png" },
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          {children}
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}
