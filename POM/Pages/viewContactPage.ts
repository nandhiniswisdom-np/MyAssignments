import { CreateContactPage } from './createContactPage';

export class ViewContactPage extends CreateContactPage 
{
    async VerifyContact()
    {
const FName = await this.page.locator('#viewContact_firstName_sp').innerText();
console.log(FName);
    }
}