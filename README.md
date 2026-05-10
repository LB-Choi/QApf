# 🎮 Game QA Portfolio

## 💡 Project Overview
본 저장소는 기업용 상용 툴 사용이 어려운 환경을 개인 환경에서 GitHub를 BTS(Bug Tracking System)처럼 활용한 QA 프로젝트입니다.
Playwright 기반 E2E 자동화를 함께 구성해 테스트 관리와 회귀 테스트 흐름을 정리했습니다.

## 🎯 Portfolio Objective
* **테스트 설계 역량:** 정상 동작 확인뿐 아니라 리소스 부족, 상태 충돌, 모달 중첩 등 예외 상황 중심의 테스트 케이스 작성
* **시스템 및 프로세스 분석:**  반복 입력, 씬 전환 시간 등 실제 플레이 경험에 영향을 줄 수 있는 요소 분석
* **관리 솔루션 및 자동화 구축:** 상용 툴(Jira/Zephyr)의 이슈 관리 워크플로우를 GitHub로 구현하고, Playwright 기반 E2E 자동화 도구 사용 경험을 통해 반복 테스트를 빠르게 수행할 수 있도록 구성

## 🛠️ Methodology: Why Markdown?
개인용 포트폴리오로는 부적합한 기업용 라이선스인 Jira 및 Zephyr의 제약을 해결하기 위해 Zephyr의 템플릿을 GitHub의 Markdown Table로 유사하게 변환했습니다.

| Zephyr Field | GitHub Markdown 적용 | 역할 |
| :--- | :--- | :--- |
| **Test Case Key** | `TC-ID` | 기능별 넘버링 |
| **Test Summary** | `Description` | 테스트 목적 및 검증 내용 요약 |
| **Test Steps** | `Step` | 테스트 절차 |
| **Test Data** | `Data` | 사전 조건 |
| **Expected Result** | `Expected` | 기대 결과 |
| **Execution Status**| `Pass/Fail` | 실제 결과 |

## 🤖 Test Automation Strategy & Implementation
### 대상 선정 및 도구 도입 배경
* **웹 결제 페이지:** 게임 클라이언트를 대상으로 한 개인 수준의 자동화는 보안 솔루션 우회 및 약관 위반 문제를 발생시킬수 있어 리스크를 위반하지 않는 Mock 환경을 제작하기 용이한 게임 외부 웹 서비스를 선택하였고 그 중 오류 발생 시 영향이 **웹 결제 페이지**를 예시로 선정하여 자동화를 시뮬레이션 테스트를 진행했습니다.
* **Playwright:** 동적인 웹 환경에서도 비교적 안정적으로 동작하고 스크립트를 구성이 빠르기 때문에 채택했습니다.

### 🎯 Automation Focus
* **실운영 환경 보호:** 실서버 트래픽 부하 및 결제 데이터 오염을 방지하기 위해 로컬 호스트 환경에 독립적인 Mock UI를 구성하고 Web Storage(`localStorage`)로 상태 변화를 모방했습니다.
* **블록 단위 조립형 스크립트 (Block-based Automation):** 현재 넥슨이 지향하고 실행 중인 **'블록 형태의 자동화'** 개념을 차용했습니다. Page Object Model(POM)을 활용해 페이지 구조(Locator)와 테스트 시나리오를 객체지향적으로 분리하여 스크립트 유지보수성 극대화했습니다.

### Automation Analysis
장점
* 반복되는 회귀 테스트 시간을 줄일 수 있음
* 반복 입력 과정에서 발생할 수 있는 실수를 줄일 수 있음
한계
* UI 구조 변경 시 유지보수가 자주 필요함
* 폰트 깨짐이나 UI 겹침 같은 시각적 문제는 자동화만으로 확인하기 어려움

이를 줄이기 위해 CSS 클래스 대신 `data-testid` 기반 셀렉터를 사용했습니다.

### 💡 Retrospective
Mock HTML 구성이나 반복 코드 작성에는 AI를 활용했습니다.
대신 테스트 시나리오 작성과 예외 케이스 분석은 직접 진행했습니다.

자동화는 수동 테스트를 대체하기보다는, 반복 작업을 줄여 QA가 분석 중심 작업에 시간을 더 사용할 수 있게 돕는 도구라고 생각합니다.

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
