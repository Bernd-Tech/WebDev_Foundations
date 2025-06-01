const addedTask = document.getElementById("task");

const addTask = () => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.push(addedTask.value.trim())
    localStorage.setItem("tasks", JSON.stringify(tasks))
    displayTasks()

    addedTask.value = "";
}

const displayTasks = () => {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    const userTasks = JSON.parse(localStorage.getItem("tasks"))

    userTasks.forEach((task, index) => {
        const taskItem = document.createElement("li");
        taskItem.style.listStyle = "none";
        taskItem.innerHTML = `
            ${task}
            <button onclick="removeTask(${index})">Delete</button>
        `
        taskList.appendChild(taskItem);
    })
}

const removeTask = (taskIndex) => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    storedTasks.splice(taskIndex, 1);
    localStorage.setItem("tasks", JSON.stringify(storedTasks))
    
    displayTasks()
}

const clearAllTasks = () => {
    localStorage.clear();
    displayTasks();
}

//Call displayTasks() function as soon as HTML is parsed
 document.addEventListener("DOMContentLoaded", (event) => {
    displayTasks();
  });

  addedTask.addEventListener("keydown", (e) => {
    e.key === "Enter" ? addTask() : null;
  })
