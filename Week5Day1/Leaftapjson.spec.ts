import { test } from '@playwright/test'
import leadData from "../../data/LTTest.json"
for (let login of leadData) {
    test(`Read Lead creation from JSON File ${login.TestcaseID}`, async ({ page }) => {
        //launch url
        await page.goto("http://leaftaps.com/opentaps/control/main");
        //Enter the username
        await page.locator('#username').fill(login.Username);
        //Enter the password
        await page.locator('#password').fill(login.Password);
        //Click the Login button
        await page.locator('.decorativeSubmit').click();
        //Click CRM/SFA
        await page.locator('//a[contains(text(),"CRM/SFA")]').click();
        //clicking on Lead
        await page.locator('//a[text()="Leads"]').click();
        //click on create data
        await page.locator('//a[text()="Create Lead"]').click();
        //filling company name
        await page.locator('//input[@id="createLeadForm_companyName"]').fill(login['Company name']);
        //filling first name
        await page.locator('//input[@id="createLeadForm_firstName"]').fill(login['First name']);
        //filling last name
        await page.locator('//input[@id="createLeadForm_lastName"]').fill(login['Last name']);
        //selecting mail
        await page.locator('//select[@id="createLeadForm_dataSourceId"]').selectOption({ value: "LEAD_DIRECTMAIL" });
        //selecting marketinc campaign
        await page.locator('//select[@id="createLeadForm_marketingCampaignId"]').selectOption({ value: "DEMO_MKTG_CAMP" });
        //getting the count of marketing campaign
        const campaignlist = page.locator('//select[@id="createLeadForm_marketingCampaignId"]/option');
        const count = await campaignlist.count();
        //printing the campaign count value
        console.log(`No of values in the campaign dropdown is ${count}`);
        //print all values
        //hydrating all dropdown values via for loop
        for (let index = 0; index < count; index++) {
            //printing each dropdown value
            console.log(await campaignlist.nth(index).innerText());
        }
        //selecting industry value
        await page.locator('//select[@id="createLeadForm_industryEnumId"]').selectOption({ value: "IND_GEN_SERVICES" });
        //selecting currency
        await page.locator('//select[@id="createLeadForm_currencyUomId"]').selectOption({ value: "INR" })

        //selecting country as india
        await page.locator('//select[@id="createLeadForm_generalCountryGeoId"]').selectOption({ value: "IND" });
        //selecting state
        await page.locator('//select[@id="createLeadForm_generalStateProvinceGeoId"]').selectOption({ value: "IN-TN" });
        //getting the count of state
        const State = page.locator('//select[@id="createLeadForm_generalStateProvinceGeoId"]/option');
        const statecount = await State.count();
        //printing the campaign count value
        console.log(`No of values in the State dropdown is ${statecount}`);
        //clicking on create lead
        await page.locator('//input[@class="smallSubmit"]').click();
    })}
