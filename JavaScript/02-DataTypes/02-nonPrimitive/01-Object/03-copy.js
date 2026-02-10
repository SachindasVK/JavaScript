// Object Reference Behavior
// Objects are stored by reference.
let user = {
    name: "Sachin",
    address: {
        placed: "Manjeri",
        email: "Sachin@gmail.com",
    }
}
let userDetails = user;
userDetails.name = "Arun";
userDetails.address.email = "Arun@gmail.com"
console.log(userDetails)
console.log(user) //Also Changes Original


// Copying Objects

// shallow copy  (A shallow copy creates a new object/array but copies only the first level values.)
// But nested data still points to original memory so any changes in copy also effect original
// Primitive values: copied normally
// Nested objects/arrays → reference (same memory)

// Ways to create Shallow Copy:
// 1.using spread operator 
let shallowCopy1 = { ...user };

shallowCopy1.name = "Tharun";

console.log(shallowCopy1.name)
console.log(user.name)// original not changed

shallowCopy1.address.email = "Tharun@gmail.com";
console.log(user.address.email)// nested object changed 


// 2.Object.assign()
let shallowCopy2 = Object.assign({},user);

shallowCopy2.name = "Sachin";
console.log(shallowCopy2)



// Deep copy
// A deep copy creates a completely new object/array
// It copies all levels including nested objects
// No shared references
// Changes in copied object will NOT affect original

// ways to create deepcopy 

// 1.JSON.parse(JSON.stringify())
let deepCopy1 = JSON.parse(JSON.stringify(user));
deepCopy1.name = "JavaScript"
console.log(deepCopy1);
console.log(user)// original not changed

deepCopy1.address.email = "JavaScript@gmail.com";
console.log(deepCopy1)
console.log(user)// nested object is not changed;

// 2. structuredClone()
let deepCopy2 = structuredClone(user);
console.log(deepCopy2);
