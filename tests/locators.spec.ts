
import { test, expect } from '@playwright/test';
import { waitForDebugger } from 'inspector';

test('try_signup', async ({ page }) => {
  await page.goto('https://automationexercise.com');

//   //-------------------------tradational locators -----------------
//   // id , name , class , linktext , xpath , css 
//   //xpath
    await page.locator("//a[normalize-space()='Signup / Login']").click();
//   await page.locator("//a[normalize-space()='Signup / Login']").click();

//   //css 
//await page.locator("input[placeholder='Name']").fill("Rania");
await page.getByPlaceholder('Name').fill("Masheal");

// await page.locator("input[name='name']").fill("Rania");
// await page.locator("//input[@name='name']").fill("Rania");


//  await page.getByPlaceholder('Name').fill("Rania");
await page.locator('(//input[@name="email"])[2]').fill("raniaali7132@yahoo.com");

//  // xpath with index  stsrt from 1 
//  await page.locator('(//input[@name="email"])[2]').fill("raniaali7132@yahoo.com");

//  //css with index   start from 0
//await page.getByAltText('Website for automation practice').click();
await page.getByText('Signup').nth(2).click();

//  await page.locator('button[class="btn btn-default"]').nth(1).click();

//  //plain id (normal id )
//await page.locator("input[id='id_gender2']").click();
  //await page.locator("#id_gender2").click();
  await page.getByRole('checkbox', { name: 'newsletter' }).click();
  await page.getByText('Receive special offers from our partners!').click();
//await page.locator("#password").fill("Rania123");

//  //-----------------------------playwrgiht locators ------------------------------


//  await page.getByLabel('password').fill("Rania@123");
//  await page.getByText(' Sign up for our newsletter!').click();
//  //name here not means real name byt the text 
//  await page.getByRole('checkbox', { name: 'Receive special offers from our partners!' }).check();
//  await page.locator("#first_name").fill("rony");
//  await page.locator("//input[@data-qa='last_name']").fill("Mokhtar");
//  await page.locator("#company").fill("Vois");
 await page.waitForTimeout(5000);
});















  //   $x("//*[@name='email']") to know the order of your element if it is repeated 
