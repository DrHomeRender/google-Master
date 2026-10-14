# 🧭 Google Master (한국어 안내)

[🌐 라이브 웹 허브 체험하기](https://drhomerender.github.io/google-Master/) | [English Documentation](./README.md)

**Google Master**는 구글의 핵심 AI 도구 16종([구글 앱 정리.md](./구글%20앱%20정리.md))을 Antigravity 에이전트와 유기적으로 결합하여, 리서치부터 배포까지의 개발 흐름을 5단계로 체계화한 **구글 AI 생태계 오케스트레이션 개발 도구**입니다.

---

## 🌟 왜 Google Master인가? (저자의 개발 철학)

### 💡 솔직한 현실: Claude와 GPT의 시대에서
최근 AI 개발 시장은 단일 모델 벤치마크와 강력한 성능을 앞세운 OpenAI(GPT)와 Anthropic(Claude)이 점유율을 크게 차지하고 있습니다. 솔직히 순수 단일 모델의 단발성 코딩 완성도나 벤치마크 수치만 보면 Gemini 단독으로는 아쉬운 평가를 받기도 합니다.

하지만 **"AI 혼자 파일 하나 열어서 단발성으로 코딩하는 방식"**에는 치명적인 함정이 있습니다:
* **환각(Hallucination)**으로 인한 비즈니스 로직 왜곡
* 도메인 스펙과 문서 레퍼런스 부재로 인한 구조적 붕괴
* 디자이너의 손을 거치지 않아 발생하는 밋밋하고 천편일률적인 UI
* 대형 모델 단독 호출로 인한 막대한 API 비용 낭비

### ⚡ 구글 생태계의 진짜 무기: 파편화되었지만 강력하고 저렴한 16개 특화 도구군
구글의 진정한 경쟁력은 단일 LLM 하나에 있지 않습니다. **세계 최고 수준의 전문성을 가지면서도 압도적으로 저렴하고(대부분 무료 티어 제공), 세부 영역에 특화된 16개의 도구군**이 구글의 진짜 무기입니다:
* **Google Stitch**: 프롬프트/스케치 기반으로 시맨틱 HTML과 완벽한 CSS 디자인 토큰을 생성 (단일 LLM의 코드 생성 UI와는 차원이 다른 퀄리티)
* **NotebookLM**: 원본 문서에만 100% 근거(Grounding)하여 오차와 환각 없는 도메인 스펙 도출
* **Google Deep Research**: 다단계 웹 심층 탐색을 통한 체계적인 기술 리포트
* **Gemma (1B~27B)**: 비용 0원, 완전한 프라이버시가 보장되는 로컬 온디바이스 모델
* **Google Veo & Vids**: 영화급 1080p 릴리즈 쇼케이스 영상 및 프레젠테이션 자동 생성

### 🧩 문제와 해결책: 흩어진 도구들을 지휘하는 마에스트로
**문제는 이 막강한 도구들이 각기 다른 콘솔에 흩어져 있고, 많은 개발자들이 이 도구들의 존재조차 모른다는 점입니다.**  
게다가 가장 강력한 개발 환경인 Antigravity조차 이런 도구들을 활용하지 않고 혼자서 코딩하려다 한계에 부딪힙니다.

**Google Master가 존재하는 이유입니다:**  
Google Master는 Antigravity 에이전트의 헌법([AGENTS.md](./AGENTS.md))으로 설치되어, **에이전트가 단독으로 섣부른 즉석 코딩을 진행하는 것을 엄격히 금지**합니다. 대신 16개의 전문 구글 도구들을 소환하여 **5단계 표준 엔지니어링 파이프라인(리서치 ➔ UI ➔ 코어 ➔ 모델 ➔ 쇼케이스)**으로 지휘함으로써, 단일 모델 코딩과는 차원이 다른 프로덕션 퀄리티를 완성합니다.

### 🛡️ 절대 원칙: 거짓말과 과장 없는 투명한 실행 (Zero-Deception Engineering)
소비자와 개발자의 불신을 낳고 LLM을 시장에서 사장시키는 가장 큰 원인은 **"하지도 않은 일을 된 것처럼 꾸며내는 AI의 거짓말과 과장"**입니다. Google Master는 이를 최우선으로 원천 차단합니다:
1. **가짜 완료 사칭 금지**: 계정 인증이 없는 도구(Stitch, Veo 등)에 대해 텍스트 파일 몇 줄 써놓고 "연동 완료"라고 기만하지 않습니다.
2. **실행 경계의 투명한 사전 고지**: 에이전트가 로컬에서 직접 실행할 수 있는 영역(코드 작성, API 키 통신, 브라우저 녹화)과 사용자의 계정 로그인이 필요한 영역(Stitch, Veo 등)을 사전에 명확히 분리하여 솔직하게 밝힙니다.
3. **사전 동의와 합의**: 사후 변명 대신 "이렇게 진행하고자 하는데 맞습니까?"라는 사전 합의 과정을 강제합니다.

---

## 🎯 생태계 포지셔닝 및 핵심 차별점

현재 구글 AI 생태계에는 유용한 개별 도구 간 연동 사례가 다수 존재합니다:
* Google 공식 Codelab: Google Stitch와 Antigravity의 MCP 기반 디자인-코드 연동
* 커뮤니티 프로젝트: `notebooklm-mcp-cli`, Google Labs `stitch-skills`, 에이전트 스킬 컬렉션 등

**Google Master의 차별점은 전(全) 개발 주기를 포괄하는 5단계 통합 오케스트레이션입니다:**
단순히 2개 도구를 1:1로 잇는 것을 넘어, **16종의 구글 AI 도구를 하나의 체계적인 5단계 라이프사이클(리서치 ➔ UI ➔ 엔지니어링 ➔ 모델 연동 ➔ 쇼케이스)**로 엮어냅니다:
* **다요소 인텐트 라우팅 (Multi-Factor Intent Routing)**: 보안/비용/지연시간 요구사항에 맞춰 최적 모델(Gemini 3 Pro/Flash, Gemma 2/3 로컬, Vertex AI 엔터프라이즈)을 자동 분기.
* **1-클릭 프롬프트 포지 (Prompt Forge)**: 각 도구별 최적화된 프롬프트 템플릿 즉시 합성.
* **명시적 산출물 계약 및 검증 게이트 (Verifiable Artifact Contracts)**: 단순 텍스트 생성이 아닌 실제 검증 가능한 파일 산출물(`docs/`, `ui/`, `src/`, `config/`, `assets/`)을 확인 후 다음 단계로 이행.

---

## 📂 프로젝트 구조

```text
Google master/
├── 구글 앱 정리.md              # 구글 핵심 AI 도구 카테고리별 요약 명세서
├── README.md                  # 영문 공식 문서 (Global Official Docs)
├── README.ko.md               # 한국어 가이드 문서
├── web/                       # Google Master 비주얼 대시보드 (Web Hub)
│   ├── index.html             # 메인 허브 마크업
│   ├── style.css              # 웜 데이라이트 디자인 시스템 (다크 모드 전환 지원)
│   └── app.js                 # 인텐트 파이프라인 생성 및 프롬프트 조립 엔진
└── .agents/                   # Antigravity 전용 커스터마이징 계층
    ├── rules/
    │   └── google-master-guide.md   # 개발 의도 감지 및 선제적 도구 추천 행동 규칙
    └── skills/
        ├── google-master/           # [메인] 전체 구글 AI 파이프라인 기획 및 라우팅 오케스트레이터
        │   ├── SKILL.md
        │   └── references/
        │       └── tools-directory.md  # 도구별 상세 프롬프트 규격 및 활용 레퍼런스
        ├── google-stitch-ui/        # Google Stitch 및 Code Canvas 기반 UI 생성/변환 스킬
        │   └── SKILL.md
        ├── google-deep-research/    # Deep Research & NotebookLM RAG 기술 분석 스킬
        │   └── SKILL.md
        └── google-model-hub/        # Gemini API (AI Studio) 및 Gemma 온디바이스 연동 스킬
            └── SKILL.md
```

---

## ⚡ 어떻게 동작하나요?

1. **자동 의도 감지 (Rule-driven)**:
   - 사용자가 Antigravity에게 *"새로운 앱 아이디어가 있어"* 또는 *"이런 기능을 만들고 싶어"*라고 말하면, Antigravity가 [google-master-guide.md](./.agents/rules/google-master-guide.md)에 따라 단계별 최적 구글 AI 도구(Stitch, NotebookLM, Gemma 등)를 선제적으로 제안합니다.

2. **구글 전용 프롬프트 자동 조립 (Prompt Synthesis)**:
   - 각 도구에 최적화된 프롬프트(예: Google Stitch용 UI 명세서, NotebookLM용 소스 요약본, AI Studio용 System Instruction)를 클릭 한 번으로 복사할 수 있게 자동 생성합니다.

3. **심층 스킬 연계**:
   - UI가 필요할 때: `google-stitch-ui` 스킬이 작동하여 Stitch 결과물 HTML/CSS를 가져와 바로 컴포넌트화합니다.
   - 선행 기술 분석이 필요할 때: `google-deep-research` 스킬이 NotebookLM과 연계하여 오차 없는 스펙을 확정합니다.
   - AI 모델을 탑재할 때: `google-model-hub` 스킬이 최적 모델(Gemini 클라우드 vs Gemma 온디바이스)을 선택하고 연동 코드를 주입합니다.

4. **단계별 산출물 계약 및 품질 게이트**:
   - Phase 1: `docs/research/spec_report.md` (도메인 분석 및 기술 벤치마크)
   - Phase 2: `ui/layout.html`, `ui/tokens.css` (시맨틱 UI 및 디자인 토큰)
   - Phase 3: `src/` 및 단위 테스트 (핵심 기능 구현)
   - Phase 4: `config/ai_model_config.json` (JSON Schema 연동)
   - Phase 5: `assets/showcase_storyboard.md` (런칭 데모 스토리보드)

---

## 🗺️ 프로젝트 발전 로드맵

| 마일스톤 | 현황 | 범위 및 구현 내용 |
| :--- | :--- | :--- |
| **v1.0 기본 스킬** | ✅ 완료 | 안티그래비티 초기 스킬 및 행동 규칙 수립 |
| **v2.0 웹 허브 & i18n** | ✅ 완료 | 인터랙티브 웹 대시보드, 영/한 다국어 전환, 웜 데이라이트 테마 |
| **v2.2 프로덕션 강화** | ✅ 완료 | P0 XSS 보안 결함 제거, 정적 HTML 사전 렌더링(SEO 극대화), 산출물 계약 체결 |
| **v3.0 MCP 직접 실행** | 🚀 계획 | Model Context Protocol(MCP)을 통해 Stitch SDK, NotebookLM CLI, Gemma API를 수동 복붙 없이 에이전트가 직접 호출 및 실행 |

---

## 🖥️ Web Hub 로컬 실행

Google Master 인터랙티브 비주얼 대시보드를 브라우저에서 실행하려면:

```bash
# Python 내장 서버로 실행 (포트 3000)
python -m http.server 3000 --directory web

# 또는 npx serve
npx -y serve web -p 3000
```
실행 후 브라우저에서 `http://localhost:3000` 접속.

---

## 👨‍💻 제작자 (Creator)

**정성운 (Jung SungWoon)** • GitHub: [@DrHomeRender](https://github.com/DrHomeRender)

