import { test, expect } from '@playwright/test'
test('Leaftaps', async ({ page, context }) => {
    //launch url
    await page.goto("http://leaftaps.com/opentaps/control/main");
    //Enter the username
    await page.locator('#username').fill("demosalesmanager");
    //Enter the password
    await page.locator('#password').fill("crmsfa");
    //Click the Login button
    await page.locator('.decorativeSubmit').click();
    //Click CRM/SFA
    await page.locator('//a[contains(text(),"CRM/SFA")]').click();
    //Click Leads
    await page.locator('//a[text()="Leads"]').click();
    //Click Merge Leads
    await page.locator('//a[text()="Merge Leads"]').click();

    //creating first listener
    let parentWindow = context.waitForEvent('page') //create the event listener and promise is created-pending
    //opening child window - Click From Lead widget 
    await page.locator('(//img[@src="/images/fieldlookup.gif"])[1]').click();
    let childWindow = await parentWindow //resolving promise
    //Select the first resulting lead id
    await childWindow.locator('//a[text()="10025"]').click();
    //creating 2nd listener 
    let parentWindow1 = context.waitForEvent('page') //create the event listener and promise is created-pending
    //opening child window - Click To Lead widget
    await page.locator('(//img[@src="/images/fieldlookup.gif"])[2]').click();
    let childWindow1 = await parentWindow1 //resolving promise
    //Select the second resulting lead id
    await childWindow1.locator('//a[text()="10026"]').click();
    //Get the message and type of the alert
    page.on("dialog", async (alert) => {
        const alertmessage = alert.message();
        console.log(alertmessage);

        const alerttype = alert.type();
        console.log(alerttype);
        //Accept the alert
        if (alerttype === "confirm") {
            alert.accept();
        }
        else {
            console.log("Invalid Alert Type");
        }
    })

    //Click Merge button
    await page.locator('//a[text()="Merge"]').click();
    //Assert the title of the page
    const Title = await page.title();
    await page.waitForTimeout(5000);
    await expect(page).toHaveTitle(Title);
    console.log(Title);
    console.log("Title Assertion is passed");

})
