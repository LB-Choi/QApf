# 🎮 Game QA Portfolio: Systemic Test Process Simulation

> **Jira + Zephyr 환경을 GitHub 환경으로 재구성하여 체계적인 테스트 프로세스를 증명하는 포트폴리오입니다.**본 저장소는 상용 툴 사용이 제한적인 환경에서 GitHub를 BTS(Bug Tracking System)로 활용하고, Playwright를 이용한 E2E 자동화를 구축하여 체계적인 QA 프로세스를 시뮬레이션한 프로젝트입니다.

---

## 💡 Project Overview
본 저장소는 상용 툴 사용이 제한적인 환경에서 GitHub를 BTS(Bug Tracking System)로 활용하고, Playwright를 이용한 E2E 자동화를 구축하여 체계적인 QA 프로세스를 시뮬레이션한 프로젝트입니다.

## 🎯 Portfolio Objective
+ 실무 프로세스 이식: Zephyr의 TC 템플릿과 Jira의 이슈 관리 워크플로우를 Markdown과 GitHub Issues로 구현

+ 테스트 설계 역량: 기획 분석을 통한 Edge Case 도출 및 논리적 테스트 단계(Test Steps) 구성

+ 검증 자동화: 반복적인 결제/인증 로직을 Playwright(TypeScript)로 자동화하여 회귀 테스트 효율성 확보

## 🛠️ Methodology: Why Markdown?
기업용 라이선스 제약이라는 한계를 넘어서기 위해, **"툴은 수단일 뿐, 핵심은 설계 역량"**이라는 철학으로 Zephyr의 표준 필드를 GitHub Markdown Table로 변환했습니다.

| Zephyr Field | GitHub Markdown 적용 | 역할 |
| :--- | :--- | :--- |
| **Test Case Key** | `TC-ID` | 고유 식별자 부여 (기능별 넘버링) |
| **Test Summary** | `Description` | 테스트 목적 및 내용 요약 |
| **Test Steps** | `Step` | 수행해야 할 구체적인 절차 |
| **Test Data** | `Data` | 테스트 시 필요한 아이템, 레벨, 환경 값 |
| **Expected Result** | `Expected` | 기획서에 명시된 정상 동작 기준 |
| **Execution Status**| `Pass/Fail` | 테스트 수행 결과 시각화 |

🤖 Test Automation (Playwright)
실서비스 환경의 데이터 무결성을 보존하고, 서비스 운영에 영향을 주지 않는 안전한 검증을 위해 로컬 테스트 환경 기반의 Playwright E2E 자동화 스크립트를 구현했습니다.

🎯 Automation Focus

Production Safety (Zero-Impact): 실서버(Live Server) 결제 데이터 오염, 어뷰징 감지 및 트래픽 부하를 원천 차단하기 위해, 로컬 호스트 환경에 독립적인 Mock UI를 구축하여 안전하게 테스트 수행

Stable Element Selection: UI 레이아웃이나 CSS 클래스 변경 시 스크립트가 깨지는 현상(Flaky Tests)을 방지하기 위해, DOM 구조에 의존하지 않는 data-testid 기반의 안정적인 셀렉터 설계

State Mocking & Verification: 실제 백엔드 연동 없이 프론트엔드 환경에서 결제 흐름을 검증하기 위해, Web Storage(localStorage)를 활용하여 페이지 간 상태(잔액 증감) 변화를 모방하고 데이터 무결성 검증

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
 │  ├── 📂 tests             # 테스트 시나리오 파일 (.spec.ts)
 │  ├── 📂 public            # 로컬 서버용 HTML
 │  └── 📄 playwright.config.ts # 실행 환경 설정
 └── 📄 README.md            # Project Landig Page
