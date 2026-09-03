// event listener:
/*
document.querySelector('.clear-task').addEventListener('click', function(e){
    console.log('clicked');
    e.preventDefault();
})

document.querySelector('.clear-task').addEventListener('click', onClick);

function onClick(e){
    let val;
    // show all mouse events:
    val = e;
     console.log(val);

    val = e.target.className;
    e.target.textContent= 'hello';
    //console.log(val);
    
    e.preventDefault();
}

const clearBtn = document.querySelector('.clear-task')
clearBtn.addEventListener('mousedown', runEvent);


function runEvent(e){
    console.log(`Event type: ${e.type}`);
}

*/

const form = document.querySelector('#task-form');
const inputTask = document.querySelector('#etask');

form.addEventListener('submit', runEvent);

function runEvent(e){
    console.log(`Event type: ${e.type}`);
    console.log(inputTask.value);
    e.preventDefault();
}