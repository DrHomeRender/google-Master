# 📚 Google AI Ecosystem Tools Directory & Prompting Reference

이 레퍼런스는 Google Master가 사용자의 요청에 맞춰 최적의 구글 AI 도구로 라우팅하고, 각 도구에 적합한 공식 웹 콘솔 URL, MCP 지원 여부, 프롬프트 규격을 제공하기 위한 상세 기술 명세서입니다.

---

## ⚡ 구글 16대 도구 공식 URL & MCP 연동 매트릭스

구글의 전문 도구들이 각기 다른 콘솔로 파편화되어 있으므로, 공식 접속 URL과 에이전트 연동 방식을 명확히 구분합니다:

| 도구명 | 카테고리 | 공식 콘솔 URL | MCP / API 상태 | Antigravity 연동 방식 |
| :--- | :--- | :--- | :--- | :--- |
| **Google Stitch** | UI 디자인 | [stitch.withgoogle.com](https://stitch.withgoogle.com) | ✅ 공식 MCP (`@_davideast/stitch-mcp`) | `gcloud` 1회 인증 시 에이전트가 화면 코드 직접 추출 |
| **Firebase Studio** | 클라우드 IDE | [firebase.studio](https://firebase.studio) | 🌐 웹 기반 IDE | 에이전트가 템플릿 및 환경 프롬프트 제공 |
| **Code Canvas** | 인터랙티브 UI | [gemini.google.com](https://gemini.google.com) | 💬 대화형 캔버스 | 위젯 단위 즉시 렌더링 프롬프트 제공 |
| **Antigravity / Jules** | 자율 에이전트 | [jules.google](https://jules.google) | 🤖 네이티브 에이전트 | 로컬 파일/빌드/테스트 100% 직접 실행 |
| **Google AI Studio** | LLM 개발자 콘솔 | [aistudio.google.com](https://aistudio.google.com) | 🔑 공식 SDK (`@google/genai`) | `GEMINI_API_KEY`로 100% 직접 통신 및 연동 |
| **Vertex AI** | 엔터프라이즈 AI | [console.cloud.google.com](https://console.cloud.google.com/vertex-ai) | 🔑 GCP Service Account | 서비스 계정 키 바인딩 시 백엔드 100% 자동 호출 |
| **Gemma** | 온디바이스 모델 | [ai.google.dev/gemma](https://ai.google.dev/gemma) | 💻 로컬 CLI / Ollama | 로컬 Ollama 엔드포인트로 100% 직접 추론 |
| **NotebookLM** | 도메인 RAG/팟캐스트 | [notebooklm.google.com](https://notebooklm.google.com) | ⚠️ 공식 MCP/API 없음 (비공식만 존재) | 에이전트가 마크다운 소스 및 질의 패키징 제공 |
| **Deep Research** | 심층 웹 탐색 | [gemini.google.com](https://gemini.google.com) | 🔍 브라우저 기능 | 에이전트가 `search_web` 직접 실행 또는 쿼리 제공 |
| **Guided Learning** | 소크라테스식 학습 | [gemini.google.com](https://gemini.google.com) | 💬 대화형 튜터 | 단계별 학습 커리큘럼 프롬프트 제공 |
| **Google Vids** | 업무 영상/발표 | [vids.google.com](https://vids.google.com) | 🎬 Workspace 앱 | 스토리보드 및 슬라이드 스크립트 패키징 제공 |
| **Google Veo** | 1080p 시네마틱 영상 | [aitestkitchen.withgoogle.com](https://aitestkitchen.withgoogle.com) | 🎥 Vertex AI API (유료) / 공식 MCP 없음 | 웹 콘솔용 샷 리스트 제공 (유료 키 보유 시 코드로 자동 생성) |
| **AI Test Kitchen** | 이미지/음악 생성 | [aitestkitchen.withgoogle.com](https://aitestkitchen.withgoogle.com) | 🎨 실험적 웹 콘솔 | ImageFX/MusicFX 전용 프롬프트 패키징 제공 |
| **Workspace Gemini** | 오피스 자동화 | [workspace.google.com](https://workspace.google.com) | 📑 Workspace Add-on / API | 시트 수식/문서 생성용 Apps Script 제공 |
| **Temporary Chat** | 프라이빗 세션 | [gemini.google.com](https://gemini.google.com) | 🔒 브라우저 1회성 세션 | 휘발성 보안 작업용 가이드 제공 |

---

## 1. 프론트엔드 & UI 디자인

### 1.1 Google Stitch
* **공식 콘솔**: [stitch.withgoogle.com](https://stitch.withgoogle.com)
* **MCP 서버**: `stitch.googleapis.com/mcp` (또는 `npx @_davideast/stitch-mcp`)
* **개요**: 텍스트 프롬프트 또는 핸드 드로잉 스케치를 기반으로 반응형 웹/앱 UI 디자인과 프론트엔드 코드(HTML/CSS/JS)를 즉시 생성하는 도구.
* **최적 사용 시점**: 프로젝트 착수 직후, 와이어프레임 제작 단계, 대시보드/랜딩페이지 초기 비주얼 레이아웃 구축 시.
* **프롬프트 템플릿 구조**:
  ```text
  [Role & Goal]: 현대적이고 반응형인 [앱 유형/목적] UI 레이아웃을 생성해 줘.
  [Style & Theme]: 다크 모드, 글래스모피즘, 정제된 HSL 컬러 팔레트, 모던 폰트 적용.
  [Components Needed]:
  - 상단 내비게이션 바 (브랜드 로고, 글로벌 검색창, 알림 및 프로필)
  - 핵심 대시보드 영역 (메인 메트릭 카드 3개, 실시간 그래프 플레이스홀더)
  - 액션 패널 (필터링 드롭다운, 데이터 테이블/리스트)
  [Output Format]: 단일 HTML 및 포함된 인라인 CSS (또는 바닐라 CSS 구조)로 출력.
  ```
* **Antigravity 연계**: Stitch에서 생성된 코드를 Antigravity로 불러와 모듈형 컴포넌트로 분리하고 동적 상태 관리 로직을 바인딩.

### 1.2 Gemini Web Code Canvas
* **개요**: Gemini 대화 인터페이스 내에서 프론트엔드 코드를 직접 렌더링하고 실시간으로 시각적 피드백을 보면서 양방향으로 수정하는 캔버스.
* **최적 사용 시점**: 특정 UI 컴포넌트(모달, 차트, 애니메이션 버튼 등)를 단위 테스트하거나 인터랙티브하게 빠르게 다듬을 때.

### 1.3 Project IDX
* **개요**: 브라우저 기반 풀스택 클라우드 IDE. Gemini 코드 어시스턴트와 다양한 플랫폼(Android, Web) 에뮬레이터가 기본 탑재.
* **최적 사용 시점**: 로컬 환경 설정 없이 즉각적인 클라우드 협업, 멀티플랫폼 모바일/웹 크로스 렌더링 테스트 시.

---

## 2. 개발 인프라 & 지능형 모델

### 2.1 Google AI Studio
* **개요**: 최신 Gemini 모델(Gemini 1.5 Pro/Flash 등)을 빠르게 실험하고, System Instruction을 조정하며, 즉시 사용할 수 있는 API 키 및 코드를 추출하는 개발자 플레이그라운드.
* **최적 사용 시점**: LLM 기능 구현 전 프롬프트 테스트, 구조화된 출력(JSON Schema) 검증, 파인튜닝 테스트.
* **Antigravity 연계**: AI Studio에서 튜닝한 System Instruction과 JSON 스키마를 Antigravity 에이전트 코드베이스에 즉시 주입.

### 2.2 Gemma (젬마)
* **개요**: 구글이 공개한 오픈 가중치 경량 고성능 LLM (2B, 9B, 27B). 로컬 PC, 온디바이스, 프라이빗 서버 구동에 최적화.
* **최적 사용 시점**: 클라우드 비용 절감, 오프라인 구동 요구사항, 데이터 프라이버시가 핵심인 로컬 데스크톱/엣지 앱 개발 시.
* **Antigravity 연계**: Ollama, vLLM, 또는 HuggingFace Transformers 기반 로컬 서빙 스크립트 자동 생성.

### 2.3 Jules & Google Antigravity
* **개요**: 복잡한 대규모 코드 리팩토링, 이슈 해결, 백그라운드 자율 빌드 및 디버깅을 수행하는 최첨단 개발자 에이전트.
* **최적 사용 시점**: 비동기식 대규모 작업 위임, 지속적인 코드 품질 개선.

---

## 3. 심층 지식 탐구 & RAG

### 3.1 NotebookLM
* **개요**: 사용자가 지정한 출처(PDF, 문서, 웹 링크)만을 절대적 진실(Ground Truth)로 삼아 질의응답 및 오디오 팟캐스트를 생성하는 지식 엔진.
* **최적 사용 시점**: 방대한 오픈소스 문서, 도메인 전문 서적, 특허, 기술 규격을 분석하여 정확한 요구사항 명세서를 도출할 때.
* **Antigravity 연계**: Antigravity가 프로젝트용 마크다운 스펙 및 API 레퍼런스를 정리하여 사용자가 NotebookLM에 즉시 업로드할 수 있도록 패키징.

### 3.2 Google AI Mode & Deep Research
* **개요**: 수십 회의 자율 웹 탐색과 단계별 크로스 체크를 통해 출처가 명확한 수십 페이지 분량의 종합 리서치 보고서를 작성해 주는 심층 조사 도구.
* **최적 사용 시점**: 신규 기술 스택 도입 전 트레이드오프 분석, 시장 벤치마킹, 최신 보안 취약점 심층 조사.

---

## 4. 미디어 & 크리에이티브 생성

### 4.1 Google Vids
* **개요**: 문서나 프롬프트를 입력하면 기획, 스토리보드, 씬 연출, 배경 음악, AI 보이스오버까지 완비된 비즈니스/프레젠테이션 비디오를 자동 생성.
* **최적 사용 시점**: 개발 완료 후 프로젝트 릴리즈 데모 발표, 사용자 온보딩 튜토리얼 비디오 제작 시.

### 4.2 Veo & Google Flow
* **개요**: 1080p 고해상도 시네마틱 영상 생성 및 씬 단위 연출이 가능한 차세대 비디오 모델.
* **최적 사용 시점**: 웹사이트 랜딩페이지 배경 히어로 비디오, 브랜드 티저 영상 에셋 제작 시.

### 4.3 AI Test Kitchen (ImageFX / MusicFX)
* **개요**: Imagen 모델 기반의 정밀 키워드 조정(ImageFX) 및 장르별 배경음악 생성(MusicFX).
* **최적 사용 시점**: 앱에 필요한 로고 콘셉트, UI 아이콘/일러스트, 오디오 배경음 에셋 제작 시.
