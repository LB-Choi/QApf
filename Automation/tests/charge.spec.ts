import { test } from '@playwright/test';
import { MainPage } from '../pages/Main';
import { ChargePage } from '../pages/Charge';

// 💡 1. 검증할 결제 수단 시나리오 배열 (DDT 기법)
const paymentMethods = [
    { name: '신용카드', method: 'card' },
    { name: '간편결제', method: 'easy' },
    { name: '휴대폰', method: 'phone', telecom: 'kt', phoneNum: '01012345678' }
];

// 💡 2. test.describe를 통해 하나의 그룹으로 묶기
test.describe('넥슨캐시 50,000원 결제수단별 교차 검증', () => {

    // 💡 3. 배열을 순회하며 동적으로 테스트 케이스(test) 생성
    for (const payment of paymentMethods) {
        
        test(`[${payment.name}] 결제 후 잔액 갱신 검증`, async ({ page }) => {
            const mainPage = new MainPage(page);
            const chargePage = new ChargePage(page);

            // 1. 메인 페이지 진입 및 초기 잔액 0원 세팅 (Playwright는 테스트마다 로컬 스토리지가 초기화됩니다)
            await mainPage.goto();
            await mainPage.verifyCashBalance('0');
            await mainPage.clickCharge();

            // 2. 금액 50,000원 선택
            await chargePage.selectAmount50k();

            // 3. 💡 시나리오에 따른 결제 수단 분기 처리
            if (payment.method === 'card') {
                await chargePage.selectCardPayment();
            } else if (payment.method === 'easy') {
                await chargePage.selectEasyPayment();
            } else if (payment.method === 'phone') {
                await chargePage.selectPhonePayment(payment.telecom!, payment.phoneNum!);
            }

            // 4. 약관 동의 및 결제 완료 (새로 만든 Toast 알림창 확인 버튼 클릭 포함)
            await chargePage.agreeToTerms();
            await chargePage.submitPayment();

            // 5. 메인 페이지로 복귀 후 잔액 50,000원 갱신 여부 검증
            await mainPage.verifyCashBalance('50,000');
        });
        
    }
});