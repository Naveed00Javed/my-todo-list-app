var taskInput = document.getElementById("taskInput");
var taskList = document.getElementById("taskList");
function addTask() {
    var taskText = taskInput.value.trim();
    if (taskText === "")
        return;
    var li = document.createElement("li");
    li.textContent = taskText;
    // Toggle completion on click
    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });
    // Delete button
    var delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.onclick = function () { return taskList.removeChild(li); };
    li.appendChild(delBtn);
    taskList.appendChild(li);
    taskInput.value = "";
}
// Make addTask function globally available
window.addTask = addTask;
