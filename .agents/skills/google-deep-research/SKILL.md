---
name: google-deep-research
description: >-
  Use this skill when conducting deep technical research, architectural trade-off evaluations, competitor analysis, preparing source documents for NotebookLM RAG, or formulating structured learning plans using Google Deep Research and Guided Learning before coding.
---

# Google Deep Research & NotebookLM Skill

이 스킬은 **Google Deep Research**와 **NotebookLM**을 활용하여 신뢰할 수 있는 소스를 기반으로 아키텍처 결정을 내리고, 방대한 기술 자료를 정제하여 오차 없는 RAG 지식 기반을 구축하는 절차를 다룹니다.

---

## 🛠️ 실행 절차 (Workflow Procedure)

### 1단계: Deep Research용 다단계 질의 설계
개발 시 마주치는 복잡한 기술적 의사결정(예: "온디바이스 LLM 프레임워크 비교: Ollama vs ONNX Runtime vs llama.cpp")에 대해 Deep Research가 자율 웹 탐색을 심층 수행할 수 있도록 명확한 조사 쿼리를 구성합니다:

```text
[Research Topic]: [조사 주제]
[Core Objectives]:
1. 기술적 장단점 및 벤치마크 비교 (메모리 사용량, 추론 속도, 지원 모델 규격)
2. 라이선스 및 상업적 사용 제약 조건
3. 최신 프로덕션 사례 및 알려진 기술적 병목(Gotchas)
[Output Structure]:
- Executive Summary (결론 요약)
- 세부 비교 분석 표 (Feature Comparison Matrix)
- 권장 기술 스택 및 아키텍처 제안
- 신뢰할 수 있는 공식 문서 및 벤치마크 출처 링크 목록
```

### 2단계: NotebookLM용 지식 소스(Source Grounding) 패키징
Deep Research 보고서, 공식 API 문서, PDF 백서 등을 NotebookLM의 업로드 소스로 활용할 수 있도록 마크다운 형식으로 정제하고 정리합니다:
1. **핵심 요약 문서 (`knowledge-source.md`) 작성**: 노이즈를 제거하고 핵심 스펙, API 엔드포인트, 데이터 스키마만 압축.
2. **NotebookLM 프롬프트 질의 생성**:
   - *"이 소스에 명시된 데이터 모델 간의 관계와 예외 처리 규칙을 표로 정리해 줘."*
   - *"개발 팀 온보딩용 5분 오디오 팟캐스트(Audio Overview)를 생성해 줘."*

### 3단계: 도출된 결론을 Antigravity 아키텍처로 전환
NotebookLM과 Deep Research를 통해 확정된 스펙을 기반으로, Antigravity 에이전트가 바로 코딩에 착수할 수 있도록 `ARCHITECTURE.md` 또는 모듈 설계 명세서를 자동 수립합니다.
