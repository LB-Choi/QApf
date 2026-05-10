\[BATTLE-07] 2페이즈 패배 기믹
Status:  🟡 In-Progress

1. 개요 (Summary)
* 미사일 방어 실패로 리조트 체력이 0에 도달했을 때 발생하는 강제 패배(Failed) 처리 검증
2. 사전 조건 (Pre-conditions)
* 2페이즈 호버크래프트 미사일 폭주 모드 진행 중
* 리조트 체력이 미사일 1대 피격 시 0이 되는 수치(임계점) 상태
* 아군 전원 생존 및 남은 전투 시간 충분함
3. 테스트 단계 (Test Steps)

|Step|Action|Test Data|Expected Result|Actual Result|
|:-:|-|-|-|:-:|
|1|미사일을 요격하지 않고 화면 좌측 밖으로 통과시킴|-|미사일이 화면을 벗어나는 즉시 리조트 체력 UI 차감|🟡 In-Progress|
|2|리조트 체력 0 도달 확인|-|리조트 체력 UI에 0 표기|🟡 In-Progress|
|3|체력 0 도달 직후 전체 전투 상태 확인|-|아군 생존 여부 및 잔여 시간과 무관하게 즉시 전투가 강제 종료되며 패배 UI 출력|🟡 In-Progress|

4. 추적성 및 결함 (Traceability)
* 

