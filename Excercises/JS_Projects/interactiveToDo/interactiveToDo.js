const userInput = document.getElementById("user-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");
const bodyContainer = document.querySelector("body")

//Needs to be on global scope to be accessable for inner if statements of addTask()
const surpriseMsg = document.createElement("div");
surpriseMsg.innerHTML = `
    <p style="display: inline; padding: 5px; background-color: #45425A; color: #BAA5FF; font-size: 20px;">You are a certified Overachiever. Greatness awaits you!<p>
`;

//Global counter for amount of tasks
let taskAmount = 0;

const addTask = () => {
    const task = userInput.value.trim();

    //if no task entered, function execution stops
    if (task === "") {
        return;
    }

    const taskItem = document.createElement("li");
    taskItem.textContent = task;
    taskItem.classList.add("task-item");

    taskList.appendChild(taskItem);
    taskAmount++;
    userInput.value = "";

    // const taskItems = document.querySelectorAll(".task-item")

    //remove task item
    taskItem.addEventListener("click", () => {
        taskList.removeChild(taskItem);
        taskAmount--;

        //Removing surprise msg if less than 6 tasks & surprise Msg is already displayed
        //Check needs to be within "remove scope" and not addTask scope, executed every time a task gets removed
        if (taskAmount < 6 && bodyContainer.contains(surpriseMsg)) {
            bodyContainer.removeChild(surpriseMsg)
        }
        console.log("removed Task, total amount: ", taskAmount)
    })

    //Displaying surprise message
    if (taskAmount === 6 && !bodyContainer.contains(surpriseMsg)) {
        bodyContainer.appendChild(surpriseMsg);
    } 
}


addTaskBtn.addEventListener("click", addTask);

userInput.addEventListener("keydown", (e) => {
    //Checks in event object if "key" property has value of "Enter"
    if (e.key === "Enter") {
        addTask();
    }
})
