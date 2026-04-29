import { WebComponent } from "./Webcomponent.js";
export class Button extends WebComponent {
    constructor(selector) {
        super(selector);
    }
    //over ride click method of WebComponent class
    click() {
        super.click(); // calling the click method of WebComponent class
        console.log("Button is clicked");
    }
}
