const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');
const taskCounter = document.getElementById('taskCounter');

let tasks = [];

function renderTasks() {
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');

        if (task.done) {
            listItem.classList.add('done');
        }

        listItem.innerHTML = `
      <span>${task.text}</span>
      <button onclick="toggleTask(${index})">Erledigt</button>
    `;

        taskList.appendChild(listItem);
    });

    updateCounter();
}

function addTask() {
    const taskText = taskInput.value;

    if (taskText === '') {
        return;
    }

    tasks.push({
        text: taskText,
        done: false
    });

    taskInput.value = '';
    renderTasks();
}

function toggleTask(index) {
    tasks[index].done = !tasks[index].done;
    renderTasks();
}

function updateCounter() {
    const openTasks = tasks.filter(task => !task.done);
    taskCounter.textContent = `Offene Aufgaben: ${openTasks.length}`;
}

addTaskButton.addEventListener('click', addTask);