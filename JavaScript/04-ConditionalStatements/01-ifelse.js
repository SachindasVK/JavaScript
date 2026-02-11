// if statement 

// if (condition)  {
// code runs if condition is true
// }

let age = 18;

if (age >= 18) {
    console.log("You can vote")
}

// if...else Statement

// if (condition) {
   // if true
// } else {
   // if false
// }

age = 16
if (age >= 18) {
    console.log("You can vote");
} else {
    console.log("You cannot vote")
}


//  if...else if...else

// if (condition1) {

// } else if (condition2) {

// } else {

// }

let marks = 75;

if (marks>=90) {
    console.log("A Grade");
} else if (marks >= 70) {
    console.log("B Grade");
} else {
    console.log("C Grade")
}

// Nested if
// if inside another if

age = 20;
let hasLicense = true;
if (age >= 18) {
    if (hasLicense) {
        console.log("You can drive");
    } else {
        console.log("You cannot drive");
    }
}


