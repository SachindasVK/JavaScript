// A function is a block of reusable code that performs a task. 

function greet() {
    console.log("hello");
}
greet() //calling function

// Functions help to:

// Avoid repeating code
// Make code reusable
// Make program organized
// Break large problems into smaller parts



// Parameters vs Arguments

// Parameters
// Variables inside function definition.
// function add(a, b)

// Arguments Actual values passed.
// add(10, 20)

// Return Keyword: return sends value back.

function square(num) {
    return num * num;
}
let result = square(5);
console.log(result);



// Function Types in JavaScript

// 1 Function Declaration
function greet() {
    console.log("Hello");
}
// Hoisted, can call before definition


// 2 Function Expression 
let sayHello = function () {
    console.log("Hello function")
}
// Not hoisted same way


// 3 Arrow Function (Modern JS)
let greeting = () => {
    console.log("Hello");
}
// Short Arrow Function
let add = (a, b) => a + b;
console.log(add(10, 20));


// 4 Anonymous Function: Function without name.
// setTimeout(function(){
//     console.log("Hello")
// },3000)


// 5 Immediately Invoked Function (IIFE)
// It means:
// A function that runs immediately after it is created
(function () {
    console.log("Hello IIFE")
})()

// normal function : Needs manual calling
// IIFE : Automatically runs,

// Why IIFE Is Used?
// 1. Avoid Global Scope Pollution
// 2. Create Private Variables

// Before let and const, JavaScript had scope problems.
// Without IIFE

// var name = "Sachin";

// console.log(name);


// Global variable (dangerous in large apps)

// With IIFE
(function () {
  var name = "Sachin";
  console.log(name);
})();


// Variable stays inside function
// No global pollution



// function Hoisting 
sayHi()
function sayHi() {
    console.log("Hi")
}

// sentGreet(); // doesnt work
let sentGreet = function () {
    console.log('Hello');
}

// function Scope  
function test() {
    let num = 20; // num cannot be accessed outside.
}


// this.keyword in functions 
// Depends how function is called

// Object method 
let obj = {
    name: 'Sachin',
    greet() {
        console.log(this.name);
    }
}
obj.greet()

// Arrow function 
let obj2 = {
    name: 'sachin',
    greet: () => {
        console.log(this.name);
    }
}
obj2.greet()// undefined (Arrow function dont have their own this)



// Default parameters 
function sayHey(name = "Guest") {
    console.log('Hey', name);
}
sayHey();


// Rest Parameters Accept multiple values.
function Sum(...nums) {
    return nums.reduce((a, b) => a + b);
}
console.log(Sum(1,2,3,4));


// Spread Operator with Functions
let nums = [1,2,3];
console.log(...nums)


// function Borrowing 
// firstClass function 
