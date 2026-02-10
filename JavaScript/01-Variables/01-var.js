// A variable is a container used to store data so you can use it later in your program.
// Think of it like a labeled box:
// The label = variable name

// 1. VAR (old way - avoid using) var is a keyword used to declare variables in JavaScript.
// var variableName = value;

var name = "Sachin";
var age = 25;
console.log(name, age);

//1. var can be redeclared
var city = 'Manjeri';
var city = "Delhi";
console.log(city);
// It overwrites the previous value.

// Why this is dangerous?
// Because accidentally redeclaring variables can cause bugs.

//2. var can be reassigned
var score = 10;
score = 100;
console.log(score);

// 3. var is function scoped
// var works inside functions, NOT inside blocks
function test() {
    var x = 10;
    console.log(x);
}
test()
// console.log(x) // error x exists only inside the function.

// Block Scope problem
if (true) {
    var y = 50;
}
console.log(y);

// 4.Hoisting in var (JavaScript moves variable declarations to the top of the scope)
console.log(a);
var a = 29;

// internally js does this 
var b;
console.log(b);
b = 29;

// 5. var allows use before declaration 
console.log(num)
var num = 100;

// 6. Global Scope With var 
// If declared outside function becomes global. 

var message = 'Hello';

function showMessage() {
    console.log(message);
}
showMessage();
console.log(message);

// 7. var attaches to window object (in browsers) 
var test = "Hey";
// console.log(window.test); //let and const DO NOT do this.

// Loop Problem with var (Famous Interview Question)
// for (var i = 0; i < 3; i++) {
//     setTimeout(() => {
//         console.log(i)
//     }, 1000)
// }
// Because var is function scoped, not block scoped.

// var inside loops leaks outside 
for (var i = 0; i < 5; i++) { }
console.log(i)

// Difference Between Declaration and Initialization 
// Declaration
var x;

// initialization
x = 10;

// Both together
var x = 10;

// Why var is Mostly Avoided Today?

// Because:
// No block scope
// Allows redeclaration
// Causes hoisting confusion
// Can create bugs in loops

// var had many problems 

// Function scope issues
// Hoisting confusion
// Accidental re-declaration
// Global pollution

// ES6 introduced: [let, const]


