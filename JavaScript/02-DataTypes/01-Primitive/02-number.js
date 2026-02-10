let a = 10;      // integer
let b = 3.14;    // decimal
let c = -5;      // negative number

// JavaScript Has Only ONE Number Type

// Special Numeric Values
console.log(1 / 0); //Infinity
console.log(-1 / 0); // -Infinity

// NaN (Not a Number)
// Occurs when calculation fails.
console.log("hello" * 5);


// Checking Numbers
console.log(isNaN('Hello')); //true
console.log(isNaN(10)); //false

// Number.isInteger()
console.log(Number.isInteger(10)) //true
console.log(Number.isInteger(10.4))//false

// creating numbers 
// Direct methord 
let num = 100;

// number Contructor 
let numbr = Number("124") //Convert String : Number
console.log(numbr);

// Number() 
console.log(Number('123'));

// parseInt()
console.log(parseInt('123px'))

// parseFloat()
console.log(parseFloat('123.334px'));


// convert Number to String 
let nmbr = 50;
console.log(nmbr.toString())

// Number properties 
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)

// Important Number Methods
// toFixed() (controls decimal places)
let n = 10.203
console.log(n.toFixed(2))

// toPrecision()
// Controls total digits.
let n1 = 10.456;
console.log(n1.toPrecision(3))


// Basic Operators
// +   addition
// -   subtraction
// *   multiplication
// /   division
// %   modulus
// **  power

console.log(5 ** 2);



// Math.Object() JavaScript has built-in math utilities.

// Math.round();
console.log(Math.round(2.4)) //2
console.log(Math.round(2.5)) //3

// Math.floor();
console.log(Math.floor(3.9)) //3 

// Math.ceil();
console.log(Math.ceil(3.1)) //4

// Math.random() Generates random number (0 to 1)
console.log(Math.random())

// Random Number Between Range (Generates 0 to 9)
console.log(Math.floor(Math.random() * 10))


// Real World Examples
// OTP Generate 
console.log(Math.floor(1000 + Math.random() * 9000));

// Difference between parseInt & Number?

// parseInt ignores characters
// Number requires pure number

// Example
// parseInt("100px") // 100
// Number("100px")   // NaN
