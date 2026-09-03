//!---ES6 Function...

//?    Regular Function style:
function hello(...data){
   return(data)
}
const result = hello(50, 60, 70, 80, 90, 100);
console.log('Regular function output:'+result);

// ?  Anonymous Function style:
var test = function(...data){
    return(data)
}
var ok = test(50, 60, 70, 80, 90, 100);
console.log('Anonymous function output:'+ok);

// ?   Arrow functions style:
var test2 = (...data) => {
    return(data)
}
var ok2 = test2(50, 60, 70, 80, 90, 100);
console.log('arrow function output:'+ok2)

// ?   The Function Constructor style
var test3 = new Function('...data', 'return data');
console.log('Constructor function output:'+test3(50, 60, 70, 80, 90, 100));
