import { parkInfo, parkMap } from "@/i18n/nearby";

export default function ParkVisitDetails({ locale }: { locale: "en" | "es" }) {
  const es = locale === "es";
  return (
    <section className="info-card" style={{ marginTop: "1.5rem" }}>
      <h2>{es ? "Información del parque" : "Park information"}</h2>
      <dl>
        <dt>{es ? "Ubicación" : "Location"}</dt>
        <dd>{es ? "Cordillera Blanca, Áncash, Perú" : "Cordillera Blanca, Áncash, Peru"}</dd>
        <dt>{es ? "Gestión" : "Management"}</dt>
        <dd>{es ? "Servicio Nacional de Áreas Naturales Protegidas por el Estado (SERNANP)" : "Peru’s National Service of Natural Protected Areas (SERNANP)"}</dd>
        <dt>{es ? "Transporte" : "Transport"}</dt>
        <dd>{es ? "Coordina el recojo desde Huaraz con un operador autorizado. Para Llanganuco y Laguna 69 el acceso es por Yungay; para Santa Cruz, confirma el punto de inicio con el operador." : "Arrange pickup from Huaraz with an authorized operator. Approach Llanganuco and Laguna 69 via Yungay; confirm the starting trailhead with your operator for Santa Cruz."}</dd>
      </dl>
      <p><a href={parkInfo}>{es ? "Información oficial del SERNANP" : "Official SERNANP visitor information"}</a></p>
      <h3>{es ? "Valoración y opiniones del parque" : "Park rating and reviews"}</h3>
      <p><a href={parkMap}>{es ? "Ver la puntuación y las opiniones actuales en Google Maps" : "See the current park rating and reviews on Google Maps"}</a></p>
    </section>
  );
}
