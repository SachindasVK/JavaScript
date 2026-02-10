// Recursive function 
// A recursive function is a function that calls itself to solve a problem.

// 1. Structure of Recursive Function
// Every recursion MUST have 2 things:

// 1. Base Condition (Stopping condition)
// 2. Recursive Call (Function calls itself)


// Print numbers from n to 1
function PrintNumbers(n) {
    if (n === 0) return;
    console.log(n);
    PrintNumbers(n - 1);
}
PrintNumbers(5);

// Print factorial 
function factorial(n) {
    if (n === 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5));

// Sum of numbers 
function sumOfNumber(n) {
    if (n === 0) return 0;
    return n + sumOfNumber(n - 1);
}
console.log("sum:", sumOfNumber(5));

// Reverse String Using Recursion
function reverse(str) {
    if (str.length === 0) return '';
    return reverse(str.slice(1)) + str[0];
}
console.log(reverse('sachin'));

// Fibonacci Series
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(7));

// Check palindrome using recursion
function isPalindrome(str) {
    if (str.length <= 1) return true;
    if (str[0] !== str[str.length - 1]) return false;
    return isPalindrome(str.slice(1, -1))
}
console.log(isPalindrome('madam'));