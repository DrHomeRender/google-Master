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

### 1단계: 즉석 코딩 중단 및 역할 분담·로드맵 공표
사용자가 게임, 웹앱, 기능 개발을 요청하면 바로 코드를 짜지 않고, 파편화된 구글 도구별 **공식 콘솔 URL**과 **MCP 직접 연동 가능 여부**를 명시한 5단계 맞춤형 로드맵을 먼저 선언합니다 ([AGENTS.md](../../../AGENTS.md) 제3조 템플릿 준수):

* **에이전트 직접 수행**: 로컬 코어 코딩(`src/`), 캔버스 렌더링, 웹 검색, 단위 테스트, Gemini API 키 바인딩.
* **사용자 콘솔 URL & 프롬프트 패키징**:
  * Stitch UI: `https://stitch.withgoogle.com` (또는 Stitch MCP로 직접 연동)
  * NotebookLM RAG: `https://notebooklm.google.com` (공식 마크다운 스펙 제공)
  * Veo/ImageFX 에셋: `https://aitestkitchen.withgoogle.com` (시네마틱 샷 리스트 제공)
* **MCP 직접 연동 옵션 안내**:
  * Google Stitch는 공식 MCP(`@_davideast/stitch-mcp`)를 지원하므로, 사용자 1회 인증(`gcloud auth login`) 시 에이전트가 화면 코드를 직접 긁어와 프로젝트에 주입 가능함을 알립니다.

### 2단계: 즉시 사용 가능한 구글 툴 프롬프트 및 산출물 합성
사용자가 공식 콘솔 URL로 이동하여 바로 붙여넣을 수 있도록 맞춤형 프롬프트를 함께 작성하고 디렉토리를 구축합니다:
* **Google Stitch 프롬프트 (`ui/stitch_prompt.md`)**: [stitch.withgoogle.com](https://stitch.withgoogle.com) 전용 UI 구조, HSL 테마, 컴포넌트 명세. (또는 MCP 연동 시 직통 추출)
* **NotebookLM 준비 자료 (`docs/research/spec_report.md`)**: [notebooklm.google.com](https://notebooklm.google.com) 업로드용 핵심 소스 및 질의문.
* **Google AI Studio 템플릿 (`config/ai_model_config.json`)**: [aistudio.google.com](https://aistudio.google.com) 연동 System Instruction 및 JSON 스키마.
* **Google Veo 릴리즈 스토리보드 (`assets/showcase_storyboard.md`)**: [aitestkitchen.withgoogle.com](https://aitestkitchen.withgoogle.com) 60초 프로모션 샷 리스트.

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
