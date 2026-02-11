// What is Map?

// Map is a collection of key-value pairs
// Similar to objects but more powerful

let map = new Map();

map.set("name", "Sachin");
map.set("age", 22);
console.log(map);

// getting value get()
console.log(map.get("name"));

// check key has()
console.log(map.has("name"));

// Delete value delete()
map.delete("age");

// size of map
console.log(map.size);

// loop map 
for (let [key, value] of map) {
    console.log(key, value);
}






// What is Set?

// Set is a collection of unique values
// No duplicates allowed

let set = new Set();

// adding values
set.add(1)
set.add(2)
set.add(3)
set.add(4)

console.log(set);

// check value 
console.log(set.has(1));

// Delete value 
set.delete(3);
console.group(set);

// size 
console.log(set.size);

// loop Set 
for (let value of set) {
    console.log(value);
}







// What is WeakMap?

// WeakMap is similar to Map
// BUT it has two special rules

// Rules:
// Keys must be objects only
// Keys are weakly referenced (automatic memory cleanup)

// What does "Weakly Referenced" Mean?
// If object is removed from memory → WeakMap automatically removes it
// Helps prevent memory leaks

// creating weakMap 
let weakMap = new WeakMap();

// adding Data set()
let user = { name: 'sachin' };
weakMap.set(user, 'admin'); // key must be an object
console.log(weakMap.get(user));

// WeakMap Limitations
// WeakMap does NOT support:

// no size
// no looping
// no clear()
// Because keys can disappear anytime







// WeakSet

// Similar to Set
// Stores unique objects only

// Rules: Only stores objects
// Objects removed automatically when memory cleared

let weakSet = new WeakSet();

// adding object 
let Person = { name: "Arunima" };
weakSet.add(Person);
console.log(weakSet.has(Person));

// Only objects allowed

// WeakSet Limitations

// Cannot loop
// No size property
// No clear()