import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/header";
import Background from "@/components/background";
import ScrollProgressBar from "@/components/scrollprogressbar";

const baseUrl = 'https://gustavocortez.dev';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Gustavo Cortez - Desenvolvedor Web & Estudante de Medicina",
    template: "%s | Gustavo Cortez Dev"
  },
  description: "🚀 Transformo ideias em sites que vendem! Desenvolvedor web especializado em sites institucionais, landing pages e SEO. Estudante de Medicina na UNOESTE com experiência em Sistemas de Informação pela UFSC. Uno tecnologia e saúde para criar soluções digitais modernas e eficientes.",
  keywords: [
    "desenvolvedor web",
    "sites profissionais", 
    "landing pages",
    "SEO otimização",
    "medicina tecnologia",
    "freelancer web",
    "Gustavo Cortez",
    "React Next.js",
    "sites que vendem",
    "desenvolvedor freelancer",
    "criação de sites",
    "design responsivo",
    "UNOESTE UFSC",
    "desenvolvedor Brasil"
  ],
  authors: [
    { 
      name: "Gustavo Cortez de Brito",
      url: baseUrl
    }
  ],
  creator: "Gustavo Cortez de Brito",
  publisher: "Gustavo Cortez de Brito",
  category: "Technology",
  classification: "Desenvolvimento Web",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: baseUrl,
    siteName: "Gustavo Cortez Dev",
    title: "Gustavo Cortez - Desenvolvedor Web & Estudante de Medicina",
    description: "🚀 Transformo ideias em sites que vendem! Desenvolvedor web especializado em criar soluções digitais modernas e eficientes.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Gustavo Cortez - Desenvolvedor Web & Estudante de Medicina",
        type: "image/png",
      },
      {
        url: "/GustavoCortezDev.jpg",
        width: 400,
        height: 400,
        alt: "Gustavo Cortez - Foto Profissional",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@gustavocortezdev",
    creator: "@gustavocortezdev",
    title: "Gustavo Cortez - Desenvolvedor Web & Estudante de Medicina",
    description: "🚀 Transformo ideias em sites que vendem! Desenvolvedor web especializado em criar soluções digitais modernas e eficientes.",
    images: {
      url: "/opengraph-image.png",
      alt: "Gustavo Cortez - Desenvolvedor Web",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code", // Você precisa adicionar seu código
    // yandex: "yandex-verification-code",
    // yahoo: "yahoo-site-verification-code",
  },
  alternates: {
    canonical: baseUrl,
    languages: {
      'pt-BR': baseUrl,
      'pt': baseUrl,
    },
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'format-detection': 'telephone=no',
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:image:type': 'image/png',
    'og:site_name': 'Gustavo Cortez Dev',
    'og:locale': 'pt_BR',
    'twitter:site': '@gustavocortezdev',
    'twitter:creator': '@gustavocortezdev',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="pt-BR">
      <body className="relative z-0">
        <Background/>
        <Header />
        <ScrollProgressBar />
        {children}
      </body>
    </html>
  );
}
