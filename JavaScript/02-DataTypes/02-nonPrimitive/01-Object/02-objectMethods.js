// Object methods are functions stored inside objects.
// When a function is inside an object it is called a method

const { name } = require("ejs");

let Person = {
    name: "Sachin",
    greet: function () {
        console.log("Hello");
    }
}
Person.greet();
// greet is an object method

// Using this Inside Object Methods
// this refers to the current object.
let person = {
    name: 'Sachin',
    greet: function () {
        console.log("Hello", this.name);
    }
}
person.greet();


// Modern Shortcut Syntax (ES6)
// You don’t need function keyword.

let user = {
    name: "Sachin",
    greet() {
        console.log("Hello " + this.name);
    }
}
user.greet();

let calculator = {
    add(a, b) {
        return a + b;
    }
}
console.log(calculator.add(10, 30));




// Built-in Object Methods (Very Important)
// JavaScript provides many object helper methods.

// Object.keys() return keys of object
let User = { name: 'Sachin', age: 23 };
console.log(Object.keys(User));

// Object.values() return values
console.log(Object.values(User));

// Object.entries() return key + values 
console.log(Object.entries(User));

// Object.assign() copies object
let obj1 = { a: 1 };
let obj2 = { b: 2 };
let result = Object.assign({}, obj1, obj2);
console.log(result)

// Object.freeze() prevent modification
let obj = { name: 'JavaScript' };
Object.freeze(obj);
obj.name = 'sachin';
console.log(obj) //JavaScript

// Object.seal() Allows modification but not add/remove
let car = {
    brand: 'BMW',
    start() {
        console.log(this.brand + " started");
    }
}
Object.seal(car);
car.brand = "BMW-M5";
car.start();


// Arrow function Warning :Avoid arrow functions in object methods when using this.

let Employee = {
    name: "Sachin",
    greet: () => {
        console.log(this.name);
    }
}
Employee.greet() //undefined (this will NOT refer to object)

