import { legalMetadata } from "@/i18n/legal-metadata";
import TermsOfService from "@/components/TermsOfService";

export const metadata = legalMetadata("en", "terms");

export default function Page() {
  return <TermsOfService locale="en" />;
}
