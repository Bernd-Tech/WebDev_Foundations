const pageTitle = document.getElementById("page-title")
const confirmBtn = document.getElementById("confirm-button")
const descriptions = document.querySelectorAll(".description")
const circle = document.querySelector("div");
const innerCircle = document.createElement("div")


const changeTitle = () => {
    pageTitle.textContent = "Successfully changed Title"; 
}

confirmBtn.addEventListener("click", () => {
    changeTitle();
    descriptions.forEach((paragraph, index) => {
        paragraph.textContent = `
            This is now the ${index + 1}. paragraph.
        `
    })
    circle.style.marginBottom = "10px";
    circle.classList.toggle("hidden");

    innerCircle.classList.add("inner-circle")
    circle.appendChild(innerCircle)

})

