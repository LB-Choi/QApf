import { expect, Locator, Page } from '@playwright/test';

export class ChargePage {
    readonly page: Page;
    
    readonly amount1kBtn: Locator;
    readonly amount3kBtn: Locator;
    readonly amount5kBtn: Locator;
    readonly amount10kBtn: Locator;
    readonly amount30kBtn: Locator;
    readonly amount50kBtn: Locator;
    readonly amount100kBtn: Locator;
    
    readonly agreementCheckbox: Locator;
    readonly submitBtn: Locator;
    readonly chargeInput: Locator;

    constructor(page: Page) {
        this.page = page;
        
        this.amount1kBtn = page.getByTestId('1kbtn');
        this.amount3kBtn = page.getByTestId('3kbtn');
        this.amount5kBtn = page.getByTestId('5kbtn');
        this.amount10kBtn = page.getByTestId('10kbtn');
        this.amount30kBtn = page.getByTestId('30kbtn');
        this.amount50kBtn = page.getByTestId('50kbtn');
        this.amount100kBtn = page.getByTestId('100kbtn');
        
        this.agreementCheckbox = page.getByTestId('agreement-checkbox');
        this.submitBtn = page.getByTestId('submit-payment-btn');
        this.chargeInput = page.getByTestId('charge-input');
    }

    // 1000원 선택 액션
    async selectAmount1k() {
        await this.amount1kBtn.click();
        await expect(this.chargeInput).toHaveValue('1,000');
    }
    
    // 3000원 선택 액션
    async selectAmount3k() {
        await this.amount3kBtn.click();
        await expect(this.chargeInput).toHaveValue('3,000');
    }
    
    // 5000원 선택 액션
    async selectAmount5k() {
        await this.amount5kBtn.click();
        await expect(this.chargeInput).toHaveValue('5,000');
    }
    
    // 10000원 선택 액션
    async selectAmount10k() {
        await this.amount10kBtn.click();
        await expect(this.chargeInput).toHaveValue('10,000');
    }
    
    // 5만원 선택 액션
    async selectAmount50k() {
        await this.amount50kBtn.click();
        await expect(this.chargeInput).toHaveValue('50,000');
    }

        
    // 10만만원 선택 액션
    async selectAmount100k() {
        await this.amount100kBtn.click();
        await expect(this.chargeInput).toHaveValue('100,000');
    }


    // 약관 동의 액션
    async agreeToTerms() {
        await this.agreementCheckbox.check();
    }

    // 결제 완료 액션 (Alert 창 자동 승인 포함)
    async submitPayment() {
        this.page.once('dialog', dialog => dialog.accept());
        await this.submitBtn.click();
    }
}