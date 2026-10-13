/**
 * Google Master - Application Engine
 * Manages Intent-to-Pipeline Synthesis, Ecosystem Tool Catalog, and Bilingual (EN/KO) Prompt Forge
 */

// Global Language State
let currentLang = localStorage.getItem('google_master_lang') || 'en';
let currentCategory = 'all';

// Translations Dictionary
const I18N = {
  en: {
    heroTag: "✨ Autonomous AI Development Orchestrator",
    heroTitle: `Google AI Ecosystem × <span class="text-gradient">Antigravity</span>`,
    heroDesc: `Not just a static list of tools. Describe your vision, and Antigravity orchestrates <strong>Stitch, NotebookLM, Gemma, AI Studio, Veo</strong> into a streamlined 5-phase engineering roadmap.`,
    guideStep1: "💡 Pick a preset or enter your idea",
    guideStep2: "📋 1-Click copy tailored prompts across 5 phases",
    guideStep3: "🚀 Paste into Google console & start building!",
    synthTitle: "Intent-to-Pipeline Router",
    synthBadge: "Autonomous Skill Orchestration",
    synthPlaceholder: "What app or service do you want to build? (e.g. On-device AI doc summarizer webapp)",
    btnGenerate: "🚀 Generate Pipeline",
    statusPill: ".agents/skills active",
    sectionTitle: "Google AI Tools Catalog & Antigravity Pairing",
    sectionDesc: "15 Google AI tools integrated with Antigravity across UI design, backend infra, RAG, and creative media.",
    tabAll: "All Tools",
    tabUi: "🎨 UI & Frontend",
    tabInfra: "⚙️ Dev Infra & Models",
    tabWorkspace: "📊 Workspace",
    tabResearch: "🧠 Knowledge & RAG",
    tabMedia: "🎬 Creative & Media",
    tabUtility: "🔒 Utility",
    modalLabel: "Synthesized prompt ready for copy & paste (editable):",
    modalCancel: "Cancel",
    modalCopy: "📋 Copy Prompt",
    toastCopied: "Prompt copied to clipboard!",
    tipLabel: "Antigravity Pairing Tip",
    btnAssemblePrompt: "✨ Assemble Prompt",
    btnOpenConsole: "↗ Open Console",
    pipelineAntigravityLabel: "🛠️ Antigravity:",
    btnViewPrompt: "✨ View Optimized Prompt",
    btnCopyPrompt: "📋 Copy Prompt",
    defaultIntent: "Modern AI Web Application"
  },
  ko: {
    heroTag: "✨ Autonomous AI Development Orchestrator",
    heroTitle: `구글 AI 생태계 × <span class="text-gradient">Antigravity</span>`,
    heroDesc: `단순한 도구 모음이 아닙니다. 당신이 만들고 싶은 개발 아이디어를 입력하면, Antigravity가 <strong>Stitch, NotebookLM, Gemma, AI Studio, Veo</strong>를 연결하여 최적의 5단계 파이프라인을 자동 완성합니다.`,
    guideStep1: "💡 아이디어 입력 or 프리셋 선택",
    guideStep2: "📋 단계별 최적화 프롬프트 1클릭 복사",
    guideStep3: "🚀 구글 콘솔로 이동해 붙여넣고 제작!",
    synthTitle: "개발 의도 라우터 (Intent-to-Pipeline)",
    synthBadge: "자율 스킬 오케스트레이션",
    synthPlaceholder: "어떤 앱이나 서비스를 개발하고 싶으신가요? (예: 온디바이스 AI 문서 요약 웹앱)",
    btnGenerate: "🚀 파이프라인 생성",
    statusPill: ".agents/skills 활성화됨",
    sectionTitle: "구글 AI 도구 카탈로그 & Antigravity 연계 팁",
    sectionDesc: "프론트엔드 디자인부터 인프라, 지식 RAG, 미디어 생성까지 안티그래비티와 결합할 수 있는 15개 구글 AI 툴킷.",
    tabAll: "전체보기 (All)",
    tabUi: "🎨 웹/앱 디자인 & UI",
    tabInfra: "⚙️ 개발 인프라 & 모델",
    tabWorkspace: "📊 워크스페이스",
    tabResearch: "🧠 지식 & 리서치",
    tabMedia: "🎬 미디어 & 크리에이티브",
    tabUtility: "🔒 유틸리티",
    modalLabel: "자동 조립된 최적화 프롬프트 (수정 가능):",
    modalCancel: "취소",
    modalCopy: "📋 프롬프트 복사",
    toastCopied: "프롬프트가 클립보드에 복사되었습니다!",
    tipLabel: "Antigravity 연계 팁",
    btnAssemblePrompt: "✨ 프롬프트 조립",
    btnOpenConsole: "↗ 콘솔 바로가기",
    pipelineAntigravityLabel: "🛠️ Antigravity:",
    btnViewPrompt: "✨ 최적화 프롬프트 보기",
    btnCopyPrompt: "📋 프롬프트 복사",
    defaultIntent: "모던 웹 애플리케이션"
  }
};

// Presets Data (Bilingual)
const PRESETS = [
  {
    name_en: '📱 On-device AI Doc Summarizer & Podcast',
    name_ko: '📱 온디바이스 AI 문서 요약 & 팟캐스트 앱',
    text_en: 'Private on-device document summarizer & audio podcast generator webapp running Gemma 9B locally with zero cloud API cost',
    text_ko: '로컬 PC에서 비용 없이 구동되는 Gemma 9B 기반의 문서 요약 및 NotebookLM 스타일 오디오 팟캐스트 생성 웹앱'
  },
  {
    name_en: '🎨 Realtime Canvas & Modern SaaS Dashboard',
    name_ko: '🎨 실시간 캔버스 & 모던 SaaS 대시보드',
    text_en: 'Real-time interactive analytics SaaS dashboard featuring Google Stitch glassmorphic UI integrated with Gemini Web Code Canvas',
    text_ko: '구글 Stitch로 빠르게 뽑은 글래스모피즘 UI와 Gemini Web Code Canvas를 연동한 실시간 데이터 분석 SaaS 플랫폼'
  },
  {
    name_en: '📊 Google Sheets & BigData Automation Agent',
    name_ko: '📊 구글 시트 & 빅데이터 분석 자동화 에이전트',
    text_en: 'Autonomous background agent utilizing Workspace Gemini and Gemini 1.5 Pro to automatically parse complex spreadsheets and publish client reports',
    text_ko: 'Workspace Gemini와 Gemini 1.5 Pro를 연계하여 복잡한 스프레드시트 수식을 자동 생성하고 리포트를 발행하는 백그라운드 에이전트'
  },
  {
    name_en: '🎬 Cinematic AI Video Release Showcase',
    name_ko: '🎬 AI 비디오 & 시네마틱 릴리즈 쇼케이스',
    text_en: 'Interactive web product launch showcase combining Veo 4K cinematic background videos and Google Vids presentation walkthroughs',
    text_ko: 'Veo 시네마틱 영상과 Google Vids 프레젠테이션을 결합한 신규 웹 서비스 인터랙티브 런칭 쇼케이스 페이지'
  }
];

// 15 Google Tools Catalog (Bilingual)
const GOOGLE_TOOLS = [
  // UI & Frontend
  {
    id: 'stitch',
    name: 'Google Stitch',
    category: 'ui',
    categoryName_en: 'UI & Frontend',
    categoryName_ko: '웹/앱 디자인 & UI',
    desc_en: 'Rapidly generates responsive UI designs and semantic HTML/CSS code directly from text prompts or sketches.',
    desc_ko: '프롬프트나 스케치만으로 반응형 UI 디자인과 시맨틱 HTML/CSS 코드를 즉시 생성하는 프론트엔드 비주얼 툴.',
    tip_en: 'Use the google-stitch-ui skill to structure high-fidelity Stitch prompts, then import raw HTML/CSS into modular components.',
    tip_ko: 'google-stitch-ui 스킬을 통해 Stitch 전용 UI 프롬프트를 조립하고, 추출된 코드를 프로젝트 컴포넌트로 자동 변환합니다.',
    skill: 'google-stitch-ui',
    link: 'https://stitch.withgoogle.com',
    prompt_en: `[Role & Goal]: Senior Frontend Engineer. Design a modern, responsive UI for {INTENT} and output semantic HTML and CSS.\n[Design Theme]: Deep dark mode, refined glassmorphism, HSL blue/purple accents, sleek typography.\n[Components]: Slim navigation bar, 3 key metric cards with KPI badges, interactive data container, call-to-action buttons.`,
    prompt_ko: `[Role & Goal]: 전문 프론트엔드 엔지니어. 최신 트렌드의 {INTENT} 반응형 UI를 디자인하고 깨끗한 HTML/CSS 코드로 출력해 줘.\n[Theme]: 다크 모드, 세련된 글래스모피즘, 정제된 HSL 블루/퍼플 팔레트, 모던 타이포그래피.\n[Components]: 헤더 내비게이션, 핵심 메트릭 카드 3개, 인터랙티브 데이터 영역, 액션 버튼 패널.`
  },
  {
    id: 'idx',
    name: 'Project IDX',
    category: 'ui',
    categoryName_en: 'UI & Frontend',
    categoryName_ko: '웹/앱 디자인 & UI',
    desc_en: 'Browser-based cloud IDE with Gemini code assistance and multiplatform (Web, Android) built-in emulators.',
    desc_ko: '브라우저 기반 클라우드 개발 환경. Gemini 코드 어시스턴트와 멀티플랫폼(Web, Android) 에뮬레이터가 내장.',
    tip_en: 'Ideal for instant zero-setup cross-device previewing and cloud deployment workflows.',
    tip_ko: '로컬 환경 구축 없이 즉시 클라우드 상에서 크로스 플랫폼 렌더링 및 디바이스 프리뷰를 수행할 때 연계합니다.',
    skill: 'google-master',
    link: 'https://idx.google.com',
    prompt_en: `Initialize a full-stack template environment for {INTENT} and activate responsive web and mobile emulators.`,
    prompt_ko: `{INTENT} 프로젝트를 위한 풀스택 템플릿 환경을 초기화하고, 반응형 브라우저 및 모바일 에뮬레이터를 활성화해 줘.`
  },
  {
    id: 'code-canvas',
    name: 'Gemini Web Code Canvas',
    category: 'ui',
    categoryName_en: 'UI & Frontend',
    categoryName_ko: '웹/앱 디자인 & UI',
    desc_en: 'Interactive space inside Gemini chat to render live frontend code and visually iterate in real-time.',
    desc_ko: '대화창 내에서 프론트엔드 코드를 실시간 렌더링하고, 시각적 피드백을 보면서 양방향으로 즉시 수정하는 인터랙티브 공간.',
    tip_en: 'Perfect for micro-component tuning (modals, animated charts, widgets) with instant visual feedback.',
    tip_ko: '단일 컴포넌트(모달, 대시보드 위젯, 차트 등)의 비주얼 동작을 즉각 눈으로 보며 튜닝할 때 활용합니다.',
    skill: 'google-stitch-ui',
    link: 'https://gemini.google.com',
    prompt_en: `Render and visualize this interactive widget in Web Code Canvas: modern animated statistics card for {INTENT}.`,
    prompt_ko: `다음 컴포넌트를 Web Code Canvas에 시각화해 줘: {INTENT} 화면에 사용할 인터랙티브 통계 위젯 및 애니메이션 차트.`
  },

  // Dev Infra & Agents
  {
    id: 'antigravity',
    name: 'Jules & Google Antigravity',
    category: 'infra',
    categoryName_en: 'Dev Infra & Agents',
    categoryName_ko: '개발 인프라 & 에이전트',
    desc_en: 'Autonomous developer AI agent driving multi-step code refactoring, bug fixes, and background orchestration.',
    desc_ko: '복잡한 코드 리팩토링, 버그 수정, 백그라운드 자율 빌드 및 멀티스텝 태스크를 주도하는 최첨단 개발 에이전트.',
    tip_en: 'The central command center of Google Master. Formulates the entire 5-phase pipeline and executes code.',
    tip_ko: 'Google Master의 사령탑. 모든 구글 도구의 파이프라인을 기획하고 코드베이스로 총괄 통합합니다.',
    skill: 'google-master',
    link: 'https://github.com/DrHomeRender/google-Master',
    prompt_en: `Antigravity Agent: Architect the project for {INTENT} and execute the implementation following .agents/skills/google-master.`,
    prompt_ko: `Antigravity Agent: {INTENT} 프로젝트의 아키텍처를 설계하고, .agents/skills/google-master 스킬에 따라 단계별 구현을 시작하라.`
  },
  {
    id: 'ai-studio',
    name: 'Google AI Studio',
    category: 'infra',
    categoryName_en: 'Dev Infra & Agents',
    categoryName_ko: '개발 인프라 & 에이전트',
    desc_en: 'Fast prototyping console for Gemini 3 Pro, Gemini 3 Flash, and Gemini 2.5 with system prompt tuning and instant API code extraction.',
    desc_ko: '최신 Gemini 3 및 2.5 모델(Pro/Flash)을 신속하게 테스트하고, System Instruction을 조정하며 프로덕션 API 키와 코드를 추출하는 개발자 콘솔.',
    tip_en: 'Pair with google-model-hub skill to inject system instructions and structured JSON Schema responses into your codebase.',
    tip_ko: 'google-model-hub 스킬로 AI Studio의 시스템 인스트럭션과 구조화된 JSON Schema 응답 코드를 앱에 직결합니다.',
    skill: 'google-model-hub',
    link: 'https://aistudio.google.com',
    prompt_en: `[System Instruction]: You are the core reasoning engine for {INTENT}. Extract entities and return strictly structured JSON schemas.`,
    prompt_ko: `[System Instruction]: 당신은 {INTENT} 시스템을 전담하는 고성능 추론 엔진입니다. 사용자 입력에서 핵심 엔티티를 추출하고 JSON 스키마 규격에 맞춰 응답하세요.`
  },
  {
    id: 'vertex-ai',
    name: 'Vertex AI',
    category: 'infra',
    categoryName_en: 'Dev Infra & Agents',
    categoryName_ko: '개발 인프라 & 에이전트',
    desc_en: 'Enterprise MLOps platform for fine-tuning Gemini 3 & 2.5 models on proprietary data and deploying production endpoints.',
    desc_ko: '엔터프라이즈 환경에서 Gemini 3 및 2.5 모델을 전용 데이터로 파인튜닝하고, 대규모 SLA가 보장된 MLOps 인프라에 배포·모니터링하는 플랫폼.',
    tip_en: 'Essential when scaling to high-traffic commercial environments with strict enterprise security and SLAs.',
    tip_ko: '상용화 및 대규모 사용자 트래픽 대응 시 보안 규정 준수와 엔터프라이즈 파이프라인 배포를 위해 사용합니다.',
    skill: 'google-model-hub',
    link: 'https://cloud.google.com/vertex-ai',
    prompt_en: `Generate deployment specifications for Vertex AI Model Garden Gemini endpoint serving {INTENT} production traffic.`,
    prompt_ko: `{INTENT} 비즈니스 로직을 서빙하기 위한 Vertex AI Model Garden Gemini 엔드포인트 배포 명세서 작성.`
  },
  {
    id: 'gemma',
    name: 'Gemma (Gemma 2 / Gemma 3 - 2B / 9B / 27B)',
    category: 'infra',
    categoryName_en: 'Dev Infra & Agents',
    categoryName_ko: '개발 인프라 & 에이전트',
    desc_en: 'High-performance open-weight models from Google optimized for zero-cost, private on-device local execution (Gemma 2 & 3 family).',
    desc_ko: '로컬 PC나 엣지 디바이스 등 독립된 오프라인 환경에서 비용 없이 구동할 수 있도록 설계된 구글의 고성능 오픈 가중치 모델 (Gemma 2 및 3 제품군).',
    tip_en: 'Use google-model-hub skill to scaffold local Ollama / vLLM serving scripts for completely private edge AI.',
    tip_ko: 'google-model-hub 스킬로 Ollama, vLLM 로컬 서빙 스크립트를 생성하여 완벽한 프라이버시 온디바이스 AI를 구축합니다.',
    skill: 'google-model-hub',
    link: 'https://ai.google.dev/gemma',
    prompt_en: `ollama run gemma2:9b\n# (or gemma3) Local serving endpoint for {INTENT}: http://localhost:11434/api/generate`,
    prompt_ko: `ollama run gemma2:9b\n# (또는 gemma3) {INTENT} 로컬 서빙 엔드포인트: http://localhost:11434/api/generate`
  },

  // Workspace
  {
    id: 'gemini-advanced',
    name: 'Gemini Advanced',
    category: 'workspace',
    categoryName_en: 'Workspace & Office',
    categoryName_ko: '업무 생산성 (Workspace)',
    desc_en: 'Flagship web chat with 1M–2M token context window capable of ingesting whole codebases or hundreds of PDF pages.',
    desc_ko: '100만~200만 토큰의 방대한 컨텍스트를 지원하여 대규모 코드베이스 전체나 수백 장의 기획서를 한 번에 통독·분석하는 챗 인터페이스.',
    tip_en: 'Use early in project ideation to summarize massive legacy repositories or domain requirements.',
    tip_ko: '프로젝트 시작 전 방대한 레거시 코드베이스나 요구사항 문서를 1차로 종합 분석할 때 선행 활용합니다.',
    skill: 'google-deep-research',
    link: 'https://gemini.google.com/advanced',
    prompt_en: `Analyze the entire attached architecture document and outline 5 core data models and requirements for {INTENT}.`,
    prompt_ko: `첨부된 대규모 기획 문서 전체를 읽고, {INTENT} 구현을 위해 필요한 데이터 모델 5가지와 핵심 기능 요구사항을 정리해 줘.`
  },
  {
    id: 'workspace-gemini',
    name: 'Workspace Gemini',
    category: 'workspace',
    categoryName_en: 'Workspace & Office',
    categoryName_ko: '업무 생산성 (Workspace)',
    desc_en: 'Embedded AI sidepanel across Google Docs, Sheets, Gmail, and Drive for workflow automation.',
    desc_ko: 'Docs(글쓰기), Sheets(데이터 분석 및 수식), Gmail(요약), Drive(교차 검색)에 내장된 사이드 패널 AI.',
    tip_en: 'Automates spreadsheet formula generation and exports engineering metrics directly into presentation docs.',
    tip_ko: '개발 산출물 데이터를 구글 시트 수식으로 연동하거나, 고객 보고서 초안을 Docs에서 자동 생성할 때 사용합니다.',
    skill: 'google-master',
    link: 'https://workspace.google.com',
    prompt_en: `Generate automated Google Sheets formulas and KPI dashboard layout to track weekly performance for {INTENT}.`,
    prompt_ko: `{INTENT} 프로젝트의 주간 진행 지표를 추적할 수 있는 Google Sheets 자동 수식 및 대시보드 템플릿을 생성해 줘.`
  },

  // Research
  {
    id: 'notebooklm',
    name: 'NotebookLM',
    category: 'research',
    categoryName_en: 'Knowledge & RAG',
    categoryName_ko: '지식 탐구 & 심층 연구',
    desc_en: 'Document-grounded research engine that uses strictly your uploaded sources (PDFs, papers) for zero-hallucination Q&A.',
    desc_ko: '업로드한 문서(PDF, 논문, 스펙)만을 절대적 출처로 삼아 환각 없는 질의응답을 제공하고 오디오 팟캐스트를 생성하는 연구 특화 툴.',
    tip_en: 'Use google-deep-research skill to package tech specs into NotebookLM sources, securing trustworthy RAG grounding.',
    tip_ko: 'google-deep-research 스킬로 프로젝트 스펙 문서를 패키징하여 NotebookLM에 등록, 신뢰할 수 있는 RAG를 만듭니다.',
    skill: 'google-deep-research',
    link: 'https://notebooklm.google.com',
    prompt_en: `Based strictly on the uploaded specification files for {INTENT}, verify system interface protocols and summarize edge-case error policies.`,
    prompt_ko: `등록된 {INTENT} 기술 문서를 기반으로, 시스템 구성도 간의 인터페이스 프로토콜과 에러 처리 정책을 완벽하게 검증하고 요약해 줘.`
  },
  {
    id: 'deep-research',
    name: 'Google AI Mode & Deep Research',
    category: 'research',
    categoryName_en: 'Knowledge & RAG',
    categoryName_ko: '지식 탐구 & 심층 연구',
    desc_en: 'Autonomous multi-step web exploration engine that synthesizes exhaustive, citation-backed technical reports.',
    desc_ko: '질문을 세부 단계로 분해하여 다단계 심층 웹 탐색을 수행하고, 출처가 명확한 수십 페이지 분량의 종합 리포트를 작성하는 검색 엔진.',
    tip_en: 'Run before selecting technology stacks to gather objective benchmarks, licensing constraints, and architectural trade-offs.',
    tip_ko: '기술 스택 선정 전 장단점 비교, 라이선스 검토, 최신 벤치마크 데이터를 객관적으로 확보할 때 실행합니다.',
    skill: 'google-deep-research',
    link: 'https://google.com',
    prompt_en: `[Deep Research]: In-depth comparative tech stack analysis for {INTENT}. Research performance benchmarks, memory footprint, licenses, and production best practices into an executive report.`,
    prompt_ko: `[Deep Research]: {INTENT} 구현에 적합한 최신 기술 스택 비교 분석. 성능 벤치마크, 메모리 풋프린트, 오픈소스 라이선스, 프로덕션 베스트 프랙티스를 심층 조사한 종합 보고서 작성.`
  },
  {
    id: 'guided-learning',
    name: 'Guided Learning',
    category: 'research',
    categoryName_en: 'Knowledge & RAG',
    categoryName_ko: '지식 탐구 & 심층 연구',
    desc_en: 'Socratic dialogue and flashcard generator designed to master unfamiliar complex technical architectures step-by-step.',
    desc_ko: '소크라테스식 문답과 단계별 퀴즈를 통해 생소하고 복잡한 기술 개념을 점진적으로 마스터하도록 돕는 학습 모드.',
    tip_en: 'Ideal for onboarding engineering teams to new frameworks and architectural patterns.',
    tip_ko: '새로운 알고리즘이나 최신 프레임워크를 개발팀이 도입하기 전 단계별 학습 로드맵을 구성할 때 연계합니다.',
    skill: 'google-deep-research',
    link: 'https://gemini.google.com',
    prompt_en: `Guide me through the core architectural patterns for {INTENT} using Socratic questions and progressive interactive flashcards.`,
    prompt_ko: `{INTENT}에 필요한 핵심 아키텍처 패턴을 내가 완벽히 이해할 수 있도록, 소크라테스식 질의응답과 플래시카드로 가이드해 줘.`
  },

  // Creative & Media
  {
    id: 'vids',
    name: 'Google Vids',
    category: 'media',
    categoryName_en: 'Creative & Media',
    categoryName_ko: '미디어 & 크리에이티브',
    desc_en: 'AI-driven presentation video creator that generates storyboards, templates, and voiceovers from simple prompts.',
    desc_ko: '프롬프트 입력만으로 기획, 스토리보드, 템플릿, AI 보이스오버까지 포함된 업무용 프레젠테이션 및 데모 영상을 자동 생성.',
    tip_en: 'Instantly plans and records polished product launch walkthroughs and onboarding videos when development finishes.',
    tip_ko: '개발이 완료된 웹앱의 제품 소개 영상 및 사용자 온보딩 튜토리얼을 원클릭으로 기획·제작합니다.',
    skill: 'google-master',
    link: 'https://vids.google.com',
    prompt_en: `Create a 60-second product launch demo video storyboard and AI voiceover script showcasing key capabilities and benefits of {INTENT}.`,
    prompt_ko: `{INTENT} 서비스의 런칭 데모 비디오를 기획해 줘. 1분 분량으로 문제 정의, 핵심 솔루션 시연, 사용자 혜택을 다루는 스토리보드와 AI 내레이션 스크립트 작성.`
  },
  {
    id: 'veo',
    name: 'Veo & Google Flow',
    category: 'media',
    categoryName_en: 'Creative & Media',
    categoryName_ko: '미디어 & 크리에이티브',
    desc_en: 'Google flagship cinematic video model generating high-definition 1080p footage with multi-shot direction control.',
    desc_ko: '1080p 고화질 시네마틱 영상 생성 및 씬 단위 연출을 지원하는 구글의 플래그십 비디오 생성 AI.',
    tip_en: 'Crafts looping cinematic hero background videos and promotional teaser clips for web applications.',
    tip_ko: '웹사이트 히어로 섹션에 들어갈 루핑 비디오 배경이나 브랜드 티저 영상을 제작할 때 연계합니다.',
    skill: 'google-master',
    link: 'https://deepmind.google/technologies/veo',
    prompt_en: `Cinematic 4K hero video for {INTENT}, futuristic ambient lighting, sleek metallic reflections, smooth camera orbiting motion, ultra-detailed, 60fps.`,
    prompt_ko: `Cinematic 4K hero video for {INTENT}, futuristic ambient lighting, sleek metallic reflections, smooth camera orbiting motion, ultra-detailed, 60fps.`
  },
  {
    id: 'test-kitchen',
    name: 'AI Test Kitchen (ImageFX / MusicFX)',
    category: 'media',
    categoryName_en: 'Creative & Media',
    categoryName_ko: '미디어 & 크리에이티브',
    desc_en: 'Creative sandbox powered by Imagen 3 for prompt-weight tuned image synthesis and ambient music generation.',
    desc_ko: 'Imagen 3 기반의 정밀 이미지 생성(ImageFX)과 앰비언트 배경음악 생성(MusicFX)을 제공하는 구글의 실험실.',
    tip_en: 'Generate sleek 3D application icons, UI illustrations, and brand audio assets for your app.',
    tip_ko: '앱의 로고 콘셉트, UI 일러스트, 서비스 배경 오디오 에셋을 생성할 때 활용합니다.',
    skill: 'google-master',
    link: 'https://aitestkitchen.withgoogle.com',
    prompt_en: `[ImageFX Prompt]: High-end futuristic 3D icon for {INTENT}, frosted glass material, subtle neon luminescence, dark studio lighting, 8k resolution.`,
    prompt_ko: `[ImageFX Prompt]: High-end futuristic 3D icon for {INTENT}, frosted glass material, subtle neon luminescence, dark studio lighting, 8k resolution.`
  },

  // Utility
  {
    id: 'temporary-chat',
    name: 'Temporary Chat',
    category: 'utility',
    categoryName_en: 'Privacy & Security',
    categoryName_ko: '프라이버시 & 보안',
    desc_en: 'Disposable private session with no history storage and no model training for confidential prototyping.',
    desc_ko: '대화 기록이 계정에 저장되지 않고 AI 학습에도 쓰이지 않는 1회성 프라이빗 보안 세션.',
    tip_en: 'Isolate sensitive proprietary algorithms or internal business logic during security validation.',
    tip_ko: '민감한 비즈니스 아이디어 검토나 비공개 API 키 테스트 시 세션을 격리하여 검증할 때 사용합니다.',
    skill: 'google-master',
    link: 'https://gemini.google.com',
    prompt_en: `[Private Session]: Initiate isolated architectural vulnerability and threat modeling review for {INTENT}.`,
    prompt_ko: `[Private Session]: 보안 검토를 위한 {INTENT} 아키텍처 취약점 분석 세션 시작.`
  }
];

// DOM Element References
const langEnBtn = document.getElementById('langEn');
const langKoBtn = document.getElementById('langKo');
const intentInput = document.getElementById('intentInput');
const btnGenerate = document.getElementById('btnGenerate');
const presetsContainer = document.getElementById('presetsContainer');
const pipelineFlow = document.getElementById('pipelineFlow');
const toolsGrid = document.getElementById('toolsGrid');
const categoryTabs = document.getElementById('categoryTabs');
const modalOverlay = document.getElementById('modalOverlay');
const modalTitle = document.getElementById('modalTitle');
const modalPromptText = document.getElementById('modalPromptText');
const modalClose = document.getElementById('modalClose');
const modalCopyBtn = document.getElementById('modalCopyBtn');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');

// i18n Static Text Elements
const i18nHeroTag = document.getElementById('i18nHeroTag');
const i18nHeroTitle = document.getElementById('i18nHeroTitle');
const i18nHeroDesc = document.getElementById('i18nHeroDesc');
const i18nGuideStep1 = document.getElementById('i18nGuideStep1');
const i18nGuideStep2 = document.getElementById('i18nGuideStep2');
const i18nGuideStep3 = document.getElementById('i18nGuideStep3');
const i18nSynthTitle = document.getElementById('i18nSynthTitle');
const i18nSynthBadge = document.getElementById('i18nSynthBadge');
const i18nBtnGenerate = document.getElementById('i18nBtnGenerate');
const i18nStatusPill = document.getElementById('i18nStatusPill');
const i18nSectionTitle = document.getElementById('i18nSectionTitle');
const i18nSectionDesc = document.getElementById('i18nSectionDesc');
const tabAll = document.getElementById('tabAll');
const tabUi = document.getElementById('tabUi');
const tabInfra = document.getElementById('tabInfra');
const tabWorkspace = document.getElementById('tabWorkspace');
const tabResearch = document.getElementById('tabResearch');
const tabMedia = document.getElementById('tabMedia');
const tabUtility = document.getElementById('tabUtility');
const i18nModalLabel = document.getElementById('i18nModalLabel');
const i18nModalCancel = document.getElementById('i18nModalCancel');

// Switch Language
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('google_master_lang', lang);

  // Update Language Buttons
  if (lang === 'en') {
    langEnBtn.classList.add('active');
    langKoBtn.classList.remove('active');
    document.documentElement.lang = 'en';
  } else {
    langKoBtn.classList.add('active');
    langEnBtn.classList.remove('active');
    document.documentElement.lang = 'ko';
  }

  // Update Static Texts
  const dict = I18N[lang];
  i18nHeroTag.textContent = dict.heroTag;
  i18nHeroTitle.innerHTML = dict.heroTitle;
  i18nHeroDesc.innerHTML = dict.heroDesc;
  i18nGuideStep1.textContent = dict.guideStep1;
  i18nGuideStep2.textContent = dict.guideStep2;
  i18nGuideStep3.textContent = dict.guideStep3;
  i18nSynthTitle.textContent = dict.synthTitle;
  i18nSynthBadge.textContent = dict.synthBadge;
  i18nBtnGenerate.textContent = dict.btnGenerate;
  intentInput.placeholder = dict.synthPlaceholder;
  i18nStatusPill.textContent = dict.statusPill;
  i18nSectionTitle.textContent = dict.sectionTitle;
  i18nSectionDesc.textContent = dict.sectionDesc;
  tabAll.textContent = dict.tabAll;
  tabUi.textContent = dict.tabUi;
  tabInfra.textContent = dict.tabInfra;
  tabWorkspace.textContent = dict.tabWorkspace;
  tabResearch.textContent = dict.tabResearch;
  tabMedia.textContent = dict.tabMedia;
  tabUtility.textContent = dict.tabUtility;
  i18nModalLabel.textContent = dict.modalLabel;
  i18nModalCancel.textContent = dict.modalCancel;
  modalCopyBtn.textContent = dict.modalCopy;

  // Re-render Dynamic Elements
  renderPresets();
  renderTools(currentCategory);

  // Re-generate Pipeline with current or default input
  const defaultText = lang === 'en' ? PRESETS[0].text_en : PRESETS[0].text_ko;
  const targetText = intentInput.value.trim() ? intentInput.value : defaultText;
  intentInput.value = targetText;
  generatePipeline(targetText);
}

// Render Presets
function renderPresets() {
  presetsContainer.innerHTML = '';
  PRESETS.forEach((preset, index) => {
    const chip = document.createElement('button');
    chip.className = `preset-chip ${index === 0 ? 'active' : ''}`;
    chip.textContent = currentLang === 'en' ? preset.name_en : preset.name_ko;
    chip.addEventListener('click', () => {
      document.querySelectorAll('.preset-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const val = currentLang === 'en' ? preset.text_en : preset.text_ko;
      intentInput.value = val;
      generatePipeline(val);
    });
    presetsContainer.appendChild(chip);
  });
}


// Multi-Factor Intent & Model Routing Analyzer
function analyzeModelRouting(intent) {
  const lower = intent.toLowerCase();

  const isEdgeRequired = 
    lower.includes('local') || lower.includes('로컬') ||
    lower.includes('offline') || lower.includes('오프라인') ||
    lower.includes('on-device') || lower.includes('온디바이스') ||
    lower.includes('private') || lower.includes('개인정보') ||
    lower.includes('gemma') || lower.includes('edge') || lower.includes('엣지');

  const isEnterpriseDeploy = 
    lower.includes('enterprise') || lower.includes('엔터프라이즈') ||
    lower.includes('production') || lower.includes('상용') || lower.includes('mlops') ||
    lower.includes('vertex') || lower.includes('finetun') || lower.includes('파인튜닝');

  if (isEdgeRequired) {
    return {
      modelName: 'Gemma 2 / 3 (Local Ollama / vLLM)',
      rationale_en: 'Architecture Rationale: Selected for zero-cost offline latency, edge independence, and strict local privacy.',
      rationale_ko: '선정 근거: 클라우드 비용 제로, 오프라인 구동 및 완벽한 로컬 데이터 프라이버시를 보장합니다.',
      toolRef: 'gemma',
      skill: 'google-model-hub'
    };
  } else if (isEnterpriseDeploy) {
    return {
      modelName: 'Vertex AI (Gemini 3 Enterprise)',
      rationale_en: 'Architecture Rationale: Selected for enterprise SLA compliance, model fine-tuning, and scalable production monitoring.',
      rationale_ko: '선정 근거: 엔터프라이즈 SLA 준수, 맞춤형 모델 파인튜닝 및 대규모 트래픽 모니터링을 제공합니다.',
      toolRef: 'vertex-ai',
      skill: 'google-model-hub'
    };
  } else {
    return {
      modelName: 'Google AI Studio (Gemini 3 Flash / 2.5)',
      rationale_en: 'Architecture Rationale: Selected for ultra-low latency, 1M+ multimodal context window, and rapid API prototyping.',
      rationale_ko: '선정 근거: 초저지연 응답 속도, 100만+ 토큰 멀티모달 컨텍스트 및 신속한 API 프로토타이핑을 제공합니다.',
      toolRef: 'ai-studio',
      skill: 'google-model-hub'
    };
  }
}

// Generate Pipeline Flow (Safe DOM Creation without XSS injection)
function generatePipeline(intent) {
  if (!intent.trim()) return;

  const dict = I18N[currentLang];
  const isEn = currentLang === 'en';
  const modelRoute = analyzeModelRouting(intent);

  const steps = [
    {
      num: 1,
      title: isEn ? 'Knowledge & Deep Research' : '지식 탐구 & 심층 리서치',
      tool: 'NotebookLM & Deep Research',
      badgeClass: 'badge-research',
      desc: isEn 
        ? `Investigate core architecture trade-offs and tech benchmarks for [${intent}] with Deep Research, then ground them into NotebookLM for zero-hallucination RAG.`
        : `[${intent}] 개발에 필요한 핵심 도메인 스펙과 기술 비교를 Deep Research로 조사하고, 산출물을 NotebookLM에 등록하여 오차 없는 RAG 지식 기반을 확정합니다.`,
      skill: 'google-deep-research',
      toolRef: 'notebooklm',
      prompt: isEn
        ? `[Deep Research Query]: Produce a technical analysis report outlining architecture requirements, benchmark comparisons, and edge-case policies for "${intent}".`
        : `[Deep Research 쿼리]: "${intent}" 구현을 위한 핵심 아키텍처 스펙, 오픈소스 라이브러리 벤치마크, 예외 처리 규칙을 완벽히 정리한 기술 분석 리포트 작성.`
    },
    {
      num: 2,
      title: isEn ? 'UI Architecture & Fast Frontend' : 'UI 기획 & 고속 프론트엔드 빌드',
      tool: 'Google Stitch & Web Code Canvas',
      badgeClass: 'badge-ui',
      desc: isEn
        ? `Generate polished dark-mode responsive HTML/CSS layouts from prompts using Google Stitch, validating live micro-interactions in Gemini Web Code Canvas.`
        : `프롬프트 기반으로 Google Stitch에서 다크모드/글래스모피즘 완성형 HTML/CSS를 추출하고, Code Canvas에서 컴포넌트 렌더링을 실시간 검증합니다.`,
      skill: 'google-stitch-ui',
      toolRef: 'stitch',
      prompt: isEn
        ? `[Google Stitch Prompt]: Design a sleek, responsive dark-mode web application for "${intent}". Include header navigation, 4 KPI metric cards, and an interactive data panel.`
        : `[Google Stitch 프롬프트]: "${intent}"을 위한 세련된 다크 모드 반응형 웹 인터페이스 생성. 헤더 네비게이션, 핵심 대시보드 카드 4개, 인터랙티브 캔버스 패널 포함.`
    },
    {
      num: 3,
      title: isEn ? 'Agentic Engineering & Integration' : '에이전틱 엔지니어링 & 통합',
      tool: 'Antigravity Agent & Project IDX',
      badgeClass: 'badge-code',
      desc: isEn
        ? `Antigravity ingests Stitch UI assets into modular components, binds dynamic state management and business logic, ready for testing in Project IDX.`
        : `Antigravity가 Stitch에서 추출된 마크다운/HTML을 가져와 모듈형 컴포넌트로 구조화하고, 상태 관리 및 비즈니스 로직을 자율적으로 바인딩합니다.`,
      skill: 'google-master',
      toolRef: 'antigravity',
      prompt: isEn
        ? `Antigravity Agent: Ingest Stitch UI assets, connect dynamic state management logic, and refactor into clean components for "${intent}".`
        : `Antigravity Agent 실행: Stitch의 UI 마크업에 동적 상태 관리 로직을 연결하고, Project IDX 호환 구조로 리팩토링하라.`
    },
    {
      num: 4,
      title: isEn ? 'AI Intelligence & Model Serving' : 'AI 모델 엔진 & 온디바이스 연동',
      tool: modelRoute.modelName,
      badgeClass: 'badge-model',
      desc: isEn
        ? `${modelRoute.rationale_en} Configures tailored system instructions and structured JSON output schema.`
        : `${modelRoute.rationale_ko} 최적화된 시스템 인스트럭션과 정형화된 JSON 출력 스키마를 구성합니다.`,
      skill: modelRoute.skill,
      toolRef: modelRoute.toolRef,
      prompt: isEn
        ? `[System Instruction]: You are the specialized intelligence engine for "${intent}". Extract key entities and output strictly formatted JSON responses.`
        : `[System Instruction]: 당신은 "${intent}" 시스템의 핵심 인텔리전스 엔진입니다. 빠르고 정확한 JSON 스키마 형식으로 응답을 출력하십시오.`
    },
    {
      num: 5,
      title: isEn ? 'Showcase, Demo & Visual Assets' : '쇼케이스, 데모 & 비주얼 에셋',
      tool: 'Google Vids & Veo / ImageFX',
      badgeClass: 'badge-media',
      desc: isEn
        ? `Automatically produce product launch demo videos with Google Vids, generating cinematic hero backgrounds using Veo and ImageFX.`
        : `완성된 서비스의 릴리즈 쇼케이스 영상을 Google Vids로 자동 제작하고, Veo 및 ImageFX를 통해 고품질 비주얼 에셋을 보강합니다.`,
      skill: 'google-master',
      toolRef: 'vids',
      prompt: isEn
        ? `[Google Vids Storyboard]: Create a 60-second walkthrough storyboard and AI voiceover narration script demonstrating core value propositions of "${intent}".`
        : `[Google Vids 스토리보드]: "${intent}"의 주요 기능과 사용 흐름을 60초 내에 강렬하게 보여주는 데모 비디오 연출 및 AI 내레이션 스크립트 생성.`
    }
  ];

  // Safe DOM Construction (No innerHTML injection of user strings)
  pipelineFlow.innerHTML = '';
  steps.forEach(step => {
    const card = document.createElement('article');
    card.className = 'pipeline-step-card';

    const header = document.createElement('div');
    header.className = 'step-card-header';

    const titleGroup = document.createElement('div');
    titleGroup.className = 'step-title-group';

    const numEl = document.createElement('div');
    numEl.className = 'step-num';
    numEl.textContent = step.num;

    const titleEl = document.createElement('h3');
    titleEl.className = 'step-name';
    titleEl.textContent = step.title;

    titleGroup.appendChild(numEl);
    titleGroup.appendChild(titleEl);

    const badge = document.createElement('div');
    badge.className = `step-tool-badge ${step.badgeClass}`;
    badge.textContent = `⚡ ${step.tool}`;

    header.appendChild(titleGroup);
    header.appendChild(badge);

    const descEl = document.createElement('p');
    descEl.className = 'step-desc';
    descEl.textContent = step.desc;

    const actions = document.createElement('div');
    actions.className = 'step-actions';

    const skillCmd = document.createElement('div');
    skillCmd.className = 'step-skill-command';
    const skillLabel = document.createElement('span');
    skillLabel.textContent = dict.pipelineAntigravityLabel;
    const skillCode = document.createElement('code');
    skillCode.textContent = `.agents/skills/${step.skill}/`;
    skillCmd.appendChild(skillLabel);
    skillCmd.appendChild(skillCode);

    const btnGroup = document.createElement('div');
    btnGroup.className = 'step-buttons';

    const viewBtn = document.createElement('button');
    viewBtn.className = 'btn-secondary btn-copy';
    viewBtn.textContent = dict.btnViewPrompt;
    viewBtn.addEventListener('click', () => {
      openPromptModal(step.toolRef, step.prompt);
    });

    const copyBtn = document.createElement('button');
    copyBtn.className = 'btn-secondary';
    copyBtn.textContent = dict.btnCopyPrompt;
    copyBtn.addEventListener('click', () => {
      copyToClipboard(step.prompt, dict.toastCopied);
    });

    btnGroup.appendChild(viewBtn);
    btnGroup.appendChild(copyBtn);

    actions.appendChild(skillCmd);
    actions.appendChild(btnGroup);

    card.appendChild(header);
    card.appendChild(descEl);
    card.appendChild(actions);

    pipelineFlow.appendChild(card);
  });
}

// Render Tools Grid (Safe DOM Construction)
function renderTools(category) {
  toolsGrid.innerHTML = '';
  const filtered = category === 'all' 
    ? GOOGLE_TOOLS 
    : GOOGLE_TOOLS.filter(t => t.category === category);

  const dict = I18N[currentLang];
  const isEn = currentLang === 'en';

  filtered.forEach(tool => {
    const card = document.createElement('article');
    card.className = 'tool-card';

    const contentDiv = document.createElement('div');
    const topDiv = document.createElement('div');
    topDiv.className = 'tool-top';

    const titleDiv = document.createElement('div');
    const title = document.createElement('h3');
    title.className = 'tool-title';
    title.textContent = tool.name;

    const catBadge = document.createElement('span');
    catBadge.className = 'tool-category-badge';
    catBadge.textContent = isEn ? tool.categoryName_en : tool.categoryName_ko;

    titleDiv.appendChild(title);
    titleDiv.appendChild(catBadge);
    topDiv.appendChild(titleDiv);

    const desc = document.createElement('p');
    desc.className = 'tool-desc';
    desc.textContent = isEn ? tool.desc_en : tool.desc_ko;

    const tipBox = document.createElement('div');
    tipBox.className = 'tool-antigravity-integration';
    const tipLabel = document.createElement('div');
    tipLabel.className = 'integration-label';
    tipLabel.textContent = dict.tipLabel;
    const tipText = document.createElement('div');
    tipText.className = 'integration-text';
    tipText.textContent = isEn ? tool.tip_en : tool.tip_ko;

    tipBox.appendChild(tipLabel);
    tipBox.appendChild(tipText);

    contentDiv.appendChild(topDiv);
    contentDiv.appendChild(desc);
    contentDiv.appendChild(tipBox);

    const footer = document.createElement('div');
    footer.className = 'tool-footer';

    const assembleBtn = document.createElement('button');
    assembleBtn.className = 'btn-secondary';
    assembleBtn.textContent = dict.btnAssemblePrompt;
    assembleBtn.addEventListener('click', () => {
      openPromptModal(tool.id);
    });

    const linkBtn = document.createElement('a');
    linkBtn.className = 'btn-secondary';
    linkBtn.href = tool.link;
    linkBtn.target = '_blank';
    linkBtn.rel = 'noopener noreferrer';
    linkBtn.textContent = dict.btnOpenConsole;

    footer.appendChild(assembleBtn);
    footer.appendChild(linkBtn);

    card.appendChild(contentDiv);
    card.appendChild(footer);

    toolsGrid.appendChild(card);
  });
}

// Modal Handlers
function openPromptModal(toolId, customPrompt = null) {
  const tool = GOOGLE_TOOLS.find(t => t.id === toolId);
  if (!tool) return;

  const isEn = currentLang === 'en';
  modalTitle.textContent = isEn ? `${tool.name} Optimized Prompt` : `${tool.name} 전용 최적화 프롬프트`;
  
  const currentIntent = intentInput.value.trim() || (isEn ? 'Modern AI Web Application' : '모던 웹 애플리케이션');
  
  if (customPrompt) {
    modalPromptText.value = customPrompt.replace(/\\n/g, '\n');
  } else {
    const template = isEn ? tool.prompt_en : tool.prompt_ko;
    modalPromptText.value = template.replace(/{INTENT}/g, currentIntent);
  }

  modalOverlay.classList.add('active');
}

function closeModal() {
  modalOverlay.classList.remove('active');
}

// Clipboard Copy & Toast
function copyToClipboard(text, message = null) {
  const msg = message || I18N[currentLang].toastCopied;
  navigator.clipboard.writeText(text).then(() => {
    showToast(msg);
  }).catch(() => {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    showToast(msg);
  });
}

function showToast(message) {
  toastMessage.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2600);
}

// Setup Theme
let currentTheme = localStorage.getItem('google_master_theme') || 'light';
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const themeText = document.getElementById('themeText');

function setTheme(theme) {
  currentTheme = theme;
  localStorage.setItem('google_master_theme', theme);
  if (theme === 'dark') {
    document.body.classList.add('theme-dark');
    if (themeIcon) themeIcon.textContent = '🌙';
    if (themeText) themeText.textContent = 'Dark';
  } else {
    document.body.classList.remove('theme-dark');
    if (themeIcon) themeIcon.textContent = '☀️';
    if (themeText) themeText.textContent = 'Warm';
  }
}

function toggleTheme() {
  setTheme(currentTheme === 'dark' ? 'light' : 'dark');
}

// Setup Event Listeners
function setupEventListeners() {
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }

  langEnBtn.addEventListener('click', () => setLanguage('en'));
  langKoBtn.addEventListener('click', () => setLanguage('ko'));

  btnGenerate.addEventListener('click', () => {
    generatePipeline(intentInput.value);
  });

  intentInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      generatePipeline(intentInput.value);
    }
  });

  categoryTabs.querySelectorAll('.category-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      categoryTabs.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentCategory = tab.dataset.category;
      renderTools(currentCategory);
    });
  });

  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  modalCopyBtn.addEventListener('click', () => {
    copyToClipboard(modalPromptText.value);
    closeModal();
  });
}

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  setupEventListeners();
  setTheme(currentTheme);
  setLanguage(currentLang);
});

