function numbertype(number)
{
    var number;
    if(number>0)
    {
        return "Positive";
 
   }
   else if (number<0)
   {
    return "Negative";
  }
  else 
    return "Zero";
}
numbertype();
console.log(numbertype(10)); //Positive
console.log(numbertype(-5)); //Negative
console.log(numbertype(0)); //Zero

