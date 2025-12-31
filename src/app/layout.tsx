import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "안녕하세요. 석지원입니다.",
  description: "소중한 분들께 신년 인사를 전합니다",
  openGraph: {
    title: "2026년 새해 인사",
    description: "병오년 새해, 소중한 마음을 담아 전합니다.",
    url: "https://new-year-letter-2026.vercel.app", // 추후 배포 후 실제 URL로 변경 권장
    siteName: "2026 새해 인사",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/og-image.png", // public 폴더에 og-image.png 파일을 넣어주세요.
        width: 1200,
        height: 630,
        alt: "2026 새해 인사",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "2026년 새해 인사",
    description: "병오년 새해, 소중한 마음을 담아 전합니다.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}
