import type { Metadata } from "next";
import EntranceFeesContent, { entranceFaqEs } from "@/components/EntranceFeesContent";
import { LangProvider } from "@/components/LangProvider";
import HtmlLangSync from "@/components/HtmlLangSync";

const baseUrl = `https://${process.env.CURRENT_SITE_DOMAIN || "www.huascaranpark.com"}`;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Entradas del Parque Nacional Huascarán y Visita (2026)",
  description:
    "Tarifas de entrada, horarios, dónde comprar boletos y normas de visita del Parque Nacional Huascarán. Verificado con SERNANP, octubre de 2026.",
  alternates: {
    canonical: "/es/entradas-precios/",
    languages: {
      es: "/es/entradas-precios/",
      en: "/entrance-fees/",
      "x-default": "/entrance-fees/",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: `${baseUrl}/es/entradas-precios/`,
    title: "Entradas del Parque Nacional Huascarán y Visita (2026)",
    description:
      "Tarifas de entrada, horarios, dónde comprar boletos y normas de visita del Parque Nacional Huascarán.",
    siteName: "Parque Nacional Huascarán Guía de Viaje",
  },
  twitter: {
    card: "summary_large_image",
    title: "Entradas del Parque Nacional Huascarán y Visita (2026)",
    description:
      "Tarifas, horarios y normas de visita del Parque Nacional Huascarán, verificado con SERNANP.",
  },
  robots: { index: true, follow: true },
};

function FaqJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: entranceFaqEs.map((f) => ({
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
      <HtmlLangSync locale="es" />
      <FaqJsonLd />
      <LangProvider initialLocale="es">
        <EntranceFeesContent locale="es" />
      </LangProvider>
    </>
  );
}
