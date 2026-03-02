// Core data model for the Holland test.
// User-facing strings remain in Chinese; internal comments are English only.

// Question list in fixed order.
const questions = [
    { id: "A", text: "我喜欢从音乐、美术和文字中获取美的感受。" },
    { id: "I", text: "我对实验、编程和数学模型感兴趣。" },
    { id: "A", text: "我喜欢通过视频、照片、日记来记录生活。" },
    { id: "C", text: "我会提前做好任务规划，并按部就班执行。" },
    { id: "I", text: "我喜欢探索未知领域和最新发现。" },
    { id: "C", text: "我擅长发现文档、数据中的小错误。" },
    { id: "S", text: "当朋友向我倾诉时，我能感同身受并提供情绪支持。" },
    { id: "R", text: "我会把感兴趣的东西拆开，分析结构后再重新组装。" },
    { id: "C", text: "我喜欢在清晰、明确的指令下执行任务。" },
    { id: "E", text: "向别人推销我的想法或产品时，我能感到满足。" },
    { id: "E", text: "我讨厌被别人比下去。" },
    { id: "C", text: "我喜欢处理表格、整理文件，让一切井井有条。" },
    { id: "E", text: "我喜欢在团队中组织大家协作，一起完成任务。" },
    { id: "A", text: "我的想象力很丰富。" },
    { id: "E", text: "我愿意为达成目标而冒险。" },
    { id: "I", text: "我会为感兴趣的知识点，花费大量时间深入研究。" },
    { id: "I", text: "做决定前，我会搜集大量数据、资料来佐证我的观点。" },
    { id: "R", text: "我喜欢自己动手修理电器、生活用品等。" },
    { id: "A", text: "我喜欢寻求新方法，发挥创造力。" },
    { id: "R", text: "工作时把衣服和手弄脏也没关系。" },
    { id: "S", text: "我喜欢参加志愿者活动，这让我感到很有成就感。" },
    { id: "R", text: "我希望工作时候能使用多种工具。" },
    { id: "S", text: "我对他人的情绪很敏感。" },
    { id: "S", text: "我喜欢帮助他人发挥天赋和才能。" }
];

// Mapping from programme name to official XJTLU URL (used by the result cards).
// Source: assets/programme  跳转链接.txt
const programmeLinks = {
    "材料科学与工程（研究型）": "https://www.xjtlu.edu.cn/zh/study/masters/materials-science-and-engineering",
    "城市规划与设计": "https://www.xjtlu.edu.cn/zh/study/masters/msc-urban-planning",
    "创业与创新-创意科技方向": "https://www.xjtlu.edu.cn/zh/study/masters/entrepreneurship-and-innovation",
    "创业与创新-风险投资方向": "https://www.xjtlu.edu.cn/zh/study/masters/entrepreneurship-and-innovation",
    "创业与创新-技术转移方向": "https://www.xjtlu.edu.cn/zh/study/masters/entrepreneurship-and-innovation",
    "创业与创新-可持续解决方案与创新技术应用方向": "https://www.xjtlu.edu.cn/zh/study/masters/entrepreneurship-and-innovation",
    "创业与创新-企业和谐治理、创新与传承方向": "https://www.xjtlu.edu.cn/zh/study/masters/entrepreneurship-and-innovation",
    "创业与创新-全球公共卫生方向": "https://www.xjtlu.edu.cn/zh/study/masters/entrepreneurship-and-innovation",
    "创业与创新-商业与人工智能创新方向": "https://www.xjtlu.edu.cn/zh/study/masters/entrepreneurship-and-innovation",
    "创业与创新-战略人力资源管理方向": "https://www.xjtlu.edu.cn/zh/study/masters/entrepreneurship-and-innovation",
    "创业与创新-智慧城市方向": "https://www.xjtlu.edu.cn/zh/study/masters/entrepreneurship-and-innovation",
    "创业与创新-智慧康养管理方向": "https://www.xjtlu.edu.cn/zh/study/masters/entrepreneurship-and-innovation",
    "创业与创新-智能机器人方向": "https://www.xjtlu.edu.cn/zh/study/masters/entrepreneurship-and-innovation",
    "低碳电力与能源技术 (研究型)": "https://www.xjtlu.edu.cn/zh/study/masters/low-carbon-electrical-power-and-energy-technology",
    "对外英语教育": "https://www.xjtlu.edu.cn/zh/study/masters/ma-tesol",
    "多媒体通信": "https://www.xjtlu.edu.cn/zh/study/masters/multimedia-telecommunications",
    "儿童发展与家庭教育学": "https://www.xjtlu.edu.cn/zh/study/masters/child-development-family-education",
    "分子生物学（研究型）": "https://www.xjtlu.edu.cn/zh/study/masters/mres-molecular-bioscience",
    "高级化学（研究型）": "https://www.xjtlu.edu.cn/zh/study/masters/mres-advanced-chemical-sciences",
    "工业设计": "https://www.xjtlu.edu.cn/zh/study/masters/mdes-industrial-design",
    "管理学": "https://www.xjtlu.edu.cn/zh/study/masters/msc-management",
    "国际工商管理（非全日制）": "https://www.xjtlu.edu.cn/zh/study/masters/international-mba",
    "国际关系": "https://www.xjtlu.edu.cn/zh/study/masters/international-relations",
    "国际化教育": "https://www.xjtlu.edu.cn/zh/study/masters/global-education",
    "国际建筑专业实践": "https://www.xjtlu.edu.cn/zh/study/masters/international-professional-practice-in-architecture",
    "国际商务与全球事务": "https://www.xjtlu.edu.cn/zh/study/masters/international-business-and-global-affairs",
    "环境科学（研究型）": "https://www.xjtlu.edu.cn/zh/study/masters/environmental-sciences",
    "计算机科学（研究型）": "https://www.xjtlu.edu.cn/zh/study/masters/mres-computer-science",
    "建筑工程管理": "https://www.xjtlu.edu.cn/zh/study/masters/construction-management",
    "建筑设计": "https://www.xjtlu.edu.cn/zh/study/masters/master-of-architectural-design",
    "金融计算": "https://www.xjtlu.edu.cn/zh/study/masters/msc-financial-computing",
    "金融数学": "https://www.xjtlu.edu.cn/zh/study/masters/msc-financial-mathematics",
    "金融学": "https://www.xjtlu.edu.cn/zh/study/masters/msc-finance",
    "经济与金融": "https://www.xjtlu.edu.cn/zh/study/masters/msc-economics-and-finance",
    "精算学": "https://www.xjtlu.edu.cn/zh/study/masters/actuarial-science",
    "可持续房屋设计与工程": "https://www.xjtlu.edu.cn/zh/study/masters/masters-msc-sustainable-construction",
    "可持续能源技术": "https://www.xjtlu.edu.cn/zh/study/masters/msc-sustainable-energy-technology",
    "媒介与传播": "https://www.xjtlu.edu.cn/zh/study/masters/msc-media-and-communication",
    "模式识别和智能系统（研究型）": "https://www.xjtlu.edu.cn/zh/study/masters/pattern-recognition-and-intelligent-systems",
    "人工智能": "https://www.xjtlu.edu.cn/zh/study/masters/msc-artificial-intelligence",
    "人机交互": "https://www.xjtlu.edu.cn/zh/study/masters/human-computer-interaction",
    "商业分析": "https://www.xjtlu.edu.cn/zh/study/masters/msc-business-analytics",
    "社会网络计算技术": "https://www.xjtlu.edu.cn/zh/study/masters/msc-social-computing",
    "生物信息学（研究型）": "https://www.xjtlu.edu.cn/zh/study/masters/mres-bioinformatics",
    "数据科学": "https://www.xjtlu.edu.cn/zh/study/masters/data-science",
    "数字化教育": "https://www.xjtlu.edu.cn/zh/study/masters/digital-education",
    "数字化商业": "https://www.xjtlu.edu.cn/zh/study/masters/msc-digital-business",
    "投资管理": "https://www.xjtlu.edu.cn/zh/study/masters/msc-investment-management",
    "土木工程": "https://www.xjtlu.edu.cn/zh/study/masters/msc-civil-engineering",
    "文化与创意产业": "https://www.xjtlu.edu.cn/zh/study/masters/cultural-and-creative-industries",
    "先进机器人技术系统": "https://www.xjtlu.edu.cn/zh/study/masters/msc-in-advanced-robotics-systems",
    "先进微电子技术与材料（研究型）": "https://www.xjtlu.edu.cn/zh/study/masters/mres-advanced-microelectronic-technology-and-materials",
    "项目管理": "https://www.xjtlu.edu.cn/zh/study/masters/msc-project-management",
    "药物化学（研究型）": "https://www.xjtlu.edu.cn/zh/study/masters/medicinal-chemistry",
    "药学（研究型）": "https://www.xjtlu.edu.cn/zh/study/masters/pharmaceutical-sciences-2",
    "应用数学": "https://www.xjtlu.edu.cn/zh/study/masters/yingyongshuxue",
    "应用统计学（生物统计方向）": "https://www.xjtlu.edu.cn/zh/study/masters/applied-statistics",
    "应用信息学": "https://www.xjtlu.edu.cn/zh/study/masters/msc-applied-informatics",
    "应用语言学和多语研究": "https://www.xjtlu.edu.cn/zh/study/masters/applied-linguistics",
    "运营与供应链管理": "https://www.xjtlu.edu.cn/zh/study/masters/msc-operations-and-supply-chain-management",
    "智能工程科学与工业运营": "https://www.xjtlu.edu.cn/zh/study/masters/msc-intelligent-engineering-science-and-industrial-operations",
    "中国研究": "https://www.xjtlu.edu.cn/zh/study/masters/china-studies",
    "专业会计": "https://www.xjtlu.edu.cn/zh/study/masters/professional-accounting"
};

// Two-letter code combination to type title, personality analysis, recommended careers, and XJTLU majors.
// Data from the "final" sheet in 0129.xlsx (columns: 代码, 类型称号, 性格特性与解析, 推荐职业2.0, 西浦专业).
const comboData = {
    RA: {
        title: "RA：🔧空间艺术实践者",
        desc: "技术大佬 + 审美达人：拒绝纸上谈兵！脑袋里的奇思妙想，必须亲手变成摸得着的硬核作品！",
        careers: "景观设计师、测绘员、城市规划家、VR/AR开发、游戏设计师、3D打印工程师",
        majors: "文化与创意产业、城市规划与设计、工业设计、建筑设计、国际建筑专业实践、可持续房屋设计与工程、建筑工程管理"
    },
    RC: {
        title: "RC：🛠️精密工程践行者",
        desc: "务实严谨控 + 精准强迫症：偏爱清晰规则和标准流程，在既定框架里玩转工具，搞定具体问题就是爽！",
        careers: "土木工程师、测绘员、硬件工程师、多媒体系统工程师、软件解决方案专家",
        majors: "先进机器人技术系统、土木工程、低碳电力与能源技术 (研究型)、智能工程科学与工业运营、模式识别和智能系统（研究型）、多媒体通信、计算机科学（研究型）、应用信息学、可持续能源技术"
    },
    RE: {
        title: "RE：🚀实业现场指挥官",
        desc: "行动力天花板 + 团队主心骨：动手能力 MAX，还爱带队搞事情！不管是工程项目还是实体任务，有我在就能搞定！",
        careers: "生产经理、供应链主管、技术销售工程师、产品经理",
        majors: "建筑工程管理、运营与供应链管理、智能工程科学与工业运营、创业与创新-智慧城市方向、创业与创新-技术转移方向、可持续房屋设计与工程、先进微电子技术与材料（研究型）"
    },
    RI: {
        title: "RI：💻高级技术研发者",
        desc: "技术硬核玩家 + 万物原理控：既能动手实操搞开发，又爱深挖技术背后的底层逻辑，逻辑思维 buff 拉满！",
        careers: "软件工程师、芯片研发、AI算法工程师、程序员、科研人员、无线网及移动通信顾问",
        majors: "先进微电子技术与材料（研究型）、低碳电力与能源技术 (研究型)、材料科学与工程（研究型）、模式识别和智能系统（研究型）、生物信息学（研究型）、多媒体通信、创业与创新-智能机器人方向、创业与创新-可持续解决方案与创新技术应用方向、计算机科学（研究型）"
    },
    RS: {
        title: "RS：🧑‍🏫技术服务导师",
        desc: "技能大佬 + 热心路人甲：最爱用实打实的技能帮人解决难题，或者手把手教别人 get 新技能！",
        careers: "环境教育专家、培训师、IT支持经理、软件解决方案专家",
        majors: "应用信息学、数字化教育、对外英语教育、模式识别和智能系统（研究型）、人机交互、人工智能、创业与创新-可持续解决方案与创新技术应用方向、创业与创新-智慧康养管理方向"
    },
    IA: {
        title: "IA：🧠思想深邃的研究者",
        desc: "脑洞开拓者 + 批判思考家：思维跳脱不设限，看问题总有独特视角，就爱在智力创新里找乐子！",
        careers: "作家/撰稿人、大学教师、咨询顾问、心理学家、社会科学家",
        majors: "国际关系、应用语言学和多语研究、中国研究、儿童发展与家庭教育学、数字化教育、环境科学（研究型）"
    },
    IC: {
        title: "IC：📊数据沉淀钻研者",
        desc: "数据敏感星人 + 严谨细节控：对数字和数据超敏感，沉迷在海量数据里扒规律、得结论，精准就是我的代名词！",
        careers: "精算师、数据分析师、审计师、后端程序员、科研人员、药剂研发",
        majors: "精算学、数据科学、应用数学、金融计算、应用统计学（生物统计方向）、生物信息学（研究型）、药物化学（研究型）、药学（研究型）、高级化学（研究型）、分子生物学（研究型）"
    },
    IE: {
        title: "IE：🎯市场先机洞察者",
        desc: "战略分析大神 + 商业规划师：用超强分析能力洞察市场，玩转商业策略，解决管理难题就是我的拿手好戏！",
        careers: "管理咨询顾问、市场分析师、风险投资(VC)顾问、产品经理",
        majors: "商业分析、投资管理、数字化商业、管理学、经济与金融、金融计算、创业与创新-风险投资方向、创业与创新-企业和谐治理、创新与传承方向"
    },
    IR: {
        title: "IR：🔬数字世界探险者",
        desc: "硬核极客 + 科研探险家：沉迷攻克工程、物理、生物领域的硬科技难题，在数字世界里疯狂探险！",
        careers: "生物工程师、程序员、架构师、网络安全专家、算法分析师",
        majors: "高级化学（研究型）、分子生物学（研究型）、计算机科学（研究型）、应用信息学、社会网络计算技术、模式识别和智能系统（研究型）、材料科学与工程（研究型）、人工智能、人机交互、创业与创新-智能机器人方向"
    },
    IS: {
        title: "IS：❤️人文关怀科学家",
        desc: "理性科研人 + 超暖心前辈：手握科学知识，心怀人文温度，就想用专业能力改善人类生活！",
        careers: "医生、心理咨询师、公共卫生专家、临床医生、医学科研人员、药品研发",
        majors: "环境科学（研究型）、生物信息学（研究型）、儿童发展与家庭教育学、药物化学（研究型）、药学（研究型）、应用统计学（生物统计方向）、创业与创新-全球公共卫生方向"
    },
    AC: {
        title: "AC：🎨视觉规范专家",
        desc: "创意设计师 + 细节强迫症：擅长“带着镣铐跳舞”！在规则框架里玩转出圈创意，对细节完美度要求拉满！",
        careers: "文字编辑、排版设计、UI/UX设计师、绘图员、档案管理",
        majors: "建筑设计、工业设计、媒介与传播、城市规划与设计、人机交互、社会网络计算技术、创业与创新-创意科技方向"
    },
    AE: {
        title: "AE：💼创意产业操盘手",
        desc: "创意发电机 + 团队主理人：自带感染力 buff，既能产出炸裂创意，又能带队搞艺术项目，妥妥的操盘大佬！",
        careers: "自媒体运营、艺术指导、创意总监、广告撰稿人、文化IP运营",
        majors: "文化与创意产业、媒介与传播、工业设计、管理学、创业与创新-创意科技方向、创业与创新-技术转移方向"
    },
    AI: {
        title: "AI：🧩感性逻辑分析师",
        desc: "脑洞创意家 + 深度思考者：思想深邃脑洞大，爱探索各种新奇概念，既有深度又有创意的内容生产家！",
        careers: "作家、翻译家、语言学家、评论家、剧作家、用户体验研究(UXR)、交互设计师、数字策展人、游戏原画师",
        majors: "文化与创意产业、人机交互、社会网络计算技术、媒介与传播、应用语言学和多语研究、创业与创新-创意科技方向"
    },
    AR: {
        title: "AR：🛠️匠心实造者",
        desc: "手工达人 + 美学艺术家：实用艺术。偏爱实用艺术！喜欢亲手打造看得见摸得着的艺术品，用双手诠释美！",
        careers: "服装设计师、摄影师、舞蹈演员、建筑师、珠宝设计师、产品造型师、空间摄影师",
        majors: "国际建筑专业实践、土木工程、工业设计、城市规划与设计、人工智能、创业与创新-智慧城市方向"
    },
    AS: {
        title: "AS：🎭情感疗愈传播者",
        desc: "艺术治愈师 + 暖心分享家：用艺术的力量治愈人心，喜欢通过创作和分享，给别人带去温暖和力量！",
        careers: "美术/音乐老师、儿童发展心理学专家、绘本作家、新媒体编辑、哲学家",
        majors: "文化与创意产业、媒介与传播、儿童发展与家庭教育学、中国研究、对外英语教育、创业与创新-智慧康养管理方向"
    },
    SA: {
        title: "SA：🗣️共情价值传播者",
        desc: "共情小太阳 + 表达达人：超有同理心，善于用情感交流打动别人，妥妥的优秀宣传委员！",
        careers: "心理咨询师、婚礼策划师、教师、新媒体运营、培训师、非营利组织(NGO)、翻译",
        majors: "儿童发展与家庭教育学、数字化教育、对外英语教育、应用语言学和多语研究、媒介与传播、创业与创新-智慧康养管理方向"
    },
    SC: {
        title: "SC：📋秩序型社会服务",
        desc: "靠谱小管家 + 贴心办事员：心思缜密，细致周到，偏爱井然有序，看似一本正经，实则最爱帮大家排忧解难！",
        careers: "教务管理、行政助理、客户服务经理、职业规划师、社会工作者、人力资源、教务主任",
        majors: "国际化教育、儿童发展与家庭教育学、对外英语教育、创业与创新-企业和谐治理、创新与传承方向、创业与创新-智慧康养管理方向、创业与创新-战略人力资源管理方向"
    },
    SE: {
        title: "SE：🎯团队赋能核心",
        desc: "团队主心骨 + 公益行动派：自带号召力，热衷社会活动，最爱带团队搞事情，用管理能力服务大众！",
        careers: "校长、非政府组织(NGO)负责人、人力资源经理、HRBP、企业教练、学校管理者、客户关系总监",
        majors: "环境科学（研究型）、管理学、国际化教育、国际商务与全球事务、国际工商管理（非全日制）、创业与创新-战略人力资源管理方向"
    },
    SI: {
        title: "SI：🧑‍⚕️专业化技术服务",
        desc: "专业技术咖 + 助人小能手：手握专业知识技能，就想用硬核实力帮人解决难题！",
        careers: "职业规划师、社会工作者、心理咨询师、翻译、医疗顾问",
        majors: "儿童发展与家庭教育学、药学（研究型）、数字化教育、应用语言学和多语研究、应用统计学（生物统计方向）、创业与创新-全球公共卫生方向"
    },
    SR: {
        title: "SR：🛠️实干型公益人才",
        desc: "行动派达人 + 暖心公益人：不爱空谈爱实干！喜欢身体力行，用实操技能帮人解决实际问题！",
        careers: "物理治疗师、运动康复师、教师、高级护理专家、技能实操教练",
        majors: "儿童发展与家庭教育学、环境科学（研究型）、国际工商管理（非全日制）、创业与创新-可持续解决方案与创新技术应用方向、创业与创新-全球公共卫生方向"
    },
    EA: {
        title: "EA：📣品牌故事布道者",
        desc: "故事大王 + 潮流捕手：超会讲故事搞营销，能精准捕捉市场潮流，个人魅力值直接拉满！",
        careers: "市场总监、记者、活动策划、时尚买手、公关顾问、招商引资经理",
        majors: "国际商务与全球事务、文化与创意产业、国际关系、创业与创新-商业与人工智能创新方向、创业与创新-创意科技方向"
    },
    EC: {
        title: "EC：📊卓越数据管理人",
        desc: "效率达人 + 管理大佬：务实派管理者，效率提升与成本管控，通通不在话下！能把组织运转得妥妥当当！",
        careers: "银行行长、采购经理、信用分析师、运营总监、企业管理顾问、高端管理",
        majors: "经济与金融、商业分析、数据科学、投资管理、金融学、数字化商业、精算学、专业会计、金融数学、创业与创新-风险投资方向"
    },
    EI: {
        title: "EI：🧠数字化战略决策者",
        desc: "策略军师 + 决策大佬：不打无准备之仗！先分析局势再精准决策，妥妥的数字化战略掌舵人！",
        careers: "投资经理、银行家、律师、战略分析师、电商运营专家、行业研究员",
        majors: "商业分析、金融学、投资管理、数字化商业、经济与金融、金融计算、数据科学、人工智能、创业与创新-商业与人工智能创新方向"
    },
    ER: {
        title: "ER：🏭实业管理精英",
        desc: "实业大佬 + 执行先锋：偏爱看得见摸得着的实业生意，重视结果和执行力，妥妥的管理精英！",
        careers: "房地产、零售店长、餐饮连锁管理者、区域销售经理、采购总监、物流经理、连锁店长、物业管理",
        majors: "运营与供应链管理、智能工程科学与工业运营、数字化商业、项目管理、建筑工程管理、创业与创新-技术转移方向"
    },
    ES: {
        title: "ES：🤝资源整合专家",
        desc: "社交达人 + 资源操盘手：超会搞人际关系，擅长整合各方资源，用超强社交能力达成业绩目标！",
        careers: "销售经理、外交官、人力资源总监、管理咨询师、猎头顾问、商务拓展(BD)专家",
        majors: "国际关系、管理学、国际商务与全球事务、项目管理、运营与供应链管理、创业与创新-战略人力资源管理方向"
    },
    CA: {
        title: "CA：📚严谨的创意执行",
        desc: "整理小能手 + 创意设计师：专治杂乱无章！能把乱糟糟的信息整理得又好看又有条理，逻辑力、执行力 MAX！",
        careers: "排版设计、校对、图书馆员、秘书、编辑、档案管理员、信息架构师",
        majors: "媒介与传播、应用语言学和多语研究、中国研究、项目管理、国际工商管理（非全日制）、运营与供应链管理、创业与创新-创意科技方向"
    },
    CE: {
        title: "CE：📈高效组织运营官",
        desc: "商务精英 + 运营大佬：商务型专家，注重合规和执行，能很快熟悉商业流程，人称天选CFO。",
        careers: "财务主管、项目运营经理、合规审计师、税务顾问、商务运营管理",
        majors: "专业会计、管理学、药学（研究型）、精算学、金融学、金融数学、运营与供应链管理、创业与创新-企业和谐治理、创新与传承方向、创业与创新-商业与人工智能创新方向"
    },
    CI: {
        title: "CI：🧮数据精算专家",
        desc: "数据大神 + 逻辑鬼才：严谨细致到极致，沉迷处理复杂数字和逻辑关系，数据在我手里就是王牌！",
        careers: "会计师、数据库管理员、成本估算师、软件测试员、精算师、数据分析师、风险控制专家、后台开发工程师、银行合规官",
        majors: "精算学、计算机科学（研究型）、专业会计、金融数学、金融计算、应用数学、数据科学、商业分析、模式识别和智能系统（研究型）"
    },
    CR: {
        title: "CR：🛡️务实的秩序维护者",
        desc: "运营多面手 + 秩序守护者：恪守流程规范，无论是设备运维还是物资管理，均能保障各项事务——井然有序！",
        careers: "安全检查员、档案管理员、调度员、质量控管(QA)、仓储物流主管、系统维护员、生产流程监控、标准化研究员",
        majors: "项目管理、可持续房屋设计与工程、可持续能源技术、先进机器人技术系统、国际工商管理（非全日制）、创业与创新-智慧城市方向、创业与创新-企业和谐治理、创新与传承方向、低碳电力与能源技术 (研究型)"
    },
    CS: {
        title: "CS：🧑‍💼合规服务管家",
        desc: "贴心管家 + 合规达人：做事细致周到，心有规则底线，会在合规框架内提供超贴心的支持！",
        careers: "银行柜员、出纳、人力资源(HR)、法务、客户服务经理、公共事务主管、行政专员",
        majors: "专业会计、药学（研究型）、国际化教育、应用统计学（生物统计方向）、创业与创新-战略人力资源管理方向、国际商务与全球事务"
    }
};

// Local storage key for persisting the latest completed test result.
const STORAGE_KEY = "xjtlu_holland_result_v1";

function saveResultToStorage(payload) {
    try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch (e) {
        // Ignore storage errors (e.g. private mode or disabled storage).
    }
}

function loadResultFromStorage() {
    try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (!raw) return null;
        return JSON.parse(raw);
    } catch (e) {
        return null;
    }
}

function clearResultStorage() {
    try {
        window.localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
        // Ignore storage errors.
    }
}

let cur = 0;
let answers = new Array(questions.length).fill(null);

// Split majors string by "、" only when not inside full-width parentheses, so names like "创业与创新（企业和谐治理、创新与传承方向）" stay as one item.
function splitMajors(majorsStr) {
    if (Array.isArray(majorsStr)) {
        return majorsStr.map((m) => (typeof m === "string" ? m.trim() : String(m))).filter((m) => m.length > 0);
    }
    const s = typeof majorsStr === "string" ? majorsStr : "";
    const result = [];
    let current = "";
    let depth = 0;
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (c === "（") depth += 1;
        else if (c === "）") depth -= 1;
        else if (c === "、" && depth === 0) {
            if (current.trim()) result.push(current.trim());
            current = "";
            continue;
        }
        current += c;
    }
    if (current.trim()) result.push(current.trim());
    return result;
}

// Handle intro video overlay: play on load and fade out after 2 seconds.
document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById("intro-video-overlay");
    if (!overlay) return;

    const video = overlay.querySelector("video");
    if (video && typeof video.play === "function") {
        // Best-effort play; ignore failures from autoplay restrictions.
        video.play().catch(() => {});
    }

    setTimeout(() => {
        overlay.classList.add("hidden");
    }, 2000);
});

// Utility to safely update the question area.
function renderQuestion(index) {
    const wrapper = document.getElementById("questions-wrapper");
    if (!wrapper) return;

    const labels = ["非常认同", "比较认同", "一般", "不太认同", "非常不认同"];

    wrapper.innerHTML = `
        <div class="q-text">${questions[index].text}</div>
        <div class="options">
            ${[5, 4, 3, 2, 1]
                .map((value) => {
                    const isSelected = answers[index] === value;
                    const labelText = labels[5 - value];
                    return `
                        <label class="opt-btn ${isSelected ? "selected" : ""}" onclick="selectOpt(${index}, ${value})">
                            <input type="radio" name="answer" value="${value}" ${isSelected ? "checked" : ""}>
                            ${labelText}
                        </label>
                    `;
                })
                .join("")}
        </div>
    `;

    const progressText = document.getElementById("progress-text");
    const progressBar = document.getElementById("progress-bar-inner");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    if (progressText) {
        progressText.innerText = `${index + 1} / ${questions.length}`;
    }
    if (progressBar) {
        progressBar.style.width = `${((index + 1) / questions.length) * 100}%`;
    }
    if (prevBtn) {
        prevBtn.disabled = index === 0;
    }
    if (nextBtn) {
        nextBtn.innerText = index === questions.length - 1 ? "查看报告" : "下一题";
    }
}

// Public API: called from HTML when user starts the test.
function startTest() {
    const intro = document.getElementById("intro-page");
    const test = document.getElementById("test-page");
    if (intro) intro.classList.remove("active");
    if (test) test.classList.add("active");
    cur = 0;
    renderQuestion(cur);
}

// Handle option selection and gentle auto-advance.
function selectOpt(questionIndex, value) {
    answers[questionIndex] = value;

    const allBtns = document.querySelectorAll(".opt-btn");
    allBtns.forEach((btn) => btn.classList.remove("selected"));

    const targetInput = document.querySelector(`.opt-btn input[name="answer"][value="${value}"]`);
    if (targetInput && targetInput.parentElement) {
        targetInput.parentElement.classList.add("selected");
    }

    // Auto-advance only if user stays on the same question.
    setTimeout(() => {
        if (questionIndex === cur) {
            if (cur + 1 < questions.length) {
                cur += 1;
                renderQuestion(cur);
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
        }
    }, 320);
}

// Navigation buttons for manual move.
function move(step) {
    if (step > 0 && answers[cur] === null) {
        alert("分院帽需要你的答案哦！");
        return;
    }

    if (cur + step >= questions.length) {
        finish();
        return;
    }

    if (cur + step < 0) {
        return;
    }

    cur += step;
    renderQuestion(cur);
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Render result view (code, text blocks, cards, and radar chart) from prepared data.
function renderResultView(hollandCode, finalScores, comboDetail, primaryCombo) {
    const finalCodeElement = document.getElementById("final-code");
    const comboTitleElement = document.getElementById("combo-title");
    const comboDescElement = document.getElementById("combo-desc");
    const careerContainer = document.getElementById("career-recommendations");
    const majorContainer = document.getElementById("major-recommendations");

    if (finalCodeElement) {
        finalCodeElement.innerText = hollandCode;
    }
    if (comboTitleElement) {
        comboTitleElement.innerText = comboDetail.title;
    }
    if (comboDescElement) {
        comboDescElement.innerText = comboDetail.desc;
    }
    if (careerContainer && comboDetail.careers) {
        careerContainer.innerHTML = "";
        comboDetail.careers.split("、").forEach((career) => {
            const tag = document.createElement("span");
            tag.className = "career-tag";
            tag.textContent = career.trim();
            careerContainer.appendChild(tag);
        });
    }
    if (majorContainer) {
        majorContainer.innerHTML = "";

        const sortedMajors = splitMajors(comboDetail.majors).sort((a, b) => a.length - b.length);

        sortedMajors.forEach((major) => {
            const url = programmeLinks[major] || "https://www.xjtlu.edu.cn/zh/study/masters/";
            const card = document.createElement("div");
            card.className = "major-card";
            card.innerHTML = `
                <div>
                    <div class="major-card-title">${major}</div>
                    <div class="major-card-subtitle">西交利物浦大学硕士专业</div>
                </div>
                <a href="${url}" target="_blank" rel="noopener noreferrer" class="jump-btn">
                    了解详情
                </a>
            `;
            majorContainer.appendChild(card);
        });
    }

    const radarCanvas = document.getElementById("radarChart");
    if (radarCanvas && window.Chart) {
        // eslint-disable-next-line no-new
        new Chart(radarCanvas, {
            type: "radar",
            data: {
                labels: [
                    ["🛠️ R 实干型", "(Realistic)"],
                    ["🔬 I 研究型", "(Investigative)"],
                    ["🎨 A 艺术型", "(Artistic)"],
                    ["🤝 S 社会型", "(Social)"],
                    ["📈 E 企业型", "(Enterprising)"],
                    ["🗂️ C 常规型", "(Conventional)"]
                ],
                datasets: [
                    {
                        label: "你的兴趣画像",
                        data: [finalScores.R, finalScores.I, finalScores.A, finalScores.S, finalScores.E, finalScores.C],
                        backgroundColor: "rgba(0, 51, 102, 0.18)",
                        borderColor: "#003366",
                        pointBackgroundColor: "#c0935d",
                        pointBorderColor: "#ffffff"
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 20,
                        ticks: {
                            display: false
                        },
                        grid: {
                            color: "rgba(0, 0, 0, 0.08)"
                        },
                        angleLines: {
                            color: "rgba(0, 0, 0, 0.08)"
                        },
                        pointLabels: {
                            font: {
                                size: 11,
                                lineHeight: 1.3
                            },
                            color: "#333333",
                            padding: 16
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }
}

// Compute scores and show result page.
function finish() {
    const firstUnfilledIndex = answers.findIndex((value) => value === null);
    if (firstUnfilledIndex !== -1) {
        alert(`你还有题目没答完哦（第${firstUnfilledIndex + 1}题）`);
        cur = firstUnfilledIndex;
        renderQuestion(cur);
        return;
    }

    const finalScores = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
    questions.forEach((question, index) => {
        finalScores[question.id] += answers[index];
    });

    const sortedTypes = Object.keys(finalScores).sort((a, b) => finalScores[b] - finalScores[a]);
    const primaryCombo = sortedTypes[0] + sortedTypes[1];
    const fallbackCombo = sortedTypes[1] + sortedTypes[0];
    const comboDetail =
        comboData[primaryCombo] ||
        comboData[fallbackCombo] || {
            title: "潜力全才",
            desc: "你的各维度非常均衡，适合根据个人兴趣深入探索具体学科方向。",
            careers: "管理、咨询、综合岗位",
            majors: "管理学"
        };

    const hollandCode = sortedTypes.slice(0, 3).join("");

    sendEvent("test_completed", { holland_code: hollandCode, primary_combo: primaryCombo });
    // Persist result so that browser back/refresh can restore the view.
    saveResultToStorage({
        finalScores,
        sortedTypes,
        primaryCombo,
        hollandCode
    });

    const testPage = document.getElementById("test-page");
    const resultPage = document.getElementById("result-page");
    if (testPage) testPage.classList.remove("active");
    if (resultPage) resultPage.classList.add("active");

    renderResultView(hollandCode, finalScores, comboDetail, primaryCombo);
}

// Analytics: send custom event only when gtag is configured (replace G-XXXXXXXXXX in index.html with your GA4 Measurement ID).
function sendEvent(eventName, params) {
    if (typeof gtag === "function") {
        gtag("event", eventName, params || {});
    }
}

// Track guide banner link clicks (last link on result page).
document.addEventListener("DOMContentLoaded", () => {
    const guideLink = document.getElementById("guide-banner-link");
    if (guideLink) {
        guideLink.addEventListener("click", () => {
            sendEvent("guide_link_click", { link_url: "https://mp.weixin.qq.com/s/Cpk3YFlKQ0aBCfVnZaPzNA" });
        });
    }
});

// Restore last completed result (if any) when the page is loaded again.
document.addEventListener("DOMContentLoaded", () => {
    const stored = loadResultFromStorage();
    if (!stored || !stored.finalScores) return;

    const intro = document.getElementById("intro-page");
    const testPage = document.getElementById("test-page");
    const resultPage = document.getElementById("result-page");
    if (intro) intro.classList.remove("active");
    if (testPage) testPage.classList.remove("active");
    if (resultPage) resultPage.classList.add("active");

    const finalScores = stored.finalScores;
    const sortedTypes =
        Array.isArray(stored.sortedTypes) && stored.sortedTypes.length
            ? stored.sortedTypes
            : Object.keys(finalScores).sort((a, b) => finalScores[b] - finalScores[a]);

    const primaryCombo = stored.primaryCombo || (sortedTypes[0] + sortedTypes[1]);
    const fallbackCombo = sortedTypes[1] + sortedTypes[0];
    const comboDetail =
        comboData[primaryCombo] ||
        comboData[fallbackCombo] || {
            title: "潜力全才",
            desc: "你的各维度非常均衡，适合根据个人兴趣深入探索具体学科方向。",
            careers: "管理、咨询、综合岗位",
            majors: "管理学"
        };

    const hollandCode =
        stored.hollandCode && typeof stored.hollandCode === "string" && stored.hollandCode.length >= 3
            ? stored.hollandCode
            : sortedTypes.slice(0, 3).join("");

    renderResultView(hollandCode, finalScores, comboDetail, primaryCombo);
});

// Public API: restart test from scratch and clear stored result.
function restartTest() {
    clearResultStorage();
    // Full reload ensures DOM state is reset and intro-page becomes active again.
    answers = new Array(questions.length).fill(null);
    cur = 0;
    window.location.reload();
}

// Expose functions to global scope so they can be called from HTML attributes.
window.startTest = startTest;
window.selectOpt = selectOpt;
window.move = move;
window.restartTest = restartTest;

