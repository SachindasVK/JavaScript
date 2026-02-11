// Spred... (expand array/object)

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2);


// Rest (collect remaining arguments)
function sum(...nums) {
    return nums.reduce((acc, cur) => acc + cur, 0);
}
console.log(sum(1, 2, 3, 4, 5, 6, 7));
