import { test } from '@playwright/test';
import { MainPage } from '../pages/Main';
import { ChargePage } from '../pages/Charge';

test('메인 페이지에서 50,000원 결제 후 잔액 갱신 검증 (POM 적용)', async ({ page }) => {
    // 1. 페이지 객체 초기화
    const mainPage = new MainPage(page);
    const chargePage = new ChargePage(page);

    // 2. 메인 페이지 진입 및 초기 잔액 확인
    await mainPage.goto();
    await mainPage.verifyCashBalance('0');

    await page.pause();
    // 3. 충전 팝업으로 이동
    await mainPage.clickCharge();

    // 4. 금액 선택, 약관 동의 및 결제 진행
    await chargePage.selectAmount50k();
    await chargePage.agreeToTerms();
    await chargePage.submitPayment();

    // 5. 메인 페이지 복귀 후 잔액 갱신 검증
    await mainPage.verifyCashBalance('50,000');
});