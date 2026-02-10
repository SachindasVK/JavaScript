// Higher Order Functions 
// Function that: Takes function as argument,or Returns another function

// Function Passed as Argument
function sayName(name) {
    return `Hello ${name}`;
}

function processUser(callback) {
    console.log(callback("Sachin"));
}

processUser(sayName);

// Function Returning Function
function greet(name) {
    return function () {
        console.log('Hello', name);
    }
}
let say = greet("Sachin");
say();

// build in : map, filter, reduce 
// Why Higher Order Functions Are Useful?

// Reusable code
// Cleaner code
// Flexible logic
// Functional programming
// Used heavily in React & Node.js
