import { test,expect} from '@playwright/test'
test('Service Now Test case', async ({ page }) => {
//Launch the ServiceNow application using the given URL.
await page.goto("https://dev280319.service-now.com/");
//Enter User name as admin.
await page.locator('#user_name').fill("admin");
//Enter Password with valid credentials.
await page.locator('#user_password').fill("YApVc0-vyN5-");
//Click on the Log in button.
await page.locator('//button[@type="submit"]').click();
//Wait for the ServiceNow home page to load successfully.
await page.waitForLoadState('domcontentloaded');
//Click on the All menu from the left navigation panel.
await page.getByText("All").click();
//Click on Service Catalog from the menu options.
await page.getByText("Service Catalog").click();
//Switch to the Service Catalog iframe.
const frame= page.frameLocator('iframe');
//const frame= page.frameLocator('iframe[name="gsft_main"]');
//Click on the Mobiles category.
await frame.getByAltText("Mobiles").click();
console.log("Clicked on Mobiles");
//Select Apple iPhone 13 Pro from the product list.
await frame.locator('//strong[text()="Apple iPhone 13 pro"]').click();
//Choose Yes for the Lost or Broken iPhone option.
await frame.locator('//label[text()="Yes"]').click();
//Enter 99 in the Original phone number field.
await frame.locator('//input[@id="IO:4afecf4e9747011021983d1e6253af34"]').fill('9988776655');
//Select Unlimited from the Monthly data allowance dropdown.
await frame.locator('//select[@class="form-control cat_item_option "]').selectOption({value:'unlimited'});
//Select Sierra Blue as the color option.
await frame.locator('//label[text()="Sierra Blue"]').click();
//Select 512 GB as the storage option.
await frame.locator('//label[text()="512 GB [add $300.00]"]').click();
//Click on the Order Now button.
await frame.locator('//button[text()="Order Now"]').click(); 
//Verify the confirmation message is displayed.
await expect(frame.locator('//span[text()="Thank you, your request has been submitted"]')).toBeVisible();
const OrderMessage = await frame.locator('//span[text()="Thank you, your request has been submitted"]').innerText();
console.log(OrderMessage);
//Capture a full-page screenshot of the order confirmation page
await page.screenshot({ path: 'data/OrderConfirmation.png', fullPage: true })
})