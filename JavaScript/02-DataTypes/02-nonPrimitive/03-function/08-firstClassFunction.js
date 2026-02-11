// What is a First-Class Function?

// Functions are first-class citizens.

// This means:
// Functions can be stored in variables
// Functions can be passed as arguments to other functions
// Functions can return another function
// Functions can be stored in arrays or objects
// Basically, functions are treated like any other value (number, string, object).


// 1 - Function Stored in a Variable
function greet(name) {
    console.log("Hello", name ? name : "World");
}
let sayHello = greet;
sayHello();


// 2 - Function as Argument (Callback)
function processUserInput(callback) {
    let name = "Sachin";
    callback(name);
}
processUserInput(greet);


// 3 - Function Returning Another Function
function sayGreet(name) {
    return function() {
        console.log("Hello", name);
    }
}
let say = sayGreet('Sunny');
say();