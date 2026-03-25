import {test} from '@playwright/test'
test('Login to leaftaps', async({page})=>
{
    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.locator('#username').fill('demosalesmanager');
    await page.locator('input[id="password"]').fill('crmsfa');
    await page.locator('.decorativeSubmit').click();
    await page.locator("text=CRM/SFA").click();
})