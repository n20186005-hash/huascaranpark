import RegionalAttraction, { regionalMetadata, type RegionalSlug } from "@/components/RegionalAttraction";
import { regionalAttractions } from "@/i18n/regional-attractions";
import { notFound } from "next/navigation";
import NearbyAttraction, { nearbyMetadata } from "@/components/NearbyAttraction";
import { nearby, type NearbySlug } from "@/i18n/nearby";

export function generateStaticParams() {
  return [...Object.keys(nearby), ...Object.keys(regionalAttractions)].map((slug) => ({ slug }));
}

type Props = { params: Promise<{ slug: NearbySlug | RegionalSlug }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  if (Object.hasOwn(regionalAttractions, slug)) return regionalMetadata(slug as RegionalSlug, "en");
  if (Object.hasOwn(nearby, slug)) return nearbyMetadata(slug as NearbySlug, "en");
  notFound();
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  if (Object.hasOwn(regionalAttractions, slug)) return <RegionalAttraction slug={slug as RegionalSlug} locale="en" />;
  if (!Object.hasOwn(nearby, slug)) notFound();
  return <NearbyAttraction slug={slug as NearbySlug} locale="en" />;
}
