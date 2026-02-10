// Logical operators are used to combine or manipulate conditions.
// They always return: true OR false

// 1. Logical AND ( && )
// Returns true only if both conditions are true
console.log(true && true);   // true
console.log(true && false);  // false
// Both conditions must be true
// AND returns first FALSE value
console.log(0 && 5); // 0
console.log(10 && 20); // 20



// 2. Logical OR ( || )
// Returns true if at least one condition is true
console.log(true || false); // true
console.log(false || false); // false
// Only one condition needed
// OR returns first TRUE value
console.log(0 || 5); // 5
console.log("Hello" || "World"); // Hello



// 3. Logical NOT ( ! )
// Reverses boolean value
console.log(!true);  // false
console.log(!false); // true
