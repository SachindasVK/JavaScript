// A loop is used to repeat code multiple times.

const event = require("event");

// for (initialization; condition; increment/decrement) {
//     // code to repeat
// }

// Instead of writing:

console.log("Hello");
console.log("Hello");
console.log("Hello");

// with loop
for (let i = 1; i <= 3; i++) {
    console.log("Hello");
}

// increment 
for (let i = 1; i <= 5; i++) {
    console.log(i)
}

// Decrement
for (let i = 5; i > 0; i--) {
    console.log(i)
}

// Event numbers 
for (let i = 0; i <= 10; i += 2) {
    console.log(i)
}

// sum of Numbers

let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum += i;
}
console.log("Sum =", sum);


// Loop Inside Loop (Nested Loop)
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 2; j++) {
        console.log(i, j)
    }
}


let fruits = ["Apple", "Mango", "Orange"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

// Important Loop Keywords
// break Stop Loop
for (let i = 1; i <= 5; i++) {
    if (i === 3) break;
    console.log(i)
}

// condinue (skip one round)
for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;
    console.log(i)
}

// print Even numbers 
for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) console.log(i)
}

// Write a program to count how many even and odd numbers exist between 1 and 100
let odd = even = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) even++
    else odd++
}
console.log(even);
console.log(odd)

// sum of digit 
let num = 456;
let sum2 = 0;
let arr = num.toString().split("")
for (let i = 0; i < arr.length; i++) {
    sum2 += Number(arr[i])
}
console.log('Sum', sum2)



// square 
// * * * * *
// * * * * *
// * * * * *
// * * * * *

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        process.stdout.write("* ");
    }
    process.stdout.write('\n');
}


// Right Triangle Pattern
// *
// * *
// * * *
// * * * *
// * * * * *
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write('* ');
    }
    process.stdout.write('\n');
}


// Reverse Triangle
// * * * * *
// * * * *
// * * *
// * *
// *
for (let i = 1; i <= 5; i++) {
    for (let j = 5; j >= 1; j--) {
        if (j >= i) {
            process.stdout.write("* ")
        }
    }
    process.stdout.write('\n')
}
