\[BATTLE-04] 1페이즈 불사 무시 기믹
Status: 🟡 In-Progress

1. 개요 (Summary)
* 불사 스킬 활성화 상태에서 와카모의 각인 5스택 중첩 시 발생하는 즉사(퇴각) 경계값 로직 검증
2. 사전 조건 (Pre-conditions)
* 1페이즈 와카모 전투 진행 중
* 특정 학생(예: 츠루기)에게 와카모의 각인이 4스택 누적된 상태
3. 테스트 단계 (Test Steps)

|Step|Action|Test Data|Expected Result|Actual Result|
|:-:|-|-|-|:-:|
|1|각인 4스택 학생의 불사 부여 EX 스킬 발동|-|학생 머리 위에 불사 버프 아이콘 노출 및 적용|🟡 In-Progress|
|2|불사 지속 시간 내 와카모의 각인 부여 스킬 추가 피격 대기|각인 5스택 달성|스킬 피격에 따른 대미지 판정 및 각인 5스택 달성 이펙트 발생|🟡 In-Progress|
|3|피격 직후 해당 학생의 상태 확인|-|불사 버프 및 체력 회복 로직을 무시하고 즉시 퇴각(사망) 처리됨|🟡 In-Progress|

4. 추적성 및 결함 (Traceability)
* 

