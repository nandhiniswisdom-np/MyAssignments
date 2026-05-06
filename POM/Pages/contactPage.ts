import { HomePage } from "./homepage";

export class ContacPage extends HomePage
{
    async CilckOnCreateContactTab()
    {
        await this.page.locator('//a[text()="Create Contact"]').click();
    }
}