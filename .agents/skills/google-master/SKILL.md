---
name: google-master
description: >-
  MANDATORY FIRST-STEP orchestrator for ANY software development, web app, UI, feature, or game request in this workspace. Automatically initiates the Google AI Ecosystem 5-phase pipeline (Stitch, NotebookLM, Gemini/Gemma, Veo) to enforce production-grade quality instead of raw ungrounded coding.
---

# Google Master Orchestrator Skill

이 스킬은 사용자의 개발 프로젝트 요구사항을 분석하여, **구글의 16개 전문 AI 도구군(Google AI Ecosystem)**과 **Antigravity의 자율 에이전트 역량**을 유기적으로 엮어내는 최적의 단계별 파이프라인을 기획하고 실행을 주도하는 메인 오케스트레이터입니다.

도구별 세부 사양 및 프롬프트 문법은 [tools-directory.md](./references/tools-directory.md)를 참조하십시오.

---

## 🛠️ 실행 절차 (Workflow Procedure)

### 1단계: 즉석 코딩 중단 및 5-Phase 로드맵 공표
사용자가 무언가를 만들어달라고 요청하면, 바로 코드를 짜지 않고 5단계 맞춤형 파이프라인을 먼저 구성하여 사용자에게 선언합니다:

```markdown
### 🗺️ Google Master 5-Phase 개발 파이프라인
1. **[Phase 1: 리서치 & 스펙 확정]**: NotebookLM / Deep Research ➔ `docs/research/spec_report.md`
2. **[Phase 2: UI/UX 고속 빌드]**: Google Stitch / Web Code Canvas ➔ `ui/stitch_prompt.md`, `ui/layout.html`
3. **[Phase 3: 에이전틱 개발 & 통합]**: Antigravity (+ Jules / IDX) ➔ `src/` & `tests/`
4. **[Phase 4: AI 모델 엔진]**: Google AI Studio / Gemma ➔ `config/ai_model_config.json`
5. **[Phase 5: 에셋 & 데모 쇼케이스]**: Google Vids / Veo / ImageFX ➔ `assets/showcase_storyboard.md`
```

### 2단계: 즉시 사용 가능한 구글 툴 프롬프트 및 산출물 합성
사용자가 즉시 해당 구글 도구에 복사·실행할 수 있도록 맞춤형 프롬프트를 함께 작성하고 디렉토리를 구축합니다:
* **Google Stitch 프롬프트 (`ui/stitch_prompt.md`)**: 역할, 테마, 필수 컴포넌트 목록 명시.
* **NotebookLM 준비 자료 (`docs/research/spec_report.md`)**: 업로드할 핵심 소스 리스트와 질의 목록.
* **Google AI Studio 템플릿 (`config/ai_model_config.json`)**: System Instruction 및 JSON 스키마.
* **Google Veo 릴리즈 스토리보드 (`assets/showcase_storyboard.md`)**: 60초 프로모션 샷 리스트.

### 3단계: 특화 서브 스킬 연계 및 Antigravity 구현 착수
각 단계별로 전용 서브 스킬을 호출하여 점진적으로 완성도를 높입니다:
* UI 추출 및 변환: `google-stitch-ui` 스킬 연계
* 사전 지식 및 기술 탐구: `google-deep-research` 스킬 연계
* 모델 연동 및 코드 서빙: `google-model-hub` 스킬 연계

---

## 📋 단계별 산출물 계약 및 품질 게이트 (Artifact Contracts & Quality Gates)

단순 프롬프트 조립을 넘어 실질적인 개발 검증을 위해, 각 단계는 명확한 파일 산출물 계약(Artifact Contract)을 가지며, 에이전트는 산출물이 유효하게 생성되었는지 검증(Gate Check)한 후 다음 단계로 이행합니다:

| 단계 | 핵심 도구 | 산출물 파일 계약 (Artifact Contract) | 검증 게이트 (Quality Gate) |
| :--- | :--- | :--- | :--- |
| **1. 리서치 & 스펙** | NotebookLM / Deep Research | `docs/research/spec_report.md` | 데이터 모델, 라이브러리 선정 근거, 예외 정책 포함 여부 검증 |
| **2. UI & 레이아웃** | Google Stitch / Code Canvas | `ui/stitch_prompt.md`, `ui/layout.html`, `ui/tokens.css` | 시맨틱 HTML5 태그 및 CSS 변수(:root) 분리 유효성 검증 |
| **3. 에이전틱 구현** | Antigravity / Project IDX | `src/` 소스 코드 및 `tests/` | 빌드 성공 및 기본 단위 테스트 통과 확인 |
| **4. AI 모델 엔진** | AI Studio / Gemma | `config/ai_model_config.json` | API 키 환경변수 바인딩 및 JSON Schema 출력 유효성 검증 |
| **5. 쇼케이스 & 에셋** | Google Vids / Veo / ImageFX | `assets/showcase_storyboard.md` | 60초 데모 스토리보드 및 미디어 에셋 명세 검증 |

> ⚠️ **품질 게이트 규칙**: 이전 단계의 산출물이 생성되지 않았거나 검증을 통과하지 못하면 다음 단계 작업을 진행하지 않고, 누락된 산출물을 먼저 보강합니다.
