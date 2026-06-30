export type Locale = "zh" | "en" | "es" | "qu";
export type LinkItem = { name: string; url: string };
export type FAQItem = { question: string; answer: string };
export type TransportOption = { name: string; time: string; price: string; steps: string[] };
export type TimelineEvent = { period: string; description: string };
export type HistorySection = { subtitle: string; content: string };
export type EcologySection = { subtitle: string; content: string };
export type CultureSection = { subtitle: string; content: string };

export type Translations = {
  nav: { about: string; history: string; ecology: string; culture: string; visiting: string; transportation: string; tips: string; gallery: string; reviews: string; faq: string; location: string };
  hero: { tagline: string; title: string; subtitle: string; cta: string };
  rating: { reviews: string; source: string };
  about: { title: string; p1: string; p2: string; highlights: { title: string; items: string[] }; timeline: { title: string; events: TimelineEvent[] }; management: { title: string; content: string } };
  history: { title: string; intro: string; sections: HistorySection[] };
  ecology: { title: string; sections: EcologySection[] };
  culture: { title: string; intro: string; sections: CultureSection[]; events: { title: string; items: string[] } };
  visiting: { title: string; hours: { title: string; content: string; note: string }; price: { title: string; content: string; note: string }; duration: { title: string; content: string; note: string }; birds: { title: string; content: string }; bring: { title: string; items: string[] }; route: { title: string; content: string } };
  transportation: { title: string; airport: { title: string; content: string; options: TransportOption[] }; city: { title: string; content: string; steps: string[] }; selfDrive: { title: string; content: string; steps: string[] } };
  tips: { title: string; items: string[] };
  gallery: { title: string; viewMore: string };
  reviews: { title: string; subtitle: string; viewMore: string };
  faq: { title: string; subtitle: string; items: FAQItem[] };
  location: { title: string; address: string; openMaps: string };
  footer: { callToAction: string; text: string; made: string; linksTitle: string; links: LinkItem[] };
};

export const translations: Record<Locale, Translations> = {
  zh: {
    nav: { about: "景点概览", history: "历史沿革", ecology: "生态环境", culture: "文化与活动", visiting: "游览指南", transportation: "交通接驳", tips: "游览建议", gallery: "照片画廊", reviews: "游客评价", faq: "常见问题", location: "地图位置" },
    hero: { tagline: "秘鲁安卡什大区 · 世界自然遗产", title: "瓦斯卡兰国家公园", subtitle: "Parque Nacional Huascarán · 布兰卡山脉", cta: "探索公园" },
    rating: { reviews: "条评价", source: "Google 评论" },
    about: {
      title: "景点概览",
      p1: "瓦斯卡兰国家公园（Parque Nacional Huascarán）位于秘鲁安卡什大区，是联合国教科文组织世界自然遗产，也是世界上热带地区最高的山脉——布兰卡山脉（Cordillera Blanca）的核心保护区。公园内拥有27座海拔6000米以上的雪峰，其中包括秘鲁最高峰瓦斯卡兰峰（6768米）。\n\n公园面积约3400平方公里，涵盖了从高山冰川到热带云雾林的多种生态系统。这里是众多珍稀动植物的家园，包括眼镜熊、安第斯神鹰、维多利亚女王凤梨等。公园也是克丘亚文化的发源地之一，拥有丰富的文化遗产和传统社区。",
      p2: "瓦斯卡兰国家公园不仅是一个自然保护区，也是世界知名的徒步和登山胜地。每年吸引着来自世界各地的游客前来探索其壮丽的山川、冰川、高原湖泊和独特的安第斯生物多样性。公园致力于生态保护和可持续发展，让游客在欣赏自然美景的同时，也能了解和保护这一珍贵的世界遗产。",
      highlights: { title: "景点亮点", items: ["世界遗产: 联合国教科文组织世界自然遗产（1985年）", "最高峰: 瓦斯卡兰峰，海拔6768米，秘鲁最高峰", "雪峰数量: 27座6000米以上的雪峰", "生态系统: 从高山冰川到热带云雾林", "珍稀物种: 眼镜熊、安第斯神鹰、维多利亚女王凤梨"] },
      timeline: { title: "公园发展沿革", events: [
        { period: "1975年", description: "瓦斯卡兰国家公园正式成立，旨在保护布兰卡山脉的独特生态系统和生物多样性。" },
        { period: "1985年", description: "被联合国教科文组织列入世界自然遗产名录，确认其全球重要的自然价值。" },
        { period: "生态保护", description: "公园管理局与当地社区合作，实施多项生态保护项目，保护眼镜熊、安第斯神鹰等珍稀物种及其栖息地。" },
        { period: "可持续旅游", description: "在保护环境的前提下，逐步推广可持续旅游，让游客了解安第斯生态和文化，同时保持公园的原始风貌。" }
      ]},
      management: { title: "管理与维护", content: "瓦斯卡兰国家公园由秘鲁国家自然保护区管理局（SERNANP）管理维护。公园与当地克丘亚社区密切合作，共同保护这一世界遗产。请遵守公园规定，不要乱扔垃圾，不要采摘植物，不要惊扰野生动物，共同保护这片珍贵的自然遗产。" }
    },
    history: {
      title: "历史沿革",
      intro: "瓦斯卡兰国家公园的历史可以追溯到1975年，当时秘鲁政府认识到布兰卡山脉独特的生态价值和生物多样性，决定建立国家公园进行保护。\n\n公园的建立不仅保护了自然生态，也保护了当地克丘亚文化的传统土地和文化遗产。今天，公园不仅是自然保护的典范，也是文化保护的典范。",
      sections: [
        { subtitle: "公园建立与保护", content: "1975年，瓦斯卡兰国家公园正式成立，面积达3400平方公里。公园的建立旨在保护布兰卡山脉的冰川、高山湖泊、河流和独特的安第斯生物多样性。公园内拥有世界上热带地区最高的山脉，是许多珍稀物种的唯一栖息地。" },
        { subtitle: "世界遗产认定", content: "1985年，瓦斯卡兰国家公园被联合国教科文组织列入世界自然遗产名录。这一认定确认了公园在全球生态和文化价值方面的重要性。公园不仅是自然保护的典范，也是安第斯文化和传统社区保护的典范。" }
      ]
    },
    ecology: {
      title: "生态环境",
      sections: [
        { subtitle: "🏔️ 高山生态系统：冰川与雪峰", content: "瓦斯卡兰国家公园最引人注目的是其壮丽的高山生态系统。公园内拥有27座海拔6000米以上的雪峰，其中瓦斯卡兰峰（6768米）是秘鲁最高峰，也是热带地区的最高峰。\n\n公园内分布着超过700平方公里的冰川，这些冰川是安第斯地区重要的淡水来源。随着全球气候变暖，冰川正在退缩，公园管理局正在实施监测和保护项目，以保护这一脆弱的冰川生态系统。\n\n除了冰川，公园内还有数百个高山湖泊（cochas），如著名的Llanganuco湖泊群、Parón湖等。这些湖泊由冰川融水形成，湖水呈独特的绿松石色，四周环绕着雪峰，景色极为壮观。" },
        { subtitle: "🌿 生物多样性：从高山到云雾林", content: "瓦斯卡兰国家公园的海拔从2000米到6768米，涵盖了多种生态系统，因此拥有极高的生物多样性：\n\n• 植物：公园内记录有超过1200种植物，包括独特的普亚凤梨（Puya raimondii），这种巨大的凤梨科植物可以长到10米高，每80-100年才开一次花。\n• 鸟类：超过160种鸟类，包括安第斯神鹰（Vultur gryphus）、安第斯秃鹫等。\n• 哺乳动物：包括眼镜熊（Tremarctos ornatus，南美洲唯一的熊类）、美洲狮、骆马（Vicuña）、羊驼等。\n• 两栖动物：多种特有的高原蛙类。\n\n公园的生态系统从高山苔原（puna）到高山湿地（bofedales），再到东坡的热带云雾林，每一层都有其独特的动植物群落。" },
        { subtitle: "♻️ 环保倡议：保护脆弱的高山生态", content: "瓦斯卡兰国家公园的生态系统非常脆弱，特别是冰川和高山湿地。全球气候变暖、旅游活动、放牧等都可能对公园生态造成影响。\n\n作为负责任的游客，请遵守以下原则：\n• 不要离开标记的道路和徒步路线\n• 不要采摘植物或干扰野生动物\n• 将所有垃圾带走，不要留在公园内\n• 不要在湖泊或河流中使用肥皂或洗发水\n• 尊重当地社区的文化和传统\n\n共同守护这片世界遗产，让壮丽的布兰卡山脉永续留存。" }
      ]
    },
    culture: {
      title: "文化与传说",
      intro: "瓦斯卡兰国家公园不仅是自然保护的典范，也是克丘亚文化的重要保护地。公园内及其周边地区居住着许多克丘亚社区，他们保持着传统的生活方式和文化习俗。",
      sections: [
        { subtitle: "🏔️ 克丘亚文化：安第斯的传统守护者", content: "瓦斯卡兰国家公园周边地区是克丘亚文化的重要发源地之一。当地的克丘亚社区（comunidades campesinas）世代居住在这里，守护着安第斯的传统知识和文化。\n\n克丘亚人有着深厚的自然崇拜传统，他们崇拜阿普（Apus，山神）、帕查妈妈（Pachamama，大地母亲）和因蒂（Inti，太阳神）。在克丘亚文化中，瓦斯卡兰峰被视为神圣的阿普，是力量和保护的象征。\n\n游客在公园内可能会遇到当地的克丘亚牧民，他们放牧着骆马、羊驼和羊群。这些社区的传统放牧方式与公园的生态保护目标相协调，是可持续利用自然资源的典范。" },
        { subtitle: "🎉 传统节日与活动", content: "公园周边的克丘亚社区保留着许多传统节日，这些节日通常与农业周期和自然崇拜相关：\n\n• 科尔卡节（Qoyllur Rit'i）：每年6月举行的传统节日，信徒们前往雪山朝圣。\n• 帕查妈妈节：庆祝大地母亲的节日，感谢大地的馈赠。\n• 动物标记节（Chaccu）：传统的骆马标记和剪毛活动，体现了可持续利用传统。\n\n游客如果恰逢这些节日，可以观察到克丘亚文化的传统仪式和庆祝活动，但请务必尊重当地文化和传统，在获得许可后再拍照或参与。" }
      ],
      events: { title: "推荐活动", items: [
        "徒步旅行：公园内有数条世界知名的徒步路线，如Santa Cruz trek、Huayhuash trek等",
        "登山：瓦斯卡兰峰是技术型登山者的终极挑战",
        "观鸟：观察安第斯神鹰、巨嘴鸟等高原鸟类",
        "摄影：壮丽的雪峰、冰川、高原湖泊是摄影爱好者的天堂",
        "文化交流：了解当地克丘亚社区的文化和传统",
        "生态教育：了解高山生态系统和生物多样性保护"
      ]}
    },
    visiting: {
      title: "游览指南",
      hours: { title: "开放时间", content: "一般为 06:00 – 18:00\n具体时间可能因季节和区域而异", note: "⚠️ 提醒：公园面积很大，不同入口的开放时间可能不同。建议提前查询或向公园管理处确认。" },
      price: { title: "门票费用", content: "外国游客：约 30 秘鲁索尔\n秘鲁游客：约 11 秘鲁索尔\n当地社区：免费", note: "具体费用和建议请提前查询或致电 +51 43 422 086 咨询。可能需要导游陪同进入某些区域。" },
      duration: { title: "建议游览时长", content: "建议预留 1 – 7 天", note: "若计划徒步，建议预留3-7天。一日游可以参观Llanganuco湖泊群等较易到达的景点。请根据体力和时间合理安排。" },
      birds: { title: "生态观察：安第斯生物多样性", content: "瓦斯卡兰国家公园是观察安第斯生物多样性的绝佳地点。在这里，您可以观察到：\n\n• 安第斯神鹰（Cóndor andino）：世界上最大的飞禽之一，翼展可达3.2米\n• 眼镜熊（Oso de anteojos）：南美洲唯一的熊类，公园内重要的保护物种\n• 骆马（Vicuña）：安第斯高原的特有动物，毛质极为优良\n• 普亚凤梨（Puya raimondii）：巨大的凤梨科植物，数十年才开一次花\n• 高原植物：多种适应高海拔环境的特有植物\n\n公园的生物多样性极为丰富，建议您慢慢观察，发现安第斯生态系统的独特之美。" },
      bring: { title: "游览建议物品", items: ["保暖衣物（高海拔地区温差大）", "防晒用品与墨镜（高海拔紫外线强）", "防蚊虫用品（低海拔地区）", "徒步鞋或登山鞋", "防水外套（山区天气多变）", "水和高能量食物", "氧气罐（如有高原反应）", "相机和备用电池", " trekking poles（徒步杖）", "睡袋（如计划过多天徒步）"] },
      route: { title: "推荐游览路线", content: "我们特别推荐以下瓦斯卡兰国家公园游览路线：\n\n1. 一日游路线：从Yungay或Caraz出发，前往Llanganuco湖泊群（Chinancocha和Orconcocha），欣赏壮丽的雪山倒影。\n2. Santa Cruz Trek（4-5天）：世界知名的徒步路线，穿越布兰卡山脉，欣赏多个6000米级雪峰。\n3. Huayhuash Trek（8-12天）：更具挑战性的徒步路线，被认为是世界上最美的徒步路线之一。\n4. 登山路线：需要专业向导和装备，攀登瓦斯卡兰峰或其他技术型山峰。\n\n请根据自身体力和经验选择合适的路线，并务必聘请当地向导。" }
    },
    transportation: {
      title: "交通接驳",
      airport: { title: "从利马或特鲁希略出发", content: "距离利马约 450 公里，车程约 8-10 小时。距离特鲁希略约 200 公里，车程约 4-5 小时。", options: [
        { name: "长途汽车(经济实惠)", price: "约 $20 - $40 美元", time: "约 8-10 小时", steps: ["在利马或特鲁希略乘坐长途汽车前往Yungay或Caraz", "到达后转乘当地交通前往公园入口", "建议提前了解班次时间并预订"] },
        { name: "包车/租车(最便捷)", price: "约 $150 - $250 美元", time: "约 8-10 小时", steps: ["租车或包车从利马前往Yungay", "沿途可欣赏安第斯山脉风光", "建议选择经验丰富的司机"] }
      ]},
      city: { title: "从Yungay或Caraz前往", content: "公园主要入口位于Yungay和Caraz附近，从这两个城镇前往十分方便。", steps: ["导航: 在 Google Maps 中输入 Parque Nacional Huascarán", "从Yungay出发约30分钟可到达Llanganuco入口", "从Caraz出发约1小时可到达Llanganuco入口"] },
      selfDrive: { title: "自驾前往", content: "从利马自驾前往公园非常方便，但需要注意高海拔路段。", steps: ["导航至 Parque Nacional Huascarán, Yungay, Perú", "道路状况良好，但部分路段海拔较高", "建议提前了解路线和路况，并准备应对高海拔反应"] }
    },
    tips: { title: "游览建议", items: [
      "建议提前申请入境许可，某些区域需要导游陪同",
      "高海拔地区，注意预防高原反应（Soroche）",
      "推荐早晨前往，天气较为稳定",
      "请做好防晒措施，高海拔紫外线极强",
      "建议携带保暖衣物，山区温差极大",
      "请注意保持公园整洁，将所有垃圾带走",
      "不要采摘植物或干扰野生动物",
      "建议聘请当地向导，既安全又支持社区经济",
      "建议提前了解天气情况，雨季（12月-3月）部分路线可能关闭",
      "尊重当地克丘亚社区的文化和传统"
    ] },
    gallery: { title: "精彩照片", viewMore: "在 Google Maps 查看更多相片" },
    reviews: { title: "游客评价", subtitle: "来自 Google Maps 的真实评价", viewMore: "在 Google Maps 查看更多评价" },
    faq: { title: "常见问题", subtitle: "深入了解瓦斯卡兰国家公园", items: [
      { question: "瓦斯卡兰国家公园的开放时间是？", answer: "公园一般为06:00-18:00开放，但具体时间可能因季节和区域而异。不同入口的开放时间也可能不同。建议提前向公园管理处确认，电话：+51 43 422 086。" },
      { question: "进入公园需要门票吗？费用是多少？", answer: "是的，进入公园需要购买门票。外国游客约30秘鲁索尔，秘鲁游客约11秘鲁索尔，当地社区免费。某些区域可能需要导游陪同。建议提前查询或致电咨询具体费用。" },
      { question: "瓦斯卡兰国家公园有什么特色？", answer: "瓦斯卡兰国家公园是联合国教科文组织世界自然遗产，拥有：\n1. 27座6000米以上的雪峰，包括秘鲁最高峰瓦斯卡兰峰（6768米）\n2. 超过700平方公里的冰川\n3. 数百个高山湖泊\n4. 极高的生物多样性，包括眼镜熊、安第斯神鹰等珍稀物种\n5. 克丘亚文化的传统社区" },
      { question: "公园有哪些推荐活动？适合什么水平的游客？", answer: "公园提供多种活动：\n1. 一日游：参观Llanganuco湖泊群等较易到达的景点，适合所有游客\n2. 徒步旅行：Santa Cruz trek（4-5天）、Huayhuash trek（8-12天）等，适合有经验的徒步者\n3. 登山：技术型登山，需要专业向导和装备\n4. 观鸟和野生动物观察：适合自然爱好者\n\n请根据自身体力和经验选择合适的活动。" },
      { question: "如何前往瓦斯卡兰国家公园？", answer: "公园位于秘鲁安卡什大区，主要入口在Yungay和Caraz附近。从利马乘坐长途汽车约8-10小时，从特鲁希略约4-5小时。具体导航可在 Google Maps 中搜索\"Parque Nacional Huascarán, Yungay, Perú\"。" },
      { question: "游览公园需要注意什么？有什么安全建议？", answer: "游览公园需要注意：\n1. 高海拔：注意预防高原反应，建议逐步适应海拔\n2. 天气：山区天气多变，需携带保暖衣物和防水外套\n3. 安全：某些区域需要导游陪同，不要独自前往偏僻区域\n4. 环保：将所有垃圾带走，不要干扰野生动物\n5. 文化：尊重当地克丘亚社区的文化和传统" },
      { question: "公园附近还有哪些值得一游的景点？", answer: "安卡什大区有许多值得游览的景点，包括：\n1. 昌昌古城（Chan Chan）——美洲最大的土砖古城，联合国教科文组织世界遗产\n2. 瓦拉斯（Huaraz）——安卡什大区首府，徒步者的重要基地\n3. 帕拉蒙国家公园（Parque Nacional del Río Abiseo）——另一处世界遗产\n4. 雷库埃峡谷（Cañón del Río Lunahuaná）——探险运动胜地\n5. 当地市场——购买安第斯传统手工艺品和特产" }
    ]},
    location: { title: "地图位置", address: "275M+J8Q, Yungay\n秘鲁安卡什大区", openMaps: "在 Google Maps 查看位置" },
    footer: { callToAction: "作为世界自然遗产，请与我们一起爱护环境、保护生态。保持公园整洁，共同维护这一珍贵的世界遗产。", text: "© 2026 瓦斯卡兰国家公园指南 · 保留所有权利。\n本网站是一个独立的第三方指南项目，致力于准确传播瓦斯卡兰国家公园信息。我们与秘鲁政府或其他官方机构没有任何关联。", made: "本网站是一个独立的第三方指南项目。为探索者与学习者而制。", linksTitle: "相关链接", links: [
      { name: "秘鲁外贸和旅游部", url: "https://www.gob.pe/mincetur" },
      { name: "秘鲁国家自然保护区管理局", url: "https://www.gob.pe/sernanp" },
      { name: "秘鲁国家旅游局官方指南", url: "https://www.peru.travel/es/atractivos/parque-nacional-huascaran" },
      { name: "安卡什大区旅游指南", url: "https://www.peru.travel/es/destinos/ancash" },
      { name: "安卡什大区政府", url: "https://regionancash.gob.pe/" },
      { name: "瓦斯卡兰国家公园官方访客指南", url: "https://visitaareasnaturales.sernanp.gob.pe/anps/parque-nacional-huascaran/" }
    ]}
  },

  en: {
    nav: { about: "Overview", history: "History", ecology: "Ecology", culture: "Culture & Activities", visiting: "Visit Guide", transportation: "Getting There", tips: "Travel Tips", gallery: "Photo Gallery", reviews: "Reviews", faq: "FAQ", location: "Location" },
    hero: { tagline: "Ancash, Peru · UNESCO World Heritage Site", title: "Huascarán National Park", subtitle: "Parque Nacional Huascarán · Cordillera Blanca", cta: "Explore the Park" },
    rating: { reviews: "reviews", source: "Google Reviews" },
    about: {
      title: "Overview",
      p1: "Huascarán National Park is located in the Ancash region of Peru. It is a UNESCO World Heritage Site and the core protected area of the Cordillera Blanca, the world's highest tropical mountain range. The park contains 27 snow-capped peaks over 6,000 meters, including Huascarán, the highest peak in Peru at 6,768 meters.\n\nCovering an area of approximately 3,400 square kilometers, the park encompasses multiple ecosystems from high mountain glaciers to tropical cloud forests. It is home to numerous rare species of flora and fauna, including the spectacled bear, Andean condor, and Puya raimondii. The park is also one of the birthplaces of Quechua culture, with rich cultural heritage and traditional communities.",
      p2: "Huascarán National Park is not only a natural protected area but also a world-renowned destination for trekking and mountaineering. Every year, it attracts visitors from around the world to explore its magnificent mountains, glaciers, highland lakes, and unique Andean biodiversity. The park is committed to ecological protection and sustainable development, allowing visitors to appreciate the natural beauty while also understanding and protecting this precious World Heritage Site.",
      highlights: { title: "Highlights", items: ["World Heritage: UNESCO World Natural Heritage Site (1985)", "Highest Peak: Huascarán summit at 6,768m, the highest in Peru", "Snow Peaks: 27 peaks over 6,000 meters", "Ecosystems: From high mountain glaciers to tropical cloud forests", "Rare Species: Spectacled bear, Andean condor, Puya raimondii"] },
      timeline: { title: "Park Development Timeline", events: [
        { period: "1975", description: "Huascarán National Park was officially established to protect the unique ecosystem and biodiversity of the Cordillera Blanca." },
        { period: "1985", description: "Designated as a UNESCO World Natural Heritage Site, confirming its global importance in natural value." },
        { period: "Ecological Protection", description: "The park administration cooperates with local communities to implement multiple ecological protection projects, protecting rare species such as the spectacled bear and Andean condor and their habitats." },
        { period: "Sustainable Tourism", description: "While protecting the environment, the park gradually promotes sustainable tourism, allowing visitors to understand Andean ecology and culture while maintaining the park's pristine character." }
      ]},
      management: { title: "Management & Maintenance", content: "Huascarán National Park is managed and maintained by the National Service of Natural Protected Areas of Peru (SERNANP). The park works closely with local Quechua communities to protect this World Heritage Site. Please follow park regulations, do not litter, do not pick plants, do not disturb wildlife, and help protect this precious natural heritage." }
    },
    history: {
      title: "History & Development",
      intro: "The history of Huascarán National Park dates back to 1975, when the Peruvian government recognized the unique ecological value and biodiversity of the Cordillera Blanca and decided to establish a national park for protection.\n\nThe establishment of the park not only protected the natural ecology but also protected the traditional lands and cultural heritage of the local Quechua culture. Today, the park is a model not only for natural protection but also for cultural preservation.",
      sections: [
        { subtitle: "Park Establishment & Protection", content: "In 1975, Huascarán National Park was officially established, covering an area of 3,400 square kilometers. The park was established to protect the glaciers, highland lakes, rivers, and unique Andean biodiversity of the Cordillera Blanca. The park contains the world's highest mountain range in the tropics and is the only habitat for many rare species." },
        { subtitle: "World Heritage Designation", content: "In 1985, Huascarán National Park was designated as a UNESCO World Natural Heritage Site. This designation confirmed the importance of the park in terms of global ecological and cultural value. The park is not only a model for natural protection but also a model for the protection of Andean culture and traditional communities." }
      ]
    },
    ecology: {
      title: "Ecology & Environment",
      sections: [
        { subtitle: "🏔️ High Mountain Ecosystem: Glaciers & Snow Peaks", content: "The most striking feature of Huascarán National Park is its magnificent high mountain ecosystem. The park contains 27 snow-capped peaks over 6,000 meters, with Huascarán summit (6,768m) being the highest peak in Peru and the highest in the tropics.\n\nThe park contains over 700 square kilometers of glaciers, which are important sources of fresh water for the Andean region. With global warming, the glaciers are retreating. The park administration is implementing monitoring and protection projects to protect this fragile glacier ecosystem.\n\nIn addition to glaciers, the park contains hundreds of highland lakes (cochas), such as the famous Llanganuco lake system, Lake Parón, etc. These lakes are formed by glacier meltwater and have unique turquoise colors, surrounded by snow peaks, creating spectacular scenery." },
        { subtitle: "🌿 Biodiversity: From Highlands to Cloud Forests", content: "The elevation of Huascarán National Park ranges from 2,000m to 6,768m, covering multiple ecosystems, thus possessing extremely high biodiversity:\n\n• Flora: Over 1,200 plant species have been recorded in the park, including the unique Puya raimondii, a giant bromeliad that can grow up to 10 meters tall and flowers only once every 80-100 years.\n• Birds: Over 160 bird species, including the Andean condor (Vultur gryphus).\n• Mammals: Including the spectacled bear (Tremarctos ornatus, the only bear species in South America), puma, vicuña, alpaca, etc.\n• Amphibians: Multiple endemic highland frog species.\n\nThe park's ecosystems range from highland tundra (puna) to highland wetlands (bofedales) to tropical cloud forests on the eastern slopes, each with its unique flora and fauna communities." },
        { subtitle: "♻️ Environmental Initiative: Protecting Fragile High Mountain Ecology", content: "The ecosystem of Huascarán National Park is extremely fragile, especially the glaciers and highland wetlands. Global warming, tourism activities, and grazing can all impact the park's ecology.\n\nAs a responsible visitor, please follow these principles:\n• Do not leave marked trails and trekking routes\n• Do not pick plants or disturb wildlife\n• Take all garbage with you, do not leave it in the park\n• Do not use soap or shampoo in lakes or rivers\n• Respect the culture and traditions of local communities\n\nLet's protect this World Heritage Site together, so that the magnificent Cordillera Blanca can be preserved forever." }
      ]
    },
    culture: {
      title: "Culture & Legends",
      intro: "Huascarán National Park is not only a model for natural protection but also an important preservation site for Quechua culture. Many Quechua communities live within and around the park, maintaining traditional lifestyles and cultural practices.",
      sections: [
        { subtitle: "🏔️ Quechua Culture: Traditional Guardians of the Andes", content: "The area around Huascarán National Park is one of the important birthplaces of Quechua culture. Local Quechua communities (comunidades campesinas) have lived here for generations, guarding the traditional knowledge and culture of the Andes.\n\nThe Quechua people have a deep tradition of nature worship. They worship Apus (mountain gods), Pachamama (Mother Earth), and Inti (Sun God). In Quechua culture, Huascarán summit is regarded as a sacred Apu, a symbol of strength and protection.\n\nVisitors to the park may encounter local Quechua herders who graze vicuñas, alpacas, and sheep. The traditional grazing methods of these communities are coordinated with the park's ecological protection goals and are a model for sustainable use of natural resources." },
        { subtitle: "🎉 Traditional Festivals & Activities", content: "Quechua communities around the park retain many traditional festivals, which are usually related to agricultural cycles and nature worship:\n\n• Qoyllur Rit'i (Lord of the Snow Star): A traditional festival held every June, where devotees make pilgrimages to snow mountains.\n• Pachamama Festival: A festival celebrating Mother Earth, giving thanks for the earth's bounty.\n• Chaccu (Animal Marking): Traditional vicuña marking and shearing activity, reflecting sustainable use traditions.\n\nIf visitors happen to be in the area during these festivals, they can observe traditional Quechua cultural rituals and celebrations, but please respect local culture and traditions and obtain permission before taking photos or participating." }
      ],
      events: { title: "Recommended Activities", items: [
        "Trekking: The park has several world-renowned trekking routes, such as Santa Cruz trek, Huayhuash trek, etc.",
        "Mountaineering: Huascarán summit is the ultimate challenge for technical mountaineers",
        "Birdwatching: Observe Andean condors, toucans, and other highland birds",
        "Photography: Magnificent snow peaks, glaciers, and highland lakes are a paradise for photography enthusiasts",
        "Cultural Exchange: Learn about the culture and traditions of local Quechua communities",
        "Ecological Education: Understand high mountain ecosystems and biodiversity conservation"
      ]}
    },
    visiting: {
      title: "Visitor Guide",
      hours: { title: "Opening Hours", content: "Generally 06:00 – 18:00\nSpecific times may vary by season and zone", note: "⚠️ Note: The park is very large, and opening hours may differ for different entrances. It is recommended to check in advance or confirm with the park administration." },
      price: { title: "Entrance Fees", content: "Foreign visitors: Approx. 30 PEN\nPeruvian visitors: Approx. 11 PEN\nLocal communities: Free", note: "Specific fees and recommendations should be checked in advance or call +51 43 422 086 for consultation. Guides may be required to accompany visitors in certain areas." },
      duration: { title: "Recommended Duration", content: "Recommended: 1 – 7 days", note: "If planning trekking, 3-7 days are recommended. Day trips can visit easily accessible attractions like the Llanganuco lake system. Please arrange reasonably according to your physical strength and time." },
      birds: { title: "Ecological Observation: Andean Biodiversity", content: "Huascarán National Park is an excellent place to observe Andean biodiversity. Here, you can observe:\n\n• Andean Condor (Cóndor andino): One of the world's largest flying birds, with a wingspan of up to 3.2 meters\n• Spectacled Bear (Oso de anteojos): The only bear species in South America, an important protected species in the park\n• Vicuña: A unique animal of the Andean highlands, with extremely fine wool\n• Puya raimondii: A giant bromeliad that flowers only once every few decades\n• Highland plants: Multiple endemic plant species adapted to high altitude environments\n\nThe biodiversity of the park is extremely rich. It is recommended that you observe slowly and discover the unique beauty of the Andean ecosystem." },
      bring: { title: "Recommended Items", items: ["Warm clothing (large temperature difference at high altitude)", "Sun protection & sunglasses (strong UV at high altitude)", "Insect repellent (lower altitudes)", "Trekking boots or mountaineering boots", "Waterproof jacket (changeable mountain weather)", "Water and high-energy food", "Oxygen tank (if altitude sickness)", "Camera and spare batteries", "Trekking poles", "Sleeping bag (if planning multi-day trekking)"] },
      route: { title: "Recommended Visit Routes", content: "We especially recommend the following Huascarán National Park visit routes:\n\n1. Day trip route: Depart from Yungay or Caraz to visit the Llanganuco lake system (Chinancocha and Orconcocha), enjoying the spectacular snow mountain reflections.\n2. Santa Cruz Trek (4-5 days): A world-renowned trekking route traversing the Cordillera Blanca, admiring multiple 6,000m snow peaks.\n3. Huayhuash Trek (8-12 days): A more challenging trekking route, considered one of the most beautiful trekking routes in the world.\n4. Mountaineering route: Requires professional guides and equipment to climb Huascarán summit or other technical peaks.\n\nPlease choose the appropriate route according to your physical strength and experience, and be sure to hire a local guide." }
    },
    transportation: {
      title: "Getting There",
      airport: { title: "From Lima or Trujillo", content: "About 450 km from Lima, approx. 8-10 hours by car. About 200 km from Trujillo, approx. 4-5 hours by car.", options: [
        { name: "Long-distance Bus (Economical)", price: "About $20 - $40 USD", time: "About 8-10 hours", steps: ["Take a long-distance bus from Lima or Trujillo to Yungay or Caraz", "After arrival, transfer to local transportation to the park entrance", "It is recommended to check schedules in advance and book"] },
        { name: "Chartered Car/Rental (Most Convenient)", price: "About $150 - $250 USD", time: "About 8-10 hours", steps: ["Rent a car or charter a car from Lima to Yungay", "Enjoy Andean mountain scenery along the way", "It is recommended to choose an experienced driver"] }
      ]},
      city: { title: "From Yungay or Caraz", content: "The main park entrances are near Yungay and Caraz, very convenient to access from these towns.", steps: ["Navigation: Enter Parque Nacional Huascarán in Google Maps", "About 30 minutes from Yungay to Llanganuco entrance", "About 1 hour from Caraz to Llanganuco entrance"] },
      selfDrive: { title: "Driving", content: "It is very convenient to drive from Lima to the park, but attention should be paid to high altitude sections.", steps: ["Navigate to Parque Nacional Huascarán, Yungay, Perú", "Road conditions are good, but some sections are at high altitude", "It is recommended to understand the route and road conditions in advance, and prepare for altitude sickness"] }
    },
    tips: { title: "Travel Tips", items: [
      "Apply for entry permits in advance, guides may be required in certain areas",
      "At high altitude, pay attention to preventing altitude sickness (Soroche)",
      "Morning visits are recommended, weather is more stable",
      "Please take sun protection measures, UV is extremely strong at high altitude",
      "It is recommended to carry warm clothing, temperature difference in mountains is extreme",
      "Please keep the park clean, take all garbage with you",
      "Do not pick plants or disturb wildlife",
      "It is recommended to hire a local guide, which is both safe and supports community economy",
      "It is recommended to understand weather in advance, some routes may be closed during rainy season (December-March)",
      "Respect the culture and traditions of local Quechua communities"
    ] },
    gallery: { title: "Photo Gallery", viewMore: "View More Photos on Google Maps" },
    reviews: { title: "Visitor Reviews", subtitle: "Real reviews from Google Maps", viewMore: "View More Reviews on Google Maps" },
    faq: { title: "Frequently Asked Questions", subtitle: "Learn more about Huascarán National Park", items: [
      { question: "What are the opening hours of Huascarán National Park?", answer: "The park is generally open 06:00-18:00, but specific times may vary by season and zone. Different entrances may have different opening hours. It is recommended to confirm with the park administration in advance, phone: +51 43 422 086." },
      { question: "Is there an entrance fee? How much is it?", answer: "Yes, entering the park requires purchasing a ticket. Foreign visitors approx. 30 PEN, Peruvian visitors approx. 11 PEN, local communities free. Guides may be required in certain areas. It is recommended to check in advance or call for consultation on specific fees." },
      { question: "What are the features of Huascarán National Park?", answer: "Huascarán National Park is a UNESCO World Natural Heritage Site, featuring:\n1. 27 snow peaks over 6,000 meters, including Huascarán, the highest peak in Peru (6,768m)\n2. Over 700 square kilometers of glaciers\n3. Hundreds of highland lakes\n4. Extremely high biodiversity, including spectacled bear, Andean condor, and other rare species\n5. Traditional Quechua culture communities" },
      { question: "What activities are recommended in the park? Suitable for what level of visitors?", answer: "The park offers various activities:\n1. Day trip: Visit easily accessible attractions like Llanganuco lake system, suitable for all visitors\n2. Trekking: Santa Cruz trek (4-5 days), Huayhuash trek (8-12 days), etc., suitable for experienced trekkers\n3. Mountaineering: Technical mountaineering, requires professional guides and equipment\n4. Birdwatching and wildlife observation: Suitable for nature lovers\n\nPlease choose activities appropriate to your physical strength and experience." },
      { question: "How to get to Huascarán National Park?", answer: "The park is located in the Ancash region of Peru, with main entrances near Yungay and Caraz. About 8-10 hours by long-distance bus from Lima, about 4-5 hours from Trujillo. For specific navigation, search for \"Parque Nacional Huascarán, Yungay, Perú\" in Google Maps." },
      { question: "What should I pay attention to when visiting the park? Any safety recommendations?", answer: "When visiting the park, please note:\n1. High altitude: Pay attention to preventing altitude sickness, gradual acclimatization to altitude is recommended\n2. Weather: Mountain weather is changeable, need to carry warm clothing and waterproof jacket\n3. Safety: Certain areas require guide accompaniment, do not go to remote areas alone\n4. Environmental protection: Take all garbage with you, do not disturb wildlife\n5. Culture: Respect the culture and traditions of local Quechua communities" },
      { question: "What other attractions are worth visiting near the park?", answer: "There are many attractions worth visiting in the Ancash region, including:\n1. Chan Chan — the largest adobe city in the Americas, a UNESCO World Heritage Site\n2. Huaraz — capital of Ancash region, an important base for trekkers\n3. Río Abiseo National Park — another World Heritage Site\n4. Cañón del Río Lunahuaná — adventure sports destination\n5. Local markets — buy traditional Andean handicrafts and specialties" }
    ]},
    location: { title: "Map Location", address: "275M+J8Q, Yungay\nAncash Region, Peru", openMaps: "View Location on Google Maps" },
    footer: { callToAction: "As a World Natural Heritage Site, please join us in caring for the environment and protecting ecology. Keep the park clean and maintain this precious World Heritage Site together.", text: "© 2026 Huascarán National Park Guide · All rights reserved.\nThis website is an independent third-party guide project dedicated to accurately sharing information about Huascarán National Park. We are not affiliated with the Peruvian government or any official authority.", made: "This website is an independent third-party guide project. Made for explorers and learners.", linksTitle: "Related Links", links: [
      { name: "Peru Ministry of Foreign Trade and Tourism", url: "https://www.gob.pe/mincetur" },
      { name: "National Service of Natural Protected Areas of Peru", url: "https://www.gob.pe/sernanp" },
      { name: "Peru National Tourism Bureau Official Guide", url: "https://www.peru.travel/es/atractivos/parque-nacional-huascaran" },
      { name: "Ancash Region Tourism Guide", url: "https://www.peru.travel/es/destinos/ancash" },
      { name: "Ancash Regional Government", url: "https://regionancash.gob.pe/" },
      { name: "Huascarán National Park Official Visitor Guide", url: "https://visitaareasnaturales.sernanp.gob.pe/anps/parque-nacional-huascaran/" }
    ]}
  },

  es: {
    nav: { about: "Descripción", history: "Historia", ecology: "Ecología", culture: "Cultura y Leyendas", visiting: "Guía de Visita", transportation: "Cómo Llegar", tips: "Consejos", gallery: "Galería de Fotos", reviews: "Reseñas", faq: "Preguntas Frecuentes", location: "Ubicación" },
    hero: { tagline: "Ancash, Perú · Patrimonio Natural de la Humanidad", title: "Parque Nacional Huascarán", subtitle: "Cordillera Blanca · Ancash, Perú", cta: "Explora el Parque" },
    rating: { reviews: "reseñas", source: "Google Reviews" },
    about: {
      title: "Descripción General",
      p1: "El Parque Nacional Huascarán se encuentra en la región Ancash de Perú. Es un Sitio del Patrimonio Mundial de la UNESCO y el área protegida central de la Cordillera Blanca, la cadena montañosa tropical más alta del mundo. El parque contiene 27 picos nevados sobre los 6,000 metros, incluyendo el Huascarán, la cumbre más alta del Perú a 6,768 metros.\n\nCubriendo un área de aproximadamente 3,400 kilómetros cuadrados, el parque abarca múltiples ecosistemas desde glaciares de alta montaña hasta bosques nublados tropicales. Es el hogar de numerosas especies raras de flora y fauna, incluyendo el oso de anteojos, el cóndor andino y la Puya raimondii. El parque también es uno de los lugares de origen de la cultura quechua, con rico patrimonio cultural y comunidades tradicionales.",
      p2: "El Parque Nacional Huascarán no es solo un área natural protegida, sino también un destino mundialmente conocido para el trekking y el andinismo. Cada año, atrae visitantes de todo el mundo para explorar sus magníficas montañas, glaciares, lagunas de altura y única biodiversidad andina. El parque está comprometido con la protección ecológica y el desarrollo sostenible, permitiendo a los visitantes apreciar la belleza natural mientras comprenden y protegen este preciado Sitio del Patrimonio Mundial.",
      highlights: { title: "Datos Destacados", items: ["Patrimonio Mundial: Sitio del Patrimonio Natural Mundial de la UNESCO (1985)", "Cumbre más alta: Cumbre Huascarán a 6,768m, la más alta del Perú", "Picos nevados: 27 picos sobre 6,000 metros", "Ecosistemas: Desde glaciares de alta montaña hasta bosques nublados tropicales", "Especies raras: Oso de anteojos, cóndor andino, Puya raimondii"] },
      timeline: { title: "Línea de Tiempo del Desarrollo del Parque", events: [
        { period: "1975", description: "El Parque Nacional Huascarán fue oficialmente establecido para proteger el ecosistema único y la biodiversidad de la Cordillera Blanca." },
        { period: "1985", description: "Designado como Sitio del Patrimonio Natural Mundial de la UNESCO, confirmando su importancia global en valor natural." },
        { period: "Protección Ecológica", description: "La administración del parque coopera con comunidades locales para implementar múltiples proyectos de protección ecológica, protegiendo especies raras como el oso de anteojos y el cóndor andino y sus hábitats." },
        { period: "Turismo Sostenible", description: "Mientras protege el medio ambiente, el parque promueve gradualmente el turismo sostenible, permitiendo a los visitantes comprender la ecología y cultura andina mientras mantiene el carácter prístino del parque." }
      ]},
      management: { title: "Gestión y Mantenimiento", content: "El Parque Nacional Huascarán es gestionado y mantenido por el Servicio Nacional de Áreas Naturales Protegidas por el Estado (SERNANP). El parque trabaja estrechamente con comunidades quechua locales para proteger este Sitio del Patrimonio Mundial. Por favor, siga los reglamentos del parque, no desperdicie basura, no recoja plantas, no perturbe la vida silvestre y ayude a proteger este preciado patrimonio natural." }
    },
    history: {
      title: "Historia y Desarrollo",
      intro: "La historia del Parque Nacional Huascarán se remonta a 1975, cuando el gobierno peruano reconoció el valor ecológico único y la biodiversidad de la Cordillera Blanca y decidió establecer un parque nacional para su protección.\n\nEl establecimiento del parque no solo protegió la ecología natural, sino que también protegió las tierras tradicionales y el patrimonio cultural de la cultura quechua local. Hoy en día, el parque es un modelo no solo para la protección natural, sino también para la preservación cultural.",
      sections: [
        { subtitle: "Establecimiento y Protección del Parque", content: "En 1975, el Parque Nacional Huascarán fue oficialmente establecido, cubriendo un área de 3,400 kilómetros cuadrados. El parque fue establecido para proteger los glaciares, lagunas de altura, ríos y única biodiversidad andina de la Cordillera Blanca. El parque contiene la cadena montañosa más alta en los trópicos y es el único hábitat para muchas especies raras." },
        { subtitle: "Designación de Patrimonio Mundial", content: "En 1985, el Parque Nacional Huascarán fue designado como Sitio del Patrimonio Natural Mundial de la UNESCO. Esta designación confirmó la importancia del parque en términos de valor ecológico y cultural global. El parque no es solo un modelo para la protección natural, sino también un modelo para la protección de la cultura andina y las comunidades tradicionales." }
      ]
    },
    ecology: {
      title: "Ecología y Medio Ambiente",
      sections: [
        { subtitle: "🏔️ Ecosistema de Alta Montaña: Glacias y Picos Nevados", content: "La característica más impresionante del Parque Nacional Huascarán es su magnífico ecosistema de alta montaña. El parque contiene 27 picos nevados sobre los 6,000 metros, con la cumbre Huascarán (6,768m) siendo la cumbre más alta del Perú y la más alta en los trópicos.\n\nEl parque contiene más de 700 kilómetros cuadrados de glaciares, que son fuentes importantes de agua dulce para la región andina. Con el calentamiento global, los glaciares se están retirando. La administración del parque está implementando proyectos de monitoreo y protección para proteger este frágil ecosistema glaciar.\n\nAdemás de los glaciares, el parque contiene cientos de lagunas de altura (cochas), como el famoso sistema de lagunas Llanganuco, Laguna Parón, etc. Estas lagunas se forman por el deshielo glaciar y tienen colores turquesa únicos, rodeados por picos nevados, creando paisajes espectaculares." },
        { subtitle: "🌿 Biodiversidad: Desde Alturas hasta Bosques Nublados", content: "La elevación del Parque Nacional Huascarán varía desde 2,000m hasta 6,768m, cubriendo múltiples ecosistemas, poseyendo por lo tanto una biodiversidad extremadamente alta:\n\n• Flora: Se han registrado más de 1,200 especies de plantas en el parque, incluyendo la única Puya raimondii, una bromeliácea gigante que puede crecer hasta 10 metros de alto y florece solo una vez cada 80-100 años.\n• Aves: Más de 160 especies de aves, incluyendo el cóndor andino (Vultur gryphus).\n• Mamíferos: Incluyendo el oso de anteojos (Tremarctos ornatus, la única especie de oso en Sudamérica), puma, vicuña, alpaca, etc.\n• Anfibios: Múltiples especies de ranas de altura endémicas.\n\nLos ecosistemas del parque van desde la tundra de altura (puna) hasta los humedales de altura (bofedales) hasta los bosques nublados tropicales en las laderas orientales, cada uno con sus únicas comunidades de flora y fauna." },
        { subtitle: "♻️ Iniciativa Ambiental: Protegiendo el Frágil Ecosistema de Alta Montaña", content: "El ecosistema del Parque Nacional Huascarán es extremadamente frágil, especialmente los glaciares y los humedales de altura. El calentamiento global, las actividades turísticas y el pastoreo pueden afectar la ecología del parque.\n\nComo visitante responsable, por favor siga estos principios:\n• No abandone los senderos marcados y rutas de trekking\n• No recoja plantas ni perturbe la vida silvestre\n• Lleve toda la basura con usted, no la deje en el parque\n• No use jabón o champú en lagunas o ríos\n• Respete la cultura y tradiciones de las comunidades locales\n\nProtejamos juntos este Sitio del Patrimonio Mundial, para que la magnífica Cordillera Blanca pueda ser preservada para siempre." }
      ]
    },
    culture: {
      title: "Cultura y Leyendas",
      intro: "El Parque Nacional Huascarán no es solo un modelo para la protección natural, sino también un importante sitio de preservación de la cultura quechua. Muchas comunidades quechua viven dentro y alrededor del parque, manteniendo estilos de vida tradicionales y prácticas culturales.",
      sections: [
        { subtitle: "🏔️ Cultura Quechua: Guardianes Tradicionales de los Andes", content: "El área alrededor del Parque Nacional Huascarán es uno de los importantes lugares de origen de la cultura quechua. Las comunidades quechua locales (comunidades campesinas) han vivido aquí por generaciones, guardando el conocimiento tradicional y la cultura de los Andes.\n\nEl pueblo quechua tiene una profunda tradición de adoración a la naturaleza. Adoran a los Apus (dioses de las montañas), Pachamama (Madre Tierra) e Inti (Dios Sol). En la cultura quechua, la cumbre Huascarán es considerada un Apu sagrado, un símbolo de fortaleza y protección.\n\nLos visitantes al parque pueden encontrar pastores quechua locales que pastorean vicuñas, alpacas y ovejas. Los métodos tradicionales de pastoreo de estas comunidades se coordinan con los objetivos de protección ecológica del parque y son un modelo para el uso sostenible de recursos naturales." },
        { subtitle: "🎉 Festividades y Actividades Tradicionales", content: "Las comunidades quechua alrededor del parque retienen muchas festividades tradicionales, que generalmente están relacionadas con los ciclos agrícolas y la adoración a la naturaleza:\n\n• Qoyllur Rit'i (Señor de la Estrella de Nieve): Una festividad tradicional que se celebra cada junio, donde los devotos hacen peregrinaciones a las montañas nevadas.\n• Festividad de Pachamama: Una festividad que celebra a la Madre Tierra, dando gracias por los dones de la tierra.\n• Chaccu (Marcado de Animales): Actividad tradicional de marcado y esquila de vicuñas, que refleja tradiciones de uso sostenible.\n\nSi los visitantes están en el área durante estas festividades, pueden observar rituales culturales quechua tradicionales y celebraciones, pero por favor respeten la cultura y tradiciones locales y obtengan permiso antes de tomar fotos o participar." }
      ],
      events: { title: "Actividades Recomendadas", items: [
        "Trekking: El parque tiene varias rutas de trekking mundialmente reconocidas, como Santa Cruz trek, Huayhuash trek, etc.",
        "Andinismo: La cumbre Huascarán es el desafío final para andinistas técnicos",
        "Observación de aves: Observe cóndores andinos, tucanes y otras aves de altura",
        "Fotografía: Magníficas montañas nevadas, glaciares y lagunas de altura son un paraíso para entusiastas de la fotografía",
        "Intercambio Cultural: Aprenda sobre la cultura y tradiciones de las comunidades quechua locales",
        "Educación Ecológica: Comprenda los ecosistemas de alta montaña y la conservación de la biodiversidad"
      ]}
    },
    visiting: {
      title: "Guía de Visita",
      hours: { title: "Horario de Apertura", content: "Generalmente 06:00 – 18:00\nLos horarios específicos pueden variar según la temporada y la zona", note: "⚠️ Nota: El parque es muy grande, y los horarios de apertura pueden diferir para diferentes entradas. Se recomienda verificar con anticipación o confirmar con la administración del parque." },
      price: { title: "Tarifas de Entrada", content: "Visitantes extranjeros: Aprox. 30 PEN\nVisitantes peruanos: Aprox. 11 PEN\nComunidades locales: Gratis", note: "Se recomienda verificar tarifas específicas o llamar al +51 43 422 086 para consulta. Se pueden requerir guías para acompañar a visitantes en ciertas áreas." },
      duration: { title: "Duración Recomendada", content: "Recomendado: 1 – 7 días", note: "Si planea hacer trekking, se recomiendan 3-7 días. Los viajes de un día pueden visitar atractivos de fácil acceso como el sistema de lagunas Llanganuco. Por favor, organice razonablemente según su fuerza física y tiempo." },
      birds: { title: "Observación Ecológica: Biodiversidad Andina", content: "El Parque Nacional Huascarán es un excelente lugar para observar la biodiversidad andina. Aquí, puede observar:\n\n• Cóndor Andino (Vultur gryphus): Una de las aves voladoras más grandes del mundo, con una envergadura de hasta 3.2 metros\n• Oso de Anteojos (Tremarctos ornatus): La única especie de oso en Sudamérica, una especie protegida importante en el parque\n• Vicuña: Un animal único de las alturas andinas, con lana extremadamente fina\n• Puya raimondii: Una bromeliácea gigante que florece solo una vez cada pocas décadas\n• Plantas de altura: Múltiples especies de plantas endémicas adaptadas a ambientes de alta altitud\n\nLa biodiversidad del parque es extremadamente rica. Se recomienda que observe lentamente y descubra la belleza única del ecosistema andino." },
      bring: { title: "Artículos Recomendados", items: ["Ropa abrigadora (gran diferencia de temperatura a alta altitud)", "Protección solar y gafas de sol (UV fuerte a alta altitud)", "Repelente de insectos (altitudes más bajas)", "Botas de trekking o botas de andinismo", "Chaqueta impermeable (clima cambiable de montaña)", "Agua y comida de alta energía", "Tanque de oxígeno (si mal de altura)", "Cámara y baterías de repuesto", "Bastones de trekking", "Bolsa de dormir (si planea trekking de varios días)"] },
      route: { title: "Rutas de Visita Recomendadas", content: "Recomendamos especialmente las siguientes rutas de visita al Parque Nacional Huascarán:\n\n1. Ruta de un día: Salir de Yungay o Caraz para visitar el sistema de lagunas Llanganuco (Chinancocha y Orconcocha), disfrutando de los espectaculares reflejos de montañas nevadas.\n2. Santa Cruz Trek (4-5 días): Una ruta de trekking mundialmente reconocida que atraviesa la Cordillera Blanca, admirando múltiples picos nevados de 6,000m.\n3. Huayhuash Trek (8-12 días): Una ruta de trekking más desafiante, considerada una de las rutas de trekking más hermosas del mundo.\n4. Ruta de andinismo: Requiere guías profesionales y equipo para escalar la cumbre Huascarán u otros picos técnicos.\n\nPor favor, elija la ruta apropiada según su fuerza física y experiencia, y asegúrese de contratar un guía local." }
    },
    transportation: {
      title: "Cómo Llegar",
      airport: { title: "Desde Lima o Trujillo", content: "A unos 450 km de Lima, aproximadamente 8-10 horas en automóvil. A unos 200 km de Trujillo, aproximadamente 4-5 horas en automóvil.", options: [
        { name: "Ómnibus de Larga Distancia (Económico)", price: "Aprox. $20 - $40 USD", time: "Aproximadamente 8-10 horas", steps: ["Tomar un ómnibus de larga distancia de Lima o Trujillo a Yungay o Caraz", "Después de la llegada, transferirse al transporte local a la entrada del parque", "Se recomienda verificar horarios con anticipación y reservar"] },
        { name: "Auto Alquilado/Charter (Más Conveniente)", price: "Aprox. $150 - $250 USD", time: "Aproximadamente 8-10 horas", steps: ["Alquilar un auto o charter un auto de Lima a Yungay", "Disfrutar del paisaje de montañas andinas en el camino", "Se recomienda elegir un conductor experimentado"] }
      ]},
      city: { title: "Desde Yungay o Caraz", content: "Las entradas principales del parque están cerca de Yungay y Caraz, muy conveniente para acceder desde estos pueblos.", steps: ["Navegación: Ingresar Parque Nacional Huascarán en Google Maps", "Aproximadamente 30 minutos de Yungay a la entrada Llanganuco", "Aproximadamente 1 hora de Caraz a la entrada Llanganuco"] },
      selfDrive: { title: "Conduciendo", content: "Es muy conveniente conducir desde Lima al parque, pero se debe prestar atención a secciones de alta altitud.", steps: ["Navegar al Parque Nacional Huascarán, Yungay, Perú", "Las condiciones de la carretera son buenas, pero algunas secciones están a alta altitud", "Se recomienda comprender la ruta y las condiciones de la carretera con anticipación, y prepararse para el mal de altura"] }
    },
    tips: { title: "Consejos de Viaje", items: [
      "Solicite permisos de entrada con anticipación, se pueden requerir guías en ciertas áreas",
      "A alta altitud, preste atención a la prevención del mal de altura (Soroche)",
      "Se recomiendan las visitas matutinas, el clima es más estable",
      "Por favor, tome medidas de protección solar, el UV es extremadamente fuerte a alta altitud",
      "Se recomienda llevar ropa abrigadora, la diferencia de temperatura en las montañas es extrema",
      "Por favor mantenga el parque limpio, lleve toda la basura con usted",
      "No recoja plantas ni perturbe la vida silvestre",
      "Se recomienda contratar un guía local, lo cual es seguro y apoya la economía comunitaria",
      "Se recomienda comprender el clima con anticipación, algunas rutas pueden estar cerradas durante la temporada de lluvias (diciembre-marzo)",
      "Respete la cultura y tradiciones de las comunidades quechua locales"
    ] },
    gallery: { title: "Galería de Fotos", viewMore: "Ver Más en Google Maps" },
    reviews: { title: "Reseñas", subtitle: "Reseñas de Google Maps", viewMore: "Más Reseñas" },
    faq: { title: "Preguntas Frecuentes", subtitle: "Aprenda más sobre el Parque Nacional Huascarán", items: [
      { question: "¿Cuál es el horario de apertura del Parque Nacional Huascarán?", answer: "El parque generalmente está abierto de 06:00-18:00, pero los horarios específicos pueden variar según la temporada y la zona. Diferentes entradas pueden tener diferentes horarios de apertura. Se recomienda confirmar con la administración del parque con anticipación, teléfono: +51 43 422 086." },
      { question: "¿Hay tarifa de entrada? ¿Cuánto es?", answer: "Sí, ingresar al parque requiere comprar un boleto. Visitantes extranjeros aprox. 30 PEN, visitantes peruanos aprox. 11 PEN, comunidades locales gratis. Se pueden requerir guías para acompañar a visitantes en ciertas áreas. Se recomienda verificar con anticipación o llamar para consulta sobre tarifas específicas." },
      { question: "¿Cuáles son las características del Parque Nacional Huascarán?", answer: "El Parque Nacional Huascarán es un Sitio del Patrimonio Natural Mundial de la UNESCO, con características:\n1. 27 picos nevados sobre 6,000 metros, incluyendo Huascarán, la cumbre más alta del Perú (6,768m)\n2. Más de 700 kilómetros cuadrados de glaciares\n3. Cientos de lagunas de altura\n4. Biodiversidad extremadamente alta, incluyendo oso de anteojos, cóndor andino y otras especies raras\n5. Comunidades de cultura quechua tradicional" },
      { question: "¿Qué actividades se recomiendan en el parque? ¿Adecuado para qué nivel de visitantes?", answer: "El parque ofrece diversas actividades:\n1. Viaje de un día: Visite atractivos de fácil acceso como el sistema de lagunas Llanganuco, adecuado para todos los visitantes\n2. Trekking: Santa Cruz trek (4-5 días), Huayhuash trek (8-12 días), etc., adecuado para trekkers experimentados\n3. Andinismo: Andinismo técnico, requiere guías profesionales y equipo\n4. Observación de aves y vida silvestre: Adecuado para amantes de la naturaleza\n\nPor favor, elija actividades apropiadas a su fuerza física y experiencia." },
      { question: "¿Cómo llegar al Parque Nacional Huascarán?", answer: "El parque está ubicado en la región Ancash de Perú, con entradas principales cerca de Yungay y Caraz. Aproximadamente 8-10 horas en ómnibus de larga distancia desde Lima, aproximadamente 4-5 horas desde Trujillo. Para navegación específica, busque \"Parque Nacional Huascarán, Yungay, Perú\" en Google Maps." },
      { question: "¿Qué debe tener en cuenta al visitar el parque? ¿Alguna recomendación de seguridad?", answer: "Al visitar el parque, por favor note:\n1. Alta altitud: Preste atención a la prevención del mal de altura, se recomienda aclimatación gradual a la altitud\n2. Clima: El clima de montaña es cambiable, necesita llevar ropa abrigadora y chaqueta impermeable\n3. Seguridad: Ciertas áreas requieren acompañamiento de guía, no vaya a áreas remotas solo\n4. Protección ambiental: Lleve toda la basura con usted, no perturbe la vida silvestre\n5. Cultura: Respete la cultura y tradiciones de las comunidades quechua locales" },
      { question: "¿Qué otros atractivos vale la pena visitar cerca del parque?", answer: "Hay muchos atractivos que vale la pena visitar en la región Ancash, incluyendo:\n1. Chan Chan — la ciudad de adobe más grande de las Américas, un Sitio del Patrimonio Mundial de la UNESCO\n2. Huaraz — capital de la región Ancash, una base importante para trekkers\n3. Parque Nacional del Río Abiseo — otro Sitio del Patrimonio Mundial\n4. Cañón del Río Lunahuaná — destino de deportes de aventura\n5. Mercados locales — compre artesanías andinas tradicionales y especialidades" }
    ]},
    location: { title: "Ubicación en el Mapa", address: "275M+J8Q, Yungay\nRegión Ancash, Perú", openMaps: "Ver Ubicación en Google Maps" },
    footer: { callToAction: "Como un Sitio del Patrimonio Natural Mundial, por favor únanse a nosotros para cuidar el entorno y proteger la ecología. Mantenga el parque limpio y mantenga este preciado Sitio del Patrimonio Mundial juntos.", text: "© 2026 Guía del Parque Nacional Huascarán · Todos los derechos reservados.\nEste sitio web es un proyecto de guía independiente de terceros dedicado a compartir información precisa sobre el Parque Nacional Huascarán. No estamos afiliados con el gobierno peruano ni ninguna autoridad oficial.", made: "Este sitio web es un proyecto de guía independiente de terceros. Hecho para exploradores y aprendices.", linksTitle: "Enlaces Relacionados", links: [
      { name: "Ministerio de Comercio Exterior y Turismo de Perú", url: "https://www.gob.pe/mincetur" },
      { name: "Servicio Nacional de Áreas Naturales Protegidas por el Estado de Perú", url: "https://www.gob.pe/sernanp" },
      { name: "Guía Oficial de Turismo Nacional de Perú", url: "https://www.peru.travel/es/atractivos/parque-nacional-huascaran" },
      { name: "Guía de Turismo de la Región Ancash", url: "https://www.peru.travel/es/destinos/ancash" },
      { name: "Gobierno Regional de Ancash", url: "https://regionancash.gob.pe/" },
      { name: "Guía Oficial de Visitantes del Parque Nacional Huascarán", url: "https://visitaareasnaturales.sernanp.gob.pe/anps/parque-nacional-huascaran/" }
    ]}
  },

  qu: {
    nav: { about: "Qhaway", history: "Ñawpa", ecology: "Pachamama", culture: "Simi", visiting: "Rimay", transportation: "Chaykamuy", tips: "Yachay", gallery: "Rikuy", reviews: "Niykuna", faq: "Tapuykuna", location: "Maypi" },
    hero: { tagline: "Ancash, Piruw · Pachamama Wiñay Kawsay", title: "Huascarán Nasyunal Pak", subtitle: "Cordillera Blanca · Ancash, Piruw", cta: "Rikuy" },
    rating: { reviews: "niykuna", source: "Google niykuna" },
    about: {
      title: "Qhaway",
      p1: "Huascarán Nasyunal Pak nisqa Piruw Ancash suyupi tiyan. Kayqa UNESCO Pachamama wiñay kawsay, Cordillera Blanca nisqa, tikanpura aswan hanaq urqukuna. Pakpi 27 rit'i urqukuna 6,000 mitru hanaq, Huascarán nisqa Piruw aswan hanaq (6,768 mitru).",
      p2: "Pakqa 3,400 kilometru iskaypatachá, achka ecosistema: rit'i urqukunamanta bosques nubladoskama. Achka rikch'aq uywakuna, pachamama, Puya raimondii. Kaypi Quechua runakuna kawsanku, ñawpa willaykunawan.",
      highlights: { title: "Rikuy", items: ["Pachamama Wiñay Kawsay: UNESCO 1985", "Aswan hanaq: Huascarán 6,768m", "Rit'i urqukuna: 27 urqu 6,000m hanaq", "Ecosistemakuna: Rit'i urqukunamanta bosques nubladoskama", "Rikch'aq uywakuna: Oso de anteojos, Cóndor, Puya raimondii"] },
      timeline: { title: "Ñawpa", events: [
        { period: "1975", description: "Huascarán Nasyunal Pak kamarisqa, Cordillera Blanca amachaypaq." },
        { period: "1985", description: "UNESCO Pachamama Wiñay Kawsay, tikanpura aswan rikuriq." },
        { period: "Pachamama amachay", description: "Pak kamachiqkuna runakunawan, oso de anteojos, cóndor amachanku." },
        { period: "Allin puriy", description: "Pachamamata amachaspa, runakunata purichin, ñawpa willayta yachachin." }
      ]},
      management: { title: "Amahana", content: "Huascarán Nasyunal Pakqa SERNANP kamachin. Pakqa Quechua runakunawan kuska, kay Pachamama wiñay kawsayta amachanku. Ama basurata ukyaman churaykuychu, ama sach'akunata kuchuykuchu, ama uywakunata waqlliykuchu." }
    },
    history: {
      title: "Ñawpa",
      intro: "Huascarán Nasyunal Pakpa ñawpan 1975 watakama, Piruw mamallacta Cordillera Blanca allin kawsayta rikuspami pakta kamarqan.",
      sections: [
        { subtitle: "Pak kamarisqa", content: "1975 watapi, Huascarán Nasyunal Pak kamarisqa, 3,400 kilometru iskaypatachá. Rit'i urqukuna, quchakuna, mayukuna, achka rikch'aq uywakuna amachanapaq." },
        { subtitle: "Pachamama Wiñay Kawsay", content: "1985 watapi, UNESCO Pachamama Wiñay Kawsay. Piruw, tikanpura aswan rikuriq. Runakunapaq, pachamamapaq allin." }
      ]
    },
    ecology: {
      title: "Pachamama",
      sections: [
        { subtitle: "Rit'i urqukuna", content: "Huascarán Nasyunal Pakqa 27 rit'i urqukunawan, 6,000 mitru hanaq. Huascarán 6,768 mitru, Piruw aswan hanaq.\n\n700 kilometru iskaypatachá rit'i (glaciares). Kay rit'ikunaqa mayukunapa yaku maskan. Unquyninwan, rit'ikuna puchukachkan. Pak runakuna maskan, amachan rit'ikunata.\n\nAchka quchakuna (cochas): Llanganuco, Parón. Rit'i pichqamanta yaku, turquesa llimp'i." },
        { subtitle: "Achka rikch'aq uywakuna", content: "Pak 2,000 mitrumanta 6,768 mitrukama. Achka ecosistema, achka rikch'aq uywakuna:\n\n• Sach'akuna: 1,200 rikch'aq, Puya raimondii (80-100 wata huk kuti wayt'an).\n• P'isqukuna: 160 rikch'aq, Cóndor.\n• Uywakuna: Oso de anteojos (Sudamérica hukllawan), puma, vicuña, alpaca.\n• Sach'akuna: Puna, bofedales, bosques nublados." },
        { subtitle: "Pachamama amachay", content: "Huascarán Nasyunal Pak ecosistemanta k'iri. Rit'i, quchakuna ama waqlliykuchu.\n\nAllin puriy: Ama ñankunata saqiykuchu, ama sach'akunata kuchuykuchu, ama uywakunata waqlliykuchu, ama basurata saqiykuychu. Pachamamata yupaychay." }
      ]
    },
    culture: {
      title: "Simi",
      intro: "Huascarán Nasyunal Pakqa manallachu pachamama amachan, Quechua simitapas waqaychan. Pak ukhupi, Q'ero runakuna kawsanku, ñawpa simita, willaykunata waqaykuspa.",
      sections: [
        { subtitle: "Quechua runakuna", content: "Quechua runakuna pak ukhupi, manaraq yachayninkuta waqaykuspa. Apukunata (urqukuna), Pachamamata (tikan), Intitawan (inti) yupaychan.\n\nHuascarán Apu, chayrayku santo. Runakunaqa uywakunata uywan: vicuña, alpaca. Kayqa allin, pachamama waqaychan." },
        { subtitle: "Watakuna", content: "Quechua runakuna achka watakunata waqaychan: Qoyllur Rit'i, Pachamama, Chaccu. Kaykunapi, runakuna tusun, t'inkakunata ruwan.\n\nPuriquqkuna chayrikuskun, costumbrekunata rikunku. Ama hina kachun, Ama ñankunata saqiykuchu." }
      ],
      events: { title: "Ruwaykuna", items: [
        "Trekking: Santa Cruz, Huayhuash",
        "Andinismo: Huascarán",
        "P'isqukunata rikuy: Cóndor",
        "Rikuy: Rit'i urqukuna, quchakuna",
        "Quechua simita yachay",
        "Pachamama yachay"
      ]}
    },
    visiting: {
      title: "Puriy",
      hours: { title: "Punchaw", content: "06:00 – 18:00\nSapa punchaw", note: "⚠️ Achka hatun. Sapa punku tiyan." },
      price: { title: "Qullqi", content: "Jatun mama llacta: 30 PEN\nPiruw runakuna: 11 PEN\nLlaqtakuna: Mana qullqiyuqchu", note: "Telefono: +51 43 422 086" },
      duration: { title: "Unay", content: "1 – 7 p'unchaw", note: "Trekking: 3-7 p'unchaw" },
      birds: { title: "Uywakunata rikuy", content: "Cóndor (3.2 mitru iskay patakuna), Oso de anteojos, Vicuña, Puya raimondii. Achka rikch'aq." },
      bring: { title: "Apamuy", items: ["Ch'irita (rit'i patsallapi)", "Intita amachakuy", "Ukyata apamuy", "Bastones de trekking", "Puñuna (achka p'unchaw trekking)"] },
      route: { title: "Puriy", content: "1. Sapa p'unchaw: Llanganuco\n2. Santa Cruz (4-5 p'unchaw)\n3. Huayhuash (8-12 p'unchaw)\n4. Andinismo: Huascarán\n\nAma hina kachun, guía apamuy." }
    },
    transportation: {
      title: "Chaykamuy",
      airport: { title: "Lima nisqamanta", content: "Lima nisqapi 450 km karu, 8-10 ura.", options: [
        { name: "Ómnibus (Pisi qullqi)", price: "$20 - $40", time: "8-10 ura", steps: ["Lima nisqapi ómnibus apamuy", "Yungay man chayamuy", "Tikyay"] },
        { name: "Auto (Allin)", price: "$150 - $250", time: "8-10 ura", steps: ["Auto alquilar", "Yungay man chayamuy", "Allin"] }
      ]},
      city: { title: "Yungay nisqamanta", content: "Yungay, Caraz. Chaykamuy allin.", steps: ["Google Maps nisqapi maskuy", "Yungay nisqapi 30 uchu", "Caraz nisqapi 1 ura"] },
      selfDrive: { title: "Kuti puriy", content: "Kuti puriy allin, aswan hanaq.", steps: ["Google Maps nisqapi maskuy", "Kuti puriy", "Achan p'itiy"] }
    },
    tips: { title: "Yachay", items: [
      "Permiso mañakuy. Guía apamuy.",
      "Soroche ama kachun. Allinta puriy.",
      "Ch'uspi mana kachun (bosques nublados)",
      "Intita amachakuy (rit'i patsallapi inti achka)",
      "Ch'irita apamuy (rit'i patsallapi chiri)",
      "Basurata mana saqiykuychu",
      "Ama uywakunata waqlliykuychu",
      "Quechua runakunata yupaychay"
    ] },
    gallery: { title: "Rikuy", viewMore: "Google Maps nisqapi astawan rikuy" },
    reviews: { title: "Niykuna", subtitle: "Google Maps nisqamanta", viewMore: "Astawan niykuna" },
    faq: { title: "Tapuykuna", subtitle: "Yachay", items: [
      { question: "Huascarán Nasyunal Pak hayk'aq kachkan?", answer: "06:00-18:00. Sapa punku tiyan. +51 43 422 086." },
      { question: "Qullqi paganan chá?", answer: "Jatun mama llacta: 30 PEN. Piruw runakuna: 11 PEN." },
      { question: "Imakunata ruway atikun?", answer: "Trekking, andinismo, p'isqukunata rikuy, foto. Achka ruwaykuna." },
      { question: "Maymantá chayamuy atikun?", answer: "Lima nisqamanta 8-10 ura. Trujillo nisqamanta 4-5 ura." },
      { question: "Yachay munay?", answer: "Soroche ama kachun. Ch'irita apamuy. Guía apamuy." }
    ]},
    location: { title: "Maypipas", address: "275M+J8Q, Yungay\nPiruw, Ancash", openMaps: "Google Maps nisqapi maytapas rikuy" },
    footer: { callToAction: "Pachamamata yupaychay, allinta puriy. Pachamama mana waqllinachu.", text: "© 2026 Huascarán Nasyunal Pak. Kayqa puriy yachay, runakunapaq.", made: "Kayqa puriy yachay, runakunapaq.", linksTitle: "Imakunata", links: [
      { name: "MINCETUR", url: "https://www.gob.pe/mincetur" },
      { name: "SERNANP", url: "https://www.gob.pe/sernanp" },
      { name: "Peru Travel", url: "https://www.peru.travel/es/atractivos/parque-nacional-huascaran" },
      { name: "Ancash", url: "https://www.peru.travel/es/destinos/ancash" },
      { name: "Gobierno Ancash", url: "https://regionancash.gob.pe/" },
      { name: "VisitAANP", url: "https://visitaareasnaturales.sernanp.gob.pe/anps/parque-nacional-huascaran/" }
    ]}
  }
};
