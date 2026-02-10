
// What is const?

// const means constant
// Value cannot be reassigned
// Also block scoped

const pi = 3.14;
// pi = 3 error // Error

// Very Important Confusion About` const

// const prevents reassignment
// BUT allows modification inside objects / arrays`

const User = {
    name: 'Sachin'
}
User.name = 'JavaScript';
console.log(User.name);

// User = {} // Error this is not allowed 

// Array Example 
const arr = [1, 2, 3];

arr.push(10); // Allowed 
arr = [3, 4, 5] //Not Allowed

// var : allow redeclaration, allow reassign, function scope, not initialize,
// let : cannot be redeclared, Reassign value, Block scope, not initialize
// Const :cannot be redeclared, no Reassign, Block scope, must initialize, allow modification inside object/array

// let a; // allow
// const b // error

