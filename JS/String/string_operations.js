//! Javascript String Operations

//? Escape Character
/*
* \' text \' for ' ' 
* \" text \" for " "
* \\ text \\ for \
*/
let final_text =  "We are the so-called \\Vikings\\ from the north.";
console.log(final_text);

let text = "Minhazul Islam Sohag";

//? print string
console.log(text);

//? string Length
console.log("Length: "+ text.length);

//! Extracting String Parts
//? slice(start, end), substring(start, end), substr(start, length)

console.log(text.slice(9, 15)); // Islam
console.log(text.slice(9)); //Islam Sohag
console.log(text.slice(-11)); //Islam Sohag

//? substring() cannot accept negative indexes.
console.log(text.substring(9, 15)); // Islam

//? substr() second parameter specifies the length of the extracted part.
console.log(text.substr(9, 5));
console.log(text.substr(-5));

//! Replacing String Content replace()
//? replace() method is case sensitive
let text2 = "Please visit Microsoft!";
let text3 = text2.replace("Microsoft", "W3schools");
console.log(text3);