const inputElement = document.querySelector("#new-task-input");
const addTaskButton = document.querySelector("#new-task-btn");
const tasksContainer = document.querySelector(".tasks-container")

const validadeInput = () => {
    return inputElement.value.trim().length > 0;
}

const addTask = () => {
    const inputIsValid = validadeInput();

    if(!inputIsValid){
        return inputElement.classList.add("error")
    }

    const taskItemContainer = document.createElement('div');
    taskItemContainer.classList.add('task-item');
    
    const taskContentText = document.createElement('p');
    taskContentText.innerText = inputElement.value;

    taskItemContainer.addEventListener('click', () => completeTask(taskContentText));
    
    const taskDeleteButton = document.createElement('img');
    taskDeleteButton.setAttribute('src', '/assets/icons/circle-minus.svg');

    taskDeleteButton.addEventListener('click', () => deleteTask(taskItemContainer, taskContentText));

    taskItemContainer.appendChild(taskContentText);
    taskItemContainer.appendChild(taskDeleteButton);
    
    tasksContainer.appendChild(taskItemContainer);

    inputElement.value = "";

}

const completeTask = (taskContentText) => {
    const tasks = tasksContainer.childNodes;

    for (const task of tasks) {
        if(task.firstChild.isSameNode(taskContentText)) {
            task.classList.toggle('completed');
        }
    }
}

const deleteTask = (taskItemContainer, taskContentText) => {
    const tasks = tasksContainer.childNodes;

    for (const task of tasks) {
        if(task.firstChild.isSameNode(taskContentText)) {
            taskItemContainer.remove();
        }
    }
}

const inputChange = ()=> {
    const inputIsValid = validadeInput();

    if(inputIsValid){
        return inputElement.classList.remove("error")
    }
}

addTaskButton.addEventListener('click', () => addTask())
inputElement.addEventListener('change', () => inputChange())