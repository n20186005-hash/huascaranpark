"use client";

import { useEffect } from "react";

/**
 * 根 layout 的 <html lang> 是静态的，按当前路由把 lang 同步到实际语言，
 * 保证 /es /en /zh /qu 的文档语言与内容一致。
 */
export default function HtmlLangSync({ locale }: { locale: string }) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
