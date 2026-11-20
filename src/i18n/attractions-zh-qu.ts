import { notFound } from "next/navigation";

type GuideCopy = { name: string; intro: string; transport: string; highlight: string; photo: string };

export const localizedAttractions = {
  "paron": {
    zh: {"name": "帕龙湖", "intro": "冰川湖位于卡拉斯以东，乳蓝色湖面两侧是陡峭的山壁。", "transport": "从卡拉斯经帕龙山谷上行，提前确认上山道路和车辆安排。", "highlight": "从开放湖岸观察湖水和山壁的色差，拍照时可将远端山峰纳入画面。", "photo": "以冰蓝色水面为前景，沿谷地长轴取景，把远端山峰留在画面中央。"},
    qu: {"name": "Parón qucha", "intro": "Carazpa inti lluqsimunanpi Parón qucha kachkan. Llimp’isqa yakupa iskaynin lawpin qaqa urqukuna kanku.", "transport": "Carazmanta Parón q’ichwata wichay. Ñan kichasqachu, karru kanchu, chayta ñawpaqta tapuy.", "highlight": "Kichasqa qucha patamanta yakupa llimp’inta, qaqa urqukunatapas qhaway. Rikch’aypi karu urquta churay.", "photo": "Llimp’i quchata ñawpaqman churay, q’ichwapa suninta qatispa karu urquta chawpinman churay."}
  },
  "churup": {
    zh: {"name": "丘鲁普湖", "intro": "高山湖坐落在瓦拉斯东侧的白色山脉，湖盆背后是丘鲁普峰。", "transport": "通常乘车到皮特克步道口再步行，核对岩段及回程条件。", "highlight": "从指定湖岸同时观察裸岩与湖水，避开湿滑攀爬段取景。", "photo": "在平整的指定湖岸用广角拍湖盆，避免为换角度踏上湿滑岩面。"},
    qu: {"name": "Churup qucha", "intro": "Huarazpa inti lluqsimunanpi Churup qucha kachkan. Quchapa qipanpi Churup urqu sayan.", "transport": "Pitec ñan qallariykama karruwan chayay, chaymanta chakipi puriy. Qaqa ñanta, kutinata ima tapuy.", "highlight": "Saqisqa qucha patamanta qaqata yakutapas qhaway. Llusk’a qaqaman ama wichaychu.", "photo": "Saqisqa pampa qucha patamanta llapan quchata rikch’ay. Llusk’a qaqaman ama yaykuychu."}
  },
  "llaca": {
    zh: {"name": "利亚卡湖", "intro": "利亚卡山谷的冰川湖可看到冰碛及两侧岩坡。", "transport": "从瓦拉斯经利亚卡山谷进山，提前核对车辆能到达的位置。", "highlight": "在开放的湖岸或步道取景，用冰碛和岩坡衬托湖盆。", "photo": "从开放步道把碎石冰碛放在前景，沿谷壁向湖面取景。"},
    qu: {"name": "Llaca qucha", "intro": "Llaca q’ichwapi rit’imanta paqarisqa qucha kachkan. Qaqakunata, rit’ipa saqisqan rumikunata rikunki.", "transport": "Huarazmanta Llaca q’ichwanta puriy. Karru maykama chayan chayta tapuy.", "highlight": "Kichasqa ñanmanta quchata rikch’ay; rumikunata ñawpaqman churay.", "photo": "Kichasqa ñanmanta rit’ipa saqisqan rumita ñawpaqman, quchata qipaman churay."}
  },
  "orconcocha": {
    zh: {"name": "奥尔孔科查湖", "intro": "纳加努科谷中的上游湖泊，与下游的奇南科查湖是两个独立地点。", "transport": "从永盖经纳加努科谷进山，向运营方确认奥尔孔科查停靠点。", "highlight": "观察狭长的湖面与沿岸山坡，可从允许停留处拍摄。", "photo": "选择能看见狭长湖面的停靠点，从道路外的允许区域拍摄。"},
    qu: {"name": "Orconcocha qucha", "intro": "Llanganuco q’ichwapa hanaqninpi Orconcocha qucha kachkan. Uraypi Chinancocha qucha huk kiti kan.", "transport": "Yungaymanta Llanganuco q’ichwanta puriy. Orconcochapi maypi sayanata purichiqta tapuy.", "highlight": "Suniyuq quchata, urqu waqtakunata qhaway. Saqisqa kitillamanta rikch’ay.", "photo": "Saqisqa sayana kitimanta suniyuq quchata rikch’ay. Karru ñanmanta lluqsiy."}
  },
  "laguna-69": {
    zh: {"name": "69号湖", "intro": "69号湖位于高海拔冰川盆地，徒步路线经过谷底和上坡路段。", "transport": "经永盖前往塞沃利亚潘帕步道口，核对入园、接送和折返点。", "highlight": "在开放湖岸正对冰川岩壁观察，避免进入封闭区域。", "photo": "在指定湖岸以冰川岩壁为背景拍照，避免靠近落石地段。"},
    qu: {"name": "69 yupay qucha", "intro": "69 yupay qucha hanaq urqukunapi kachkan. Ñan q’ichwata, wichaykunatapas pasan.", "transport": "Yungayta pasaspa Cebollapampa ñan qallariyman chayay. Yaykunata, karruta, kutinata ima tapuy.", "highlight": "Kichasqa qucha patamanta rit’iyuq qaqata qhaway. Wichqasqa kitiman ama yaykuychu.", "photo": "Saqisqa qucha patamanta rit’iyuq qaqata qipaman churay. Rumi urmay kitiman ama riychu."}
  },
  "chinancocha": {
    zh: {"name": "奇南科查湖", "intro": "奇南科查是纳加努科谷下游的冰川湖，两侧有陡壁和高山植被。", "transport": "从永盖经纳加努科进山，确认具体湖岸停靠点。", "highlight": "从允许停留的开阔湖岸取景，把谷壁和湖水一同纳入构图。", "photo": "沿开阔湖岸拍摄谷壁倒影。光线变化时先观察两侧山坡的受光差异。"},
    qu: {"name": "Chinancocha qucha", "intro": "Chinancocha Llanganuco q’ichwapa urayninpi kachkan. Qaqakunapas hanaq sach’akunapas muyurichkan.", "transport": "Yungaymanta Llanganucoman wichay. Qucha patapi maypi sayanata tapuy.", "highlight": "Saqisqa qucha pata k’itimanta quchata qaqatawan rikch’ay.", "photo": "Kichasqa qucha patamanta qaqapa yakupi rikch’ayninta rikch’ay. Iskay urqu waqtapa k’anchaqninta qhaway."}
  },
  "purhuay": {
    zh: {"name": "普鲁瓦伊湖", "intro": "孔丘科斯一侧、瓦里附近的蓝绿色湖泊，岸边保有桤木和高山树种。", "transport": "从瓦里确认到伊奇克波特雷罗的接送，再走开放的沿岸步道。", "highlight": "比较避风湖岸与开阔湖面，从步道观察水鸟，留出距离。", "photo": "在开放步道把岸边树木纳入画面，使用远摄观察水鸟。"},
    qu: {"name": "Purhuay qucha", "intro": "Huari qayllanpi, Conchucos lawpi, Purhuay qucha kachkan. Qucha patapi lambras, qiwiña sach’akuna wiñan.", "transport": "Huarimanta Ichic Potreroman karruta tapuy. Chaymanta kichasqa qucha pata ñanta puriy.", "highlight": "Wayramanta pakasqa patata kichasqa yakuwan tupachiy. Karumanta yaku p’isqukunata qhaway.", "photo": "Kichasqa ñanmanta sach’akunata rikch’ayman churay. Yaku p’isqukunata karumanta rikch’ay."}
  },
  "rocotuyoc": {
    zh: {"name": "罗科图约克湖", "intro": "马尔卡拉方向的高山湖，湖盆和冰雪山脊构成主要看点。", "transport": "从马尔卡拉方向确认山谷道路和下车点，按开放路线步行。", "highlight": "在开放位置观察湖盆、冰雪与岩壁的分层，远离不稳定冰面。", "photo": "从允许到达的位置拍出雪脊、岩壁和湖盆三层景观。"},
    qu: {"name": "Rocotuyoc qucha", "intro": "Marcará lawpi Rocotuyoc hanaq qucha kachkan. Quchata, rit’iyuq urqukunata qhaway.", "transport": "Marcarámanta q’ichwa ñanta, karru sayanata ima tapuy. Kichasqa ñanllata puriy.", "highlight": "Saqisqa kitimanta quchata, rit’ita, qaqatapas qhaway. Ama rit’iman qayllaychu.", "photo": "Saqisqa kitimanta rit’i urquta, qaqata, quchatapas huk rikch’aypi churay."}
  },
  "querococha": {
    zh: {"name": "克罗科查湖", "intro": "位于卡塔克至查文方向公路旁，可作为山地公路行程的独立停靠。", "transport": "从卡塔克沿查文方向行驶，车辆只在允许停车的位置停靠。", "highlight": "从安全观景点同时观察开阔水面和白色山脉的轮廓。", "photo": "利用合法停车点拍摄开阔水面和山形，请勿从行车道拍照。"},
    qu: {"name": "Querococha qucha", "intro": "Cátacmanta Chavínman riq hatun ñan qayllanpi Querococha qucha kachkan.", "transport": "Cátacmanta Chavín lawman karruwan puriy. Saqisqa kitillapi sayay.", "highlight": "Saqisqa qhawana kitimanta quchata Cordillera Blanca urqukunata ima qhaway.", "photo": "Saqisqa karru sayanamanta quchata urqutawan rikch’ay. Karru ñanmanta ama rikch’aychu."}
  },
  "willcacocha": {
    zh: {"name": "维尔卡科查湖", "intro": "瓦拉斯附近黑色山脉的高地湖泊，以隔谷眺望白色山脉著称。", "transport": "从瓦拉斯前往圣克鲁斯一带的步道入口，提前安排返程车辆。", "highlight": "沿开放步道回望白色山脉，用湖面作前景观察远处雪峰。", "photo": "从步道用小湖作前景，天气晴朗时拍摄隔谷雪山。"},
    qu: {"name": "Willcacocha qucha", "intro": "Huaraz qayllan Cordillera Negrapi Willcacocha qucha kachkan. Chaymanta Cordillera Blanca rikurin.", "transport": "Huarazmanta Santa Cruz lawpi ñan qallariyman chayay. Kutimuna karruta ñawpaqta maskay.", "highlight": "Kichasqa ñanmanta Cordillera Blancata qhaway. Quchata ñawpaqman churay.", "photo": "Chaki ñanmanta uchuy quchata ñawpaqman churay. Pacha sut’i kaptin karu rit’i urquta rikch’ay."}
  },
  "pastoruri": {
    zh: {"name": "帕斯托鲁里冰川", "intro": "位于卡尔帕区域的冰川景观，可观察冰缘及退冰后裸露的地表。", "transport": "从卡塔克方向按公园开放线路进入，向运营方确认接送与步行终点。", "highlight": "在指定观景区拍摄冰缘与裸岩，遵守护栏和管理员指引。", "photo": "从护栏内对比冰缘和裸露岩面，避免把冰雪高光拍成一片纯白。"},
    qu: {"name": "Pastoruri rit’i", "intro": "Carpa lawpi Pastoruri rit’i kachkan. Rit’ipa patanta, rit’i kutisqan allpata ima rikunki.", "transport": "Cátac lawmanta kichasqa ñanpi yaykuy. Karruta, puriy tukukunata purichiqta tapuy.", "highlight": "Saqisqa qhawana kitimanta rit’ita qaqatawan rikch’ay. Wichq’anata, qhawaqpa nisqanta yupaychay.", "photo": "Wichq’ana ukunmanta rit’ipa patanta qaqatawan rikch’ay. Rit’ipa rikch’ayninta qhaway."}
  },
  "alpamayo": {
    zh: {"name": "阿尔帕马约雪峰", "intro": "白色山脉雪峰，以陡峭的冰雪山脊著称，远眺和攀登是不同的行程。", "transport": "经瓦伊拉斯一侧选择适合的山谷观景线路，向运营方核对进山点。", "highlight": "从允许停留的谷地步道远拍峰形，按天气和能见度决定是否继续。", "photo": "在视线开阔的谷段拍摄峰形，云量较大时先观察云隙变化。"},
    qu: {"name": "Alpamayo rit’i urqu", "intro": "Cordillera Blancapi Alpamayo rit’i urqu kachkan. Karumanta qhawayqa urquman wichaywan manam kikillanchu.", "transport": "Huaylas lawmanta qhawana q’ichwa ñanta akllay. Maypi yaykunata purichiqta tapuy.", "highlight": "Saqisqa q’ichwa ñanmanta urquta rikch’ay. Pacha allin kaptinlla qatipay.", "photo": "Q’ichwapa kichasqa kitinmanta urqupa rikch’ayninta rikch’ay. Phuyu kaptin suyay."}
  },
  "arhuaycocha": {
    zh: {"name": "阿尔瓦伊科查湖", "intro": "圣克鲁斯徒步走廊的侧谷湖泊，可观察冰川遗留地貌。", "transport": "从圣克鲁斯主线按开放支路往返，预留回到主线的时间。", "highlight": "从标示步道拍摄湖盆与冰川山谷，切勿抄近路穿越岩坡。", "photo": "在支路步道上拍摄冰蚀湖盆，借近处岩石交代地形尺度。"},
    qu: {"name": "Arhuaycocha qucha", "intro": "Santa Cruz chaki ñanpa huk q’ichwanpi Arhuaycocha qucha kachkan. Rit’ipa saqisqan allpata rikunki.", "transport": "Santa Cruz hatun ñanmanta kichasqa t’aqa ñanta puriy, kutiy. Hatun ñanman kutinapaq pachata saqiy.", "highlight": "Unanchasqa ñanmanta quchata q’ichwatawan rikch’ay. Qaqa waqtanta ama kuchuychu.", "photo": "T’aqa ñanmanta quchata rikch’ay. Qaylla rumita ñawpaqman churay."}
  },
  "jatuncocha": {
    zh: {"name": "哈通科查湖", "intro": "圣克鲁斯谷地的湖泊，开阔水面与狭长山谷形成对比。", "transport": "作为圣克鲁斯徒步一站，由已确认的营地或入口沿合规步道接近。", "highlight": "沿开放步道观察谷地走向和湖岸，拍摄时保留水面纵深。", "photo": "从步道沿长湖岸构图，将山谷的延伸方向纳入画面。"},
    qu: {"name": "Jatuncocha qucha", "intro": "Santa Cruz q’ichwapi Jatuncocha qucha kachkan. Hatun yaku suniyuq q’ichwapi mast’arin.", "transport": "Santa Cruz chaki puriypi samana kitimanta utaq yaykunamanta saqisqa ñanta puriy.", "highlight": "Kichasqa ñanmanta q’ichwapa suninta, qucha patata ima qhaway, rikch’ay.", "photo": "Ñanmanta suniyuq qucha patata rikch’ay. Q’ichwapa suninta rikuchiy."}
  },
  "taullicocha": {
    zh: {"name": "陶利科查湖", "intro": "圣克鲁斯徒步线靠近蓬塔乌尼翁山口的高山湖泊。", "transport": "按已确认的圣克鲁斯路线前往，核对山口条件和当日折返点。", "highlight": "在允许的山坡步道观察湖面和陶利拉胡峰，避免偏离步道。", "photo": "从开放步道拍摄陶利拉胡与湖面，不必为取景偏离山坡步道。"},
    qu: {"name": "Taullicocha qucha", "intro": "Santa Cruz chaki ñanpi, Punta Unión q’asa qayllanpi, Taullicocha qucha kachkan.", "transport": "T’aqwirisqa Santa Cruz ñanta puriy. Q’asapa pachanta, kutinata ima tapuy.", "highlight": "Saqisqa ñanmanta quchata Taulliraju urqutawan qhaway. Ñanmanta ama lluqsiychu.", "photo": "Kichasqa ñanmanta Taulliraju urquta quchatawan rikch’ay. Ñanmanta ama lluqsiychu."}
  },
  "shallap": {
    zh: {"name": "沙利亚普湖", "intro": "瓦拉斯汉库方向的高山湖，山谷景观随徒步逐步展开。", "transport": "先到汉库方向的指定入口，确认接送、步程与当地进入条件。", "highlight": "在开放路线观察湖盆和山谷坡面，守住当日返程时间。", "photo": "在回程沿谷地回望，可拍出岩坡、湖盆与步道之间的距离。"},
    qu: {"name": "Shallap qucha", "intro": "Huarazpa Jancu lawninpi Shallap qucha kachkan. Chakipi purispa q’ichwata riqsinki.", "transport": "Jancu lawpi saqisqa yaykunaman chayay. Karruta, chaki ñanta, yaykunata ima tapuy.", "highlight": "Kichasqa ñanmanta quchata q’ichwa waqtatawan qhaway. Kutinapaq pachata yupaychay.", "photo": "Kutimuspalla q’ichwata qhawariy. Qaqata, quchata, ñanta ima rikch’ay."}
  },
  "libron": {
    zh: {"name": "利布龙湖", "intro": "查卡斯一侧的高山湖泊，步道及路况应与当地安排一并确认。", "transport": "从查卡斯方向向当地运营方核对瓦凯里亚及步道入口。", "highlight": "从开放湖岸观察冰蚀盆地和水面色泽。", "photo": "以允许通行的湖岸为视角拍冰蚀坡面和水色。"},
    qu: {"name": "Librón qucha", "intro": "Chacas lawpi Librón hanaq qucha kachkan. Chaki ñanta, karru ñantapas llaqtapi tapuy.", "transport": "Chacasmanta Vaquería kitita, ñan qallariyta ima llaqta purichiqta tapuy.", "highlight": "Kichasqa qucha patamanta rit’ipa ruwasqan allpata yakupa llimp’intawan qhaway.", "photo": "Saqisqa qucha patamanta rit’ipa ruwasqan waqtata yakupa llimp’intawan rikch’ay."}
  },
  "conococha": {
    zh: {"name": "科诺科查湖", "intro": "卡塔克附近的高原湖泊及湿地，适合结合公路行程观察景观。", "transport": "沿通往卡塔克的公路寻找允许停车的位置，勿在行车道上停留。", "highlight": "从安全位置观察湿地、水鸟和开阔的高原地形。", "photo": "在安全停车区域远拍湿地，避免为了接近水鸟走进泥泞处。"},
    qu: {"name": "Conococha qucha", "intro": "Cátac qayllanpi Conococha qucha, uqhu allpapas kachkan. Hatun ñanmanta qhawayta atinki.", "transport": "Cátacman riq ñanpi saqisqa karru sayanata maskay. Karru purinan ñanpi ama sayaychu.", "highlight": "Saqisqa kitimanta uqhu allpata, yaku p’isqukunata, mast’arikuq pampata ima qhaway.", "photo": "Saqisqa karru sayanamanta uqhu allpata karumanta rikch’ay. P’isqukunaman ama qayllaychu."}
  },
  "chavin-de-huantar": {
    zh: {"name": "查文德万塔尔考古遗址", "intro": "古代礼仪中心保存石砌广场和地下通道，遗址和国家博物馆须分别安排。", "transport": "从查文镇前往遗址入口，核对当天开放的空间和导览线路。", "highlight": "沿开放线路观察石砌墙体、下沉广场及通道入口。", "photo": "用开放广场中的固定视点拍石墙与空间层次，通道内遵守摄影限制。"},
    qu: {"name": "Chavín de Huántar ñawpa kiti", "intro": "Chavín ñawpa much’ay kitipi rumi pampakuna, allpa ukunpi ñankunapas kanku. Musiyu huk kitipim kachkan.", "transport": "Chavín llaqtamanta ñawpa kitipa punkunman riy. Kunan kichasqa kitikunata, pusana ñanta ima tapuy.", "highlight": "Kichasqa ñanmanta rumi pirqakunata, uray pampata, uku ñanpa punkunta ima qhaway.", "photo": "Kichasqa pampamanta rumi pirqakunata rikch’ay. Uku ñanpi rikch’ay kamachita qatipay."}
  },
  "museo-chavin": {
    zh: {"name": "查文国家博物馆", "intro": "博物馆通过石雕等藏品解释查文文化，可与考古遗址分开参观。", "transport": "前往查文镇北侧 Av. 17 de Enero 延伸段的博物馆入口。", "highlight": "按展厅动线观察石雕细节，拍摄前查看馆内标示。", "photo": "从允许拍摄的展厅位置记录石雕纹理，勿使用场馆禁止的设备。"},
    qu: {"name": "Chavín Nasyunal Musiyu", "intro": "Musiyupi rumi ruwasqakunawan Chavín kawsayta yachanki. Ñawpa kitita huk kuti watukuy.", "transport": "Chavín llaqtapa wichayninpi Av. 17 de Enero ñanwan musiyu punkuman riy.", "highlight": "Rikuchina wasipa ñanta purispa rumi ruwasqakunata qhaway. Rikch’ay manaraq hurquspa kamachiyta ñawiriy.", "photo": "Saqisqa rikuchina wasimanta rumi ruwasqata rikch’ay. Wichqasqa llamk’anata ama llamk’achiychu."}
  },
  "willkawain": {
    zh: {"name": "维尔卡瓦因考古遗址", "intro": "瓦拉斯独立区一侧的石砌遗址，建筑层次和墙体砌法值得观察。", "transport": "从瓦拉斯往帕里亚方向前往遗址入口，核对与相邻遗址的不同入口。", "highlight": "沿允许线路观察外墙和开口位置，避免踩踏遗构。", "photo": "从参观线拍石墙横向砌缝与建筑层次，勿踩上遗存。"},
    qu: {"name": "Willkawain ñawpa kiti", "intro": "Huarazpa Independencia lawpi Willkawain rumi wasi kachkan. Wasi patakunata, rumi pirqata ima qhaway.", "transport": "Huarazmanta Paria lawman ñawpa kitipa punkunman riy. Huk ñawpa kitipa punkuntapas tapuy.", "highlight": "Saqisqa ñanmanta hawa pirqakunata, t’uqukunata ima qhaway. Ñawpa rumi wasita ama saruychu.", "photo": "Watukuna ñanmanta rumi pirqapa kaqninta, wasi patakunata ima rikch’ay. Rumi pataman ama siqaychu."}
  },
  "chacas": {
    zh: {"name": "查卡斯传统工艺镇", "intro": "小镇以木作传统和广场周围的建筑为看点，适合步行串联。", "transport": "到达查卡斯后从主广场开始，分别核对工坊和教堂的访客条件。", "highlight": "从广场观察木制阳台和门窗，拍摄工匠前征得同意。", "photo": "从广场对面拍阳台与街道立面，拍摄工坊人员前先询问。"},
    qu: {"name": "Chacas maki ruway llaqta", "intro": "Chacas llaqtapi k’aspi maki ruway yachasqa. Hatun pampapa muyuriq wasikunata chakipi watukuy.", "transport": "Chacasman chayaspa hatun pampamanta qallariy. Ruway wasiwan much’ay wasiwan yaykunata sapa kutipi tapuy.", "highlight": "Pampamanta k’aspi qhawana, punku, t’uqukunata ima qhaway. Ruraqta rikch’anaykipaq saqiyta mañakuy.", "photo": "Pampapa huk lawmanta wasi hawata rikch’ay. Maki ruraqta rikch’anaykipaq saqiyta mañakuy."}
  },
  "plaza-huaraz": {
    zh: {"name": "瓦拉斯武器广场", "intro": "瓦拉斯中心的公共广场，可作为步行认识市区的起点。", "transport": "前往市中心，沿广场外围人行道串联周边街区。", "highlight": "观察公共空间、街角视线与周边建筑，从人行区拍摄。", "photo": "从人行区转角取景，把周围主要建筑同时纳入画面。"},
    qu: {"name": "Huarazpa hatun pampan", "intro": "Huarazpa chawpinpi runakunapa hatun pampan kachkan. Llaqtata chakipi riqsinaykipaq kaymanta qallariy.", "transport": "Llaqta chawpinman riy. Pampapa muyuriq chaki ñanta purispa kallikunata riqsiy.", "highlight": "Pampata, kalli kuchukunata, qaylla wasikunata ima qhaway. Chaki ñanmanta rikch’ay.", "photo": "Chaki ñanpa kuchunmanta muyuriq hatun wasikunata huk rikch’aypi churay."}
  },
  "antacocha": {
    zh: {"name": "安塔科查湖", "intro": "雷夸伊一带的高山湖，可作为单独的观景徒步目的地。", "transport": "从雷夸伊一侧确认上山车辆和步道入口，记录上车地点。", "highlight": "从开放步道观察湖盆与远处山脊的方向关系。", "photo": "从开放上坡步道用湖面衬托山脊，返程时留意光线方向。"},
    qu: {"name": "Antacocha qucha", "intro": "Recuay lawpi Antacocha hanaq qucha kachkan. Kay quchaman sapa chaki puriyta ruwanki.", "transport": "Recuay lawmanta karruta, ñan qallariyta ima tapuy. Maypi karruman siqanata qillqay.", "highlight": "Kichasqa ñanmanta qucha ukuta karu urqukunatawan qhaway.", "photo": "Kichasqa wichana ñanmanta quchata urquwan rikch’ay. Kutispa k’anchaqpa lawta qhaway."}
  },
  "urushcocha": {
    zh: {"name": "乌鲁斯科查湖", "intro": "白色山脉中的高海拔湖泊，湖盆和雪山背景是主要看点。", "transport": "先在瓦拉斯向当地运营方确认该湖所在地及允许使用的步道。", "highlight": "远离松动岩坡，从合规步道拍摄湖面与山脊。", "photo": "从步道安全处把山脊和湖岸一同纳入画面。"},
    qu: {"name": "Uruscocha qucha", "intro": "Cordillera Blancapi Uruscocha hanaq qucha kachkan. Quchata, qipanpi rit’i urqukunata ima qhaway.", "transport": "Huarazpi llaqta purichiqta maypi qucha kasqanta, mayqin ñan saqisqa kasqanta ima tapuy.", "highlight": "Tuñiy atikuq qaqamanta karunchay. Saqisqa ñanmanta quchata urqutawan rikch’ay.", "photo": "Saqisqa ñanmanta urqu tulluta qucha patatawan huk rikch’aypi churay."}
  },
  "nevado-huandoy": {
    zh: {"name": "万多伊雪峰", "intro": "永盖附近白色山脉的雪峰，适合从开放谷地观景点远眺。", "transport": "沿永盖进山方向核对纳加努科区域开放的观景点。", "highlight": "用谷壁作前景以区分雪峰和邻近山体，天气不佳时缩短行程。", "photo": "从纳加努科开放观景点用谷壁作前景，帮助辨认万多伊峰形。"},
    qu: {"name": "Huandoy rit’i urqu", "intro": "Yungay qayllan Cordillera Blancapi Huandoy rit’i urqu kachkan. Kichasqa q’ichwa qhawana kitimanta qhaway.", "transport": "Yungaymanta urquman riy. Llanganucopi kichasqa qhawana kitita tapuy.", "highlight": "Q’ichwa qaqata ñawpaqman churay, urqukunata riqsiy. Pacha mana allin kaptin kutiy.", "photo": "Llanganucopa kichasqa qhawanamanta qaqata ñawpaqman churay, Huandoypa rikch’ayninta riqsiy."}
  },
  "nevado-artesonraju": {
    zh: {"name": "阿特松拉胡雪峰", "intro": "瓦伊拉斯一侧的白色山脉雪峰，从不同谷地看到的轮廓并不相同。", "transport": "从卡拉斯一侧选择合法开放的谷地观景线路，核对往返条件。", "highlight": "从指定位置观察冰雪山脊，不要把观景路线误作登山线路。", "photo": "用远摄固定峰形，不同谷地的视角不要混作同一个观景点。"},
    qu: {"name": "Artesonraju rit’i urqu", "intro": "Huaylas lawpi Artesonraju rit’i urqu kachkan. Sapa q’ichwamanta huk rikch’ay rikurin.", "transport": "Caraz lawmanta kichasqa q’ichwa ñanta akllay. Rinata kutinatapas tapuy.", "highlight": "Saqisqa kitimanta rit’i urqu tulluta qhaway. Qhawana ñanqa manam wichana ñanchu.", "photo": "Karumanta urqupa rikch’ayninta rikch’ay. Huk q’ichwamanta huk hina rikurin."}
  },
  "nevado-taulliraju": {
    zh: {"name": "陶利拉胡雪峰", "intro": "圣克鲁斯方向的雪峰，与附近高山湖及山口可在同一路线观景。", "transport": "经已确认的圣克鲁斯线路选择开放的远眺位置。", "highlight": "用宽幅画面记录湖、山口与峰形，始终留在步道内。", "photo": "用宽幅拍摄陶利拉胡及相邻湖泊，保留山口的地形关系。"},
    qu: {"name": "Taulliraju rit’i urqu", "intro": "Santa Cruz lawpi Taulliraju rit’i urqu kachkan. Qucha, q’asa, urquta huk ñanmanta qhawayta atinki.", "transport": "T’aqwirisqa Santa Cruz ñanpi kichasqa qhawana kitita akllay.", "highlight": "Quchata, q’asata, urquta ima huk rikch’aypi churay. Ñanllapi qipay.", "photo": "Taulliraju urquta qaylla quchatawan mast’arikuq rikch’aypi churay. Q’asatapas rikuchiy."}
  },
  "laguna-patococha": {
    zh: {"name": "帕托科查湖", "intro": "卡塔克卡尔帕区域的湖泊，可与当地冰川线路结合安排。", "transport": "从卡塔克方向随开放的卡尔帕路线进入，核对下车点。", "highlight": "从允许停留的观景区观察水面和周边高地植被。", "photo": "从卡尔帕开放观景区用高原植被衬托湖面。"},
    qu: {"name": "Patococha qucha", "intro": "Cátacpa Carpa lawninpi Patococha qucha kachkan. Rit’i ñanwan kuska watukuyta atinki.", "transport": "Cátac lawmanta kichasqa Carpa ñanta puriy. Karru sayanata tapuy.", "highlight": "Saqisqa qhawana kitimanta yakuta, hanaq sach’akunata ima qhaway.", "photo": "Carpapa kichasqa qhawanamanta hanaq sach’ata ñawpaqman churay, quchata rikch’ay."}
  },
  "laguna-allicocha": {
    zh: {"name": "阿利科查湖", "intro": "查卡斯方向的高山湖，适合把湖岸与周围山地合在一起观察。", "transport": "从查卡斯核实具体山路、步道入口及车辆能到达的位置。", "highlight": "在开放沿岸位置拍摄水面和山坡，避免踏入湿地。", "photo": "用允许停留的湖岸视角对比山坡与水面，绕开湿地。"},
    qu: {"name": "Allicocha qucha", "intro": "Chacas lawpi Allicocha hanaq qucha kachkan. Quchata muyuriq urqukunatawan qhaway.", "transport": "Chacaspi urqu ñanta, chaki ñan qallariyta, maykama karru chayanta ima tapuy.", "highlight": "Kichasqa qucha patamanta yakuta urqu waqtatawan rikch’ay. Uqhu allpaman ama yaykuychu.", "photo": "Saqisqa qucha patamanta waqtata yakutawan tupachiy, uqhu allpata ama saruychu."}
  },
  "laguna-tullparaju": {
    zh: {"name": "图利帕拉胡湖", "intro": "瓦拉斯一侧白色山脉中的高海拔湖盆，适合观察冰川地貌。", "transport": "从瓦拉斯核对进入山谷的路线及当天的徒步条件，再择开放入口。", "highlight": "从安全步道观察冰碛、岩坡和湖面边界。", "photo": "沿开放步道记录岩坡与冰碛的纹理，拍摄时留出安全距离。"},
    qu: {"name": "Tullparaju qucha", "intro": "Huaraz lawpi Cordillera Blancapi Tullparaju qucha kachkan. Rit’ipa ruwasqan allpata qhaway.", "transport": "Huarazpi q’ichwaman yaykuna ñanta, kunan chaki puriyta ima tapuy. Kichasqa punkuta akllay.", "highlight": "Saqisqa ñanmanta rit’ipa saqisqan rumita, qaqata, qucha patata ima qhaway.", "photo": "Kichasqa ñanmanta qaqata, rit’ipa saqisqan rumita ima rikch’ay. Karullapi qipay."}
  },
  "campo-santo-yungay": {
    zh: {"name": "永盖纪念园", "intro": "纪念园保存旧永盖的灾害记忆，是了解1970年事件及社区历史的地点。", "transport": "从新永盖前往纪念园入口，按照现场标示进入访客区域。", "highlight": "沿指定路线识别旧城遗存与纪念设施，保持安静并尊重当地礼仪。", "photo": "按纪念园标示拍摄旧城遗存和纪念设施，避免拍摄私人悼念活动。"},
    qu: {"name": "Yungay yuyarina kiti", "intro": "Kay yuyarina kitipi 1970 watapi Yungaypa sasachakuyninta, llaqtapa ñawpa kawsaynintapas yuyarinku.", "transport": "Musuq Yungaymanta yuyarina kitipa punkunman riy. Kiti unanchasqanta qatipay.", "highlight": "Saqisqa ñanmanta ñawpa llaqtapa puchunta, yuyarina imakunata ima qhaway. Upallalla puriy, llaqtapa kawsayninta yupaychay.", "photo": "Yuyarina kitipa unanchanta qatispa ñawpa llaqta puchunta rikch’ay. Llaki raymita ama rikch’aychu."}
  },
  "rataquenua": {
    zh: {"name": "拉塔克纽阿观景台", "intro": "可俯瞰瓦拉斯市区，白色山脉景观取决于当天能见度。", "transport": "从瓦拉斯安排上山交通，核对开放点和返回市区的方式。", "highlight": "在安全的观景区域以城市网格为前景拍摄远山。", "photo": "从安全观景台位置把瓦拉斯街道作为前景，远处山峰清晰时再用远摄。"},
    qu: {"name": "Rataquenua qhawana", "intro": "Rataquenuamanta Huaraz llaqtata qhawanki. Pacha sut’i kaptin Cordillera Blanca rikurin.", "transport": "Huarazmanta wichana karruta maskay. Kichasqa qhawana kitita, llaqtaman kutinata ima tapuy.", "highlight": "Saqisqa qhawana kitimanta llaqta kallikunata ñawpaqman churay, karu urquta rikch’ay.", "photo": "Saqisqa qhawanamanta Huaraz kallita ñawpaqman churay. Karu urqu sut’i kaptin rikch’ay."}
  },
  "senor-soledad": {
    zh: {"name": "孤独之主圣所", "intro": "瓦拉斯的宗教场所，可观察广场与教堂外观，礼仪活动优先。", "transport": "从瓦拉斯市区前往圣所，入内前核对开放及礼拜安排。", "highlight": "从公共区域观察立面和广场，不打扰礼拜或仪式。", "photo": "从公共广场拍圣所正面，在礼拜时避免入内拍摄。"},
    qu: {"name": "Señor de la Soledad much’ay wasi", "intro": "Huarazpi Señor de la Soledad much’ay wasi kachkan. Pampata, wasi hawanta ima qhaway. Much’ay ñawpaqta kan.", "transport": "Huaraz chawpinmanta much’ay wasiman riy. Yaykunaykipaq pacha kichayta, much’ayta ima tapuy.", "highlight": "Runakunapa pampanmanta wasi hawanta qhaway. Much’ayta ama hark’aychu.", "photo": "Runakunapa pampanmanta much’ay wasi ñawpanta rikch’ay. Much’ay pachapi ukuman ama rikch’anaykipaq yaykuychu."}
  },
  "mama-ashu": {
    zh: {"name": "玛玛阿舒圣所", "intro": "位于查卡斯镇的宗教建筑，外部建筑细部与传统工艺相呼应。", "transport": "抵达查卡斯主广场后步行到圣所，入内前询问当日礼仪安排。", "highlight": "从公共广场观察建筑正面和木作，室内拍摄先询问。", "photo": "从主广场拍圣所正面，再从侧面观察木作细部。"},
    qu: {"name": "Mama Ashu much’ay wasi", "intro": "Chacas llaqtapi Mama Ashu much’ay wasi kachkan. Wasi hawa ruwasqakunapi ñawpa maki ruway rikurin.", "transport": "Chacas hatun pampaman chayaspa much’ay wasiman chakipi riy. Yaykunapaq kunan much’aypachatapuy.", "highlight": "Hatun pampamanta wasi ñawpanta, k’aspi ruwasqata ima qhaway. Ukupi rikch’anaykipaq tapuy.", "photo": "Hatun pampamanta much’ay wasi ñawpanta rikch’ay. Lawmanta k’aspi ruwasqata qhaway."}
  },
  "punta-olimpica": {
    zh: {"name": "蓬塔奥林匹卡隧道", "intro": "连接卡瓦斯与查卡斯方向的公路隧道，属于车行通道。", "transport": "从卡瓦斯或查卡斯方向按公路标示通行，提前查询道路状况。", "highlight": "观景和拍摄只在隧道外允许停车处进行，勿占用行车道。", "photo": "只能从隧道外允许停车的观景位置拍摄道路和周围山脊。"},
    qu: {"name": "Punta Olímpica urqu uku ñan", "intro": "Carhuazta Chacaswan tinkichiq urqu uku ñan. Karrukuna chayta pasan.", "transport": "Carhuazmanta utaq Chacasmanta ñan unanchata qatipay. Ñan imayna kasqanta ñawpaqta tapuy.", "highlight": "Urqu uku ñanpa hawapi saqisqa sayanallamanta qhaway, rikch’ay. Karru ñanta ama hark’aychu.", "photo": "Urqu uku ñanpa hawapi saqisqa karru sayanamanta ñanta urqukunatawan rikch’ay."}
  },
  "punta-union": {
    zh: {"name": "蓬塔乌尼翁山口", "intro": "圣克鲁斯与瓦里潘帕方向之间的高山垭口，是徒步路线中的过山点。", "transport": "按已确认的圣克鲁斯路线进入，核对天气、山口情况及行程计划。", "highlight": "从允许停留的位置观察两侧谷地，避免占用狭窄通行区域。", "photo": "在不妨碍通行的指定位置向山口两侧取景。"},
    qu: {"name": "Punta Unión q’asa", "intro": "Santa Cruzwan Huaripampawan chawpinpi Punta Unión q’asa kachkan. Chaki puriqkuna q’asata pasan.", "transport": "T’aqwirisqa Santa Cruz ñanpi yaykuy. Pachata, q’asapa kayninta, puriy wakichiyninta ima tapuy.", "highlight": "Saqisqa kitimanta iskay lawpa q’ichwankunata qhaway. K’ichki ñanta ama hark’aychu.", "photo": "Saqisqa kitimanta q’asapa iskaynin lawta rikch’ay. Purina ñanta ama hark’aychu."}
  },
  "nevado-pisco": {
    zh: {"name": "皮斯科雪峰", "intro": "永盖纳加努科区域的雪峰，谷地远眺和高山登顶是不同活动。", "transport": "从永盖方向确认开放观景线路，登山服务与普通观景应分开安排。", "highlight": "从合规谷地步道远拍雪峰和冰雪线，能见度不足时折返。", "photo": "从纳加努科合规谷地步道远摄山峰轮廓，避免为取景进入登山区域。"},
    qu: {"name": "Pisco rit’i urqu", "intro": "Yungaypa Llanganuco lawninpi Pisco rit’i urqu kachkan. Q’ichwamanta qhawayqa urqu pataman wichaywan manam kikillanchu.", "transport": "Yungay lawmanta kichasqa qhawana ñanta tapuy. Urqu wichayta qhawana puriyta ima sapa sapata wakichiy.", "highlight": "Saqisqa q’ichwa ñanmanta rit’i urquta karumanta rikch’ay. Mana sut’i rikuriptin kutiy.", "photo": "Llanganucopa saqisqa q’ichwa ñanmanta urquta karumanta rikch’ay. Wichana kitiman ama yaykuychu."}
  },
} satisfies Record<string, Record<"zh" | "qu", GuideCopy>>;

export function attractionSlugs() {
  return Object.keys(localizedAttractions).map((slug) => ({ slug }));
}

export function requireAttractionSlug(slug: string): keyof typeof localizedAttractions {
  if (!Object.hasOwn(localizedAttractions, slug)) notFound();
  return slug as keyof typeof localizedAttractions;
}
