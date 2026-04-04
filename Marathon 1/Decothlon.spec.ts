import { test, expect } from '@playwright/test';
test("Decothlon search", async ({ page }) => {
    //launching Decathlon URL
    await page.goto("https://www.decathlon.in/");
    //verify home page
    await expect(page).toHaveURL("https://www.decathlon.in/");
    console.log("Home page is visible")
    await page.waitForTimeout(5000);
    //verifying search icon is enabled or not
    await expect(page.locator('(//span[text()="Search for  "])[1]')).toBeEnabled();
    console.log("Search icon is Enabled");
    //clicking on search icon
    //searching for shoes in search box and pressing enter
    await page.locator('(//span[text()="Search for  "])[1]').click();
    await page.getByPlaceholder('Search For 60+ Sports and 6000+ Products').fill("shoes");
    //await page.waitForTimeout(5000);
    await page.keyboard.press("Enter");
    /*verifying title
    const Title = await page.title();
    await expect(page).toHaveTitle(Title);
    console.log(Title);
    console.log("Title Assertion is passed");
    */
    //sorting running
    await page.locator('//span[contains(text(),"Running")]').click();
    //sorting Men category
    await page.locator('//span[contains(text(),"Men")]').click();
    //searching for Uk10.5 shoe size and clicking on it
    await page.locator('//span[contains(text(),"Uk 10.5 - eu")]').click();
    //sorting price from high to low
    await page.locator('//span[text()="Most Relevant"]').click();
    await page.locator('//a[text()="Price: High to Low"]').click();
    //clicking on the second shoe displayed in the list
    await page.locator('(//img[@class="w-full swiper-lazy mix-blend-multiply"])[1]').click();
    //selecting the shoe size and adding to cart
    await page.locator('//div[contains(text(),"UK 10.5")]').click();
    //adding to cart
    await page.locator('//span[text()="ADD TO CART"]').click();
    await expect(page.locator('//h3[text()="Product added to cart"]')).toBeVisible();
    console.log("Product added to cart");
    //clciking on cart and verifying the total amount
    await page.locator('//p[text()="Cart"]').click();
    let Totalamount = "₹2,499";
    let expectedtotalamount = await page.locator('//p[text()="₹2,499"]').textContent();
    expect(expectedtotalamount).toBe(Totalamount);
    console.log(expectedtotalamount);
    console.log("Total amount assertion is passed");







})