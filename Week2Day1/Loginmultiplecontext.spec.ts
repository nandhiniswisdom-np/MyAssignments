import {test,chromium, webkit, expect} from '@playwright/test'
test('Login multiple context', async ()=>
{
    //chromium edge launch for redbus
    
  const browser= await chromium.launch({channel:"msedge", headless:false});
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.redbus.in/");
  const title = await page.title();
  console.log(title);
  const url = page.url();
  console.log(url);

  //webkit launch for flipkart
  const browser1= await webkit.launch({headless:false});
  const context1 = await browser1.newContext();
  const page1 = await context1.newPage();
  await page1.goto("https://www.flipkart.com/");
  const title1 = await page1.title();
  console.log(title1);
  const url1 = page1.url();
  console.log(url1);


})