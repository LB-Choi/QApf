[PREPARE-02] 부대 편성
Status: 🟢 Pass / 🔴 Fail / 🟡 In-Progress / ⚪ Not Run

1. 개요 (Summary)
+ 총력전(호버크래프트)의 편성 테스트

2. 사전 조건 (Pre-conditions)
+ 총력전 편성이 비어있는 상태

3. 테스트 단계 (Test Steps)

| Step | Action | Test Data | Expected Result | Actual Result |
|:---:|---|---|---|:---:|
| 1 | [빠른 편성] 버튼 선택 | - | 빠른 편성 UI 정상 노출 | 🟢 Pass |
| 2 | 임의의 STRIKER 학생 선택 | - | 해당 학생의 기본 정보 노출 및 하단 STRIKER 편성에 추가 | 🟢 Pass |
| 3 | 4명의 STRIKER가 편성된 상태에서 STRIKER 학생 선택 | - | 해당 학생의 기본 정보 노출 | 🟢 Pass |
| 4 | 편성되어 있는 STRIKER 학생 선택 | - | 편성에서 해당 학생 제거 | 🟢 Pass |
| 5 | SPECIAL 선택 | - | SPECIAL 학생 목록 노출 | 🟢 Pass |
| 6 | 임의의 SPECIAL 학생 선택 | - | 해당 학생의 기본 정보 노출 및 하단 SPECIAL 편성에 추가 | 🟢 Pass |
| 7 | 2명의 SPECIAL가 편성된 상태에서 SPECIAL 학생 선택 | - | 해당 학생의 기본 정보 노출 | 🟢 Pass |
| 8 | [자동] 버튼 선택 | - | 추천 편성으로 자동 편성 | 🟢 Pass |
| 9 | [확인] 버튼 선택 | - | 편성창 내 학생 모델링 정상 노출 | 🟢 Pass |

4. 추적성 및 결함 (Traceability)
+ 
