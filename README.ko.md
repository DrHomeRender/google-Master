# 🧭 Google Master (한국어 안내)

[🌐 라이브 웹 허브 체험하기](https://drhomerender.github.io/google-Master/) | [English Documentation](./README.md)

**Google Master**는 구글의 최신 AI 도구 생태계([구글 앱 정리.md](./구글%20앱%20정리.md))를 Antigravity 에이전트와 유기적으로 결합하여, 사용자가 개발 아이디어를 제시할 때 단계별 최적 도구와 스킬을 자동으로 추천하고 실행하도록 돕는 **AI 오케스트레이션 개발 지원 시스템**입니다.

---

## 📂 프로젝트 구조

```text
Google master/
├── 구글 앱 정리.md              # 구글 핵심 AI 도구 카테고리별 요약 명세서
├── README.md                  # 영문 공식 문서 (Global Official Docs)
├── README.ko.md               # 한국어 가이드 문서
├── web/                       # Google Master 비주얼 대시보드 (Web Hub)
│   ├── index.html             # 메인 허브 마크업
│   ├── style.css              # 다크/글래스모피즘 모던 디자인 시스템
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

