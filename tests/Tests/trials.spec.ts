import { test, expect } from '@playwright/test';
test.describe('my tests' ,()=>{
    test('test one', {
        tag: ['@fast', '@slow'],
      }, async ({ page }) => {

    console.log("test case one ");
});



test('tesst two  @fast', async ({ page }) => {
    console.log("test case two ");
});

});