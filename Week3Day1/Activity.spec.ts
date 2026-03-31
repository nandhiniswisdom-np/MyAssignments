import {test} from '@playwright/test'

test("Parabank", async({page})=>
{
 //launching UTL
 await page.goto("https://parabank.parasoft.com/parabank/index.htm");
    //clicking on forgot login info? using getByRole locator
    await page.getByRole('link', {name: 'Forgot login info?'}).click();
    //clicking on Parabank logo using getByAltText locator  
    await page.getByAltText('ParaBank').click();
    //clicking on locations using getByText locator
    await page.getByText('Locations').first().click();
    //clicking on search icon in the navigated page using getByrole getbyText
    await page.getByRole('button', {name: 'Search'}).click();
    await page.waitForTimeout(4000);
    //clicking on search textbox using getByPlaceholder and enter the location name as "chennai"
    await page.getByPlaceholder('Search').fill("chennai");


}
)