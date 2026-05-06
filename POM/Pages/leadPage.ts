import { HomePage } from "./homePage";

export class LeadPage extends HomePage{

async ClickoncreateLeadTab(){

await this.page.locator('//a[text()="Create Lead"]').click()

}

}