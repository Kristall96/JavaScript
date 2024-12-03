// Here's a detailed explanation of function declarations and other ways to define functions in JavaScript, covering all possibilities:
// 1. Function Declaration

// A function is declared with the function keyword and can be called before its definition due to hoisting.

// function greet(name) {
//   return `Hello, ${name}!`;
// }

// console.log(greet("Alice")); // Output: Hello, Alice!

// 2. Function Expression

// A function is assigned to a variable, and it’s not hoisted (cannot be used before declaration).

// const greet = function (name) {
//   return `Hello, ${name}!`;
// };

// console.log(greet("Bob")); // Output: Hello, Bob!

// 3. Arrow Function (ES6)

// A shorter syntax for functions, best used for simple logic or callbacks. Does not have its own this or arguments.

// const greet = (name) => `Hello, ${name}!`;

// console.log(greet("Charlie")); // Output: Hello, Charlie!

// 4. Immediately Invoked Function Expression (IIFE)

// A function that runs immediately after being defined.

// (function () {
//   console.log("IIFE executed!");
// })();

// 5. Anonymous Function

// A function without a name, often used in callbacks.

// setTimeout(function () {
//   console.log("This is an anonymous function!");
// }, 1000);

// 6. Constructor Function

// Used to create objects and works like a class in ES5.

// function Person(name) {
//   this.name = name;
// }

// const person = new Person("David");
// console.log(person.name); // Output: David

// 7. Methods in Objects

// Functions defined within objects as methods.

// const obj = {
//   greet: function (name) {
//     return `Hello, ${name}!`;
//   },
// };

// console.log(obj.greet("Eve")); // Output: Hello, Eve!

// 8. Class Methods

// Functions defined within ES6 classes.

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   greet() {
//     return `Hello, ${this.name}!`;
//   }
// }

// const person = new Person("Frank");
// console.log(person.greet()); // Output: Hello, Frank!

// 9. Generator Function

// Functions that can pause and resume execution using the function* syntax and yield.

// function* generateNumbers() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// const gen = generateNumbers();
// console.log(gen.next().value); // Output: 1
// console.log(gen.next().value); // Output: 2

// 10. Async Function

// Introduced in ES8, allows handling asynchronous code with await.

// async function fetchData() {
//   const response = await fetch("https://api.example.com");
//   return response.json();
// }

// 11. Recursive Function

// A function that calls itself.

// function factorial(n) {
//   if (n === 1) return 1;
//   return n * factorial(n - 1);
// }

// console.log(factorial(5)); // Output: 120

// 12. Default Parameters

// Functions can have default values for parameters.

// function greet(name = "Guest") {
//   return `Hello, ${name}!`;
// }

// console.log(greet()); // Output: Hello, Guest!

// 13. Rest Parameters

// Functions that accept an arbitrary number of arguments.

// function sum(...numbers) {
//   return numbers.reduce((total, num) => total + num, 0);
// }

// console.log(sum(1, 2, 3)); // Output: 6

// 14. Higher-Order Functions

// Functions that take other functions as arguments or return functions.

// function higherOrderFunction(callback) {
//   return callback("Hello");
// }

// console.log(higherOrderFunction((msg) => msg + " World!")); // Output: Hello World!

// Summary

// This includes all common JavaScript function types:

//     Function Declaration
//     Function Expression
//     Arrow Function
//     IIFE
//     Anonymous Function
//     Constructor Function
//     Object Methods
//     Class Methods
//     Generator Functions
//     Async Functions
//     Recursive Functions
//     Default Parameters
//     Rest Parameters
//     Higher-Order Functions
