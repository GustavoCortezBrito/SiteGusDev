import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/header";
import Background from "@/components/background";
import ScrollProgressBar from "@/components/scrollprogressbar";
import StructuredData from "@/components/structured-data";

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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="pt-BR">
      <head>
        <StructuredData />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://wa.me" />
        <link rel="dns-prefetch" href="https://api.whatsapp.com" />
        
        {/* WhatsApp specific meta tags */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="Gustavo Cortez - Desenvolvedor Web & Estudante de Medicina" />
        
        {/* Additional Open Graph tags */}
        <meta property="og:site_name" content="Gustavo Cortez Dev" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:type" content="website" />
        
        {/* Twitter specific */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@gustavocortezdev" />
        <meta name="twitter:creator" content="@gustavocortezdev" />
        
        {/* Mobile optimization */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Favicon and icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      <body className="relative z-0">
        <Background/>
        <Header></Header>
        <ScrollProgressBar />
        {children}
      </body>
    </html>
  );
}
