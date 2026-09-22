// Research content from the supplied CV and figures. Statuses are not inferred from conference years.
const profileData = {
  "papers": [
    {
      "venue": "NeurIPS 2026",
      "status": [
        "投稿中 · 共同一作",
        "Submitted · Co-first author"
      ],
      "title": "WorldVLN: Autoregressive World Action Model for Aerial Vision-Language Navigation",
      "authors": "Baining Zhao*, Jiacheng Xu*, Weicheng Feng, Chen Gao, Xinlei Chen",
      "links": [
        [
          "Paper",
          "https://arxiv.org/abs/2605.15964"
        ],
        [
          "Project",
          "https://embodiedcity.github.io/WorldVLN/"
        ]
      ],
      "id": "worldvln",
      "image": "assets/worldvln.png",
      "abstract": [
        "WorldVLN 面向室内外空中视觉语言导航，使用自回归世界模型预测由无人机运动引起的短时域潜在状态转移，并将其解码为三维航点动作。模型不需要生成完整未来视频，而是利用潜在世界动态连接观察、预测与行动。",
        "WorldVLN addresses indoor and outdoor aerial vision-language navigation with an autoregressive world model that predicts short-horizon latent transitions caused by UAV motion and decodes them into 3D waypoint actions. Rather than generating complete future videos, it uses latent world dynamics to connect observation, prediction, and action."
      ],
      "points": [
        [
          "闭环建模：世界模型骨干预测 latent transition，Action Decoder 输出包含三维位移和偏航角变化的 waypoint actions；执行后将真实观测重新编码到上下文。",
          "Closed-loop modeling: the backbone predicts latent transitions, the Action Decoder produces waypoint actions with 3D displacement and yaw changes, and new real observations are re-encoded into the context."
        ],
        [
          "训练方案：先进行导航动态对齐和动作解码器监督训练，再使用 Action-aware GRPO 在线 rollout 优化。",
          "Training: supervised alignment of navigation dynamics and action decoding, followed by online-rollout optimization with Action-aware GRPO."
        ],
        [
          "个人贡献：主要负责模型骨干、动作解码器、自回归交互流程及训练推理调试，并参与强化学习框架和训练优化。",
          "My contribution: backbone and action-decoder design, autoregressive interaction, training/inference debugging, and contributions to the reinforcement-learning framework and optimization."
        ]
      ],
      "accepted": false
    },
    {
      "venue": "iScience · Q1",
      "status": [
        "已接收 · 第一作者",
        "Accepted · First author"
      ],
      "title": "Astronomical Spectra as Language: Order-Agnostic Foundation Model for Low-SNR Reconstruction and Stellar Parameter Prediction",
      "authors": "Jiacheng Xu, Xinrui Song, Cunshi Wang, Yuyang Li, Zhiwen Fu, Ali Luo, Jifeng Liu",
      "links": [
        [
          "Code",
          "https://github.com/Yu-Yang-Li/StarWhisper"
        ]
      ],
      "id": "spectra",
      "image": "assets/spectra.png",
      "abstract": [
        "该研究将天文光谱视作可建模的 token 序列，构建面向低信噪比光谱重建与恒星参数预测的无序基础模型。通过自监督学习与分阶段迁移，连接高质量模拟光谱和低信噪比真实天文观测。",
        "This work treats astronomical spectra as token sequences and develops an order-agnostic foundation model for low-SNR reconstruction and stellar parameter prediction. Self-supervised learning and staged adaptation connect high-quality synthetic spectra with noisy real observations."
      ],
      "points": [
        [
          "数据与表示：使用 PHOENIX 模拟光谱和 LAMOST 低信噪比观测，将连续 flux 转换为按数字编码的离散 token。",
          "Data and representation: PHOENIX synthetic spectra and LAMOST low-SNR observations, with continuous flux converted into digit-wise discrete tokens."
        ],
        [
          "学习与迁移：无序 masked 预训练与按信噪比分阶段适配，从模拟数据迁移到真实观测。",
          "Learning and transfer: order-agnostic masked pretraining and SNR-graded adaptation from synthetic data to real observations."
        ],
        [
          "输出任务：光谱重建，以及 Teff、log g、[Fe/H] 等恒星物理参数预测。",
          "Outputs: spectral reconstruction and prediction of stellar parameters including Teff, log g, and [Fe/H]."
        ]
      ],
      "accepted": true
    },
    {
      "venue": "NeurIPS 2026",
      "status": [
        "投稿中",
        "Submitted"
      ],
      "title": "Beyond Denoising: Noise-Resilient Representation Alignment for Real-World Depth Perception",
      "authors": "Xiujian Liang, Zheng Huang, Jiacheng Xu, Zehao Du, Mingyang Sun, Anda Cheng, Zhenxing Qian, Cewu Lu, Jianhua Sun",
      "links": [],
      "id": "depth",
      "image": null,
      "abstract": [
        "研究关注真实环境中的深度感知，探索通过抗噪表示对齐提升对噪声的适应能力。论文题目中的核心方向是从单纯去噪转向更稳健的表示学习。",
        "This work studies real-world depth perception through noise-resilient representation alignment, shifting the focus from denoising alone toward more robust representation learning."
      ],
      "points": [],
      "accepted": false
    },
    {
      "venue": "AAAI 2027",
      "status": [
        "投稿中",
        "Submitted"
      ],
      "title": "SAWMAN: Spatial-Aware World Model Agent for Aerial Embodied Navigation",
      "authors": "Jianjie Fang, Ziyou Wang, Baining Zhao, Jiacheng Xu, Yuchao Huang, Peizhi Tang, Chen Gao, Xin Wang, Xinlei Chen, Yong Li, Wenwu Zhu",
      "links": [],
      "id": "sawman",
      "image": "assets/sawman.png",
      "abstract": [
        "SAWMAN 在空中具身导航中引入空间感知世界模型，以六视角观测补充无人机的空间上下文。世界模型预测动作执行后的环境，视觉语言模型据此进行决策，形成“想象—决策”闭环。",
        "SAWMAN introduces a spatial-aware world model for aerial embodied navigation, using six-view observations to enrich spatial context. The world model predicts the environment after an action, and a vision-language model uses these predictions to make decisions in an imagination–decision loop."
      ],
      "points": [
        [
          "多视角因果蒸馏：生成步数由 50 步压缩至 2 步，实现约 12 FPS 在线空间想象。",
          "Multi-view causal distillation reduces generation from 50 steps to 2, enabling approximately 12 FPS online spatial imagination."
        ],
        [
          "预测可靠性：通过前视角 PSNR 进行质量检测，预测不可靠时刷新真实观测。",
          "Prediction reliability: front-view PSNR checks prediction quality, triggering a refresh with real observations when needed."
        ],
        [
          "评测结果：EmbodiedNav-Bench 与 UAV-ON 的平均成功率分别提升 7.8 和 19.1 个百分点，整体平均提升 13.4 个百分点。",
          "Evaluation: average success-rate improvements of 7.8 and 19.1 percentage points on EmbodiedNav-Bench and UAV-ON, respectively; 13.4 points overall."
        ]
      ],
      "accepted": false
    },
    {
      "venue": "KDD · Oral",
      "status": [
        "已接收 · CCF-A",
        "Accepted · CCF-A"
      ],
      "title": "How Far Are Large Multimodal Models from Human-Level Spatial Action? A Benchmark for Goal-Oriented Embodied Navigation in Urban Airspace",
      "authors": "Baining Zhao, Ziyou Wang, Jianjie Fang, Zile Zhou, Yanggang Xu, Yatai Ji, Jiacheng Xu, Qian Zhang, Weichen Zhang, Chen Gao, Xinlei Chen",
      "links": [],
      "id": "kdd",
      "image": "assets/kdd.png",
      "abstract": [
        "该工作围绕城市空域中的目标导向具身导航，构建用于研究大多模态模型空间行动能力的评测基准。方法图包含多种城市目标、无人机轨迹与导航场景，关注模型从视觉理解到实际行动的能力。",
        "This work introduces a benchmark for goal-oriented embodied navigation in urban airspace to study the spatial action capabilities of large multimodal models. The overview includes diverse urban goals, UAV trajectories, and navigation scenarios, examining the transition from visual understanding to action."
      ],
      "points": [
        [
          "评测规模：5,037 条轨迹、17 个主流模型和 500 小时标注工作。",
          "Benchmark scale: 5,037 trajectories, 17 popular models, and 500 hours of annotation."
        ],
        [
          "评测任务：城市环境中的三维具身导航，包含自然语言描述的目标与复杂空间路径。",
          "Task: 3D embodied navigation in urban environments, with language-described goals and complex spatial routes."
        ]
      ],
      "accepted": true
    },
    {
      "venue": "EMNLP",
      "status": [
        "已接收",
        "Accepted"
      ],
      "title": "Reason-WAM: Vision-Language Reasoning for World Action Models in Urban Aerial Goal Navigation",
      "authors": "Baining Zhao, Shurui Peng, Yan Wang, Zhaolu Wang, Xin Zhang, Jiacheng Xu, Weicheng Feng, Ziyou Wang, Jianjie Fang, Weichen Zhang, Wei Wu, Chen Gao, Xinlei Chen, Yong Li",
      "links": [],
      "id": "reason-wam",
      "image": null,
      "abstract": [
        "Reason-WAM 关注城市空中目标导航中的视觉语言推理，研究如何将视觉语言推理与世界动作模型结合，以支持具身导航决策。",
        "Reason-WAM studies vision-language reasoning for urban aerial goal navigation and its integration with world action models to support embodied navigation decisions."
      ],
      "points": [],
      "accepted": true
    },
    {
      "venue": "Research in Astronomy and Astrophysics",
      "status": [
        "已接收",
        "Accepted"
      ],
      "title": "LightCurve MoE: A Dynamic Sparse Routing Mixture-of-Experts Architecture for Efficient Stellar Light Curve Classification",
      "authors": "Cunshi Wang, Yu Bai, Xinrui Song, Jiacheng Xu, Henggeng Han, Yuyang Li, Xinjie Hu, Huiqin Yang, Jifeng Liu",
      "links": [
        [
          "DOI",
          "https://doi.org/10.1088/1674-4527/adfa73"
        ]
      ],
      "id": "lightcurve-moe",
      "image": "assets/lightcurve-moe.png",
      "abstract": [
        "LightCurve MoE 面向恒星光变曲线分类，采用动态稀疏路由的混合专家架构，根据输入特征进行专家选择，并融合不同分支的预测。",
        "LightCurve MoE addresses stellar light-curve classification with a dynamically routed, sparse mixture-of-experts architecture that selects experts based on input features and combines their predictions."
      ],
      "points": [
        [
          "输入：原始光变曲线 flux 与时间序列，经动态路由模块选择专家。",
          "Input: raw light-curve flux and time series, with expert selection through a dynamic routing module."
        ],
        [
          "多分支表示：CWT 时频分析、GAF 相空间映射、RP 递归结构，以及光谱统计和时间序列建模分支。",
          "Multiple representations: CWT time-frequency analysis, GAF phase-space mapping, RP recurrence structures, spectral statistics, and temporal sequence modeling."
        ],
        [
          "输出：对专家预测进行加权集成，完成恒星光变曲线分类。",
          "Output: a weighted ensemble of expert predictions for stellar light-curve classification."
        ]
      ],
      "accepted": true
    }
  ],
  "competitions": [
    [
      "2026.02",
      [
        "WorldScore 视频模型榜第一",
        "No. 1 on the WorldScore Video-Model Leaderboard"
      ],
      [
        "训练测评基础设施搭建与数据过滤",
        "Training and evaluation infrastructure; data filtering"
      ]
    ],
    [
      "2025.11",
      [
        "第十九届“挑战杯” AI 赛道",
        "19th Challenge Cup · AI Track"
      ],
      [
        "国家特等奖 · 第二负责人",
        "National Special Prize · Second project lead"
      ]
    ],
    [
      "2025.08",
      [
        "中国高校计算机大赛 · AIGC 创新赛",
        "China Collegiate Computing Contest · AIGC Innovation"
      ],
      [
        "华东赛区二等奖 · 后端开发负责人",
        "East China Second Prize · Backend development lead"
      ]
    ],
    [
      "2025.07",
      [
        "中国国际大学生创新大赛",
        "China International College Students’ Innovation Competition"
      ],
      [
        "山东省金奖 · 后端开发维护负责人",
        "Shandong Gold Award · Backend development and maintenance lead"
      ]
    ],
    [
      "2025.06",
      [
        "中科海光先导杯 · 高性能计算",
        "Zhongke Hygon Pioneer Cup · High-Performance Computing"
      ],
      [
        "校级二等奖 · 训练与推理加速",
        "University Second Prize · Training and inference acceleration"
      ]
    ],
    [
      "2025.03",
      [
        "全国大学生软件创新大赛",
        "National College Student Software Innovation Competition"
      ],
      [
        "华东赛区二等奖 · 后端开发负责人",
        "East China Second Prize · Backend development lead"
      ]
    ]
  ],
  "honors": [
    [
      "2025.12",
      [
        "国家奖学金",
        "National Scholarship"
      ],
      [
        "2024–2025 学年",
        "Academic year 2024–2025"
      ]
    ],
    [
      "2024.12",
      [
        "国家奖学金",
        "National Scholarship"
      ],
      [
        "2023–2024 学年",
        "Academic year 2023–2024"
      ]
    ],
    [
      "2025.10",
      [
        "山东大学学业一等奖学金 × 2",
        "Shandong University Academic First-Class Scholarship × 2"
      ],
      [
        "前 3% · 大一、大二",
        "Top 3% · First and second undergraduate years"
      ]
    ],
    [
      "2025.10",
      [
        "山东大学三好学生 × 2",
        "Shandong University Merit Student × 2"
      ],
      [
        "大一、大二",
        "First and second undergraduate years"
      ]
    ],
    [
      "2025.10",
      [
        "山东大学特长奖学金 × 2",
        "Shandong University Specialty Scholarship × 2"
      ],
      [
        "大一、大二",
        "First and second undergraduate years"
      ]
    ],
    [
      "2025.10",
      [
        "优秀共青团员 × 2",
        "Outstanding Communist Youth League Member × 2"
      ],
      [
        "大一、大二",
        "First and second undergraduate years"
      ]
    ],
    [
      "2025.03",
      [
        "校级优秀社会实践团队",
        "Outstanding Social Practice Team · University Level"
      ],
      [
        "担任队长",
        "Team leader"
      ]
    ],
    [
      "2024.10",
      [
        "校级优秀学生干部",
        "Outstanding Student Leader · University Level"
      ],
      [
        "担任班长",
        "Class monitor"
      ]
    ]
  ]
};
