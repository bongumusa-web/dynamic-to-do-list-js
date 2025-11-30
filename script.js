document.addEventListener('DOMContentLoaded', () => {

const addButton = document.getElementById('add-task-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');


function addTask(){
    const taskText = taskInput.value.trim();

    if(taskText === ''){
        alert('Enter a task');
    }
    else{
        const listItem = document.createElement('li');
        const Remove = document.createElement('button');
        Remove.className = 'remove-btn';

        //adding taks text
        listItem.textContent = taskText + ' ';
        Remove.textContent = 'Remove';
        listItem.appendChild(Remove);
        taskList.appendChild(listItem);
        taskInput.value = '';

     
       Remove.onclick = function(){
            taskList.removeChild(listItem);
            
        }

    };

};
// Add task text to list item when pressing enter key
taskInput.addEventListener('keypress', function(event){
    if(event.key === 'Enter'){
        addTask();
    }

});






addButton.addEventListener('click', addTask);

addTask(); // envoke addTask on page load to add initial task
    
});
