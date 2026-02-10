// Comparison operators are used to compare two values.
// They always return: true OR false

// 1. Equal To (==) → Loose Equality

// Checks only value
// Ignores datatype (does type conversion)
console.log(5 == '5');//String converted to number


// 2. Strict Equal (===) → Very Important
// Checks value AND datatype
console.log(5 === "5"); // false Number ≠ String

// 3. Not Equal (!=)
console.log(5 != 3); // true
// Checks values are different

// 4. Strict Not Equal (!==)
console.log(5 !== "5"); // true
// Checks datatype also

// 5. Greater Than (>)
console.log(10 > 5); // true

// 6. Less Than (<)
console.log(3 < 5); // true

// 7. Greater Than or Equal (>=)
console.log(5 >= 5); // true

// 8. Less Than or Equal (<=)
console.log(4 <= 5); // true


// Special JavaScript Behavior (Important)
// Type Conversion Happens in ==

console.log(true == 1); // true
console.log(false == 0); // true

// But Strict Equality Prevents This
console.log(true === 1); // false

// String Comparison
console.log("apple" < "banana"); // true
// Compared alphabetically

// Comparison With Null & Undefined 
console.log(null == undefined);  // true
console.log(null === undefined); // false

