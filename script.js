document.addEventListener('DOMContentLoaded', () => {

const addButton = document.getElementById('add-task-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

let tasks = []; // store tasks

// load saved tasks
function loadTasks() {
    const stored = JSON.parse(localStorage.getItem('tasks') || "[]");
    tasks = stored;

    stored.forEach(taskText => {
        createListItem(taskText);
    });
}

// save tasks to localStorage
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// create task element
function createListItem(taskText) {
    const listItem = document.createElement('li');
    const Remove = document.createElement('button');
    Remove.classList.add('remove-btn');

    listItem.textContent = taskText + " ";
    Remove.textContent = "Remove";
    listItem.appendChild(Remove);
    taskList.appendChild(listItem);

    // remove task
    Remove.onclick = function () {
        taskList.removeChild(listItem);

        // remove from array
        const index = tasks.indexOf(taskText);
        if (index > -1) {
            tasks.splice(index, 1);
            saveTasks();
        }
    };
}

// add task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert('Enter a task');
    } else {
        tasks.push(taskText); // save to array
        saveTasks(); // store new array
        createListItem(taskText); // add to DOM
        taskInput.value = "";
    }
}

// enter key adds task
taskInput.addEventListener('keypress', function(event){
    if(event.key === 'Enter'){
        addTask();
    }
});

// button adds task
addButton.addEventListener('click', addTask);

// load saved tasks on page load
loadTasks();

});
