import { test, expect } from '@playwright/test';

test('try ddl', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Frames.html');

// singl frame by name
//   const fff= await page.frame('SingleFrame');
// await fff?.locator("//input[@type='text']").fill('rania');
// await page.waitForTimeout(5000);



  const fff= await page.frameLocator("//iframe[@id='singleframe']");
await fff?.locator("//input[@type='text']").fill('rania');
await page.waitForTimeout(5000);

//nested frame 
// await page.locator(".analystic[href='#Multiple']").click();
// const parent =await page.frameLocator("//iframe[@src='MultipleFrames.html']");
// const child = await parent.frameLocator("//iframe[normalize-space()='<p>Your browser does not support iframes.</p>']");
// await child.locator("//input[@type='text']").fill('raniaaaaa');
// await page.waitForTimeout(5000);
});
