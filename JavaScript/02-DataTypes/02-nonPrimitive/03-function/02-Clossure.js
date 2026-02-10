// Closures 
// A closure is when a function remembers variables from its outer scope
// even after the outer function finishes execution.

function sayWarmth() {
    let name = "Sachin";
    function inner() {
        console.log("Im", name);
    }
    inner()
}
sayWarmth()

function outer() {
    let count = 0;
    return function inner() {
        console.log(count);
        count++
    }
}
let count = outer();
count()
count()
count()
// Closures used in:Data hiding, Private variables, Function factories, State preservation

// function factory 
function multiply(x) {
    return function (y) {
        return x * y;
    }
}
let double = multiply(5);
console.log(double(2))
let trible = multiply(5);
console.log(trible(3));
