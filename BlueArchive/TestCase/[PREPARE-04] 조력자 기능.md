[PREPARE-04] 조력자 기능
Status: 🟢 Pass / 🔴 Fail / 🟡 In-Progress / ⚪ Not Run

1. 개요 (Summary)
+ 총력전(호버크래프트)의 편성 창까지의 상호작용 테스트

2. 사전 조건 (Pre-conditions)
+ 빠른 편성 창 진입한 상태
+ 편성에 빈 자리가 1개 이상 있는 상태

3. 테스트 단계 (Test Steps)

| Step | Action | Test Data | Expected Result | Actual Result |
|:---:|---|---|---|:---:|
| 1 | [조력자] 탭 선택 | - | 조력자 목록 UI 정상 노출 | 🟢 Pass |
| 2 | 임의의 조력자 학생 선택 | - | 편성에 해당 조력자 학생 추가 | 🟢 Pass |
| 3 | 2명 이상의 조력자 학생을 편성한 상태로 [확인] 버튼 선택 | - | 조력자 인원 한계 알림 팝업 UI 노출 | 🟢 Pass |
| 4 | 1명의 조력자 학생을 편성한 상태로 [확인] 버튼 선택 | - | 편성창 내 학생 모델링 정상 노출 | 🟢 Pass |
| 5 | [출격] 버튼 선택 | - | 조력자 이용 알림UI 노출 | 🟢 Pass |

4. 추적성 및 결함 (Traceability)
+ 
