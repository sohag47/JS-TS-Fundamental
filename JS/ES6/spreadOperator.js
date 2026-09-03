
// !................Spread Operator:...........
let colors = ['Red', 'yellow']
let newColors = [...colors, 'White', 'blue']
//console.log(newColors);

// ?..without using spread operator:
var newColors2 = newColors;
newColors2.push('Green');
//console.log(newColors);
//console.log(newColors);

// ?   spread operator and string:
let str = ['A', ...'EIO', 'U'];
let str2  = [...'Minhazul', ...'Islam', ...'Sohag']
console.log(str2);