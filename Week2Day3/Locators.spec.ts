//create Lead
import {test} from '@playwright/test'
test("Create Lead", async({page})=>
{
    //launching salesforce page
    await page.goto("https://login.salesforce.com/?locale=in");
    //entering username
    await page.locator('//input[@id="username"]').fill("dilipkumar.rajendran@testleaf.com");
    //entering password
    await page.locator('//input[@id="password"]').fill('TestLeaf@2025');
    //clicking on login button
    await page.locator('//input[@id="Login"]').click();
    await page.waitForTimeout(12000);
    //clicking on toggle menu
    await page.locator('//button[@class="slds-button slds-context-bar__button slds-icon-waffle_container slds-show"]').click();
    //clicking on View all button
    await page.locator('//button[text()="View All"]').click();
    //clicking on sales link
    await page.locator('//p[text()="Sales"]').click();
    //clicking on Leads tab
    await page.locator('//span[text()="Leads"]').first().click();
    //clicking on New button
    await page.locator('//div[@title="New"]').click();
    //selecting Salutation value from the dropdown
    await page.locator('//button[@name="salutation"]').click();
    await page.locator('[data-value="Mrs."]').click();
    //entering last name
    await page.locator('//input[@placeholder="Last Name"]').fill("Abirami");
    //entering cpmpany name
    await page.locator('//input[@name="Company"]').fill("Sample2");
    //clucking on save button
    await page.locator('//button[text()="Save"]').last().click();
    await page.waitForTimeout(5000);

    //navigating to details and verifying the lead details
    await page.locator('//a[@id="detailTab__item"]').click();

})

test("Edit Lead", async({page})=>
{
    await page.goto("http://leaftaps.com/opentaps/control/main");
 //Entering username
 await page.locator('//input[@id="username"]').fill("Demosalesmanager");
 //entering password
 await page.locator('//input[@id="password"]').fill("crmsfa");
 //clcicking on login button
 await page.locator('//input[@class="decorativeSubmit"]').click();
 //clicking on CRM/SFA button
 await page.locator('//a[contains(text(),"CRM")]').click();
 //clicking on Lead button
 await page.locator('//a[text()="Leads"]').click();
 //clicking on Create lead button
 await page.locator('//a[text()="Create Lead"]').click()
  //entering company name
 await page.locator('//input[@id="createLeadForm_companyName"]').fill("Demo session");
 //entering first name
 await page.locator('//input[@id="createLeadForm_firstName"]').first().fill("Madhu");
 //entering last name
 await page.locator('//input[@id="createLeadForm_lastName"]').first().fill("Mathi");
 //clicking on create lead button
 await page.locator('//input[@class="smallSubmit"]').click();
 await page.waitForTimeout(5000);
 //clicking on Edit button
 await page.locator('//a[contains(text(),"Edit")]').click();
 //clearing company name
 await page.locator('//input[@id="updateLeadForm_companyName"]').fill("");
 //updating company value
 await page.locator('//input[@id="updateLeadForm_companyName"]').fill("KFC");
 //clicking on update button
 await page.locator('//input[@value="Update"]').click();
})

test("Create Individuals", async({page})=>
{
    //launching salesforce page
    await page.goto("https://login.salesforce.com/?locale=in");
    //entering username
    await page.locator('//input[@id="username"]').fill("dilipkumar.rajendran@testleaf.com");
    //entering password
    await page.locator('//input[@id="password"]').fill('TestLeaf@2025');
    //clicking on login button
    await page.locator('//input[@id="Login"]').click();
    await page.waitForTimeout(5000);
     //clicking on toggle menu
    await page.locator('//button[@title="App Launcher"]').click();
    await page.waitForTimeout(10000);
    await page.locator('//button[contains(text(),"View All")]').click();
    await page.waitForTimeout(5000);
    await page.locator('//input[@placeholder="Search apps or items..."]').fill("individuals");
    await page.waitForTimeout(5000);
    //await page.locator('//span[@title="All Apps"]').click();
    //clicking on Individuals
    await page.locator('[data-label="Individuals"]').click();
    //clicking on Individuals dropdown arrow
    //await page.locator('//div[@class="slds-context-bar__label-action slds-p-left_none"]').nth(14).click();
    //selecting New individuals
    await page.locator('//div[@title="New"]').click();
    await page.waitForTimeout(5000);
    //entering last name
    await page.locator('//input[@placeholder="Last Name"]').fill("Meghna");
    //clicking on save button
    await page.locator('//span[text()="Save"]').click();
    await page.waitForTimeout(5000);
    //clicking on details tab
    await page.locator('//span[text()="Details"]').click();

})

test("Edit Individuals", async({page})=>
{
    
    //launching salesforce page
    await page.goto("https://login.salesforce.com/?locale=in");
    //entering username
    await page.locator('//input[@id="username"]').fill("dilipkumar.rajendran@testleaf.com");
    //entering password
    await page.locator('//input[@id="password"]').fill('TestLeaf@2025');
    //clicking on login button
    await page.locator('//input[@id="Login"]').click();
    await page.waitForTimeout(12000);
    //clicking on toggle menu
    await page.locator('//button[@title="App Launcher"]').click();
    //clicking on View all button
    await page.waitForTimeout(10000);
    await page.locator('//button[contains(text(),"View All")]').click();
    await page.waitForTimeout(5000);
    await page.locator('//input[@placeholder="Search apps or items..."]').fill("individuals");
    await page.waitForTimeout(5000);
    //await page.locator('//span[@title="All Apps"]').click();
    //clicking on Individuals
    await page.locator('[data-label="Individuals"]').click();
    //clicking on individuals tab
    //await page.locator('//span[text()="Individuals"]').click();
    //search last name
    await page.locator('//input[@name="Individual-search-input"]').fill("Meghna");
    await page.keyboard.press("Enter");
    //hitting on dropdown button
    await page.waitForTimeout(5000);
    await page.locator('//button[@class="slds-button slds-button_icon-border slds-button_icon-x-small"]').click();
    //clicking on edit button
    await page.locator('(//a[@class="highlightButton"])[1]').click();
    //selecting saluation as Mr
    await page.locator('//a[contains(text(),"None")]').first().click();
    await page.locator('//a[@title="Mr."]').click();
        //entering first name
    await page.locator('//input[@placeholder="First Name"]').fill("Raj");
    //clicking on save button
    await page.locator('//span[text()="Save"]').click();

    
}
)
