import LocalizedAttraction, { localizedAttractionMetadata } from "@/components/LocalizedAttraction";
import { attractionSlugs, requireAttractionSlug } from "@/i18n/attractions-zh-qu";

type Props = { params: Promise<{ slug: string }> };

export const generateStaticParams = attractionSlugs;

export async function generateMetadata({ params }: Props) {
  return localizedAttractionMetadata(requireAttractionSlug((await params).slug), "qu");
}

export default async function Page({ params }: Props) {
  return <LocalizedAttraction locale="qu" slug={requireAttractionSlug((await params).slug)} />;
}
