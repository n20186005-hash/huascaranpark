import type { Locale } from "./translations";

export const interfaceCopy = {
  en: { park: "Huascarán National Park", theme: "Toggle color theme", map: "Map of Huascarán National Park", switch: "Page language", close: "Close photo", previous: "Previous photo", next: "Next photo", privacy: "Privacy Policy", terms: "Terms of Service", cookies: "Cookie Settings", home: "Back to home" },
  es: { park: "Parque Nacional Huascarán", theme: "Cambiar tema de color", map: "Mapa del Parque Nacional Huascarán", switch: "Idioma de la página", close: "Cerrar foto", previous: "Foto anterior", next: "Foto siguiente", privacy: "Política de privacidad", terms: "Términos del servicio", cookies: "Configuración de cookies", home: "Volver al inicio" },
  zh: { park: "瓦斯卡兰国家公园", theme: "切换配色主题", map: "瓦斯卡兰国家公园地图", switch: "页面语言", close: "关闭照片", previous: "上一张照片", next: "下一张照片", privacy: "隐私政策", terms: "服务条款", cookies: "Cookie 设置", home: "返回首页" },
  qu: { park: "Huascarán Nasyunal Pak", theme: "Llimp’ita tikray", map: "Huascarán Nasyunal Pakpa mapan", switch: "Raphipa simin", close: "Rikch’ayta wichq’ay", previous: "Ñawpaq rikch’ay", next: "Qatiq rikch’ay", privacy: "Willakuy waqaychay", terms: "Llamk’achiy kamachiykuna", cookies: "Cookie akllanakuna", home: "Qallariyman kutiy" },
} satisfies Record<Locale, Record<string, string>>;

export const localeNames: Record<Locale, string> = { en: "English", es: "Español", zh: "简体中文", qu: "Runasimi" };

export function homePath(locale: Locale) {
  return locale === "en" ? "/" : `/${locale}`;
}
