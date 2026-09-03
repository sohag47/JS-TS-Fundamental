//!  normal condition
var age = 11;
var a = 5;
if ( age >= 18 ) {
    console.log( "Adult" );
} else {
    if ( age < 10 ) {
        console.log( "Child" );
    } else {
        console.log( "Young" );
    }
    console.log( "Child" );
}

//! ternary way:
var result = ( age >= 18 ) ? "Adult" : ( age < 10 ) ? "Child" : "Young";
console.log( result );


var result = ( a > 5 ) ? true : false;
console.log( result );


console.log( ( a > 5 ) );