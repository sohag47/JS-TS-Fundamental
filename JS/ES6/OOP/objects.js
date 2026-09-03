//! Objects in Javascript
// It is a common practice to declare objects with the const keyword.

const person = {
    firstName: "Minhazul Islam",
    lastName: "Sohag",
    age: 23,
    eyeColor: "black",
    fullName: function() {
        return this.firstName + " "+ this.lastName;
    }
};
//? print object in 2 way
console.log(person.firstName);
console.log(person["lastName"]);

//? print method 
console.log(person.fullName());