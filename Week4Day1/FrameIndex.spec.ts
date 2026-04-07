import { test } from "@playwright/test"


test('Index based frames', async ({ page }) => {

    //navigating to URL
    await page.goto('https://www.leafground.com/frame.xhtml')

    const Allframes = page.frames()
    const Noofframes = Allframes.length //mP->0 ,f1->1,f2->2,f3->3,f4->4

    console.log(Noofframes);  //no of frames in a page.

    //switch to frame with index.
    const frame1 = Allframes[1]
    await frame1.locator('#Click').click()
    console.log("frame1 is clicked");

    //nested frame->using index we can directly we can switch to the nested frame
    const frame4 = Allframes[4]
    await frame4.locator('#Click').click()
    console.log("frame4 is clicked");



})