import { test, expect } from '@playwright/test';

test('try ddl', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Register.html');
  //await page.locator("//input[@id='imagesrc']").setInputFiles('TestData/new file.pdf');
  await page.locator("#imagesrc").setInputFiles('TestData/new file.pdf');
  await page.waitForTimeout(5000);
});