const colorBtns = document.querySelectorAll(".color-btn")

colorBtns.forEach((button) => {
    button.addEventListener("click", () => {
        document.body.style.backgroundColor = button.dataset.color;
    })
})