// 科学化心理测试系统 v2.0
// 基于Sternberg爱情三角理论、依恋理论等心理学理论
// 择偶测试：35题（7维度×5题）| 单身测试：30题（10维度×3题）

const questionsData = {
    'mate': [
        // ===== 维度1: 激情(Passion) - 5题 =====
        {
            question: '在选择伴侣时，身体吸引力（外貌、身材）对你有多重要？',
            options: ['非常不重要', '不太重要', '一般', '比较重要', '非常重要'],
            dimension: 'passion', weight: 1
        },
        {
            question: '你期望与伴侣保持怎样的身体亲密程度？',
            options: ['很少，更注重精神交流', '偶尔，不是特别需要', '适中，自然而然就好', '比较频繁，这很重要', '非常频繁，是关系的重要部分'],
            dimension: 'passion', weight: 1
        },
        {
            question: '伴侣为你准备惊喜、制造浪漫对你来说重不重要？',
            options: ['完全不需要，觉得没必要', '不太需要，实际更重要', '有时需要，但不强求', '比较需要，会让我开心', '非常需要，浪漫很重要'],
            dimension: 'passion', weight: 1
        },
        {
            question: '你对伴侣的"性吸引力"有多看重？',
            options: ['完全不在意', '不太在意', '有一定要求', '比较在意', '非常在意，这很关键'],
            dimension: 'passion', weight: 1
        },
        {
            question: '你希望恋爱关系中有多少激情和刺激感？',
            options: ['不需要，平淡就好', '很少，偶尔有点', '适度就好', '比较多，保持新鲜感', '非常多，要一直有心跳感'],
            dimension: 'passion', weight: 1
        },
        
        // ===== 维度2: 亲密(Intimacy) - 5题 =====
        {
            question: '你希望伴侣在多大程度上理解你的内心想法和感受？',
            options: ['不需要完全理解', '理解一部分就够了', '理解大部分比较好', '希望深入理解', '完全理解，心灵相通'],
            dimension: 'intimacy', weight: 1.2
        },
        {
            question: '当你遇到困难或心情不好时，你期望伴侣如何对待你？',
            options: ['给我独处空间就好', '简单安慰一下', '耐心倾听我的倾诉', '积极帮我分析解决', '无条件支持和陪伴'],
            dimension: 'intimacy', weight: 1.2
        },
        {
            question: '你认为伴侣之间需要分享到什么程度？',
            options: ['保留私人空间，不必都说', '分享大致情况即可', '大部分事情都分享', '几乎所有事都想告诉对方', '完全透明，没有秘密'],
            dimension: 'intimacy', weight: 1.2
        },
        {
            question: '你对伴侣情感支持的需求有多强？',
            options: ['很少需要，我能自己面对', '偶尔需要', '经常需要', '非常需要', '时刻需要，这是关系的核心'],
            dimension: 'intimacy', weight: 1.2
        },
        {
            question: '你希望和伴侣进行深度交流的频率是？',
            options: ['很少，表面聊聊就好', '偶尔深聊', '每周几次', '几乎每天', '随时随地，无话不谈'],
            dimension: 'intimacy', weight: 1.2
        },
        
        // ===== 维度3: 承诺(Commitment) - 5题 =====
        {
            question: '你对婚姻和长期关系的态度是？',
            options: ['不确定，走一步看一步', '可以考虑，但不着急', '希望稳定，但需要时间', '比较明确，想要长期关系', '非常明确，以结婚为目的'],
            dimension: 'commitment', weight: 1.3
        },
        {
            question: '面对感情中的困难和挑战，你会？',
            options: ['可能会选择放弃', '视情况而定', '愿意尝试解决', '会努力克服', '无论如何都会坚持'],
            dimension: 'commitment', weight: 1.3
        },
        {
            question: '你愿意为这段关系做出多大的妥协和牺牲？',
            options: ['不太愿意改变自己', '可以做小的调整', '愿意适度妥协', '可以做较大改变', '愿意为对方改变很多'],
            dimension: 'commitment', weight: 1.3
        },
        {
            question: '你认为恋爱多久后确定长期关系比较合适？',
            options: ['不确定，看感觉', '1年以上慢慢了解', '半年到一年', '3-6个月', '很快，1-3个月'],
            dimension: 'commitment', weight: 1.3
        },
        {
            question: '如果伴侣要去外地发展，你愿意为TA做出改变吗？',
            options: ['不太愿意，各自发展', '很难，需要慎重考虑', '可以讨论，视情况而定', '愿意考虑，可以为TA改变', '完全愿意，会跟随TA'],
            dimension: 'commitment', weight: 1.3
        },
        
        // ===== 维度4: 价值观匹配 - 5题 =====
        {
            question: '伴侣的教育背景、职业发展对你的重要性？',
            options: ['完全不在意', '不太重要', '有一定要求', '比较重要', '非常重要，必须门当户对'],
            dimension: 'values', weight: 1.1
        },
        {
            question: '你对伴侣的经济能力有什么期望？',
            options: ['不在意，感情最重要', '能养活自己就好', '希望有稳定收入', '希望经济条件较好', '必须有很好的经济基础'],
            dimension: 'values', weight: 1.1
        },
        {
            question: '关于生育和家庭规划，你认为伴侣的想法需要多一致？',
            options: ['可以不一样，慢慢商量', '大致方向一样就行', '主要观点应该一致', '必须高度一致', '完全一致，这是原则'],
            dimension: 'values', weight: 1.1
        },
        {
            question: '你对伴侣的原生家庭条件有要求吗？',
            options: ['完全不在意', '不太在意', '有基本要求', '比较在意', '非常在意，很重要'],
            dimension: 'values', weight: 1.1
        },
        {
            question: '伴侣的消费观、金钱观需要和你多一致？',
            options: ['不需要一致', '大致相近就行', '主要方面要一致', '需要高度一致', '必须完全一致'],
            dimension: 'values', weight: 1.1
        },
        
        // ===== 维度5: 独立性需求 - 5题 =====
        {
            question: '你希望与伴侣保持怎样的独立空间？',
            options: ['需要很多独立空间', '需要一定的个人时间', '适度平衡', '更喜欢腻在一起', '几乎所有时间都想在一起'],
            dimension: 'independence', weight: 0.9, reverse: true
        },
        {
            question: '你能接受伴侣有自己的兴趣爱好和社交圈吗？',
            options: ['完全接受，各有各的生活', '可以，但希望了解', '可以，但希望偶尔参与', '希望大部分时间在一起', '不太能接受，希望共同爱好'],
            dimension: 'independence', weight: 0.9, reverse: true
        },
        {
            question: '你希望保留多少个人隐私和秘密？',
            options: ['很多，需要私人空间', '一些，不必什么都说', '很少，大部分透明', '几乎没有', '完全没有，100%透明'],
            dimension: 'independence', weight: 0.9, reverse: true
        },
        {
            question: '如果伴侣周末想和朋友聚会，你的态度是？',
            options: ['完全支持，各有社交', '支持，但希望不要太频繁', '可以，但希望我也参与', '不太喜欢，希望陪我', '不能接受，周末应该一起'],
            dimension: 'independence', weight: 0.9, reverse: true
        },
        {
            question: '你对"两个人既要亲密又要独立"的理解是？',
            options: ['更倾向独立，保持距离', '独立多一些', '独立和亲密平衡', '亲密多一些', '更倾向亲密，时刻在一起'],
            dimension: 'independence', weight: 0.9, reverse: true
        },
        
        // ===== 维度6: 冲突处理 - 5题 =====
        {
            question: '当你们意见不一致时，你倾向于？',
            options: ['坚持己见，很难妥协', '争论一番，寻找答案', '各退一步，寻求平衡', '更愿意迁就对方', '完全听从对方'],
            dimension: 'conflict', weight: 1.0
        },
        {
            question: '吵架后，你通常会？',
            options: ['冷战，等对方道歉', '需要时间冷静', '会主动沟通和好', '立即道歉，不管对错', '不会吵架，总是让着对方'],
            dimension: 'conflict', weight: 1.0
        },
        {
            question: '你对伴侣批评你的接受程度是？',
            options: ['很难接受，会反驳', '不太舒服，但会听', '能接受建设性批评', '愿意听取并改进', '完全接受，虚心改正'],
            dimension: 'conflict', weight: 1.0
        },
        {
            question: '如果伴侣做了让你不满的事，你会？',
            options: ['生闷气，不说出来', '表现出不满，等TA察觉', '直接但温和地指出', '平静地沟通感受', '不会不满，能理解'],
            dimension: 'conflict', weight: 1.0
        },
        {
            question: '你认为健康的争吵频率是？',
            options: ['不能有争吵', '很少，几个月一次', '偶尔，正常沟通', '适度，有分歧就谈', '频繁也没关系'],
            dimension: 'conflict', weight: 1.0
        },
        
        // ===== 维度7: 包容度 - 5题 =====
        {
            question: '你能容忍伴侣的多少缺点和坏习惯？',
            options: ['很难容忍，要求很高', '可以容忍一些小问题', '大部分都能接受', '只要不触碰底线都行', '可以包容几乎所有'],
            dimension: 'tolerance', weight: 1.0
        },
        {
            question: '如果伴侣有一些你不喜欢的朋友，你会？',
            options: ['要求TA少来往', '表达不满，希望改变', '接受，但保持距离', '完全尊重TA的社交', '主动融入，一起相处'],
            dimension: 'tolerance', weight: 1.0
        },
        {
            question: '伴侣犯错后，你的原谅程度？',
            options: ['很难原谅，会记很久', '需要时间，不会轻易原谅', '看情况，视错误大小', '比较容易原谅', '几乎总是能原谅'],
            dimension: 'tolerance', weight: 1.0
        },
        {
            question: '你对伴侣的"不完美"的接受度是？',
            options: ['很难接受，希望改进', '接受度一般', '能接受大部分', '高度接受', '完全接受，爱TA的一切'],
            dimension: 'tolerance', weight: 1.0
        },
        {
            question: '如果伴侣的某些价值观和你不同，你会？',
            options: ['很难接受，这是原则', '尽量说服改变', '求同存异', '尊重差异', '完全接纳，欣赏多样性'],
            dimension: 'tolerance', weight: 1.0
        }
    ],
    
    'single': [
        // ===== 依恋类型 - 3题 =====
        {
            question: '在亲密关系中，你通常的感受是？',
            options: ['我很容易与人亲近，也不担心被抛弃', '我希望亲密，但担心对方不是真心的', '我不太舒服与人太亲密', '我渴望亲密，但又害怕受伤', '我更喜欢保持独立，不依赖别人'],
            dimension: 'attachment', weight: 1.5
        },
        {
            question: '你对被拒绝或抛弃的恐惧程度？',
            options: ['很低，不太担心', '有一些，但能控制', '比较强，经常担心', '很强，非常害怕', '极度恐惧，影响行为'],
            dimension: 'attachment', weight: 1.5
        },
        {
            question: '你对亲密关系的信任程度通常是？',
            options: ['很高，容易信任', '比较高', '一般，需要时间', '比较低', '很低，很难信任'],
            dimension: 'attachment', weight: 1.5
        },
        
        // ===== 焦虑程度 - 3题 =====
        {
            question: '当喜欢的人没有及时回复消息，你会？',
            options: ['不在意，忙很正常', '有点在意，但不会多想', '会多想，但不表现出来', '很焦虑，反复查看', '觉得对方不在意我'],
            dimension: 'anxiety', weight: 1.3
        },
        {
            question: '你在关系中需要多频繁的确认对方的爱意？',
            options: ['不需要，相信对方', '偶尔需要', '经常需要', '非常频繁', '几乎时刻需要'],
            dimension: 'anxiety', weight: 1.3
        },
        {
            question: '你对关系的不安全感有多强？',
            options: ['很低，很安全', '比较低', '中等', '比较高', '非常高，总是担心'],
            dimension: 'anxiety', weight: 1.3
        },
        
        // ===== 表达能力 - 3题 =====
        {
            question: '关于表达爱意和需求，你的状态是？',
            options: ['很自然，想说就说', '比较自然，但会考虑时机', '有点困难，需要鼓起勇气', '很困难，经常压抑', '几乎不会主动表达'],
            dimension: 'expression', weight: 1.2
        },
        {
            question: '你的情感表达和沟通能力如何？',
            options: ['很好，能清晰表达', '比较好', '一般', '比较差，常词不达意', '很差，不知如何表达'],
            dimension: 'expression', weight: 1.2
        },
        {
            question: '当你不开心时，你会主动告诉对方吗？',
            options: ['会，很自然地表达', '通常会', '看情况', '不太会', '几乎不会，自己消化'],
            dimension: 'expression', weight: 1.2
        },
        
        // ===== 自我价值感 - 3题 =====
        {
            question: '你对自己在恋爱市场中的竞争力评估是？',
            options: ['很有信心，条件不错', '比较有信心', '一般般，没什么特别', '不太自信', '很不自信，觉得配不上别人'],
            dimension: 'self_worth', weight: 1.4
        },
        {
            question: '你认为自己值得被爱吗？',
            options: ['当然，我值得很好的爱', '我觉得我值得', '应该吧，但不确定', '不太确定', '觉得自己不够好'],
            dimension: 'self_worth', weight: 1.4
        },
        {
            question: '你对自己的整体评价是？',
            options: ['很积极，我很不错', '比较积极', '中性', '比较消极', '很消极，有很多缺点'],
            dimension: 'self_worth', weight: 1.4
        },
        
        // ===== 主动性 - 3题 =====
        {
            question: '遇到喜欢的人，你采取行动的可能性？',
            options: ['很高，会主动出击', '比较高，会创造机会', '一般，看情况', '比较低，很被动', '几乎不会，只能等别人来'],
            dimension: 'initiative', weight: 1.3
        },
        {
            question: '你为了脱单做过哪些努力？',
            options: ['很多，积极参加活动、改变自己', '一些，会主动社交', '偶尔，但不够持续', '很少，主要靠等待', '几乎没有，顺其自然'],
            dimension: 'initiative', weight: 1.3
        },
        {
            question: '如果有暧昧对象，你会主动推进关系吗？',
            options: ['会，主动表白', '会制造机会让关系发展', '等对方主动', '不敢推进，怕破坏关系', '完全不会主动'],
            dimension: 'initiative', weight: 1.3
        },
        
        // ===== 机会度 - 3题 =====
        {
            question: '你的社交圈子和活动频率如何？',
            options: ['很广泛，经常认识新人', '比较广泛，有一定社交', '一般，圈子相对固定', '比较窄，很少社交', '非常窄，基本不社交'],
            dimension: 'opportunity', weight: 1.2
        },
        {
            question: '你对线上交友（交友软件、相亲）的态度？',
            options: ['很开放，愿意尝试', '可以接受', '不排斥，但不主动', '不太能接受', '完全不能接受'],
            dimension: 'opportunity', weight: 1.2
        },
        {
            question: '你每月认识新的潜在对象的机会大约有？',
            options: ['很多，经常遇到', '一些机会', '偶尔有', '很少', '几乎没有'],
            dimension: 'opportunity', weight: 1.2
        },
        
        // ===== 择偶标准 - 3题 =====
        {
            question: '你对另一半的要求标准属于？',
            options: ['很灵活，看感觉', '有基本要求', '有明确标准', '标准比较高', '标准很高，近乎完美'],
            dimension: 'standard', weight: 1.1
        },
        {
            question: '现实中符合你标准的人大约有多少？',
            options: ['很多，不难找到', '不少，有一定选择', '一些，需要慢慢找', '很少，比较难找', '几乎没有，太难了'],
            dimension: 'standard', weight: 1.1
        },
        {
            question: '你会因为某一个缺点就否定一个人吗？',
            options: ['不会，看整体', '一般不会', '看是什么缺点', '比较容易', '会，我很挑剔'],
            dimension: 'standard', weight: 1.1
        },
        
        // ===== 恋爱意愿 - 3题 =====
        {
            question: '你现在对恋爱的渴望程度？',
            options: ['非常强烈，很想脱单', '比较强烈', '一般，有人合适就谈', '不太强烈', '很弱，更享受单身'],
            dimension: 'desire', weight: 1.3
        },
        {
            question: '如果长期单身，你的焦虑程度？',
            options: ['完全不焦虑', '有一点，但能接受', '比较焦虑', '很焦虑', '非常焦虑，影响生活'],
            dimension: 'desire', weight: 1.3
        },
        {
            question: '你愿意为了恋爱投入多少精力和时间？',
            options: ['很多，这是优先级', '比较多', '适度', '比较少', '很少，工作/兴趣更重要'],
            dimension: 'desire', weight: 1.3
        },
        
        // ===== 过往影响 - 3题 =====
        {
            question: '你的恋爱经历对现在的影响？',
            options: ['从没谈过，没有经验', '有过，但已完全放下', '有些影响，但不大', '影响较大，还在恢复', '影响很大，走不出来'],
            dimension: 'past', weight: 1.0
        },
        {
            question: '你从过往经历中学到了什么？',
            options: ['更了解自己，知道要什么', '学会了如何相处', '变得更谨慎', '变得更害怕', '不敢再相信爱情'],
            dimension: 'past', weight: 1.0
        },
        {
            question: '过去的伤害对你现在的影响程度？',
            options: ['没有伤害或已治愈', '很小，基本不影响', '有一些影响', '影响较大', '严重影响，很难信任'],
            dimension: 'past', weight: 1.0
        },
        
        // ===== 情商 - 3题 =====
        {
            question: '你在社交中感知他人情绪的能力？',
            options: ['很强，能敏锐察觉', '比较强', '一般', '比较弱', '很弱，经常误解'],
            dimension: 'eq', weight: 1.2
        },
        {
            question: '你处理人际冲突的能力如何？',
            options: ['很好，能妥善解决', '比较好', '一般', '比较差', '很差，经常搞砸'],
            dimension: 'eq', weight: 1.2
        },
        {
            question: '你觉得别人对你的评价通常是？',
            options: ['情商高，善解人意', '还不错', '一般', '有时不太会说话', '情商低，常得罪人'],
            dimension: 'eq', weight: 1.2
        }
    ]
};

// 科学的结果分析系统（保持不变）
const scientificResults = {
    'mate': {
        dimensions: [
            { name: 'passion', label: '激情维度', description: '身体吸引、浪漫、激情' },
            { name: 'intimacy', label: '亲密维度', description: '情感连接、理解、支持' },
            { name: 'commitment', label: '承诺维度', description: '长期规划、责任感、忠诚' },
            { name: 'values', label: '价值观', description: '人生观、金钱观、家庭观' },
            { name: 'independence', label: '独立性', description: '个人空间、自主性' },
            { name: 'conflict', label: '冲突处理', description: '沟通能力、妥协意愿' },
            { name: 'tolerance', label: '包容度', description: '接纳差异的能力' }
        ],
        types: [
            {
                condition: (scores) => scores.passion > 3.5 && scores.intimacy < 3 && scores.commitment < 3,
                icon: '🔥',
                badge: '激情主导型',
                title: '你追求强烈的浪漫感受和身体吸引',
                desc: '你在择偶时高度重视激情和浪漫，希望有心跳加速的恋爱感觉。但相对来说，你对深层情感连接和长期承诺的需求较低。你可能更享受恋爱初期的激情阶段，对平淡期可能会感到乏味。',
                tips: [
                    '激情会随时间减弱，需要培养更深层的情感连接',
                    '学会在平淡中发现美好，不要只追求新鲜感',
                    '承诺和责任感是长期关系的基础',
                    '适当提升对亲密度和承诺的重视'
                ]
            },
            {
                condition: (scores) => scores.intimacy > 3.5 && scores.passion < 3,
                icon: '💝',
                badge: '亲密主导型',
                title: '你最看重心灵相通和深度理解',
                desc: '你的择偶标准以情感亲密为核心，希望找到一个真正理解你、支持你的伴侣。你重视精神交流胜过身体吸引，追求心灵层面的契合。你可能对浪漫和激情的需求不高，更看重两个人的默契和相互理解。',
                tips: [
                    '你的择偶观很成熟，但也要给关系一些激情',
                    '适度的浪漫可以为感情增色',
                    '不要忽视身体亲密度的重要性',
                    '保持开放，给不那么"完美契合"的人机会'
                ]
            },
            {
                condition: (scores) => scores.commitment > 3.8,
                icon: '💍',
                badge: '承诺主导型',
                title: '你追求稳定长久的关系',
                desc: '你的择偶标准以长期承诺为核心，希望找到一个可以共度一生的人。你非常重视责任感和稳定性，愿意为关系做出妥协和牺牲。你可能以结婚为目的来恋爱，对关系有明确的规划和期望。',
                tips: [
                    '你的择偶观很务实，但不要过于功利',
                    '承诺很重要，但激情和亲密同样不可或缺',
                    '给关系一些自然发展的空间',
                    '不要因为想要稳定而忽视真实感受'
                ]
            },
            {
                condition: (scores) => scores.passion > 3.2 && scores.intimacy > 3.2 && scores.commitment > 3.2,
                icon: '💖',
                badge: '完满爱情型',
                title: '你追求激情、亲密与承诺的平衡',
                desc: '你的择偶标准非常平衡和全面，既重视激情和浪漫，也看重情感亲密和相互理解，同时对长期承诺有清晰的期待。这是Sternberg爱情三角理论中的"完满之爱"，是最理想的爱情类型。',
                tips: [
                    '你的择偶标准很成熟和全面',
                    '保持这种平衡，但也要有耐心',
                    '完满之爱需要时间培养，不是一蹴而就',
                    '给关系时间慢慢发展各个维度'
                ]
            },
            {
                condition: (scores) => scores.values > 4.0,
                icon: '⚖️',
                badge: '现实考量型',
                title: '你高度重视现实条件和价值观匹配',
                desc: '你在择偶时非常注重现实因素，包括教育背景、经济能力、家庭观念等。你相信门当户对，认为价值观一致是关系稳定的基础。你的择偶标准比较理性和务实。',
                tips: [
                    '现实条件重要，但不是全部',
                    '给感觉和化学反应一些空间',
                    '过于重视条件可能错过真正合适的人',
                    '适当降低一些非核心标准'
                ]
            },
            {
                condition: (scores) => scores.independence > 3.8,
                icon: '🦋',
                badge: '独立空间型',
                title: '你需要在关系中保持较大的独立性',
                desc: '你重视个人空间和自主性，不希望恋爱关系过于黏腻。你希望即使在亲密关系中也能保持自我，有自己的生活和兴趣。你可能害怕失去自由，倾向于保持一定的距离感。',
                tips: [
                    '独立很好，但也要学会适度依赖',
                    '亲密不等于失去自我',
                    '适当的分享和依赖能加深感情',
                    '找一个同样重视独立空间的伴侣'
                ]
            },
            {
                condition: (scores) => true,
                icon: '🌈',
                badge: '综合平衡型',
                title: '你的择偶标准综合而平衡',
                desc: '你的择偶标准涵盖多个维度，没有特别突出的偏好。你会综合考虑激情、亲密、承诺、价值观等多方面因素，寻找一个各方面都比较契合的伴侣。你的择偶观比较成熟和理性。',
                tips: [
                    '你的择偶观很全面和成熟',
                    '保持这种平衡，但也要听从内心感受',
                    '不要因为追求完美而错过好的机会',
                    '给彼此时间慢慢了解和磨合'
                ]
            }
        ]
    },
    
    'single': {
        dimensions: [
            { name: 'attachment', label: '依恋类型', description: '在亲密关系中的安全感' },
            { name: 'anxiety', label: '焦虑程度', description: '对关系的不安全感' },
            { name: 'expression', label: '表达能力', description: '情感表达和沟通' },
            { name: 'self_worth', label: '自我价值感', description: '对自己的评价和信心' },
            { name: 'initiative', label: '主动性', description: '采取行动的意愿' },
            { name: 'opportunity', label: '机会度', description: '社交圈和认识新人的机会' },
            { name: 'standard', label: '择偶标准', description: '对另一半的要求高低' },
            { name: 'desire', label: '恋爱意愿', description: '对恋爱的渴望程度' },
            { name: 'past', label: '过往影响', description: '过去经历的影响' },
            { name: 'eq', label: '情商', description: '情绪感知和沟通能力' }
        ],
        types: [
            {
                condition: (scores) => scores.anxiety > 3.5 && scores.self_worth < 3,
                icon: '😰',
                badge: '焦虑依恋型',
                title: '你在关系中容易焦虑和缺乏安全感',
                desc: '你可能属于焦虑型依恋人格。你渴望亲密关系，但同时又害怕被拒绝和抛弃。你可能对伴侣的行为过度敏感，经常需要确认对方的爱意。你的自我价值感较低，容易把问题归咎于自己。这种焦虑可能让潜在的伴侣感到压力，反而推开了对方。',
                tips: [
                    '先建立自我价值感，学会爱自己',
                    '不要把所有希望寄托在他人身上',
                    '学会控制焦虑，不要过度试探对方',
                    '寻求心理咨询，了解依恋模式的根源',
                    '练习信任，给对方空间'
                ],
                recommendation: '建议阅读《依恋》一书，了解自己的依恋模式'
            },
            {
                condition: (scores) => scores.initiative < 2.5 && scores.opportunity < 3,
                icon: '🐌',
                badge: '被动等待型',
                title: '你过于被动，缺乏行动力',
                desc: '你在感情中非常被动，很少主动出击。同时你的社交圈子也比较狭窄，认识新人的机会有限。你可能期待缘分自然降临，但不采取实际行动。这种被动等待的策略大大降低了你脱单的可能性。',
                tips: [
                    '主动出击，不要只等待别人来追你',
                    '扩大社交圈，多参加活动认识新人',
                    '培养勇气，学会表达好感',
                    '设定目标，每周至少参加一次社交活动',
                    '利用线上交友平台，增加机会'
                ],
                recommendation: '从小的改变开始，比如主动和异性搭话'
            },
            {
                condition: (scores) => scores.standard > 4 && scores.opportunity < 3.5,
                icon: '🎯',
                badge: '标准过高型',
                title: '你的择偶标准可能过于理想化',
                desc: '你对另一半有很高的期望和要求，希望找到一个近乎完美的人。但同时，符合你标准的人非常稀少。你可能在等待一个"不存在"的理想对象，而错过了很多其实不错的人。你的高标准可能源于理想化的期待或对自己不够自信的补偿。',
                tips: [
                    '区分"必要条件"和"加分项"',
                    '没有完美的人，学会接纳不完美',
                    '给看起来"还不错"的人一个机会',
                    '反思标准是否现实，是否过于理想化',
                    '适当降低非核心标准，扩大选择范围'
                ],
                recommendation: '列出你的择偶标准，标注哪些是必须，哪些可以妥协'
            },
            {
                condition: (scores) => scores.desire < 2.5,
                icon: '🌱',
                badge: '恋爱意愿低',
                title: '你目前对恋爱的渴望度不高',
                desc: '你现在可能更享受单身生活，对恋爱没有强烈的渴望。你可能觉得一个人也很好，或者对恋爱持保留态度。这本身没有问题，但如果内心其实想要爱情，只是因为害怕、受过伤或其他原因而压抑需求，就需要正视自己的真实感受。',
                tips: [
                    '正视内心真实想法，你真的不想恋爱吗？',
                    '如果是害怕，试着面对恐惧',
                    '如果真心享受单身，就坦然接受',
                    '不要因为社会压力而强迫自己',
                    '保持开放，机会来了不要错过'
                ],
                recommendation: '享受当下，准备好了再开始'
            },
            {
                condition: (scores) => scores.past > 3.5,
                icon: '💔',
                badge: '过往阴影型',
                title: '过去的感情经历对你影响较大',
                desc: '你可能还没有完全走出过去的感情伤痛，或者过去的经历让你对爱情产生了恐惧和不信任。你可能害怕再次受伤，因此在新的关系中变得谨慎甚至退缩。这些未愈合的伤口影响了你开始新关系的能力。',
                tips: [
                    '给自己时间疗伤，不要急于进入新关系',
                    '学会放下，过去的不代表未来',
                    '如果很难走出，寻求专业心理咨询',
                    '不要把前任的错误归咎于新的对象',
                    '每个人都是独立个体，给新关系一个机会'
                ],
                recommendation: '写下过去让你受伤的具体事件，进行情绪处理'
            },
            {
                condition: (scores) => scores.eq < 2.5,
                icon: '🤔',
                badge: '情商待提升型',
                title: '你在情感表达和沟通上需要提升',
                desc: '你可能不太擅长感知他人的情绪，或者难以表达自己的感受。这导致在社交和感情中容易产生误解，或者让对方觉得你不够体贴。情商是可以培养的，通过学习和练习可以提升。',
                tips: [
                    '多观察他人的表情和肢体语言',
                    '练习表达自己的感受，从"我感到..."开始',
                    '学习倾听，给对方完整表达的空间',
                    '阅读情商相关书籍，如《情商》',
                    '多与人交流，在实践中提升'
                ],
                recommendation: '每天练习识别和表达一种情绪'
            },
            {
                condition: (scores) => scores.self_worth < 2.5,
                icon: '😔',
                badge: '自信不足型',
                title: '你对自己缺乏信心和认可',
                desc: '你的自我价值感较低，可能觉得自己不够好，配不上好的对象。这种自卑可能来自过去的经历、外貌焦虑或其他原因。低自尊会影响你的行动力，也会在关系中表现出不安全感，反而降低你的吸引力。',
                tips: [
                    '发掘自己的优点，写下至少10个优点',
                    '停止与他人比较，每个人都是独特的',
                    '设定小目标并完成，建立成就感',
                    '改善外在形象，提升自信',
                    '如果自卑严重，寻求心理咨询'
                ],
                recommendation: '每天对镜子里的自己说"我值得被爱"'
            },
            {
                condition: (scores) => true,
                icon: '🌟',
                badge: '综合因素型',
                title: '你的单身是多种因素综合的结果',
                desc: '你的单身不是由单一因素造成的，而是多个维度共同作用的结果。你可能在某些方面做得不错，但在其他方面还有提升空间。好消息是，你没有特别突出的问题，通过有针对性的改进，脱单的可能性很大。',
                tips: [
                    '查看各维度得分，找出最需要改进的方面',
                    '制定具体可行的改进计划',
                    '不要指望一夜改变，循序渐进',
                    '保持积极心态，相信自己值得爱',
                    '多尝试不同的社交方式，找到适合自己的'
                ],
                recommendation: '从改进得分最低的维度开始'
            }
        ]
    }
};

// 全局变量
let currentTest = '';
let currentQuestionIndex = 0;
let userAnswers = [];
let questions = [];
let dimensionScores = {};

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    // 不需要按钮事件监听
});

// 选择测试类型
function selectTest(testType) {
    currentTest = testType;
    questions = questionsData[testType];
    userAnswers = new Array(questions.length).fill(null);
    currentQuestionIndex = 0;
    dimensionScores = {};
    
    document.getElementById('testSelect').style.display = 'none';
    document.getElementById('questionContainer').classList.add('active');
    
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
                    <div class="option" data-index="${i}" data-score="${i + 1}" onclick="selectOption(${index}, ${i})">
                        ${opt}
                    </div>
                `).join('')}
            </div>
        `;
        
        wrapper.appendChild(questionDiv);
    });
}

// 选择选项（自动下一题）
function selectOption(questionIndex, optionIndex) {
    if (userAnswers[questionIndex] !== null) {
        return;
    }
    
    userAnswers[questionIndex] = optionIndex;
    
    const questionDiv = document.querySelector(`.question[data-index="${questionIndex}"]`);
    questionDiv.querySelectorAll('.option').forEach((opt, i) => {
        opt.classList.toggle('selected', i === optionIndex);
        opt.style.pointerEvents = 'none';
    });
    
    updateProgress();
    
    setTimeout(() => {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            showQuestion(currentQuestionIndex);
        } else {
            showResult();
        }
    }, 300);
}

// 显示指定题目
function showQuestion(index) {
    currentQuestionIndex = index;
    
    document.querySelectorAll('.question').forEach((q, i) => {
        q.style.display = i === index ? 'block' : 'none';
    });
    
    document.getElementById('questionCounter').textContent = `第 ${index + 1}/${questions.length} 题`;
}

// 更新进度条
function updateProgress() {
    const answered = userAnswers.filter(a => a !== null).length;
    const progress = (answered / questions.length) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
    
    if (document.getElementById('questionCounter')) {
        document.getElementById('questionCounter').textContent = `第 ${currentQuestionIndex + 1}/${questions.length} 题`;
    }
}

// 计算维度得分（科学化）
function calculateDimensionScores() {
    dimensionScores = {};
    const dimensionCounts = {};
    
    questions.forEach((q, index) => {
        const answer = userAnswers[index];
        const dimension = q.dimension;
        const weight = q.weight || 1;
        
        // 分数为1-5，对应选项0-4
        let score = answer + 1;
        
        // 处理反向计分
        if (q.reverse) {
            score = 6 - score;
        }
        
        // 加权计分
        const weightedScore = score * weight;
        
        if (!dimensionScores[dimension]) {
            dimensionScores[dimension] = 0;
            dimensionCounts[dimension] = 0;
        }
        
        dimensionScores[dimension] += weightedScore;
        dimensionCounts[dimension] += weight;
    });
    
    // 标准化到1-5分
    for (let dim in dimensionScores) {
        dimensionScores[dim] = dimensionScores[dim] / dimensionCounts[dim];
    }
}

// 显示结果
function showResult() {
    calculateDimensionScores();
    
    const resultData = scientificResults[currentTest];
    let matchedType = null;
    
    // 找到匹配的类型（按顺序检查条件）
    for (let type of resultData.types) {
        if (type.condition(dimensionScores)) {
            matchedType = type;
            break;
        }
    }
    
    // 显示结果
    document.getElementById('questionContainer').classList.remove('active');
    document.getElementById('resultContainer').classList.add('active');
    
    document.getElementById('resultIcon').textContent = matchedType.icon;
    document.getElementById('resultBadge').textContent = matchedType.badge;
    document.getElementById('resultTitle').textContent = matchedType.title;
    document.getElementById('resultDesc').textContent = matchedType.desc;
    
    // 显示维度分数图表
    displayDimensionChart(resultData.dimensions);
    
    // 显示建议
    const tipsList = document.getElementById('resultTipsList');
    tipsList.innerHTML = matchedType.tips.map(tip => `<li>${tip}</li>`).join('');
    
    // 如果有推荐
    if (matchedType.recommendation) {
        tipsList.innerHTML += `<li style="color: #f5576c; font-weight: bold;">💡 ${matchedType.recommendation}</li>`;
    }
    
    // ===== 邀请码系统：增加测试完成计数 =====
    incrementTestCount();
}

// 显示维度得分图表
function displayDimensionChart(dimensions) {
    const chartContainer = document.getElementById('dimensionChart');
    if (!chartContainer) {
        const container = document.createElement('div');
        container.id = 'dimensionChart';
        container.style.cssText = 'margin: 20px 0; padding: 20px; background: #f8f9fa; border-radius: 10px;';
        
        let chartHTML = '<h4 style="color: #f5576c; margin-bottom: 15px;">📊 你的各维度得分</h4>';
        
        dimensions.forEach(dim => {
            const score = dimensionScores[dim.name] || 0;
            const percentage = (score / 5) * 100;
            const color = getScoreColor(score);
            
            chartHTML += `
                <div style="margin-bottom: 15px;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                        <span style="font-weight: bold;">${dim.label}</span>
                        <span style="color: ${color};">${score.toFixed(1)}/5.0</span>
                    </div>
                    <div style="font-size: 12px; color: #666; margin-bottom: 5px;">${dim.description}</div>
                    <div style="width: 100%; height: 20px; background: #e0e0e0; border-radius: 10px; overflow: hidden;">
                        <div style="width: ${percentage}%; height: 100%; background: ${color}; transition: width 0.5s;"></div>
                    </div>
                </div>
            `;
        });
        
        container.innerHTML = chartHTML;
        document.getElementById('resultDesc').after(container);
    }
}

// 根据分数获取颜色
function getScoreColor(score) {
    if (score >= 4) return '#4CAF50';
    if (score >= 3) return '#FFC107';
    if (score >= 2) return '#FF9800';
    return '#F44336';
}

// 重新开始
function restartTest() {
    currentTest = '';
    currentQuestionIndex = 0;
    userAnswers = [];
    questions = [];
    dimensionScores = {};
    
    const chart = document.getElementById('dimensionChart');
    if (chart) chart.remove();
    
    document.getElementById('resultContainer').classList.remove('active');
    document.getElementById('questionContainer').classList.remove('active');
    document.getElementById('testSelect').style.display = 'grid';
}

// 分享结果
function shareResult() {
    const badge = document.getElementById('resultBadge').textContent;
    const title = document.getElementById('resultTitle').textContent;
    const testName = currentTest === 'mate' ? '科学择偶标准测试' : '科学单身原因测试';
    const text = `我在【${testName}】中的结果是：${badge} - ${title}！这是基于心理学理论的专业测试，你也来测测吧！`;
    
    if (navigator.share) {
        navigator.share({
            title: '情感倾向科学测试',
            text: text,
            url: window.location.href
        }).catch(() => {});
    } else {
        const textarea = document.createElement('textarea');
        textarea.value = text + ' ' + window.location.href;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert('结果已复制到剪贴板！');
    }
}

// ===== 邀请码系统相关函数 =====

// 增加测试完成计数
function incrementTestCount() {
    const currentCount = parseInt(localStorage.getItem('testCompletedCount') || '0');
    const newCount = currentCount + 1;
    localStorage.setItem('testCompletedCount', newCount.toString());
    
    // 检查是否用完次数
    const inviteType = localStorage.getItem('inviteType');
    
    if (inviteType === 'single' && newCount >= 1) {
        showLimitReachedMessage('单次测试已完成');
    } else if (inviteType === 'double' && newCount >= 2) {
        showLimitReachedMessage('2次测试已全部完成');
    }
}

// 显示次数用完提示
function showLimitReachedMessage(message) {
    // 在结果页面底部添加提示
    setTimeout(() => {
        const resultContainer = document.getElementById('resultContainer');
        const limitTip = document.createElement('div');
        limitTip.style.cssText = `
            margin-top: 30px;
            padding: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border-radius: 10px;
            text-align: center;
        `;
        limitTip.innerHTML = `
            <h3 style="margin-bottom: 10px;">✨ ${message}</h3>
            <p style="margin-bottom: 15px; opacity: 0.9;">想继续测试？购买新的邀请码吧！</p>
            <button onclick="window.location.href='invite-gate.html'" style="
                padding: 12px 30px;
                background: white;
                color: #667eea;
                border: none;
                border-radius: 25px;
                font-weight: bold;
                cursor: pointer;
                font-size: 14px;
            ">🛒 购买邀请码</button>
        `;
        resultContainer.appendChild(limitTip);
    }, 2000);
}
