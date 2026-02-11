// Problem with var: Function-scoped, can be redeclared, confusing in loops.

// ES6 Solution:
// let: block-scoped, can be updated
// const: block-scoped, cannot be updated/reassigned

let a = 10;
a = 20; // works

const b = 30;
// b = 40 //Error

