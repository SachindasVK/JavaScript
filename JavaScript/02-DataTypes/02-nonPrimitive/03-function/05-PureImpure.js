// pure function is a function that:

// Always returns same output for same input
// Does NOT change external data (no side effects)

function adds(a,b) {
    return a + b;
}
// Output always same
// No external changes
// This is PURE function
// predictable



// Impure function 
// An impure function is a function that:
// Does NOT always return same output for same input
// Changes external data (side effects)

let total = 0;
function addition(num) {
    total += num;
    return total;
}
console.log(addition(1))
console.log(total) // 1
// Same input → Different output
// Depends on external variable
// Impure function
