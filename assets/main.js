// Core data model for the Holland test.
// User-facing strings remain in Chinese; internal comments are English only.

// Question list in fixed order.
const questions = [
    { id: "A", text: "我对色彩、声音很敏感，美感是我生活中的重要追求。" },
    { id: "I", text: "我对实验、编程和数学模型有浓厚兴趣。" },
    { id: "A", text: "我喜欢用视频、照片、日记等方式记录生活。" },
    { id: "C", text: "我喜欢在开始工作前做好详尽的计划清单，并按部就班执行。" },
    { id: "I", text: "我喜欢钻研问题的底层逻辑，享受解迷。" },
    { id: "C", text: "我注重细节，总能发现文档或数据的小错误。" },
    { id: "S", text: "当朋友向我倾诉烦恼时，我能感同身受并提供情绪支持。" },
    { id: "R", text: "我有过把东西拆掉再复原的经历。" },
    { id: "C", text: "我更喜欢在清晰、明确的指令下工作。" },
    { id: "E", text: "我擅长向别人推销我的想法或产品，并享受说服他人的成就感。" },
    { id: "E", text: "我愿意在竞争激烈的环境获得成功。" },
    { id: "C", text: "处理表格、整理文件能让我感到踏实和有条理。" },
    { id: "E", text: "我喜欢在团队中担任决策者，组织大家协作完成目标。" },
    { id: "A", text: "我讨厌条条框框、一成不变的工作环境。" },
    { id: "E", text: "我愿意为达成目标而冒险或承担压力。" },
    { id: "I", text: "我会为感兴趣的知识点，花费大量时间深入研究。" },
    { id: "I", text: "做决定前，我会查阅资料，搜集大量数据佐证我的观点。" },
    { id: "R", text: "我更喜欢自己动手修理损坏的电器、生活用品，而不是找维修工。" },
    { id: "A", text: "我很在意工作成果是否符合我的个人意愿和风格。" },
    { id: "R", text: "我喜欢主动研究物体的物理构造或微观结构。" },
    { id: "S", text: "我喜欢参加志愿者活动或社区服务，这让我很有成就感。" },
    { id: "R", text: "我更喜欢需要身体力行或操作具体工具的工作" },
    { id: "S", text: "在团队中，我更关心大家的团队氛围和协作，而不是竞争输赢。" },
    { id: "S", text: "我很享受引导他人解决问题或传授知识的过程。" }
];

// Two-letter code combination to type title, personality analysis, recommended careers, and XJTLU majors.
// Data from the "final" sheet in 0129.xlsx (columns: 代码, 类型称号, 性格特性与解析, 推荐职业2.0, 西浦专业).
const comboData = {
    RA: { title: "RA：空间艺术实操者", desc: "动手+创造：既有技术能力又有审美追求。喜欢制作既实用又美观的物品。", careers: "景观设计师、测绘员、城市规划家、VR/AR开发、游戏设计、3D打印工程师", majors: "文化与创意产业-交互媒体方向、城市规划与设计-景观设计/城市设计方向、工业设计、建筑设计" },
    RC: { title: "RC：精密制造工匠", desc: "动手+规范：务实、精确、守纪律。喜欢在有明确规则和流程的环境中操作设备。", careers: "土木工程师、测绘员、硬件工程师、多媒体系统工程师、软件解决方案专家", majors: "先进机器人技术系统、土木工程、建筑工程管理、智能工程科学与工业运营、多媒体通信" },
    RE: { title: "RE：实业现场指挥官", desc: "动手+企划：行动力极强，喜欢领导他人完成具体的工程项目或实体任务。", careers: "生产经理、供应链主管、技术销售工程师、产品经理", majors: "建筑工程管理、供应链管理、智能工程科学与工业运营" },
    RI: { title: "RI：底层技术研发者", desc: "动手+研究：技术专家型。不仅能动手做，还喜欢钻研背后的原理。逻辑思维强。", careers: "软件工程师、芯片研发、AI算法工程师、程序员、科研人员、无线网及移动通信顾问", majors: "先进微电子技术与材料（研究型）、低碳电力与能源、材料科学与工程、生物信息学（研究型）、多媒体通信" },
    RS: { title: "RS：技术服务导师", desc: "动手+助人：喜欢用具体的技能去帮助别人，或者教授别人操作技能。", careers: "环境教育专家、培训师、IT支持经理、软件解决方案专家", majors: "环境科学、数字化教育-学习与教学方向、对外英语教育、社会网络计算技术" },
    IA: { title: "IA：思想深邃的研究者", desc: "研究+创造：思维活跃，具有批判性思维和独特的视角。喜欢智力上的创新。", careers: "作家/撰稿人、大学教师、咨询顾问、心理学家、社会科学家", majors: "国际关系、应用语言学和多语研究、中国研究、儿童发展与家庭教育学" },
    IC: { title: "IC：数据沉淀钻研者", desc: "研究+规范：严谨、精确，对数字和数据高度敏感。喜欢通过数据分析得出结论。", careers: "精算师、数据分析师、审计师、后端程序员、科研人员、药剂研发", majors: "精算学、数据科学、应用统计学（生物统计方向）、生物信息学、药物化学、药学、高级化学、分子生物学" },
    IE: { title: "IE：市场先机洞察者", desc: "研究+企划：战略家。喜欢运用分析能力来规划商业策略或解决管理难题。", careers: "管理咨询顾问、市场分析师、风险投资(VC)顾问、产品经理", majors: "应用数学、商业分析、投资管理、数字化商业、管理学" },
    IR: { title: "IR：数字世界探险者", desc: "研究+动手：硬核极客。喜欢解决工程、物理或生物领域的硬科技难题。", careers: "生物工程师、程序员、架构师、网络安全专家、算法分析师", majors: "高级化学、分子生物学（研究型）、计算机科学、应用信息学、社会网络计算技术" },
    IS: { title: "IS：人文关怀科学家", desc: "研究+助人：喜欢运用科学知识来改善人类的处境，兼具理性和人文关怀。", careers: "医生、心理咨询师、公共卫生专家、临床医生、医学科研人员、药品研发", majors: "环境科学、生物信息学、创业与创新-公共卫生方向、儿童发展与家庭教育学、药物化学、药学-AI药物发现与开发方向" },
    AC: { title: "AC：视觉规范专家", desc: "创造+规范：能在规则中发挥创意，注重细节的完美，适合“带着脚镣跳舞”。", careers: "文字编辑、排版设计、UI/UX设计师、绘图员、档案管理", majors: "建筑设计、工业设计、媒介与传播、城市规划与设计、人机交互" },
    AE: { title: "AE：创意产业操盘手", desc: "创造+企划：富有感染力，善于推销自己的创意，喜欢领导艺术团队。", careers: "自媒体运营、艺术指导、创意总监、广告撰稿人、文化IP运营", majors: "文化与创意产业-创意产业方向、媒介与传播、工业设计、管理学" },
    AI: { title: "AI：感性逻辑分析师", desc: "创造+研究：思想深邃，喜欢探索各种概念和符号，具有很强的创作深度。", careers: "作家、翻译家、语言学家、评论家、剧作家、用户体验研究(UXR)、交互设计师、数字策展人、游戏原画师", majors: "文化与创意产业、人机交互、媒介与传播、应用语言学和多语研究" },
    AR: { title: "AR：匠心实造者", desc: "创造+动手：实用艺术。喜欢制作具体的艺术品，或者通过身体展现美。", careers: "服装设计师、摄影师、舞蹈演员、建筑师、珠宝设计师、产品造型师、空间摄影师", majors: "国际建筑专业实践、土木工程、工业设计、媒介与传播、城市规划与设计" },
    AS: { title: "AS：情感疗愈传播者", desc: "创造+助人：喜欢通过艺术的形式来疗愈他人或教育他人。", careers: "美术/音乐老师、儿童发展心理学专家、绘本作家、新媒体编辑、哲学家", majors: "文化与创意产业、媒介与传播、儿童发展与家庭教育学、中国研究" },
    SA: { title: "SA：共情价值传播者", desc: "助人+创造：富有同理心和表现力，善于通过情感交流来影响他人。", careers: "心理咨询师、婚礼策划师、教师、新媒体运营、培训师、非营利组织(NGO)、翻译", majors: "儿童发展与家庭教育学、数字化教育、对外英语教育、应用语言学、媒介与传播" },
    SC: { title: "SC：秩序型社会服务", desc: "助人+规范：办事靠谱，细心周到。喜欢在有序的环境中为他人提供服务。", careers: "教务管理、行政助理、客户服务经理、职业规划师、社会工作者、人力资源、教务主任", majors: "国际化教育-课程与教学方向、儿童发展与家庭教育学" },
    SE: { title: "SE：团队赋能核心", desc: "助人+企划：具有号召力，热衷于社会活动，喜欢通过管理团队来服务大众。", careers: "校长、非政府组织(NGO)负责人、人力资源经理、HRBP、企业教练、学校管理者、客户关系总监", majors: "创业与创新-战略人力资源管理方向、环境科学、管理学、国际化教育" },
    SI: { title: "SI：专业化技术服务", desc: "助人+研究：专家型助人者。喜欢运用专业知识和诊断技术来帮助他人。", careers: "职业规划师、社会工作者、心理咨询师、翻译、医疗顾问", majors: "儿童发展与家庭教育学-教育心理学与咨询方向、临床药学、数字化教育、社会网络计算技术" },
    SR: { title: "SR：实干型公益人才", desc: "助人+动手：行动派助人者。喜欢通过身体力行或操作设备来照顾他人。", careers: "物理治疗师、运动康复师、教师、高级护理专家、技能实操教练", majors: "儿童发展与家庭教育学-家庭与社会工作方向、环境科学" },
    EA: { title: "EA：品牌故事布道者", desc: "企划+创造：擅长讲故事和营销，能敏锐捕捉市场潮流，富有个人魅力。", careers: "市场总监、记者、活动策划、时尚买手、公关顾问、招商引资经理", majors: "国际商务与全球事务、文化与创意产业-文化产业方向、国际关系" },
    EC: { title: "EC：规制型卓越管理", desc: "企划+规范：务实的管理者。注重效率和成本控制，善于维持组织运转。", careers: "银行行长、采购经理、信用分析师、运营总监、企业管理顾问、高端管理", majors: "经济与金融、国际工商管理、投资管理、金融学、数字化商业、精算学、专业会计" },
    EI: { title: "EI：数字化战略决策者", desc: "企划+研究：策略型领导。不打无准备之仗，善于分析局势后做决策。", careers: "投资经理、银行家、律师、战略分析师、电商运营专家、行业研究员", majors: "商业分析、金融学、投资管理、数字化商业" },
    ER: { title: "ER：实业管理精英", desc: "企划+动手：实业家。喜欢看得见摸得着的生意，重视结果和执行力。", careers: "房地产、零售店长、餐饮连锁管理者、区域销售经理、采购总监、物流经理、连锁店长、物业管理", majors: "运营与供应链管理、智能工程科学与工业运营、数字化商业" },
    ES: { title: "ES：资源整合专家", desc: "企划+助人：关系型领导。善于社交，通过搞好人际关系来达成业绩。", careers: "销售经理、外交官、人力资源总监、管理咨询师、猎头顾问、商务拓展(BD)专家", majors: "国际关系、管理学、创业与创新" },
    CA: { title: "CA：严谨的创意执行", desc: "规范+创造：喜欢整理和美化。擅长把杂乱的信息变得井井有条且美观。", careers: "排版设计、校对、图书馆员、秘书、编辑、档案管理员、信息架构师", majors: "媒介与传播、应用语言学和多语研究、中国研究、项目管理" },
    CE: { title: "CE：高效组织运营官", desc: "规范+企划：商务型专家。对商业流程非常熟悉，注重合规和执行。", careers: "财务主管、项目运营经理、合规审计师、税务顾问、商务运营管理", majors: "专业会计、管理学、药学-制药管理方向、精算学、金融学、专业会计、运营与供应链管理" },
    CI: { title: "CI：数据精算专家", desc: "规范+研究：数据专家。严谨细致，喜欢处理复杂的数字和逻辑关系。", careers: "会计师、数据库管理员、成本估算师、软件测试员、精算师、数据分析师、风险控制专家、后台开发工程师、银行合规官", majors: "精算学、应用统计学（生物统计方向）、生物信息学、金融数学、应用数学、数据科学" },
    CR: { title: "CR：务实的秩序维护者", desc: "规范+动手：操作能手。喜欢按照既定程序操作设备或处理物资。", careers: "安全检查员、档案管理员、调度员、质量控管(QA)、仓储物流主管、系统维护员、生产流程监控、标准化研究员", majors: "项目管理、可持续房屋设计与工程、可持续能源技术、先进机器人技术系统" },
    CS: { title: "CS：合规服务管家", desc: "规范+助人：服务型管家。喜欢为他人提供细致、周到的后勤支持。", careers: "银行柜员、出纳、人力资源(HR)、法务、客户服务经理、公共事务主管、行政专员", majors: "药学-药事监管科学方向、国际化教育-行政与管理方向、专业会计" }
};

let cur = 0;
let answers = new Array(questions.length).fill(null);

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
        nextBtn.innerText = index === questions.length - 1 ? "查看报告" : "下一步";
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

// Compute scores and show result page.
function finish() {
    const firstUnfilledIndex = answers.findIndex((value) => value === null);
    if (firstUnfilledIndex !== -1) {
        alert(`你还有题目没答完哦（第${firstUnfilledIndex + 1}题）`);
        cur = firstUnfilledIndex;
        renderQuestion(cur);
        return;
    }

    const testPage = document.getElementById("test-page");
    const resultPage = document.getElementById("result-page");
    if (testPage) testPage.classList.remove("active");
    if (resultPage) resultPage.classList.add("active");

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

    const finalCodeElement = document.getElementById("final-code");
    const comboTitleElement = document.getElementById("combo-title");
    const comboDescElement = document.getElementById("combo-desc");
    const careerContainer = document.getElementById("career-recommendations");
    const majorContainer = document.getElementById("major-recommendations");

    if (finalCodeElement) {
        finalCodeElement.innerText = sortedTypes.slice(0, 3).join("");
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
        comboDetail.majors.split("、").forEach((major) => {
            const card = document.createElement("div");
            card.className = "major-card";
            card.innerHTML = `
                <div>
                    <div class="major-card-title">${major}</div>
                    <div class="major-card-subtitle">西交利物浦大学研究生专业</div>
                </div>
                <a href="https://www.xjtlu.edu.cn/zh/study/masters/" target="_blank" rel="noopener noreferrer" class="jump-btn">
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
                labels: ["现实型(R)", "研究型(I)", "艺术型(A)", "社会型(S)", "企业型(E)", "传统型(C)"],
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
                                size: 11
                            },
                            color: "#333333"
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

// Expose functions to global scope so they can be called from HTML attributes.
window.startTest = startTest;
window.selectOpt = selectOpt;
window.move = move;

