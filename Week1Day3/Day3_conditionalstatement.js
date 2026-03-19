//if-else program
function launchbrowser(browsername)
{
    //var browsername="webkit"
    if (browsername=="chrome")
    {
        console.log("Launching Chrome");
    }
    else
    {
        console.log("Launching Other Browser", browsername);
    }
}
launchbrowser("chrome");
launchbrowser("firefox");
//launchbrowser();

//switch program
function runTests(testType)
{

switch(testType)
{
case 1:
    console.log("Running Smoke Tests")
    break;
case 2:
    console.log("Running Sanity Tests") 
    break;
case 3:
    console.log("Running Regression Tesets")        
    break;
default:
    console.log("Running Default Smoke Test")   
}
}
runTests(2);
runTests();
