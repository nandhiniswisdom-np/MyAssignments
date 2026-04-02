"use strict";
function factorial(n) {
    //negative number validation
    if (n < 0) {
        throw new Error("Input should be non-negative integers");
    }
    //Initialize a result variable 
    let result = 1;
    // multiply it by each integer from 2 up to `n`.
    for (let i = 2; i <= n; i++) {
        result = result * i;
    }
    return result;
}
console.log(factorial(6)); // Output: 720
