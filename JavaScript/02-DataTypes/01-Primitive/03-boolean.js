// Boolean is a data type that stores only two values 
// true, false 

let isLoggedIn = true;
let isAdmin = false;

// Why Boolean is Important
// Boolean is used for:

// Conditions
// Decision making
// Loops
// Comparisons
// Logic building

// Boolean in Conditions

let age = 18;

if (age >= 18) {
    console.log("you can vote");
}

// Boolean from Comparisons
// Comparison operators always return Boolean.

// Equal
// console.log(5 == 5) //true
// console.log(5 == '5') //true
// console.log(5 == 3) //false

// Strict Equal (Checks value + type)
// console.log(5 === '5') //false Checks value + type

// Not Equal 
// console.log(5 != 3)

// Greater / less
// console.log(10 > 5); //true
// console.log(10 < 5); //false

// Logical Operators (Core Boolean Usage) 
// AND (&&) Both must be true 
console.log(true && true) //true
console.log(true && false) //false
console.log(false && false) //false

// OR (||) At least one true.
console.log(true || false) //true

// NOT(!) Reverse value
console.log(!true) //false
console.log(!false) //true


// Truthy & Falsy Values 
// falsy value (only few) 
// false
// 0
// ""
// null
// undefined 
// NaN

// Everything Else is Truthy
// "Hello"
// 1
// []
// {}
// "0"
// " "