
let button = document.getElementById('add');
let todolist = document.getElementById('todolist');
let input = document.getElementById('input');
//Array to store the task
let todos = [];
//creating the event
button.addEventListener('click', () => {
    todos.push(input.value)
    console.log(input.value);
    addtodos(input.value)
    input.value = ''
})

function addtodos(todos) {
    let a = document.createElement('p');
    a.innerText = todos;
    todolist.appendChild(a)
    a.addEventListener('click', () => {
        a.style.textDecoration = 'line-through'
    })
}


