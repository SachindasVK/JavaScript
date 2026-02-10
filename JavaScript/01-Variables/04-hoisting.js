// Hoisting
// JavaScript moves variable declarations to the top of their scope before code execution.
// This is called Hoisting: 
// Only declarations are hoisted,Not assignments

// Why Hoisting Exists

// JavaScript has two phases:

// 1 Memory Creation Phase:
// Variables stored in memory
// Functions stored fully

// 2 Execution Phase:
// Code runs line by line

// Hoisting with var:
console.log(a); // undefined
var a = 10;

// How js sees this code internally 
var a;
console.log(a);
a = 10;
// Memory Phase: a = undefined ;
// Execution Phase: console.log(a) undefined
// a = 10 

// Hoisting With Let 
console.log(user); //ReferenceError: Cannot access 'user' before initialization
let user = 'Sachin'; //let is hoisted but NOT initialized.
// Temporal Dead Zone (TDZ): Time between hoisting and initialization.

// Hoisting with Const:
console.log(pi); //ReferenceError: Cannot access 'pi' before initialization
const pi = 3.12; //Same TDZ behavior as let

// var:
// hoisted, gets undefined,
// access before declaration Allowed  

// let:
// hoisted, stays uninitialized
// initial value: TDZ
// access before declaration: Error

// const: 
// hoisted, stays uninitialized
// initial value: TDZ
// access before declaration: Error
