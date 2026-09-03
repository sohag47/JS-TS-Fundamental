//! it is not working when it is exist:
//? False, 0, "", null, undefined, Nan

let test = NaN;

if ( test ) {
    console.log( "I am Truthy" );
} else {
    console.log( "I am Falsy" );
}