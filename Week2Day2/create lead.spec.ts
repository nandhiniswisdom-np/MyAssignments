import {test} from '@playwright/test'

test("Create Lead", async ({page})=>
{
    //launching URL
 await page.goto("http://leaftaps.com/opentaps/control/main");
 //Entering username
 await page.locator('#username').fill("Demosalesmanager");
 //entering password
 await page.locator('#password').fill("crmsfa");
 //clcicking on login button
 await page.locator(".decorativeSubmit").click();
 //clicking on CRM/SFA button
 await page.locator("text=CRM/SFA").click();
 //clicking on Lead button
 await page.locator("text=Lead").nth(3).click();
 //clicking on Create lead button
 await page.locator("text=Create Lead").nth(1).click();
 //entering company name
 await page.locator('#createLeadForm_companyName').fill("Demo class");
 //entering first name
 await page.locator("#createLeadForm_firstName").first().fill("Nandhini");
 //entering last name
 await page.locator("#createLeadForm_lastName").first().fill("Purushothaman");
 //entering salutation
 await page.locator('[name="personalTitle"]').fill("Hello");
 //entering title
 await page.locator('[name="generalProfTitle"]').fill("Mrs");
 //entering annual revenue
 await page.locator('[name="annualRevenue"]').fill('100,000');
 //entering department name
 await page.locator('[name="departmentName"]').fill("QA");
 //entering phone number
 await page.locator('#createLeadForm_primaryPhoneNumber').fill('9988776655');
 //clicking on create lead button
 await page.locator(".smallSubmit").click();
 






})