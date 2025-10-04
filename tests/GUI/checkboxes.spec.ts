import { test, expect } from '@playwright/test';

test('try checkbox', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/checkboxes');


  const checkbox= page.locator("//input[@id='checkbox1']");
  //await expect(checkbox).not.toBeChecked();
  await checkbox.check();
  await page.waitForTimeout(5000);
   await page.locator("//input[@id='checkbox2']").uncheck();
   //await page.waitForTimeout(5000);
   await page.locator("//input[@id='checkbox1']").uncheck();
  await page.waitForTimeout(5000);
});