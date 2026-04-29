import { Browser } from "./P1.js";
class Chrome extends Browser {
    launchBrowser() {
        console.log("Chrome browser is launched");
    }
}
let c1 = new Chrome();
c1.browserType();
c1.browserVersion();
c1.launchBrowser();
