import { LeadPage } from "./leadPage";


export class CreateLeadPage extends LeadPage{


    async EnterMandatorydata(){

    await this.page.locator('#createLeadForm_companyName').fill("Qeagle")
    await this.page.locator('#createLeadForm_firstName').fill("Kavi")
    await this.page.locator('#createLeadForm_lastName').fill("Priya")

    }


  async ClickonCreateLeadButton(){

    await this.page.locator('.smallSubmit').click()
  }

}