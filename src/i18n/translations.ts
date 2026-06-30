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
      p1: "瓦斯卡兰国家公园（Parque Nacional Huascarán）位于秘鲁安卡什大区，是联合国教科文组织世界自然遗产，也是世界上热带地区最高的山脉——布兰卡山脉（Cordillera Blanca）的核心保护区。公园内拥有27座海拔6000米以上的雪峰，其中包括秘鲁最高峰瓦斯卡兰峰（6768米）。\n\n公园面积约3400平方公里，涵盖了从高山冰川到热带云雾林的多种生态系统。这里是众多珍稀动植物的家园，包括眼镜熊、安第斯神鹰、雷蒙氏普亚凤梨（Puya raimondii，当地称 Titanca）等。公园也是克丘亚文化的发源地之一，拥有丰富的文化遗产和传统社区。",
      p2: "瓦斯卡兰国家公园不仅是一个自然保护区，也是世界知名的徒步和登山胜地。每年吸引着来自世界各地的游客前来探索其壮丽的山川、冰川、高原湖泊和独特的安第斯生物多样性。公园致力于生态保护和可持续发展，让游客在欣赏自然美景的同时，也能了解和保护这一珍贵的世界遗产。",
      highlights: { title: "景点亮点", items: ["世界遗产: 联合国教科文组织世界自然遗产（1985年）", "最高峰: 瓦斯卡兰峰，海拔6768米，秘鲁最高峰", "雪峰数量: 27座6000米以上的雪峰", "生态系统: 从高山冰川到热带云雾林", "珍稀物种: 眼镜熊、安第斯神鹰、雷蒙氏普亚凤梨（Titanca）"] },
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
      intro: "瓦斯卡兰国家公园的历史可以追溯到1975年，当时秘鲁政府认识到布兰卡山脉独特的生态价值和生物多样性，决定建立国家公园进行保护。\n\n公园的建立不仅保护了自然生态，也保护了当地克丘亚文化的传统土地和文化遗产。今天，公园不仅是自然保护的典范，也是文化保护的典范。这里还承载着一段沉重的历史记忆。",
      sections: [
        { subtitle: "公园建立与保护", content: "1975年，瓦斯卡兰国家公园正式成立，面积达3400平方公里。公园的建立旨在保护布兰卡山脉的冰川、高山湖泊、河流和独特的安第斯生物多样性。公园内拥有世界上热带地区最高的山脉，是许多珍稀物种的唯一栖息地。" },
        { subtitle: "1970年安卡什大地震与永盖大雪崩", content: "1970年5月31日，一场里氏7.9级的大地震引发了瓦斯卡兰峰北侧冰川的世纪大崩塌。数千万立方米的冰雪和岩石以时速300公里的速度冲下，瞬间掩埋了山下的永盖城（Yungay），造成数万人遇难。如今的Yungay镇是在原址数公里外重建的。这段历史提醒着访客高山环境的不可预测性，也是自然科考的重要一环。" },
        { subtitle: "世界遗产认定", content: "1985年，瓦斯卡兰国家公园被联合国教科文组织列入世界自然遗产名录。这一认定确认了公园在全球生态和文化价值方面的重要性。公园不仅是自然保护的典范，也是安第斯文化和传统社区保护的典范。" }
      ]
    },
    ecology: {
      title: "生态环境",
      sections: [
        { subtitle: "🏔️ 高山生态系统：冰川与雪峰", content: "瓦斯卡兰国家公园最引人注目的是其壮丽的高山生态系统。公园内拥有27座海拔6000米以上的雪峰，其中瓦斯卡兰峰（6768米）是秘鲁最高峰，也是热带地区的最高峰。\n\n公园内分布着超过700平方公里的冰川，这些冰川是安第斯地区重要的淡水来源。随着全球气候变暖，冰川正在退缩，公园管理局正在实施监测和保护项目，以保护这一脆弱的冰川生态系统。\n\n除了冰川，公园内还有数百个高山湖泊（cochas），如著名的Llanganuco湖泊群、Parón湖等。这些湖泊由冰川融水形成，湖水呈独特的绿松石色，四周环绕着雪峰，景色极为壮观。" },
        { subtitle: "🌿 生物多样性：从高山到云雾林", content: "瓦斯卡兰国家公园的海拔从2000米到6768米，涵盖了多种生态系统，因此拥有极高的生物多样性：\n\n• 植物：公园内记录有超过1200种植物，包括独特的雷蒙氏普亚凤梨（Puya raimondii，当地称 Titanca），这种巨大的凤梨科植物可以长到10米高，一生只开一次花，开花后死亡。\n• 鸟类：超过160种鸟类，包括安第斯神鹰（Vultur gryphus）、安第斯秃鹫等。\n• 哺乳动物：包括眼镜熊（Tremarctos ornatus，南美洲唯一的熊类）、美洲狮、骆马（Vicuña）、羊驼等。\n• 两栖动物：多种特有的高原蛙类。\n\n公园的生态系统从高山苔原（puna）到高山湿地（bofedales），再到东坡的热带云雾林，每一层都有其独特的动植物群落。" },
        { subtitle: "🌡️ 正在消失的冰川：气候变化的见证者", content: "布兰卡山脉拥有全球面积最大的热带冰川，但过去50年间已消融了近30%。公园内的帕斯托鲁里冰川（Pastoruri Glacier）如今被开辟为'气候变化路线（Ruta del Cambio Climático）'。\n\n我们鼓励访客前往此处，不是为了征服，而是亲眼见证全球变暖对地球水资源造成的不可逆影响。帕斯托鲁里冰川的退缩，是全世界气候变化的缩影，提醒我们保护环境的紧迫性。\n\n作为非盈利科普网站，我们倡导所有访客：带着学习和思考的目的前来，而不仅仅是观光。了解气候变化，才能更好地保护我们的地球。" },
        { subtitle: "♻️ 环保倡议：保护脆弱的高山生态", content: "瓦斯卡兰国家公园的生态系统非常脆弱，特别是冰川和高山湿地。全球气候变暖、旅游活动、放牧等都可能对公园生态造成影响。\n\n作为负责任的游客，请遵守以下原则：\n• 不要离开标记的道路和徒步路线\n• 不要采摘植物或干扰野生动物\n• 将所有垃圾带走，不要留在公园内\n• 不要在湖泊或河流中使用肥皂或洗发水\n• 尊重当地社区的文化和传统\n• 倡导无痕山林（Leave No Trace）：建议携带净水设备，避免使用塑料瓶\n\n共同守护这片世界遗产，让壮丽的布兰卡山脉永续留存。" }
      ]
    },
    culture: {
      title: "文化与传说",
      intro: "瓦斯卡兰国家公园不仅是自然保护的典范，也是克丘亚文化的重要保护地。公园内及其周边地区居住着许多克丘亚社区，他们保持着传统的生活方式和文化习俗。这里还流传着许多美丽的安第斯传说。",
      sections: [
        { subtitle: "🏔️ 克丘亚文化：安第斯的传统守护者", content: "瓦斯卡兰国家公园周边地区是克丘亚文化的重要发源地之一。当地的克丘亚社区（comunidades campesinas）世代居住在这里，守护着安第斯的传统知识和文化。\n\n克丘亚人有着深厚的自然崇拜传统，他们崇拜阿普（Apus，山神）、帕查妈妈（Pachamama，大地母亲）和因蒂（Inti，太阳神）。在克丘亚文化中，瓦斯卡兰峰被视为神圣的阿普，是力量和保护的象征。\n\n游客在公园内可能会遇到当地的克丘亚牧民，他们放牧着骆马、羊驼和羊群。这些社区的传统放牧方式与公园的生态保护目标相协调，是可持续利用自然资源的典范。" },
        { subtitle: "💧 传说：瓦斯卡兰与万多伊的眼泪", content: "在安第斯传说中，瓦斯卡兰（Huascarán）是一位英俊平民青年，而万多伊（Huandoy）是印加国王美丽的女儿。两人深深相爱，却遭到国王的强烈反对。最终，他们被双双变成面对面的巨大雪峰，永远无法触碰。\n\n而著名的永加努科湖泊群（Llanganuco），一侧呈现绿松石色，一侧呈现深蓝色，传说就是这两座雪山为无法相聚而流下的悲伤眼泪汇聚而成。这个凄美的传说，为壮丽的布兰卡山脉增添了浓厚的人文色彩。" },
        { subtitle: "🎉 传统节日与活动", content: "公园周边的克丘亚社区保留着许多传统节日，这些节日通常与农业周期和自然崇拜相关：\n\n• 科尔卡节（Qoyllur Rit'i）：每年6月举行的传统节日，信徒们前往雪山朝圣。\n• 帕查妈妈节：庆祝大地母亲的节日，感谢大地的馈赠。\n• 动物标记节（Chaccu）：传统的骆马标记和剪毛活动，体现了可持续利用传统。\n\n游客如果恰逢这些节日，可以观察到克丘亚文化的传统仪式和庆祝活动，但请务必尊重当地文化和传统，在获得许可后再拍照或参与。" }
      ],
      events: { title: "推荐活动", items: [
        "徒步旅行：公园内有数条世界知名的徒步路线，如Santa Cruz trek、Laguna 69一日徒步等",
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
      price: { title: "门票费用", content: "外国游客（按天数阶梯收费）：\n• 单日票：30 PEN（约合 $8.50 - $9.00 USD）\n• 2-3天票：约 60 PEN\n• 4-30天票：约 150 PEN\n\n秘鲁游客：约 11 秘鲁索尔\n当地社区：免费\n\n（以上费用受汇率波动影响，以当地官方最新公布为准）", note: "⚠️ 重要提示：尽管某些在线地图平台可能标有误导性信息，但为了保护安第斯原生态野生动物，瓦斯卡兰国家公园全面禁止携带狗或其他宠物入内。具体费用和规定请提前查询或致电 +51 43 422 086 咨询。某些区域可能需要导游陪同。" },
      duration: { title: "建议游览时长", content: "建议预留 1 – 7 天", note: "若计划徒步，建议预留3-7天。一日游可以参观Llanganuco湖泊群等较易到达的景点。请根据体力和时间合理安排。" },
      birds: { title: "生态观察：安第斯生物多样性", content: "瓦斯卡兰国家公园是观察安第斯生物多样性的绝佳地点。在这里，您可以观察到：\n\n• 安第斯神鹰（Cóndor andino）：世界上最大的飞禽之一，翼展可达3.2米\n• 眼镜熊（Oso de anteojos）：南美洲唯一的熊类，公园内重要的保护物种\n• 骆马（Vicuña）：安第斯高原的特有动物，毛质极为优良\n• 普亚凤梨（Puya raimondii）：巨大的凤梨科植物，数十年才开一次花\n• 高原植物：多种适应高海拔环境的特有植物\n\n公园的生物多样性极为丰富，建议您慢慢观察，发现安第斯生态系统的独特之美。" },
      bring: { title: "游览建议物品", items: ["保暖衣物（高海拔地区温差大）", "防晒用品与墨镜（高海拔紫外线强）", "防蚊虫用品（低海拔地区）", "徒步鞋或登山鞋", "防水外套（山区天气多变）", "水和高能量食物", "氧气罐（如有高原反应）", "相机和备用电池", " trekking poles（徒步杖）", "睡袋（如计划过多天徒步）"] },
      route: { title: "主要探索路线", content: "我们特别推荐以下瓦斯卡兰国家公园探索路线：\n\n1. 一日游路线：从Yungay或Caraz出发，前往Llanganuco湖泊群（Chinancocha和Orconcocha），欣赏壮丽的雪山倒影。\n2. Laguna 69 徒步（单日）：公园内最受欢迎的单日徒步路线，前往海拔4600米的壮丽高原湖泊。\n3. Santa Cruz Trek（4-5天）：世界知名的徒步路线，穿越布兰卡山脉，欣赏多个6000米级雪峰。\n4. Pastoruri 冰川气候变化路线：前往帕斯托鲁里冰川，亲眼见证全球变暖对地球水资源的影响。\n5. 登山路线：需要专业向导和装备，攀登瓦斯卡兰峰或其他技术型山峰。\n\n请根据自身体力和经验选择合适的路线，并务必聘请当地向导。" }
    },
    transportation: {
      title: "交通接驳",
      airport: { title: "从利马或特鲁希略出发", content: "距离利马约 450 公里，车程约 8-10 小时。距离特鲁希略约 200 公里，车程约 4-5 小时。所有游客需先到达瓦拉斯（Huaraz）——布兰卡山脉的绝对大本营。", options: [
        { name: "长途汽车(经济实惠)", price: "约 $20 - $40 美元", time: "约 8-10 小时", steps: ["在利马或特鲁希略乘坐长途汽车前往Huaraz（瓦拉斯）", "Huaraz是安卡什大区首府，95%的游客和科考队在此落脚", "在Huaraz租好装备、适应海拔后，再前往Yungay或Caraz", "从Huaraz到Yungay约1.5小时车程"] },
        { name: "包车/租车(最便捷)", price: "约 $150 - $250 美元", time: "约 8-10 小时", steps: ["租车或包车从利马前往Huaraz", "沿途可欣赏安第斯山脉风光", "建议在Huaraz停留1-2天适应海拔（3052米）", "适应后再前往公园各入口"] }
      ]},
      city: { title: "从Huaraz前往Yungay或Caraz", content: "瓦拉斯（Huaraz）是整个布兰卡山脉的绝对大本营（Base Camp）。所有游客都应先到达这里，租装备、适应海拔，再前往公园入口。", steps: ["从Huaraz乘坐长途汽车或包车前往Yungay（约1.5小时）", "从Huaraz乘坐长途汽车或包车前往Caraz（约2小时）", "导航: 在 Google Maps 中输入 Parque Nacional Huascarán", "从Yungay出发约30分钟可到达Llanganuco入口", "从Caraz出发约1小时可到达Llanganuco入口"] },
      selfDrive: { title: "自驾前往", content: "从利马自驾前往公园非常方便，但需要注意高海拔路段。建议先在Huaraz适应海拔。", steps: ["导航至 Parque Nacional Huascarán, Yungay, Perú", "道路状况良好，但部分路段海拔较高", "建议先在Huaraz（3052米）停留1-2天适应海拔", "适应后再前往公园各入口，准备应对高海拔反应"] }
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
    reviews: { title: "探险者日志", subtitle: "来自安第斯的声音：Google Maps 真实见证", viewMore: "在 Google Maps 查看更多见证" },
    faq: { title: "常见问题", subtitle: "深入了解瓦斯卡兰国家公园", items: [
      { question: "瓦斯卡兰国家公园的开放时间是？", answer: "公园一般为06:00-18:00开放，但具体时间可能因季节和区域而异。不同入口的开放时间也可能不同。建议提前向公园管理处确认，电话：+51 43 422 086。" },
      { question: "进入公园需要门票吗？费用是多少？", answer: "是的，进入公园需要购买门票。外国游客约30秘鲁索尔，秘鲁游客约11秘鲁索尔，当地社区免费。某些区域可能需要导游陪同。建议提前查询或致电咨询具体费用。" },
      { question: "瓦斯卡兰国家公园有什么特色？", answer: "瓦斯卡兰国家公园是联合国教科文组织世界自然遗产，拥有：\n1. 27座6000米以上的雪峰，包括秘鲁最高峰瓦斯卡兰峰（6768米）\n2. 超过700平方公里的冰川\n3. 数百个高山湖泊\n4. 极高的生物多样性，包括眼镜熊、安第斯神鹰等珍稀物种\n5. 克丘亚文化的传统社区" },
      { question: "公园有哪些推荐活动？适合什么水平的游客？", answer: "公园提供多种活动：\n1. 一日游：参观Llanganuco湖泊群等较易到达的景点，适合所有游客\n2. 徒步旅行：Santa Cruz trek（4-5天）、Huayhuash trek（8-12天）等，适合有经验的徒步者\n3. 登山：技术型登山，需要专业向导和装备\n4. 观鸟和野生动物观察：适合自然爱好者\n\n请根据自身体力和经验选择合适的活动。" },
      { question: "如何前往瓦斯卡兰国家公园？", answer: "公园位于秘鲁安卡什大区，主要入口在Yungay和Caraz附近。从利马乘坐长途汽车约8-10小时，从特鲁希略约4-5小时。具体导航可在 Google Maps 中搜索\"Parque Nacional Huascarán, Yungay, Perú\"。" },
      { question: "游览公园需要注意什么？有什么安全建议？", answer: "游览公园需要注意：\n1. 高海拔：注意预防高原反应，建议逐步适应海拔\n2. 天气：山区天气多变，需携带保暖衣物和防水外套\n3. 安全：某些区域需要导游陪同，不要独自前往偏僻区域\n4. 环保：将所有垃圾带走，不要干扰野生动物\n5. 文化：尊重当地克丘亚社区的文化和传统" },
      { question: "公园附近还有哪些值得一游的景点？", answer: "安卡什大区有许多值得游览的核心景点，包括：\n1. 查文德万塔尔（Chavín de Huántar）——联合国教科文组织世界文化遗产，距今3000年的神秘前印加文明遗址\n2. 永盖圣地（Campo Santo de Yungay）——1970年雪崩被掩埋的城市遗址，极具历史纪念意义\n3. 蒙特雷温泉（Baños Termales de Monterrey）——登山者最爱的天然温泉\n4. 瓦拉斯（Huaraz）——安卡什大区首府，徒步者的重要基地和装备租赁中心\n5. 当地市场——购买安第斯传统手工艺品和特产" }
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
    nav: { about: "Overview", history: "History", ecology: "Ecology", culture: "Culture & Legends", visiting: "Visit Guide", transportation: "Getting There", tips: "Travel Tips", gallery: "Photo Gallery", reviews: "Explorer Logs", faq: "FAQ", location: "Location" },
    hero: { tagline: "Ancash, Peru · UNESCO World Heritage Site", title: "Huascarán National Park", subtitle: "Parque Nacional Huascarán · Cordillera Blanca", cta: "Explore the Park" },
    rating: { reviews: "reviews", source: "Google Reviews" },
    about: {
      title: "Overview",
      p1: "Huascarán National Park is located in the Ancash region of Peru. It is a UNESCO World Heritage Site and the core protected area of the Cordillera Blanca, the world's highest tropical mountain range. The park contains 27 snow-capped peaks over 6,000 meters, including Huascarán, the highest peak in Peru at 6,768 meters.\n\nCovering an area of approximately 3,400 square kilometers, the park encompasses multiple ecosystems from high mountain glaciers to tropical cloud forests. It is home to numerous rare species of flora and fauna, including the spectacled bear, Andean condor, and Puya raimondii (locally known as Titanca). The park is also one of the birthplaces of Quechua culture, with rich cultural heritage and traditional communities.",
      p2: "Huascarán National Park is not only a natural protected area but also a world-renowned destination for trekking and mountaineering. Every year, it attracts visitors from around the world to explore its magnificent mountains, glaciers, highland lakes, and unique Andean biodiversity. The park is committed to ecological protection and sustainable development, allowing visitors to appreciate the natural beauty while also understanding and protecting this precious World Heritage Site.",
      highlights: { title: "Highlights", items: ["World Heritage: UNESCO World Natural Heritage Site (1985)", "Highest Peak: Huascarán summit at 6,768m, the highest in Peru", "Snow Peaks: 27 peaks over 6,000 meters", "Ecosystems: From high mountain glaciers to tropical cloud forests", "Rare Species: Spectacled bear, Andean condor, Puya raimondii (Titanca)"] },
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
      intro: "The history of Huascarán National Park dates back to 1975, when the Peruvian government recognized the unique ecological value and biodiversity of the Cordillera Blanca and decided to establish a national park for protection.\n\nThe establishment of the park not only protected the natural ecology but also protected the traditional lands and cultural heritage of the local Quechua culture. Today, the park is a model not only for natural protection but also for cultural preservation. There is also a heavy historical memory carried here.",
      sections: [
        { subtitle: "Park Establishment & Protection", content: "In 1975, Huascarán National Park was officially established, covering an area of 3,400 square kilometers. The park was established to protect the glaciers, highland lakes, rivers, and unique Andean biodiversity of the Cordillera Blanca. The park contains the world's highest mountain range in the tropics and is the only habitat for many rare species." },
        { subtitle: "1970 Ancash Earthquake & Yungay Avalanche", content: "On May 31, 1970, a magnitude 7.9 earthquake triggered a massive collapse of the glacier on the north side of Huascarán. Hundreds of millions of cubic meters of ice, snow, and rock rushed down at a speed of 300 km/h, instantly burying the city of Yungay below, causing tens of thousands of casualties. Today's Yungay town was rebuilt several kilometers away from the original site. This history reminds visitors of the unpredictability of high mountain environments and is an important part of natural scientific research." },
        { subtitle: "World Heritage Designation", content: "In 1985, Huascarán National Park was designated as a UNESCO World Natural Heritage Site. This designation confirmed the importance of the park in terms of global ecological and cultural value. The park is not only a model for natural protection but also a model for the protection of Andean culture and traditional communities." }
      ]
    },
    ecology: {
      title: "Ecology & Environment",
      sections: [
        { subtitle: "🏔️ High Mountain Ecosystem: Glaciers & Snow Peaks", content: "The most striking feature of Huascarán National Park is its magnificent high mountain ecosystem. The park contains 27 snow-capped peaks over 6,000 meters, with Huascarán summit (6,768m) being the highest peak in Peru and the highest in the tropics.\n\nThe park contains over 700 square kilometers of glaciers, which are important sources of fresh water for the Andean region. With global warming, the glaciers are retreating. The park administration is implementing monitoring and protection projects to protect this fragile glacier ecosystem.\n\nIn addition to glaciers, the park contains hundreds of highland lakes (cochas), such as the famous Llanganuco lake system, Lake Parón, etc. These lakes are formed by glacier meltwater and have unique turquoise colors, surrounded by snow peaks, creating spectacular scenery." },
        { subtitle: "🌿 Biodiversity: From Highlands to Cloud Forests", content: "The elevation of Huascarán National Park ranges from 2,000m to 6,768m, covering multiple ecosystems, thus possessing extremely high biodiversity:\n\n• Flora: Over 1,200 plant species have been recorded in the park, including the unique Puya raimondii (locally known as Titanca), a giant bromeliad that can grow up to 10 meters tall and flowers only once in its lifetime, then dies.\n• Birds: Over 160 bird species, including the Andean condor (Vultur gryphus).\n• Mammals: Including the spectacled bear (Tremarctos ornatus, the only bear species in South America), puma, vicuña, alpaca, etc.\n• Amphibians: Multiple endemic highland frog species.\n\nThe park's ecosystems range from highland tundra (puna) to highland wetlands (bofedales) to tropical cloud forests on the eastern slopes, each with its unique flora and fauna communities." },
        { subtitle: "🌡️ Vanishing Glaciers: Witnesses of Climate Change", content: "The Cordillera Blanca contains the largest tropical glacier area in the world, but nearly 30% has melted in the past 50 years. The Pastoruri Glacier in the park has now been developed as the \"Climate Change Route (Ruta del Cambio Climático)\".\n\nWe encourage visitors to come here not to conquer, but to witness firsthand the irreversible impact of global warming on Earth's water resources. The retreat of Pastoruri Glacier is a microcosm of global climate change, reminding us of the urgency of protecting the environment.\n\nAs a non-profit science popularization website, we advocate that all visitors: come with the purpose of learning and reflection, not just sightseeing. Understanding climate change is the first step to better protecting our planet." },
        { subtitle: "♻️ Environmental Initiative: Protecting Fragile High Mountain Ecology", content: "The ecosystem of Huascarán National Park is extremely fragile, especially the glaciers and highland wetlands. Global warming, tourism activities, and grazing can all impact the park's ecology.\n\nAs a responsible visitor, please follow these principles:\n• Do not leave marked trails and trekking routes\n• Do not pick plants or disturb wildlife\n• Take all garbage with you, do not leave it in the park\n• Do not use soap or shampoo in lakes or rivers\n• Respect the culture and traditions of local communities\n• Advocate Leave No Trace: Bring water purification equipment, avoid using plastic bottles\n\nLet's protect this World Heritage Site together, so that the magnificent Cordillera Blanca can be preserved forever." }
      ]
    },
    culture: {
      title: "Culture & Legends",
      intro: "Huascarán National Park is not only a model for natural protection but also an important preservation site for Quechua culture. Many Quechua communities live within and around the park, maintaining traditional lifestyles and cultural practices. There are also many beautiful Andean legends passed down here.",
      sections: [
        { subtitle: "🏔️ Quechua Culture: Traditional Guardians of the Andes", content: "The area around Huascarán National Park is one of the important birthplaces of Quechua culture. Local Quechua communities (comunidades campesinas) have lived here for generations, guarding the traditional knowledge and culture of the Andes.\n\nThe Quechua people have a deep tradition of nature worship. They worship Apus (mountain gods), Pachamama (Mother Earth), and Inti (Sun God). In Quechua culture, Huascarán summit is regarded as a sacred Apu, a symbol of strength and protection.\n\nVisitors to the park may encounter local Quechua herders who graze vicuñas, alpacas, and sheep. The traditional grazing methods of these communities are coordinated with the park's ecological protection goals and are a model for sustainable use of natural resources." },
        { subtitle: "💧 Legend: The Tears of Huascarán and Huandoy", content: "In Andean legend, Huascarán was a handsome commoner youth, while Huandoy was the beautiful daughter of the Inca king. They fell deeply in love, but faced strong opposition from the king. Eventually, they were both turned into giant snow peaks facing each other, never able to touch.\n\nThe famous Llanganuco lake system, with one side presenting turquoise color and the other deep blue, is said to be the tears shed by these two snow mountains for being unable to be together, converging into lakes. This beautiful legend adds rich cultural depth to the magnificent Cordillera Blanca." },
        { subtitle: "🎉 Traditional Festivals & Activities", content: "Quechua communities around the park retain many traditional festivals, which are usually related to agricultural cycles and nature worship:\n\n• Qoyllur Rit'i (Lord of the Snow Star): A traditional festival held every June, where devotees make pilgrimages to snow mountains.\n• Pachamama Festival: A festival celebrating Mother Earth, giving thanks for the earth's bounty.\n• Chaccu (Animal Marking): Traditional vicuña marking and shearing activity, reflecting sustainable use traditions.\n\nIf visitors happen to be in the area during these festivals, they can observe traditional Quechua cultural rituals and celebrations, but please respect local culture and traditions and obtain permission before taking photos or participating." }
      ],
      events: { title: "Recommended Activities", items: [
        "Trekking: The park has several world-renowned trekking routes, such as Santa Cruz trek, Laguna 69 day trek, etc.",
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
      price: { title: "Entrance Fees", content: "Foreign visitors (tiered by days):\n• 1-day ticket: 30 PEN (approx. $8.50 - $9.00 USD)\n• 2-3 day ticket: Approx. 60 PEN\n• 4-30 day ticket: Approx. 150 PEN\n\nPeruvian visitors: Approx. 11 PEN\nLocal communities: Free\n\n(Above fees subject to exchange rate fluctuations, please refer to official announcement)", note: "⚠️ Important Note: Despite misleading information that may be displayed on certain online map platforms, Huascarán National Park strictly prohibits bringing dogs or other pets into the park to protect the Andean ecosystem and wildlife. Please make appropriate arrangements before your visit. Specific fees and regulations should be checked in advance or call +51 43 422 086 for consultation. Guides may be required to accompany visitors in certain areas." },
      duration: { title: "Recommended Duration", content: "Recommended: 1 – 7 days", note: "If planning trekking, 3-7 days are recommended. Day trips can visit easily accessible attractions like the Llanganuco lake system. Please arrange reasonably according to your physical strength and time." },
      birds: { title: "Ecological Observation: Andean Biodiversity", content: "Huascarán National Park is an excellent place to observe Andean biodiversity. Here, you can observe:\n\n• Andean Condor (Cóndor andino): One of the world's largest flying birds, with a wingspan of up to 3.2 meters\n• Spectacled Bear (Oso de anteojos): The only bear species in South America, an important protected species in the park\n• Vicuña: A unique animal of the Andean highlands, with extremely fine wool\n• Puya raimondii: A giant bromeliad that flowers only once every few decades\n• Highland plants: Multiple endemic plant species adapted to high altitude environments\n\nThe biodiversity of the park is extremely rich. It is recommended that you observe slowly and discover the unique beauty of the Andean ecosystem." },
      bring: { title: "Recommended Items", items: ["Warm clothing (large temperature difference at high altitude)", "Sun protection & sunglasses (strong UV at high altitude)", "Insect repellent (lower altitudes)", "Trekking boots or mountaineering boots", "Waterproof jacket (changeable mountain weather)", "Water and high-energy food", "Oxygen tank (if altitude sickness)", "Camera and spare batteries", "Trekking poles", "Sleeping bag (if planning multi-day trekking)"] },
      route: { title: "Exploration Routes", content: "We especially recommend the following Huascarán National Park exploration routes:\n\n1. Day trip route: Depart from Yungay or Caraz to visit the Llanganuco lake system (Chinancocha and Orconcocha), enjoying the spectacular snow mountain reflections.\n2. Laguna 69 Trek (1 day): The most popular day trek in the park, leading to the magnificent highland lake at 4,600m.\n3. Santa Cruz Trek (4-5 days): A world-renowned trekking route traversing the Cordillera Blanca, admiring multiple 6,000m snow peaks.\n4. Pastoruri Glacier Climate Change Route: Visit the Pastoruri Glacier to witness firsthand the irreversible impact of global warming on Earth's water resources.\n5. Mountaineering route: Requires professional guides and equipment to climb Huascarán summit or other technical peaks.\n\nPlease choose the appropriate route according to your physical strength and experience, and be sure to hire a local guide." }
    },
    transportation: {
      title: "Getting There",
      airport: { title: "From Lima or Trujillo", content: "About 450 km from Lima, approx. 8-10 hours by car. About 200 km from Trujillo, approx. 4-5 hours by car. All visitors must first arrive at Huaraz — the absolute base camp of the Cordillera Blanca.", options: [
        { name: "Long-distance Bus (Economical)", price: "About $20 - $40 USD", time: "About 8-10 hours", steps: ["Take a long-distance bus from Lima or Trujillo to Huaraz", "Huaraz is the capital of Ancash region, where 95% of visitors and expedition teams base themselves", "Rent equipment and acclimate to altitude in Huaraz before heading to Yungay or Caraz", "About 1.5 hours from Huaraz to Yungay"] },
        { name: "Chartered Car/Rental (Most Convenient)", price: "About $150 - $250 USD", time: "About 8-10 hours", steps: ["Rent a car or charter a car from Lima to Huaraz", "Enjoy Andean mountain scenery along the way", "It is recommended to stay in Huaraz (3,052m) for 1-2 days to acclimate", "After acclimation, head to various park entrances"] }
      ]},
      city: { title: "From Huaraz to Yungay or Caraz", content: "Huaraz is the absolute base camp of the Cordillera Blanca. All visitors should first arrive here, rent equipment, acclimate to altitude, and then head to park entrances.", steps: ["Take a long-distance bus or chartered car from Huaraz to Yungay (approx. 1.5 hours)", "Take a long-distance bus or chartered car from Huaraz to Caraz (approx. 2 hours)", "Navigation: Enter Parque Nacional Huascarán in Google Maps", "About 30 minutes from Yungay to Llanganuco entrance", "About 1 hour from Caraz to Llanganuco entrance"] },
      selfDrive: { title: "Driving", content: "It is very convenient to drive from Lima to the park, but attention should be paid to high altitude sections. It is recommended to acclimate in Huaraz first.", steps: ["Navigate to Parque Nacional Huascarán, Yungay, Perú", "Road conditions are good, but some sections are at high altitude", "It is recommended to stay in Huaraz (3,052m) for 1-2 days to acclimate", "After acclimation, head to various park entrances, prepare for altitude sickness"] }
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
    reviews: { title: "Explorer Logs", subtitle: "Voices from the Andes: Real Reviews from Google Maps", viewMore: "View More Logs on Google Maps" },
    faq: { title: "Frequently Asked Questions", subtitle: "Learn more about Huascarán National Park", items: [
      { question: "What are the opening hours of Huascarán National Park?", answer: "The park is generally open 06:00-18:00, but specific times may vary by season and zone. Different entrances may have different opening hours. It is recommended to confirm with the park administration in advance, phone: +51 43 422 086." },
      { question: "Is there an entrance fee? How much is it?", answer: "Yes, entering the park requires purchasing a ticket. Foreign visitors approx. 30 PEN, Peruvian visitors approx. 11 PEN, local communities free. Guides may be required in certain areas. It is recommended to check in advance or call for consultation on specific fees." },
      { question: "What are the features of Huascarán National Park?", answer: "Huascarán National Park is a UNESCO World Natural Heritage Site, featuring:\n1. 27 snow peaks over 6,000 meters, including Huascarán, the highest peak in Peru (6,768m)\n2. Over 700 square kilometers of glaciers\n3. Hundreds of highland lakes\n4. Extremely high biodiversity, including spectacled bear, Andean condor, and other rare species\n5. Traditional Quechua culture communities" },
      { question: "What activities are recommended in the park? Suitable for what level of visitors?", answer: "The park offers various activities:\n1. Day trip: Visit easily accessible attractions like Llanganuco lake system, suitable for all visitors\n2. Trekking: Santa Cruz trek (4-5 days), Huayhuash trek (8-12 days), etc., suitable for experienced trekkers\n3. Mountaineering: Technical mountaineering, requires professional guides and equipment\n4. Birdwatching and wildlife observation: Suitable for nature lovers\n\nPlease choose activities appropriate to your physical strength and experience." },
      { question: "How to get to Huascarán National Park?", answer: "The park is located in the Ancash region of Peru, with main entrances near Yungay and Caraz. About 8-10 hours by long-distance bus from Lima, about 4-5 hours from Trujillo. For specific navigation, search for \"Parque Nacional Huascarán, Yungay, Perú\" in Google Maps." },
      { question: "What should I pay attention to when visiting the park? Any safety recommendations?", answer: "When visiting the park, please note:\n1. High altitude: Pay attention to preventing altitude sickness, gradual acclimatization to altitude is recommended\n2. Weather: Mountain weather is changeable, need to carry warm clothing and waterproof jacket\n3. Safety: Certain areas require guide accompaniment, do not go to remote areas alone\n4. Environmental protection: Take all garbage with you, do not disturb wildlife\n5. Culture: Respect the culture and traditions of local Quechua communities" },
      { question: "What other attractions are worth visiting near the park?", answer: "There are many core attractions worth visiting in the Ancash region, including:\n1. Chavín de Huántar — UNESCO World Cultural Heritage Site, a mysterious pre-Inca civilization site dating back 3,000 years\n2. Campo Santo de Yungay — the city site buried by the 1970 avalanche, of great historical memorial significance\n3. Baños Termales de Monterrey — natural hot springs loved by mountaineers\n4. Huaraz — capital of Ancash region, important base for trekkers and equipment rental center\n5. Local markets — buy traditional Andean handicrafts and specialties" }
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
    nav: { about: "Descripción", history: "Historia", ecology: "Ecología", culture: "Cultura y Leyendas", visiting: "Guía de Visita", transportation: "Cómo Llegar", tips: "Consejos", gallery: "Galería de Fotos", reviews: "Registros de Exploradores", faq: "Preguntas Frecuentes", location: "Ubicación" },
    hero: { tagline: "Ancash, Perú · Patrimonio Natural de la Humanidad", title: "Parque Nacional Huascarán", subtitle: "Cordillera Blanca · Ancash, Perú", cta: "Explora el Parque" },
    rating: { reviews: "reseñas", source: "Google Reviews" },
    about: {
      title: "Descripción General",
      p1: "El Parque Nacional Huascarán se encuentra en la región Ancash de Perú. Es un Sitio del Patrimonio Mundial de la UNESCO y el área protegida central de la Cordillera Blanca, la cadena montañosa tropical más alta del mundo. El parque contiene 27 picos nevados sobre los 6,000 metros, incluyendo el Huascarán, la cumbre más alta del Perú a 6,768 metros.\n\nCubriendo un área de aproximadamente 3,400 kilómetros cuadrados, el parque abarca múltiples ecosistemas desde glaciares de alta montaña hasta bosques nublados tropicales. Es el hogar de numerosas especies raras de flora y fauna, incluyendo el oso de anteojos, el cóndor andino y la Puya raimondii (localmente conocida como Titanca). El parque también es uno de los lugares de origen de la cultura quechua, con rico patrimonio cultural y comunidades tradicionales.",
      p2: "El Parque Nacional Huascarán no es solo un área natural protegida, sino también un destino mundialmente conocido para el trekking y el andinismo. Cada año, atrae visitantes de todo el mundo para explorar sus magníficas montañas, glaciares, lagunas de altura y única biodiversidad andina. El parque está comprometido con la protección ecológica y el desarrollo sostenible, permitiendo a los visitantes apreciar la belleza natural mientras comprenden y protegen este preciado Sitio del Patrimonio Mundial.",
      highlights: { title: "Datos Destacados", items: ["Patrimonio Mundial: Sitio del Patrimonio Natural Mundial de la UNESCO (1985)", "Cumbre más alta: Cumbre Huascarán a 6,768m, la más alta del Perú", "Picos nevados: 27 picos sobre 6,000 metros", "Ecosistemas: Desde glaciares de alta montaña hasta bosques nublados tropicales", "Especies raras: Oso de anteojos, cóndor andino, Puya raimondii (Titanca)"] },
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
        { subtitle: "Terremoto de Ancash 1970 y Avalancha de Yungay", content: "El 31 de mayo de 1970, un terremoto de magnitud 7.9 provocó un colapso masivo del glaciar en el lado norte de Huascarán. Cientos de millones de metros cúbicos de hielo, nieve y roca se precipitaron a una velocidad de 300 km/h, enterrando instantáneamente la ciudad de Yungay debajo, causando decenas de miles de víctimas. El Yungay town de hoy fue reconstruido varios kilometros lejos del sitio original. Esta historia recuerda a los visitantes la impredecibilidad de los ambientes de alta montaña y es una parte importante de la investigación científica natural." },
        { subtitle: "Designación de Patrimonio Mundial", content: "En 1985, el Parque Nacional Huascarán fue designado como Sitio del Patrimonio Natural Mundial de la UNESCO. Esta designación confirmó la importancia del parque en términos de valor ecológico y cultural global. El parque no es solo un modelo para la protección natural, sino también un modelo para la protección de la cultura andina y las comunidades tradicionales." }
      ]
    },
    ecology: {
      title: "Ecología y Medio Ambiente",
      sections: [
        { subtitle: "🏔️ Ecosistema de Alta Montaña: Glacias y Picos Nevados", content: "La característica más impresionante del Parque Nacional Huascarán es su magnífico ecosistema de alta montaña. El parque contiene 27 picos nevados sobre los 6,000 metros, con la cumbre Huascarán (6,768m) siendo la cumbre más alta del Perú y la más alta en los trópicos.\n\nEl parque contiene más de 700 kilómetros cuadrados de glaciares, que son fuentes importantes de agua dulce para la región andina. Con el calentamiento global, los glaciares se están retirando. La administración del parque está implementando proyectos de monitoreo y protección para proteger este frágil ecosistema glaciar.\n\nAdemás de los glaciares, el parque contiene cientos de lagunas de altura (cochas), como el famoso sistema de lagunas Llanganuco, Laguna Parón, etc. Estas lagunas se forman por el deshielo glaciar y tienen colores turquesa únicos, rodeados por picos nevados, creando paisajes espectaculares." },
        { subtitle: "🌿 Biodiversidad: Desde Alturas hasta Bosques Nublados", content: "La elevación del Parque Nacional Huascarán varía desde 2,000m hasta 6,768m, cubriendo múltiples ecosistemas, poseyendo por lo tanto una biodiversidad extremadamente alta:\n\n• Flora: Se han registrado más de 1,200 especies de plantas en el parque, incluyendo la única Puya raimondii (localmente conocida como Titanca), una bromeliácea gigante que puede crecer hasta 10 metros de alto y florece solo una vez en su vida, luego muere.\n• Aves: Más de 160 especies de aves, incluyendo el cóndor andino (Vultur gryphus).\n• Mamíferos: Incluyendo el oso de anteojos (Tremarctos ornatus, la única especie de oso en Sudamérica), puma, vicuña, alpaca, etc.\n• Anfibios: Múltiples especies de ranas de altura endémicas.\n\nLos ecosistemas del parque van desde la tundra de altura (puna) hasta los humedales de altura (bofedales) hasta los bosques nublados tropicales en las laderas orientales, cada uno con sus únicas comunidades de flora y fauna." },
        { subtitle: "🌡️ Glaciares que desaparecen: Testigos del cambio climático", content: "La Cordillera Blanca contiene la mayor área de glaciares tropicales del mundo, pero casi el 30% se ha derretido en los últimos 50 años. El Glaciar Pastoruri en el parque ha sido desarrollado como la \"Ruta del Cambio Climático (Ruta del Cambio Climático)\".\n\nAlentamos a los visitantes a venir aquí no para conquistar, sino para presenciar de primera mano el impacto irreversible del calentamiento global en los recursos hídricos de la Tierra. El retroceso del Glaciar Pastoruri es un microcosmos del cambio climático global, recordándonos la urgencia de proteger el medio ambiente.\n\nComo sitio web de divulgación científica sin fines de lucro, abogamos por que todos los visitantes: vengan con el propósito de aprender y reflexionar, no solo de turismo. Comprender el cambio climático es el primer paso para mejor proteger nuestro planeta." },
        { subtitle: "♻️ Iniciativa Ambiental: Protegiendo el Frágil Ecosistema de Alta Montaña", content: "El ecosistema del Parque Nacional Huascarán es extremadamente frágil, especialmente los glaciares y los humedales de altura. El calentamiento global, las actividades turísticas y el pastoreo pueden afectar la ecología del parque.\n\nComo visitante responsable, por favor siga estos principios:\n• No abandone los senderos marcados y rutas de trekking\n• No recoja plantas ni perturbe la vida silvestre\n• Lleve toda la basura con usted, no la deje en el parque\n• No use jabón o champú en lagunas o ríos\n• Respete la cultura y tradiciones de las comunidades locales\n• Abogue por Leave No Trace (Deje No Rastro): Traiga equipo de purificación de agua, evite usar botellas de plástico\n\nProtejamos juntos este Sitio del Patrimonio Mundial, para que la magnífica Cordillera Blanca pueda ser preservada para siempre." }
      ]
    },
    culture: {
      title: "Cultura y Leyendas",
      intro: "El Parque Nacional Huascarán no es solo un modelo para la protección natural, sino también un importante sitio de preservación de la cultura quechua. Muchas comunidades quechua viven dentro y alrededor del parque, manteniendo estilos de vida tradicionales y prácticas culturales. También hay muchas hermosas leyendas andinas pasadas de generación en generación.",
      sections: [
        { subtitle: "🏔️ Cultura Quechua: Guardianes Tradicionales de los Andes", content: "El área alrededor del Parque Nacional Huascarán es uno de los importantes lugares de origen de la cultura quechua. Las comunidades quechua locales (comunidades campesinas) han vivido aquí por generaciones, guardando el conocimiento tradicional y la cultura de los Andes.\n\nEl pueblo quechua tiene una profunda tradición de adoración a la naturaleza. Adoran a los Apus (dioses de las montañas), Pachamama (Madre Tierra) e Inti (Dios Sol). En la cultura quechua, la cumbre Huascarán es considerada un Apu sagrado, un símbolo de fortaleza y protección.\n\nLos visitantes al parque pueden encontrar pastores quechua locales que pastorean vicuñas, alpacas y ovejas. Los métodos tradicionales de pastoreo de estas comunidades se coordinan con los objetivos de protección ecológica del parque y son un modelo para el uso sostenible de recursos naturales." },
        { subtitle: "💧 Leyenda: Las Lágrimas de Huascarán y Huandoy", content: "En la leyenda andina, Huascarán era un joven apuesto común, mientras que Huandoy era la hermosa hija del rey Inca. Se enamoraron profundamente, pero enfrentaron fuerte oposición del rey. Eventualmente, ambos fueron convertidos en gigantes picos nevados frente a frente, sin poder tocarse nunca.\n\nEl famoso sistema de lagunas Llanganuco, con un lado presentando color turquesa y el otro azul profundo, se dice que son las lágrimas derramadas por estos dos picos nevados por no poder estar juntos, convergiendo en lagunas. Esta hermosa leyenda agrega profundidad cultural a la magnífica Cordillera Blanca." },
        { subtitle: "🎉 Festividades y Actividades Tradicionales", content: "Las comunidades quechua alrededor del parque retienen muchas festividades tradicionales, que generalmente están relacionadas con los ciclos agrícolas y la adoración a la naturaleza:\n\n• Qoyllur Rit'i (Señor de la Estrella de Nieve): Una festividad tradicional que se celebra cada junio, donde los devotos hacen peregrinaciones a las montañas nevadas.\n• Festividad de Pachamama: Una festividad que celebra a la Madre Tierra, dando gracias por los dones de la tierra.\n• Chaccu (Marcado de Animales): Actividad tradicional de marcado y esquila de vicuñas, que refleja tradiciones de uso sostenible.\n\nSi los visitantes están en el área durante estas festividades, pueden observar rituales culturales quechua tradicionales y celebraciones, pero por favor respeten la cultura y tradiciones locales y obtengan permiso antes de tomar fotos o participar." }
      ],
      events: { title: "Actividades Recomendadas", items: [
        "Trekking: El parque tiene varias rutas de trekking mundialmente reconocidas, como Santa Cruz trek, Laguna 69 trek de un día, etc.",
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
      price: { title: "Tarifas de Entrada", content: "Visitantes extranjeros (por días):\n• Boleto de 1 día: 30 PEN (aprox. $8.50 - $9.00 USD)\n• Boleto de 2-3 días: Aprox. 60 PEN\n• Boleto de 4-30 días: Aprox. 150 PEN\n\nVisitantes peruanos: Aprox. 11 PEN\nComunidades locales: Gratis\n\n(Las tarifas anteriores están sujetas a fluctuaciones de la tasa de cambio, consulte el anuncio oficial)", note: "⚠️ Nota Importante: A pesar de la información engañosa que puede mostrarse en ciertas plataformas de mapas en línea, el Parque Nacional Huascarán prohíbe estrictamente traer perros u otras mascotas al parque para proteger el ecosistema y la vida silvestre andina. Por favor, haga arreglos apropiados antes de su visita. Se recomienda verificar tarifas y reglamentos específicos o llamar al +51 43 422 086 para consulta. Se pueden requerir guías para acompañar a visitantes en ciertas áreas." },
      duration: { title: "Duración Recomendada", content: "Recomendado: 1 – 7 días", note: "Si planea hacer trekking, se recomiendan 3-7 días. Los viajes de un día pueden visitar atractivos de fácil acceso como el sistema de lagunas Llanganuco. Por favor, organice razonablemente según su fuerza física y tiempo." },
      birds: { title: "Observación Ecológica: Biodiversidad Andina", content: "El Parque Nacional Huascarán es un excelente lugar para observar la biodiversidad andina. Aquí, puede observar:\n\n• Cóndor Andino (Vultur gryphus): Una de las aves voladoras más grandes del mundo, con una envergadura de hasta 3.2 metros\n• Oso de Anteojos (Tremarctos ornatus): La única especie de oso en Sudamérica, una especie protegida importante en el parque\n• Vicuña: Un animal único de las alturas andinas, con lana extremadamente fina\n• Puya raimondii: Una bromeliácea gigante que florece solo una vez cada pocas décadas\n• Plantas de altura: Múltiples especies de plantas endémicas adaptadas a ambientes de alta altitud\n\nLa biodiversidad del parque es extremadamente rica. Se recomienda que observe lentamente y descubra la belleza única del ecosistema andino." },
      bring: { title: "Artículos Recomendados", items: ["Ropa abrigadora (gran diferencia de temperatura a alta altitud)", "Protección solar y gafas de sol (UV fuerte a alta altitud)", "Repelente de insectos (altitudes más bajas)", "Botas de trekking o botas de andinismo", "Chaqueta impermeable (clima cambiable de montaña)", "Agua y comida de alta energía", "Tanque de oxígeno (si mal de altura)", "Cámara y baterías de repuesto", "Bastones de trekking", "Bolsa de dormir (si planea trekking de varios días)"] },
      route: { title: "Rutas de Exploración", content: "Recomendamos especialmente las siguientes rutas de exploración del Parque Nacional Huascarán:\n\n1. Ruta de un día: Salir de Yungay o Caraz para visitar el sistema de lagunas Llanganuco (Chinancocha y Orconcocha), disfrutando de los espectaculares reflejos de montañas nevadas.\n2. Laguna 69 Trek (1 día): La ruta de trekking de un día más popular en el parque, que lleva a la magnífica laguna de altura a 4,600m.\n3. Santa Cruz Trek (4-5 días): Una ruta de trekking mundialmente reconocida que atraviesa la Cordillera Blanca, admirando múltiples picos nevados de 6,000m.\n4. Ruta del Cambio Climático en Glaciar Pastoruri: Visite el Glaciar Pastoruri para presenciar de primera mano el impacto irreversible del calentamiento global en los recursos hídricos de la Tierra.\n5. Ruta de andinismo: Requiere guías profesionales y equipo para escalar la cumbre Huascarán u otros picos técnicos.\n\nPor favor, elija la ruta apropiada según su fuerza física y experiencia, y asegúrese de contratar un guía local." }
    },
    transportation: {
      title: "Cómo Llegar",
      airport: { title: "Desde Lima o Trujillo", content: "A unos 450 km de Lima, aproximadamente 8-10 horas en automóvil. A unos 200 km de Trujillo, aproximadamente 4-5 horas en automóvil. Todos los visitantes deben llegar primero a Huaraz — el campamento base absoluto de la Cordillera Blanca.", options: [
        { name: "Ómnibus de Larga Distancia (Económico)", price: "Aprox. $20 - $40 USD", time: "Aproximadamente 8-10 horas", steps: ["Tomar un ómnibus de larga distancia de Lima o Trujillo a Huaraz", "Huaraz es la capital de la región Ancash, donde el 95% de los visitantes y equipos de expedición se bases", "Alquilar equipo y aclimatarse a la altitud en Huaraz antes de dirigirse a Yungay o Caraz", "Aproximadamente 1.5 horas de Huaraz a Yungay"] },
        { name: "Auto Alquilado/Charter (Más Conveniente)", price: "Aprox. $150 - $250 USD", time: "Aproximadamente 8-10 horas", steps: ["Alquilar un auto o charter un auto de Lima a Huaraz", "Disfrutar del paisaje de montañas andinas en el camino", "Se recomienda permanecer en Huaraz (3,052m) por 1-2 días para aclimatarse", "Después de la aclimatación, dirigirse a varias entradas del parque"] }
      ]},
      city: { title: "Desde Huaraz a Yungay o Caraz", content: "Huaraz es el campamento base absoluto de la Cordillera Blanca. Todos los visitantes deben llegar aquí primero, alquilar equipo, aclimatarse a la altitud y luego dirigirse a las entradas del parque.", steps: ["Tomar un ómnibus de larga distancia o auto charter de Huaraz a Yungay (aprox. 1.5 horas)", "Tomar un ómnibus de larga distancia o auto charter de Huaraz a Caraz (aprox. 2 horas)", "Navegación: Ingresar Parque Nacional Huascarán en Google Maps", "Aproximadamente 30 minutos de Yungay a la entrada Llanganuco", "Aproximadamente 1 hora de Caraz a la entrada Llanganuco"] },
      selfDrive: { title: "Conduciendo", content: "Es muy conveniente conducir desde Lima al parque, pero se debe prestar atención a secciones de alta altitud. Se recomienda aclimatarse en Huaraz primero.", steps: ["Navegar al Parque Nacional Huascarán, Yungay, Perú", "Las condiciones de la carretera son buenas, pero algunas secciones están a alta altitud", "Se recomienda permanecer en Huaraz (3,052m) por 1-2 días para aclimatarse", "Después de la aclimatación, dirigirse a varias entradas del parque, prepararse para el mal de altura"] }
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
    reviews: { title: "Registros de Exploradores", subtitle: "Voces de los Andes: Reseñas reales de Google Maps", viewMore: "Ver Más Registros en Google Maps" },
    faq: { title: "Preguntas Frecuentes", subtitle: "Aprenda más sobre el Parque Nacional Huascarán", items: [
      { question: "¿Cuál es el horario de apertura del Parque Nacional Huascarán?", answer: "El parque generalmente está abierto de 06:00-18:00, pero los horarios específicos pueden variar según la temporada y la zona. Diferentes entradas pueden tener diferentes horarios de apertura. Se recomienda confirmar con la administración del parque con anticipación, teléfono: +51 43 422 086." },
      { question: "¿Hay tarifa de entrada? ¿Cuánto es?", answer: "Sí, ingresar al parque requiere comprar un boleto. Visitantes extranjeros aprox. 30 PEN, visitantes peruanos aprox. 11 PEN, comunidades locales gratis. Se pueden requerir guías para acompañar a visitantes en ciertas áreas. Se recomienda verificar con anticipación o llamar para consulta sobre tarifas específicas." },
      { question: "¿Cuáles son las características del Parque Nacional Huascarán?", answer: "El Parque Nacional Huascarán es un Sitio del Patrimonio Natural Mundial de la UNESCO, con características:\n1. 27 picos nevados sobre 6,000 metros, incluyendo Huascarán, la cumbre más alta del Perú (6,768m)\n2. Más de 700 kilómetros cuadrados de glaciares\n3. Cientos de lagunas de altura\n4. Biodiversidad extremadamente alta, incluyendo oso de anteojos, cóndor andino y otras especies raras\n5. Comunidades de cultura quechua tradicional" },
      { question: "¿Qué actividades se recomiendan en el parque? ¿Adecuado para qué nivel de visitantes?", answer: "El parque ofrece diversas actividades:\n1. Viaje de un día: Visite atractivos de fácil acceso como el sistema de lagunas Llanganuco, adecuado para todos los visitantes\n2. Trekking: Santa Cruz trek (4-5 días), Laguna 69 trek de un día, etc., adecuado para trekkers experimentados\n3. Andinismo: Andinismo técnico, requiere guías profesionales y equipo\n4. Observación de aves y vida silvestre: Adecuado para amantes de la naturaleza\n\nPor favor, elija actividades apropiadas a su fuerza física y experiencia." },
      { question: "¿Cómo llegar al Parque Nacional Huascarán?", answer: "El parque está ubicado en la región Ancash de Perú, con entradas principales cerca de Yungay y Caraz. Aproximadamente 8-10 horas en ómnibus de larga distancia desde Lima, aproximadamente 4-5 horas desde Trujillo. Para navegación específica, busque \"Parque Nacional Huascarán, Yungay, Perú\" en Google Maps." },
      { question: "¿Qué debe tener en cuenta al visitar el parque? ¿Alguna recomendación de seguridad?", answer: "Al visitar el parque, por favor note:\n1. Alta altitud: Preste atención a la prevención del mal de altura, se recomienda aclimatación gradual a la altitud\n2. Clima: El clima de montaña es cambiable, necesita llevar ropa abrigadora y chaqueta impermeable\n3. Seguridad: Ciertas áreas requieren acompañamiento de guía, no vaya a áreas remotas solo\n4. Protección ambiental: Lleve toda la basura con usted, no perturbe la vida silvestre\n5. Cultura: Respete la cultura y tradiciones de las comunidades quechua locales" },
      { question: "¿Qué otros atractivos vale la pena visitar cerca del parque?", answer: "Hay muchos atractivos centrales que vale la pena visitar en la región Ancash, incluyendo:\n1. Chavín de Huántar — Sitio del Patrimonio Cultural Mundial de la UNESCO, un misterioso sitio de civilización pre-Inca de hace 3,000 años\n2. Campo Santo de Yungay — el sitio de la ciudad enterrada por la avalancha de 1970, de gran significado conmemorativo histórico\n3. Baños Termales de Monterrey — aguas termales naturales amadas por andinistas\n4. Huaraz — capital de la región Ancash, importante base para trekkers y centro de alquiler de equipo\n5. Mercados locales — compre artesanías andinas tradicionales y especialidades" }
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
      p2: "Pakqa 3,400 kilometru iskaypatachá, achka ecosistema: rit'i urqukunamanta bosques nubladoskama. Achka rikch'aq uywakuna, pachamama, Puya raimondii (Titanca nisqa). Kaypi Quechua runakuna kawsanku, ñawpa willaykunawan.",
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
      intro: "Huascarán Nasyunal Pakpa ñawpan 1975 watakama, Piruw mamallacta Cordillera Blanca allin kawsayta rikuspami pakta kamarqan. Kaypi achka ñawpa willaypas tiyan.",
      sections: [
        { subtitle: "Pak kamarisqa", content: "1975 watapi, Huascarán Nasyunal Pak kamarisqa, 3,400 kilometru iskaypatachá. Rit'i urqukuna, quchakuna, mayukuna, achka rikch'aq uywakuna amachanapaq." },
        { subtitle: "1970 Ancash quake y Yungay avalanche", content: "1970 watapi mayu killapi, 7.9 quake-wan Huascarán rit'in tiyananmanta rit'i, yaku, rumikunata 300 km/h utaq-wan urmanarqan. Yungay llaqtata pakarqan, 10,000-manta aswan wañusqakuna. Kayqa achka willay, yachaypaq allin. Kayqa Pachamama mana hark'akuqta rikuchin." },
        { subtitle: "Pachamama Wiñay Kawsay", content: "1985 watapi, UNESCO Pachamama Wiñay Kawsay. Piruw, tikanpura aswan rikuriq. Runakunapaq, pachamamapaq allin." }
      ]
    },
    ecology: {
      title: "Pachamama",
      sections: [
        { subtitle: "Rit'i urqukuna", content: "Huascarán Nasyunal Pakqa 27 rit'i urqukunawan, 6,000 mitru hanaq. Huascarán 6,768 mitru, Piruw aswan hanaq.\n\n700 kilometru iskaypatachá rit'i (glaciares). Kay rit'ikunaqa mayukunapa yaku maskan. Unquyninwan, rit'ikuna puchukachkan. Pak runakuna maskan, amachan rit'ikunata.\n\nAchka quchakuna (cochas): Llanganuco, Parón. Rit'i pichqamanta yaku, turquesa llimp'i." },
        { subtitle: "Achka rikch'aq uywakuna", content: "Pak 2,000 mitrumanta 6,768 mitrukama. Achka ecosistema, achka rikch'aq uywakuna:\n\n• Sach'akuna: 1,200 rikch'aq, Puya raimondii (80-100 wata huk kuti wayt'an).\n• P'isqukuna: 160 rikch'aq, Cóndor.\n• Uywakuna: Oso de anteojos (Sudamérica hukllawan), puma, vicuña, alpaca.\n• Sach'akuna: Puna, bofedales, bosques nublados." },
        { subtitle: "Rit'i puchukay: Unquy p'itiy nisqa testigos", content: "Cordillera Blanca tikanpura aswan achka rit'i. 50 watapi 30% puchukarqan. Pastoruri rit'i 'Unquy p'itiy ruta' nisqapi kachkan.\n\nKaypi hamuychik mana atipaypaq, aswan unquy p'itiyta rikuy. Pachamamata amachay. Kayqa allin yachay paq." },
        { subtitle: "Pachamama amachay", content: "Huascarán Nasyunal Pak ecosistemanta k'iri. Rit'i, quchakuna ama waqlliykuchu.\n\nAllin puriy: Ama ñankunata saqiykuchu, ama sach'akunata kuchuykuchu, ama uywakunata waqlliykuchu, ama basurata saqiykuychu. Ama basura plastika apamuychu. Pachamamata yupaychay." }
      ]
    },
    culture: {
      title: "Simi",
      intro: "Huascarán Nasyunal Pakqa manallachu pachamama amachan, Quechua simitapas waqaychan. Pak ukhupi, Q'ero runakuna kawsanku, ñawpa simita, willaykunata waqaykuspa. Achka sumaq willaykunatas pasan.",
      sections: [
        { subtitle: "Quechua runakuna", content: "Quechua runakuna pak ukhupi, manaraq yachayninkuta waqaykuspa. Apukunata (urqukuna), Pachamamata (tikan), Intitawan (inti) yupaychan.\n\nHuascarán Apu, chayrayku santo. Runakunaqa uywakunata uywan: vicuña, alpaca. Kayqa allin, pachamama waqaychan." },
        { subtitle: "Willay: Huascarán y Huandoypa P'askakuna", content: "Andes willayninpi, Huascarán nisqa allin runa karqan, Huandoy nisqa Inka qapaq wawan. Anchatan munakusqaku, ichaqa qapaq mana atinquanchu. Chayraykum, phawkakunata hurqukusqa tukuykusqaku, mana musukunata tariyta atinankuchu.\n\nLlanganuco quchakuna, huknin turquesa llimp'iyuq, huknin anqara llimp'iyuq, paykunapak p'askankuna unuwannan qichwayasqaku. Kay sumaq willayqa Cordillera Blancata aswan allin yachachin." },
        { subtitle: "Watakuna", content: "Quechua runakuna achka watakunata waqaychan: Qoyllur Rit'i, Pachamama, Chaccu. Kaykunapi, runakuna tusun, t'inkakunata ruwan.\n\nPuriquqkuna chayrikuskun, costumbrekunata rikunku. Ama hina kachun, Ama ñankunata saqiykuchu." }
      ],
      events: { title: "Ruwaykuna", items: [
        "Trekking: Santa Cruz, Laguna 69",
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
      price: { title: "Qullqi", content: "Jatun mama llacta (p'unchawkama):\n• 1 punchaw: 30 PEN (aprox. $8.50 - $9.00 USD)\n• 2-3 punchaw: Aprox. 60 PEN\n• 4-30 punchaw: Aprox. 150 PEN\n\nPiruw runakuna: Aprox. 11 PEN\nLlaqtakuna: Mana qullqiyuqchu\n\n(Arriba qullqi kaynin tikrayta maskan, oficial niyta uyaq)", note: "⚠️ Allin willay: Allqukunata mana apamuychu. SERNANP mana permiten. +51 43 422 086." },
      duration: { title: "Unay", content: "1 – 7 p'unchaw", note: "Trekking: 3-7 p'unchaw" },
      birds: { title: "Uywakunata rikuy", content: "Cóndor (3.2 mitru iskay patakuna), Oso de anteojos, Vicuña, Puya raimondii. Achka rikch'aq." },
      bring: { title: "Apamuy", items: ["Ch'irita (rit'i patsallapi)", "Intita amachakuy", "Ukyata apamuy", "Bastones de trekking", "Puñuna (achka p'unchaw trekking)"] },
      route: { title: "Exploración", content: "1. Sapa p'unchaw: Llanganuco\n2. Laguna 69 (1 p'unchaw)\n3. Santa Cruz (4-5 p'unchaw)\n4. Pastoruri Rit'i (Unquy p'itiy)\n5. Andinismo: Huascarán\n\nAma hina kachun, guía apamuy." }
    },
    transportation: {
      title: "Chaykamuy",
      airport: { title: "Lima nisqamanta", content: "Lima nisqapi 450 km karu, 8-10 ura. Tukuyn puriquqkuna huq Huaraz-man chayan tiyan — Cordillera Blanca nispa base camp.", options: [
        { name: "Ómnibus (Pisi qullqi)", price: "$20 - $40", time: "8-10 ura", steps: ["Lima nisqapi ómnibus apamuy", "Huaraz man chayamuy (Ancash suyu uma llaqta)", "Huaraz-pi equipo alquilay, altura wañay", "Huaraz-manta Yungay-man 1.5 ura"] },
        { name: "Auto (Allin)", price: "$150 - $250", time: "8-10 ura", steps: ["Auto alquilar", "Huaraz man chayamuy", "Huaraz-pi 1-2 punchaw permaneciy altura wañanapaq"] }
      ]},
      city: { title: "Huaraz nisqamanta Yungay/Caraz-man", content: "Huaraz nisqa Cordillera Blanca nispa aswan base camp. Tukuyn puriquqkuna huq hamun, equipo alquilay, altura wañay.", steps: ["Huaraz nisqapi ómnibus Caraz-man (2 ura)", "Google Maps nisqapi maskuy", "Yungay nisqapi 30 uchu", "Caraz nisqapi 1 ura"] },
      selfDrive: { title: "Kuti puriy", content: "Kuti puriy allin, aswan hanaq. Huaraz-pi altura wañay.", steps: ["Google Maps nisqapi maskuy", "Kuti puriy", "Huaraz (3,052m) 1-2 punchaw permaneciy", "Chaymantá park entrances-man"] }
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
    reviews: { title: "Exploradores niykuna", subtitle: "Andes nispaq niykuna: Google Maps", viewMore: "Astawan niykuna" },
    faq: { title: "Tapuykuna", subtitle: "Yachay", items: [
      { question: "Huascarán Nasyunal Pak hayk'aq kachkan?", answer: "06:00-18:00. Sapa punku tiyan. +51 43 422 086." },
      { question: "Qullqi paganan chá?", answer: "Jatun mama llacta: 30 PEN. Piruw runakuna: 11 PEN." },
      { question: "Imakunata ruway atikun?", answer: "Trekking, andinismo, p'isqukunata rikuy, foto. Achka ruwaykuna." },
      { question: "Maymantá chayamuy atikun?", answer: "Lima nisqamanta 8-10 ura. Trujillo nisqamanta 4-5 ura." },
      { question: "Yachay munay?", answer: "Soroche ama kachun. Ch'irita apamuy. Guía apamuy." },
      { question: "Pak ñawpin imakunata rikuy atikun?", answer: "Ancash suyupi achka rikuna:\n1. Chavín de Huántar — UNESCO, 3,000 watamanta ñawpa\n2. Campo Santo de Yungay — 1970 avalanche, histórica\n3. Baños Termales de Monterrey — unquy\n4. Huaraz — Ancash uma llaqta, trekking\n5. Mercados — artesanía" }
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
