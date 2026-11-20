import type { Metadata } from "next";
import type { Locale } from "./translations";
import { interfaceCopy } from "./interface";

export const legalSlugs = ["privacy", "terms", "cookies"] as const;
export type LegalSlug = typeof legalSlugs[number];
export const legalLocales = ["en", "es", "zh", "qu"] as const;

export function legalPath(locale: Locale, slug: LegalSlug) {
  return locale === "en" ? `/${slug}` : `/${locale}/${slug}`;
}

export function legalMetadata(locale: Locale, slug: LegalSlug): Metadata {
  const copy = interfaceCopy[locale];
  return {
    title: { absolute: `${copy[slug]} | ${copy.park}` },
    description: `${copy[slug]} · ${copy.park}`,
    alternates: {
      canonical: legalPath(locale, slug),
      languages: { ...Object.fromEntries(legalLocales.map((lang) => [lang, legalPath(lang, slug)])), "x-default": legalPath("en", slug) },
    },
  };
}
