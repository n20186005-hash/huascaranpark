import { legalLocales, legalPath, legalSlugs } from "@/i18n/legal-metadata";
import { regionalAttractions } from "@/i18n/regional-attractions";
import { attractionLocales, nearby, nearbyAlternates, nearbyPath } from "@/i18n/nearby";
import type { MetadataRoute } from "next";

const SITE_URL = `https://${process.env.CURRENT_SITE_DOMAIN || "www.huascaranpark.com"}`;

const GUIDE_ROUTES = { en: "/huaraz-tours", es: "/es/rutas-desde-huaraz" };

function absoluteAlternates(routes: Record<string, string>) {
  return Object.fromEntries(Object.entries(routes).map(([lang, path]) => [lang, `${SITE_URL}${path}`]));
}

const LANGS = {
  en: "/",
  es: "/es",
  zh: "/zh",
  qu: "/qu",
  "x-default": "/",
};

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0, alternates: { languages: absoluteAlternates(LANGS) } },
    { url: `${SITE_URL}/es`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9, alternates: { languages: absoluteAlternates(LANGS) } },
    { url: `${SITE_URL}/zh`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8, alternates: { languages: absoluteAlternates(LANGS) } },
    { url: `${SITE_URL}/qu`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.6, alternates: { languages: absoluteAlternates(LANGS) } },
    { url: `${SITE_URL}/entrance-fees`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9, alternates: { languages: absoluteAlternates({ en: "/entrance-fees", es: "/es/entradas-precios", "x-default": "/entrance-fees" }) } },
    { url: `${SITE_URL}/es/entradas-precios`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9, alternates: { languages: absoluteAlternates({ en: "/entrance-fees", es: "/es/entradas-precios", "x-default": "/entrance-fees" }) } },
    ...Object.values(GUIDE_ROUTES).map((path) => ({
      url: `${SITE_URL}${path}`,
      alternates: { languages: absoluteAlternates({ ...GUIDE_ROUTES, "x-default": GUIDE_ROUTES.en }) },
    })),
    ...[...Object.keys(nearby), ...Object.keys(regionalAttractions)].flatMap((slug) => {
      const alternates = { languages: absoluteAlternates(nearbyAlternates(slug)) };
      return attractionLocales.map((locale) => ({ url: `${SITE_URL}${nearbyPath(slug, locale)}`, alternates }));
    }),
    ...legalSlugs.flatMap((slug) => {
      const paths = Object.fromEntries(legalLocales.map((locale) => [locale, legalPath(locale, slug)]));
      const alternates = { languages: absoluteAlternates({ ...paths, "x-default": legalPath("en", slug) }) };
      return Object.values(paths).map((path) => ({ url: `${SITE_URL}${path}`, alternates }));
    }),
  ];
  return entries;
}
