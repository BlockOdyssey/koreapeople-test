import { test, expect } from '@playwright/test';
import { appConfig } from '../app.config';

test.describe('login test', () => {
  test('should login successfully', async ({ page }) => {
    await page.goto('https://admin-qa.koreapeople.or.kr/login');

    await page.fill('input[name="mail"]', appConfig.email);
    await page.fill('input[name="password"]', appConfig.password);

    await page.click('button[type="submit"]');

    try {
      await page.waitForURL('https://admin-qa.koreapeople.or.kr/organization', { timeout: 1000 });
      expect(true).toBe(true);
    } catch {
      expect(true).toBe(false);
    }
  });
});
