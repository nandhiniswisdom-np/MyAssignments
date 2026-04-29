import { WebComponent } from "./Webcomponent.js";
export class TextInput extends WebComponent {
    value;
    constructor(selector) {
        super(selector);
        this.value = "";
    }
    enterText(text) {
        this.value = text;
        console.log(`Entering text: ${text} into the TextInput with the selector: ${this.selector}`);
    }
}
