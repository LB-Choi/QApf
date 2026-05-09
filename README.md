# 🎮 Game QA Portfolio

## 💡 Project Overview
본 저장소는 기업용 상용 툴 사용이 제한적인 환경에서 GitHub를 BTS(Bug Tracking System)로 활용하고, Playwright를 이용한 E2E 자동화를 구축하여 체계적인 QA 프로세스를 시뮬레이션한 프로젝트입니다.

## 🎯 Portfolio Objective
* **테스트 설계 역량:** 동작 확인을 넘어 리소스 부족, 모달 창 중첩, 상태 충돌 등 실패 가능성이 높은 경계값 및 예외 상황을 검증하는 TC를 설계
* **시스템 및 프로세스 분석:**  조작 입력 횟수, 씬 전환 시간 등 실제 유저 경험(UX)과 서비스 리스크에 직결되는 개선점을 도출
* **관리 솔루션 및 자동화 구축:** 상용 툴(Jira/Zephyr)의 이슈 관리 워크플로우를 GitHub로 구현하고, Playwright 기반 E2E 자동화 도구 사용 경험을 통해 회귀 테스트 효율성을 확보

## 🛠️ Methodology: Why Markdown?
개인용 포트폴리오로는 부적합한 기업용 라이선스인 Jira 및 Zephyr의 제약을 해결하기 위해 Zephyr의 템플릿을 GitHub의 Markdown Table로 유사하게 변환했습니다.

| Zephyr Field | GitHub Markdown 적용 | 역할 |
| :--- | :--- | :--- |
| **Test Case Key** | `TC-ID` | 기능별 넘버링 |
| **Test Summary** | `Description` | 테스트 목적 및 검증 내용 요약 |
| **Test Steps** | `Step` | 수행해야 할 구체적인 절차 |
| **Test Data** | `Data` | 테스트에 필요한 사전 조건 |
| **Expected Result** | `Expected` | 정상 동작 기준 |
| **Execution Status**| `Pass/Fail` | 테스트 수행 결과 |

## 🤖 Test Automation Strategy & Implementation
### 대상 선정 및 도구 도입 배경
* **웹 결제 페이지:** 게임 클라이언트 자체를 대상으로 한 개인 수준의 자동화는 보안 솔루션 우회 및 약관 위반이라는 치명적인 운영 리스크를 수반합니다. 따라서, 리스크를 위반하지 않는 Mock 환경을 제작하기 용이한 게임 외부 웹 서비스를 선택하였고 그 중 핵심 비즈니스 로직이자 크리티컬 결함 발생 시 파급력이 가장 큰 **웹 결제 페이지**를 예시로 선정하여 자동화를 시뮬레이션 테스트를 진행했습니다.
* **Playwright:** 웹 테스트에 있어 가장 빠르고 안정적인 기능을 지원하는 도구입니다. 동적인 웹 환경에서도 불안정한 테스트를 최소화하고 신뢰도 높은 스크립트를 즉각적으로 작성할 수 있어 채택했습니다.

### 🎯 Automation Focus
* **실운영 환경 보호 (Zero-Impact):** 실서버 트래픽 부하 및 결제 데이터 오염을 방지하기 위해 로컬 호스트 환경에 독립적인 Mock UI를 구축하고, Web Storage(`localStorage`)로 상태 변화를 모방했습니다.
* **블록 단위 조립형 스크립트 (Block-based Automation):** 현재 넥슨이 지향하고 실행 중인 **'블록 형태의 자동화'** 개념을 차용했습니다. Page Object Model(POM)을 활용해 페이지 구조(Locator)와 테스트 시나리오를 객체지향적으로 분리하여 스크립트 유지보수성 극대화했습니다.

### 자동화의 분석: 의의, 강점, 그리고 한계
* **의의와 장점:** 핵심 기능에 대한 반복적인 회귀 테스트(Regression Test) 비용을 획기적으로 낮추고, 결제 금액 입력 누락 등 반복 작업에서 발생하기 쉬운 휴먼 에러를 원천 차단합니다.
* **약점과 리스크 관리:** UI 레이아웃의 잦은 변경은 스크립트 유지보수 비용을 증가시키는 약점이 있습니다. 이를 해결하기 위해 UI 레이아웃이나 CSS 클래스 변경으로 인한 영향이 없도록 `data-testid` 속성 기반의 안정적인 셀렉터를 설계했습니다. 또한, 자동화는 각종 예외 상황(예: UI 겹침, 폰트 깨짐)을 놓칠 수 있다는 리스크를 인지해야 합니다.

**💻 Tech Stack**
* **Language:** TypeScript
* **Framework:** Playwright Test
* **Environment:** Localhost / Mock HTML & Web Storage

## 📂 Repository Structure
```text
📦 Game-QA-Portfolio
├── 📂 BlueArchive          # 대상 게임 프로젝트 명
│  ├── 📂 Document          # 테스트 계획서 (범위, 일정, 전략)
│  ├── 📂 TestCase          # Zephyr 템플릿으로 작성한 TC 모음
│  └── 📂 BugReport         # 발견된 결함 리포트
├── 📂 Automation
│  ├── 📂 pages             # POM 기반의 페이지 객체 클래스
│  ├── 📂 tests             # 테스트 시나리오 파일
│  ├── 📂 public            # 로컬 서버용 HTML
│  └── 📄 playwright.config.ts # 실행 환경 설정
└── 📄 README.md            # Project Landing Page
