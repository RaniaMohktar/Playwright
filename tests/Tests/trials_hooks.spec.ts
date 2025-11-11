import { test, expect } from '@playwright/test';

test.describe('my tests', () => {

  test.beforeAll(async () => {
    console.log("test case globally");
  });

  test('test one', async ({ page }) => {
    console.log(" test case one");
  });

  test('test two', async ({ page }) => {
    console.log(" test case two");
  });

});
