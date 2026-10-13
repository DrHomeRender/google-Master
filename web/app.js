/**
 * Google Master - Application Engine
 * Manages Intent-to-Pipeline Synthesis, Ecosystem Tool Catalog, and Prompt Forge
 */

// 1. Google AI Tools Database (Based on 구글 앱 정리.md)
const GOOGLE_TOOLS = [
  // UI & Frontend
  {
    id: 'stitch',
    name: 'Google Stitch',
    category: 'ui',
    categoryName: '웹/앱 디자인 & UI',
    desc: '프롬프트나 스케치만으로 반응형 UI 디자인과 시맨틱 HTML/CSS 코드를 즉시 생성하는 프론트엔드 비주얼 툴.',
    antigravityTip: 'google-stitch-ui 스킬을 통해 Stitch 전용 UI 프롬프트를 조립하고, 추출된 코드를 프로젝트 컴포넌트로 자동 변환합니다.',
    skill: 'google-stitch-ui',
    link: 'https://stitch.withgoogle.com',
    promptTemplate: `[Role & Goal]: 전문 프론트엔드 엔지니어. 최신 트렌드의 {INTENT} 반응형 UI를 디자인하고 깨끗한 HTML/CSS 코드로 출력해 줘.\n[Theme]: 다크 모드, 세련된 글래스모피즘, 정제된 HSL 블루/퍼플 팔레트, 모던 타이포그래피.\n[Components]: 헤더 내비게이션, 핵심 메트릭 카드 3개, 인터랙티브 데이터 영역, 액션 버튼 패널.`
  },
  {
    id: 'idx',
    name: 'Project IDX',
    category: 'ui',
    categoryName: '웹/앱 디자인 & UI',
    desc: '브라우저 기반 클라우드 개발 환경. Gemini 코드 어시스턴트와 멀티플랫폼(Web, Android) 에뮬레이터가 내장.',
    antigravityTip: '로컬 환경 구축 없이 즉시 클라우드 상에서 크로스 플랫폼 렌더링 및 디바이스 프리뷰를 수행할 때 연계합니다.',
    skill: 'google-master',
    link: 'https://idx.google.com',
    promptTemplate: `{INTENT} 프로젝트를 위한 풀스택 템플릿 환경을 초기화하고, 반응형 브라우저 및 모바일 에뮬레이터를 활성화해 줘.`
  },
  {
    id: 'code-canvas',
    name: 'Gemini Web Code Canvas',
    category: 'ui',
    categoryName: '웹/앱 디자인 & UI',
    desc: '대화창 내에서 프론트엔드 코드를 실시간 렌더링하고, 시각적 피드백을 보면서 양방향으로 즉시 수정하는 인터랙티브 공간.',
    antigravityTip: '단일 컴포넌트(모달, 대시보드 위젯, 차트 등)의 비주얼 동작을 즉각 눈으로 보며 튜닝할 때 활용합니다.',
    skill: 'google-stitch-ui',
    link: 'https://gemini.google.com',
    promptTemplate: `다음 컴포넌트를 Web Code Canvas에 시각화해 줘: {INTENT} 화면에 사용할 인터랙티브 통계 위젯 및 애니메이션 차트.`
  },

  // Dev Infra & Agents
  {
    id: 'antigravity',
    name: 'Jules & Google Antigravity',
    category: 'infra',
    categoryName: '개발 인프라 & 에이전트',
    desc: '복잡한 코드 리팩토링, 버그 수정, 백그라운드 자율 빌드 및 멀티스텝 태스크를 주도하는 최첨단 개발 에이전트.',
    antigravityTip: 'Google Master의 사령탑. 모든 구글 도구의 파이프라인을 기획하고 코드베이스로 총괄 통합합니다.',
    skill: 'google-master',
    link: 'https://github.com',
    promptTemplate: `Antigravity Agent: {INTENT} 프로젝트의 아키텍처를 설계하고, .agents/skills/google-master 스킬에 따라 단계별 구현을 시작하라.`
  },
  {
    id: 'ai-studio',
    name: 'Google AI Studio',
    category: 'infra',
    categoryName: '개발 인프라 & 에이전트',
    desc: '최신 Gemini 1.5/2.0 모델을 신속하게 테스트하고, System Instruction을 조정하며 프로덕션 API 키와 코드를 추출하는 개발자 콘솔.',
    antigravityTip: 'google-model-hub 스킬로 AI Studio의 시스템 인스트럭션과 구조화된 JSON Schema 응답 코드를 앱에 직결합니다.',
    skill: 'google-model-hub',
    link: 'https://aistudio.google.com',
    promptTemplate: `[System Instruction]: 당신은 {INTENT} 시스템을 전담하는 고성능 추론 엔진입니다. 사용자 입력에서 핵심 엔티티를 추출하고 JSON 스키마 규격에 맞춰 응답하세요.`
  },
  {
    id: 'vertex-ai',
    name: 'Vertex AI',
    category: 'infra',
    categoryName: '개발 인프라 & 에이전트',
    desc: '엔터프라이즈 환경에서 Gemini 모델을 전용 데이터로 파인튜닝하고, 대규모 MLOps 인프라에 배포·모니터링하는 플랫폼.',
    antigravityTip: '상용화 및 대규모 사용자 트래픽 대응 시 보안 규정 준수와 엔터프라이즈 파이프라인 배포를 위해 사용합니다.',
    skill: 'google-model-hub',
    link: 'https://cloud.google.com/vertex-ai',
    promptTemplate: `{INTENT} 비즈니스 로직을 서빙하기 위한 Vertex AI Model Garden Gemini 엔드포인트 배포 명세서 작성.`
  },
  {
    id: 'gemma',
    name: 'Gemma (젬마 2B / 9B / 27B)',
    category: 'infra',
    categoryName: '개발 인프라 & 에이전트',
    desc: '로컬 PC나 엣지 디바이스 등 독립된 오프라인 환경에서 비용 없이 구동할 수 있도록 설계된 구글의 고성능 오픈 가중치 모델.',
    antigravityTip: 'google-model-hub 스킬로 Ollama, vLLM 로컬 서빙 스크립트를 생성하여 완벽한 프라이버시 온디바이스 AI를 구축합니다.',
    skill: 'google-model-hub',
    link: 'https://ai.google.dev/gemma',
    promptTemplate: `ollama run gemma2:9b\n# {INTENT} 로컬 서빙 엔드포인트: http://localhost:11434/api/generate`
  },

  // Workspace
  {
    id: 'gemini-advanced',
    name: 'Gemini Advanced',
    category: 'workspace',
    categoryName: '업무 생산성 (Workspace)',
    desc: '100만~200만 토큰의 방대한 컨텍스트를 지원하여 대규모 코드베이스 전체나 수백 장의 기획서를 한 번에 통독·분석하는 챗 인터페이스.',
    antigravityTip: '프로젝트 시작 전 방대한 레거시 코드베이스나 요구사항 문서를 1차로 종합 분석할 때 선행 활용합니다.',
    skill: 'google-deep-research',
    link: 'https://gemini.google.com/advanced',
    promptTemplate: `첨부된 대규모 기획 문서 전체를 읽고, {INTENT} 구현을 위해 필요한 데이터 모델 5가지와 핵심 기능 요구사항을 정리해 줘.`
  },
  {
    id: 'workspace-gemini',
    name: 'Workspace Gemini',
    category: 'workspace',
    categoryName: '업무 생산성 (Workspace)',
    desc: 'Docs(글쓰기), Sheets(데이터 분석 및 수식), Gmail(요약), Drive(교차 검색)에 내장된 사이드 패널 AI.',
    antigravityTip: '개발 산출물 데이터를 구글 시트 수식으로 연동하거나, 고객 보고서 초안을 Docs에서 자동 생성할 때 사용합니다.',
    skill: 'google-master',
    link: 'https://workspace.google.com',
    promptTemplate: `{INTENT} 프로젝트의 주간 진행 지표를 추적할 수 있는 Google Sheets 자동 수식 및 대시보드 템플릿을 생성해 줘.`
  },

  // Research
  {
    id: 'notebooklm',
    name: 'NotebookLM',
    category: 'research',
    categoryName: '지식 탐구 & 심층 연구',
    desc: '업로드한 문서(PDF, 논문, 스펙)만을 절대적 출처로 삼아 환각 없는 질의응답을 제공하고 오디오 팟캐스트를 생성하는 연구 특화 툴.',
    antigravityTip: 'google-deep-research 스킬로 프로젝트 스펙 문서를 패키징하여 NotebookLM에 등록, 신뢰할 수 있는 RAG를 만듭니다.',
    skill: 'google-deep-research',
    link: 'https://notebooklm.google.com',
    promptTemplate: `등록된 {INTENT} 기술 문서를 기반으로, 시스템 구성도 간의 인터페이스 프로토콜과 에러 처리 정책을 완벽하게 검증하고 요약해 줘.`
  },
  {
    id: 'deep-research',
    name: 'Google AI Mode & Deep Research',
    category: 'research',
    categoryName: '지식 탐구 & 심층 연구',
    desc: '질문을 세부 단계로 분해하여 다단계 심층 웹 탐색을 수행하고, 출처가 명확한 수십 페이지 분량의 종합 리포트를 작성하는 검색 엔진.',
    antigravityTip: '기술 스택 선정 전 장단점 비교, 라이선스 검토, 최신 벤치마크 데이터를 객관적으로 확보할 때 실행합니다.',
    skill: 'google-deep-research',
    link: 'https://google.com',
    promptTemplate: `[Deep Research]: {INTENT} 구현에 적합한 최신 기술 스택 비교 분석. 성능 벤치마크, 메모리 풋프린트, 오픈소스 라이선스, 프로덕션 베스트 프랙티스를 심층 조사한 종합 보고서 작성.`
  },
  {
    id: 'guided-learning',
    name: 'Guided Learning (가이드 학습)',
    category: 'research',
    categoryName: '지식 탐구 & 심층 연구',
    desc: '소크라테스식 문답과 단계별 퀴즈를 통해 생소하고 복잡한 기술 개념을 점진적으로 마스터하도록 돕는 학습 모드.',
    antigravityTip: '새로운 알고리즘이나 최신 프레임워크를 개발팀이 도입하기 전 단계별 학습 로드맵을 구성할 때 연계합니다.',
    skill: 'google-deep-research',
    link: 'https://gemini.google.com',
    promptTemplate: `{INTENT}에 필요한 핵심 아키텍처 패턴을 내가 완벽히 이해할 수 있도록, 소크라테스식 질의응답과 플래시카드로 가이드해 줘.`
  },

  // Creative & Media
  {
    id: 'vids',
    name: 'Google Vids',
    category: 'media',
    categoryName: '미디어 & 크리에이티브',
    desc: '프롬프트 입력만으로 기획, 스토리보드, 템플릿, AI 보이스오버까지 포함된 업무용 프레젠테이션 및 데모 영상을 자동 생성.',
    antigravityTip: '개발이 완료된 웹앱의 제품 소개 영상 및 사용자 온보딩 튜토리얼을 원클릭으로 기획·제작합니다.',
    skill: 'google-master',
    link: 'https://vids.google.com',
    promptTemplate: `{INTENT} 서비스의 런칭 데모 비디오를 기획해 줘. 1분 분량으로 문제 정의, 핵심 솔루션 시연, 사용자 혜택을 다루는 스토리보드와 AI 내레이션 스크립트 작성.`
  },
  {
    id: 'veo',
    name: 'Veo & Google Flow',
    category: 'media',
    categoryName: '미디어 & 크리에이티브',
    desc: '1080p 고화질 시네마틱 영상 생성 및 씬 단위 연출을 지원하는 구글의 플래그십 비디오 생성 AI.',
    antigravityTip: '웹사이트 히어로 섹션에 들어갈 루핑 비디오 배경이나 브랜드 티저 영상을 제작할 때 연계합니다.',
    skill: 'google-master',
    link: 'https://deepmind.google/technologies/veo',
    promptTemplate: `Cinematic 4K hero video for {INTENT}, futuristic ambient lighting, sleek metallic reflections, smooth camera orbiting motion, ultra-detailed, 60fps.`
  },
  {
    id: 'test-kitchen',
    name: 'AI Test Kitchen (ImageFX, MusicFX)',
    category: 'media',
    categoryName: '미디어 & 크리에이티브',
    desc: 'Imagen 3 기반의 정밀 이미지 생성(ImageFX)과 앰비언트 배경음악 생성(MusicFX)을 제공하는 구글의 실험실.',
    antigravityTip: '앱의 로고 콘셉트, UI 일러스트, 서비스 배경 오디오 에셋을 생성할 때 활용합니다.',
    skill: 'google-master',
    link: 'https://aitestkitchen.withgoogle.com',
    promptTemplate: `[ImageFX Prompt]: High-end futuristic 3D icon for {INTENT}, frosted glass material, subtle neon luminescence, dark studio lighting, 8k resolution.`
  },

  // Utility
  {
    id: 'temporary-chat',
    name: 'Temporary Chat (임시 채팅)',
    category: 'utility',
    categoryName: '프라이버시 & 보안',
    desc: '대화 기록이 계정에 저장되지 않고 AI 학습에도 쓰이지 않는 1회성 프라이빗 보안 세션.',
    antigravityTip: '민감한 비즈니스 아이디어 검토나 비공개 API 키 테스트 시 세션을 격리하여 검증할 때 사용합니다.',
    skill: 'google-master',
    link: 'https://gemini.google.com',
    promptTemplate: `[Private Session]: 보안 검토를 위한 {INTENT} 아키텍처 취약점 분석 세션 시작.`
  }
];

// Presets data
const PRESETS = [
  {
    name: '📱 온디바이스 AI 문서 요약 & 팟캐스트 앱',
    text: '로컬 PC에서 비용 없이 구동되는 Gemma 9B 기반의 문서 요약 및 NotebookLM 스타일 오디오 팟캐스트 생성 웹앱'
  },
  {
    name: '🎨 실시간 캔버스 & 모던 SaaS 대시보드',
    text: '구글 Stitch로 빠르게 뽑은 글래스모피즘 UI와 Gemini Web Code Canvas를 연동한 실시간 데이터 분석 SaaS 플랫폼'
  },
  {
    name: '📊 구글 시트 & 빅데이터 분석 자동화 에이전트',
    text: 'Workspace Gemini와 Gemini 1.5 Pro를 연계하여 복잡한 스프레드시트 수식을 자동 생성하고 리포트를 발행하는 백그라운드 에이전트'
  },
  {
    name: '🎬 AI 비디오 & 시네마틱 릴리즈 쇼케이스',
    text: 'Veo 시네마틱 영상과 Google Vids 프레젠테이션을 결합한 신규 웹 서비스 인터랙티브 런칭 쇼케이스 페이지'
  }
];

// DOM Elements
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

// State
let currentCategory = 'all';

// Initialize
function init() {
  renderPresets();
  renderTools(currentCategory);
  setupEventListeners();

  // Initial trigger with first preset
  loadPreset(0);
}

// Render Presets
function renderPresets() {
  presetsContainer.innerHTML = '';
  PRESETS.forEach((preset, index) => {
    const chip = document.createElement('button');
    chip.className = `preset-chip ${index === 0 ? 'active' : ''}`;
    chip.textContent = preset.name;
    chip.addEventListener('click', () => {
      document.querySelectorAll('.preset-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      loadPreset(index);
    });
    presetsContainer.appendChild(chip);
  });
}

function loadPreset(index) {
  intentInput.value = PRESETS[index].text;
  generatePipeline(PRESETS[index].text);
}

// Generate Pipeline Flow based on intent
function generatePipeline(intent) {
  if (!intent.trim()) return;

  const steps = [
    {
      num: 1,
      title: '지식 탐구 & 심층 리서치',
      tool: 'NotebookLM & Deep Research',
      badgeClass: 'badge-research',
      desc: `[${intent}] 개발에 필요한 핵심 도메인 스펙과 기술 비교를 Deep Research로 조사하고, 산출물을 NotebookLM에 등록하여 오차 없는 RAG 지식 기반을 확정합니다.`,
      skill: 'google-deep-research',
      toolRef: 'notebooklm',
      prompt: `[Deep Research 쿼리]: "${intent}" 구현을 위한 핵심 아키텍처 스펙, 오픈소스 라이브러리 벤치마크, 예외 처리 규칙을 완벽히 정리한 기술 분석 리포트 작성.`
    },
    {
      num: 2,
      title: 'UI 기획 & 고속 프론트엔드 빌드',
      tool: 'Google Stitch & Web Code Canvas',
      badgeClass: 'badge-ui',
      desc: `프롬프트 기반으로 Google Stitch에서 다크모드/글래스모피즘 완성형 HTML/CSS를 추출하고, Code Canvas에서 컴포넌트 렌더링을 실시간 검증합니다.`,
      skill: 'google-stitch-ui',
      toolRef: 'stitch',
      prompt: `[Google Stitch 프롬프트]: "${intent}"을 위한 세련된 다크 모드 반응형 웹 인터페이스 생성. 헤더 네비게이션, 핵심 대시보드 카드 4개, 인터랙티브 캔버스 패널 포함.`
    },
    {
      num: 3,
      title: '에이전틱 엔지니어링 & 통합',
      tool: 'Antigravity Agent & Project IDX',
      badgeClass: 'badge-code',
      desc: `Antigravity가 Stitch에서 추출된 마크다운/HTML을 가져와 모듈형 컴포넌트로 구조화하고, 상태 관리 및 비즈니스 로직을 자율적으로 바인딩합니다.`,
      skill: 'google-master',
      toolRef: 'antigravity',
      prompt: `Antigravity Agent 실행: Stitch의 UI 마크업에 동적 상태 관리 로직을 연결하고, Project IDX 호환 구조로 리팩토링하라.`
    },
    {
      num: 4,
      title: 'AI 모델 엔진 & 온디바이스 연동',
      tool: intent.includes('Gemma') || intent.includes('로컬') || intent.includes('온디바이스') ? 'Gemma 9B (Local Ollama)' : 'Google AI Studio (Gemini Flash)',
      badgeClass: 'badge-model',
      desc: `클라우드 Gemini API 또는 로컬 Gemma 오픈 가중치 모델을 프로젝트에 주입하고, 최적화된 시스템 인스트럭션과 JSON 출력을 설정합니다.`,
      skill: 'google-model-hub',
      toolRef: intent.includes('Gemma') || intent.includes('로컬') || intent.includes('온디바이스') ? 'gemma' : 'ai-studio',
      prompt: `[System Instruction]: 당신은 "${intent}" 시스템의 핵심 인텔리전스 엔진입니다. 빠르고 정확한 JSON 스키마 형식으로 응답을 출력하십시오.`
    },
    {
      num: 5,
      title: '쇼케이스, 데모 & 비주얼 에셋',
      tool: 'Google Vids & Veo / ImageFX',
      badgeClass: 'badge-media',
      desc: `완성된 서비스의 릴리즈 쇼케이스 영상을 Google Vids로 자동 제작하고, Veo 및 ImageFX를 통해 고품질 비주얼 에셋을 보강합니다.`,
      skill: 'google-master',
      toolRef: 'vids',
      prompt: `[Google Vids 스토리보드]: "${intent}"의 주요 기능과 사용 흐름을 60초 내에 강렬하게 보여주는 데모 비디오 연출 및 AI 내레이션 스크립트 생성.`
    }
  ];

  pipelineFlow.innerHTML = '';
  steps.forEach(step => {
    const card = document.createElement('div');
    card.className = 'pipeline-step-card';
    card.innerHTML = `
      <div class="step-card-header">
        <div class="step-title-group">
          <div class="step-num">${step.num}</div>
          <div class="step-name">${step.title}</div>
        </div>
        <div class="step-tool-badge ${step.badgeClass}">⚡ ${step.tool}</div>
      </div>
      <p class="step-desc">${step.desc}</p>
      <div class="step-actions">
        <div class="step-skill-command">
          <span>🛠️ Antigravity:</span>
          <code>.agents/skills/${step.skill}/</code>
        </div>
        <div class="step-buttons">
          <button class="btn-secondary btn-copy" onclick="openPromptModal('${step.toolRef}', \`${escapeText(step.prompt)}\`)">
            ✨ 최적화 프롬프트 보기
          </button>
          <button class="btn-secondary" onclick="copyToClipboard('${step.prompt}', '도구 프롬프트가 복사되었습니다!')">
            📋 프롬프트 복사
          </button>
        </div>
      </div>
    `;
    pipelineFlow.appendChild(card);
  });
}

function escapeText(str) {
  return str.replace(/"/g, '&quot;').replace(/'/g, "\\'").replace(/\n/g, '\\n');
}

// Render Tools Grid
function renderTools(category) {
  toolsGrid.innerHTML = '';
  const filtered = category === 'all' 
    ? GOOGLE_TOOLS 
    : GOOGLE_TOOLS.filter(t => t.category === category);

  filtered.forEach(tool => {
    const card = document.createElement('div');
    card.className = 'tool-card';
    card.innerHTML = `
      <div>
        <div class="tool-top">
          <div>
            <h3 class="tool-title">${tool.name}</h3>
            <span class="tool-category-badge">${tool.categoryName}</span>
          </div>
        </div>
        <p class="tool-desc">${tool.desc}</p>
        <div class="tool-antigravity-integration">
          <div class="integration-label">Antigravity 연계 팁</div>
          <div class="integration-text">${tool.antigravityTip}</div>
        </div>
      </div>
      <div class="tool-footer">
        <button class="btn-secondary" onclick="openPromptModal('${tool.id}')">
          ✨ 프롬프트 조립
        </button>
        <a class="btn-secondary" href="${tool.link}" target="_blank" rel="noopener noreferrer">
          ↗ 콘솔 바로가기
        </a>
      </div>
    `;
    toolsGrid.appendChild(card);
  });
}

// Modal Handlers
function openPromptModal(toolId, customPrompt = null) {
  const tool = GOOGLE_TOOLS.find(t => t.id === toolId);
  if (!tool) return;

  modalTitle.textContent = `${tool.name} 전용 최적화 프롬프트`;
  const currentIntent = intentInput.value || '모던 웹 애플리케이션';
  
  if (customPrompt) {
    modalPromptText.value = customPrompt.replace(/\\n/g, '\n');
  } else {
    modalPromptText.value = tool.promptTemplate.replace(/{INTENT}/g, currentIntent);
  }

  modalOverlay.classList.add('active');
}

function closeModal() {
  modalOverlay.classList.remove('active');
}

// Clipboard Copy & Toast
function copyToClipboard(text, message = '클립보드에 복사되었습니다!') {
  navigator.clipboard.writeText(text).then(() => {
    showToast(message);
  }).catch(() => {
    // Fallback
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    showToast(message);
  });
}

function showToast(message) {
  toastMessage.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2600);
}

// Event Listeners
function setupEventListeners() {
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
    copyToClipboard(modalPromptText.value, '프롬프트가 클립보드에 복사되었습니다!');
    closeModal();
  });
}

// Start
document.addEventListener('DOMContentLoaded', init);
