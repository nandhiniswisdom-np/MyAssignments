"use strict";
//Implement a function named `fibonacci`
function fibonacciNth(n) {
    if (n < 0) {
        throw new Error("Input must be non-negative");
    }
    //Initialize two variables to store the first two Fibonacci numbers
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let next = a + b;
        a = b;
        b = next;
    }
    //console.log(b);
    return b;
}
// Example
console.log(fibonacciNth(8)); // Output: 2
