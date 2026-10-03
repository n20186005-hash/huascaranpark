import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "../globals.css";

const cormorant = Cormorant_Garamond({
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const baseUrl = `https://${process.env.CURRENT_SITE_DOMAIN || "www.huascaranpark.com"}`;

const TITLES: Record<string, string> = {
  es: "Parque Nacional Huascarán: Entradas, Rutas y Guía 2026",
  zh: "瓦斯卡兰国家公园：门票、路线与旅行指南 2026",
  qu: "Huascarán Nasyunal Pak: Puriy Guía 2026",
};

const DESCRIPTIONS: Record<string, string> = {
  es: "Planifica tu visita al Parque Nacional Huascarán en Perú. Entradas, horarios, Laguna 69, Santa Cruz Trek, mapas y consejos desde Huaraz.",
  zh: "规划你的秘鲁瓦斯卡兰国家公园之旅。门票、开放时间、Laguna 69、Santa Cruz 徒步、地图与来自 Huaraz 的实用建议。",
  qu: "Huascarán Nasyunal Pak Perú puriy. Qullqi, punchaw, Laguna 69, Santa Cruz, mapa, yachay.",
};

const OG_LOCALE: Record<string, string> = {
  es: "es_PE",
  zh: "zh_CN",
  qu: "qu_PE",
};

const ALT_LOCALE: Record<string, string[]> = {
  es: ["en_US", "zh_CN", "qu_PE"],
  zh: ["es_PE", "en_US", "qu_PE"],
  qu: ["es_PE", "en_US", "zh_CN"],
};

const SITE_NAME: Record<string, string> = {
  es: "Parque Nacional Huascarán Guía de Viaje",
  zh: "瓦斯卡兰国家公园旅行指南",
  qu: "Huascarán Nasyunal Pak rikuy",
};

const OG_IMAGE_ALT: Record<string, string> = {
  es: "Parque Nacional Huascarán - Ancash, Perú",
  zh: "瓦斯卡兰国家公园 - 秘鲁安卡什大区",
  qu: "Huascarán Nasyunal Pak - Ancash, Piruw",
};

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;
  const title = TITLES[locale] || TITLES.es;
  const description = DESCRIPTIONS[locale] || DESCRIPTIONS.es;
  const ogLocale = OG_LOCALE[locale] || "es_PE";
  const altLocale = ALT_LOCALE[locale] || ["en_US", "zh_CN", "qu_PE"];
  const siteName = SITE_NAME[locale] || SITE_NAME.es;
  const ogAlt = OG_IMAGE_ALT[locale] || OG_IMAGE_ALT.es;
  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: title,
      template: locale === "es" ? "%s | Parque Nacional Huascarán"
        : locale === "zh" ? "%s | 瓦斯卡兰国家公园"
        : "%s | Huascarán Nasyunal Pak",
    },
    description,
    keywords: [
      "Huascarán National Park",
      "Parque Nacional Huascarán",
      "Ancash tourism",
      "Peru national park",
      "Cordillera Blanca",
      "UNESCO World Heritage Site Peru",
      "Huascarán entrance fee",
      "Laguna 69",
      "Santa Cruz Trek",
      "Huaraz",
      "trekking Peru",
    ],
    authors: [{ name: "Huascarán National Park Travel Guide" }],
    creator: "Huascarán National Park Travel Guide",
    publisher: "Huascarán National Park Travel Guide",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: "website",
      locale: ogLocale,
      alternateLocale: altLocale,
      url: `${baseUrl}/${locale}`,
      title,
      description,
      siteName,
      images: [
        {
          url: "/gallery/huascaran-national-park (1).jpg",
          width: 1200,
          height: 630,
          alt: ogAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/gallery/huascaran-national-park (1).jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        "en": "/",
        "es": "/es",
        "zh": "/zh",
        "qu": "/qu",
        "x-default": "/",
      },
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export function generateStaticParams() {
  return [{ locale: "es" }, { locale: "zh" }, { locale: "qu" }];
}

import SchemaScript from "@/components/SchemaScript";
import HtmlLangSync from "@/components/HtmlLangSync";

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  return (
    <>
      <HtmlLangSync locale={locale} />
      <SchemaScript locale={locale} />
      {children}
    </>
  );
}
