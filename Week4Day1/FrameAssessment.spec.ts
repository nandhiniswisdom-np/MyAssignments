import { test, chromium, expect } from '@playwright/test'

test('Frames Handlingwith Assertion', async ({ page }) => {
    //launch chrome in non-headless mode
    await chromium.launch({ headless: false });

    //launching url
    await page.goto("https://leafground.com/frame.xhtml");

    //Get the total count of frames present in the page 
    const Allframe = page.frames();
    const framecount = Allframe.length;
    console.log(`Total Number of Frames in this page is ${framecount}`);

    // Interact with the Click Me button inside frame 
    //framelocators().locators().click();
    const Frame1 = page.frameLocator('//iframe[@src="default.xhtml"]');
    const MainFrame = Frame1.locator('#Click');
    await MainFrame.click();


    // Assert the text changed after clicking the button 
    await expect(MainFrame).toHaveText("Hurray! You Clicked Me.");
    const InnerFrameText = await MainFrame.textContent();
    console.log(InnerFrameText);

    //Interact with the Click Me button present inside the nested frames 
    //nested frame - outer frame/inner frame/locator
    const nestedouter = page.frameLocator('//iframe[@src="page.xhtml"]');
    const nestedinner = nestedouter.frameLocator('#frame2');
    const MainFrame2 = nestedinner.locator('#Click');
    await MainFrame2.click();
    
    // Assert the text changed after clicking the button 
    await expect(MainFrame2).toHaveText("Hurray! You Clicked Me.");
    const NestedFrameText = await MainFrame2.textContent();
    console.log(NestedFrameText);







})