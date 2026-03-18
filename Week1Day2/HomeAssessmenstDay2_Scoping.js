//global variable
let genderType = "Female";
//function declaration
function printGender()
{
    //function-scoped variable using let
    let color = "brown";
    //outside the if block
    console.log("Outside the if block",color);
    //if condition to check the gender type starts with "F"
    if(genderType.startsWith("Female"))
    {
        //inside the if block declare a variable var for age
    var age=30;
    //block scoped
    let color="pink";
    //print the color inside the block
    console.log("Print the color inside the block",color);
    }
    //print age ourside the if block but inside the function block
    console.log("Outside the if-block but inside the function",age);
}
//call the function
printGender();
//print global variable
console.log("print the value of genderType",genderType);
//change the global variable
genderType="Male";
console.log("print the updated value of genderType",genderType);
/*
Output:
Print the color inside the block pink
Outside the if-block but inside the function 30
print the value of genderType Female
print the updated value of genderType Male
*/