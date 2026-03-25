import {test} from '@playwright/test'

test("Launch facebook", async({page})=>
{
//browser, browsercontext,page
//only in chrome we have channel to select chrome or edge

    await page.goto("https://www.facebook.com/");
   const FBtitle= await page.title();
   console.log(FBtitle);
   const FBurl = page.url();
   console.log(FBurl);
    //await page.waitForTimeout(5000);
})
