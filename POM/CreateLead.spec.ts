import{test} from '@playwright/test'
import { ViewLeadPage } from './Pages/viewleadpage'

test("Create new Lead using POM", async({page})=>
{
    let vp=new ViewLeadPage(page)
    await vp.LoadURL("https://leaftaps.com/opentaps/control/main")
    await vp.EnterCredentials("democsr2","crmsfa")
    await vp.ClickOnLogin()
    //await vp.CloseBrowser()
    await vp.ClickOnCRMSFA()
    await vp.ClickOnLeads()
    await vp.ClickoncreateLeadTab()
    await vp.EnterMandatorydata()
    await vp.ClickonCreateLeadButton()
    await vp.verifyLead()
})