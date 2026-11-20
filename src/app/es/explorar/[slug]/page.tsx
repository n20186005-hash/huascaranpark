import { notFound } from "next/navigation";
import NearbyAttraction, { nearbyMetadata } from "@/components/NearbyAttraction";
import { nearby, type NearbySlug } from "@/i18n/nearby";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(nearby).map((slug) => ({ slug }));
}

type Props = { params: Promise<{ slug: NearbySlug }> };

export async function generateMetadata({ params }: Props) {
  return nearbyMetadata((await params).slug, "es");
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  if (!Object.hasOwn(nearby, slug)) notFound();
  return <NearbyAttraction slug={slug} locale="es" />;
}
