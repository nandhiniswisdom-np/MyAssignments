import { LoginPage } from "./LoginPage";

export class WelcomePage extends LoginPage
{
    async ClickOnCRMSFA()
    {
        await this.page.locator('text=CRM/SFA').click()

    }
    async ClickonLogout()
    {
        await this.page.locator('.decorativeSubmit').click()

    }
}