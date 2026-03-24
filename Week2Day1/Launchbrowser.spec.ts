import {test,chromium} from 'playwright/test'

test("Launch browser", async()=>
{
//browser, browsercontext,page
//only in chrome we have channel to select chrome or edge
    const browser = await chromium.launch({channel: "msedge", headless:false});
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("http://leaftaps.com/opentaps/control/main");
    //await page.waitForTimeout(5000);
})