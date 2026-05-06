import { AccountPage } from './AccountsPage';

export class CreateAccountPage extends AccountPage
{
async EnterMandatoryDetails()
{
    await this.page.locator('#accountName').fill('Kavi');
}
async ClickOnCreatAccountButton()
{
    await this.page.locator('.smallSubmit').click();
}

}