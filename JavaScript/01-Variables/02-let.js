
// LET is used to declare variables
// value can be changed later 
// Block scoped

let year = 2025;
year = 2026; // allowed 

// Block scope 
// let works inside the block 

{
    let Name = 'JS';
    console.log(Name);
}
// console.log(Name) //error

// Example with if
if (true) {
    let score = 90;
}
// console.log(score); // Reference Error

// Example with Loop
for (let j = 0; j < 3; j++) {
    console.log(j);
}
// console.log(j); // Error

// Hoisting with let in Blocks 
let a = 20;

{
    console.log(a)
    let a = 10;
}
// Block creates new scope
// TDZ happens