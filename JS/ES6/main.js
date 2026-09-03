// use strict mode:
"use strict";
// see error 
var x = 10;
console.log(x);

// spread operator(...)
// add multiple array
var asia = ['Bangladesh', 'Indian', 'Pakistan', 'China'];
var europe = ['France', 'Turkey', 'German'];

var country = ['America', ...asia, ...europe];
console.log(country);

// without spread operator to add multiple array by push() method
var country = ['America'];
country.push(asia);
country.push(europe);
console.log(country)


// rest parameter:
// it is accept multiple data without define parameter in function
function show(a,b,...numbers){
    let sum = 0;
    for (let i of numbers){
        sum += i;
    }
    console.log("Sum = ", sum);
    console.log(a);
    console.log(b);
}
show("Sohag", "173-15-1630", 1, 2, 2);