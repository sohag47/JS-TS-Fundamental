//! array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


//? array find(currentValue, currentIndex, array)
var result = numbers.find( ( currentValue ) => currentValue > 4 );
console.log( "🚀 ~ file: array_sort.js ~ line 7 ~ result", result );

//?array findindex(currentValue, currentIndex, array)
var result = numbers.findIndex( ( currentValue, currentIndex, array ) => currentValue > 4 );
console.log( "🚀 ~ file: array_sort.js ~ line 11 ~ result", result );

//?  array  filter()
var result = numbers.filter( ( currentValue, currentIndex, array ) => currentValue > 4 );
console.log( "🚀 ~ file: array_sort.js ~ line 15 ~ result", result );

//? array slice

var result = numbers.slice( 1, 3 );
console.log( "🚀 ~ file: array_sort.js ~ line 20 ~ result", result );

var result = numbers.splice( 1, 2, 10, 12, 13, 19 );
console.log( "🚀 ~ file: array_sort.js ~ line 23 ~ result", numbers );
