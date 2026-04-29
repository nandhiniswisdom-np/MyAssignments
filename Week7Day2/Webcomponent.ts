export class WebComponent
{
    selector: string

    constructor(selector: string)
    {
        this.selector=selector
    }
    click()
    {
        console.log(`Click action performed on element with selector ${this.selector}`)
    }
    focus()
    {
        console.log(`Focus action performed on element with selector: ${this.selector}`)
    }
}