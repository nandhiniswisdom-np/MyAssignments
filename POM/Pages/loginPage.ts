import {chromium,Page} from '@playwright/test'
export class LoginPage
{
    page:Page
    constructor(page:Page)
    {
this.page=page
    }
    async LoadURL(url:string)
    {
        await this.page.goto(url)

    }
    async EnterCredentials(username:string,password:string)
    {
        await this.page.locator('#username').fill(username)
        await this.page.locator('#password').fill(password)

    }
    async ClickOnLogin()
    {
        await this.page.locator('.decorativeSubmit').click()

    }
    async CloseBrowser()
    {

    }
}