# 🎮 Game QA Portfolio: Systemic Test Process Simulation

## 💡 Project Overview
본 저장소는 상용 툴 사용이 제한적인 환경에서 GitHub를 BTS(Bug Tracking System)로 활용하고, Playwright를 이용한 E2E 자동화를 구축하여 체계적인 QA 프로세스를 시뮬레이션한 프로젝트입니다.

## 🎯 Portfolio Objective
+ 실무 프로세스 이식: Zephyr의 TC 템플릿과 Jira의 이슈 관리 워크플로우를 Markdown과 GitHub Issues로 구현

+ 테스트 설계 역량: 기획 분석을 통한 Edge Case 도출 및 논리적 테스트 단계(Test Steps) 구성

+ 검증 자동화: 반복적인 결제/인증 로직을 Playwright(TypeScript)로 자동화하여 회귀 테스트 효율성 확보

## 🛠️ Methodology: Why Markdown?
개인용 포트폴리오로는 부적합한 기업용 라이선스라는 제약을 해결하기 위해 Zephyr의 표준 필드를 GitHub Markdown Table로 변환했습니다.

| Zephyr Field | GitHub Markdown 적용 | 역할 |
| :--- | :--- | :--- |
| **Test Case Key** | `TC-ID` | 고유 식별자 부여 (기능별 넘버링) |
| **Test Summary** | `Description` | 테스트 목적 및 내용 요약 |
| **Test Steps** | `Step` | 수행해야 할 구체적인 절차 |
| **Test Data** | `Data` | 테스트 시 필요한 아이템, 레벨, 환경 값 |
| **Expected Result** | `Expected` | 기획서에 명시된 정상 동작 기준 |
| **Execution Status**| `Pass/Fail` | 테스트 수행 결과 시각화 |

🤖 Test Automation (Playwright)
실서비스 환경의 서비스 운영에 영향을 주지 않는 안전한 검증을 위해 로컬 테스트 환경 기반의 Playwright E2E 자동화 스크립트를 구현했습니다.

🎯 Automation Focus

Production Safety (Zero-Impact): 실서버 트래픽 부하 및 결제 데이터 오염을 방지하기 위해 로컬 호스트 환경에 독립적인 Mock UI를 구축하고, Web Storage(`localStorage`)로 상태 변화를 모방

Stable Element Selection: UI 레이아웃이나 CSS 클래스 변경으로 인한 영향이 없도록 `data-testid` 속성 기반의 안정적인 셀렉터 설계

Page Object Model (POM): 페이지 구조(Locator)와 테스트 시나리오를 객체지향적으로 분리하여 스크립트 유지보수성 극대화

Negative Testing: 약관 미동의, 금액 미입력 등의 예외 상황에서 발생하는 알림창(Toast UI)의 에러 메시지 텍스트까지 검증

💻 Tech Stack

Language: TypeScript

Framework: Playwright Test

Environment: Localhost / Mock HTML & Web Storage

## 📂 Repository Structure
```text
📦 Game-QA-Portfolio
├── 📂 BlueArchive          # 대상 게임 프로젝트
│  ├── 📂 Document          # 테스트 계획서 (범위, 일정, 전략)
│  ├── 📂 TestCase         # Zephyr 스타일로 작성된 TC 모음
│  └── 📂 BugReport        # 발견된 결함 리포트 (GitHub Issues 백업)
├── 📂 Automation
│  ├── 📂 pages             # POM 기반의 페이지 객체 클래스
│  ├── 📂 tests             # 테스트 시나리오 파일
│  ├── 📂 public            # 로컬 서버용 HTML
│  └── 📄 playwright.config.ts # 실행 환경 설정
└── 📄 README.md            # Project Landig Page
```
