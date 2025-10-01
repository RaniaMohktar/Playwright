import { test, expect } from '@playwright/test';

test('try keyboard', async ({ page }) => {
    await page.goto('https://automationexercise.com');
    await page.locator("//a[normalize-space()='Signup / Login']").click();
    await page.locator("//input[@name='name']").fill("Rania");
    await page.locator('(//input[@name="email"])[2]').click();
    await expect.soft(page.locator("//b[normalize-space()='Enter account information']")).toBeVisible();
    await page.keyboard.type('raniaali713@yahoo.comm');
    await page.waitForTimeout(5000);
    await page.keyboard.press('Backspace');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(5000);
 

   // await page.waitForTimeout(5000);
});