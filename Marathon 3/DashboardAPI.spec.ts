import { test, expect } from '@playwright/test'

let ID:any;
let URL = "https://orgfarm-40f0385177-dev-ed.develop.lightning.force.com"
let Token_Type:any;
let Token:any;
/*
test.use({ storageState: 'data/SF API-storage.json' })
test("Create new Dashboard using SF UI",async({page,context})=>
{
await page.goto("https://orgfarm-40f0385177-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome");
        const Title = await page.title()
        console.log(Title);
        //accessing the toggle menu
        await page.locator('//button[@title="App Launcher"]').click();
        await page.waitForTimeout(5000);
        //clicking on View all
        await page.locator('//button[text()="View All"]').click()
        //search for Dashboard
        await page.waitForTimeout(5000);
        await page.locator('//input[@placeholder="Search apps or items..."]').fill("Dashboard");
        await page.waitForTimeout(5000);
        //clicking on dashboard link
        await page.locator('//mark[text()="Dashboard"]').click();
        //click on create new dashboard
        await page.locator('//div[@title="New Dashboard"]').click();
        //await page.waitForTimeout(5000);   
        const frame = page.frameLocator('//iframe[@title="dashboard"]');
        //enter dashboard name
        await frame.locator('//input[@id="dashboardNameInput"]').fill('Salesforce Automation by Nandhini');
        //click on create dashboard button
        await frame.locator('//button[@id="submitBtn"]').click();
        //save the dashboard
        //await frame.locator('//button[text()="Save"]').last().click();
        //const successmsg = expect(frame.locator('//span[text()="Dashboard saved"]'));
        //await successmsg.toContainText("Dashboard saved");
       // console.log(successmsg);
        //verify the dashboard name
       const dashboardName = await frame.locator('//span[text()="Salesforce Automation by Nandhini"]').innerText();
       expect(dashboardName).toContain("Salesforce Automation")
       console.log(dashboardName)
})
*/
test.describe.serial('Execute the script in serial mode', async()=>{
test('Dashboard testing using PW API', async({request})=>{
let responsebody = await request.post("https://login.salesforce.com/services/oauth2/token",{
    headers:
    {
        "Content-Type":"application/x-www-form-urlencoded"

    },
    form:{
        "grant_type":"password",
        "client_id":"3MVG9dAEux2v1sLuxTTJFIrAu1bKsAvP2rt0aakHZHlA1wYUvopbx3eX46yvQ7jitqEeLpgGEqRvkiRP1RwOo",
        "client_secret":"3C7FDF20D435AE6B4725B998FEDD231CE78E2791B6F9073E6ABFF0B5465FA16A",
        "username":"nandhiniswisdom.af1b41b45784@agentforce.com",
        "password":"Taara@2022iyldi6XB9DDkDHq904QpRhKP1"
    }
})
let response = await responsebody.json()
console.log(response);

let status= responsebody.status()
let statustext= responsebody.statusText()
console.log(status);
console.log(statustext);

expect(status).toBe(200)
expect(statustext).toBe("OK")

URL = response.instance_url;
console.log(URL);
Token = response.access_token;
console.log(Token);
Token_Type = response.token_type;
console.log(Token_Type);
})
test("fetch dashboard details using PW API", async({request})=>{

    let responsebody = await request.get(`${URL}/services/data/v65.0/sobjects/Dashboard/01ZgL000006vJqTUAU`,
        {
        headers:{
            "Content-Type":"application/json",
            "Authorization":`${Token_Type} ${Token}`
        }
    })

    let response = await responsebody.json()
    console.log(response);

    let status= responsebody.status()
    let statustext= responsebody.statusText()
    console.log(status);
    console.log(statustext);
    expect(status).toBe(200)
    expect(statustext).toBe("OK")
})
test("Delete a dashboard detail using PW API", async({request})=>{

    let responsebody = await request.delete(`${URL}/services/data/v65.0/sobjects/Dashboard/01ZgL000006vJqTUAU`,
        {
        headers:{
            "Content-Type":"application/json",
            "Authorization":`${Token_Type} ${Token}`
        }
    })


    let status= responsebody.status()
    let statustext= responsebody.statusText()
    console.log(status);
    console.log(statustext);
    expect(status).toBe(204)
    expect(statustext).toBe("No Content")


})
})

