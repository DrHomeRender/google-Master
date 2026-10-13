---
name: google-model-hub
description: >-
  Use this skill when integrating Google Gemini models via Google AI Studio or Vertex AI, designing structured system instructions and JSON schemas, setting up local Gemma models (2B/9B/27B) with Ollama or Python, or selecting the optimal Google model for a project.
---

# Google Model Hub & Gemma Integration Skill

이 스킬은 **Google AI Studio (Gemini 1.5 Pro / Flash)**와 **Gemma 오픈 가중치 모델(로컬/온디바이스)**을 프로젝트 요구사항에 맞게 선정하고, 안정적인 추론 파이프라인과 프로덕션 코드를 신속하게 연동하는 절차를 안내합니다.

---

## 🛠️ 실행 절차 (Workflow Procedure)

### 1단계: 모델 아키텍처 및 호스팅 방식 결정
프로젝트의 요구 조건에 따라 클라우드 API 방식과 로컬 온디바이스 방식을 구분합니다:
* **Cloud Gemini (AI Studio / Vertex AI)**:
  - 100만~200만 토큰의 초대형 컨텍스트 필요 시
  - 멀티모달(오디오, 영상, 이미지, 문서) 동시 분석 시
  - 최고의 추론 성능과 구조화된 JSON Schema 응답이 필요할 때
* **Local Gemma (2B / 9B / 27B)**:
  - 오프라인 환경 구동, 제로 API 비용, 완벽한 사내/개인 데이터 프라이버시가 필요할 때
  - 임베디드 디바이스, 엣지 서버, 로컬 데스크톱 앱 내장 시

### 2단계: Google AI Studio 연동 코드 규격화
Google GenAI 최신 SDK 표준 규격을 준수하여 신속한 연동 코드를 구축합니다:

```javascript
// Node.js (@google/genai) 예시
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function runInference(prompt, systemInstruction) {
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: prompt,
    config: {
      systemInstruction: systemInstruction,
      temperature: 0.2,
      responseMimeType: 'application/json', // 필요 시 구조화된 응답
    }
  });
  return response.text;
}
```

### 3단계: Gemma 로컬 서빙 환경 구축 (Ollama / Transformers)
로컬 오픈 모델 구동을 선택한 경우:
1. **Ollama 파이프라인**:
   - `ollama run gemma2:9b` (또는 `gemma2:2b`)
   - 로컬 엔드포인트(`http://localhost:11434/api/generate`)와 클라이언트 연동 코드 생성.
2. **Python Transformers 파이프라인**:
   - `google/gemma-2-2b-it` 파이프라인 스크립트 작성 및 양자화(4-bit/8-bit bitsandbytes) 적용 가이드.
