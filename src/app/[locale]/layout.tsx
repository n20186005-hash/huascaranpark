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

const baseUrl = `https://${process.env.CURRENT_SITE_DOMAIN || "huascaranpark.com"}`;

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;
  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: locale === "es" ? "Parque Nacional Huascarán — Ancash, Perú"
        : locale === "zh" ? "瓦斯卡兰国家公园 — 秘鲁安卡什大区"
        : locale === "qu" ? "Huascarán Nasyunal Pak — Ancash, Piruw"
        : "Huascarán National Park — Ancash, Peru",
      template: locale === "es" ? "%s | Parque Nacional Huascarán"
        : locale === "zh" ? "%s | 瓦斯卡兰国家公园"
        : locale === "qu" ? "%s | Huascarán Nasyunal Pak"
        : "%s | Huascarán National Park",
    },
    description:
      locale === 'es' ? "Guía de viaje al Parque Nacional Huascarán en Ancash, Perú. Descubre este hermoso parque nacional y Patrimonio Mundial de la UNESCO en la Cordillera Blanca." :
      locale === 'zh' ? "瓦斯卡兰国家公园旅行指南——探索秘鲁安卡什大区联合国教科文组织世界遗产布兰卡山脉。" :
      locale === 'qu' ? "Huascarán Nasyunal Pak rikuy, Ancash, Piruw. Pachamama wiñay kawsay." :
      "A travel guide to Huascarán National Park in Ancash, Peru. Discover this UNESCO World Heritage Site in the Cordillera Blanca mountain range.",
    keywords: [
      "Huascarán National Park",
      "Parque Nacional Huascarán",
      "Ancash tourism",
      "Peru national park",
      "Cordillera Blanca",
      "UNESCO World Heritage Site Peru",
      "Huascarán summit",
      "trekking Peru",
      "mountaineering Peru",
      "Ancash attractions",
      "Peru trekking",
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
      locale: locale === "es" ? "es_PE" : locale === "zh" ? "zh_CN" : locale === "qu" ? "qu_PE" : "en_US",
      alternateLocale: (locale === "es" ? ["en_US", "zh_CN", "qu_PE"] : locale === "en" ? ["es_PE", "zh_CN", "qu_PE"] : locale === "zh" ? ["es_PE", "en_US", "qu_PE"] : ["es_PE", "en_US", "zh_CN"]),
      url: `${baseUrl}/${locale}`,
      title: locale === "es" ? "Parque Nacional Huascarán — Ancash, Perú"
        : locale === "zh" ? "瓦斯卡兰国家公园 — 秘鲁安卡什大区"
        : locale === "qu" ? "Huascarán Nasyunal Pak — Ancash, Piruw"
        : "Huascarán National Park — Ancash, Peru",
      description: locale === 'es' ? "Guía de viaje al Parque Nacional Huascarán en Ancash, Perú. Descubre este hermoso parque nacional y Patrimonio Mundial de la UNESCO en la Cordillera Blanca." :
        (locale === 'zh' ? "瓦斯卡兰国家公园旅行指南——探索秘鲁安卡什大区联合国教科文组织世界遗产布兰卡山脉。" :
        (locale === 'qu' ? "Huascarán Nasyunal Pak rikuy, Ancash, Piruw. Pachamama wiñay kawsay." :
        "A travel guide to Huascarán National Park in Ancash, Peru. Discover this UNESCO World Heritage Site in the Cordillera Blanca mountain range.")),
      siteName: locale === "es" ? "Parque Nacional Huascarán Guía de Viaje"
        : locale === "zh" ? "瓦斯卡兰国家公园旅行指南"
        : locale === "qu" ? "Huascarán Nasyunal Pak rikuy"
        : "Huascarán National Park Travel Guide",
      images: [
        {
          url: "/gallery/huascaran-national-park (1).jpg",
          width: 1200,
          height: 630,
          alt: locale === "es" ? "Parque Nacional Huascarán - Ancash, Perú"
            : locale === "zh" ? "瓦斯卡兰国家公园 - 秘鲁安卡什大区"
            : locale === "qu" ? "Huascarán Nasyunal Pak - Ancash, Piruw"
            : "Huascarán National Park - Ancash, Peru",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: locale === "es" ? "Parque Nacional Huascarán — Ancash, Perú"
        : locale === "zh" ? "瓦斯卡兰国家公园 — 秘鲁安卡什大区"
        : locale === "qu" ? "Huascarán Nasyunal Pak — Ancash, Piruw"
        : "Huascarán National Park — Ancash, Peru",
      description:
        locale === 'es' ? "Guía de viaje al Parque Nacional Huascarán en Ancash, Perú." :
        locale === 'zh' ? "瓦斯卡兰国家公园旅行指南——探索秘鲁安卡什大区布兰卡山脉。" :
        locale === 'qu' ? "Huascarán Nasyunal Pak rikuy, Ancash, Piruw." :
        "A travel guide to Huascarán National Park in Ancash, Peru.",
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
        "es": "/es",
        "en": "/en",
        "zh": "/zh",
        "qu": "/qu",
        "x-default": "/en",
      },
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }, { locale: "zh" }, { locale: "qu" }];
}

import { generateSchema } from "../schema";

function SchemaScript({ locale }: { locale: string }) {
  const schema = generateSchema(locale);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

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
      <SchemaScript locale={locale} />
      {children}
    </>
  );
}
