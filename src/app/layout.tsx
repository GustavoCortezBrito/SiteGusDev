import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Background from "@/components/background";
import ScrollProgressBar from "@/components/scrollprogressbar";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Gustavo Cortez - Desenvolvedor Web & Estudante de Medicina",
  description: "Gustavo Cortez de Brito - Estudante de Medicina na UNOESTE e Sistemas de Informação na UFSC. Desenvolvedor web especializado em sites, landing pages e SEO. Uno tecnologia e saúde para criar soluções digitais modernas e eficientes."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="pt-br">
      <body className="relative z-0">
        <Background/>
        <Header></Header>
        <ScrollProgressBar />
        {children}
      </body>
    </html>
  );
}
