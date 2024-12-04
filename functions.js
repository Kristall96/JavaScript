1. Core Functions

alert(message): Displays a popup box with a message.

alert("Hello, World!");

console.log(value): Outputs messages to the browser’s console.

console.log("Debugging message");

setTimeout(callback, delay): Executes a function after a specified delay (in milliseconds).

setTimeout(() => console.log("Delayed message"), 1000);

setInterval(callback, delay): Repeats a function at regular intervals (in milliseconds).

setInterval(() => console.log("Repeating message"), 1000);

2. String Functions

    charAt(index): Returns the character at a specific index.

"hello".charAt(1); // "e"

substring(start, end): Extracts a portion of a string.

"hello".substring(1, 4); // "ell"

slice(start, end): Similar to substring, but supports negative indices.

"hello".slice(-3); // "llo"

toUpperCase() / toLowerCase(): Converts a string to uppercase or lowercase.

"hello".toUpperCase(); // "HELLO"

replace(searchValue, replaceValue): Replaces occurrences of a substring.

"hello".replace("l", "x"); // "hexlo"

split(delimiter): Splits a string into an array using a delimiter.

"a,b,c".split(","); // ["a", "b", "c"]

3. Array Functions

    push(element): Adds an element to the end of an array.

const arr = [1, 2];
arr.push(3); // [1, 2, 3]

pop(): Removes the last element from an array.

arr.pop(); // 3, array is now [1, 2]

shift(): Removes the first element from an array.

arr.shift(); // 1, array is now [2]

unshift(element): Adds an element to the start of an array.

arr.unshift(0); // [0, 2]

map(callback): Applies a function to each element in an array, creating a new array.

[1, 2, 3].map(x => x * 2); // [2, 4, 6]

filter(callback): Returns a new array with elements that pass a condition.

[1, 2, 3].filter(x => x > 1); // [2, 3]

reduce(callback, initialValue): Reduces an array to a single value by applying a function.

[1, 2, 3].reduce((sum, x) => sum + x, 0); // 6

find(callback): Returns the first element that satisfies the condition.

[1, 2, 3].find(x => x > 1); // 2

indexOf(element): Returns the index of the first occurrence of an element.

[1, 2, 3].indexOf(2); // 1

includes(element): Checks if an array contains an element.

[1, 2, 3].includes(2); // true

4. Object Functions

    Object.keys(obj): Returns an array of an object’s keys.

Object.keys({ a: 1, b: 2 }); // ["a", "b"]

Object.values(obj): Returns an array of an object’s values.

Object.values({ a: 1, b: 2 }); // [1, 2]

Object.assign(target, source): Copies properties from one object to another.

const target = { a: 1 };
Object.assign(target, { b: 2 }); // { a: 1, b: 2 }

Object.entries(obj): Converts an object to an array of key-value pairs.

Object.entries({ a: 1, b: 2 }); // [["a", 1], ["b", 2]]

5. Math Functions

    Math.random(): Generates a random number between 0 and 1.

Math.random(); // 0.54321 (example)

Math.round(num): Rounds a number to the nearest integer.

Math.round(4.5); // 5

Math.ceil(num): Rounds a number up.

Math.ceil(4.2); // 5

Math.floor(num): Rounds a number down.

Math.floor(4.8); // 4

Math.max(a, b, ...): Returns the largest number.

Math.max(1, 3, 2); // 3

Math.min(a, b, ...): Returns the smallest number.

Math.min(1, 3, 2); // 1

6. Date Functions

    new Date(): Creates a new date object with the current date and time.

const now = new Date();

getFullYear(): Returns the year from a date object.

now.getFullYear(); // 2024

getMonth(): Returns the month (0-11).

    now.getMonth(); // 11 (December)

Here’s a detailed explanation of all the JavaScript functions mentioned, categorized for easier reference:
1. Core Functions

    alert(message): Displays a popup box with a message.

alert("Hello, World!");

console.log(value): Outputs messages to the browser’s console.

console.log("Debugging message");

setTimeout(callback, delay): Executes a function after a specified delay (in milliseconds).

setTimeout(() => console.log("Delayed message"), 1000);

setInterval(callback, delay): Repeats a function at regular intervals (in milliseconds).

    setInterval(() => console.log("Repeating message"), 1000);

2. String Functions

    charAt(index): Returns the character at a specific index.

"hello".charAt(1); // "e"

substring(start, end): Extracts a portion of a string.

"hello".substring(1, 4); // "ell"

slice(start, end): Similar to substring, but supports negative indices.

"hello".slice(-3); // "llo"

toUpperCase() / toLowerCase(): Converts a string to uppercase or lowercase.

"hello".toUpperCase(); // "HELLO"

replace(searchValue, replaceValue): Replaces occurrences of a substring.

"hello".replace("l", "x"); // "hexlo"

split(delimiter): Splits a string into an array using a delimiter.

    "a,b,c".split(","); // ["a", "b", "c"]

3. Array Functions

    push(element): Adds an element to the end of an array.

const arr = [1, 2];
arr.push(3); // [1, 2, 3]

pop(): Removes the last element from an array.

arr.pop(); // 3, array is now [1, 2]

shift(): Removes the first element from an array.

arr.shift(); // 1, array is now [2]

unshift(element): Adds an element to the start of an array.

arr.unshift(0); // [0, 2]

map(callback): Applies a function to each element in an array, creating a new array.

[1, 2, 3].map(x => x * 2); // [2, 4, 6]

filter(callback): Returns a new array with elements that pass a condition.

[1, 2, 3].filter(x => x > 1); // [2, 3]

reduce(callback, initialValue): Reduces an array to a single value by applying a function.

[1, 2, 3].reduce((sum, x) => sum + x, 0); // 6

find(callback): Returns the first element that satisfies the condition.

//[1, 2, 3].find(x => x > 1); // 2

//indexOf(element): Returns the index of the first occurrence of an element.

//[1, 2, 3].indexOf(2); // 1

//includes(element): Checks if an array contains an element.

    [1, 2, 3].includes(2); // true

//4. Object Functions

  //  Object.keys(obj): Returns an array of an object’s keys.

Object.keys({ a: 1, b: 2 }); // ["a", "b"]

//Object.values(obj): Returns an array of an object’s values.

Object.values({ a: 1, b: 2 }); // [1, 2]

//Object.assign(target, source): Copies properties from one object to another.

// const target = { a: 1 };
Object.assign(target, { b: 2 }); // { a: 1, b: 2 }

//Object.entries(obj): Converts an object to an array of key-value pairs.

    Object.entries({ a: 1, b: 2 }); // [["a", 1], ["b", 2]]

//5. Math Functions

    //Math.random(): Generates a random number between 0 and 1.

Math.random(); // 0.54321 (example)

//Math.round(num): Rounds a number to the nearest integer.

Math.round(4.5); // 5

//Math.ceil(num): Rounds a number up.

Math.ceil(4.2); // 5

//Math.floor(num): Rounds a number down.

Math.floor(4.8); // 4

//Math.max(a, b, ...): Returns the largest number.

Math.max(1, 3, 2); // 3

//Math.min(a, b, ...): Returns the smallest number.

    Math.min(1, 3, 2); // 1

//6. Date Functions

   // new Date(): Creates a new date object with the current date and time.

const now = new Date();

//getFullYear(): //Returns the year from a date object.

now.getFullYear(); // 2024

//getMonth(): //Returns the month (0-11).

now.getMonth(); // 11 (December)

// 7. Utility Functions

    //typeof value: Returns the data type of a value.

typeof "hello"; // "string"

//isNaN(value): Checks if a value is NaN.

isNaN("abc"); // true

//parseInt(string): Converts a string to an integer.

parseInt("42"); // 42

//parseFloat(string): Converts a string to a floating-point number.

parseFloat("3.14"); // 3.14
