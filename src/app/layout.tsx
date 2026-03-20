import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-noto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ブティック ひまわり｜社交ダンス衣装専門店",
  description:
    "石川県河北郡内灘町の社交ダンス衣装専門店。初心者から競技ダンサーまで、お手頃価格のダンス衣装から華やかな高級ドレスまで取り揃えています。",
  keywords: "社交ダンス,衣装,ドレス,ダンス衣装,石川県,内灘町,ブティックひまわり",
  openGraph: {
    title: "ブティック ひまわり｜社交ダンス衣装専門店",
    description:
      "初心者から競技ダンサーまで楽しく選べる衣装を取り揃えています。",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${cinzel.variable} ${cormorant.variable} ${notoSerifJP.variable} font-noto antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
