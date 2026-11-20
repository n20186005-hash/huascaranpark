"use client";

import { useState } from "react";
import { entranceFaqEn, entranceFaqEs } from "@/i18n/entrance-faq";

type Fee = { title: string; price: string; note: string };
type Content = {
  eyebrow: string;
  title: string;
  verified: string;
  intro: string;
  hoursTitle: string;
  hours: string;
  feesTitle: string;
  fees: Fee[];
  buyTitle: string;
  buy: string;
  rulesTitle: string;
  rules: string[];
  faqTitle: string;
  relatedTitle: string;
  related: { label: string; href: string }[];
  backHome: string;
};

const CONTENT: Record<"en" | "es", Content> = {
  en: {
    eyebrow: "PLAN YOUR VISIT",
    title: "Huascarán National Park Entrance Fees & Visiting Info",
    verified: "Last verified: November 2026 · Source: SERNANP (visitAANP)",
    intro:
      "Huascarán National Park is a protected area managed by SERNANP (Peru's National Service of Natural Protected Areas). Entrance fees and visiting rules are set by SERNANP and can change. The details below reflect the official visitor page and were last checked in November 2026.",
    hoursTitle: "Opening Hours",
    hours:
      "Official visiting hours: 08:30 – 15:00, Monday to Friday. Some sectors and trekking entrances may open earlier; hours vary by sector and season.",
    feesTitle: "Entrance Fees",
    fees: [
      { title: "Foreign · 1-day", price: "S/30", note: "≈ $8–9 USD general ticket" },
      { title: "Foreign · 2–3 days", price: "S/60", note: "Approx. multi-day ticket" },
      { title: "Foreign · 4–30 days", price: "S/150", note: "Approx. extended ticket" },
      { title: "Peruvian national", price: "S/12", note: "Standard adult day ticket" },
      { title: "Local community", price: "S/5", note: "Standard adult day ticket for eligible residents with DNI" },
      { title: "Laguna 69 / Pico Mateo", price: "Separate", note: "These sectors have their own rates" },
    ],
    buyTitle: "Where to Buy & How to Visit",
    buy:
      "SERNANP directs visitors to authorized operators. Confirm with the operator how admission is arranged for your sector and date. Most travellers arrange permits, guides and transport from Huaraz, the main gateway town.",
    rulesTitle: "Rules to Know",
    rules: [
      "Pets are strictly prohibited to protect Andean wildlife.",
      "Several trekking sectors require a certified guide — confirm per route.",
      "Altitude is significant (entrances often above 3,000 m); acclimatise in Huaraz first.",
      "Carry out all waste; the park is a UNESCO World Heritage Site.",
    ],
    faqTitle: "Frequently Asked Questions",
    relatedTitle: "More planning guides",
    related: [
      { label: "Laguna 69", href: "/huaraz-tours#laguna-69" },
      { label: "Santa Cruz Trek", href: "/huaraz-tours#santa-cruz" },
      { label: "How to Get There", href: "/#transportation" },
      { label: "Travel Tips", href: "/#tips" },
    ],
    backHome: "← Back to Huascarán National Park guide",
  },
  es: {
    eyebrow: "PLANEA TU VISITA",
    title: "Entradas y Información de Visita del Parque Nacional Huascarán",
    verified: "Última verificación: noviembre de 2026 · Fuente: SERNANP (visitAANP)",
    intro:
      "El Parque Nacional Huascarán es un área protegida administrada por SERNANP (Servicio Nacional de Áreas Naturales Protegidas). Las tarifas y normas de visita las fija SERNANP y pueden cambiar. Los detalles abajo reflejan la página oficial de visitantes y fueron verificados en noviembre de 2026.",
    hoursTitle: "Horario de Apertura",
    hours:
      "Horario oficial de visita: 08:30 – 15:00, de lunes a viernes. Algunos sectores y entradas de trekking abren antes; varía por sector y temporada.",
    feesTitle: "Tarifas de Entrada",
    fees: [
      { title: "Extranjero · 1 día", price: "S/30", note: "≈ $8–9 USD boleto general" },
      { title: "Extranjero · 2–3 días", price: "S/60", note: "Aprox. boleto múltiple" },
      { title: "Extranjero · 4–30 días", price: "S/150", note: "Aprox. boleto extendido" },
      { title: "Nacional peruano", price: "S/12", note: "Entrada general de un día para adultos" },
      { title: "Comunidad local", price: "S/5", note: "Entrada general de un día para residentes adultos acreditados con DNI" },
      { title: "Laguna 69 / Pico Mateo", price: "Separada", note: "Estos sectores tienen tarifas propias" },
    ],
    buyTitle: "Dónde Comprar y Cómo Visitar",
    buy:
      "El SERNANP indica que la visita se realiza mediante operadores autorizados. Confirma con el operador cómo se tramita la entrada para tu sector y fecha. La mayoría organiza permisos, guías y transporte desde Huaraz, la ciudad de acceso principal.",
    rulesTitle: "Normas Importantes",
    rules: [
      "Se prohíben estrictamente las mascotas para proteger la fauna andina.",
      "Varios sectores de trekking requieren guía certificado; confirme por ruta.",
      "La altitud es significativa (entradas a menudo sobre 3,000 m); aclimatarse en Huaraz primero.",
      "Lleve sus residuos; el parque es Patrimonio Mundial de la UNESCO.",
    ],
    faqTitle: "Preguntas Frecuentes",
    relatedTitle: "Más guías de planificación",
    related: [
      { label: "Laguna 69", href: "/es/rutas-desde-huaraz#laguna-69" },
      { label: "Travesía de Santa Cruz", href: "/es/rutas-desde-huaraz#santa-cruz" },
      { label: "Cómo Llegar", href: "/es#transportation" },
      { label: "Consejos de Viaje", href: "/es#tips" },
    ],
    backHome: "← Volver a la guía del Parque Nacional Huascarán",
  },
};

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <button
        className="faq-question"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{q}</span>
        <span className={`faq-icon${open ? " rotated" : ""}`}>▾</span>
      </button>
      {open && <div className="faq-answer">{a}</div>}
    </div>
  );
}

export default function EntranceFeesContent({ locale }: { locale: "en" | "es" }) {
  const c = CONTENT[locale];
  const faq = locale === "en" ? entranceFaqEn : entranceFaqEs;
  return (
    <>
      <header className="fees-hero" style={{
        background: "linear-gradient(135deg, var(--color-deep) 0%, #1a3a27 100%)",
        color: "#fff",
        padding: "8rem 2rem 3rem",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ letterSpacing: "0.2em", fontSize: "0.75rem", color: "var(--color-gold)", marginBottom: "1rem" }}>
            {c.eyebrow}
          </p>
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            margin: 0,
          }}>
            {c.title}
          </h1>
          <p style={{ marginTop: "1.25rem", color: "rgba(255,255,255,0.6)", fontSize: "0.85rem" }}>
            <a href="https://visitaareasnaturales.sernanp.gob.pe/anps/parque-nacional-huascaran/" style={{ color: "inherit", textDecoration: "underline" }}>{c.verified}</a>
          </p>
        </div>
      </header>

      <main className="section">
        <p className="about-text" style={{ whiteSpace: "pre-line" }}>{c.intro}</p>

        <div className="info-grid" style={{ marginTop: "2.5rem" }}>
          {c.fees.map((f, i) => (
            <div className="info-card" key={i}>
              <div className="info-card-title">{f.title}</div>
              <div className="info-card-content">{f.price}</div>
              <div className="info-card-note">{f.note}</div>
            </div>
          ))}
        </div>

        <div className="info-grid" style={{ marginTop: "1.5rem" }}>
          <div className="info-card">
            <div className="info-card-title">{c.hoursTitle}</div>
            <div className="info-card-content" style={{ fontSize: "1.1rem" }}>{c.hours}</div>
          </div>
          <div className="info-card">
            <div className="info-card-title">{c.buyTitle}</div>
            <div className="info-card-note" style={{ fontSize: "0.9rem" }}>{c.buy}</div>
          </div>
        </div>

        <div className="bring-section" style={{ marginTop: "2.5rem" }}>
          <div className="bring-title">{c.rulesTitle}</div>
          <ul className="bring-list">
            {c.rules.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>

        <h2 className="section-title" style={{ marginTop: "4rem" }}>{c.faqTitle}</h2>
        <div className="section-divider" />
        <div className="faq-list">
          {faq.map((item, i) => (
            <FaqItem key={i} q={item.q} a={item.a} />
          ))}
        </div>

        <h2 className="section-title" style={{ marginTop: "4rem" }}>{c.relatedTitle}</h2>
        <div className="footer-links-grid" style={{ marginTop: "1rem" }}>
          {c.related.map((r, i) => (
            <a key={i} className="footer-link-item" href={r.href}>{r.label}</a>
          ))}
        </div>

        <p style={{ marginTop: "3rem" }}>
          <a className="maps-link" href={locale === "en" ? "/" : "/es"}>{c.backHome}</a>
        </p>
      </main>
    </>
  );
}
