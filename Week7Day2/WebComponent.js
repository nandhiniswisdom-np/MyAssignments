export class WebComponent {
    selector;
    constructor(selector) {
        this.selector = selector;
    }
    click() {
        console.log(`Click action performed on element with selector ${this.selector}`);
    }
    focus() {
        console.log(`Focus action performed on element with selector: ${this.selector}`);
    }
}
