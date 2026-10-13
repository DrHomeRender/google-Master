---
name: google-master
description: >-
  Master orchestrator skill for the Google AI ecosystem. Use this skill when the user wants to plan, architect, or develop any software project using Google AI tools (Stitch, IDX, Code Canvas, Jules, AI Studio, Vertex AI, Gemma, NotebookLM, Deep Research, Vids, Veo, ImageFX), or needs an end-to-end multi-phase workflow recommendation connecting Antigravity with Google's specialized tools.
---

# Google Master Orchestrator Skill

이 스킬은 사용자의 개발 프로젝트 요구사항을 분석하여, **구글의 전문 AI 도구군(Google AI Ecosystem)**과 **Antigravity의 자율 에이전트 역량**을 유기적으로 엮어내는 최적의 단계별 파이프라인을 기획하고 실행을 주도하는 메인 스킬입니다.

도구별 세부 사양 및 프롬프트 문법은 [tools-directory.md](./references/tools-directory.md)를 참조하십시오.

---

## 🛠️ 실행 절차 (Workflow Procedure)

### 1단계: 사용자 개발 의도(Intent) 및 라이프사이클 분석
사용자가 만들고자 하는 대상(예: "실시간 음성 번역 앱", "데이터 대시보드", "전자상거래 플랫폼")을 확인하고 현재 필요한 단계를 분류합니다:
* **Research Phase**: 도메인 지식, 기술 스택 선정, 논문/API 문서 분석
* **Design & UI Phase**: 와이어프레임, 레이아웃, HTML/CSS 퍼블리싱
* **Core Development Phase**: 백엔드/프론트엔드 비즈니스 로직, 상태 관리, 리팩토링
* **AI & Intelligence Phase**: Gemini API 연동, Gemma 온디바이스 모델 탑재, 프롬프트 튜닝
* **Showcase & Creative Phase**: 데모 프레젠테이션 비디오, UI 에셋 생성

### 2단계: Google Master 5단계 맞춤형 파이프라인 생성
사용자에게 아래 형식의 구조화된 파이프라인 표를 제시합니다:

```markdown
### 🗺️ Google Master 권장 개발 파이프라인
1. **[리서치 & 스펙 확정]**: NotebookLM / Deep Research
   - 활용 목표: [구체적 리서치 목표]
2. **[UI/UX 고속 빌드]**: Google Stitch / Web Code Canvas
   - 활용 목표: [초기 UI 및 프론트엔드 코드 생성]
3. **[에이전틱 개발 & 통합]**: Antigravity (+ Jules / IDX)
   - 활용 목표: [코어 아키텍처 및 기능 구현]
4. **[AI 모델 엔진]**: Google AI Studio / Gemma
   - 활용 목표: [Gemini API 또는 온디바이스 모델 서빙]
5. **[에셋 & 데모 쇼케이스]**: Google Vids / Veo / ImageFX
   - 활용 목표: [쇼케이스 영상 및 비주얼 에셋 제작]
```

### 3단계: 즉시 사용 가능한 구글 툴 프롬프트 합성 (Prompt Synthesis)
사용자가 즉시 해당 구글 도구에 복사·실행할 수 있도록 맞춤형 프롬프트를 함께 출력합니다:
* **Google Stitch 프롬프트**: 역할, 테마(다크/글래스모피즘), 필수 컴포넌트 목록 명시.
* **NotebookLM 준비 자료**: 업로드할 핵심 소스 리스트와 질의 목록.
* **Google AI Studio 템플릿**: System Instruction 및 JSON 스키마.

### 4단계: 특화 서브 스킬 연계 및 Antigravity 구현 착수
사용자의 선택에 따라 전용 서브 스킬을 호출하거나 Antigravity에서 직접 구현을 진행합니다:
* UI 추출 및 변환 필요 시: `google-stitch-ui` 스킬 연계
* 사전 지식 및 기술 탐구 필요 시: `google-deep-research` 스킬 연계
* 모델 연동 및 코드 서빙 필요 시: `google-model-hub` 스킬 연계
