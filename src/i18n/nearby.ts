import { lakeEntries } from "./additional-lakes";

const originalLakes = {
  "laguna-69": {
    name: "Laguna 69",
    elevation: "4,604 m",
    mapUrl: "https://www.google.com/maps?cid=14697443668698057533",
    accessQuery: "Cebollapampa, Yungay, Áncash, Perú",
    photo: "https://commons.wikimedia.org/wiki/File:Laguna_69,_Peru_(Unsplash).jpg",
    photographer: "Rycardo Rycardo",
    inventory: "2089",
    review: { score: "4.8", count: 781, source: "https://wanderlog.com/es/place/details/103849/laguna-69" },
    en: {
      intro: "A glacial lake in the Quebrada Demanda valley, reached on foot from Cebollapampa. The lake is a separate stop from the roadside Llanganuco lakes.",
      transport: "Arrange pickup in Huaraz or Yungay with a SERNANP-authorized operator. The road follows the Yungay–Yanama corridor to Cebollapampa. The lake itself is reached by trail.",
      steps: ["Confirm pickup, admission and the return time with an authorized operator.", "Start at Cebollapampa and follow the route into Quebrada Demanda with your group.", "View the lake and the slopes of Chacraraju from the shore, then return to the same trailhead."],
      access: "SERNANP requires an authorized operator for the Laguna 69 circuit. Ask about admission, route-specific rates and current access before departure.",
    },
    es: {
      intro: "Laguna de origen glaciar en la quebrada Demanda, accesible a pie desde Cebollapampa. Es una visita distinta de la parada junto a las lagunas de Llanganuco.",
      transport: "Coordina el recojo en Huaraz o Yungay con un operador autorizado por el SERNANP. El acceso sigue la carretera Yungay–Yanama hasta Cebollapampa. Desde allí se continúa a pie.",
      steps: ["Confirma el recojo, la entrada y la hora de regreso con el operador autorizado.", "Empieza en Cebollapampa y sigue con tu grupo el sendero hacia la quebrada Demanda.", "Observa la laguna y las laderas del Chacraraju desde la orilla y vuelve al mismo inicio del sendero."],
      access: "El SERNANP exige un operador autorizado para el circuito de la Laguna 69. Consulta la entrada, la tarifa específica y el estado del acceso antes de salir.",
    },
  },
  chinancocha: {
    name: "Laguna Chinancocha",
    elevation: "3,820 m",
    mapUrl: "https://www.google.com/maps?cid=13297246857030555112",
    accessQuery: "Puesto de Control Llanganuco, Yungay, Perú",
    photo: "https://commons.wikimedia.org/wiki/File:Laguna_Chinancocha.jpg",
    photographer: "MariCOAP",
    inventory: "566",
    review: { score: "4.7", count: 424, source: "https://wanderlog.com/place/details/9850147/llanganuco-chinancocha" },
    en: {
      intro: "The first of the two Llanganuco lakes on the approach from Yungay. Chinancocha sits in a narrow valley between Huascarán and Huandoy, with native queñual woodland along the shore.",
      transport: "From Yungay, follow the road toward Yanama to the Llanganuco checkpoint, then continue to Chinancocha. The tourism inventory lists roughly 25 km from Yungay over the two road segments.",
      steps: ["Confirm road access and the pickup point before leaving Yungay.", "Pass the Llanganuco checkpoint and continue to Chinancocha.", "Explore the designated shoreline paths. Check with the operator before adding Orconcocha farther up the valley."],
      access: "Check the park's general admission and the status of the Llanganuco sector. Ask whether the operator includes the park ticket and how much shoreline walking the stop involves.",
    },
    es: {
      intro: "La primera de las dos lagunas de Llanganuco al llegar desde Yungay. Chinancocha ocupa un valle estrecho entre el Huascarán y el Huandoy, con bosque nativo de queñuales junto a la orilla.",
      transport: "Desde Yungay, sigue la vía hacia Yanama hasta el puesto de control de Llanganuco y continúa a Chinancocha. El inventario turístico registra unos 25 km desde Yungay al sumar ambos tramos.",
      steps: ["Confirma el estado de la vía y el punto de recojo antes de salir de Yungay.", "Pasa por el puesto de control de Llanganuco y continúa a Chinancocha.", "Recorre los senderos habilitados junto a la orilla. Consulta al operador antes de añadir Orconcocha, más arriba en el valle."],
      access: "Consulta la tarifa general del parque y el estado del sector Llanganuco. Pregunta si el operador incluye la entrada y cuánto se camina durante la parada.",
    },
  },
};
export type NearbySlug = keyof typeof originalLakes | keyof typeof lakeEntries;

type NearbyPlace = {
  name: string;
  locality: string;
  elevation?: string;
  mapUrl: string;
  accessQuery: string;
  photo: string;
  photographer: string;
  width: number;
  height: number;
  inventory?: string;
  review?: { score: string; count: number; source: string };
  en: { intro: string; transport: string; steps: string[]; access: string };
  es: { intro: string; transport: string; steps: string[]; access: string };
};

function lakePlace(lake: (typeof lakeEntries)[keyof typeof lakeEntries]): NearbyPlace {
  return {
    ...lake,
    mapUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${lake.name}, ${lake.locality}, Áncash, Perú`)}`,
    photo: `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(lake.photoFile.replaceAll(" ", "_"))}`,
  };
}

export const nearby: Record<NearbySlug, NearbyPlace> = {
  paron: lakePlace(lakeEntries.paron),
  churup: lakePlace(lakeEntries.churup),
  llaca: lakePlace(lakeEntries.llaca),
  orconcocha: lakePlace(lakeEntries.orconcocha),
  "laguna-69": { ...originalLakes["laguna-69"], locality: "Yungay", width: 1200, height: 800 },
  chinancocha: { ...originalLakes.chinancocha, locality: "Yungay", width: 1200, height: 900 },
};
export function nearbyPath(slug: string, locale: "en" | "es") {
  return locale === "es" ? `/es/explorar/${slug}` : `/explore/${slug}`;
}
export const parkInfo = "https://visitaareasnaturales.sernanp.gob.pe/anps/parque-nacional-huascaran/";
export const parkMap = "https://maps.app.goo.gl/rSbVEjRWfoWmCdiS9";
