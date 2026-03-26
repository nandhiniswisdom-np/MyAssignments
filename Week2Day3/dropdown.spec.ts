import {test} from '@playwright/test'
test('Handling dropdowns in leadtaps', async({page})=>
{
    //launching URL
 await page.goto("http://leaftaps.com/opentaps/control/main");
 //Entering username
 await page.locator('//input[@id="username"]').fill("Demosalesmanager");
 //entering password
 await page.locator('//input[@id="password"]').fill("crmsfa");
 //clcicking on login button
 await page.locator('//input[@class="decorativeSubmit"]').click();
 //await page.click('//input[@class="decorativeSubmit"]');
 //clicking on CRM/SFA button
 await page.locator('//a[contains(text(),"CRM")]').click();
 //clicking on Lead button
 await page.locator('//a[text()="Leads"]').click();
 //clicking on Create lead button
 await page.locator('//a[text()="Create Lead"]').click()
  //entering company name
 await page.locator('//input[@id="createLeadForm_companyName"]').fill("Demo class");
 //entering first name
 await page.locator('//input[@id="createLeadForm_firstName"]').first().fill("Nandhini");
 //entering last name
 await page.locator('//input[@id="createLeadForm_lastName"]').first().fill("Purushothaman");
 //selecting dropdown values in different methods
 /*await page.locator('//select[@id="createLeadForm_dataSourceId"]').selectOption({value:'LEAD_CONFERENCE'});
 await page.locator('//select[@id="createLeadForm_dataSourceId"]').selectOption({label:'Direct Mail'});
await page.locator('//select[@id="createLeadForm_dataSourceId"]').selectOption({index:4});
await page.locator('//select[@id="createLeadForm_dataSourceId"]').selectOption({index:4});
*/
//storing the dropdown values in one variable
const dropdown = page.locator('//select[@id="createLeadForm_dataSourceId"]/option');
//storing the dropdown count
const dropdowncount= await dropdown.count();
//printing the dropdown count
console.log(`No of values in the dropdown is ${dropdowncount}`);
//printing the first index value 
console.log(await dropdown.nth(0).innerText()); //dd value in the 1st index = null
//printing the 2nd index value
console.log(await dropdown.nth(1).innerText()); //dd value in the 2nd index = cold call
//hydrating all dropdown values via for loop
for (let index=0;index<dropdowncount;index++)
{
    //printing each dropdown value
    console.log(await dropdown.nth(index).innerText());
}
//storing all industry value in one variable
const industryvalues= page.locator('//select[@id="createLeadForm_industryEnumId"]/option');
//storing the industry count
const industrycount= await industryvalues.count();
//printing the industry values count
console.log(`No of values in the Industry field is ${industrycount}`);
//printing the 1st index value
console.log(await industryvalues.nth(0).innerText());//dd value in the 1st index = null
//printing the 2nd index value
console.log(await industryvalues.nth(1).innerText());//dd value in the 2nd index = Aerospace
//hydrating all dropdown values via for loop
for(let index1=0;index1<industrycount;index1++)
{
    //printing each industry values
    console.log(await industryvalues.nth(index1).innerText());
}


})