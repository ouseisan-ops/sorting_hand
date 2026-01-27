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

// Two-letter code combination to narrative + majors.
const comboData = {
    AC: { title: "AC：美感与秩序的平衡者", desc: "具备审美能力同时注重细节规范，能在规则中平衡创意。", majors: "建筑设计、城市规划" },
    AE: { title: "AE：艺术商业化的先锋", desc: "极具创意冲劲，擅长将艺术构思转化为商业成果。", majors: "文化与创意产业、工业设计" },
    AI: { title: "AI：跨界艺术研究者", desc: "喜欢通过理性的逻辑去探索感性的艺术规律。", majors: "人机交互、多媒体通信" },
    AR: { title: "AR：匠心独运的建筑师", desc: "喜欢动手实现创意，是典型的“匠人型”人才。", majors: "建筑设计、国际建筑专业" },
    AS: { title: "AS：感性传播的使者", desc: "倾向于通过艺术形式来服务他人、传播理念。", majors: "媒介与传播、数字教育" },
    CA: { title: "CA：严谨的创意执行", desc: "严谨的执行者，擅长整理美感与秩序并存的设计。", majors: "媒介与传播、工业设计" },
    CE: { title: "CE：高效组织运营官", desc: "擅长建立并维护企业的行政或财务运行规则。", majors: "管理学、项目管理、专业会计" },
    CI: { title: "CI：精准逻辑分析师", desc: "喜欢处理数据中的逻辑，追求绝对的精准性。", majors: "精算学、金融数学、应用统计学" },
    CR: { title: "CR：务实的秩序维护者", desc: "尊重制度且务实，确保系统在规范中运行。", majors: "管理学、项目管理" },
    CS: { title: "CS：规范服务专家", desc: "在既定流程下提供高质量的社会服务。", majors: "管理学、国际化教育" },
    RA: { title: "RA：空间艺术实操者", desc: "通过实操技术来实现空间与形式的美。", majors: "城市规划、建筑工程管理" },
    RC: { title: "RC：稳健的技术蓝领", desc: "擅长按照标准图纸和流程进行生产制造。", majors: "先进机器人、可持续房屋、土木工程" },
    RE: { title: "RE：技术型领导者", desc: "懂技术的管理者，擅长领导工程项目或技术外勤。", majors: "建筑工程管理、创业与创新" },
    RI: { title: "RI：硬核实验室极客", desc: "擅长解决具体的技术难题，是研发型人才。", majors: "先进微电子、低碳电力与能源技术、模式识别" },
    RS: { title: "RS：技术服务导师", desc: "倾向于教授他人技术操作，或在技术岗位提供服务。", majors: "国际化教育、应用语言学" },
    EA: { title: "EA：商业故事演讲家", desc: "富有感召力的领导，擅长包装商业故事。", majors: "国际商务与战略、文化与创意产业" },
    EC: { title: "EC：规制型卓越管理", desc: "高效管理者，注重公司合规性与组织效率。", majors: "经济与金融、专业会计、项目管理" },
    EI: { title: "EI：数据驱动决策者", desc: "喜欢基于数据进行决策的商业领袖。", majors: "商业分析、金融学、数字化商业" },
    ER: { title: "ER：实业管理精英", desc: "适合实业领域的管理，执行力极强。", majors: "运营与供应链管理、先进机器人" },
    ES: { title: "ES：咨询与人脉大师", desc: "擅长整合资源，热衷于社会公益或管理咨询。", majors: "管理学、国际关系" },
    IA: { title: "IA：思想深邃的研究者", desc: "追求深刻思想，适合跨学科的理论与艺术结合。", majors: "中国研究、文化与创意产业" },
    IC: { title: "IC：数据沉淀钻研者", desc: "极致理性的数据工作者，从繁杂中提取规律。", majors: "药物化学、药学、金融数学" },
    IE: { title: "IE：市场先机洞察者", desc: "能够洞察市场先机的商业策略家。", majors: "商业分析、管理学（研究型）、数字化商业" },
    IR: { title: "IR：数字化世界探险", desc: "硬核极客，喜欢在计算机或数字世界钻研。", majors: "计算机科学、社会网络计算、模式识别" },
    IS: { title: "IS：人文关怀科学家", desc: "希望通过研究改善社会福利与人类生活。", majors: "环境科学、分子生物学、国际化教育" },
    SA: { title: "SA：温情表达传播者", desc: "充满温情的表达者，适合传播温暖价值。", majors: "文化与创意产业、对外英语教育" },
    SC: { title: "SC：秩序型社会服务", desc: "按照标准体系来提供服务的行政或教育者。", majors: "国际化教育、儿童发展与家庭教育" },
    SE: { title: "SE：组织凝聚力核心", desc: "热情的领袖，擅长通过指导提升团队凝聚力。", majors: "管理学、国际化教育" },
    SI: { title: "SI：专业化技术服务", desc: "偏向于提供基于事实支撑的专业服务。", majors: "应用语言学、数字化教育" },
    SR: { title: "SR：实干型公益人才", desc: "在实际场景中运用专业技能服务大众。", majors: "数字化教育、应用语言学" }
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
            majors: "管理学"
        };

    const finalCodeElement = document.getElementById("final-code");
    const comboTitleElement = document.getElementById("combo-title");
    const comboDescElement = document.getElementById("combo-desc");
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

