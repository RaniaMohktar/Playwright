import { test, expect } from '@playwright/test';

test('try ddl', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/drag-and-drop-circles');

const red= page.locator(".red");
const green=page.locator("//div[@class='green']");
const target = page.locator("#target");
 await red.dragTo(target);
 await green.dragTo(target);
 await page.waitForTimeout(5000);
});