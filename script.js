function addTask() {
    let task = document.getElementById("task").value;

    if (task === "") {
        alert("Enter a task!");
        return;
    }

    let item = document.createElement("li");
    item.textContent = task;

    document.getElementById("list").appendChild(item);

    document.getElementById("task").value = "";
}
