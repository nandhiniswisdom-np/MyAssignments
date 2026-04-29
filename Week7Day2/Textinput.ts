import { WebComponent } from "./Webcomponent.js";
export class TextInput extends WebComponent {
    value: string;
    constructor(selector: string) {
        super(selector)
        this.value = "";
    }
    enterText(text: string) {
        this.value = text;
        console.log(`Entering text: ${text} into the TextInput with the selector: ${this.selector}`)
    }
}