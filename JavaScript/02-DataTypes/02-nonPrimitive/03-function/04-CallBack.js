// What is a Callback Function?

// A callback function is a function that is:
// Passed as an argument to another function
// Executed later inside that function

function greetin(name) {
    return `Hey ${name}`;
}

function processGreet(callback) {
    console.log(callback("sachin"))
}
processGreet(greetin);


