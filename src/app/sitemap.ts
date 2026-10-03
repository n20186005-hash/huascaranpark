import type { MetadataRoute } from "next";

const SITE_URL = `https://${process.env.CURRENT_SITE_DOMAIN || "www.huascaranpark.com"}`;

const LANGS = {
  en: "/",
  es: "/es",
  zh: "/zh",
  qu: "/qu",
  "x-default": "/",
};

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0, alternates: { languages: LANGS } },
    { url: `${SITE_URL}/es`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9, alternates: { languages: LANGS } },
    { url: `${SITE_URL}/zh`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8, alternates: { languages: LANGS } },
    { url: `${SITE_URL}/qu`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.6, alternates: { languages: LANGS } },
    { url: `${SITE_URL}/entrance-fees/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9, alternates: { languages: { en: "/entrance-fees/", es: "/es/entradas-precios/", "x-default": "/entrance-fees/" } } },
    { url: `${SITE_URL}/es/entradas-precios/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9, alternates: { languages: { es: "/es/entradas-precios/", en: "/entrance-fees/", "x-default": "/entrance-fees/" } } },
    { url: `${SITE_URL}/about`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3, alternates: { languages: LANGS } },
    { url: `${SITE_URL}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3, alternates: { languages: LANGS } },
    { url: `${SITE_URL}/privacy-policy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2, alternates: { languages: LANGS } },
    { url: `${SITE_URL}/terms-of-service`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2, alternates: { languages: LANGS } },
    { url: `${SITE_URL}/cookie-settings`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2, alternates: { languages: LANGS } },
  ];
  return entries;
}
