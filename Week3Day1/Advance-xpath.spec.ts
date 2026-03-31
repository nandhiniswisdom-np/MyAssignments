import {test} from '@playwright/test'

test("Advance xpath", async({page})=>
{
    // 1. Navigate to URL
    await page.goto('https://login.salesforce.com/');
    //entering login credentials elder cousing-younger cousin
    await page.locator('//label[@class="label usernamelabel"]/following::input[@id="username"]').fill("dilipkumar.rajendran@testleaf.com");
    //entering password credentials ender sibling-younger sibling
    await page.locator('//label[text()="Password"]/following-sibling::input[@id="password"]').fill("TestLeaf@2025");
    //clciking on login button
    await page.locator('//input[@id="Login"]').click();
}
)