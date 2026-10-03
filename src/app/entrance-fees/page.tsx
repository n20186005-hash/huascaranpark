import type { Metadata } from "next";
import EntranceFeesContent, { entranceFaqEn } from "@/components/EntranceFeesContent";
import { LangProvider } from "@/components/LangProvider";
import HtmlLangSync from "@/components/HtmlLangSync";

const baseUrl = `https://${process.env.CURRENT_SITE_DOMAIN || "www.huascaranpark.com"}`;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Huascarán National Park Entrance Fees & Visiting Info (2026)",
  description:
    "Huascarán National Park entrance fees, opening hours, where to buy tickets and visiting rules. Verified against SERNANP, October 2026.",
  alternates: {
    canonical: "/entrance-fees/",
    languages: {
      en: "/entrance-fees/",
      es: "/es/entradas-precios/",
      "x-default": "/entrance-fees/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${baseUrl}/entrance-fees/`,
    title: "Huascarán National Park Entrance Fees & Visiting Info (2026)",
    description:
      "Huascarán National Park entrance fees, opening hours, where to buy tickets and visiting rules.",
    siteName: "Huascarán National Park Travel Guide",
  },
  twitter: {
    card: "summary_large_image",
    title: "Huascarán National Park Entrance Fees & Visiting Info (2026)",
    description:
      "Entrance fees, opening hours and visiting rules for Huascarán National Park, verified against SERNANP.",
  },
  robots: { index: true, follow: true },
};

function FaqJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: entranceFaqEn.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function Page() {
  return (
    <>
      <HtmlLangSync locale="en" />
      <FaqJsonLd />
      <LangProvider initialLocale="en">
        <EntranceFeesContent locale="en" />
      </LangProvider>
    </>
  );
}
