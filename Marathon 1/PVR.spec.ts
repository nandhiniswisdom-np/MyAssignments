import { test,expect } from '@playwright/test'

test("PVR Testcase", async ({ page }) => {
    await page.goto("https://www.pvrcinemas.com/");
    await page.waitForTimeout(3000);
    await page.getByPlaceholder("Search for city").fill("chennai");
    await page.getByRole('heading', { name: 'Chennai' }).click();
    //Click on the Cinema option.
    await page.locator('//span[text()="Cinema"]').click();
    //Click on Select Cinema dropdown.//Select any available cinema from the list.
    await page.locator('//span[text()="Select Cinema"]').click();
    await page.locator('//span[text()="INOX National,Virugambakkam Chennai"]').click();
    //Select any available date (Today/Tomorrow/Upcoming).
    //await page.locator('//span[text()="Select Date"]').click();
    await page.locator('//span[contains(text(),"Today")]').click();
    //Select any available movie from the movie list.
    //await page.locator('//span[text()="Select Movie"]').click();
    await page.locator('//span[text()="BIKER"]').last().click();
    //Select any available show time
    //await page.locator('//span[text()="Select Timing"]').click();
    await page.locator('//span[text()="02:40 PM"]').click();
    //Click on the Submit button.
    await page.locator('//button[@type="submit"]').click();
    //Accept the consent/cookie popup if displayed.
    //Accept any additional confirmation popup if displayed. 
    await page.locator('//button[text()="Accept"]').click();
    //Select any available seat from the seating layout.
    await page.locator('//span[@id="SL.SILVER|J:20"]').click();
    //verify the movie name
    let moviename = await page.locator('//div[@class="summary-movies-content"]').textContent();
    expect(moviename).toContain("BIKER");
    console.log(moviename);
    console.log("Expected Movie name is displayed");
    //Verify the selected seat information is displayed.
    //await expect(page.locator('//div[@class="seat-number"]/p')).tobeVisible();
    let Seatinfo = "J20";
    let expectseatinfo = await page.locator('//div[@class="seat-number"]/p').textContent();
    expect(expectseatinfo).toContain(Seatinfo);
    console.log(expectseatinfo);
    console.log("Expected Seat number is displayed");
    //Verify the total ticket amount is displayed.
    //await expect(page.locator('//h6[text()="Grand Total"]')).toContainText("218.02");
    //Verify the page title is displayed correctly.
    const title = await page.title();
    await expect(page).toHaveTitle(title);
    console.log(title);
    console.log("Expected Page title is displayed");
    //Click on the Proceed button
    await page.locator('//button[text()="Proceed"]').click();
    //verifying the grand total
    let Grandtotal="218.02";
    let expectgrandtotal = await page.locator('//span[text()="218.02"]').textContent();
expect(expectgrandtotal).toContain(Grandtotal);
console.log(expectgrandtotal);
console.log("Expected Grand total is displayed");







})