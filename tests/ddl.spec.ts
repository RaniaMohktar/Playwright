import { test, expect } from '@playwright/test';

test('try ddl', async ({ page }) => {
  await page.goto('https://automationexercise.com');

  await page.locator("//a[normalize-space()='Signup / Login']").click();

 await page.getByPlaceholder('Name').fill("Rania");

 await page.locator('(//input[@name="email"])[2]').fill("raniaali7132@yahoo.com");

 await page.locator('button[class="btn btn-default"]').nth(1).click();

 await page.locator('#days').selectOption('11');
 await page.locator('//*[@name="months"]').selectOption('January');
 await page.locator('#years').selectOption({label :'2020'});
 await page.waitForTimeout(20000);
});