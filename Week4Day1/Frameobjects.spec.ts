import { test } from "@playwright/test"


test('Frames Objects', async ({ page }) => {
    //launching url
    await page.goto('https://www.leafground.com/frame.xhtml');
    
    /*Syntax
        await page.frame({url:await page.frame({url:'https://www.leafground.com/default.xhtml'})?.locator("#Click").click()})?.locator("#Click").click()
    or
    const frame = page.frame({ url: 'https://www.leafground.com/default.xhtml'});
    await frame?.locator("#Click").click()
    
    
    Optional chaining (?.) allows safe access to properties or methods by returning undefined instead of throwing an error
    when the object is null or undefined.
    
    
    ?. => optional chaining (checks if value exists - not null/undefined)
       if (frame) {
          await frame.locator("#Click").click()
       }
          */
    //single frame
    const frameref = page.frame({ url: "https://www.leafground.com/default.xhtml" });
    await frameref?.locator('#Click').click();
    console.log('single frame object passed');


    //nested frame
    const frameref1 = page.frame({ url: "https://www.leafground.com/framebutton.xhtml" });
    await frameref1?.locator('#Click').click();
    console.log('nested frame object passed');


})