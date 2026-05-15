# AI 完整产业图景调研报告

日期：2026-05-15  
口径：公开资料调研；股票代码以主要上市地或常用 ADR/美股代码表示；“未上市”公司无公开股票代码。本文不构成投资建议。

## 1. 执行摘要

AI 产业不是单一的软件行业，而是一条从“电力与土地”到“数据中心”，再到“芯片、服务器、云、模型、数据平台和应用”的纵向产业链。当前最紧缺、议价能力最强的环节集中在三类：

1. **确定性资源**：电力接入、并网容量、燃气轮机、核电/SMR 资源、数据中心土地与施工能力。IEA 预计到 2030 年，美国、中国和欧洲仍将是数据中心用电的最大区域，美国和中国贡献接近全球数据中心用电增长的 80%；数据中心虽然只占全球用电增长的一小部分，但高度集中，会放大局部电网压力。
2. **高端硬件**：GPU/ASIC、HBM、先进制程、先进封装、EUV 光刻、AI 网络互连。NVIDIA、TSMC、ASML、SK hynix、Broadcom 等公司的壁垒来自工艺、生态、客户绑定和产能。
3. **企业级 AI 变现入口**：云服务、数据平台、工作流 SaaS、行业应用。云厂商通过“算力 + 模型 + 数据 + 安全 + 开发工具”形成集成优势；应用层则由 Salesforce、ServiceNow、Adobe、Palantir、Microsoft 等把 AI 嵌入现有业务流程。

更科学的 AI 产业分类建议如下：

| 层级 | 关键问题 | 价值来源 |
|---|---|---|
| 能源与电网 | 能不能供电、何时并网、用什么电源 | 电力长期合约、核电/燃气/可再生能源、并网能力 |
| 数据中心与工程设施 | 能不能把高密度机柜快速、安全地建起来 | 土地、电力容量、液冷、UPS、配电、施工交付 |
| 半导体设计与制造 | 能不能生产更高性能/更低功耗芯片 | GPU/ASIC、EDA、IP、设备、先进制程、先进封装、HBM |
| 系统硬件与网络 | 能不能把芯片变成可规模化运行的 AI 集群 | AI 服务器、机架级系统、交换机、光模块、存储 |
| 云与算力运营 | 企业能不能低门槛获得算力和模型服务 | IaaS、GPU 云、AI PaaS、自研芯片、全球区域 |
| 模型与 AI 中间件 | 能不能把基础模型变成可控、可评估、可接入业务的能力 | 基础模型、Agent 框架、RAG、向量/数据平台、MLOps |
| 应用与行业解决方案 | AI 是否真正进入业务流程并产生 ROI | CRM、ITSM、办公、设计、数据分析、金融、医疗、制造、代码工具 |
| 安全、治理与数据权属 | 能不能安全合规地使用 AI | 模型治理、权限、审计、隐私、内容来源和反爬 |

## 2. 总体趋势判断

### 2.1 电力成为 AI 产业的“第一约束”

AI 扩张的表面瓶颈是 GPU，深层瓶颈是电力和并网时间。IEA 的 2025 年《Energy and AI》报告显示，美国数据中心用电到 2030 年相对 2024 年增加约 240 TWh，中国增加约 175 TWh，欧洲增加超过 45 TWh，日本增加约 15 TWh。IEA 同时强调，数据中心用电增长占 2024-2030 年全球电力需求增长不到 10%，但由于数据中心高度集中，局部电网压力比全球占比更重要。

电源结构上，IEA 预计 2024-2030 年可再生能源满足接近 50% 的新增数据中心用电需求，但天然气和煤电合计仍将满足超过 40% 的新增需求；美国短期新增供电中天然气非常关键，2030 年以后核电和 SMR 的作用提升。

### 2.2 AI 资本开支从“芯片采购”升级为“AI 工厂建设”

2024-2026 年的资本开支不再只是购买 GPU，而是围绕“AI factory”建设一整套生产系统：供电、冷却、机柜、网络、存储、调度、模型服务和应用入口。NVIDIA FY2026 Q4 数据中心收入达 623 亿美元，全年数据中心收入 1937 亿美元；Amazon 在 2025 年 Q4 财报中表示 2026 年资本开支约 2000 亿美元，并强调 Trainium、Graviton、自研模型和 Bedrock AgentCore；Microsoft FY2026 Q2 Azure 和其他云服务收入增长 39%；Omdia/Canalys 估计 2025 Q1 全球云基础设施支出 909 亿美元，同比增长 21%，前三大云厂商 AWS、Azure、Google Cloud 合计占 65%。

### 2.3 硬件层的利润池集中在“稀缺产能 + 系统生态”

GPU 只是显性产品，真正的壁垒由 CUDA/软件生态、NVLink/网络、HBM 供应、先进封装、CoWoS、供应链管理共同构成。TSMC 年报显示 3nm 需求由智能手机和 HPC 驱动，2024 年占晶圆收入 18%，并继续扩张 3nm、2nm 和 CoWoS 产能。ASML 是先进光刻核心供应商，2025 年交付 48 台 EUV 系统。SK hynix 2025 年 HBM 收入同比翻倍，并表示 HBM4 已进入大规模生产以满足客户需求。

### 2.4 应用层的胜负取决于“工作流入口 + 私有数据 + 分发”

基础模型能力快速扩散后，应用层壁垒不再只是“接入一个模型”，而是：

- 已有客户和工作流入口，例如 Salesforce CRM、ServiceNow ITSM/工作流、Adobe 创意工具、Microsoft 365。
- 私有数据与权限体系，例如 Palantir 的 AIP/Foundry、Snowflake 的 Cortex AI、Databricks 的 Unity Catalog/Lakehouse。
- 合规、安全、审计与可控性，例如 Adobe 强调 Firefly 使用授权内容和公有领域内容训练，面向企业的“商业安全”定位。

## 3. 分层产业图谱与代表公司

### 3.1 能源、电力与电网

| 方向 | 公司 / 股票代码 | 相关 AI 业务内容 | 核心竞争壁垒 |
|---|---|---|---|
| 核电与清洁基荷电力 | Constellation Energy / `CEG` | 美国最大核电运营商之一；通过 Crane Clean Energy Center 重启项目与 Microsoft 20 年 PPA 支持数据中心供电；Calpine 子公司也与 CyrusOne 签署数据中心供电协议。 | 核电牌照、现有反应堆资产、长周期运维经验、与 hyperscaler 签长期 PPA 的能力。 |
| 燃气与综合发电 | Vistra / `VST` | 美国独立发电商，拥有天然气、煤电、核电和储能资产；受益于 ERCOT 等区域数据中心负载增长。 | 调峰电源、现有机组、区域电力市场交易能力。 |
| 可再生能源与储能 | NextEra Energy / `NEE` | 风电、太阳能、储能和公用事业电力供应，是大型企业 PPA 的重要对手方。 | 开发管线、并网和项目融资能力、公用事业监管资产。 |
| 发电设备与电网设备 | GE Vernova / `GEV` | 燃气轮机、核电、风电、电网设备；Chevron 与 Engine No.1 计划用 GE Vernova 设备为美国数据中心提供 behind-the-meter 电力。 | 大型燃机装机基础、服务网络、电网/发电设备组合。 |
| 油气巨头与现场供电 | Chevron / `CVX`; Exxon Mobil / `XOM` | 通过天然气、现场发电、低碳业务探索数据中心供电；Chevron 已公开与 GE Vernova、Engine No.1 推进数据中心供电方案。 | 天然气资源、项目开发、资本实力、能源交易与工程能力。 |
| 铀矿与核燃料 | Cameco / `CCJ` / `CCO.TO` | 核电复兴和 SMR 预期推升铀与核燃料链条重要性；Cameco 也持有 Westinghouse 权益。 | 高品位铀矿、长期合同、核燃料周期资产。 |
| SMR / 新核能 | Oklo / `OKLO`; NuScale / `SMR` | 面向未来数据中心的模块化核电方案，仍处商业化早期。 | 监管审批、反应堆设计、燃料获取、项目融资。风险也最高。 |
| 配电与电气设备 | Eaton / `ETN`; Schneider Electric / `SU.PA` / `SBGSY`; Siemens Energy / `ENR.DE` | 变压器、开关柜、UPS、配电、能效管理、微电网和数据中心电气系统。 | 产品认证、供货周期、工程渠道、全球服务网络。 |
| 电网工程建设 | Quanta Services / `PWR` | 输配电工程、变电站、可再生能源接入、数据中心相关电力基础设施施工。 | 熟练工队伍、项目管理、公共事业客户关系、地域覆盖。 |

判断：这一层最像“资源与施工能力”行业，短期由并网排队、燃气轮机交期、变压器短缺驱动；中长期由核电重启、SMR 可行性、可再生能源 + 储能和数据中心灵活负载决定。

### 3.2 数据中心、液冷与物理基础设施

| 方向 | 公司 / 股票代码 | 相关 AI 业务内容 | 核心竞争壁垒 |
|---|---|---|---|
| 零售托管与互联数据中心 | Equinix / `EQIX` | IBX 数据中心、互联、Equinix Fabric；AI 生态连接模型商、云、企业数据。 | 全球互联节点、客户生态、网络中立性、跨云连接。 |
| 批发/超大规模数据中心 | Digital Realty / `DLR` | 大型数据中心园区、批发托管、跨区域部署。 | 土地、电力容量、全球园区、长期客户合约。 |
| AI GPU 云数据中心运营 | CoreWeave / `CRWV` | AI-native GPU 云，面向 OpenAI、企业和政府客户；2025 年上市后继续扩张。 | GPU 供应、调度平台、与 NVIDIA 生态绑定、快速建设能力；同时杠杆和客户集中度较高。 |
| 电源与热管理 | Vertiv / `VRT` | UPS、配电、机柜、液冷、热管理；2025 年报明确 AI 和高密度计算推动需求。 | 数据中心电源/热管理全套产品、液冷能力、交付和服务网络。 |
| 数据中心工程与冷却 | Johnson Controls / `JCI`; Carrier / `CARR`; Trane Technologies / `TT` | HVAC、冷机、楼宇自动化、热管理。 | 工程渠道、设备可靠性、维保网络。 |
| 机柜级 AI 服务器 | Dell Technologies / `DELL`; Super Micro Computer / `SMCI`; Hewlett Packard Enterprise / `HPE` | AI 服务器、NVIDIA/AMD 平台集成、机架级系统、企业 AI factory。Dell FY2026 全年 AI 优化服务器订单超过 640 亿美元。 | 供应链、客户渠道、系统集成、认证和售后。 |
| 网络与数据中心交换 | Arista Networks / `ANET`; Cisco / `CSCO` | 以太网 AI 集群网络、云数据中心交换、网络操作系统。 | EOS/软件质量、云大客户关系、低延迟高可靠产品。 |

判断：数据中心不只是房地产。AI 机柜功率密度显著高于传统云，液冷、配电、变压器、光纤、网络和运维软件成为决定交付速度的关键。

### 3.3 半导体设计、制造、设备与材料

#### 3.3.1 EDA、IP 与设计工具

| 公司 / 股票代码 | 相关 AI 业务内容 | 核心竞争壁垒 |
|---|---|---|
| Synopsys / `SNPS` | EDA、验证、半导体 IP；推动 Synopsys.ai 和 AgentEngineer 类设计自动化。 | EDA 工具链深度绑定芯片设计流程，客户切换成本极高，IP 库和验证工具协同。 |
| Cadence / `CDNS` | EDA、系统设计、验证、Cerebrus/ChipStack 等 AI 辅助芯片设计。 | 大客户长期绑定、数字/模拟/封装协同、设计数据和方法学沉淀。 |
| Arm Holdings / `ARM` | CPU IP、Neoverse 数据中心架构、终端 AI SoC IP。 | 生态授权模式、低功耗架构、软件兼容性。 |
| Siemens / `SIE.DE` | EDA、工业软件、仿真、数字孪生。 | 工业客户基础、仿真与制造软件组合。 |

#### 3.3.2 半导体设备与制造

| 公司 / 股票代码 | 相关 AI 业务内容 | 核心竞争壁垒 |
|---|---|---|
| ASML / `ASML` | EUV/DUV 光刻，是先进制程的关键设备供应商；2025 年交付 48 台 EUV 系统。 | EUV 技术近乎唯一供应、供应链复杂度、客户共同开发、服务网络。 |
| Applied Materials / `AMAT` | 薄膜沉积、刻蚀、材料工程设备。 | 覆盖多个关键工艺步骤，客户粘性强，材料工程能力。 |
| Lam Research / `LRCX` | 刻蚀、沉积、清洗，受益于 3D NAND、先进逻辑和封装。 | 高深宽比刻蚀、工艺配方、装机服务收入。 |
| KLA / `KLAC` | 缺陷检测、量测和制程控制。 | 良率爬坡关键工具，算法和检测数据库。 |
| Tokyo Electron / `8035.T` | 涂胶显影、刻蚀、沉积、清洗等半导体设备。 | 日本精密设备供应链、客户关系、工艺覆盖广。 |
| TSMC / `TSM` / `2330.TW` | 先进晶圆代工、3nm/2nm、CoWoS 先进封装；AI GPU/ASIC 的核心制造平台。 | 工艺良率、客户信任、先进封装产能、资本开支规模。 |
| Samsung Electronics / `005930.KS` | 存储、晶圆代工、先进封装、消费终端。 | 存储 + 代工垂直整合、资本实力、全球制造。 |
| Intel / `INTC` | CPU、Gaudi/AI 加速器、Intel Foundry、先进封装。 | x86 生态、封装技术、美国本土制造战略地位；执行风险较高。 |
| ASE / `ASX` / `3711.TW`; Amkor / `AMKR` | OSAT、先进封装、测试。 | 封装产能、良率、客户认证、全球工厂布局。 |

#### 3.3.3 AI 芯片、内存与互连

| 公司 / 股票代码 | 相关 AI 业务内容 | 核心竞争壁垒 |
|---|---|---|
| NVIDIA / `NVDA` | GPU、NVLink/NVSwitch、InfiniBand/Ethernet、CUDA、DGX、AI Enterprise、模型和推理软件；FY2026 数据中心全年收入 1937 亿美元。 | CUDA 生态、系统级产品、网络互连、开发者和云厂商锁定、供应链掌控。 |
| AMD / `AMD` | Instinct MI300/MI350、EPYC CPU、ROCm、Pensando 网络，向开放 AI 基础设施推进。 | CPU + GPU + NIC 组合、开放软件栈、性价比和 hyperscaler 认证。 |
| Broadcom / `AVGO` | 定制 AI ASIC、以太网交换芯片、SerDes、光互连；2025 Q4 AI 半导体收入同比增长 74%。 | 定制 ASIC 客户关系、网络芯片、IP 模块、执行和并购整合能力。 |
| Marvell / `MRVL` | 定制硅、光 DSP、硅光、数据中心互连。 | 高速模拟/光互连、定制芯片设计、大客户项目。 |
| Qualcomm / `QCOM` | 端侧 AI SoC、手机/PC/汽车 AI 推理。 | 低功耗 SoC、无线通信专利、终端生态。 |
| MediaTek / `2454.TW` | 手机、智能设备和边缘 AI 芯片。 | 成本效率、安卓终端生态、量产能力。 |
| SK hynix / `000660.KS` | HBM、DDR5、eSSD；2025 年 HBM 收入同比翻倍，HBM4 进入大规模生产。 | HBM 技术、客户认证、良率、先进封装协同。 |
| Micron / `MU` | HBM、DRAM、NAND、企业 SSD；计划扩大美国 DRAM、R&D 和 HBM 先进封装投资。 | 存储工艺、美国制造战略地位、企业和数据中心产品组合。 |

判断：芯片层不是“谁设计 GPU”一个问题，而是 EDA、IP、设备、先进制程、封装、HBM、互连、系统软件共同决定的复合壁垒。投资和竞争风险也来自出口管制、客户集中、周期性和技术路线切换。

### 3.4 云服务与算力运营层

| 公司 / 股票代码 | 相关 AI 业务内容 | 核心竞争壁垒 |
|---|---|---|
| Amazon / `AMZN` | AWS、Bedrock、SageMaker、Trainium/Inferentia、Graviton、自研 Nova 模型；2025 Q4 财报披露 2026 年约 2000 亿美元资本开支计划，Bedrock 支持多模型和 AgentCore。 | 全球云规模、开发者生态、自研芯片、企业客户、成本优化能力。 |
| Microsoft / `MSFT` | Azure AI、OpenAI 深度合作、Microsoft 365 Copilot、GitHub Copilot、Fabric；FY2026 Q2 Azure 和其他云服务收入增长 39%。 | 企业分发、Office/GitHub/Windows/Teams 入口、OpenAI 关系、合规和安全能力。 |
| Alphabet / `GOOGL` / `GOOG` | Google Cloud、TPU、Vertex AI、Gemini、AI 搜索和广告系统。 | TPU 全栈、搜索和 YouTube 数据/分发、基础研究、全球网络。 |
| Oracle / `ORCL` | OCI、数据库云、GPU 集群、AI 数据库；FY2026 Q3 云收入 89.14 亿美元，同比增长 44%。 | 数据库客户基础、OCI 网络架构、与 NVIDIA/模型公司的大规模合同。 |
| Alibaba / `BABA` / `9988.HK` | 阿里云、通义千问/Qwen、AI 云服务，中国市场领先云厂商。 | 中国云市场、开源模型生态、算力调度和本土客户。 |
| Tencent / `0700.HK` / `TCEHY` | 腾讯云、混元模型、游戏/社交/企业服务。 | 社交和内容生态、游戏云、企业连接。 |
| CoreWeave / `CRWV` | 专注 GPU 云和 AI-native 云。 | NVIDIA 资源、垂直化调度、AI 客户；同时面临资本密集和客户集中。 |
| Nebius / `NBIS` | 欧洲/国际 AI 云基础设施。 | 区域合规、GPU 云建设、欧洲客户需求。 |
| Cloudflare / `NET` | Workers AI、AI Gateway、边缘网络、安全和内容控制。 | 全球边缘网络、开发者平台、安全流量数据。 |

判断：云服务层的核心竞争不是“谁有 GPU”，而是谁能把算力、模型、数据、安全、计费、区域合规和开发者体验打包成可规模化服务。自研芯片会成为降低推理成本的关键变量。

### 3.5 基础模型、AI 平台与中间件

| 公司 / 股票代码 | 相关 AI 业务内容 | 核心竞争壁垒 |
|---|---|---|
| OpenAI / 未上市 | ChatGPT、API、企业版、模型和 Agent 工具；2025 年公开报道称年化收入达到 100 亿美元。 | 品牌、模型能力、开发者生态、Microsoft/Azure 分发、消费者和企业入口。 |
| Anthropic / 未上市 | Claude、Claude Enterprise、Claude Code、企业安全定位。 | 模型安全品牌、企业代码/办公场景渗透、AWS/Google/其它云资源支持。 |
| Google DeepMind / `GOOGL` | Gemini、TPU、搜索/安卓/Workspace 集成、科学 AI。 | 研究能力、TPU、全球产品分发、数据和基础设施。 |
| Meta / `META` | Llama 开源模型、AI 推荐、广告系统、AI 眼镜和消费入口。 | 社交分发、广告数据、开源生态、资本开支规模。 |
| xAI / 未上市 | Grok、X 平台数据入口、AI 基础设施。 | X 分发、资本和算力投入、快速产品迭代；治理与商业化仍在验证。 |
| Mistral AI / 未上市 | 欧洲基础模型、开源/商业模型。 | 欧洲主权 AI 叙事、轻量高效模型、企业和政府关系。 |
| DeepSeek / 未上市 | 高效率开源/开放权重模型和推理优化。 | 成本效率、工程优化、开源传播。 |
| Hugging Face / 未上市 | 模型社区、模型托管、数据集、推理和企业工具。 | 开发者社区、模型分发入口、开源生态。 |
| Databricks / 未上市 | Lakehouse、Unity Catalog、MosaicML、Agent Bricks、Lakebase；2025 年披露收入 run-rate 超过 48 亿美元，AI 产品 run-rate 超过 10 亿美元。 | 数据 + AI 一体化、治理、开源生态、企业客户。 |
| Snowflake / `SNOW` | AI Data Cloud、Cortex AI、Snowpark、数据共享和治理。 | 企业数据驻留、治理和权限、消费计费、生态合作。 |
| MongoDB / `MDB` | 文档数据库、向量搜索、开发者数据平台。 | 开发者生态、应用数据入口、灵活数据模型。 |
| Elastic / `ESTC` | 搜索、向量检索、可观测性与安全。 | 搜索技术、企业部署基础、检索增强生成场景适配。 |

判断：模型层会持续竞争，但中间件和数据平台可能获得更稳定的企业预算，因为企业真正需要的是“模型访问 + 自有数据 + 权限 + 评估 + 审计 + 成本控制”。

### 3.6 应用层：SaaS、企业工作流与垂直 AI

| 方向 | 公司 / 股票代码 | 相关 AI 业务内容 | 核心竞争壁垒 |
|---|---|---|---|
| CRM / Agent | Salesforce / `CRM` | Agentforce、Data 360、Slack；FY2026 披露 Agentforce 和 Data 360 ARR 超过 29 亿美元。 | CRM 数据、销售/客服流程、生态伙伴、企业客户续约。 |
| 工作流 / ITSM | ServiceNow / `NOW` | ServiceNow AI Platform、AI Agent Fabric、AI Control Tower、Now Assist。 | 工作流系统入口、IT/HR/客服流程数据、企业级治理。 |
| 办公与生产力 | Microsoft / `MSFT` | Microsoft 365 Copilot、Teams、GitHub Copilot、Dynamics AI。 | Office 和 GitHub 分发、企业身份和权限、Azure 后端。 |
| 创意与营销 | Adobe / `ADBE` | Firefly、GenStudio、Creative Cloud AI；强调授权内容和公有领域内容训练、商业安全。 | 创意工具标准地位、内容资产、企业营销工作流。 |
| 数据决策与政府/国防 | Palantir / `PLTR` | AIP、Foundry、Apollo，将 LLM 接入受控数据和操作流程。 | 高安全客户、政府/国防关系、复杂数据集成、部署能力。 |
| 财税与中小企业 | Intuit / `INTU` | TurboTax、QuickBooks、Credit Karma 中嵌入 AI 助手和自动化。 | 财税数据、SMB 分发、合规场景。 |
| 人力资源 | Workday / `WDAY` | HR、财务系统中的 AI 助手、技能图谱、招聘和财务自动化。 | HR/财务核心系统数据、企业客户黏性。 |
| 自动化/RPA | UiPath / `PATH` | Agentic automation、RPA 与 AI Agent 结合。 | 自动化流程库、企业部署经验、系统连接器。 |
| 网络安全 | CrowdStrike / `CRWD`; Palo Alto Networks / `PANW`; Zscaler / `ZS` | 安全 Copilot/Agent、威胁检测、自动响应、身份和云安全。 | 安全遥测数据、客户部署深度、实时响应网络。 |
| 代码开发 | GitHub / `MSFT`; GitLab / `GTLB`; Atlassian / `TEAM` | 代码生成、代码审查、DevSecOps、项目协作 AI。 | 开发者工作流入口、代码和 issue 数据、CI/CD 集成。 |
| 教育与消费 | Duolingo / `DUOL`; Meta / `META`; Alphabet / `GOOGL` | AI 教学、AI 搜索、AI 推荐、AI 眼镜和消费助手。 | 用户规模、个性化数据、内容生态。 |
| 自动驾驶/机器人 | Tesla / `TSLA`; Alphabet Waymo / `GOOGL`; NVIDIA / `NVDA` | 自动驾驶、机器人、仿真、边缘推理。 | 数据闭环、传感器/车队规模、模型和硬件垂直整合。 |

判断：应用层会出现大量创业公司，但最强壁垒通常来自既有工作流入口，而不是单点模型能力。企业客户更愿意购买能直接嵌入 CRM、ITSM、办公、数据仓库和安全系统的 AI。

## 4. 各层级竞争壁垒总结

| 层级 | 核心壁垒 | 脆弱点 |
|---|---|---|
| 能源与电网 | 电源资产、并网容量、PPA、监管牌照、工程交付 | 政策、燃料价格、地方反对、并网排队、环保约束 |
| 数据中心 | 土地、电力、冷却、客户合约、施工速度 | 资本开支巨大、利用率风险、技术更新导致机房设计迭代 |
| 芯片设备/制造 | 工艺良率、设备垄断、先进封装、客户认证 | 周期性、出口管制、地缘政治、单一客户依赖 |
| GPU/ASIC/HBM | 软件生态、内存带宽、互连、系统级设计 | 替代芯片、自研 ASIC、产能错配、价格下行 |
| 云服务 | 全球规模、区域合规、开发者生态、自研芯片 | 资本开支压力、算力闲置、价格竞争 |
| 模型平台 | 模型质量、品牌、开发者、推理成本、安全 | 模型商品化、开源追赶、监管和版权 |
| 数据平台 | 数据驻留、权限治理、生态连接、消费计费 | 云厂商内置功能竞争、客户成本优化 |
| SaaS 应用 | 工作流入口、客户数据、分发渠道、行业模板 | AI 原生竞争者、客户压价、功能被平台内置 |

## 5. 未来 3-5 年关键变量

1. **推理需求能否兑现资本开支**：训练大模型是阶段性需求，推理和 Agent 才是长期用量来源。若企业应用 ROI 慢，云和 GPU 租赁价格可能承压。
2. **电力和并网时间是否成为比 GPU 更硬的约束**：美国、中国、欧洲和日本的 AI 数据中心扩张都受区域电网约束影响。
3. **NVIDIA 生态是否被 ASIC 和开放网络分流**：Broadcom、Marvell、Google TPU、AWS Trainium、Microsoft Maia 等会在特定大客户和推理场景分走部分经济性需求，但 NVIDIA 的系统生态仍是标杆。
4. **HBM 和先进封装供需是否缓解**：HBM4、CoWoS、SoIC、2.5D/3D 封装是下一代 AI 芯片性能和交付节奏的关键。
5. **企业 AI 应用能否从“试点”进入“生产系统”**：Salesforce、ServiceNow、Microsoft、Adobe、Palantir 等的指标值得关注：AI ARR、Agent 使用量、客户扩展、毛利率变化。
6. **监管、版权和数据权属**：训练数据来源、内容授权、AI 爬虫、隐私和行业监管会影响模型层和应用层商业模式。

## 6. 结论

AI 产业图景最重要的变化，是价值链从“互联网软件”向“工业基础设施 + 半导体 + 云 + 软件”的复合体系扩展。越靠底层，壁垒越偏资源、工程、资本和供应链；越靠上层，壁垒越偏客户入口、数据、工作流和分发。

如果用一句话概括：**AI 的短期胜负在算力和电力，中期胜负在推理成本和数据中心交付，长期胜负在能否把 AI 稳定嵌入企业和消费者的高频工作流。**

## 7. 主要参考资料

- IEA, [Energy demand from AI](https://www.iea.org/reports/energy-and-ai/energy-demand-from-ai)
- IEA, [Energy supply for AI](https://www.iea.org/reports/energy-and-ai/energy-supply-for-ai)
- NVIDIA, [Q4 and Fiscal 2026 Results](https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-Announces-Financial-Results-for-Fourth-Quarter-and-Fiscal-2026/)
- TSMC, [2024 Annual Report](https://investor.tsmc.com/static/annualReports/2024/english/index.html)
- ASML, [2025 Annual Report](https://www.asml.com/en/investors/annual-report/2025)
- Omdia/Canalys, [Global cloud infrastructure spending rose 21% in Q1 2025](https://omdia.tech.informa.com/pr/2025/jun/global-cloud-infrastructure-spending-rose-21percent-in-q1-2025)
- Microsoft, [FY2026 Q2 Earnings Release](https://www.microsoft.com/en-us/Investor/earnings/FY-2026-Q2/press-release-webcast)
- Amazon, [Q4 2025 Earnings Release](https://s2.q4cdn.com/299287126/files/doc_earnings/2025/q4/earnings-result/AMZN-Q4-2025-Earnings-Release.pdf)
- Oracle, [FY2026 Q3 Financial Results](https://investor.oracle.com/investor-news/news-details/2026/Oracle-Announces-Fiscal-Year-2026-Third-Quarter-Financial-Results/default.aspx)
- Broadcom, [Q4 and Fiscal Year 2025 Results](https://investors.broadcom.com/node/63716/pdf)
- SK hynix, [FY2025 Financial Results](https://news.skhynix.com/sk-hynix-announces-fy25-financial-results/)
- Micron, [Expanded U.S. Investments in DRAM, R&D and HBM](https://micron.gcs-web.com/news-releases/news-release-details/micron-and-trump-administration-announce-expanded-us-investments)
- Vertiv, [2025 Annual Report](https://s205.q4cdn.com/554782763/files/doc_financials/2025/ar/Vertiv-2025-Annual-Report.pdf)
- Constellation Energy, [Q4 and Full Year 2025 Results](https://investors.constellationenergy.com/news-releases/news-release-details/constellation-reports-fourth-quarter-and-full-year-2025-results)
- CoreWeave, [Q4 and Fiscal Year 2025 Results](https://investors.coreweave.com/news/news-details/2026/CoreWeave-Reports-Strong-Fourth-Quarter-and-Fiscal-Year-2025-Results/default.aspx)
- Salesforce, [Q4 Fiscal 2026 Results](https://investor.salesforce.com/news/news-details/2026/Salesforce-Delivers-Record-Fourth-Quarter-Fiscal-2026-Results/default.aspx)
- ServiceNow, [ServiceNow AI Platform Announcement](https://newsroom.servicenow.com/press-releases/details/2025/ServiceNow-Unveils-the-New-ServiceNow-AI-Platform-to-Put-Any-AI-Any-Agent-Any-Model-to-Work-Across-the-Enterprise/default.aspx)
- Adobe, [2025 Annual Report](https://www.adobe.com/cc-shared/assets/investor-relations/pdfs/adbe-2025-annual-report.pdf)
- Databricks, [Revenue run-rate and Series L announcement](https://www.prnewswire.com/news-releases/databricks-grows-55-yoy-surpasses-4-8b-revenue-run-rate-and-is-raising-4b-series-l-at-134b-valuation-302643445.html)
- Snowflake, [2025 Annual Report and Proxy](https://s26.q4cdn.com/463892824/files/doc_financials/2025/ar/Snowflake-2025-Annual-Report-and-Proxy-Web-Version.pdf)
