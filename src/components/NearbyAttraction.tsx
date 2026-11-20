import { VisitBasics, VisitSummary, VisitHoursAndFees, VisitPracticalAdvice, VisitStay, VisitDirections } from "@/components/AttractionVisitInfo";
import { nearbyDetails } from "@/i18n/nearby-details";
import type { Metadata } from "next";
import HtmlLangSync from "@/components/HtmlLangSync";
import { nearby, nearbyPath, parkInfo, type NearbySlug } from "@/i18n/nearby";

export function nearbyMetadata(slug: NearbySlug, locale: "en" | "es"): Metadata {
  const place = nearby[slug];
  return {
    title: `${place.name} | ${locale === "es" ? "Parque Nacional Huascarán" : "Huascarán National Park"}`,
    description: place[locale].intro,
    alternates: {
      canonical: nearbyPath(slug, locale),
      languages: { en: nearbyPath(slug, "en"), es: nearbyPath(slug, "es"), "x-default": nearbyPath(slug, "en") },
    },
  };
}

function mapLink(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export default function NearbyAttraction({ slug, locale }: { slug: NearbySlug; locale: "en" | "es" }) {
  const place = nearby[slug];
  const copy = place[locale];
  const es = locale === "es";
  const visitorSite = {
    slug, name: place.name, locality: `${place.locality}, Áncash, ${es ? "Perú" : "Peru"}`,
    isPark: true, kind: "lake", source: parkInfo, map: place.mapUrl,
  };
  const details = nearbyDetails[slug][locale];
  const other = slug === "chinancocha" ? "laguna-69" : "chinancocha";
  return (
    <main className="section" lang={locale}>
      <HtmlLangSync locale={locale} />
      <div className="quick-nav">
        <a className="quick-nav-item" href={es ? "/es" : "/"}>{es ? "Inicio" : "Home"}</a>
        <a className="quick-nav-item" href={es ? "/es/rutas-desde-huaraz" : "/huaraz-tours"}>{es ? "Rutas desde Huaraz" : "Routes from Huaraz"}</a>
        <a className="quick-nav-item" href={nearbyPath(slug, es ? "en" : "es")} hrefLang={es ? "en" : "es"}>{es ? "English" : "Español"}</a>
      </div>
      <h1 className="section-title">{place.name}</h1>
      {place.review && <p>{place.review.score}/5 · {place.review.count} {es ? "opiniones" : "reviews"} · {place.elevation}</p>}
      <p className="about-text">{copy.intro}</p>
      <VisitSummary site={visitorSite} locale={locale} />
      <p><a href={place.mapUrl}>{es ? "Ver la laguna en Google Maps" : "View the lake on Google Maps"}</a></p>
      <figure style={{ margin: "1.5rem 0" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`/attractions/${slug}.webp`} alt={place.name} width={place.width} height={place.height} style={{ width: "100%", height: "auto", display: "block" }} />
        <figcaption><a href={place.photo}>{es ? "Foto" : "Photo"}: {place.photographer} · Wikimedia Commons</a></figcaption>
      </figure>
      <section className="info-card">
        <h2>{es ? `Sobre ${place.name}` : `About ${place.name}`}</h2>
        <p>{es ? "El SERNANP administra el Parque Nacional Huascarán y regula el acceso turístico a este sector." : "SERNANP manages Huascarán National Park and oversees visitor access in this sector."}</p>
        <p>{details.history}</p>
        <p><a href={parkInfo}>{es ? "Información oficial del parque" : "Official park information"}</a></p>
      </section>
      <section className="info-card">
        <h2>{es ? "Información básica" : "Basic information"}</h2>
        <VisitBasics site={visitorSite} locale={locale} typeLabel={es ? "Laguna glaciar" : "Glacial lake"} access={copy.access} elevation={place.elevation} />
        <p>{es ? "Consulta los horarios y las tarifas vigentes para el sector antes de partir." : "Check the current hours and applicable rates for this sector before leaving."}</p>
        <p><a href={es ? "/es/entradas-precios" : "/entrance-fees"}>{es ? "Tarifas y horarios del parque" : "Park fees and opening hours"}</a></p>
      </section>
      <VisitHoursAndFees site={visitorSite} locale={locale} />
      <section className="info-card">
        <h2>{es ? "Cómo llegar" : "Getting there"}</h2>
        <p>{copy.transport}</p>
        <p><a href={mapLink(place.accessQuery)}>{es ? "Ver el acceso en Google Maps" : "View the access point on Google Maps"}</a></p>
        <h3>{es ? "Ruta de visita" : "Visit itinerary"}</h3>
        <ol>{copy.steps.map((step) => <li key={step}>{step}</li>)}</ol>
      </section>
      <VisitPracticalAdvice site={visitorSite} locale={locale} />
      <section className="info-card">
        <h2>{es ? "Consejos y qué observar" : "Visit tips and what to look for"}</h2>
        <p>{details.advice}</p>
        <p>{details.highlights}</p>
        <h3>{es ? "Dónde tomar fotos" : "Where to take photos"}</h3>
        <p>{details.photography}</p>
      </section>
      <section className="info-card">
        <h2>{es ? "Preguntas frecuentes" : "Frequently asked questions"}</h2>
        {details.faq.map(([question, answer]) => (
          <details key={question}>
            <summary>{question}</summary>
            <p>{answer}</p>
          </details>
        ))}
      </section>
      <VisitStay site={visitorSite} locale={locale} />
      <section id="visitor-reviews" className="info-card">
        <h2>{es ? "Opiniones de visitantes" : "Visitor reviews"}</h2>
        {place.review && <p>{place.review.score}/5 · {place.review.count} {es ? "opiniones" : "reviews"} · {es ? "Google, según Wanderlog, consultado el 20 de noviembre de 2026" : "Google via Wanderlog, checked November 20, 2026"}</p>}
        <p><a href={place.review?.source ?? place.mapUrl}>{es ? "Ver puntuación y opiniones" : "View rating and reviews"}</a></p>
      </section>
      <section className="info-card">
        <h2>{es ? "Fuentes y lugares cercanos" : "Sources and nearby places"}</h2>
        <ul>
          {place.inventory && <li><a href={`https://consultasenlinea.mincetur.gob.pe/fichaInventario/index.aspx?cod_Ficha=${place.inventory}`}>MINCETUR · {place.name}</a></li>}
          {slug === "laguna-69" && <li><a href="https://www.gob.pe/institucion/sernanp/noticias/1221954-parque-nacional-huascaran-fortalece-un-turismo-sostenible-y-ordenado-en-rutas-del-sector-llanganuco">SERNANP · {es ? "Operadores autorizados" : "Authorized operators"}</a></li>}
          <li><a href="https://whc.unesco.org/en/list/333/">UNESCO · {es ? "Parque Nacional Huascarán" : "Huascarán National Park"}</a></li>
          <li><a href={nearbyPath(other, locale)}>{nearby[other].name}</a></li>
          {slug === "chinancocha" && <li><a href={nearbyPath("orconcocha", locale)}>{nearby.orconcocha.name}</a></li>}
        </ul>
      </section>
      <section className="info-card">
        <h2>{es ? "Más lugares cercanos" : "More nearby attractions"}</h2>
        <a href={es ? "/es#nearby" : "/#nearby"}>{es ? "Ver todas las guías de Áncash" : "Browse the Áncash attraction guides"}</a>
      </section>
      <VisitDirections site={visitorSite} locale={locale} accessMap={mapLink(place.accessQuery)} />
    </main>
  );
}
