// BigInt is a special JavaScript data type used to store very large numbers.
// Normal JavaScript Number has a limit.

// Number Limitation
// JavaScript Numbers can safely store only up to:
// Number.MAX_SAFE_INTEGER

console.log(Number.MAX_SAFE_INTEGER) //9007199254740991
let num = 9007199254740991 + 1000000
console.log(num);


// Solution : BigInt
// BigInt stores extremely large integers safely.

// Method 1 — Add n at End
let big = 12345678901234567890n;
console.log(big)

// BigInt Constructor
let bigInt = BigInt(12345678901234567890);
console.log(bigInt);

// Type of BigInt 
let big2 = 10n
console.log(typeof big2)
