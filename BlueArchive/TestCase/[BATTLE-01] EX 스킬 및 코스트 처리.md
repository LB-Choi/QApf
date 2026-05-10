\[BATTLE-01] EX 스킬 및 코스트 처리
Status: 🟢 Pass

1. 개요 (Summary)
* 전투 중 EX 스킬 사용에 따른 코스트 차감 및 컷신 연출 확인
2. 사전 조건 (Pre-conditions)
* 전투 진입 완료 상태
* EX 스킬 발동이 가능한 최소 코스트 확보 상태
3. 테스트 단계 (Test Steps)

|Step|Action|Test Data|Expected Result|Actual Result|
|:-:|-|-|-|:-:|
|1|전투 화면 내 코스트 게이지 대기|-|시간에 따라 코스트 게이지가 점진적으로 증가|🟢 Pass|
|2|임의의 학생 EX 스킬 카드를 타겟으로 Drag \& Drop|-|전투 시간이 일시정지되며, 스킬 요구 코스트가 즉시 차감됨|🟢 Pass|
|3|스킬 컷신 연출 확인|옵션에서 EX 스킬 연출을 항상으로 설정한 상태|학생의 고유 EX 컷신 애니메이션 정상 출력|🟢 Pass|
|4|스킬 컷신 종료 후 화면 전환 확인|-|기존 전투 UI로 복귀하며 전투가 자연스럽게 재개됨|🟢 Pass|

4. 추적성 및 결함 (Traceability)
* 

