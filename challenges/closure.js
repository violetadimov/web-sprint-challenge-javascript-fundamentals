// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
    console.log(external);
    const internal = "Hello! I'm inside myFunction!";

    function nestedFunction() {
        console.log(internal);
    };
    nestedFunction();
}
myFunction();

// Explanation: 
/* variable internal is a variable is located inside my function which is the enclosing function of nested function.
Therefore, nested function can access any variable in the outer function scope and its own as well.

/* Task 2: Counter */

/* Create a function called `summation` that accepts a 
parameter and uses a counter to return the summation of that number. 
For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */



function summation(sum) {
    let num1 = 0;
    let num2 = 0;
    let num3 = 0;
    let num4 = 0;
    for (var counter = 0; counter < sum; counter++) {
        num1 = 1;
        num2 = num1 + 1;
        num3 = num2 + 1;
        num4 = num3 + 1;
        return num1 + num2 + num3 + num4;
    }

}
console.log(summation(4));