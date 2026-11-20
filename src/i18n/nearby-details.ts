import { lakeEntries } from "./additional-lakes";
import type { NearbySlug } from "./nearby";

export const nearbyDetails = {
  ...lakeEntries,
  "laguna-69": {
    en: {
      history: "Meltwater from Chacraraju feeds this glacial basin. When UNESCO listed Huascarán National Park in 1985, its deep valleys and glacial lakes were among the features that distinguished the protected landscape. Today SERNANP regulates the Laguna 69 circuit through authorized operators.",
      highlights: "Look for the change from the broad valley floor to the steep rock walls above the lake. At the shore, the outflow and the slopes of Chacraraju show how the water and the surrounding terrain fit together.",
      advice: "Set aside a full day from Huaraz. Confirm that your group’s plan accounts for the elevation and includes a clear turnaround time. Bring layers, water and footwear suited to a mountain trail.",
      photography: "From the permitted shore, use foreground rocks to frame the lake under Chacraraju. Take a second photo on the return, looking down the valley from the trail. Stay off loose slopes.",
      faq: [
        ["Can I drive to the lake?", "Vehicles take you to Cebollapampa. The final approach to the lake is on foot."],
        ["Is this the same visit as the Llanganuco lakes?", "No. Laguna 69 requires its own hike. Chinancocha is a separate roadside stop in the same sector."],
        ["Which ticket should I ask for?", "Give the operator the name Laguna 69, your travel date and your visitor category. SERNANP lists differentiated rates for this circuit."],
      ],
    },
    es: {
      history: "El deshielo del Chacraraju alimenta esta cubeta glaciar. Cuando la UNESCO inscribió el Parque Nacional Huascarán en 1985, las quebradas profundas y las lagunas glaciares destacaron entre los rasgos del paisaje protegido. Hoy el SERNANP ordena la visita a la Laguna 69 mediante operadores autorizados.",
      highlights: "Observa el paso del fondo amplio de la quebrada a las paredes rocosas que dominan la laguna. En la orilla, la salida del agua y las laderas del Chacraraju permiten leer el relieve del lugar.",
      advice: "Reserva un día completo desde Huaraz. Confirma que el plan del grupo tenga en cuenta la altitud y fije una hora de retorno. Lleva ropa en capas, agua y calzado de senderismo.",
      photography: "Desde la orilla habilitada, enmarca la laguna bajo el Chacraraju usando las rocas en primer plano. Al volver, toma otra foto desde el sendero mirando hacia la quebrada. Evita las laderas sueltas.",
      faq: [
        ["¿Se puede llegar en auto a la laguna?", "El vehículo llega hasta Cebollapampa. El último tramo hasta la laguna se hace a pie."],
        ["¿Es la misma visita que las lagunas de Llanganuco?", "La Laguna 69 requiere su propia caminata. Chinancocha es una parada distinta junto a la carretera del mismo sector."],
        ["¿Qué entrada debo solicitar?", "Indica al operador Laguna 69, tu fecha y tu categoría de visitante. El SERNANP publica tarifas diferenciadas para este circuito."],
      ],
    },
  },
  chinancocha: {
    en: {
      history: "Chinancocha is one of the two lakes that give the Llanganuco valley its identity. The lake is part of Huascarán National Park, established in 1975 and inscribed on UNESCO’s World Heritage List in 1985. The name is commonly rendered as ‘female lake,’ paired with Orconcocha farther along the valley.",
      highlights: "Look from the roadside approach to the steep valley walls, then turn toward the native queñual trees lining the shore. Where the path allows, compare the sheltered shoreline with the open water that catches the wind.",
      advice: "Plan this as a lakeside visit from Yungay. Agree on a pickup point before the driver leaves and ask which sections of the shoreline are open. The road reaches the lake area, but the exact walking surface varies.",
      photography: "From a permitted shoreline path, frame the turquoise water between both sides of the valley. Use a queñual as foreground where the trail gives you space, and leave the boarding area clear.",
      faq: [
        ["Where should the driver drop me off?", "Ask for the designated Chinancocha stop beyond the Llanganuco checkpoint. Confirm the return pickup at the same time."],
        ["Are Chinancocha and Orconcocha the same lake?", "They are two lakes in the Llanganuco valley. Chinancocha is reached first from Yungay."],
        ["Can I add Laguna 69 to the same trip?", "Speak with the operator first. Laguna 69 requires a separate trail plan and authorization, even though both are in the Llanganuco sector."],
      ],
    },
    es: {
      history: "Chinancocha es una de las dos lagunas que dan identidad a la quebrada de Llanganuco. Forma parte del Parque Nacional Huascarán, creado en 1975 e inscrito en la Lista del Patrimonio Mundial en 1985. Su nombre se traduce habitualmente como «laguna hembra», en pareja con Orconcocha, más arriba en el valle.",
      highlights: "Observa las paredes de la quebrada desde el acceso y, junto a la orilla, fíjate en los queñuales. Donde lo permita el sendero, compara la ribera resguardada con el agua abierta expuesta al viento.",
      advice: "Organiza la visita como una parada junto a la laguna desde Yungay. Acuerda el lugar de recojo antes de que se retire el conductor y pregunta qué tramos de la orilla están abiertos. La vía llega a la zona de la laguna, pero el firme de los senderos varía.",
      photography: "Desde un sendero habilitado, encuadra el agua turquesa entre las dos laderas de la quebrada. Usa un queñual en primer plano donde haya espacio y deja libre la zona de embarque.",
      faq: [
        ["¿Dónde debo bajar del vehículo?", "Pide la parada habilitada de Chinancocha, después del puesto de control de Llanganuco, y confirma el recojo de regreso."],
        ["¿Chinancocha y Orconcocha son la misma laguna?", "Son dos lagunas de la quebrada Llanganuco. Desde Yungay se llega primero a Chinancocha."],
        ["¿Puedo añadir la Laguna 69 a la misma salida?", "Consúltalo con el operador. La Laguna 69 requiere una caminata planificada por separado y un operador autorizado."],
      ],
    },
  },
} satisfies Record<NearbySlug, Record<"en" | "es", {
  history: string; highlights: string; advice: string; photography: string; faq: [string, string][];
}>>;
