const taskInput = document.getElementById("taskInput") as HTMLInputElement;
const taskList = document.getElementById("taskList") as HTMLUListElement;

function addTask(): void {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  // Toggle completion on click
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Delete button
  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.onclick = () => taskList.removeChild(li);

  li.appendChild(delBtn);
  taskList.appendChild(li);
  taskInput.value = "";
}

// Make addTask function globally available
(window as any).addTask = addTask;
