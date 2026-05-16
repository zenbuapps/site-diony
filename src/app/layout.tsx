import type { Metadata } from "next";
import {
  Noto_Serif_TC,
  Noto_Sans_TC,
  Cormorant_Garamond,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimationDriver from "@/components/AnimationDriver";

const notoSerif = Noto_Serif_TC({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-noto-serif",
  display: "swap",
});

const notoSans = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-noto-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "麥法迪 Dionysus｜聲音療癒 · 聲學煉金術",
  description:
    "麥法迪國際有限公司，亞洲頂級風鈴與聲音療癒器具製造商，提供 OEM / ODM 服務。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="zh-TW"
      className={`${notoSerif.variable} ${notoSans.variable} ${cormorant.variable} ${jetbrains.variable}`}
    >
      <body>
        <AnimationDriver />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
