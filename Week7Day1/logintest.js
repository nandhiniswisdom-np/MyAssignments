"use strict";
class LoginTest {
    browserName = "Chrome";
    password = "admin123";
    userName = "tester";
    openApplication() {
        console.log(`The application is opened with ${this.browserName}: ${this.password}:${this.userName}`);
    }
    login() {
        this.password;
        this.userName;
    }
    //get- method to read the value
    get readData() {
        return this.password;
    }
    //set-method to update the valaue
    set writeData(pwd) {
        this.password = pwd;
    }
}
let login = new LoginTest();
login.openApplication();
login.login();
//console.log(login.openApplication())
//console.log(login.login())
console.log(login.readData);
login.writeData = "admin987";
console.log(login.readData);
