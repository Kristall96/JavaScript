// Variables a text to hold some data (as string or number)
var a = 5;
let b = 10;
const c = 15;
let d = "Hello, World!";
let e = 20.5;

b = "Jhon";
console.log(` let b = 5 has been changed to let b = ${b}`);

// Data Types storing in variables
// Javascript has two categories of data types:
// 1. Primitive data types
let str = "Hello, World!"; // String
let num = 10; // Number
let bool = true; // Boolean
let nothing = null; // Null
let notDefined; // Undefined

// 2. Non-primitive data types (Reference)
let arr = [1, 2, 3, 4, 5]; // Array
let obj = { name: "John", age: 30 }; // Object
console.log(arr[0]); // Access array element;
console.log(obj.name); // Access object property;

// 3. Operators
// 1. Arithmetic Operators
console.log(5 + 10); // Addition
console.log(5 - 10); // Subtraction
console.log(5 * 10); // Multiplication
console.log(5 / 10); // Division
console.log(5 % 10); // Modulus (remainder)
console.log(5 ** 10); // Exponentiation

// 2. Assignment Operators
console.log((a = 5)); // Assign value to variable

// 3. Comparison Operators
console.log(5 == 5); // Equal to
console.log(5 != 5); // Not equal to

// 4. Logical Operators
console.log(true && true); // Logical AND
console.log(5 || 10); // Logical OR
console.log(!true); // Logical NOT

// 4. Conditional Statements
// 1. If-Else Statement
let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else {
  console.log("Grade: C");
}

// 2. Ternary Operator
let grade = score >= 90 ? "A" : score >= 80 ? "B" : "C";
console.log(grade); // Output: B

// 3. Switch Statement
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Today is Monday");
    break;
  case "Tuesday":
    console.log("Today is Tuesday");
    break;
  default:
    console.log("Invalid day");
}

// 5. Loops
// 1. For Loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// 2. While Loop
let j = 0;
while (i < 5) {
  console.log(j);
}

// 3. Do-While Loop
let r = 0;
do {
  console.log(r);
} while (r < 5);

// For-of for arrays
let arr1 = [1, 2, 3, 4, 5];
for (let num of arr1) {
  console.log(num);
}

// For-in for objects
let obj1 = { name: "John", age: 30 };
for (let key in obj1) {
  console.log(key + ": " + obj1[key]);
}

// 6. Functions
// Function Declaration
function greet(name) {
  return "Hello, " + name;
}
console.log(greet("Alice")); // Output: Hello, Alice!

// Arrow Function
const add = (a, b) => a + b;
console.log(add(5, 3)); // Output: 8

// Function Expression
let sum = function (a, b) {
  return a + b;
};
console.log(5 + 3); // Output: 8

// 7. Object
// Object Literal
let person = { name: "John", age: 30 };
console.log(person.name); // Output: John

// 7. DOM Manipulation
// HTML
// <!-- <p id="text">Hello</p>
// <button id="changeText">Change Text</button>

const paragraph = document.getElementById("text");
const button = document.getElementById("changeText");

button.addEventListener("click", () => {
  paragraph.textContent = "Text Changed!";
});
