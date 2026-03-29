import {test} from '@playwright/test'

test("LeafGround", async({page})=>
{
 
    await page.goto("https://www.leafground.com/select.xhtml");
       //storing the dropdown values in one variable
    const Tools = page.locator('//select[@class="ui-selectonemenu"]/option');
    //storing the dropdown count
    const Toolscount= await Tools.count();
    //printing the dropdown count
    console.log(`No of Automation Tools: ${Toolscount}`);
    //printing the first index value 
    console.log(await Tools.nth(0).innerText());
    //printing the 3rd index value 
    console.log(await Tools.nth(3).innerText());
    //hydrating all dropdown values via for loop
    for (let index=0;index<Toolscount;index++)

        {
             //printing each dropdown value
            console.log(await Tools.nth(index).innerText());
        }
        //clicking on country dd button
      await page.locator('//label[text()="Select Country"]').click();
      //selecting India as value
      await page.locator('[data-label="India"]').click();


})