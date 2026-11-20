import type { Metadata } from "next";
import HtmlLangSync from "@/components/HtmlLangSync";

export const huarazGuidePaths = { en: "/huaraz-tours", es: "/es/rutas-desde-huaraz" };
const park = "https://visitaareasnaturales.sernanp.gob.pe/anps/parque-nacional-huascaran/";
const laguna69 = "https://www.gob.pe/institucion/sernanp/noticias/1221954-parque-nacional-huascaran-fortalece-un-turismo-sostenible-y-ordenado-en-rutas-del-sector-llanganuco";
const santaCruz = "https://consultasenlinea.mincetur.gob.pe/fichaInventario/index.aspx?cod_Ficha=558";
const trekGuide = "https://repositorio.promperu.gob.pe/server/api/core/bitstreams/13007ea5-ab59-463a-908c-0b614215d144/content";
const maps = [
  "https://www.google.com/maps/search/?api=1&query=Laguna+Chinancocha+Llanganuco+Ancash+Peru",
  "https://www.google.com/maps/search/?api=1&query=Cebollapampa+Laguna+69+Ancash+Peru",
  "https://www.google.com/maps/search/?api=1&query=Cashapampa+Santa+Cruz+Ancash+Peru",
];

const content = {
  en: {
    title: "Huascarán National Park tours from Huaraz",
    description: "Compare Llanganuco, Laguna 69 and the Santa Cruz trek from Huaraz. Find route entrances and what to check before booking with an authorized operator.",
    home: "Huascarán National Park",
    tickets: "Entrance fees and tickets",
    map: "Find the access point on Google Maps",
    sources: "Official sources",
    booking: "What to confirm before booking",
    checks: [
      "Check the park notice for the exact sector and date. Ask the operator for its current SERNANP authorization and which route it covers.",
      "Confirm the Huaraz pickup point, park ticket and whether return transport is included. For a through-hike, get both trailhead names in writing.",
      "Leave room to change plans if access, weather or your group’s pace changes. For a shorter outing, ask how much walking is involved at each stop.",
    ],
    routes: [
      ["llanganuco", "Llanganuco lakes", "A day outing via Yungay with short stops around the lakes. For a gentler itinerary, ask for a Chinancocha stop and confirm where the vehicle can drop you off and pick you up."],
      ["laguna-69", "Laguna 69", "A day hike from Cebollapampa in the Llanganuco sector. A lakeside stop at Chinancocha and the hike to Laguna 69 are separate outings. SERNANP requires an authorized operator for Laguna 69. Confirm how the agency handles admission when you book."],
      ["santa-cruz", "Santa Cruz trek", "A multi-day traverse between Cashapampa and Vaquería, crossing Punta Unión. Cashapampa is reached via Caraz. Confirm the direction, campsites, included equipment and transfers at both ends with the operator."],
    ],
  },
  es: {
    title: "Rutas por el Parque Nacional Huascarán desde Huaraz",
    description: "Compara las lagunas de Llanganuco, la caminata a la Laguna 69 y la travesía de Santa Cruz. Revisa los accesos y qué consultar antes de reservar.",
    home: "Parque Nacional Huascarán",
    tickets: "Entradas y tarifas",
    map: "Ver el acceso en Google Maps",
    sources: "Fuentes oficiales",
    booking: "Qué consultar antes de reservar",
    checks: [
      "Consulta el aviso del parque para tu sector y fecha. Pide al operador su autorización vigente del SERNANP y confirma qué ruta cubre.",
      "Confirma el punto de recojo en Huaraz, la entrada al parque y si el traslado de regreso está incluido. En una travesía, pide por escrito los nombres de ambos accesos.",
      "Deja margen para ajustar el itinerario si cambian el acceso, el tiempo o el ritmo del grupo. Si quieres caminar poco, pregunta cuánto se camina en cada parada.",
    ],
    routes: [
      ["llanganuco", "Lagunas de Llanganuco", "Excursión de un día por Yungay, con paradas breves junto a las lagunas. Para una salida más tranquila, consulta por una parada en Chinancocha y confirma dónde te dejará y recogerá el vehículo."],
      ["laguna-69", "Laguna 69", "Caminata de un día desde Cebollapampa, en el sector Llanganuco. La visita a Chinancocha y la caminata a la Laguna 69 son salidas distintas. El SERNANP exige un operador autorizado para la Laguna 69. Pregunta cómo gestiona la entrada al reservar."],
      ["santa-cruz", "Travesía de Santa Cruz", "Travesía de varios días entre Cashapampa y Vaquería, por el paso Punta Unión. Se llega a Cashapampa por Caraz. Confirma con el operador el sentido de la marcha, los campamentos, el equipo incluido y los traslados en ambos extremos."],
    ],
  },
};

export function huarazGuideMetadata(locale: keyof typeof content): Metadata {
  const { title, description } = content[locale];
  return {
    title,
    description,
    alternates: {
      canonical: huarazGuidePaths[locale],
      languages: { ...huarazGuidePaths, "x-default": huarazGuidePaths.en },
    },
  };
}

export default function HuarazGuide({ locale }: { locale: keyof typeof content }) {
  const t = content[locale];
  const spanish = locale === "es";
  return (
    <main className="section" lang={locale}>
      <HtmlLangSync locale={locale} />
      <div className="quick-nav">
        <a className="quick-nav-item" href={spanish ? "/es" : "/"}>{t.home}</a>
        <a className="quick-nav-item" href={spanish ? "/es/entradas-precios" : "/entrance-fees"}>{t.tickets}</a>
        <a className="quick-nav-item" href={huarazGuidePaths[spanish ? "en" : "es"]} hrefLang={spanish ? "en" : "es"} lang={spanish ? "en" : "es"}>{spanish ? "English" : "Español"}</a>
      </div>
      <h1 className="section-title">{t.title}</h1>
      <div className="section-divider" />
      <p className="about-text">{t.description}</p>
      {t.routes.map(([id, name, description], index) => (
        <section key={id} id={id} className="info-card">
          <h2>{name}</h2>
          <p>{description}</p>
          <p><a href={maps[index]}>{t.map}</a></p>
        </section>
      ))}
      <section className="info-card">
        <h2>{t.booking}</h2>
        <ol>{t.checks.map((step) => <li key={step}>{step}</li>)}</ol>
      </section>
      <section className="info-card">
        <h2>{t.sources}</h2>
        <ul>
          <li><a href={park}>SERNANP · Parque Nacional Huascarán</a></li>
          <li><a href={laguna69}>SERNANP · Laguna 69 y sector Llanganuco</a></li>
          <li><a href={santaCruz}>MINCETUR · Quebrada Santa Cruz</a></li>
          <li><a href={trekGuide}>PROMPERÚ · Trekking en Áncash</a></li>
        </ul>
      </section>
    </main>
  );
}
