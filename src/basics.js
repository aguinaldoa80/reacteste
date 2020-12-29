// 1. Demonstrate all the different ways to iterate the below array
const myArray = [1, 2, 3, 4, 5, 6];

myArray.map((value) => value.toString());
myArray.forEach((value) => console.log(value));
myArray.reduce((p, c) => p + c);
myArray.includes(5);

// 2. Demonstrate all the different ways to iterate the keys of
// the below object

const myObject = { x: 1, y: "hi" };

console.log(myObject.x, myObject.y);
console.log(myObject.y.toUpperCase());

// 3. Repeat #2, demonstrate different ways to iterate
// the values of "myObject"

myObject.x = 4;
