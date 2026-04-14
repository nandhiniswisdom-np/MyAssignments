import { test } from '@playwright/test'
test('Test Annotation SF', async ({ page }) => {

    //launch url
    await page.goto("https://login.salesforce.com/");
    //Enter username
    await page.locator('#username').fill("dilipkumar.rajendran@testleaf.com");
    // Enter password
    await page.locator('#password').fill("TestLeaf@2025");
    // Click Login
    await page.locator('#Login').click();
    //storage state
    await page.context().storageState({ path: "data/sf-storage.json" });


})