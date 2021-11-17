const buttonElement = document.querySelector('button');
const inputElement = document.querySelector('input');
const uListElement = document.querySelector('ul');

function addTask() {
    const taskInput = inputElement.value;
    if (taskInput != '') {
        const taskInList = document.createElement('li');
        taskInList.textContent = taskInput;
        uListElement.appendChild(taskInList);
    }
    inputElement.value = '';
}

buttonElement.addEventListener('click', addTask);
