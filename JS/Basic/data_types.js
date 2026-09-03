//! JavaScript supports several types of values
/* 
? type of javascript data type:
1. String
2. Number
3. Boolean
4. Array
5. Object
*/

let FullName = "Minhazul Islam Sohag";
let Age = 23;
let Height = 5.6;
let MaritalStatus = false;
let JobStatus = null;

console.log(Age + Height + FullName);
console.log(FullName + Age + Height);

let Profile = `
Hello, My Name is ${FullName},
Age is ${Age},
Height: ${Height},
Marital Status: ${MaritalStatus},
Job Status: ${JobStatus}
`;
console.log(Profile);

let x1 = 1e-3;
console.log(x1)


//! show data types
console.log(typeof(FullName));
console.log(typeof(Age));
console.log(typeof(Height));
console.log(typeof(MaritalStatus));
console.log(typeof(JobStatus));
console.log(typeof(x1));
console.log(typeof(Profile));