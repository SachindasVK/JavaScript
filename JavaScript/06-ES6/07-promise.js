// A Promise is an object that represents the future result of an asynchronous operation
// (something that happens in the future, like fetching data or waiting for a timer).

// A promise has 3 states:

// State	    Meaning
// Pending	    The operation hasn’t finished yet
// Fulfilled	Operation finished successfully → gives a value
// Rejected	    Operation failed → gives an error

const PizzaPromise = new Promise((resolve, reject) => {
    let pizzaReady = true;

    if (pizzaReady) {
        resolve("Here's your pizza");
    } else {
        reject("No pizza today")
    }
})

PizzaPromise
    .then(message => console.log(message))
    .catch(error => console.log(error))

// Why Promises Are Useful

// Avoids “callback hell” (messy nested functions)
// Makes async code cleaner and easier to read
// Works with API calls, timers, file reading, etc.




// Promise Combinators in JavaScript

// Promise.all()
// Promise.race()
// Promise.allSettled()
// Promise.any()


// 1.Promise.all()

// Waits for ALL promises to complete successfully
// If one fails → whole Promise fails

const p1 = Promise.resolve(10)
const p2 = Promise.resolve(20)
const p3 = Promise.resolve(30)

Promise.all([p1, p2, p3])
    .then(result => console.log(result))
    .catch(error => console.log(error))

// if one fails whole promise is failes
const p4 = Promise.reject("Error");
Promise.all([p1, p2, p3, p4])
    .then(result => console.log(result))
    .catch(error => console.log(error))


// Promise.race()

// Returns result of first completed promise
// Doesn’t wait for others
const proRace1 = new Promise(res => setTimeout(() => res("First"), 1000));
const proRace2 = new Promise(res => setTimeout(() => res("Second"), 2000));

Promise.race([proRace1, proRace2])
    .then(result => console.log(result))
    .catch(error => console.log(error))
// Use when: You want fastest response
//  Example: Timeout system



// Promise.allSettled()

// Waits for all promises
// Returns results whether success or failure

const proAllSettled1 = Promise.resolve("Success");
const proAllSettled2 = Promise.reject("Failed");

Promise.allSettled([proAllSettled1, proAllSettled2])
    .then(result => console.log(result))
    .catch(error => console.log(error))



// Promise.any()

// Returns first successful promise
// Ignores failures
// Fails only if ALL promises fail

const proAny1 = Promise.reject("Fail 1");
const proAny2 = Promise.resolve("Success 2");
const proAny3 = Promise.resolve("Success 3");

Promise.any([proAny1, proAny2, proAny3])
    .then(result => console.log(result))
    .catch(error => console.log(error))