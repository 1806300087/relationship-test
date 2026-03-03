// 题库数据
const questionsData = {
    'mate': [
        {
            question: '如果你的理想对象有这些特质，你会优先选择哪一个？',
            options: [
                '有稳定工作和经济基础',
                '颜值高、气质好',
                '性格温柔、善解人意',
                '幽默风趣、会聊天'
            ],
            type: 'material' // material经济, appearance外貌, personality性格, humor幽默
        },
        {
            question: '第一次约会，对方迟到了30分钟，你的反应是？',
            options: [
                '理解，可能有事耽搁了',
                '有点不爽，但不会表现出来',
                '直接问原因，看是否合理',
                '很生气，觉得不尊重人'
            ],
            type: 'tolerance' // 包容度
        },
        {
            question: '你更希望另一半是什么样的？',
            options: [
                '事业有成，能给我安全感',
                '浪漫多情，会制造惊喜',
                '顾家体贴，以家庭为重',
                '独立自主，有自己的生活'
            ],
            type: 'lifestyle' // 生活方式
        },
        {
            question: '你觉得感情中最重要的是什么？',
            options: [
                '物质基础，面包比爱情重要',
                '精神契合，三观一致最重要',
                '相互吸引，要有心动的感觉',
                '相互信任，坦诚相待最关键'
            ],
            type: 'values' // 价值观
        },
        {
            question: '如果对方家境普通但人很好，你会选择吗？',
            options: [
                '会考虑，但还要看其他条件',
                '不太会，经济基础很重要',
                '会，感情比物质更重要',
                '看缘分，不会特别在意这个'
            ],
            type: 'material'
        },
        {
            question: '你能接受异地恋吗？',
            options: [
                '完全可以，距离不是问题',
                '可以尝试，但希望不要太久',
                '比较困难，需要经常见面',
                '不能接受，一定要在同一个城市'
            ],
            type: 'commitment' // 承诺度
        },
        {
            question: '恋爱中你更看重哪一点？',
            options: [
                '对方的家庭背景和条件',
                '对方对我的态度和付出',
                '两个人在一起的感觉',
                '对方的个人能力和潜力'
            ],
            type: 'priority' // 优先级
        },
        {
            question: '你理想中的约会是什么样的？',
            options: [
                '高档餐厅、浪漫氛围',
                '一起做饭、在家看电影',
                '户外运动、探险旅行',
                '逛街购物、喝下午茶'
            ],
            type: 'lifestyle'
        }
    ],
    'single': [
        {
            question: '有人向你表白，你通常会？',
            options: [
                '先观察一段时间再说',
                '直接拒绝，没感觉就是没感觉',
                '给机会试试看',
                '很纠结，不知道怎么回应'
            ],
            type: 'attitude'
        },
        {
            question: '你对另一半的要求是？',
            options: [
                '要求很高，宁缺毋滥',
                '差不多就行，不强求完美',
                '有基本要求，但会考虑感觉',
                '没有固定标准，看眼缘'
            ],
            type: 'standard'
        },
        {
            question: '你主动追求过别人吗？',
            options: [
                '从来没有，比较被动',
                '偶尔会，但不会太主动',
                '经常主动，看到喜欢的就追',
                '追过，但都没成功'
            ],
            type: 'initiative'
        },
        {
            question: '你觉得自己单身的最大原因是？',
            options: [
                '圈子太小，认识的人少',
                '太忙了，没时间谈恋爱',
                '还没遇到对的人',
                '对爱情没有太大期待'
            ],
            type: 'reason'
        },
        {
            question: '朋友给你介绍对象，你会？',
            options: [
                '不喜欢相亲，觉得太功利',
                '可以试试，多一个机会',
                '要求先看照片和资料',
                '直接拒绝，不想被安排'
            ],
            type: 'method'
        },
        {
            question: '你对恋爱的态度是？',
            options: [
                '顺其自然，不强求',
                '积极寻找，主动出击',
                '想脱单，但不知道怎么办',
                '享受单身，没有特别想恋爱'
            ],
            type: 'desire'
        },
        {
            question: '你觉得自己的情商如何？',
            options: [
                '比较高，善于沟通',
                '一般般，不擅长表达',
                '有点低，经常说错话',
                '不太清楚，没想过这个问题'
            ],
            type: 'eq'
        },
        {
            question: '如果有喜欢的人，你会？',
            options: [
                '默默关注，不敢表白',
                '创造机会接近对方',
                '直接表白，勇敢追求',
                '想太多，最后放弃'
            ],
            type: 'action'
        }
    ]
};

// 择偶标准结果
const mateResults = {
    'material_high': {
        icon: '💰',
        badge: '现实主义者',
        title: '你是一个注重物质基础的人',
        desc: '你认为感情需要建立在稳定的经济基础之上。你不是拜金，而是理性地认为物质是感情的保障。你希望另一半有稳定的工作和收入，能给你安全感和稳定的生活。你相信"贫贱夫妻百事哀"，认为物质条件是感情长久的基础。',
        tips: [
            '在追求物质的同时，也要重视精神层面的契合',
            '不要把所有标准都放在经济上，性格也很重要',
            '适当降低物质要求，给自己更多选择机会',
            '记住，金钱不是幸福的唯一标准'
        ]
    },
    'appearance_high': {
        icon: '😍',
        badge: '颜值控',
        title: '你是一个注重外在的人',
        desc: '你相信"始于颜值"的道理，认为外表是第一印象，也是吸引力的重要来源。你欣赏美好的事物，希望另一半有不错的颜值和气质。你觉得看着赏心悦目的人在一起才会舒服，外表是感情的基础。不过你也明白，长久的感情需要更多内在的支撑。',
        tips: [
            '外表会随时间改变，内在美更持久',
            '给外表不够出众但内在优秀的人一个机会',
            '美是主观的，不同阶段审美会变化',
            '性格合适比颜值高更重要'
        ]
    },
    'personality_high': {
        icon: '💝',
        badge: '内在美追求者',
        title: '你是一个注重内在的人',
        desc: '你更看重对方的性格和品质，认为两个人在一起最重要的是相处舒服。你希望另一半温柔体贴、善解人意，能理解你、包容你。你相信好的性格是感情幸福的关键，外表和物质都是次要的。你追求的是心灵的契合和精神的共鸣。',
        tips: [
            '你的标准很成熟，但也要给对方成长的空间',
            '完美的性格不存在，接受对方的小缺点',
            '注意不要过度付出，感情需要平等',
            '保持你的择偶标准，会遇到对的人'
        ]
    },
    'balanced': {
        icon: '⚖️',
        badge: '平衡型',
        title: '你是一个综合考虑的人',
        desc: '你的择偶标准比较平衡，不会单纯看重某一方面。你认为感情需要多方面的考量，包括物质、外表、性格、三观等。你希望找到一个综合条件不错的人，既有一定的经济基础，也有不错的性格和外表。你理性而现实，知道没有完美的人，会在各方面做出权衡。',
        tips: [
            '你的标准很成熟理智，继续保持',
            '不要因为追求平衡而错过真正合适的人',
            '有时候感觉比条件更重要',
            '给彼此时间，慢慢了解和磨合'
        ]
    }
};

// 单身原因结果
const singleResults = {
    'too_picky': {
        icon: '🎯',
        badge: '完美主义者',
        title: '你的标准可能有点高',
        desc: '你对另一半有比较明确的要求，希望找到一个各方面都比较理想的人。你宁缺毋滥，不愿意将就。这种态度很好，但可能也让你错过了一些潜在的机会。有时候，完美的人是不存在的，重要的是找到一个合适的人，然后一起成长。',
        tips: [
            '适当降低一些非核心的标准',
            '给看起来"还不错"的人一个机会',
            '了解一个人需要时间，不要急于下判断',
            '记住，没有完美的人，只有合适的人'
        ]
    },
    'too_passive': {
        icon: '😶',
        badge: '被动等待者',
        title: '你太被动了',
        desc: '你可能在感情中比较被动，习惯等待别人来追求你，而不是主动出击。你可能觉得真正的缘分会自然而然地到来，但其实很多美好的感情都需要主动争取。被动等待可能让你错过很多机会，试着更主动一些，会有不一样的收获。',
        tips: [
            '看到喜欢的人，要勇敢一点',
            '主动不等于轻浮，而是成熟的表现',
            '创造更多社交机会，扩大交友圈',
            '放下顾虑，大胆表达自己的感受'
        ]
    },
    'circle_small': {
        icon: '🔄',
        badge: '社交型单身',
        title: '你的圈子可能太小了',
        desc: '你单身的主要原因可能是认识的人太少，生活圈子比较固定。你可能大部分时间都在工作或宅在家里，很少参加社交活动。扩大社交圈是解决这个问题的关键，多参加一些活动，认识更多的人，才有更多遇到对的人的机会。',
        tips: [
            '多参加社交活动，扩大交友圈',
            '培养一些兴趣爱好，认识志同道合的人',
            '让朋友介绍，相亲也是一个不错的选择',
            '尝试线上交友，但要注意安全'
        ]
    },
    'not_ready': {
        icon: '🌱',
        badge: '享受单身者',
        title: '你可能还没准备好恋爱',
        desc: '你目前可能更享受单身的状态，对恋爱没有特别强烈的渴望。你可能觉得一个人挺好的，自由自在，不用考虑别人的感受。这种状态没有问题，每个人都有自己的节奏。等到真正想要恋爱的时候，自然就会去争取了。',
        tips: [
            '享受当下的单身生活，不用着急',
            '等准备好了再开始，感情需要用心经营',
            '保持开放的心态，机会来了不要错过',
            '单身也可以很精彩，不要因为单身而焦虑'
        ]
    },
    'low_eq': {
        icon: '🤔',
        badge: '情商修炼者',
        title: '你可能需要提升情商',
        desc: '你在人际交往中可能不太擅长表达和沟通，有时候说话做事不太能照顾到对方的感受。这可能让一些潜在的对象对你产生误解。情商是可以培养的，多观察、多学习、多练习，慢慢就会进步。提升情商会让你在感情中更得心应手。',
        tips: [
            '多观察别人如何沟通和相处',
            '学会换位思考，考虑对方的感受',
            '提升表达能力，学会好好说话',
            '不要害怕犯错，从经验中学习'
        ]
    }
};

// 全局变量
let currentTest = '';
let currentQuestionIndex = 0;
let userAnswers = [];
let questions = [];
let scores = {}; // 记录各维度得分

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    // 导航按钮事件
    document.getElementById('prevBtn').addEventListener('click', prevQuestion);
    document.getElementById('nextBtn').addEventListener('click', nextQuestion);
    document.getElementById('submitBtn').addEventListener('click', showResult);
});

// 选择测试类型
function selectTest(testType) {
    currentTest = testType;
    questions = questionsData[testType];
    userAnswers = new Array(questions.length).fill(null);
    currentQuestionIndex = 0;
    scores = {};
    
    // 显示问题容器
    document.getElementById('testSelect').style.display = 'none';
    document.getElementById('questionContainer').classList.add('active');
    
    // 渲染题目
    renderQuestions();
    updateProgress();
}

// 渲染题目
function renderQuestions() {
    const wrapper = document.getElementById('questionsWrapper');
    wrapper.innerHTML = '';
    
    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.style.display = index === 0 ? 'block' : 'none';
        questionDiv.dataset.index = index;
        
        questionDiv.innerHTML = `
            <div class="question-text">${index + 1}. ${q.question}</div>
            <div class="options">
                ${q.options.map((opt, i) => `
                    <div class="option" data-index="${i}" onclick="selectOption(${index}, ${i})">
                        ${opt}
                    </div>
                `).join('')}
            </div>
        `;
        
        wrapper.appendChild(questionDiv);
    });
}

// 选择选项
function selectOption(questionIndex, optionIndex) {
    userAnswers[questionIndex] = optionIndex;
    
    // 更新选项样式
    const questionDiv = document.querySelector(`.question[data-index="${questionIndex}"]`);
    questionDiv.querySelectorAll('.option').forEach((opt, i) => {
        opt.classList.toggle('selected', i === optionIndex);
    });
    
    updateProgress();
}

// 上一题
function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
        updateProgress();
    }
}

// 下一题
function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
        updateProgress();
    }
}

// 显示指定题目
function showQuestion(index) {
    document.querySelectorAll('.question').forEach((q, i) => {
        q.style.display = i === index ? 'block' : 'none';
    });
    
    // 更新题目计数器
    document.getElementById('questionCounter').textContent = `第 ${index + 1}/${questions.length} 题`;
    
    // 更新按钮状态
    document.getElementById('prevBtn').disabled = index === 0;
    
    if (index === questions.length - 1) {
        document.getElementById('nextBtn').style.display = 'none';
        document.getElementById('submitBtn').style.display = 'inline-block';
    } else {
        document.getElementById('nextBtn').style.display = 'inline-block';
        document.getElementById('submitBtn').style.display = 'none';
    }
}

// 更新进度条
function updateProgress() {
    const answered = userAnswers.filter(a => a !== null).length;
    const progress = (answered / questions.length) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
    
    // 更新题目计数器
    if (document.getElementById('questionCounter')) {
        document.getElementById('questionCounter').textContent = `第 ${currentQuestionIndex + 1}/${questions.length} 题`;
    }
}

// 计算得分
function calculateScore() {
    scores = {};
    
    questions.forEach((q, index) => {
        const answer = userAnswers[index];
        const type = q.type;
        
        if (!scores[type]) {
            scores[type] = 0;
        }
        
        // 根据选项位置计算分数
        scores[type] += answer;
    });
}

// 显示结果
function showResult() {
    // 检查是否所有题目都已回答
    const unanswered = userAnswers.findIndex(a => a === null);
    if (unanswered !== -1) {
        alert(`请先回答第 ${unanswered + 1} 题！`);
        return;
    }
    
    calculateScore();
    
    let result;
    if (currentTest === 'mate') {
        result = getMateResult();
    } else {
        result = getSingleResult();
    }
    
    // 显示结果
    document.getElementById('questionContainer').classList.remove('active');
    document.getElementById('resultContainer').classList.add('active');
    
    document.getElementById('resultIcon').textContent = result.icon;
    document.getElementById('resultBadge').textContent = result.badge;
    document.getElementById('resultTitle').textContent = result.title;
    document.getElementById('resultDesc').textContent = result.desc;
    
    // 显示建议
    const tipsList = document.getElementById('resultTipsList');
    tipsList.innerHTML = result.tips.map(tip => `<li>${tip}</li>`).join('');
}

// 获取择偶标准结果
function getMateResult() {
    // 找出得分最高的维度
    let maxType = '';
    let maxScore = -1;
    
    for (let type in scores) {
        if (scores[type] > maxScore) {
            maxScore = scores[type];
            maxType = type;
        }
    }
    
    // 根据维度返回结果
    if (maxType === 'material') {
        return mateResults.material_high;
    } else if (maxType === 'appearance') {
        return mateResults.appearance_high;
    } else if (maxType === 'personality' || maxType === 'values') {
        return mateResults.personality_high;
    } else {
        return mateResults.balanced;
    }
}

// 获取单身原因结果
function getSingleResult() {
    // 分析答案模式
    const hasHighStandard = scores.standard && scores.standard > 2;
    const isPassive = scores.initiative && scores.initiative < 2;
    const smallCircle = scores.reason && userAnswers[3] === 0;
    const notReady = scores.desire && userAnswers[5] === 3;
    const lowEq = scores.eq && userAnswers[6] > 1;
    
    if (hasHighStandard && userAnswers[1] === 0) {
        return singleResults.too_picky;
    } else if (isPassive && (userAnswers[2] === 0 || userAnswers[7] === 0)) {
        return singleResults.too_passive;
    } else if (smallCircle) {
        return singleResults.circle_small;
    } else if (notReady) {
        return singleResults.not_ready;
    } else if (lowEq) {
        return singleResults.low_eq;
    } else {
        // 默认结果
        return singleResults.circle_small;
    }
}

// 重新开始测试
function restartTest() {
    currentTest = '';
    currentQuestionIndex = 0;
    userAnswers = [];
    questions = [];
    scores = {};
    
    document.getElementById('resultContainer').classList.remove('active');
    document.getElementById('questionContainer').classList.remove('active');
    document.getElementById('testSelect').style.display = 'grid';
}

// 分享结果
function shareResult() {
    const badge = document.getElementById('resultBadge').textContent;
    const title = document.getElementById('resultTitle').textContent;
    const testName = currentTest === 'mate' ? '择偶标准测试' : '单身原因测试';
    const text = `我在【${testName}】中的结果是：${badge} - ${title}！你也来测测吧！`;
    
    if (navigator.share) {
        navigator.share({
            title: '情感倾向测试',
            text: text,
            url: window.location.href
        }).catch(() => {});
    } else {
        // 复制到剪贴板
        const textarea = document.createElement('textarea');
        textarea.value = text + ' ' + window.location.href;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert('结果已复制到剪贴板！');
    }
}
