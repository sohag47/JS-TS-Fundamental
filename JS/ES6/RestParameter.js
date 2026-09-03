// !....multiple argument function:
/**
 * function fun(a, b, ...theArgs){
 * //
 * }
 */
function show(a, b, c, ...args){
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(args);
}

show(10, 20, 30, "Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red");

// ? Rest Parameter in a dynamic function:
let num = new Function('...args', 'return args');
console.log(num(10, 20, 30));