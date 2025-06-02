const userInput = document.getElementById("user-input");
const colorPalette = document.getElementById("color-palette");
const colorName = document.getElementById("color-name");
const saveBtn = document.getElementById("save-btn");
const clearBtn = document.getElementById("clear-btn");
const selectedColorDisplay = document.getElementById("selected-color");
const enterBtn = document.getElementById("enter-btn");
const storedColor = localStorage.getItem("color");

if (storedColor) {
    selectedColorDisplay.style.backgroundColor = storedColor;
    colorName.textContent = selectedColorDisplay.style.backgroundColor;
    colorName.style.color = selectedColorDisplay.style.backgroundColor;
    colorName.style.display = "inline";
}


const displayColor = () => {
    const enteredColor = userInput.value.trim() || colorPalette.value;

    //CSS.supports() checks if value of enteredColor is a supported color value
    if (!enteredColor || !CSS.supports("color", enteredColor)) {
        return
    }

    selectedColorDisplay.style.backgroundColor = enteredColor;
    colorName.textContent = selectedColorDisplay.style.backgroundColor;
    colorName.style.color = selectedColorDisplay.style.backgroundColor;
    colorName.style.display = "inline";
    console.log("Selected color is:", enteredColor)
    
    userInput.value = "";
    colorPalette.value = "#000000";
} 

const saveColor = () => {
    const userSelection = selectedColorDisplay.style.backgroundColor;
    localStorage.setItem("color", userSelection)
    console.log("Saved color is:", userSelection)
}

const clearStorage = () => {
    localStorage.clear();
    selectedColorDisplay.style.backgroundColor = "";
    colorName.style.display = "none";
    userInput.value = "";
    console.log("Local storage of user is cleared")
}


userInput.addEventListener("keydown", (e) => {
    e.key === "Enter" ? displayColor() : null;
})

enterBtn.addEventListener("click", displayColor)
saveBtn.addEventListener("click", saveColor)
clearBtn.addEventListener("click", clearStorage)

