import {test, expect} from '@playwright/test'

test("Activity", async({page})=>    {
//navigate to URL
await page.goto("https://leafground.com/input.xhtml");
//Part 2: Validate a Disabled Textbox
await expect(page.getByPlaceholder("Disabled")).toBeDisabled();
console.log("Disabled assertion is passed");
//Part 3: Validate an Enabled Textbox
await expect(page.getByPlaceholder("Babu Manickam")).toBeEditable();
console.log("Enabled assertion is passed");
await page.getByPlaceholder("Babu Manickam").fill("Nandhini");
//Part 4: Soft Assertion Practice
await expect.soft(page.getByPlaceholder("Babu Manickam")).toBeDisabled();
console.log("Soft assertion is passed");
//Part 5: Fill Data
await page.locator("//input[@value='Can you clear me, please?']").fill("");
await page.locator("//input[@value='Can you clear me, please?']").fill("Playwright");
console.log("Data is filled");




}
)