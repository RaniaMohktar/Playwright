import { test, expect } from '@playwright/test';

test('try ddl', async ({ page }) => {
  await page.goto('https://automationexercise.com');

  await page.locator("//a[normalize-space()='Signup / Login']").click();

 await page.getByPlaceholder('Name').fill("Rania");

 await page.locator('(//input[@name="email"])[2]').fill("raniaali7132@yahoo.com");

 await page.locator('button[class="btn btn-default"]').nth(1).click();

await page.locator("#days").selectOption("17");
await page.locator("#months").selectOption("12");
await page.locator("#years").selectOption({label :"2000"});






// by visible text
//  await page.locator('#days').selectOption('11');

//  // by value
//  await page.locator('//*[@name="months"]').selectOption({label :'January'});
//  //by label (label= visible test elly bykon ma been <>)
//  await page.locator('#years').selectOption({label :'2020'});
 await page.waitForTimeout(20000);
});