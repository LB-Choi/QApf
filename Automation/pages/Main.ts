import { expect, Locator, Page } from '@playwright/test';

export class MainPage {
    readonly page: Page;
    readonly chargeBtn: Locator;
    readonly currentCash: Locator;

    constructor(page: Page) {
        this.page = page;
        // 페이지 내의 Locator 정의
        this.chargeBtn = page.getByTestId('main-charge-btn');
        this.currentCash = page.getByTestId('current-cash');
    }

    // 1. 페이지 접속 액션
    async goto() {
        await this.page.goto('http://127.0.0.1:5500/Automation/public/index.html');
    }

    // 2. 충전 버튼 클릭 액션
    async clickCharge() {
        await this.chargeBtn.click();
    }

    // 3. 잔액 검증 액션 (Assertion을 Page 내부에 캡슐화)
    async verifyCashBalance(expectedAmount: string) {
        await expect(this.currentCash).toHaveText(expectedAmount);
    }
}