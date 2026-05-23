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
  <div>
    <button onclick="toggleTask(${index})">Erledigt</button>
    <button onclick="deleteTask(${index})">Löschen</button>
  </div>
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

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function updateCounter() {
    const openTasks = tasks.filter(task => !task.done);
    taskCounter.textContent = `Offene Aufgaben: ${openTasks.length}`;
}

addTaskButton.addEventListener('click', addTask);

taskInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});