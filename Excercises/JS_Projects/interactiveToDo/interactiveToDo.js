const userInput = document.getElementById("user-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");
const bodyContainer = document.querySelector("body")

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
    userInput.value = "";

    //remove task item
    taskItem.addEventListener("click", () => {
        taskList.removeChild(taskItem);
    })

    //Surprise message
    const taskItems = document.querySelectorAll("li[class='task-item']")

    if (taskItems.length === 6) {
        const surpriseMsg = document.createElement("div");
        surpriseMsg.innerHTML = `
            <p style="display: inline; padding: 5px; background-color: #45425A; color: #BAA5FF; font-size: 20px;">You are a certified Overachiever. Greatness awaits you!<p>
        `;
        bodyContainer.appendChild(surpriseMsg);
    } if (taskItems.length < 6 && bodyContainer.contains(surpriseMsg)) {
        bodyContainer.removeChild(surpriseMsg)
    }
}

addTaskBtn.addEventListener("click", addTask);

userInput.addEventListener("keydown", (e) => {
    //Checks in event object if "key" property has value of "Enter"
    if (e.key === "Enter") {
        addTask();
    }
})

/*
Questions:
- How can I remove surprise message if taskAmount is less than 6 (Code in l. 35 doesn't work as intended)?
- Why does addTask need to be without "()" in addEventListener?
*/