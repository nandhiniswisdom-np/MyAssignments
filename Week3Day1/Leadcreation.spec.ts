import {test} from '@playwright/test'

test("Lead Creation using Locators", async({page})=>
{
    //Navigate to the URL
    await page.goto("http://leaftaps.com/opentaps/control/main");
    //enter username
    await page.getByLabel('Username').fill('demosalesmanager');
    //enter password
    await page.getByLabel('Password').fill('crmsfa');
    //click login button
    await page.getByRole('button', { name: 'Login' }).click();
    //Click on CRM/SFA 
    await page.getByRole('link', { name: 'CRM/SFA' }).click();
    //Click on Leads 
    await page.getByRole('link', { name: 'Leads' }).click();
    //Click on Create Lead 
    await page.getByRole('link', {name: 'Create Lead'}).click();
    //Fill the Company Name 
    await page.locator('#createLeadForm_companyName').fill('TestLeaf1');
    ////Fill the First Name 
    await page.locator('#createLeadForm_firstName').fill('Rakesh');
     //Fill the Last Name
    await page.locator('#createLeadForm_lastName').fill('Raman');
    //Fill the Salutation 
    await page.locator('#createLeadForm_personalTitle').fill("Mr.")
    //Fill the Title 
    await page.locator('#createLeadForm_generalProfTitle').fill("QC");
    //Fill the Annual Revenue
    await page.locator('#createLeadForm_annualRevenue').fill('200,000');
    //Fill the Department 
    await page.locator('#createLeadForm_departmentName').fill('Validation');
    // Fill the Phone Number 
    await page.locator('#createLeadForm_primaryPhoneNumber').fill('9988553377');
    // Click Create Lead button
    await page.locator('.smallSubmit').click();
    await page.waitForTimeout(5000);
    const Title= await page.title();
    console.log(Title);
    await page.pause();
    headless:false;

})