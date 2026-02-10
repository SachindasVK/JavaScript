// Symbol is a primitive data type used to create unique identifiers
// Why Symbol Exists?
// Sometimes objects have properties with the same name which can cause conflicts.
// Symbol solves this by creating unique keys.

let id = Symbol();
// Symbol with Description
// let id = Symbol("userId");
// Description is just for debugging
// It does NOT affect uniqueness

// Symbols Are Always Unique 

let a = Symbol("id");
let b = Symbol("id");
console.log(a === b) //false (Even if description is same, symbols are unique)

// What is Symbol? Unique primitive identifier.

// Why Symbol used? Avoid property name conflicts.