//global variable declaration
let browser="chrome";
//create a function
function checkBrowserVersion(callbackFun)
{
    console.log("Checking browser version");
    //set timeout to simulate a delay in getting the browser version
    setTimeout(()=>
    {
        //invoke call back function and pass the browser version as an argument
        callbackFun(browser);
    },2000);
}
//callback function
function printBrowserVersion(version)
{
    console.log("The browser version is:" +version);
}
//call browserversion function and pass the callback function to it
checkBrowserVersion(printBrowserVersion);