import { Button } from "./Button.js";
import { TextInput } from "./Textinput.js";
function testComponents() {
    // Create instances
    const loginButton = new Button("#loginBtn");
    const usernameInput = new TextInput("#username");

    // Perform actions
    loginButton.click();
    loginButton.focus();
    usernameInput.click();
    usernameInput.focus();
    usernameInput.enterText("nandhini");

}

// Run test
testComponents();