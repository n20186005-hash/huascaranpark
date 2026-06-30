export function generateSchema(locale: string) {
  const baseUrl = `https://${process.env.CURRENT_SITE_DOMAIN || "huascaranpark.com"}`;
  const lang = locale === "en" ? "en-US" : locale === "es" ? "es-PE" : locale === "qu" ? "qu-PE" : "zh-CN";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["TouristAttraction", "NationalPark", "WorldHeritageSite"],
        "name": locale === "en" ? "Huascarán National Park" : locale === "es" ? "Parque Nacional Huascarán" : locale === "qu" ? "Huascarán Nasyunal Pak" : "瓦斯卡兰国家公园",
        "description": locale === "en"
          ? "Huascarán National Park is a UNESCO World Heritage Site located in the Cordillera Blanca mountain range in Peru. It features towering snow-capped peaks, glaciers, highland lakes, and unique Andean biodiversity."
          : locale === "es"
          ? "El Parque Nacional Huascarán es un Sitio del Patrimonio Mundial de la UNESCO ubicado en la cordillera Blanca en Perú. Cuenta con imponentes picos nevados, glaciares, lagunas de altura y única biodiversidad andina."
          : locale === "qu"
          ? "Huascarán Nasyunal Pak nisqa UNESCO Pachamama wiñay kawsay, Piruw Blanca urqukunapi. Rit'i urqukuna, rit'i mayukuna, quchakuna, Andino kawsay."
          : "瓦斯卡兰国家公园是位于秘鲁布兰卡山脉的联合国教科文组织世界遗产。拥有高耸的雪峰、冰川、高原湖泊和独特的安第斯生物多样性。",
        "url": `${baseUrl}/${locale}`,
        "touristType": ["NationalPark", "WorldHeritageSite", "Mountain", "Glacier", "Trekking", "Wildlife"],
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -9.121667,
          "longitude": -77.601111
        },
        "additionalProperty": [
          {
            "@type": "PropertyValue",
            "name": "attractionType",
            "value": "National Park, UNESCO World Heritage Site",
            "description": "National park featuring the highest tropical mountain range in the world"
          },
          {
            "@type": "PropertyValue",
            "name": "rating",
            "value": "4.7/5",
            "description": "Rated 4.7 out of 5 with 5,506 Google reviews"
          },
          {
            "@type": "PropertyValue",
            "name": "elevation",
            "value": "6,768 meters (Huascarán summit)",
            "description": "Home to Huascarán, the highest peak in Peru and the tropics"
          }
        ],
        "isAccessibleForFree": false,
        "maximumAttendeeCapacity": 1000,
        "publicAccess": true,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "275M+J8Q",
          "addressLocality": "Yungay",
          "addressRegion": "Ancash",
          "addressCountry": "PE",
          "telephone": "+5143422086"
        },
        "subjectOf": [
          {
            "@type": "CreativeWork",
            "headline": locale === "en" ? "Huascarán National Park: Peru's Alpine Paradise" : locale === "es" ? "Parque Nacional Huascarán: Paraíso Alpino del Perú" : locale === "qu" ? "Huascarán Nasyunal Pak: Piruw Urqu Paraíso" : "瓦斯卡兰国家公园：秘鲁的高山天堂",
            "about": "Guide to Huascarán National Park, a UNESCO World Heritage Site in Peru featuring the world's highest tropical mountain range, glaciers, and unique Andean biodiversity"
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": `${baseUrl}/${locale}`
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": locale === "en" ? "Ancash Attractions" : locale === "es" ? "Atractivos de Ancash" : locale === "qu" ? "Ancash atractivokuna" : "安卡什大区景点",
            "item": `${baseUrl}/${locale}`
          }
        ]
      }
    ]
  };
}
