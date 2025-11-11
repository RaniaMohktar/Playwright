// reporters   html / list / dot / blob / allure-playwright
//project= ccc

import { test, expect } from '@playwright/test';
test.describe('my tests' ,()=>{
    test('test APIIIIIS @test @api', async ({ page }) => {

    console.log("test case APIIIS ");
    expect(true).toBeTruthy();
});



test('tesst two', async ({ page }) => {
    console.log("test case two ");
    expect(false).toBeTruthy();

});

});