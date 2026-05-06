import { WelcomePage } from "./welcomepage";

export class HomePage extends WelcomePage
{
    async ClickOnLeads()
    {
        await this.page.locator('//a[text()="Leads"]').click()

    }
    async ClickOnContacts()
    {
        await this.page.locator('//a[text()="Contacts"]').click()

    }
    async ClickOnAccounts()
    {
        await this.page.locator('//a[text()="Accounts"]').click()

    }
    
}