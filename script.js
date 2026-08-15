let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function displayTasks() {
    const list = document.getElementById("list");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        const span = document.createElement("span");
        span.textContent = task.text;

        if (task.completed) {
            span.classList.add("completed");
        }

        span.onclick = function () {
            tasks[index].completed = !tasks[index].completed;
            saveTasks();
            displayTasks();
        };

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.className = "edit-btn";

        editButton.onclick = function () {
            const newTask = prompt("Edit your task:", task.text);

            if (newTask !== null && newTask.trim() !== "") {
                tasks[index].text = newTask.trim();
                saveTasks();
                displayTasks();
            }
        };

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-btn";

        deleteButton.onclick = function () {
            tasks.splice(index, 1);
            saveTasks();
            displayTasks();
        };

        li.appendChild(span);
        li.appendChild(editButton);
        li.appendChild(deleteButton);

        list.appendChild(li);
    });
}

function addTask() {
    const input = document.getElementById("task");
    const text = input.value.trim();

    if (text === "") {
        alert("Please enter a task!");
        return;
    }

    tasks.push({
        text: text,
        completed: false
    });

    saveTasks();
    displayTasks();

    input.value = "";
}

displayTasks();
