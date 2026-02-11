// async / await is a modern way to handle Promises
// It makes asynchronous code look like normal synchronous code


// First Understand the Problem 

// using promises 

fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(result => console.log(result))
    .catch(error => console.log(error))


// solution async await 

// 1.async Keyword
// async makes a function return a Promise automatically.
async function test() {
    return "Hello";
}
test().then(console.log)


// 2. await Keyword

// await pauses execution until Promise is resolved.
// Can only be used inside async function.


async function getData() {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    let data = await response.json();
    console.log(data);
}
getData();


// real life example 

function orderPizza() {
    return new Promise(resolve => {
        setTimeout(() => resolve("pizza is ready"), 2000)
    });
}

async function getPizza() {
    let pizza = await orderPizza()
    console.log(pizza);
}
getPizza();


// Error Handling (try / catch)
// Instead of .catch(), we use:

async function test() {
    try {
        let res = await Promise.reject("Error happen!");
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}
test()


// multiple await 
async function example() {
    let a = await Promise.resolve(20);
    let b = await Promise.resolve(40);
    console.log(a + b);
}
example();