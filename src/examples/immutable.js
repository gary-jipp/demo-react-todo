const alice = {
  name: "Alice",
  age: 28
};

// const bob = alice;
const bob = { ...alice };
bob.name = "Bob";
bob.age = 32;

console.log("Alice", alice);
console.log("Bob", bob);

// What does the Spread Operator do
// Removes the outer {} or []
// const array = [1,2,3]
// ...array -> 1,2,3