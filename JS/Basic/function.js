//! Javascript functions
//? type of function

//? 01 Basic Function
function MyFunction(text){
    return text;
}
console.log(MyFunction("Hello JS Function"));

//? 02 Basic Function store in variable
let results = function BasicFunction(text){
    return text;
}
console.log(results("Basic Function Store in a Variable")); 

//? 03 Anonymous Function
let anonymous = function (text){
    return text;
}
console.log(anonymous("Anonymous Function"));

//? 04 ES6 Arrow Function
let arrow = (text) => { return text; }
console.log(arrow("Arrow Function"));

//? 05 ES6 short arrow function [it is used when single parameter in used in arrow function]
let short_arrow = text => text;
console.log(short_arrow("Short Arrow Function"));
