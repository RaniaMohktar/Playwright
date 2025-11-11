import { test, expect } from '@playwright/test';
import { loginpage } from '../Pages/loginpage';
import { Signuppage } from '../Pages/Signuppage';
import myData from '../../TestData/logindata';  


//const data = JSON.parse(JSON.stringify(myData));


 test('FullSignup', async ({ page }) => {
   const login = new loginpage(page);
   const sign = new Signuppage(page);
   await login.goto();
   await login.enterLoginData(myData[0].name, myData[0].email);
    await sign.fillData();

 });




























