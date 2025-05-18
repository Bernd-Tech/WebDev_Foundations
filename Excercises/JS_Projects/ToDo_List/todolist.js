const tasks = [];
let toDoDone = false;

/*
First Solution with while loop:
while (true) {
    let task = prompt("Enter a task to your to-do list or 'done' to finish it.");

    if (task.toLowerCase() === "done") {
        break;
    
    }

    tasks.push(task);
}

for(let i = 0; i < tasks.length; i++) {
    console.log(`${i + 1}. ${tasks[i]}`)
}
*/

//Second solution with recursion instead of while loop:
const addTasks = () => {

    // Only if toDoDone is "true", if block will be executed
    if (!toDoDone) {
     let task = prompt("Enter a task to your to-do list or 'done' to finish it.");

     //Base case, when user enters "done" -> execution of addTasks() stops.
     //toDoDone will be reassigned to "true" and condition of outer if statement is no longer met
     if (task.toLowerCase() === "done") {
        toDoDone = true;
        return
     }

    tasks.push(task)
    //recursive part (addTasks() calls itself)
    addTasks()
    }
}

//call of addTasks() needs to be before tasks.forEach(). Otherwise no prints to the console, because tasks is empty 
addTasks()

tasks.forEach((task, index) => {
    console.log(`${index + 1}. ${task}`)
})