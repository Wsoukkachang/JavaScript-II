// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

let me = 'William Soukkachang'
function greeting() {
  console.log(`Hello, my name is ${me}!`)
}

greeting();

// ==== Challenge 2: Create a counter function ====

// let num = 0;

// const counter = () => {
//   // Return a function that when invoked increments and returns a counter variable.
//   num += 1;
//   console.log(num);
//   return num;
// };

// // // Example usage: 
// counter(); // 1
// counter(); // 2
// counter(); // 3

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====


const counterFactory = () => {
  let num = 0;
  // Return an object that has two methods called `increment` and `decrement`.

  return {
    increment: () => (++num),
    decrement: () => (--num)
};

};

const newCounterFactory = counterFactory();

console.log(newCounterFactory.increment());
console.log(newCounterFactory.decrement());