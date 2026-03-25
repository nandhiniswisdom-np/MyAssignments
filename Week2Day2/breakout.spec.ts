import {test} from '@playwright/test'

test("Launch Amazon", async({page})=>
{
await page.goto("https://www.amazon.in/");
await page.waitForTimeout(5000);
const title= await page.title();
   console.log(title);
   const url = page.url();
   console.log(url);
})