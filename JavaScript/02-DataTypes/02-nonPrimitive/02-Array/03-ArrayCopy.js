
// shallow copy in Array 
let EmployId = [101, 102, 103];
let shallowCopy = [...EmployId]; // using spread operator
shallowCopy.push(1011);
console.log(shallowCopy)


// Deepcopy in Array
let DeepCopy = structuredClone(EmployId);
DeepCopy.push(900)
console.log(DeepCopy)
