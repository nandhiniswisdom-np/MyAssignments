import { BasePage } from "./BasePage.js";
class LoginPage extends BasePage {
    Login() {
        console.log("Performing Submit action in the Base page");
    }
}
let login = new LoginPage();
login.findElement();
login.clickElement();
login.enterText();
login.Login();
