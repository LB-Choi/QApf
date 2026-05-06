import { test, chromium } from '@playwright/test';

test('로그인 세션 생성 및 저장', async () => {
  const browser = await chromium.launch({ headless: false }); // 직접 로그인하기 위해 유선 모드
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('http://127.0.0.1:5500/index.html');
  
  await page.getByRole('link', {name: 'NEXON ID 로그인'}).click();


  await page.getByPlaceholder('넥슨ID (아이디 또는 이메일)').fill('email');
  await page.getByPlaceholder('비밀번호').fill('password');

  await page.getByRole('button', {name: '넥슨 ID 로그인'}).click();

  // 로그인 완료 후 메인 페이지가 뜰 때까지 기다립니다.
  await page.waitForURL('**/Home/Game**');

  await page.pause();
  // 핵심: 현재의 로그인 상태(쿠키, 스토리지)를 파일로 저장
  await context.storageState({ path: 'auth.json' });

});