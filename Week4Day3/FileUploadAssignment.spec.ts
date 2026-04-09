import {test,chromium, expect} from '@playwright/test'
test('File Upload for salesforce', async({page})=>
{
//launch chromium with non-headless mode
await chromium.launch({ headless: false });
//launching url
await page.goto("https://login.salesforce.com/ ");
//Enter username
await page.locator('#username').fill("dilipkumar.rajendran@testleaf.com");
// Enter password
await page.locator('#password').fill("TestLeaf@2025");
// Click Login
await page.locator('#Login').click();
// Click App Launcher icon
await page.locator('//button[@title="App Launcher"]').click();
// Click View All
await page.locator('//button[text()="View All"]').click();
await page.waitForTimeout(5000);
// Enter Accounts in App Launcher search box
await page.locator('(//input[@type="search"])[2]').fill("Accounts");
// Click Accounts
await page.locator('//mark[text()="Accounts"]').click();
// Click New
await page.locator('//a[@title="New"]').click();
// Enter Account Name
await page.locator('//input[@name="Name"]').fill("Mona");
// Select Warm from the Rating dropdown --field not available in applcation
// Select Prospect from the Type dropdown
await page.locator('//button[@aria-label="Type"]').click();
//selected Prospect
await page.locator('//span[text()="Prospect"]').click();
await page.waitForTimeout(5000);
// Select Banking from the Industry dropdown    
await page.locator('//button[@aria-label="Industry"]').click();
await page.locator('//button[@aria-label="Industry"]').click();
//selected Banking
await page.locator('//span[text()="Banking"]').click();
// Select Public from the Ownership dropdown -- field not available in the application
// Click Save
await page.locator('(//button[text()="Save"])[2]').click();
// Assert the Account created
const successmessage = await page.locator('//div[@data-key="success"]').textContent();
console.log(successmessage);
await expect(page.locator('//div[@data-key="success"]')).toContainText('Account "Mona" was created');
console.log("Account Assetion is passed");

// Upload files
const fileupload = page.locator('//span[text()="Upload Files"]');
await fileupload.setInputFiles('Utils/TestLeaf.jpeg');
await page.waitForTimeout(3000);
/* 
// create the listener
const fload=page.waitForEvent('filechooser') //creating the promise
await page.locator('//span[text()="Or drop files"]').click() //trigger the upload
const fileupload=await fload //resolving the promise
await fileupload.setFiles('Utils/TestLeaf.jpeg') //upload file from the mentioned path
*/
// Click Done
await page.locator('//span[text()="Done"]').click();
//assert the uplaoded file
const uploadmessage=await page.locator('//div[@data-key="success"]').textContent();
console.log(uploadmessage);
await expect(page.locator('//div[@data-key="success"]')).toContainText('1 file was added to the Account');
console.log("Upload file Assetion is passed");

})