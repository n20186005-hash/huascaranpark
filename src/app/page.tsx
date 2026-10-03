import type { Metadata } from "next";
import { HomeContent } from "@/app/[locale]/page";
import { LangProvider } from "@/components/LangProvider";
import SchemaScript from "@/components/SchemaScript";
import HtmlLangSync from "@/components/HtmlLangSync";

const baseUrl = `https://${process.env.CURRENT_SITE_DOMAIN || "www.huascaranpark.com"}`;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Huascarán National Park, Peru – Entrance Fees & Travel Guide",
    template: "%s | Huascarán National Park",
  },
  description:
    "Plan your visit to Huascarán National Park in Peru. Check entrance fees, opening hours, Laguna 69, the Santa Cruz Trek, maps and travel tips from Huaraz.",
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
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${baseUrl}/`,
    title: "Huascarán National Park, Peru – Entrance Fees & Travel Guide",
    description:
      "Plan your visit to Huascarán National Park in Peru. Entrance fees, opening hours, Laguna 69, Santa Cruz Trek, maps and travel tips from Huaraz.",
    siteName: "Huascarán National Park Travel Guide",
    images: [
      {
        url: "/gallery/huascaran-national-park (1).jpg",
        width: 1200,
        height: 630,
        alt: "Huascarán National Park - Ancash, Peru",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Huascarán National Park, Peru – Entrance Fees & Travel Guide",
    description:
      "Plan your visit to Huascarán National Park in Peru. Entrance fees, opening hours, Laguna 69, Santa Cruz Trek and travel tips from Huaraz.",
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
    canonical: "/",
    languages: {
      "en": "/",
      "es": "/es",
      "zh": "/zh",
      "qu": "/qu",
      "x-default": "/",
    },
  },
};

export default function Page() {
  return (
    <>
      <HtmlLangSync locale="en" />
      <SchemaScript locale="en" />
      <LangProvider initialLocale="en">
        <HomeContent />
      </LangProvider>
    </>
  );
}
