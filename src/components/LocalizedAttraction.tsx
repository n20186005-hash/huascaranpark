import type { Metadata } from "next";
import { localizedAttractions } from "@/i18n/attractions-zh-qu";
import { nearby, nearbyAlternates, nearbyPath, parkInfo } from "@/i18n/nearby";
import { regionalAttractions, type RegionalAttraction } from "@/i18n/regional-attractions";
import { localeNames } from "@/i18n/interface";

export type LocalizedSlug = keyof typeof localizedAttractions;
export type LocalizedLocale = "zh" | "qu";

const labels = {
  zh: {
    index: "更多周边景点", map: "在 Google 地图查看", introduction: "探索景点", tips: "游览建议", features: "景点特色", about: "管理和访客咨询", basics: "基本信息", name: "名称", locality: "所在地", type: "类型", elevation: "海拔", original: "当地名称", hours: "开放时间", fees: "门票价格", transport: "交通方式", discover: "观察重点", itinerary: "游览路线", notes: "游览须知", photo: "拍摄位置", stay: "住宿建议", reviews: "游客评价", address: "地址和地图", source: "资料来源", credit: "照片来源", resized: "图片已缩放",
    check: "出发前确认开放、入场和返程安排。山区路线如有临时限制，按现场指引调整。",
    hoursUnknown: "请查看资料来源或联系景点，确认当日开放与最后入场时间。",
    feesUnknown: "请通过景点公告或现场咨询确认收费。交通和导览可能另行收费。",
    parkHours: "SERNANP 公布的国家公园一般访客时段为周一至周五 08:30–15:00。具体线路和入场安排请向授权运营方确认。",
    parkFees: "如适用国家公园普通单日票，SERNANP 公布一般票价为 S/30，秘鲁成人 S/12，符合条件的当地成人 S/5。请先核对线路和适用票种。",
    specialFees: "69号湖有特殊票价：秘鲁成人 S/15，符合条件的当地成人 S/8。其他身份、未成年人票价及预约规则请向授权运营方核对。",
    museumHours: "周二至周日 09:00–16:00。节假日以馆方公告为准。",
    museumFees: "博物馆公布成人票 S/10、高等教育学生票 S/5，中小学生免费。其他减免资格请查馆方公告。",
    museumAddress: "查文德万塔尔，Av. 17 de Enero, Prolongación Norte s/n",
    park: "瓦斯卡兰国家公园由秘鲁国家自然保护区管理局（SERNANP）管理。入园、道路及步道使用规则请参考公园公告。",
    culture: "请向秘鲁文化部安卡什地区文化主管机构核对参观和保护要求。",
    municipal: "请向景点所在市镇核对公共区域开放和活动安排。",
    parish: "教堂内部开放、宗教活动和拍摄条件请向当地堂区确认。",
    road: "道路开放和交通管制以道路管理部门及现场标示为准。",
    independent: "请向当地市镇、社区或运营方核对开放范围和进出条件。",
    trail: "在指定区域游览，按现场标识选择步道、停靠点或人行区。",
    finish: "按事先确认的回程方式离开，给山路或市镇间交通留出余量。",
    lodging: "住宿可选在上车、集合或步行出发的城镇。订房前先向接送方核对集合地点和早班出发条件。",
    photos: "在允许停留的地点取景，留出通行空间。室内摄影规则以场馆标识为准。",
  },
  qu: {
    index: "Aswan qaylla kitikuna", map: "Google Maps nisqapi qhaway", introduction: "Kitita riqsiy", tips: "Puriy yuyaykuna", features: "Kitipa kaqninkuna", about: "Qhawaqkuna, tapukuna", basics: "Qallariy willakuy", name: "Suti", locality: "Maypi kasqan", type: "Laya", elevation: "Hanaq kaynin", original: "Llaqtapa sutin", hours: "Kichana pacha", fees: "Yaykuna qullqi", transport: "Chayana ñan", discover: "Imata qhawana", itinerary: "Purina ñan", notes: "Puriy kamachiy", photo: "Rikch’ay hurquna kiti", stay: "Maypi samana", reviews: "Watukuqkunapa rimaynin", address: "Kiti, mapa", source: "Willakuypa paqarinan", credit: "Rikch’aypa paqarinan", resized: "Rikch’aypa sayaynin tikrasqa",
    check: "Manaraq purispa kichayta, yaykunata, kutinatapas tapuy. Urqu ñan wichqasqa kaptin kiti unanchata qatipay.",
    hoursUnknown: "Kunan ima pachapi kichasqa kasqanta, tukuy yaykuna pachata ima qhawaqta tapuy.",
    feesUnknown: "Yaykuna qullqita kitipi tapuy. Karrupa, pusaqpa qullqin huk kanman.",
    parkHours: "SERNANP nisqanman hina, pakpa yaykunan killachawmanta ch’askachawkama 08:30–15:00. Sapa ñanpa pachanta saqisqa purichiqta tapuy.",
    parkFees: "Pakpa huk punchaw yaykuna qullqin S/30. Piruw kuraq runakunapaq S/12, saqisqa llaqta kuraq runakunapaq S/5. Ñanpaq mayqin qullqi kasqanta tapuy.",
    specialFees: "69 yupay quchapa sapa qullqin: Piruw kuraq runakunapaq S/15, saqisqa llaqta kuraq runakunapaq S/8. Wawakunapaq, huk runakunapaq qullqita purichiqta tapuy.",
    museumHours: "Atipachawmanta intichawkama 09:00–16:00. Raymi punchawpi musiyupa unanchanta qhaway.",
    museumFees: "Kuraq runakuna S/10, hatun yachay wasi yachakuqkuna S/5. Yachay wasi wawakuna mana qullqiyuq. Huk saqiykunata musiyupi tapuy.",
    museumAddress: "Chavín de Huántar, Av. 17 de Enero, Prolongación Norte s/n",
    park: "SERNANP Huascarán Nasyunal Pakta qhawan. Yaykunapaq, ñanpi purinapaq pakpa unanchanta qhaway.",
    culture: "Ministerio de Cultura nisqapa Áncashpi qhawaqninta watukuymanta, ñawpa kitita waqaychaymanta ima tapuy.",
    municipal: "Llaqta kamachiqta kichana pachamanta, runakunapa kitimanta ima tapuy.",
    parish: "Much’ay wasi qhawaqta yaykunamanta, much’ay pachamanta, rikch’aymanta ima tapuy.",
    road: "Ñan kichasqachu chayta ñan qhawaqta tapuy. Kiti unanchata qatipay.",
    independent: "Llaqta kamachiqta utaq kitipa qhawaqta yaykunamanta tapuy.",
    trail: "Saqisqa kitillapi puriy. Ñan, karru sayana, chaki purina unanchakunata qatipay.",
    finish: "T’aqwirisqa kutina ñanta qatipay. Urqu ñanpaq, karru kutinapaq pachata saqiy.",
    lodging: "Karru qallarinan utaq chaki ñan qallarinan llaqtapi samay. Samana wasita manaraq akllaspa karru siqana kitita tapuy.",
    photos: "Saqisqa kitillamanta rikch’ay, ñanta ama hark’aychu. Wasi ukupi kamachita qhaway.",
  },
} as const;

const typeNames: Record<RegionalAttraction["kind"], [string, string]> = {
  lake: ["湖泊", "Qucha"], mountain: ["雪峰", "Rit’i urqu"], glacier: ["冰川", "Rit’i"], pass: ["山口", "Q’asa"],
  archaeology: ["考古遗址", "Ñawpa kiti"], museum: ["博物馆", "Musiyu"], town: ["历史城镇", "Ñawpa llaqta"],
  square: ["公共广场", "Hatun pampa"], memorial: ["纪念地", "Yuyarina kiti"], church: ["宗教场所", "Much’ay wasi"],
  viewpoint: ["观景台", "Qhawana kiti"], tunnel: ["公路隧道", "Urqu uku ñan"],
};

export function localizedAttractionMetadata(slug: LocalizedSlug, locale: LocalizedLocale): Metadata {
  const copy = localizedAttractions[slug][locale];
  return {
    title: { absolute: copy.name },
    description: copy.intro,
    alternates: { canonical: nearbyPath(slug, locale), languages: nearbyAlternates(slug) },
  };
}

export default function LocalizedAttraction({ slug, locale }: { slug: LocalizedSlug; locale: LocalizedLocale }) {
  const copy = localizedAttractions[slug][locale];
  const t = labels[locale];
  const lake = Object.hasOwn(nearby, slug) ? nearby[slug as keyof typeof nearby] : undefined;
  const regional: RegionalAttraction | undefined = regionalAttractions[slug as keyof typeof regionalAttractions];
  const place = lake ?? regional!;
  const authority = regional?.authority ?? "park";
  const kind = typeNames[regional?.kind ?? "lake"][locale === "zh" ? 0 : 1];
  const map = lake?.mapUrl ?? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(regional!.query)}`;
  const source = regional?.source ?? (lake?.inventory
    ? `https://consultasenlinea.mincetur.gob.pe/fichaInventario/index.aspx?cod_Ficha=${lake.inventory}`
    : parkInfo);
  const guide = slug === "museo-chavin" ? "https://museos.cultura.pe/index.php/museos/museo-nacional-chav%C3%ADn" : authority === "park" ? parkInfo : source;
  const museum = slug === "museo-chavin";
  const hours = museum ? t.museumHours : authority === "park" ? t.parkHours : t.hoursUnknown;
  const fees = museum ? t.museumFees : slug === "laguna-69" ? t.specialFees : authority === "park" ? t.parkFees : t.feesUnknown;
  const address = museum ? t.museumAddress : place.locality;
  const rating = lake?.review;
  const nearbyLinks = Object.entries(localizedAttractions)
    .filter(([key]) => key !== slug && (nearby[key as keyof typeof nearby]?.locality ?? regionalAttractions[key as keyof typeof regionalAttractions]?.locality)?.split(",")[0] === place.locality.split(",")[0])
    .slice(0, 3);
  const facts = [[t.name, copy.name], [t.original, place.name], [t.locality, address], [t.type, kind], ...(lake?.elevation ? [[t.elevation, lake.elevation]] : [])];
  return (
    <main className="section attraction-guide" lang={locale}>
      <nav className="quick-nav" aria-label={t.index}>
        <a className="quick-nav-item" href={`/${locale}#nearby`}>{t.index}</a>
        {(["en", "es", "zh", "qu"] as const).filter((lang) => lang !== locale).map((lang) => (
          <a key={lang} className="quick-nav-item" href={nearbyPath(slug, lang)} hrefLang={lang} lang={lang}>{localeNames[lang]}</a>
        ))}
      </nav>
      <header className="attraction-hero">
        <div className="attraction-hero-copy">
          <p className="hero-tagline">{kind}</p>
          <h1 className="hero-title">{copy.name}</h1>
          <p className="hero-subtitle">{copy.intro}</p>
          {rating && <p>{rating.score}/5 · {rating.count} · Wanderlog</p>}
          <p className="about-text"><a href="#hours">{t.hours}</a> · {hours} · <a href="#reviews">{t.reviews}</a></p>
          <a className="hero-cta" href={map}>{t.map}</a>
        </div>
        <figure className="attraction-hero-photo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`/attractions/${slug}.webp`} alt={copy.name} width={place.width} height={place.height} />
          <figcaption>{t.credit} · <a href={place.photo}>{place.photographer ?? "Wikimedia Commons"}</a>
            {regional?.photoLicense && <> · <a href={regional.photoLicense.url}>{regional.photoLicense.name}</a> · {t.resized}</>}
          </figcaption>
        </figure>
      </header>
      <section className="info-card"><h2>{t.introduction}</h2><p>{copy.intro}</p></section>
      <section className="info-card"><h2>{t.tips}</h2><p>{t.check}</p></section>
      <section className="info-card"><h2>{t.features}</h2><p>{copy.highlight}</p></section>
      <section className="info-card"><h2>{t.about}</h2><p>{t[authority]}</p><a href={guide}>{t.source}</a></section>
      <section className="info-card"><h2>{t.basics}</h2>
        <table style={{ width: "100%", textAlign: "left" }}><tbody>
          {facts.map(([label,value]) => <tr key={label}><th scope="row">{label}</th><td>{value}</td></tr>)}
        </tbody></table>
      </section>
      <section className="info-card" id="hours"><h2>{t.hours}</h2><p>{hours}</p><a href={guide}>{t.source}</a></section>
      <section className="info-card"><h2>{t.fees}</h2><p>{fees}</p><a href={guide}>{t.source}</a></section>
      <section className="info-card"><h2>{t.transport}</h2><p>{copy.transport}</p><a href={map}>{t.map}</a></section>
      <section className="info-card"><h2>{t.discover}</h2><p>{copy.highlight}</p></section>
      <section className="info-card"><h2>{t.itinerary}</h2><ol><li>{copy.transport}</li><li>{t.trail}</li><li>{t.finish}</li></ol></section>
      <section className="info-card"><h2>{t.notes}</h2><p>{t.trail} {t.finish}</p></section>
      <section className="info-card"><h2>{t.photo}</h2><p>{copy.photo}</p><p>{t.photos}</p></section>
      <section className="info-card"><h2>{t.stay}</h2><p>{t.lodging}</p></section>
      <section className="info-card" id="reviews"><h2>{t.reviews}</h2>{rating && <p>{rating.score}/5 · {rating.count} · <a href={rating.source}>Wanderlog</a></p>}<a href={map}>{t.map}</a></section>
      <section className="info-card"><h2>{t.address}</h2><address>{copy.name}<br />{address}</address><p><a href={map}>{t.map}</a></p></section>
      <section className="info-card"><h2>{t.index}</h2>
        <ul>{nearbyLinks.map(([name, item]) => <li key={name}><a href={nearbyPath(name, locale)}>{item[locale].name}</a></li>)}</ul>
        <a href={`/${locale}#nearby`}>{t.index}</a>
      </section>
    </main>
  );
}
