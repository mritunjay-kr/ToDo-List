document.getElementById('add-btn').addEventListener('click', addTask);
document.getElementById('todo-tab').addEventListener('click', showTodo);
document.getElementById('completed-tab').addEventListener('click', showCompleted);

function addTask() {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;

    if (title && description) {
        const task = document.createElement('li');
        task.innerHTML = `
            <div>
                <strong>${title}</strong>
                <p>${description}</p>
            </div>
            <div>
                <button class="complete-btn" onclick="completeTask(this)">✔</button>
                <button class="delete-btn" onclick="deleteTask(this)">🗑️</button>
            </div>
        `;

        document.getElementById('todo-list').appendChild(task);

        // Clear inputs
        document.getElementById('title').value = '';
        document.getElementById('description').value = '';
    }
}

function completeTask(button) {
    const task = button.parentElement.parentElement;
    document.getElementById('completed-list').appendChild(task);
    button.remove();
}

function deleteTask(button) {
    const task = button.parentElement.parentElement;
    task.remove();
}

function showTodo() {
    document.getElementById('todo-tab').classList.add('active');
    document.getElementById('completed-tab').classList.remove('active');
    document.getElementById('todo-list').style.display = 'block';
    document.getElementById('completed-list').style.display = 'none';
}

function showCompleted() {
    document.getElementById('completed-tab').classList.add('active');
    document.getElementById('todo-tab').classList.remove('active');
    document.getElementById('completed-list').style.display = 'block';
    document.getElementById('todo-list').style.display = 'none';
}
