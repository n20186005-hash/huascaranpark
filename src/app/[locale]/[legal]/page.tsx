import { notFound } from "next/navigation";
import CookiesClient from "@/app/cookies/CookiesClient";
import PrivacyPolicy from "@/components/PrivacyPolicy";
import TermsOfService from "@/components/TermsOfService";
import { legalLocales, legalMetadata, legalSlugs, type LegalSlug } from "@/i18n/legal-metadata";
import type { Locale } from "@/i18n/translations";

const locales = legalLocales.filter((locale) => locale !== "en");

export function generateStaticParams() {
  return legalSlugs.map((legal) => ({ legal }));
}

type Props = { params: Promise<{ locale: Exclude<Locale, "en">; legal: LegalSlug }> };

export async function generateMetadata({ params }: Props) {
  const { locale, legal } = await params;
  if (!locales.includes(locale) || !legalSlugs.includes(legal)) notFound();
  return legalMetadata(locale, legal);
}

export default async function Page({ params }: Props) {
  const { locale, legal } = await params;
  if (!locales.includes(locale) || !legalSlugs.includes(legal)) notFound();
  if (legal === "privacy") return <PrivacyPolicy locale={locale} />;
  if (legal === "terms") return <TermsOfService locale={locale} />;
  return <CookiesClient locale={locale} />;
}
