import {test, expect} from '@playwright/test';
test("Autowait", async({page})=>
{
    //navigate to url
    await page.goto("https://leafground.com/waits.xhtml");
    await page.waitForTimeout(5000);
    //Wait for an element to become visible before interacting with it
    await page.locator('//button[@class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only ui-button-secondary mr-2 mb-2"]').click();
    await expect(page.locator('//span[text()="I am here"]')).toBeVisible();
    console.log("Element is visible");
    //Wait for an element to disappear from the page. 
    await page.locator('//button[@class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only ui-button-success mr-2 mb-2"]').click();
    await expect(page.locator('//span[text()="I am about to hide"]')).toBeHidden();
    console.log("Element is hidden");
    // Wait for an element to become clickable.
    await page.locator('//span[text()="Click First Button"]').click();
    //const Message = await page.locator('//div[@class="ui-growl-message"]/p').innerText();
    //console.log(Message);
    const Message1 = await page.locator('(//span[@class="ui-growl-title"])[1]').innerText();
    const Message2 = await page.locator('(//span[@class="ui-growl-title"])[2]').innerText();
    const Message3 = await page.locator('(//span[@class="ui-growl-title"])[3]').innerText();
    //Check for text changes within an element and respond accordingly
    switch(Message1)
{
    case "Message 1":
        console.log("Message Content");
        break;  
    case "Message 2":
        console.log("Message Content");
        break;
    case "Message 3":
        console.log("Message Content");           
        break;            
default:
        console.log("Invalid Message");

}   
    console.log("Element is enabled");
    await page.locator('//button[@class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only ui-button-danger mr-2 mb-2"]').click();
    await expect(page.locator('//span[text()="I am going to change!"]')).toBeHidden();
    await expect(page.locator('//span[text()="Did you notice?"]')).toBeVisible();
    console.log("Element is visible");
}

)