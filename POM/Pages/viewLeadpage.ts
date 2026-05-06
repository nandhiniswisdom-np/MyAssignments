import { CreateLeadPage } from "./createLeadPage";


export class ViewLeadPage extends CreateLeadPage{

async verifyLead(){


 let Fname= await this.page.locator('#viewLead_firstName_sp').innerText()
 console.log(Fname)

    }

}