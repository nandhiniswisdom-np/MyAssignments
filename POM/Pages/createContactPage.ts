import { ContacPage } from "./contactPage";

export class CreateContactPage extends ContacPage
{
    async EnterMandatoryDetails()
    {
await this.page.locator('#firstNameField').fill("Madhi");
await this.page.locator('#lastNameField').fill("Azhagan");
    }
    async ClickOnCreateContactButton()
    {
await this.page.locator('.smallSubmit').click();
    }
}