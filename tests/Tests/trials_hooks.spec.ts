import { test, expect } from '@playwright/test';

test.describe('my tests', () => {

  test.afterEach(async () => {
    console.log("test case globally");
  });

  test('test one @API', async ({ page }) => {
    console.log(" test case one");
  });

  test('test two @API', async ({ page }) => {
    console.log(" test case two");
  });

});
