---
name: google-stitch-ui
description: >-
  Use this skill when designing web/app frontend interfaces using Google Stitch or Gemini Web Code Canvas, generating UI specification prompts for Stitch, or integrating and refining HTML/CSS code generated from Stitch into the Antigravity codebase.
---

# Google Stitch UI & Frontend Skill

이 스킬은 **Google Stitch**와 **Gemini Web Code Canvas**를 활용하여 고품질의 프론트엔드 UI를 빠르게 기획·생성하고, 추출된 결과물을 Antigravity 프로젝트 코드베이스로 매끄럽게 가져와 고도화하는 절차를 안내합니다.

---

## 🛠️ 실행 절차 (Workflow Procedure)

### 1단계: UI 명세 분석 및 Stitch 프롬프트 작성
사용자가 만들고자 하는 화면의 목적, 타깃 디바이스, 디자인 테마를 파악한 후, Google Stitch가 최상의 HTML/CSS를 도출할 수 있도록 구조화된 프롬프트를 작성합니다:

```text
[Role & Context]: 전문 UI/UX 디자이너 겸 프론트엔드 엔지니어
[Target App]: [예: AI 기반 프로젝트 관리 대시보드]
[Design System & Aesthetic]:
- Palette: 딥 다크 모드 (배경 #0B0F19, 카드 #161F30, 액센트 #38BDF8 / #818CF8)
- Style: 세련된 글래스모피즘 (backdrop-filter: blur), 은은한 네온 보더 (1px solid rgba(255,255,255,0.08))
- Typography: Inter 또는 Outfit 웹폰트, 명확한 시각적 계층 구조
- Interactions: 호버 시 마이크로 인터랙션, 부드러운 트랜지션 (cubic-bezier)
[Required Layout & Components]:
1. 좌측 슬림 사이드바: 로고, 카테고리별 아이콘 메뉴, 사용자 프로필
2. 상단 헤더: 실시간 알림 뱃지, 글로벌 검색창, 프로젝트 상태 칩
3. 메인 콘텐츠 그리드:
   - 주요 통계 카드 4개 (KPI 지표, 증감률 배지)
   - 메인 데이터 차트 영역 (SVG 또는 CSS 차트 플레이스홀더)
   - 최근 작업 목록 테이블 (상태 태그, 액션 버튼 포함)
[Technical Constraint]: 바닐라 HTML과 클린 CSS (모던 Flexbox 및 Grid 레이아웃)
```

### 2단계: Stitch 결과물 코드 수집 및 정제
사용자가 Google Stitch 또는 Web Code Canvas에서 생성된 코드를 전달하면, Antigravity는 다음 작업을 수행합니다:
1. **시맨틱 마크업 검증**: `div` 남용을 줄이고 `header`, `nav`, `main`, `section`, `article`, `aside` 등 시맨틱 태그로 재정렬.
2. **CSS 디자인 토큰 추출**: 색상, 여백, 폰트 크기 등을 `:root` CSS 변수로 통합하여 유지보수성 확보.
3. **컴포넌트 분리**: 단일 거대 HTML을 컴포넌트 단위(Header, Sidebar, DashboardGrid 등)로 모듈화.

### 3단계: 인터랙션 및 상태 바인딩
정적 마크업에 자바스크립트 이벤트 리스너, 모달 팝업, 비동기 데이터 fetch 로직을 주입하여 살아 숨쉬는 인터랙티브 웹앱으로 완성합니다.
