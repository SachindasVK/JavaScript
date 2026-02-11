// Function borrowing is when an object uses a method from another object. 
// Instead of writing the same function again, one object borrows a method from another object.
// Typically done using call(), apply(), or bind()

let Person = {
    name: "Alice",
    greet() {
        console.log("Hello", this.name);
    }
}

let Person1 = {
    name: "Sachin"
}
// Person1.greet() Error Instead of writing greet again, borrow from person

// Method 1. use Call() allows us to set the this keyword manually
Person.greet.call(Person1);

// Method 2. use Apply()
Person.greet.apply(Person1)
// Difference from call():
// call(): arguments passed one by one
// apply(): arguments passed as array

let Employee = {
    name: "Sudhi",
    details(work, salary) {
        console.log('my name is', this.name, '& im a', work, 'and i earn', salary);
    }
}

let Emp1 = {
    name: "Sachin"
}
Employee.details.call(Emp1, "Developer", "12 LPA"); // call
Employee.details.apply(Emp1, ['Engineer', '12 LPA']); // Apply



// Method 3.bind() 
let EmployDetails = Employee.details.bind(Emp1,'Developer','13LPA')
EmployDetails();
// bind() creates a new function with this bound to a specific object
// You can call it later