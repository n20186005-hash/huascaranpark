import { legalMetadata } from "@/i18n/legal-metadata";
import CookiesClient from "./CookiesClient";

export const metadata = legalMetadata("en", "cookies");

export default function CookiesPage() {
  return <CookiesClient locale="en" />;
}
