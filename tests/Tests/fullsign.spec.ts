import { test, expect } from '@playwright/test';
import { loginpage } from '../Pages/loginpage';
import { Signuppage } from '../Pages/Signuppage';
import myData from '../../TestData/logindata.json';  





myData.forEach((data) => {
 test(`Full Signup - ${data.name}`, async ({ page }) => {
   const login = new loginpage(page);
   const sign = new Signuppage(page);
   await login.goto();
   await login.enterLoginData(data.name, data.email);
   // await sign.fillData();
   // await sign.Assertion();
 });
});



























