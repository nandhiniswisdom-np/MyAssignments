const browserVersion="chrome";
function getBrowserVersion()
{
    if (browserVersion=="chrome")
    {
        let browserversion = "chrome 146";
        console.log("Browserversion is ", browserversion) // here it will print the value of browserversion because it is declared with let and it is block scoped
    }
    console.log("Browserversion is ", browserVersion) // here it will print the value of 
    // browserVersion because it is declared with var and it is function scoped
}
getBrowserVersion();
