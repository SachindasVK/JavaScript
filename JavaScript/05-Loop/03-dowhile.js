// A do…while loop is very similar to a while loop,
// but it always runs at least once, even if the condition is false.

// do {
// code to run
// } while (condition);

let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);

let sum = 0;

i = 1;

do {
    sum += i;
    i++
} while (i <= 5);
console.log(sum);