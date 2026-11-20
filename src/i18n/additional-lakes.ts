type LakeText = {
  intro: string;
  transport: string;
  steps: string[];
  access: string;
  history: string;
  highlights: string;
  advice: string;
  photography: string;
  faq: [string, string][];
};

type Lake = {
  name: string;
  locality: string;
  accessQuery: string;
  photoFile: string;
  photographer: string;
  width: number;
  height: number;
  inventory?: string;
  en: LakeText;
  es: LakeText;
};

export const additionalLakes = {
  paron: {
    name: "Laguna Parón",
    locality: "Caraz, Huaylas",
    accessQuery: "Laguna Parón acceso, Caraz, Áncash, Perú",
    photoFile: "Laguna Paron.jpg",
    photographer: "Harce92",
    width: 960,
    height: 540,
    inventory: "561",
    en: {
      intro: "Parón is the largest lake in Huascarán National Park. The Caraz approach ends in a long glacial basin ringed by Cordillera Blanca peaks.",
      history: "Glacial meltwater from peaks including Caraz, Huandoy and Pirámide feeds the basin. The scale of the lake is part of what distinguishes Parón from the smaller lakes reached on foot around Huaraz.",
      transport: "Travel from Huaraz along the Callejón de Huaylas to Caraz. The final road runs up the Parón valley. Arrange the lake transfer and return pickup before leaving Caraz.",
      steps: ["Meet your operator in Caraz and confirm the road is open.", "Visit the permitted lakeshore near the end of the road.", "Add the viewpoint only if the path is open and you have time before pickup."],
      access: "Ask the operator to confirm the current checkpoint, applicable fee and permitted areas. Budget for the road transfer separately from admission.",
      highlights: "Follow the long axis of the lake with your eye to the peaks at the far end. Then look to the steep valley walls for a sense of the basin’s depth.",
      advice: "The drive is a significant part of the day. Allow a return buffer before onward travel from Caraz.",
      photography: "From a permitted shore position, use the long axis of the water to frame the distant peaks. Keep clear of the road and exposed slopes.",
      faq: [["Is it the same trip as Laguna 69?", "No. Parón is approached through Caraz, while Laguna 69 is a hike from Cebollapampa."], ["Is a shore visit possible without the viewpoint?", "Plan the shore as the main stop and verify permitted access with your operator. The viewpoint is a separate walking option."]],
    },
    es: {
      intro: "Parón es la laguna más extensa del Parque Nacional Huascarán. La vía desde Caraz termina junto a una cuenca glaciar alargada, rodeada de nevados.",
      history: "La cubeta recibe aguas del deshielo de montañas como Caraz, Huandoy y Pirámide. La escala de Parón la distingue de las lagunas más pequeñas a las que se llega a pie desde el entorno de Huaraz.",
      transport: "Desde Huaraz, recorre el Callejón de Huaylas hasta Caraz. El último tramo asciende por la quebrada Parón. Acuerda el traslado a la laguna y el recojo antes de salir de Caraz.",
      steps: ["Reúnete con el operador en Caraz y confirma el estado de la vía.", "Visita la orilla habilitada cerca del final del camino.", "Añade el mirador solo si el sendero está abierto y tienes margen antes del recojo."],
      access: "Confirma con el operador el control de acceso, la tarifa vigente y las zonas habilitadas. Distingue el precio del traslado del de la entrada.",
      highlights: "Sigue con la vista el eje largo de la laguna hasta las montañas del fondo. Las paredes laterales permiten apreciar la profundidad de la quebrada.",
      advice: "El viaje por carretera ocupa buena parte de la salida. Deja margen para volver a Caraz antes de tu siguiente traslado.",
      photography: "Desde la ribera habilitada, usa el eje del agua para encuadrar los nevados del fondo, lejos de la carretera y de las laderas expuestas.",
      faq: [["¿Es la misma excursión que Laguna 69?", "Parón se visita por Caraz. La caminata a la Laguna 69 empieza en Cebollapampa."], ["¿Se puede visitar la orilla sin subir al mirador?", "Puedes centrar la visita en la orilla, según el acceso habilitado. El mirador es una caminata aparte."]],
    },
  },
  churup: {
    name: "Laguna Churup",
    locality: "Huaraz",
    accessQuery: "Pitec inicio sendero Laguna Churup, Huaraz, Áncash, Perú",
    photoFile: "Laguna Churup.jpg",
    photographer: "Huandy Laguna Ibarra",
    width: 960,
    height: 720,
    inventory: "756",
    en: {
      intro: "A high lake fed by meltwater from Nevado Churup. Reaching the shore involves a mountain hike from Pitec above Huaraz.",
      history: "The lake is named for the mountain that feeds it. Its basin and rocky outlet make the connection between the glacier and the lake especially visible.",
      transport: "Arrange transport from Huaraz toward Llupa and Pitec. Confirm the precise Pitec drop-off and pickup. The last part of the trip is on foot.",
      steps: ["Meet at the agreed trail entrance at Pitec.", "Follow the route selected by your operator based on the day’s trail conditions.", "View the lake from permitted ground and return to the agreed pickup point."],
      access: "Check admission and the open trail options before departure. Ask your operator how steep or exposed the chosen approach is.",
      highlights: "Watch how the lake changes color between the shallow edge and the deeper basin. The rocky terrain above the shore is distinct from the lower approach.",
      advice: "Allow time for the climb and the return, even when your starting point is close to Huaraz by road.",
      photography: "Use a stable shore position to frame the water below Nevado Churup. Changing light makes it worth looking from two permitted viewpoints.",
      faq: [["Can the driver reach the lake?", "No. The vehicle takes you to the Pitec approach. The remaining journey is a hike."], ["Can I combine this with a city visit?", "Avoid a tight fixed-time booking afterward. Trail conditions and the group’s pace determine the actual return."]],
    },
    es: {
      intro: "Laguna altoandina alimentada por el deshielo del nevado Churup. Para llegar a la orilla se camina desde Pitec, en las alturas de Huaraz.",
      history: "La laguna toma el nombre del nevado que la alimenta. Su cubeta y el desagüe rocoso permiten apreciar la conexión entre la montaña y el agua.",
      transport: "Coordina el traslado desde Huaraz hacia Llupa y Pitec. Confirma el punto exacto para bajar y el lugar de recojo. El último tramo se hace a pie.",
      steps: ["Reúnete en el acceso acordado en Pitec.", "Sigue la variante que indique el operador según el estado del sendero.", "Observa la laguna desde el terreno habilitado y regresa al punto de recojo."],
      access: "Consulta la entrada y las variantes abiertas antes de salir. Pregunta al operador por las pendientes y los tramos expuestos de la ruta elegida.",
      highlights: "Observa cómo varía el color del agua entre las orillas someras y el centro. El terreno rocoso junto a la laguna contrasta con el acceso inferior.",
      advice: "Deja tiempo para la subida y el regreso, aunque Pitec quede cerca de Huaraz por carretera.",
      photography: "Desde un punto firme de la orilla, encuadra la laguna con el nevado Churup. La luz cambia y permite comparar dos perspectivas habilitadas.",
      faq: [["¿Se llega en vehículo a la laguna?", "El vehículo llega al acceso de Pitec. El resto del recorrido es a pie."], ["¿Puedo combinarla con una visita en la ciudad?", "Evita una reserva inmediata al regreso. El estado del sendero y el ritmo del grupo determinan la hora real de vuelta."]],
    },
  },
  llaca: {
    name: "Laguna Llaca",
    locality: "Independencia, Huaraz",
    accessQuery: "Quebrada Llaca acceso, Independencia, Huaraz, Áncash, Perú",
    photoFile: "Laguna Llaca, en la quebrada del mismo nombre 01.jpg",
    photographer: "Carlo Brescia",
    width: 960,
    height: 540,
    inventory: "757",
    en: {
      intro: "A glacial lake at the upper end of the Llaca valley, east of Independencia in the province of Huaraz.",
      history: "Llaca occupies a basin below the glacier of the same name. The lake, the glacier above it and the valley below illustrate different parts of a single glacial landscape.",
      transport: "Approach from the Independencia side of Huaraz and arrange a vehicle for the Llaca valley road. Confirm where vehicles must stop and where the walking segment starts.",
      steps: ["Confirm road conditions and the turnaround point with your operator.", "Enter the Llaca valley and walk the permitted approach from the drop-off.", "Observe the lake and glacier from the approved area, then return to the vehicle."],
      access: "Ask about current sector access, the applicable park fare and any restrictions around the glacial lake.",
      highlights: "View the basin and the glacier above it in the same sightline. Look back down the valley on return to see the contrast between the upper basin and the approach.",
      advice: "Treat Llaca as a valley trip, with time for the road and any final walk. Ask your driver to wait at an agreed location.",
      photography: "Frame the lake beneath the glacier from the approved visitor area. A second image looking back down the valley explains the approach.",
      faq: [["Is Llaca another name for Churup?", "No. Llaca and Churup are different lakes with different road approaches."], ["Does the road always reach the start of the walk?", "Confirm the drop-off before leaving Huaraz. Road conditions and park restrictions can alter the final approach."]],
    },
    es: {
      intro: "Laguna glaciar en la parte alta de la quebrada Llaca, al este de Independencia, en la provincia de Huaraz.",
      history: "Llaca ocupa una cubeta bajo el glaciar del mismo nombre. La laguna, el hielo que se ve arriba y la quebrada de acceso ilustran distintas partes de un mismo paisaje glaciar.",
      transport: "Sal por Independencia y coordina un vehículo para la vía de la quebrada Llaca. Confirma dónde termina el tramo vehicular y dónde empieza la caminata.",
      steps: ["Confirma con el operador el estado de la carretera y el punto de retorno.", "Entra en la quebrada y sigue el tramo a pie desde el lugar habilitado.", "Observa la laguna y el glaciar desde la zona autorizada y vuelve al vehículo."],
      access: "Consulta el acceso al sector, la tarifa aplicable y las restricciones vigentes cerca de la laguna glaciar.",
      highlights: "Observa la cubeta y el glaciar superior en la misma línea de vista. Al volver, mira hacia la quebrada para apreciar el contraste con el camino de acceso.",
      advice: "Calcula tiempo tanto para la carretera como para la caminata final. Acuerda con el conductor un lugar concreto de espera.",
      photography: "Encuadra la laguna bajo el glaciar desde la zona de visita autorizada. Una segunda toma hacia la quebrada ayuda a mostrar el camino de llegada.",
      faq: [["¿Llaca es otro nombre de Churup?", "Son dos lagunas distintas y tienen accesos diferentes."], ["¿La carretera siempre llega al inicio de la caminata?", "Confirma el lugar de desembarque antes de salir de Huaraz. El estado de la vía y las restricciones pueden cambiar el último tramo."]],
    },
  },
  orconcocha: {
    name: "Laguna Orconcocha",
    locality: "Yungay",
    accessQuery: "Laguna Orconcocha, carretera Yungay Yanama, Áncash, Perú",
    photoFile: "Laguna Orconcocha vista quebrada Llanganuco.jpg",
    photographer: "LizMejiaPe",
    width: 787,
    height: 1050,
    en: {
      intro: "Orconcocha is the second Llanganuco lake when traveling up the valley from Yungay, beyond Chinancocha.",
      history: "The name is commonly translated as ‘male lake,’ the counterpart to Chinancocha. Both lakes occupy the same steep glacial valley below Huascarán and Huandoy.",
      transport: "From Yungay, enter through the Llanganuco checkpoint and continue past Chinancocha toward the upper valley. Ask the operator which stop is permitted at Orconcocha.",
      steps: ["Check whether the itinerary continues beyond Chinancocha.", "Pass the first lake and stop only at a permitted point near Orconcocha.", "Compare the view along the valley with the shore view at Chinancocha on the return."],
      access: "Confirm the current Llanganuco admission arrangements and a permitted place to stop. A combined itinerary does not guarantee shore access at both lakes.",
      highlights: "Look for the change in perspective beyond the first lake. The shape of the valley is as important to this stop as the color of the water.",
      advice: "Specify Orconcocha by name when booking. An itinerary advertised simply as Llanganuco may focus on Chinancocha.",
      photography: "From a designated stop with a clear valley view, frame the bend of the lake against the rock walls. Keep the road shoulder clear.",
      faq: [["Is the first roadside lake Orconcocha?", "From Yungay the first lake is Chinancocha. Orconcocha is farther up the same valley."], ["Is this the Laguna 69 trailhead?", "No. The trailhead at Cebollapampa is a separate stop farther along the itinerary."]],
    },
    es: {
      intro: "Orconcocha es la segunda laguna de Llanganuco al ascender desde Yungay, después de Chinancocha.",
      history: "Su nombre suele traducirse como «laguna macho», en pareja con Chinancocha. Ambas ocupan la misma quebrada glaciar entre el Huascarán y el Huandoy.",
      transport: "Desde Yungay, entra por el puesto de control de Llanganuco y continúa más allá de Chinancocha. Pregunta al operador en qué punto está permitido detenerse cerca de Orconcocha.",
      steps: ["Comprueba que la excursión continúe después de Chinancocha.", "Pasa la primera laguna y detente en un punto habilitado cerca de Orconcocha.", "Al regresar, compara la vista del valle con la perspectiva desde Chinancocha."],
      access: "Confirma las condiciones de entrada a Llanganuco y el lugar permitido para detenerse. Un recorrido combinado puede no incluir acceso a las dos orillas.",
      highlights: "Fíjate en cómo cambia la perspectiva más allá de la primera laguna. El perfil de la quebrada es tan característico como el color del agua.",
      advice: "Menciona Orconcocha al reservar. Una salida anunciada como Llanganuco puede centrarse en Chinancocha.",
      photography: "Desde una parada habilitada con vista despejada, encuadra la curva de la laguna con las paredes rocosas. Deja libre el arcén.",
      faq: [["¿La primera laguna desde Yungay es Orconcocha?", "Primero se llega a Chinancocha. Orconcocha queda más arriba en la misma quebrada."], ["¿Aquí empieza la caminata a la Laguna 69?", "El inicio del sendero está en Cebollapampa, una parada distinta del recorrido."]],
    },
  },
} satisfies Record<string, Lake>;

export const lakeEntries = additionalLakes as Record<keyof typeof additionalLakes, Lake>;
