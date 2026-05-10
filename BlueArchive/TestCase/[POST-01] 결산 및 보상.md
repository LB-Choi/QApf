\[POST-01] 결산 및 보상
Status: ⚪ Not Run

1. 개요 (Summary)
* 총력전 승리 시 결과창 출력 및 DB(인벤토리) 동기화 상태 확인
2. 사전 조건 (Pre-conditions)
* 2페이즈 호버크래프트 본체 체력을 0으로 소진(클리어)한 상태
3. 테스트 단계 (Test Steps)

|Step|Action|Test Data|Expected Result|Actual Result|
|:-:|-|-|-|:-:|
|1|보스 체력 소진 대기|-|전투 타이머가 종료되며 'Clear' 연출 출력|⚪ Not Run|
|2|결과창 UI 데이터 확인|-|플레이 타임, 누적 획득 점수, 획득 보상 리스트가 정상 노출됨|⚪ Not Run|
|3|\[확인] 버튼을 눌러 로비로 복귀 후 인벤토리(아이템/크레딧) 확인|-|결과창에 명시되었던 보상 리스트와 동일하게 실제 DB 수량이 증가 반영됨|⚪ Not Run|

4. 추적성 및 결함 (Traceability)
* 

