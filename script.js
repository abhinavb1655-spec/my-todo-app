let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function displayTasks() {
    let list = document.getElementById("list");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        let item = document.createElement("li");

        item.innerHTML = `
            <span onclick="completeTask(${index})"
                  style="text-decoration:${task.completed ? 'line-through' : 'none'}">
                ${task.text}
            </span>

            <button onclick="deleteTask(${index})">🗑️</button>
        `;

        list.appendChild(item);
    });
}

function addTask() {
    let input = document.getElementById("task");
    let text = input.value.trim();

    if (text === "") {
        alert("Enter a task!");
        return;
    }

    tasks.push({
        text: text,
        completed: false
    });

    saveTasks();
    input.value = "";
    displayTasks();
}

function completeTask(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    displayTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    displayTasks();
}

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

displayTasks();
