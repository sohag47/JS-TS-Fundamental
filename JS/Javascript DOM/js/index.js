// movement parent to child
let val 
const list = document.querySelector('ul');
val = list.children[0].children[0];

//console.log(val)

// child to parent:
const listitem = document.querySelector('li.task3');
val = listitem.parentElement.parentElement;
console.log(val)