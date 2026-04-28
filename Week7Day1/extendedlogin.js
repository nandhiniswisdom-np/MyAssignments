import { LoginPage } from "./loginpage.js";
let Lp = new LoginPage("www.facebook.com");
Lp.Login();
Lp.Logout();
console.log(Lp.URL);
console.log(Lp.title);
