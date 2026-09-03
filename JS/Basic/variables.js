//! Welcome to java scripts tutorial

console.log("Hello World");

/*
There are 3 ways to declare a JavaScript variable:
! var
? let 
* const
*/

//? operation of var keyword
//* it is global variable, able to redeclare variable, changeable data

var text;
text = "Minhazul Islam Sohag";
console.log(text);

var text = "Change Text"; 
console.log(text);

//? operation of let keyword
//* it is block variable, unable to redeclare variable, changeable data

let text2;
text2 = "Hello Let variable";
console.log(text2);
//let text2 = "Change text"; //! unable to redeclare variable
text2 = "Change Text";
console.log(text2);

//? operation of const keyword
//* it is block variable, unable to redeclare variable, unchangeable data

const PI = 3.1416;
console.log(PI);
//const PI = 9.8; //! unable to redeclare variable, unchangeable data
