import {test, expect} from '@playwright/test'

test("Checkbox", async({page,browser})=>
{
  //navigating to leafground url
    await page.goto("https://leafground.com/checkbox.xhtml ");
    //Click on the "Basic Checkbox.” 
    await page.locator('//span[text()="Basic"]').click();
    //Click on the "Notification Checkbox." 
    await page.locator('(//div[@class="ui-chkbox-box ui-widget ui-corner-all ui-state-default"])[1]').click();
    await expect(page.locator(".ui-growl-title")).toBeVisible();
    await expect(page.locator(".ui-growl-title")).toHaveText("Checked");
    // Click on your favorite language (assuming it's related to checkboxes).
    await page.locator('//label[text()="Javascript"]').click();
    //Click on the "Tri-State Checkbox." 
    await page.waitForTimeout(10000);
    await page.locator('(//h5[text()="Tri State Checkbox"]/following::div[@class="ui-chkbox-box ui-widget ui-corner-all ui-state-default"])[1]').click();
    //await page.locator('//span[@class="ui-chkbox-icon ui-c"]').click();
    //Verify which tri-state option has been chosen. 
    const Message = await page.locator('//div[@class="ui-growl-message"]/p').innerText();
    console.log(Message);
    
  switch(Message)
{
    case "State = 0":
        console.log("State has not been chosen");
        break;  
    case "State = 1":
        console.log("state has been chosen");
        break;
    case "State = 2":
        console.log("State has been cancelled");           
        break;            
default:
        console.log("Invalid State");

}
        
        
//Click on the "Toggle Switch." 
await page.waitForTimeout(10000);
await page.locator('//div[@class="ui-toggleswitch-slider"]').click();
await expect(page.locator('.ui-growl-title')).toBeVisible();
//Verify that the expected message is displayed. 
const Togglemessage  =(page.locator('.ui-growl-title'));
console.log("Toggle Switch is " + await Togglemessage.innerText());

// Verify if the Checkbox is disabled. 
const disableverification = await page.locator('//div[@class="ui-chkbox-box ui-widget ui-corner-all ui-state-default ui-state-disabled ui-state-disabled"]/preceding-sibling::div/input').isDisabled();
console.log("Checkbox is disabled: " + disableverification);
// Select multiple options on the page (details may be needed).
await page.locator('//ul[@data-label="Cities"]').click();
await page.locator('(//label[text()="London"])[2]').click();
await page.locator('(//label[text()="Rome"])[2]').click();
// Perform any additional actions or verifications required
console.log("Multiple Locations are selected");
// Close the web browser when done. 
//await browser.close();

}
)
