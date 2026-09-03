const cars = ["Saab", "Volvo", "BMW"];
let len = cars.length;

//! basic loop
//? way 1
// for(let i =0; i<len; i++ ){
//     console.log(cars[i]);
// }


//? way 2
// let i = 0;
// for(; i < len; i++ ){
//     console.log(cars[i]);
// }

//? way 3
// let j=0;
// for(; j< len; ){
//     console.log(cars[j]);
//     j++;
// }

//! for in loop
// for(let item in cars){
//     console.log(cars[item]);
// } 

//! foreach()
// cars.forEach(showArray);
// function showArray(value, index, array){
//     console.log(value+":"+index);
// }

//! for of loop
for(let x of cars){
    console.log(x);
}