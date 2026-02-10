// A string is a sequence of characters. 
// Strings store:

// Text
// Numbers as text
// Symbols

// 3 - Ways to create string 
// Double quotes 
let name = "Sachin";

// Single quotes
let city = 'Mumbai';

// Backticks (template literals)
let msg = `Hello JavaScript`;

// Template literals 
// Multiline strings
// Variable interpolation
// Expressions

let age = 23;
console.log(`my name is ${name} and iam ${age} years old`);




// string property 
let text = "javaScript";
console.log(text.length);

// strings are immutable (You cannot change individual characters)
let language = 'JavaScript';
language[0] = 's' // wont change, must create a new string.
console.log(language);




// string methords 
// toUpperCase()
console.log("hello".toUpperCase())

// toLowerCase() 
console.log("HELLO".toLocaleLowerCase())

// trim() remove spaces
console.log("  js   ".trim());

// includes (check if text exists)
console.log("javascript".includes('j'))// true / false

// startWith() 
console.log("JavaScript".startsWith('Java'))

// endsWith()
console.log("JavaScript".endsWith('Script'))


// Extracting String 
// slice()
let str = 'JavaScript';
console.log(str.slice(0, 4))

// substring() similar to slice
console.log(str.substring(0, 4))


// Replacing text 
let user = "Hello World";
console.log(user.replace('World', 'JavaScript'))

// Splitting Strings 
let data = "a,b,c";
console.log(data.split(',')) // convert String to Array

// Joining String 
// concate()
let a = 'Hello';
let b = 'World';
console.log(a.concat(" ", b))

// modern way 
console.log(`${a} ${b}`)


// Search in Strings 
// indexOf()
console.log('javaScript'.indexOf('Script'));

// lastIndexOf() 
console.log('banana'.lastIndexOf('a'))

// Repeat String 
console.log('Hi '.repeat(4));

// converting other types to string 
// String()
console.log(String(1234))
// toString()
console.log((123).toString())

// Strings cannot be changed (immutable)
// Use methods to create new strings