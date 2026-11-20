import { parkInfo } from "@/i18n/nearby";

type Locale = "en" | "es";
type Localized = Record<Locale, string>;
type Site = {
  slug: string;
  name: string;
  locality: string;
  isPark: boolean;
  kind: string;
  source: string;
  map: string;
};

const museumSource = "https://museos.cultura.pe/index.php/museos/museo-nacional-chav%C3%ADn";

function visitDetails(site: Site, locale: Locale) {
  const es = locale === "es";
  if (site.slug === "museo-chavin") return {
    hours: es ? "Martes a domingo, 09:00–16:00." : "Tuesday–Sunday, 9:00 a.m.–4:00 p.m.",
    tickets: es ? "Adultos S/10, educación superior S/5 y escolares entrada gratuita. Consulta los requisitos de gratuidad y la tarifa especial." : "Adults S/10, higher-education students S/5 and schoolchildren free. See the museum listing for eligibility and special rates.",
    source: museumSource,
    address: "Av. 17 de Enero, Prolongación Norte s/n, Chavín de Huántar, Huari, Áncash",
  };
  if (site.isPark) return {
    hours: es
      ? "Horario general publicado por el SERNANP: lunes a viernes, 08:30–15:00. Confirma el ingreso y el retorno del circuito con el operador autorizado."
      : "SERNANP lists general visiting hours of Monday–Friday, 8:30 a.m.–3:00 p.m. Confirm entry and return times for your route with the authorized operator.",
    tickets: site.slug === "laguna-69"
      ? es
        ? "Tarifa especial de un día: S/15 para adultos nacionales y S/8 para residentes locales adultos acreditados. Consulta las demás categorías con el operador autorizado."
        : "Special one-day rates: S/15 for Peruvian adults and S/8 for eligible local adults. Ask the authorized operator about other visitor categories."
      : es
        ? "Tarifa general del parque por un día: S/30; adultos nacionales S/12 y adultos residentes locales acreditados S/5. Confirma si corresponde a esta ruta y si el traslado se cobra aparte."
        : "General one-day park rates: S/30 standard, S/12 for Peruvian adults and S/5 for eligible local adults. Confirm whether the rate applies to this route and whether transport is separate.",
    source: parkInfo,
    address: site.locality,
  };
  return {
    hours: es
      ? "Consulta la ficha de visita o al responsable del lugar para conocer el horario del día y cualquier cierre."
      : "Check the visitor listing or site operator for the day’s opening hours and closures.",
    tickets: es
      ? "Consulta la tarifa aplicable al recinto o servicio que vas a utilizar. Confirma el costo del transporte por separado."
      : "Check the fee for the part of the site or service you plan to use. Confirm transport costs separately.",
    source: site.source,
    address: site.locality,
  };
}

const stays: [RegExp, Localized][] = [
  [/Chavín|Huari|Conchucos/u, { en: "Stay in Chavín de Huántar or Huari according to your route. Check return transport if you are planning a day trip from Huaraz.", es: "Puedes alojarte en Chavín de Huántar o Huari según el recorrido. Confirma el regreso si sales de Huaraz por el día." }],
  [/Chacas|Asunción/u, { en: "Chacas is the closest practical base for this itinerary. Confirm the return across the Cordillera Blanca before booking accommodation on the other side.", es: "Chacas es la base más próxima para este itinerario. Confirma el regreso por la Cordillera Blanca antes de reservar alojamiento en la otra vertiente." }],
  [/Caraz|Huaylas|Santa Cruz–Huaripampa/u, { en: "Caraz is a useful base for the approach. For a multi-day trek, confirm camps and trailhead transfers with your operator.", es: "Caraz es una base práctica para el acceso. En una travesía de varios días, confirma campamentos y traslados con tu operador." }],
  [/Yungay|Llanganuco/u, { en: "Use Yungay for a shorter approach or Huaraz if your operator picks up there. Verify the pickup location before booking a room.", es: "Puedes alojarte en Yungay para acortar el acceso o en Huaraz si allí te recoge el operador. Verifica el punto de recojo antes de reservar." }],
  [/Carhuaz|Marcará/u, { en: "Carhuaz is a practical base for local roads. Huaraz also works when the operator offers pickup there.", es: "Carhuaz es una base práctica para los accesos locales. Huaraz también sirve si el operador ofrece recojo allí." }],
];

export function VisitBasics({ site, locale, typeLabel, access, elevation }: {
  site: Site; locale: Locale; typeLabel: string; access: string; elevation?: string;
}) {
  const es = locale === "es";
  const rows = [
    [es ? "Nombre" : "Name", site.name],
    [es ? "Ubicación" : "Location", visitDetails(site, locale).address],
    [es ? "Tipo de lugar" : "Site type", typeLabel],
    ...(elevation ? [[es ? "Altitud" : "Elevation", elevation]] : []),
    [es ? "Acceso" : "Access", access],
  ];
  return (
    <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
      <tbody>
        {rows.map(([label, value]) => (
          <tr key={label}>
            <th scope="row" style={{ verticalAlign: "top", padding: "0.5rem 1rem 0.5rem 0" }}>{label}</th>
            <td style={{ paddingBlock: "0.5rem" }}>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function VisitSummary({ site, locale }: { site: Site; locale: Locale }) {
  const es = locale === "es";
  const { hours } = visitDetails(site, locale);
  return <p className="about-text"><a href="#visitor-hours">{es ? "Horario" : "Hours"}</a> · {hours} <a href="#visitor-reviews">{es ? "Opiniones" : "Visitor reviews"}</a></p>;
}

export function VisitHoursAndFees({ site, locale }: { site: Site; locale: Locale }) {
  const es = locale === "es";
  const { hours, tickets, source } = visitDetails(site, locale);
  return (
    <>
      <section id="visitor-hours" className="info-card">
        <h2>{es ? "Horario de visita" : "Opening hours"}</h2>
        <p>{hours}</p>
        <a href={source}>{es ? "Consultar horario" : "Check current hours"}</a>
      </section>
      <section className="info-card">
        <h2>{es ? "Entradas y tarifas" : "Tickets and prices"}</h2>
        <p>{tickets}</p>
        <a href={source}>{es ? "Consultar tarifas" : "Check admission details"}</a>
      </section>
    </>
  );
}

export function VisitPracticalAdvice({ site, locale }: { site: Site; locale: Locale }) {
  const es = locale === "es";
  const isWalk = ["lake", "mountain", "glacier", "pass", "viewpoint"].includes(site.kind);
  return (
    <section className="info-card">
      <h2>{es ? "Antes de ir" : "Before you go"}</h2>
      <p>{isWalk
        ? es ? "Confirma el punto de retorno, el estado del sendero y la distancia a pie desde el desembarque. Lleva agua y abrigo y sigue las indicaciones de acceso." : "Confirm the return pickup, trail status and walking distance from the drop-off. Bring water and layers, and follow access instructions."
        : site.kind === "tunnel"
          ? es ? "Consulta el estado de la carretera antes del cruce. Usa solo paradas autorizadas y mantén libres las entradas del túnel." : "Check road conditions before crossing. Stop only at permitted pull-offs and keep tunnel entrances clear."
          : es ? "Confirma si hay ingreso al interior, recorridos guiados o restricciones para fotografías. Deja tiempo entre esta visita y la siguiente parada." : "Confirm interior access, guided visit options and photography rules before setting out. Leave time between this visit and the next stop."}</p>
    </section>
  );
}

export function VisitStay({ site, locale }: { site: Site; locale: Locale }) {
  const stay = stays.find(([pattern]) => pattern.test(site.locality))?.[1] ?? {
    en: "Huaraz is a practical base for this itinerary. Check whether your return drops you at your lodging or at a central meeting point.",
    es: "Huaraz es una base práctica para este itinerario. Confirma si el regreso termina en tu alojamiento o en un punto de encuentro céntrico.",
  };
  return (
    <section className="info-card">
      <h2>{locale === "es" ? "Dónde alojarse" : "Where to stay"}</h2>
      <p>{stay[locale]}</p>
    </section>
  );
}

export function VisitDirections({ site, locale, accessMap }: { site: Site; locale: Locale; accessMap?: string }) {
  const { address } = visitDetails(site, locale);
  const es = locale === "es";
  return (
    <section className="info-card">
      <h2>{es ? "Ubicación y mapa" : "Address and map"}</h2>
      <address>{site.name}<br />{address}</address>
      <p><a href={site.map}>{es ? "Ubicación en Google Maps" : "Location on Google Maps"}</a></p>
      {accessMap && <p><a href={accessMap}>{es ? "Ver el acceso en Google Maps" : "View the access point on Google Maps"}</a></p>}
    </section>
  );
}
