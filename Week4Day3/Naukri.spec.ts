import {test} from '@playwright/test'
test('Upload Files',async({page})=>{
//navigate to the url
await page.goto("https://www.naukri.com/registration/createAccount");
//click on experienced
await page.locator('//h2[contains(text(),"experienced")]').click();
//isnpect the fileupload location
const fileupload= page.locator('//input[@type="file"]');
//uplaod the file
await fileupload.setInputFiles('Utils/Odd-Even.pdf');
await page.waitForTimeout(2000);

})