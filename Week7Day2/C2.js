import { Browser } from "./P1.js";
class Edge extends Browser {
    launchBrowser() {
        console.log("Edge Broswer is launched");
    }
}
let c2 = new Edge();
c2.browserType();
c2.browserVersion();
c2.launchBrowser();
