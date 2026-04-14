import { expect, test } from '@playwright/test'
test.use({
    storageState:'data/sf-storage.json'
})
//Reuse session and verify homepage
test.only('SF Test Annotation validation', async ({ page }) => {

    await page.goto("https://testleaf.lightning.force.com/lightning/page/home");
    //Click Leads
    await page.locator('(//span[text()="Leads"])[1]').click();
})

//Navigate to page
test('SF Navigation validation', async ({ page }) => {
    test.slow();
  await page.goto("https://testleaf.lightning.force.com/lightning/page/home");
    //click on Accounts
    await page.locator('(//span[text()="Accounts"])[1]').click();
})

//Invalid session
test.fail('SF Invalid login Validation', async({page})=>
{
    await page.goto("https://testleaf.lightning.force.c/lightning/page/home");
    //page title
    await expect(page).toHaveURL('/Home/');
})

