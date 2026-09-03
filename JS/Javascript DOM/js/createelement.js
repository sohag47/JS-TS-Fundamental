// create element
const li = document.createElement('li');

// add class
li.className='task3';

// add id
//li.id = 'test';

// add attribute
//li.setAttribute('title', 'new-item');
//li.setAttribute('id', 'test');
li.textContent = 'hello';

console.log(li)

// create element and insert in dom:
document.querySelector('ul').appendChild(li);

//create element under the list element:
const link = document.createElement('a');
link.setAttribute('href', '#');

link.innerHTML='<i></i>';
li.appendChild(link);


// delete element
const lis = document.querySelectorAll('li');
lis[0].remove();
// remove another way:
const list = document.querySelector('ul');
list.removeChild(lis[1])