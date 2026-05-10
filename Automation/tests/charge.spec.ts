import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/Main';
import { ChargePage } from '../pages/Charge';

// 1. 검증할 결제 수단 시나리오 배열 (DDT 기법)
const paymentMethods = [
    { name: '신용카드', method: 'card' },
    { name: '간편결제', method: 'easy' },
    { name: '휴대폰', method: 'phone', telecom: 'kt', phoneNum: '01012345678' }
];

// 2. 전체 테스트 묶음
test.describe('넥슨캐시 결제 및 예외 처리 교차 검증', () => {

    for (const payment of paymentMethods) {
        
        // 💡 결제 수단별로 하위 그룹(describe)을 생성하여 3가지 시나리오를 묶습니다.
        test.describe(`[${payment.name}] 결제 시나리오`, () => {
            
            // 모든 테스트가 실행되기 전 공통 초기화 작업
            test.beforeEach(async ({ page }) => {
                const mainPage = new MainPage(page);
                const chargePage = new ChargePage(page);
                
                await mainPage.goto();
                await mainPage.clickCharge();

                // 결제 수단 선택 분기 처리
                if (payment.method === 'card') {
                    await chargePage.selectCardPayment();
                } else if (payment.method === 'easy') {
                    await chargePage.selectEasyPayment();
                } else if (payment.method === 'phone') {
                    await chargePage.selectPhonePayment(payment.telecom!, payment.phoneNum!);
                }
            });

            // ❌ [예외 케이스 1] 금액 미입력 검증
            test('금액 미입력 시 에러 알림창 검증', async ({ page }) => {
                const chargePage = new ChargePage(page);
                
                // 약관 동의는 체크하지만, 금액은 누르지 않고 결제 시도
                await chargePage.agreeToTerms();
                await chargePage.submitBtn.click(); // 공통 액션 대신 단순 클릭으로 팝업 트리거
                
                // Toast 알림창에 올바른 에러 메시지가 뜨는지 검증
                await expect(chargePage.toastText).toBeVisible();
                await expect(chargePage.toastText).toHaveText('충전할 금액을 입력하거나 선택해주세요.');
            });

            // ❌ [예외 케이스 2] 약관 미동의 검증
            test('약관 미동의 시 에러 알림창 검증', async ({ page }) => {
                const chargePage = new ChargePage(page);
                
                // 금액은 선택하지만, 약관 동의는 하지 않고 결제 시도
                await chargePage.selectAmount50k();
                await chargePage.submitBtn.click();
                
                // Toast 알림창에 올바른 에러 메시지가 뜨는지 검증
                await expect(chargePage.toastText).toBeVisible();
                await expect(chargePage.toastText).toHaveText('충전 및 결제 서비스 약관에 동의해주세요.');
            });

            // ✅ [해피 패스] 정상 결제 및 잔액 갱신 검증
            test('정상 결제 성공 및 잔액 50,000원 갱신 검증', async ({ page }) => {
                const mainPage = new MainPage(page);
                const chargePage = new ChargePage(page);
                
                await chargePage.selectAmount50k();
                await chargePage.agreeToTerms();
                await chargePage.submitPayment(); // 알림창 '확인' 버튼 클릭이 포함된 메서드

                // 메인 페이지로 복귀 후 잔액 검증
                await mainPage.verifyCashBalance('50,000');
            });
            
        }); // end of describe per payment
    }
});