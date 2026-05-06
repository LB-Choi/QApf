import { test, expect } from '@playwright/test';

test('로컬 환경에서 충전 팝업으로 정상 이동하는가', async ({ page }) => {
    // 1. 이미 로그인 후 UI가 노출되도록 수정된 로컬 HTML 접속
    await page.goto('http://127.0.0.1:5500/Automation/public/index.html');

    // 2. 메인 캐시 정보 영역이 화면에 렌더링되었는지 대기 및 검증
    const qaTestArea = page.locator('#qa-test-area');
    await expect(qaTestArea).toBeVisible();

    await page.pause();
    // 3. 테스트 목적에 맞게 수정해둔 data-testid로 버튼 클릭
    const chargeBtn = page.getByTestId('main-charge-btn');
    await chargeBtn.click();

    // 4. 로컬에 준비된 충전 Mock 페이지로 라우팅 되었는지 검증
    await expect(page).toHaveURL(/.*mock-charge\.html/);
});