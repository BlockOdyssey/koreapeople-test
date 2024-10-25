import { test, expect } from '@playwright/test';

test.describe('login test', () => {
  test('should login successfully', async ({ page }) => {
    const myEmail = 'sangyun.lee@blockodyssey.io';

    await page.goto('https://admin-qa.koreapeople.or.kr/login');

    await page.fill('input[name="mail"]', myEmail);
    await page.fill('input[name="password"]', 'dltkddbs123');

    await page.click('button[type="submit"]');

    try {
      await page.waitForURL('https://admin-qa.koreapeople.or.kr/organization', { timeout: 1000 });
      expect(true).toBe(true);
    } catch {
      expect(true).toBe(false);
    }
  });
});
