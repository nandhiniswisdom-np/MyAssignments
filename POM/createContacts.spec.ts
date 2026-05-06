import {test} from '@playwright/test'
import { ViewContactPage } from './Pages/viewContactPage'
test("Create new Contact via POM", async({page})=>
{
    let vp=new ViewContactPage(page)
    await vp.LoadURL("https://leaftaps.com/opentaps/control/main")
    await vp.EnterCredentials("democsr2","crmsfa")
    await vp.ClickOnLogin()
    await vp.ClickOnCRMSFA()
    await vp.ClickOnContacts()
    await vp.CilckOnCreateContactTab()
    await vp.EnterMandatoryDetails()
    await vp.ClickOnCreateContactButton()
    await vp.VerifyContact()

})