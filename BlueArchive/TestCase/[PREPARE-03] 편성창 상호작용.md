[PREPARE-03] 편성창 상호작용
Status: 🟢 Pass / 🔴 Fail / 🟡 In-Progress / ⚪ Not Run

1. 개요 (Summary)
+ 총력전(호버크래프트)의 편성 창에서의 상호작용 테스트

2. 사전 조건 (Pre-conditions)
+ 총력전 편성이 완료 되어있는 상태 

3. 테스트 단계 (Test Steps)

| Step | Action | Test Data | Expected Result | Actual Result |
|:---:|---|---|---|:---:|
| 1 | 임의의 학생 Long Touch | - | 해당 학생이 잡힌 모델링 노출 | 🟢 Pass |
| 2 | 잡고 있는 학생 Drag | - | Drag한 방향으로 해당 학생 이동 | 🟢 Pass |
| 3 | 잡고 있는 학생을 다른 학생 위치에 Drop | - | 기존 학생과 Drop한 위치의 학생의 위치 교체 | 🟢 Pass |
| 4 | [⇄STRIKER] 버튼 선택 | - | 편성된 SPECIAL 학생 모델링 노출 | 🟢 Pass |

4. 추적성 및 결함 (Traceability)
+ 
