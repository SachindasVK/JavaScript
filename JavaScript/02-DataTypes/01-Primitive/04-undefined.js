// undefined means:
// A variable is declared but has no value assigned yet

let name;
console.log(name)


// function without return 
function test() {
    console.log('Hello')
}

let result = test()
console.log(result)

// Accessing Non-Existing Object Property
let user = {name:'sachin'};
console.log(user.age);

// Missing function parameter 
function greet(name) {
    console.log("Hello", name)
}
greet();


// Array Element That Doesn’t Exist
let arr = [10, 20];
console.log(arr[5]);

// Type of undefined
let x;
console.log(typeof x);

