function addTask() {
    const input = document.getElementById("task");
    const list = document.getElementById("list");

    if (input.value.trim() === "") {
        alert("Enter a task!");
        return;
    }

    const item = document.createElement("li");

    const text = document.createElement("span");
    text.textContent = input.value;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "🗑️";
    deleteButton.style.marginLeft = "10px";

    deleteButton.onclick = function() {
        item.remove();
    };

    item.appendChild(text);
    item.appendChild(deleteButton);
    list.appendChild(item);

    input.value = "";
}
