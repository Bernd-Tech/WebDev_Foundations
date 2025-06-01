const userInput = document.getElementById("user-input")
const addTaskBtn = document.getElementById("addTask-btn")
const taskList = document.getElementById("taskList")

/* Create a addTask() function
- checks if there are already tasks in local storage
- if not tasks will be pushed into an empty array
- tasks array will be stored in local storage
*/

const addTask = () => {
    if (!userInput.value) {
        return
    }

    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const newTask = userInput.value.trim();
    tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks))

    displayTasks()
    userInput.value = "";
}

const displayTasks = () => {
    taskList.innerHTML = "";
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));

    storedTasks.forEach((task, index) => {
        const taskItem = document.createElement("li")
        taskItem.innerHTML = `
        ${task} <button onclick="removeTask(${index})">Delete</button>
        `
        taskList.appendChild(taskItem)
    })
}

const removeTask = (taskIndex) => {
    const userTasks = JSON.parse(localStorage.getItem("tasks"));
    userTasks.splice(taskIndex, 1);
    localStorage.setItem("tasks", JSON.stringify(userTasks));

    displayTasks()
}

addTaskBtn.addEventListener("click", addTask)

userInput.addEventListener("keydown", (e) => {
    e.key === "Enter" ? addTask() : null;
})