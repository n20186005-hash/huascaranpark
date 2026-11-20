import type { Metadata } from "next";
import HtmlLangSync from "@/components/HtmlLangSync";
import { nearbyPath, parkInfo } from "@/i18n/nearby";
import { regionalAttractions, type RegionalAttraction as Attraction } from "@/i18n/regional-attractions";

type Locale = "en" | "es";
export type RegionalSlug = keyof typeof regionalAttractions;

const typeLabels: Record<Attraction["kind"], [string, string]> = {
  lake: ["Lake", "Laguna"],
  mountain: ["Mountain", "Nevado"],
  glacier: ["Glacier", "Glaciar"],
  pass: ["Mountain pass", "Paso de montaña"],
  archaeology: ["Archaeological site", "Sitio arqueológico"],
  museum: ["Museum", "Museo"],
  town: ["Historic town", "Pueblo histórico"],
  square: ["Public square", "Plaza pública"],
  memorial: ["Memorial", "Lugar conmemorativo"],
  church: ["Sanctuary", "Santuario"],
  viewpoint: ["Viewpoint", "Mirador"],
  tunnel: ["Road tunnel", "Túnel vial"],
};

function manager(place: Attraction, es: boolean) {
  switch (place.authority) {
    case "park": return es
      ? "El SERNANP administra el Parque Nacional Huascarán y regula el acceso turístico a este sector."
      : "SERNANP manages Huascarán National Park and oversees visitor access in this sector.";
    case "culture": return es
      ? "El Ministerio de Cultura del Perú, a través de la Dirección Desconcentrada de Cultura de Áncash, es la autoridad de referencia para la conservación y la visita."
      : "Peru’s Ministry of Culture, through the Áncash regional culture directorate, is the public authority for conservation and visitor information.";
    case "municipal": return es
      ? "La municipalidad provincial es el contacto público para el espacio y sus normas de visita. Consulta aparte el acceso a los recintos que tienen gestión propia."
      : "The provincial municipality is the public contact for this place and its visitor rules. Check access separately for spaces with their own management.";
    case "parish": return es
      ? "Consulta con la parroquia los horarios de culto y las condiciones de acceso al interior del santuario."
      : "The local parish is the contact for worship times and access to the sanctuary interior.";
    case "road": return es
      ? "Consulta el estado del corredor Carhuaz–Chacas con la autoridad vial regional. El túnel forma parte de una carretera en servicio."
      : "Check the Carhuaz–Chacas corridor with the regional road authority. The tunnel is part of an operating road.";
    default: return es
      ? "La ficha enlazada identifica el lugar. Para confirmar permisos y condiciones de acceso, consulta a la municipalidad distrital o a un operador local."
      : "The linked source identifies the place. Confirm access arrangements with the district municipality or a local operator.";
  }
}

function accessNote(place: Attraction, es: boolean) {
  if (place.authority === "park") return es
    ? "Consulta en SERNANP el horario de ingreso, la tarifa del sector y los operadores autorizados antes de viajar."
    : "Check SERNANP for the sector’s entry hours, fees and authorized operators before you travel.";
  if (place.kind === "tunnel") return es
    ? "Consulta el estado de la vía y sus restricciones de circulación. No hay una entrada turística independiente al túnel."
    : "Check the road status and vehicle restrictions. The tunnel has no separate visitor entrance.";
  if (place.kind === "museum" || place.kind === "archaeology" || place.kind === "memorial") return es
    ? "Verifica el horario y la tarifa con el recinto. Las entradas a otros lugares de la zona se tramitan por separado."
    : "Confirm current hours and admission with the venue. Other places in the area have separate access arrangements.";
  return es
    ? "Confirma las condiciones de visita en el lugar, especialmente si quieres entrar a un recinto o usar un sendero local."
    : "Confirm local access arrangements, especially for interiors and local trails.";
}

export function regionalMetadata(slug: RegionalSlug, locale: Locale): Metadata {
  const place = regionalAttractions[slug];
  return {
    title: `${place.name} | ${locale === "es" ? "Guía de Áncash" : "Áncash Visitor Guide"}`,
    description: place[locale].intro,
    alternates: {
      canonical: nearbyPath(slug, locale),
      languages: { en: nearbyPath(slug, "en"), es: nearbyPath(slug, "es"), "x-default": nearbyPath(slug, "en") },
    },
  };
}

export default function RegionalAttraction({ slug, locale }: { slug: RegionalSlug; locale: Locale }) {
  const place: Attraction = regionalAttractions[slug];
  const copy = place[locale];
  const es = locale === "es";
  const map = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.query)}`;
  const steps = copy.transport.split(/(?<=\.)\s+(?=[A-ZÁÉÍÓÚÜÑ])/u);
  const nearby = Object.entries(regionalAttractions)
    .filter(([key, candidate]) => key !== slug && candidate.locality.split(",")[0] === place.locality.split(",")[0])
    .slice(0, 3);
  const authoritySource = place.authority === "park" ? parkInfo : place.authority === "culture" ? "https://www.gob.pe/cultura" : place.source;
  return (
    <main className="section" lang={locale}>
      <HtmlLangSync locale={locale} />
      <div className="quick-nav">
        <a className="quick-nav-item" href={es ? "/es#nearby" : "/#nearby"}>{es ? "Lugares cercanos" : "Nearby places"}</a>
        <a className="quick-nav-item" href={nearbyPath(slug, es ? "en" : "es")} hrefLang={es ? "en" : "es"}>{es ? "English" : "Español"}</a>
      </div>
      <h1 className="section-title">{place.name}</h1>
      <p className="about-text">{copy.intro}</p>
      <a href={map}>{es ? "Ver ubicación en Google Maps" : "View location on Google Maps"}</a>
      <figure style={{ margin: "1.5rem 0" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`/attractions/${slug}.webp`} alt={place.photoCaption?.[locale] ?? place.name} width={place.width} height={place.height} style={{ width: "100%", maxHeight: 620, objectFit: "contain", height: "auto", display: "block" }} />
        <figcaption>
          {place.photoCaption?.[locale] && <>{place.photoCaption[locale]} · </>}
          <a href={place.photo}>{place.photographer ? `${place.photographer} · Wikimedia Commons` : "Wikimedia Commons"}</a>
          {place.photoLicense && <> · <a href={place.photoLicense.url}>{place.photoLicense.name}</a> · {es ? "Imagen redimensionada" : "Resized image"}</>}
        </figcaption>
      </figure>
      <section className="info-card">
        <h2>{es ? `Sobre ${place.name}` : `About ${place.name}`}</h2>
        <p>{manager(place, es)}</p>
        <p>{copy.background}</p>
        <a href={authoritySource}>{es ? "Consultar la entidad de referencia" : "Check the management or visitor source"}</a>
      </section>
      <section className="info-card">
        <h2>{es ? "Información básica" : "Basic information"}</h2>
        <dl>
          <dt>{es ? "Ubicación" : "Location"}</dt><dd>{place.locality}, Áncash, {es ? "Perú" : "Peru"}</dd>
          <dt>{es ? "Tipo de lugar" : "Site type"}</dt><dd>{typeLabels[place.kind][es ? 1 : 0]}</dd>
          <dt>{es ? "Horario y entrada" : "Hours and admission"}</dt><dd>{accessNote(place, es)}</dd>
        </dl>
        {place.authority === "park" && <a href={es ? "/es/entradas-precios" : "/entrance-fees"}>{es ? "Tarifas del parque" : "Park entrance fees"}</a>}
      </section>
      <section className="info-card">
        <h2>{es ? "Cómo llegar y recorrer el lugar" : "Getting there and planning the visit"}</h2>
        <ol>{steps.map((step) => <li key={step}>{step}</li>)}</ol>
        <a href={map}>{es ? "Abrir el mapa del lugar" : "Open the location map"}</a>
      </section>
      <section className="info-card">
        <h2>{es ? "Dónde tomar fotos" : "Where to take photos"}</h2>
        <p>{copy.photography}</p>
      </section>
      <section className="info-card">
        <h2>{es ? "Preguntas frecuentes" : "Frequently asked questions"}</h2>
        <details><summary>{copy.faq[0]}</summary><p>{copy.faq[1]}</p></details>
      </section>
      <section className="info-card">
        <h2>{es ? "Opiniones y fuentes" : "Reviews and sources"}</h2>
        <ul>
          <li><a href={map}>{es ? "Consultar opiniones en Google Maps" : "Check reviews on Google Maps"}</a></li>
          <li><a href={place.source}>{es ? "Fuente de la ficha" : "Visitor information source"}</a></li>
          {nearby.map(([key, candidate]) => <li key={key}><a href={nearbyPath(key, locale)}>{candidate.name}</a></li>)}
        </ul>
      </section>
    </main>
  );
}
