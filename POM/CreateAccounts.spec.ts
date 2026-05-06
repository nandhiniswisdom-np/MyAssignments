import {test} from '@playwright/test'
import { ViewAccountPage } from './Pages/viewAccountPage'

test("Create new Account using POM", async({page})=>
{
    let vp=new ViewAccountPage(page)
     await vp.LoadURL("https://leaftaps.com/opentaps/control/main")
    await vp.EnterCredentials("democsr2","crmsfa")
    await vp.ClickOnLogin()
    await vp.ClickOnCRMSFA()
    await vp.ClickOnAccounts()
    await vp.ClickOnCreateAccountTab()
    await vp.EnterMandatoryDetails()
    await vp.ClickOnCreatAccountButton()
    await vp.VerifyAccount()
})