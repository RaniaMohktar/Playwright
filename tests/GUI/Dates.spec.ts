import { test, expect } from '@playwright/test';
//++++++++++++++++++first type+++++++++++++++++++=
let day= '12';

test('try date', async ({ page }) => {

//   await page.goto('https://demo.automationtesting.in/Datepicker.html');
// await page.locator("#datepicker1").click();
// await page.locator("//span[@class='ui-icon ui-icon-circle-triangle-e']").click();
// await page.locator("//span[@class='ui-icon ui-icon-circle-triangle-e']").click();
// //await page.getByText("12").click();
// await page.getByRole('link',{name: day}).click();
//   await page.waitForTimeout(5000);



//++++++++++++++++++++++++second type +++++++++++++++++
//   await page.goto('https://demo.automationtesting.in/Datepicker.html');
// await page.locator("#datepicker2").fill('10/06/2025');
// await page.waitForTimeout(5000);



// await page.goto('https://demo.automationtesting.in/Datepicker.html');
// await page.locator("#datepicker2").click()
// await page.waitForTimeout(5000);
// await page.locator("//select[@title='Change the month']").selectOption('December');
// await page.locator("//select[@title='Change the year']").selectOption('2027');
// await page.getByRole('link',{name: '12'}).click();
await page.waitForTimeout(5000);
});