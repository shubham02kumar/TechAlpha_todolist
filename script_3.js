// Get references to HTML elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const clearCompletedBtn = document.getElementById('clearCompletedBtn');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskItem = document.createElement('div');
        taskItem.className = 'taskItem';
        taskItem.innerHTML = `
            <input type="checkbox">
            <input type="text" value="${taskText}">
            <button class="deleteBtn">Delete</button>
        `;
        taskList.appendChild(taskItem);
        taskInput.value = ''; // Clear input field after adding task

        // Attach event listeners to newly created elements
        const checkbox = taskItem.querySelector('input[type="checkbox"]');
        const deleteBtn = taskItem.querySelector('.deleteBtn');

        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                taskItem.classList.add('completed');
            } else {
                taskItem.classList.remove('completed');
            }
        });

        deleteBtn.addEventListener('click', function() {
            taskItem.remove();
        });
    } else {
        alert('Please enter a task!');
    }
}

// Event listener for add task button
addTaskBtn.addEventListener('click', addTask);

// Event listener for enter key on input field
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

// Event listener for clear completed button
clearCompletedBtn.addEventListener('click', function() {
    const completedTasks = document.querySelectorAll('.taskItem.completed');
    completedTasks.forEach(function(task) {
        task.remove();
    });
});
