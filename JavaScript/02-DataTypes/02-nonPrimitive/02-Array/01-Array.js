// Array is a special object used to store multiple values in a single variable.

let numbers = [1, 2, 3, 4, 5, 6];

// numbers = array
// Each value = element
// Index starts from 0

// Arrays help when you want to store: List of numbers, List of users, List of products, API data, Collections



// how to create array :

// Array Literal
let arr = [1, 2, 3];

// Array constructor
let Arr = new Array(1, 2, 3);

// Empty Array
let emptyArr = [];
emptyArr[0] = 10;



// Access Array Elements
let fruits = ["apple", "banana", "mango"];
console.log(fruits[0]);


// Modify Array Elements
fruits[1] = 'orange';
console.log(fruits[1])


// Array Length Property
console.log(fruits.length);


// loopin Arrays 
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// for of 
for (let fruit of fruits) {
    console.log(fruit);
}


// Destructuring 
let [a, b] = [20, 30];
console.log(a, b);


// Array Reference Behavior
// Arrays are objects: stored by reference.

let x = [1, 2];
let y = x;
y.push(10);
console.log(y)
console.log(x)


