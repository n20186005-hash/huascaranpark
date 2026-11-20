"use client";

import { interfaceCopy, localeNames } from "@/i18n/interface";
import { useLang } from "./LangProvider";
import type { Locale } from "@/i18n/translations";

const LANG_LABELS: Record<Locale, string> = {
  zh: "中文",
  en: "EN",
  es: "ES",
  qu: "QU",
};

export function LanguageSwitcher() {
  const { locale } = useLang();
  return (
    <div className="lang-switcher" role="group" aria-label={interfaceCopy[locale].switch}>
      {(["zh", "en", "es", "qu"] as Locale[]).map((l) => (
        <button
          key={l}
          className={`lang-btn ${locale === l ? "active" : ""}`}
          onClick={() => {
            if (l !== locale) {
              const path = l === "en" ? "/" : `/${l}`;
              window.location.href = `${path}${window.location.hash}`;
            }
          }}
          lang={l}
          aria-label={localeNames[l]}
          aria-pressed={locale === l}
        >
          {LANG_LABELS[l]}
        </button>
      ))}
    </div>
  );
}
