import { test, expect } from '@playwright/test';

test('try ddl', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/checkboxes');

  await page.locator("//input[@id='checkbox1']").check();
  await page.waitForTimeout(5000);
  await page.locator("//input[@id='checkbox2']").uncheck();
  await page.waitForTimeout(5000);
  await page.locator("//input[@id='checkbox1']").uncheck();
  await page.waitForTimeout(5000);
});