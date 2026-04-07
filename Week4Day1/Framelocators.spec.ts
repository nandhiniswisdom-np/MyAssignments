import { test } from "@playwright/test"


test('Frame Locators', async ({ page }) => {
    //launching url
    await page.goto('https://www.leafground.com/frame.xhtml');
    //framelocators().locators().click();
    //single frame
    await page.frameLocator('//iframe[@src="default.xhtml"]').locator('#Click').click();
    console.log('Single frame passed');
    //nested frame - outer frame/inner frame/locator
    await page.frameLocator('//iframe[@src="page.xhtml"]').frameLocator('#frame2').locator('#Click').click();
    console.log('Nested Frame passed');


})