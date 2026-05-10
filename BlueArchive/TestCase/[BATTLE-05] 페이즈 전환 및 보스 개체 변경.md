\[BATTLE-05] 페이즈 전환 및 보스 개체 변경
Status: 🟢 Pass

1. 개요 (Summary)
* 1페이즈 종료에 따른 컷신 출력 및 2페이즈(호버크래프트) 진입 전환 연출 확인
2. 사전 조건 (Pre-conditions)
* 1페이즈 와카모 체력이 임계점(HP 0) 도달 직전인 상태
3. 테스트 단계 (Test Steps)

|Step|Action|Test Data|Expected Result|Actual Result|
|:-:|-|-|-|:-:|
|1|아군 공격을 통해 와카모의 체력을 0으로 소진|-|전투 타이머가 일시정지되며 와카모 후퇴 컷신 출력|🟢 Pass|
|2|컷신 중 화면 터치|-|연출 스킵 여부를 묻는 알림창 출현|🟢 Pass|
|3|연출 종료 확인|-|배경이 해변가로 변경되며 적 개체가 와카모/호버크래프트로 전환됨|🟢 Pass|

4. 추적성 및 결함 (Traceability)
* 

