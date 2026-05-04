import { test } from '@playwright/test'
test('SF API Login skip through Storage state', async ({ page }) => {

    //launch url
    await page.goto("https://login.salesforce.com/");
   
    //Enter username
    await page.locator('#username').fill("nandhiniswisdom.af1b41b45784@agentforce.com");
    // Enter password
    await page.locator('#password').fill("Taara@2022");
    // Click Login
    await page.locator('#Login').click();
    
    await page.waitForTimeout(20000);
    //storage state
    await page.context().storageState({ path: "data/SF API-storage.json" });


})