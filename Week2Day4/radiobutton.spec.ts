import { test, expect } from '@playwright/test';
import { ECDH } from 'node:crypto';

test('Radio Button Handling - Leafground', async ({ page }) => {

    // 1. Navigate to URL
    await page.goto('https://leafground.com/radio.xhtml');

    // 2. Identify and assert the default selected radio button
    const defaultSelection = await page.locator('(//h5[text()="Find the default select radio button"]/following::div[@class="ui-radiobutton-box ui-widget ui-corner-all ui-state-default ui-state-active"])[1]/preceding-sibling::div/input').isChecked();
    console.log("Default selected radio button is: " + defaultSelection);
    const Defaultselectedvalue = page.locator('(//h5[text()="Find the default select radio button"]/following::div[@class="ui-radiobutton-box ui-widget ui-corner-all ui-state-default ui-state-active"])[1]/preceding-sibling::div/input');
    if (await Defaultselectedvalue.isChecked()) {
        console.log("Default selected radio button value is: " + await page.locator('((//h5[text()="Find the default select radio button"]/following::div[@class="ui-radiobutton-box ui-widget ui-corner-all ui-state-default ui-state-active"])[1]/following::label)[1]').innerText());
    }
    const defaultSelection1 = await page.locator('(//h5[text()="Select the age group (only if not selected)"]/following::div[@class="ui-radiobutton-box ui-widget ui-corner-all ui-state-default ui-state-active"])[1]/preceding-sibling::div/input').isChecked();
    console.log("Default selected radio button is: " + defaultSelection1);
    const Defaultselectedvalue1 =page.locator('(//h5[text()="Select the age group (only if not selected)"]/following::div[@class="ui-radiobutton-box ui-widget ui-corner-all ui-state-default ui-state-active"])[1]/preceding-sibling::div/input');
    //await (Defaultselectedvalue1).textContent();
    console.log("Default selected radio button value is: " + await page.locator('((//h5[text()="Select the age group (only if not selected)"]/following::div[@class="ui-radiobutton-box ui-widget ui-corner-all ui-state-default ui-state-active"])[1]/following::label)[1]').textContent());

    //await expect(page.locator('(//label[text()="Safari"])[2]')).toBeChecked();
    //await expect(page.locator('//label[text()="21-40 Years"]')).toBeChecked();
    //Click your most favorite browser and assert that the browser is enabled.
    await page.locator('(//label[text()="Chrome"])[1]').click();
    const browserEnabled = await page.locator('(//label[text()="Chrome"])[1]').isEnabled();
    console.log("Browser is enabled: " + browserEnabled);
    //Click one of the cities. 
    await page.locator('//label[text()="Bengaluru"]').click();
    //Select the age group. Assert the default selected button. 
    //const defaultAge = page.locator('//input[@name="j_idt87:age" and @checked="checked"]');
    //await expect(defaultAge).toBeChecked();
    //console.log("Default selected age group is: " + await defaultAge.innerText());
    const newAge = page.locator('//label[text()="1-20 Years"]');
    await newAge.check();
    //await newAge.click();
    //await expect(newAge).toBeChecked();
    console.log("Newly selected age group is: " + await newAge.innerText());




}
)
