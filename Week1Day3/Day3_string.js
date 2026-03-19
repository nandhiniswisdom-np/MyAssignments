let reversed="";
//let sample="dad"
function reverseString(str) {   
    let reverstr=str.split("");
    //console.log(reverstr);
   
    for (let i=reverstr.length-1;i>=0;i--)
    {
       reversed=reversed+reverstr[i];
    }
    console.log(reversed);
}
reverseString("radar");

function isPalindrome(input)
{
    if (input===reversed)
    {
        console.log("The string is a palindrome");
    }
    else{
        console.log("The string is not a palindrome");
    }
}
isPalindrome("radar");








                                            