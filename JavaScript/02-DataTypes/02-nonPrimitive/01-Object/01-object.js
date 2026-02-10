// non Primitive:
// Store collection of values
// Stored by reference
// Mutable (can change)

// Object:
// Object = Collection of key-value pairs

// Why Objects Exist?

// Objects help store: Multiple related data, Complex structured data, Real-world entities

// Used in: APIs, React, Databases, DOM, JSON

// Object Literal
let user = {
    name: "Sachin",
    age: 23
}
// Access Values 
console.log(user.name); //dot notation
console.log(user['age'])//bracket notation

// Empty Object
let obj = {};
obj.name = 'Arun';
obj.age = 21;
console.log(obj);

// new Object()
let Person = new Object();
Person.name = 'Sachin';
Person.city = 'Manjeri';
console.log(Person)

// constructor function 
function Employee(name, age) {
    this.name = name;
    this.age = age;
}
let emp1 = new Employee("Roonie", "34");
console.log(emp1)

// class(modern)
class User {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
}
let u1 = new User('Anil', 23, 'Mumbai');
console.log(u1.name)


// Add / Modify / Delete Properties
let Employ = {
    name: 'Gigi',
}
Employ.age = 23;
Employ.country = 'India';
console.log(Employ);
// Modify 
Employ.country = 'Japan';
console.log(Employ)
// Delete 
delete Employ.country;
console.log(Employ)



// Objects Can Store Functions (Methods)
let Emp = {
    name: 'Andrew',
    greet() {
        console.log("Hello", this.name)
    }
}
Emp.greet()



// this Keyword Core Concept
// this refers to current object.

let emp = {
    name: 'sachin',
    greet() {
        console.log('Hello', this.name)
    }
}
emp.greet()

let emp2 = {
    name: 'Nithan',
    greet: () => {
        console.log(this.name)
    }
}
emp2.greet() //undefined


// Nested Objects 
let userDetails = {
    name: 'Sachin',
    address: {
        phone: 9995971320,
        email: 'sachinvk867@gmail.com',
        place: 'thrikkalangode'
    }
}
console.log(userDetails.address.email);

// Looping Object 
for (let key in userDetails) {
    console.log(key, userDetails[key])
}



