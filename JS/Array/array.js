//! Implement array in javascript
//? Using the JavaScript Keyword new
// const cars2 = new Array("Saab", "Volvo", "BMW");
// console.log(cars2);
// must use second array

//? create an array
const fruits = ["Apple", "Banana", "Orange", "Watermelon", "Strawberry", "Grape", "Mango", "Pineapple"];

//? access array item
console.log(`First Index: ${fruits[0]}`);
console.log(`Last Index: ${fruits[-1]}`); // not working
console.log(`Last Index: ${fruits[fruits.length - 1]}`)
console.log("\n");

//? acessing full array
console.log(`Fruits Length: ${fruits.length}`)
console.log("Full Array(toString()): "+fruits.toString());
console.log("Full Array(join()): "+fruits.join(" -> "));
console.log(`Full Array: ${fruits}`);
console.log(fruits);
console.log("\n");

//? check type
console.log(`Type: ${typeof(fruits)}`);

//! looping array elements
for(let item in fruits){
    console.log(fruits[item]);
}