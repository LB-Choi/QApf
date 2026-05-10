\[BATTLE-03] 1페이즈 도탄 예외 처리
Status: 🟡 In-Progress

1. 개요 (Summary)
* 와카모의 '비색의 꽃점' 스킬이 아군에게 도탄될 때 발생하는 상태이상(기절, 각인) 예외 처리 검증
2. 사전 조건 (Pre-conditions)
* 1페이즈 와카모 전투 진행 중 (인세인 난이도 이상)
* 전열에 2명 이상의 학생이 근접하여 배치된 상태
3. 테스트 단계 (Test Steps)

|Step|Action|Test Data|Expected Result|Actual Result|
|:-:|-|-|-|:-:|
|1|와카모의 '비색의 꽃점' 스킬 시전 대기|-|보스 스킬 시전 이펙트 및 타겟팅 발생|🟡 In-Progress|
|2|첫 번째 피격 대상의 상태 확인|-|대미지 적용 및 기절 상태이상, 와카모의 각인 생성|🟡 In-Progress|
|3|첫 번째 피격 후 도탄된 두 번째 아군 대상의 상태 확인|인세인 난이도|대미지만 적용되며, 기절 및 와카모의 각인은 생성되지 않음|🟡 In-Progress|

4. 추적성 및 결함 (Traceability)
* 

