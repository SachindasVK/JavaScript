// Array Length Property
console.log(fruits.length);

// Add Elements in Array
// push(): Add at End
fruits.push("grapes");
console.log(fruits);

// unshift(): Add at Start
fruits.unshift("Kiwi");
console.log(fruits);



// Remove Elements 

// pop(): Remove Last
fruits.pop();
console.log(fruits);

// shift(): Remove First 
fruits.shift();
console.log(fruits);




// important Array methords
// Map() create new Array 

let nums = [1, 2, 3];
let result = nums.map(num => num * 2);
console.log(result)
console.log(nums)



// filter() filter elements
let num = [10, 20, 30, 40];
let res = num.filter(n => n > 20);
console.log(res);



// reduce() Reduces array to single value.
let ans = num.reduce((acc, cur) => acc + cur, 0);
console.log(ans);



// forEach() Runs function for each element.
num.forEach(n => console.log(n));




// Searching in Array

// includes()
console.log(num.includes(20));

// indexOf()
console.log(num.indexOf(20));

// find()
console.log(num.find(n => n > 10))// its return first matching



// Array Transformation
// slice() copy portion 
console.log(num.slice(0, 2));


// splice() Modify original
num.splice(0, 0, 100); // adding 
console.log(num);
num.splice(0, 1);// delete
console.log(num)



// Check If Variable is Array
console.log(Array.isArray(EmployId))//true/false


// Convert String - Array
console.log("hello".split(''));

// Array - String
console.log([1,2,3,4].join('-'))