const layers = [
  {
    id: "energy",
    name: "能源与电网",
    question: "能不能供电、何时并网、用什么电源",
    color: "#a84e41",
    points: ["核电与清洁基荷", "天然气与现场供电", "可再生能源 PPA", "变压器与电网工程"],
  },
  {
    id: "datacenter",
    name: "数据中心与工程设施",
    question: "能不能把高密度机柜快速、安全地建起来",
    color: "#bb5e34",
    points: ["土地与电力容量", "液冷与热管理", "UPS 与配电", "托管与互联"],
  },
  {
    id: "semiconductor",
    name: "半导体设计与制造",
    question: "能不能生产更高性能、更低功耗芯片",
    color: "#d9a441",
    points: ["EDA 与 IP", "先进制程", "EUV 设备", "先进封装与 HBM"],
  },
  {
    id: "systems",
    name: "系统硬件与网络",
    question: "能不能把芯片变成可规模化运行的 AI 集群",
    color: "#617d49",
    points: ["AI 服务器", "机架级系统", "交换机与光互连", "存储与调度"],
  },
  {
    id: "cloud",
    name: "云与算力运营",
    question: "企业能不能低门槛获得算力和模型服务",
    color: "#416f9c",
    points: ["IaaS 与 GPU 云", "AI PaaS", "自研芯片", "全球区域与合规"],
  },
  {
    id: "model",
    name: "模型与 AI 中间件",
    question: "能不能把基础模型变成可控业务能力",
    color: "#597986",
    points: ["基础模型", "Agent 框架", "RAG 与向量检索", "评估与 MLOps"],
  },
  {
    id: "application",
    name: "应用与行业解决方案",
    question: "AI 是否真正进入业务流程并产生 ROI",
    color: "#7b5b87",
    points: ["CRM 与 ITSM", "办公与创意", "安全与代码", "行业垂直应用"],
  },
  {
    id: "governance",
    name: "安全、治理与数据权属",
    question: "能不能安全合规地使用 AI",
    color: "#4f5d63",
    points: ["权限与审计", "模型治理", "隐私合规", "内容来源与反爬"],
  },
];

const companies = [
  ["energy", "核电与清洁基荷电力", "Constellation Energy", "CEG", "美国最大核电运营商之一；通过 Crane Clean Energy Center 重启项目与 Microsoft 20 年 PPA 支持数据中心供电；Calpine 子公司也与 CyrusOne 签署数据中心供电协议。", "核电牌照、现有反应堆资产、长周期运维经验、与 hyperscaler 签长期 PPA 的能力。"],
  ["energy", "燃气与综合发电", "Vistra", "VST", "美国独立发电商，拥有天然气、煤电、核电和储能资产；受益于 ERCOT 等区域数据中心负载增长。", "调峰电源、现有机组、区域电力市场交易能力。"],
  ["energy", "可再生能源与储能", "NextEra Energy", "NEE", "风电、太阳能、储能和公用事业电力供应，是大型企业 PPA 的重要对手方。", "开发管线、并网和项目融资能力、公用事业监管资产。"],
  ["energy", "发电设备与电网设备", "GE Vernova", "GEV", "燃气轮机、核电、风电、电网设备；Chevron 与 Engine No.1 计划用 GE Vernova 设备为美国数据中心提供 behind-the-meter 电力。", "大型燃机装机基础、服务网络、电网和发电设备组合。"],
  ["energy", "油气巨头与现场供电", "Chevron", "CVX", "通过天然气、现场发电、低碳业务探索数据中心供电。", "天然气资源、项目开发、资本实力、能源交易与工程能力。"],
  ["energy", "油气巨头与现场供电", "Exxon Mobil", "XOM", "通过天然气、现场发电、低碳业务探索数据中心供电。", "天然气资源、项目开发、资本实力、能源交易与工程能力。"],
  ["energy", "铀矿与核燃料", "Cameco", "CCJ / CCO.TO", "核电复兴和 SMR 预期推升铀与核燃料链条重要性；公司也持有 Westinghouse 权益。", "高品位铀矿、长期合同、核燃料周期资产。"],
  ["energy", "SMR / 新核能", "Oklo", "OKLO", "面向未来数据中心的模块化核电方案，仍处商业化早期。", "监管审批、反应堆设计、燃料获取、项目融资。"],
  ["energy", "SMR / 新核能", "NuScale", "SMR", "面向未来数据中心的模块化核电方案，仍处商业化早期。", "监管审批、反应堆设计、燃料获取、项目融资。"],
  ["energy", "配电与电气设备", "Eaton", "ETN", "变压器、开关柜、UPS、配电、能效管理、微电网和数据中心电气系统。", "产品认证、供货周期、工程渠道、全球服务网络。"],
  ["energy", "配电与电气设备", "Schneider Electric", "SU.PA / SBGSY", "变压器、开关柜、UPS、配电、能效管理、微电网和数据中心电气系统。", "产品认证、供货周期、工程渠道、全球服务网络。"],
  ["energy", "电网工程建设", "Quanta Services", "PWR", "输配电工程、变电站、可再生能源接入、数据中心相关电力基础设施施工。", "熟练工队伍、项目管理、公共事业客户关系、地域覆盖。"],

  ["datacenter", "零售托管与互联数据中心", "Equinix", "EQIX", "IBX 数据中心、互联、Equinix Fabric；AI 生态连接模型商、云和企业数据。", "全球互联节点、客户生态、网络中立性、跨云连接。"],
  ["datacenter", "批发/超大规模数据中心", "Digital Realty", "DLR", "大型数据中心园区、批发托管、跨区域部署。", "土地、电力容量、全球园区、长期客户合约。"],
  ["datacenter", "AI GPU 云数据中心运营", "CoreWeave", "CRWV", "AI-native GPU 云，面向 OpenAI、企业和政府客户；2025 年上市后继续扩张。", "GPU 供应、调度平台、与 NVIDIA 生态绑定、快速建设能力。"],
  ["datacenter", "电源与热管理", "Vertiv", "VRT", "UPS、配电、机柜、液冷、热管理；AI 和高密度计算推动需求。", "数据中心电源和热管理全套产品、液冷能力、交付和服务网络。"],
  ["datacenter", "数据中心工程与冷却", "Johnson Controls", "JCI", "HVAC、冷机、楼宇自动化、热管理。", "工程渠道、设备可靠性、维保网络。"],
  ["datacenter", "数据中心工程与冷却", "Carrier", "CARR", "HVAC、冷机、楼宇自动化、热管理。", "工程渠道、设备可靠性、维保网络。"],
  ["datacenter", "数据中心工程与冷却", "Trane Technologies", "TT", "HVAC、冷机、楼宇自动化、热管理。", "工程渠道、设备可靠性、维保网络。"],
  ["systems", "机柜级 AI 服务器", "Dell Technologies", "DELL", "AI 服务器、NVIDIA/AMD 平台集成、机架级系统、企业 AI factory。", "供应链、客户渠道、系统集成、认证和售后。"],
  ["systems", "机柜级 AI 服务器", "Super Micro Computer", "SMCI", "AI 服务器、液冷方案和快速集成。", "产品迭代速度、GPU 服务器设计、供应链响应。"],
  ["systems", "机柜级 AI 服务器", "Hewlett Packard Enterprise", "HPE", "企业服务器、HPC、AI 集群和混合云基础设施。", "企业客户基础、HPC 经验、服务和集成能力。"],
  ["systems", "网络与数据中心交换", "Arista Networks", "ANET", "以太网 AI 集群网络、云数据中心交换、网络操作系统。", "EOS 软件质量、云大客户关系、低延迟高可靠产品。"],
  ["systems", "网络与数据中心交换", "Cisco", "CSCO", "交换机、路由、安全和企业网络。", "企业渠道、网络产品组合、服务体系。"],

  ["semiconductor", "EDA、IP 与设计工具", "Synopsys", "SNPS", "EDA、验证、半导体 IP；推动 Synopsys.ai 和 AgentEngineer 类设计自动化。", "EDA 工具链深度绑定芯片设计流程，客户切换成本极高，IP 库和验证工具协同。"],
  ["semiconductor", "EDA、IP 与设计工具", "Cadence", "CDNS", "EDA、系统设计、验证、Cerebrus/ChipStack 等 AI 辅助芯片设计。", "大客户长期绑定、数字/模拟/封装协同、设计数据和方法学沉淀。"],
  ["semiconductor", "EDA、IP 与设计工具", "Arm Holdings", "ARM", "CPU IP、Neoverse 数据中心架构、终端 AI SoC IP。", "生态授权模式、低功耗架构、软件兼容性。"],
  ["semiconductor", "EDA、IP 与设计工具", "Siemens", "SIE.DE", "EDA、工业软件、仿真、数字孪生。", "工业客户基础、仿真与制造软件组合。"],
  ["semiconductor", "半导体设备与制造", "ASML", "ASML", "EUV/DUV 光刻，是先进制程的关键设备供应商；2025 年交付 48 台 EUV 系统。", "EUV 技术近乎唯一供应、供应链复杂度、客户共同开发、服务网络。"],
  ["semiconductor", "半导体设备与制造", "Applied Materials", "AMAT", "薄膜沉积、刻蚀、材料工程设备。", "覆盖多个关键工艺步骤，客户粘性强，材料工程能力。"],
  ["semiconductor", "半导体设备与制造", "Lam Research", "LRCX", "刻蚀、沉积、清洗，受益于 3D NAND、先进逻辑和封装。", "高深宽比刻蚀、工艺配方、装机服务收入。"],
  ["semiconductor", "半导体设备与制造", "KLA", "KLAC", "缺陷检测、量测和制程控制。", "良率爬坡关键工具，算法和检测数据库。"],
  ["semiconductor", "半导体设备与制造", "Tokyo Electron", "8035.T", "涂胶显影、刻蚀、沉积、清洗等半导体设备。", "日本精密设备供应链、客户关系、工艺覆盖广。"],
  ["semiconductor", "晶圆代工与封装", "TSMC", "TSM / 2330.TW", "先进晶圆代工、3nm/2nm、CoWoS 先进封装；AI GPU/ASIC 的核心制造平台。", "工艺良率、客户信任、先进封装产能、资本开支规模。"],
  ["semiconductor", "晶圆代工与封装", "Samsung Electronics", "005930.KS", "存储、晶圆代工、先进封装、消费终端。", "存储与代工垂直整合、资本实力、全球制造。"],
  ["semiconductor", "晶圆代工与封装", "Intel", "INTC", "CPU、Gaudi/AI 加速器、Intel Foundry、先进封装。", "x86 生态、封装技术、美国本土制造战略地位。"],
  ["semiconductor", "晶圆代工与封装", "ASE", "ASX / 3711.TW", "OSAT、先进封装、测试。", "封装产能、良率、客户认证、全球工厂布局。"],
  ["semiconductor", "晶圆代工与封装", "Amkor", "AMKR", "OSAT、先进封装、测试。", "封装产能、良率、客户认证、全球工厂布局。"],
  ["semiconductor", "AI 芯片、内存与互连", "NVIDIA", "NVDA", "GPU、NVLink/NVSwitch、InfiniBand/Ethernet、CUDA、DGX、AI Enterprise、模型和推理软件。", "CUDA 生态、系统级产品、网络互连、开发者和云厂商锁定、供应链掌控。"],
  ["semiconductor", "AI 芯片、内存与互连", "AMD", "AMD", "Instinct MI300/MI350、EPYC CPU、ROCm、Pensando 网络，向开放 AI 基础设施推进。", "CPU + GPU + NIC 组合、开放软件栈、性价比和 hyperscaler 认证。"],
  ["semiconductor", "AI 芯片、内存与互连", "Broadcom", "AVGO", "定制 AI ASIC、以太网交换芯片、SerDes、光互连；2025 Q4 AI 半导体收入同比增长 74%。", "定制 ASIC 客户关系、网络芯片、IP 模块、执行和并购整合能力。"],
  ["semiconductor", "AI 芯片、内存与互连", "Marvell", "MRVL", "定制硅、光 DSP、硅光、数据中心互连。", "高速模拟/光互连、定制芯片设计、大客户项目。"],
  ["semiconductor", "AI 芯片、内存与互连", "Qualcomm", "QCOM", "端侧 AI SoC、手机/PC/汽车 AI 推理。", "低功耗 SoC、无线通信专利、终端生态。"],
  ["semiconductor", "AI 芯片、内存与互连", "MediaTek", "2454.TW", "手机、智能设备和边缘 AI 芯片。", "成本效率、安卓终端生态、量产能力。"],
  ["semiconductor", "AI 芯片、内存与互连", "SK hynix", "000660.KS", "HBM、DDR5、eSSD；2025 年 HBM 收入同比翻倍，HBM4 进入大规模生产。", "HBM 技术、客户认证、良率、先进封装协同。"],
  ["semiconductor", "AI 芯片、内存与互连", "Micron", "MU", "HBM、DRAM、NAND、企业 SSD；计划扩大美国 DRAM、R&D 和 HBM 先进封装投资。", "存储工艺、美国制造战略地位、企业和数据中心产品组合。"],

  ["cloud", "云服务与算力运营", "Amazon", "AMZN", "AWS、Bedrock、SageMaker、Trainium/Inferentia、Graviton、自研 Nova 模型；2026 年资本开支计划约 2000 亿美元。", "全球云规模、开发者生态、自研芯片、企业客户、成本优化能力。"],
  ["cloud", "云服务与算力运营", "Microsoft", "MSFT", "Azure AI、OpenAI 深度合作、Microsoft 365 Copilot、GitHub Copilot、Fabric；FY2026 Q2 Azure 和其他云服务收入增长 39%。", "企业分发、Office/GitHub/Windows/Teams 入口、OpenAI 关系、合规和安全能力。"],
  ["cloud", "云服务与算力运营", "Alphabet", "GOOGL / GOOG", "Google Cloud、TPU、Vertex AI、Gemini、AI 搜索和广告系统。", "TPU 全栈、搜索和 YouTube 数据/分发、基础研究、全球网络。"],
  ["cloud", "云服务与算力运营", "Oracle", "ORCL", "OCI、数据库云、GPU 集群、AI 数据库；FY2026 Q3 云收入 89.14 亿美元，同比增长 44%。", "数据库客户基础、OCI 网络架构、与 NVIDIA/模型公司的大规模合同。"],
  ["cloud", "云服务与算力运营", "Alibaba", "BABA / 9988.HK", "阿里云、通义千问/Qwen、AI 云服务，中国市场领先云厂商。", "中国云市场、开源模型生态、算力调度和本土客户。"],
  ["cloud", "云服务与算力运营", "Tencent", "0700.HK / TCEHY", "腾讯云、混元模型、游戏/社交/企业服务。", "社交和内容生态、游戏云、企业连接。"],
  ["cloud", "云服务与算力运营", "Nebius", "NBIS", "欧洲和国际 AI 云基础设施。", "区域合规、GPU 云建设、欧洲客户需求。"],
  ["cloud", "边缘网络与 AI 平台", "Cloudflare", "NET", "Workers AI、AI Gateway、边缘网络、安全和内容控制。", "全球边缘网络、开发者平台、安全流量数据。"],

  ["model", "基础模型", "OpenAI", "未上市", "ChatGPT、API、企业版、模型和 Agent 工具；2025 年公开报道称年化收入达到 100 亿美元。", "品牌、模型能力、开发者生态、Microsoft/Azure 分发、消费者和企业入口。"],
  ["model", "基础模型", "Anthropic", "未上市", "Claude、Claude Enterprise、Claude Code、企业安全定位。", "模型安全品牌、企业代码/办公场景渗透、AWS/Google/其它云资源支持。"],
  ["model", "基础模型", "Google DeepMind", "GOOGL", "Gemini、TPU、搜索/安卓/Workspace 集成、科学 AI。", "研究能力、TPU、全球产品分发、数据和基础设施。"],
  ["model", "基础模型", "Meta", "META", "Llama 开源模型、AI 推荐、广告系统、AI 眼镜和消费入口。", "社交分发、广告数据、开源生态、资本开支规模。"],
  ["model", "基础模型", "xAI", "未上市", "Grok、X 平台数据入口、AI 基础设施。", "X 分发、资本和算力投入、快速产品迭代。"],
  ["model", "基础模型", "Mistral AI", "未上市", "欧洲基础模型、开源和商业模型。", "欧洲主权 AI 叙事、轻量高效模型、企业和政府关系。"],
  ["model", "基础模型", "DeepSeek", "未上市", "高效率开源/开放权重模型和推理优化。", "成本效率、工程优化、开源传播。"],
  ["model", "模型社区与工具", "Hugging Face", "未上市", "模型社区、模型托管、数据集、推理和企业工具。", "开发者社区、模型分发入口、开源生态。"],
  ["model", "数据与 AI 平台", "Databricks", "未上市", "Lakehouse、Unity Catalog、MosaicML、Agent Bricks、Lakebase；2025 年披露收入 run-rate 超过 48 亿美元。", "数据与 AI 一体化、治理、开源生态、企业客户。"],
  ["model", "数据与 AI 平台", "Snowflake", "SNOW", "AI Data Cloud、Cortex AI、Snowpark、数据共享和治理。", "企业数据驻留、治理和权限、消费计费、生态合作。"],
  ["model", "数据与 AI 平台", "MongoDB", "MDB", "文档数据库、向量搜索、开发者数据平台。", "开发者生态、应用数据入口、灵活数据模型。"],
  ["model", "数据与 AI 平台", "Elastic", "ESTC", "搜索、向量检索、可观测性与安全。", "搜索技术、企业部署基础、检索增强生成场景适配。"],

  ["application", "CRM / Agent", "Salesforce", "CRM", "Agentforce、Data 360、Slack；FY2026 披露 Agentforce 和 Data 360 ARR 超过 29 亿美元。", "CRM 数据、销售/客服流程、生态伙伴、企业客户续约。"],
  ["application", "工作流 / ITSM", "ServiceNow", "NOW", "ServiceNow AI Platform、AI Agent Fabric、AI Control Tower、Now Assist。", "工作流系统入口、IT/HR/客服流程数据、企业级治理。"],
  ["application", "办公与生产力", "Microsoft", "MSFT", "Microsoft 365 Copilot、Teams、GitHub Copilot、Dynamics AI。", "Office 和 GitHub 分发、企业身份和权限、Azure 后端。"],
  ["application", "创意与营销", "Adobe", "ADBE", "Firefly、GenStudio、Creative Cloud AI；强调授权内容和公有领域内容训练、商业安全。", "创意工具标准地位、内容资产、企业营销工作流。"],
  ["application", "数据决策与政府/国防", "Palantir", "PLTR", "AIP、Foundry、Apollo，将 LLM 接入受控数据和操作流程。", "高安全客户、政府/国防关系、复杂数据集成、部署能力。"],
  ["application", "财税与中小企业", "Intuit", "INTU", "TurboTax、QuickBooks、Credit Karma 中嵌入 AI 助手和自动化。", "财税数据、SMB 分发、合规场景。"],
  ["application", "人力资源", "Workday", "WDAY", "HR、财务系统中的 AI 助手、技能图谱、招聘和财务自动化。", "HR/财务核心系统数据、企业客户黏性。"],
  ["application", "自动化/RPA", "UiPath", "PATH", "Agentic automation、RPA 与 AI Agent 结合。", "自动化流程库、企业部署经验、系统连接器。"],
  ["application", "网络安全", "CrowdStrike", "CRWD", "安全 Copilot/Agent、威胁检测、自动响应、身份和云安全。", "安全遥测数据、客户部署深度、实时响应网络。"],
  ["application", "网络安全", "Palo Alto Networks", "PANW", "安全 Copilot/Agent、云安全、网络安全和自动响应。", "安全遥测数据、客户部署深度、平台化产品组合。"],
  ["application", "网络安全", "Zscaler", "ZS", "零信任、云安全和 AI 辅助威胁防护。", "云安全网络、身份和流量数据、企业部署深度。"],
  ["application", "代码开发", "GitHub", "MSFT", "代码生成、代码审查、DevSecOps、项目协作 AI。", "开发者工作流入口、代码和 issue 数据、CI/CD 集成。"],
  ["application", "代码开发", "GitLab", "GTLB", "代码生成、代码审查、DevSecOps、项目协作 AI。", "开发者工作流入口、代码和 issue 数据、CI/CD 集成。"],
  ["application", "代码开发", "Atlassian", "TEAM", "项目协作、知识库、工程管理和 AI 助手。", "协作工作流入口、Jira/Confluence 数据、团队级分发。"],
  ["application", "教育与消费", "Duolingo", "DUOL", "AI 教学、个性化学习和内容生成。", "用户规模、学习数据、产品实验速度。"],
  ["application", "自动驾驶/机器人", "Tesla", "TSLA", "自动驾驶、机器人、仿真、边缘推理。", "数据闭环、传感器和车队规模、模型和硬件垂直整合。"],
];

const moatRows = [
  ["energy", "能源与电网", "电源资产、并网容量、PPA、监管牌照、工程交付", "政策、燃料价格、地方反对、并网排队、环保约束"],
  ["datacenter", "数据中心", "土地、电力、冷却、客户合约、施工速度", "资本开支巨大、利用率风险、技术更新导致机房设计迭代"],
  ["semiconductor", "芯片设备/制造", "工艺良率、设备垄断、先进封装、客户认证", "周期性、出口管制、地缘政治、单一客户依赖"],
  ["semiconductor", "GPU/ASIC/HBM", "软件生态、内存带宽、互连、系统级设计", "替代芯片、自研 ASIC、产能错配、价格下行"],
  ["cloud", "云服务", "全球规模、区域合规、开发者生态、自研芯片", "资本开支压力、算力闲置、价格竞争"],
  ["model", "模型平台", "模型质量、品牌、开发者、推理成本、安全", "模型商品化、开源追赶、监管和版权"],
  ["model", "数据平台", "数据驻留、权限治理、生态连接、消费计费", "云厂商内置功能竞争、客户成本优化"],
  ["application", "SaaS 应用", "工作流入口、客户数据、分发渠道、行业模板", "AI 原生竞争者、客户压价、功能被平台内置"],
];

const sources = [
  ["IEA", "Energy demand from AI", "https://www.iea.org/reports/energy-and-ai/energy-demand-from-ai"],
  ["IEA", "Energy supply for AI", "https://www.iea.org/reports/energy-and-ai/energy-supply-for-ai"],
  ["NVIDIA", "Q4 and Fiscal 2026 Results", "https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-Announces-Financial-Results-for-Fourth-Quarter-and-Fiscal-2026/"],
  ["TSMC", "2024 Annual Report", "https://investor.tsmc.com/static/annualReports/2024/english/index.html"],
  ["ASML", "2025 Annual Report", "https://www.asml.com/en/investors/annual-report/2025"],
  ["Omdia/Canalys", "Global cloud infrastructure spending rose 21% in Q1 2025", "https://omdia.tech.informa.com/pr/2025/jun/global-cloud-infrastructure-spending-rose-21percent-in-q1-2025"],
  ["Microsoft", "FY2026 Q2 Earnings Release", "https://www.microsoft.com/en-us/Investor/earnings/FY-2026-Q2/press-release-webcast"],
  ["Amazon", "Q4 2025 Earnings Release", "https://s2.q4cdn.com/299287126/files/doc_earnings/2025/q4/earnings-result/AMZN-Q4-2025-Earnings-Release.pdf"],
  ["Oracle", "FY2026 Q3 Financial Results", "https://investor.oracle.com/investor-news/news-details/2026/Oracle-Announces-Fiscal-Year-2026-Third-Quarter-Financial-Results/default.aspx"],
  ["Broadcom", "Q4 and Fiscal Year 2025 Results", "https://investors.broadcom.com/node/63716/pdf"],
  ["SK hynix", "FY2025 Financial Results", "https://news.skhynix.com/sk-hynix-announces-fy25-financial-results/"],
  ["Salesforce", "Q4 Fiscal 2026 Results", "https://investor.salesforce.com/news/news-details/2026/Salesforce-Delivers-Record-Fourth-Quarter-Fiscal-2026-Results/default.aspx"],
];

const byId = Object.fromEntries(layers.map((layer) => [layer.id, layer]));
let activeLayer = "all";

function escapeText(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderStackMap() {
  const stackMap = document.querySelector("#stackMap");
  stackMap.innerHTML = layers
    .map(
      (layer) => `
        <article class="stack-layer" style="--layer-color:${layer.color}">
          <header>
            <b>${escapeText(layer.name)}</b>
            <small>${escapeText(layer.question)}</small>
          </header>
          <ul>
            ${layer.points.map((point) => `<li>${escapeText(point)}</li>`).join("")}
          </ul>
        </article>
      `,
    )
    .join("");
}

function renderFilters() {
  const filterTabs = document.querySelector("#filterTabs");
  const tabs = [{ id: "all", name: "全部" }, ...layers.slice(0, 7)];
  filterTabs.innerHTML = tabs
    .map(
      (tab) => `
        <button class="filter-button ${tab.id === activeLayer ? "active" : ""}" data-layer="${tab.id}" type="button">
          ${escapeText(tab.name)}
        </button>
      `,
    )
    .join("");

  filterTabs.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      activeLayer = button.dataset.layer;
      renderFilters();
      renderCompanies();
    });
  });
}

function getFilteredCompanies() {
  const query = document.querySelector("#companySearch").value.trim().toLowerCase();
  return companies
    .map(([layer, direction, name, ticker, business, moat]) => ({ layer, direction, name, ticker, business, moat }))
    .filter((company) => {
      const inLayer = activeLayer === "all" || company.layer === activeLayer;
      const haystack = `${company.direction} ${company.name} ${company.ticker} ${company.business} ${company.moat}`.toLowerCase();
      return inLayer && (!query || haystack.includes(query));
    });
}

function renderCompanies() {
  const companyGrid = document.querySelector("#companyGrid");
  const companyCount = document.querySelector("#companyCount");
  const filtered = getFilteredCompanies();
  companyCount.textContent = `当前显示 ${filtered.length} 家公司。`;

  if (!filtered.length) {
    companyGrid.innerHTML = `<div class="company-card" style="--layer-color:#4f5d63"><h3 class="company-name">没有匹配结果</h3><p>换一个关键词，或切回全部层级。</p></div>`;
    return;
  }

  companyGrid.innerHTML = filtered
    .map((company) => {
      const layer = byId[company.layer] || byId.governance;
      return `
        <article class="company-card" style="--layer-color:${layer.color}">
          <div class="company-top">
            <div>
              <p class="company-layer">${escapeText(layer.name)}</p>
              <h3 class="company-name">${escapeText(company.name)}</h3>
            </div>
            <span class="ticker">${escapeText(company.ticker)}</span>
          </div>
          <div class="company-tags">
            <span>${escapeText(company.direction)}</span>
          </div>
          <div class="company-body">
            <p><span class="label">相关业务</span>${escapeText(company.business)}</p>
            <p><span class="label">核心竞争壁垒</span>${escapeText(company.moat)}</p>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderMoats() {
  const moatTable = document.querySelector("#moatTable");
  moatTable.innerHTML = moatRows
    .map(([layerId, name, moat, risk]) => {
      const layer = byId[layerId] || byId.governance;
      return `
        <article class="moat-row" style="--layer-color:${layer.color}">
          <div><h3>${escapeText(name)}</h3></div>
          <div><span class="label">核心壁垒</span><p>${escapeText(moat)}</p></div>
          <div><span class="label">脆弱点</span><p>${escapeText(risk)}</p></div>
        </article>
      `;
    })
    .join("");
}

function renderSources() {
  const sourceGrid = document.querySelector("#sourceGrid");
  sourceGrid.innerHTML = sources
    .map(
      ([label, title, url]) => `
        <article class="source-card">
          <span class="source-label">${escapeText(label)}</span>
          <p>${escapeText(title)}</p>
          <a href="${escapeText(url)}" target="_blank" rel="noreferrer">查看来源</a>
        </article>
      `,
    )
    .join("");
}

document.querySelector("#companySearch").addEventListener("input", renderCompanies);

renderStackMap();
renderFilters();
renderCompanies();
renderMoats();
renderSources();
