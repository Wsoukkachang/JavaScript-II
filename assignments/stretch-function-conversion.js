// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {};

let myFunction = () => {};

// let anotherFunction = function (param) {
//   return param;
// };

let anotherFunction = (x) => x;

// let add = function (param1, param2) {
//   return param1 + param2;
// };

let add = (x, y) =>  x + y;

console.log(add(1,2));

// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);

let subtract = (x, y) =>  x - y;

console.log(subtract(1,2));

// let triple = make whole array triple

exampleArray = [1,2,3,4];

const triple = exampleArray.map(num => num * 3);

console.log(triple);

