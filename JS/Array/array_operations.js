//? create an array
const fruits = ["Apple", "Banana", "Orange", "Watermelon", "Strawberry", "Grape", "Mango", "Pineapple"];
console.log("Full Array: "+fruits.toString());
console.log('\n');

//! Add Item
//? add item in the last position
//? normal way
fruits[8] = "Jackfruit";
console.log(`Add fruit in the last position: ${fruits}`);

//? use queue
fruits.push("Papaya");
console.log(`Add fruit in the last position: ${fruits}`);

//? insert item front of the array
fruits.unshift("Cherry");
console.log(`Add fruit in the first position: ${fruits}`);
console.log('\n');


//! remove item from the array
//? remove last item
fruits.pop();
console.log(`Remove Last item : ${fruits}`);

//? remove first item
fruits.shift();
console.log(`Remove First item : ${fruits}`);
console.log('\n');

//! Deleting Item in array
delete(fruits[0])
console.log(`Delete [0]-> Cherry: ${fruits}`);


//! Splicing an Array
//! Merging (Concatenating) Arrays