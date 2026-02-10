// Functions behave differently depending on type. 

// Function Declaration Fully Hoisted

sayHello();
function sayHello() {
    console.log("Hello JavaScript");
}
// Memory Phase : entire function stored;

// Function Expression: NOT Fully Hoisted:
// sayHi() //TypeError: sayHi is not a function
var sayHi = function () {
    console.log("Hi")
}
// Memory Phase: sayHi = undefined 

// Arrow Function Hoisting: Same as function expression.
// hello() //ReferenceError: Cannot access 'hello' before initialization
const hello = () => {
    console.log("Hello");
}
// Reference Error (TDZ) 

var a = 10;

function test() {
   console.log(a);
   var a = 20;
}

test();
// Function scope creates new variable