import { expect, Locator, Page } from '@playwright/test';

export class ChargePage {
    readonly page: Page;
    readonly amount50kBtn: Locator;
    readonly agreementCheckbox: Locator;
    readonly submitBtn: Locator;
    readonly chargeInput: Locator;

    constructor(page: Page) {
        this.page = page;
        this.amount50kBtn = page.getByTestId('btn-50k');
        this.agreementCheckbox = page.getByTestId('agreement-checkbox');
        this.submitBtn = page.getByTestId('submit-payment-btn');
        this.chargeInput = page.getByTestId('charge-input');
    }

    // 1. 5만원 선택 액션
    async selectAmount50k() {
        await this.amount50kBtn.click();
        await expect(this.chargeInput).toHaveValue('50,000');
    }

    // 2. 약관 동의 액션
    async agreeToTerms() {
        await this.agreementCheckbox.check();
    }

    // 3. 결제 완료 액션 (Alert 창 자동 승인 포함)
    async submitPayment() {
        this.page.once('dialog', dialog => dialog.accept());
        await this.submitBtn.click();
    }
}