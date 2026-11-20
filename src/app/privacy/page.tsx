import { legalMetadata } from "@/i18n/legal-metadata";
import PrivacyPolicy from "@/components/PrivacyPolicy";

export const metadata = legalMetadata("en", "privacy");

export default function Page() {
  return <PrivacyPolicy locale="en" />;
}
