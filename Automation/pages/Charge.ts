import { expect, Locator, Page } from '@playwright/test';

export class ChargePage {
    readonly page: Page;
    
    // 금액 버튼
    readonly amount1kBtn: Locator;
    readonly amount3kBtn: Locator;
    readonly amount5kBtn: Locator;
    readonly amount10kBtn: Locator;
    readonly amount30kBtn: Locator;
    readonly amount50kBtn: Locator;
    readonly amount100kBtn: Locator;
    
    // 💡 [추가됨] 결제 수단 및 상세 제어 요소
    readonly methodCardBtn: Locator;
    readonly methodEasyBtn: Locator;
    readonly methodPhoneBtn: Locator;
    readonly phoneTelecomSelect: Locator;
    readonly phoneNumInput: Locator;
    
    readonly agreementCheckbox: Locator;
    readonly submitBtn: Locator;
    readonly chargeInput: Locator;

    readonly toastText: Locator;

    constructor(page: Page) {
        this.page = page;
        
        // 💡 HTML의 data-testid와 정확히 일치하도록 수정 ('숫자kbtn')
        this.amount1kBtn = page.getByTestId('1kbtn');
        this.amount3kBtn = page.getByTestId('3kbtn');
        this.amount5kBtn = page.getByTestId('5kbtn');
        this.amount10kBtn = page.getByTestId('10kbtn');
        this.amount30kBtn = page.getByTestId('30kbtn');
        this.amount50kBtn = page.getByTestId('50kbtn');
        this.amount100kBtn = page.getByTestId('100kbtn');
        
        // 💡 결제 수단 요소 매핑
        this.methodCardBtn = page.getByTestId('method-card');
        this.methodEasyBtn = page.getByTestId('method-easy');
        this.methodPhoneBtn = page.getByTestId('method-phone');
        this.phoneTelecomSelect = page.getByTestId('phone-telecom');
        this.phoneNumInput = page.getByTestId('phone-number');
        
        this.agreementCheckbox = page.getByTestId('agreement-checkbox');
        this.submitBtn = page.getByTestId('submit-payment-btn');
        this.chargeInput = page.getByTestId('charge-input');

        this.toastText = page.locator('#toastText');
    }

    // ==========================================
    // 1. 금액 선택 액션
    // ==========================================
    async selectAmount1k() { await this.amount1kBtn.click(); await expect(this.chargeInput).toHaveValue('1,000'); }
    async selectAmount3k() { await this.amount3kBtn.click(); await expect(this.chargeInput).toHaveValue('3,000'); }
    async selectAmount5k() { await this.amount5kBtn.click(); await expect(this.chargeInput).toHaveValue('5,000'); }
    async selectAmount10k() { await this.amount10kBtn.click(); await expect(this.chargeInput).toHaveValue('10,000'); }
    async selectAmount30k() { await this.amount30kBtn.click(); await expect(this.chargeInput).toHaveValue('30,000'); }
    async selectAmount50k() { await this.amount50kBtn.click(); await expect(this.chargeInput).toHaveValue('50,000'); }
    async selectAmount100k() { await this.amount100kBtn.click(); await expect(this.chargeInput).toHaveValue('100,000'); }

    // ==========================================
    // 2. 결제 수단 선택 액션 
    // ==========================================
    async selectCardPayment() { 
        await this.methodCardBtn.click(); 
    }
    
    async selectEasyPayment() { 
        await this.methodEasyBtn.click(); 
    }
    
    async selectPhonePayment(telecom: string, phoneNum: string) {
        await this.methodPhoneBtn.click();
        await this.phoneTelecomSelect.selectOption(telecom);
        await this.phoneNumInput.fill(phoneNum);
    }

    // ==========================================
    // 3. 공통 제어 액션
    // ==========================================
    async agreeToTerms() {
        await this.agreementCheckbox.check();
    }

    async submitPayment() {
        // 1. 결제하기 버튼 클릭
        await this.submitBtn.click();
        
        // 2. 💡 네이티브 dialog 대신 커스텀 Toast 알림창의 '확인' 버튼을 찾아 클릭
        const toastConfirmBtn = this.page.getByTestId('toast-confirm-btn');
        await expect(toastConfirmBtn).toBeVisible(); // 팝업이 렌더링될 때까지 안전하게 대기
        await toastConfirmBtn.click();
    }
}