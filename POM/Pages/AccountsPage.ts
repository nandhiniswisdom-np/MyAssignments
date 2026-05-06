import { HomePage } from "./homePage";

export class AccountPage extends HomePage
{
    async ClickOnCreateAccountTab()
    {
        await this.page.locator('//a[text()="Create Account"]').click()
    }
}