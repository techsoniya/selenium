// Page references
const loginPage = document.getElementById('loginPage');
const todoPage = document.getElementById('todoPage');
const logoutButton = document.getElementById('logoutButton');

// Login functionality
const usernameInput = document.getElementById('usernameInput');
const passwordInput = document.getElementById('passwordInput');
const loginButton = document.getElementById('loginButton');

loginButton.addEventListener('click', () => {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (username === '' || password === '') {
        alert('Please fill in both fields.');
    } else {
        loginPage.classList.add('hidden');
        todoPage.classList.remove('hidden');
        logoutButton.classList.remove('hidden');
    }
});

// Logout functionality
logoutButton.addEventListener('click', () => {
    todoPage.classList.add('hidden');
    loginPage.classList.remove('hidden');
    logoutButton.classList.add('hidden');
    usernameInput.value = '';
    passwordInput.value = '';
});

// To-Do List functionality
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') addTask();
});

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
        taskSpan.classList.toggle('task-completed', checkbox.checked);
    });

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => listItem.remove());

    listItem.appendChild(checkbox);
    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);
    taskInput.value = '';
}

// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});
