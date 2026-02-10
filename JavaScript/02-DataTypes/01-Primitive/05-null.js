// null means: Intentional empty value
// This variable should have no value right now

let user = null;
console.log(user)

// We use null when:
// Value exists but currently empty
// Value will come later
// Reset value intentionally

let selectUser = null;
selectUser = 'sachin';

// Type of null 
console.log(typeof null); // object (famous js bug)
// This is a historical JavaScript bug



// null in Comparisons

// Loose Equality
console.log(null == undefined) //true
// strict Equality
console.log(null === undefined) //false
