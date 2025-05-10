## **1. 서비스 기획서(요약/소개)**

- **서비스명 : 숨터**
- **배포 주소:** https://soomteo.vercel.app/ (핸드폰으로 접속하는거 추천!)
- **목표(미션)**
    - 은둔형 외톨이(히키코모리) 청년들이 사회에 대한 두려움을 극복하고, 일상 속 작은 행동 변화를 통해 점진적으로 사회와 연결될 수 있도록 행동 개선을 유도하는 맞춤형 미션/심리 지원 서비스
- **주요 타겟(사용자) :**
    - 자신이 은둔형 외톨이라고 느끼는 10~30대 청년
    - 사회적 고립, 대인기피, 무기력 등으로 일상생활에 어려움을 겪는 사람
    - 가족/지인과의 관계 단절, 사회 진입에 두려움을 가진 청년
- **핵심 기능 요약 :**
    - **심리검사(설문):** 자신의 은둔 성향/단계(레벨)를 진단할 수 있는 설문 제공
    - **맞춤형 미션 제공:** 설문 결과에 따라 난이도/유형별 현실 기반 미션 자동 생성 단순한 설문 문항이 아니라 논문을 통해 찾은 히키코모리에 대한 답변과 결과 해석이 존재함]
        
        (예: 산책, 음식점 방문, 음성 읽기, 일기 작성 등)
        
    - **미션 완료 인증 및 피드백:**
        
        미션 수행 후 인증(사진, GPS, 음성 등) 및 GPT 기반 피드백 제공
        
    - **점수/목표 관리:**
        
        미션 완료 시 점수 획득, 목표 달성 시 추가 보상 및 점진적 점수 향상
        
    - **친구/공유 기능:**
        
        랜덤 친구 추천, 미션 공유, 친구의 현황 확인 등
        
    - **일간/주간 성장 추적:**
        
        최근 9일/9주간의 변화 추이, 최근 평균 등 시각화 제공
        
- **차별점/핵심 가치 :**
    - **현실 행동 기반:**
        
        단순 정보 제공이 아닌, 실제 행동(산책, 방문, 대화 등)을 유도
        
    - **AI 맞춤형 미션:**
        
        GPT 기반으로 개인별 상황/레벨에 맞는 미션 자동 생성 (프롬프트 엔지니어링)
        
    - **심리적 공감/격려:**
        
        미션 피드백, 일기 코칭 등에서 공감과 격려 중심의 메시지 제공
        
    - **작은 성공의 경험:**
        
        부담 없는 작은 미션부터 시작, 점진적 목표 달성 구조
        
    - **사회적 연결:**
        
        친구 기능, 미션 공유 등으로 고립감 해소 및 사회적 동기 부여
        
    - **데이터 기반 성장 추적:**
        
        일간/주간 변화, 목표 달성률 등 시각화로 자기효능감 강화
      


## **유저 플로우 (User Flow)**

```tsx
[앱/웹 접속]
      │
      ▼
[회원가입/로그인]
      │
      ▼
[프로필 입력 (나이/성별)]
      │
      ▼
[심리검사(설문) 진행]
      │
      ▼
[설문 결과 확인 및 레벨 진단]
      │
      ▼
[맞춤형 미션 5종류 자동 생성]
      │
      ▼
[미션 목록 확인]
      │
      ├─▶ [미션 상세 보기 및 수행]
      │         │
      │         ▼
      │   [미션 인증(사진, GPS, 음성, 일기 등)]
      │         │
      │         ▼
      │   [피드백/점수/뱃지 획득]
      │         │
      │         ▼
      │   [미션 완료 → 남은 미션 0개 시 자동 생성]
      │
      ▼
[일간/주간 성장 추이 확인]
      │
      ▼
[친구 추천/요청/공유]
      │
      ▼
[반복 수행 및 성장]
```

## 시스템 플로우

```tsx
[회원가입/로그인 요청]
      │
      ▼
[User DB에 정보 저장]
      │
      ▼
[설문 제출]
      │
      ▼
[Survey DB에 결과 저장]
      │
      ▼
[설문 결과 기반 미션 자동 생성]
      │
      ▼
[Mission DB에 5종류 미션 저장]
      │
      ▼
[미션 목록 조회]
      │
      ▼
[미션 수행/완료 요청]
      │
      ▼
[미션 인증 데이터(사진, GPS, 음성 등) 서버 전송]
      │
      ▼
[인증 검증 및 피드백 생성 (GPT 등)]
      │
      ▼
[MissionCompletion, 점수, 뱃지, Progress DB 업데이트]
      │
      ▼
[미션 완료 후 남은 미션 0개면 미션 자동 생성]
      │
      ▼
[일간/주간 Progress, 성장 추이 API 제공]
      │
      ▼
[친구/공유/피드백 등 부가 기능 처리]
```

## 기술 스택
### 프론트엔드
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Zustand](https://img.shields.io/badge/zustand-%2320232a.svg?style=for-the-badge)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)
<br />
### 백엔드
![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
### 협업 도구 및 배포
![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)


## **숨터의 장점**

### **실용성과 확장 가능성**

- **모든 기능이 API 기반**으로 설계되어 모바일, 웹, 다양한 플랫폼에 손쉽게 확장 가능합니다.
- 미션/설문/점수/뱃지/친구 등 **모듈화된 구조**로 새로운 미션 유형, 인증 방식, 피드백 시스템 등 **기능 확장이 매우 용이**합니다.
- 데이터 기반 성장 추적, 통계, 리포트 등 **운영/분석 기능도 쉽게 추가**할 수 있습니다.

### UI / UX

- 마치 건강 운동앱과 같은 느낌을 주기 위해 노력했습니다
- **심리적 부담을 최소화**한 작은 미션부터 시작, 점진적으로 난이도를 높여 사용자의 성공 경험을 극대화합니다.
- **일간/주간 성장 추이, 뱃지, 친구 기능** 등 **시각적 피드백과 동기부여 요소** 를 적극적으로 도입했습니다.

### **문제 해결력 & 사회적 기여도**

- **은둔형 외톨이(히키코모리) 문제**라는 사회적으로 중요한 이슈에 실질적 행동 변화를 유도하는 **구체적 솔루션**을 제시합니다.
- **사회적 고립, 우울, 무기력 등** 청년 세대의 심각한 문제를 **데이터 기반, 행동 기반, AI 기반** 으로 해결합니다.
- **친구/공유/커뮤니티 기능**을 통해 고립감 해소, 사회적 연결, 자기효능감 증진에 기여합니다.

| 전체적인 모습 | 설문조사/회원가입 | 미션 확인 및 수행 |
|:---:|:---:|:---:|
| ![전체적인 모습](https://github.com/user-attachments/assets/b5bd4d61-4772-498b-b40c-1097a1189eed) <br/> 회원가입 | ![설문조사](https://github.com/user-attachments/assets/4452dcf4-3cdc-40da-8f3c-88be49ca3a22) <br/> 설문조사 | ![미션확인 및 수행](https://github.com/user-attachments/assets/976cd4db-73a0-45f3-adb2-50e8aef8c3d1) <br/> 미션 확인/수행 |

