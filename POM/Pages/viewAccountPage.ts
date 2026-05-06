import { CreateAccountPage } from './createAccountPage';

export class ViewAccountPage extends CreateAccountPage {
    async VerifyAccount()
    {
        const AccountName=await this.page.locator('//span[text()="Kavi  (12245)"]').innerText();
        console.log(AccountName);
    }
}
