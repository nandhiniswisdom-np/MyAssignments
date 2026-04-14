import { test,expect} from '@playwright/test'
test.use({
    storageState:'data/state.json'
})
test('Verifying LT Home page', async ({ page }) => {

    await page.goto("https://leaftaps.com/crmsfa/control/main?externalLoginKey=EL611434189607");
    //Click Leads
    await page.locator('//a[text()="Leads"]').click();
})

//invalid login
test.fail('LT invalid login validation', async ({page}) => {
await page.goto('https://leaftaps.com/opentaps/control/main')
await page.locator('#username').fill('demosalesmanager')
await page.locator('#password').fill('crmsfa')
await page.locator('.decorativeSubmit').click()
await page.locator('//a[contains(text(),"CRM")]').click();
})

//incomplete flow
test.fixme('LT Incomlete flow validation', async ({page}) => {
await page.goto('https://leaftaps.com/opentaps/control/main')

    
})

//skip test 
test.skip('LT skip validation', async({page})=>{

await page.goto("https://leaftaps.com/opentaps/control/main")
  
})
