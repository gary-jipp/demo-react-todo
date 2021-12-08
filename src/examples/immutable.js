const alice = {
  name: "Alice",
  age: 28,
  favorites: ["pizza", "ice cream"]
};

// const bob = alice;
// bob.name = "Bob";
// const bob = { ...alice, name: "Bob" };

// This replaces everything 
const bob = {
  ...alice,
  name: "Bob",
  age: 32,
  favorites: ["fries"]
};

// bob.age = 32;
// bob.favorites = [...alice.favorites];
// bob.favorites.push("fries");

console.log("Alice", alice);
console.log("Bob", bob);

// What does the Spread Operator do
// Removes the outer {} or []
// const array = [1,2,3]
// ...array -> 1,2,3