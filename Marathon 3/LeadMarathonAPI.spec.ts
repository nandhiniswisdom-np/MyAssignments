import { test, expect } from '@playwright/test'
test.use({ storageState: 'data/SF API-storage.json' })
let URL: any
let Token: any
let Token_Type: any
let ID: any
let Last_Name: any
test.describe.serial('Execute the script in serial mode', async () => {
    test("To generate the token using PW API", async ({ request }) => {

        let responsebody = await request.post('https://login.salesforce.com/services/oauth2/token',
            {
                headers: {

                    "Content-Type": "application/x-www-form-urlencoded"
                },
                form: {
                    "grant_type": "password",
                    "client_id": "3MVG9dAEux2v1sLuxTTJFIrAu1bKsAvP2rt0aakHZHlA1wYUvopbx3eX46yvQ7jitqEeLpgGEqRvkiRP1RwOo",
                    "client_secret": "3C7FDF20D435AE6B4725B998FEDD231CE78E2791B6F9073E6ABFF0B5465FA16A",
                    "username": "nandhiniswisdom.af1b41b45784@agentforce.com",
                    "password": "Taara@2022iyldi6XB9DDkDHq904QpRhKP1"
                }
            })
        let response = await responsebody.json()
        console.log(response)

        let status = await responsebody.status()
        let statustext = await responsebody.statusText()
        console.log(status)
        console.log(statustext)

        expect(status).toBe(200)
        expect(statustext).toBe("OK")

        URL = response.instance_url;
        Token = response.access_token;
        Token_Type = response.token_type;
        console.log(URL)
        console.log(Token)
        console.log(Token_Type)
    })

    test("to create a lead using PW API", async ({ request }) => {
        let responsebody = await request.post(`${URL}/services/data/v65.0/sobjects/Lead`,
            {
                headers:
                {
                    "Content-Type": "application/json",
                    "Authorization": `${Token_Type} ${Token}`
                },
                data:
                {
                    "Salutation": "Mr.",
                    "LastName": "muthu",
                    "Company": "LPG"
                }
            })
        let response = await responsebody.json()
        console.log(response);

        let status = await responsebody.status()
        let statustext = await responsebody.statusText()

        console.log(status)
        console.log(statustext)

        expect(status).toBe(201)
        expect(statustext).toBe("Created")
        ID = response.id
        console.log(ID)
    })

    test("Update the Lead using PW API", async ({ request }) => {
        let responsebody = await request.patch(`${URL}/services/data/v65.0/sobjects/Lead/${ID}`,
            {
                headers:
                {
                    "Content-Type": "application/json",
                    "Authorization": `${Token_Type} ${Token}`
                },
                data:
                {
                    "FirstName": "mari",
                    "Title": "QA"
                }


            })

        let status = await responsebody.status()
        let statustext = await responsebody.statusText()
        console.log(status)
        console.log(statustext)

        expect(status).toBe(204)
        expect(statustext).toBe("No Content")



    })
    test("Fetch Lead details using PW API", async ({ request }) => {
        let responsebody = await request.get(`${URL}/services/data/v65.0/sobjects/Lead/${ID}`,
            {
                headers:
                {
                    "Content-Type": "application/json",
                    "Authorization": `${Token_Type} ${Token}`
                }
            })
        let response = await responsebody.json()
        console.log(response)

        let status = await responsebody.status()
        let statustext = await responsebody.statusText()
        console.log(status)
        console.log(statustext)

        expect(status).toBe(200)
        expect(statustext).toBe("OK")

        Last_Name = response.LastName
        console.log(Last_Name)

    })
    test('Salesforce Skip login using storage state', async ({ page }) => {

        await page.goto("https://orgfarm-40f0385177-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome");
        const Title = await page.title()
        console.log(Title);
        //accessing the toggle menu
        await page.locator('//button[@title="App Launcher"]').click();
        await page.waitForTimeout(5000);
        //clicking on View all
        await page.locator('//button[text()="View All"]').click()
        //search for lead
        await page.waitForTimeout(5000);
        await page.locator('//input[@placeholder="Search apps or items..."]').fill("Leads");
        await page.waitForTimeout(5000);
        //clicking on lead link
        await page.locator('//mark[text()="Leads"]').click();
        //search for the last name
        const search = await page.locator('//input[@placeholder="Search this list..."]')
        await search.fill(`${Last_Name}`);
        await search.press('Enter');
        await page.waitForTimeout(5000);
        //clicking on show actions
        await page.locator('//span[text()="Show Actions"]').click()
        //select delete from the action
        await page.locator('//a[@title="Delete"]').click();
        //delete the record
        await page.locator('//span[text()="Delete"]').click();
        const msg=await page.locator('span[class="toastMessage slds-text-heading--small forceActionsText"]').innerText()
        console.log(msg);
        expect(msg).toContain(' was deleted. ')
        //const Message = await page.locator('//span[@class="toastMessage slds-text-heading--small forceActionsText"]').innerText();
         //console.log(Message);
        //expect(Message).toContain("was deleted.");

       

    })
})







