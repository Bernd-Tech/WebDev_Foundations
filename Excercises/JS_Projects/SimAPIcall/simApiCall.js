const fetchBtn = document.getElementById("fetch-btn");
const fetchState = document.getElementById("fetch-state");

const fetchData = async () => {
    fetchState.style.backgroundColor = "";
    fetchState.textContent = "Loading..."

    try {
        const response = await new Promise((resolve, reject) => {
            setTimeout(() => {
                Math.random() > 0.4 ? resolve("Data successfully loaded.") : reject();   
            }, 2000)
        }) 
        // retrun value of try and catch need to wait for the promise ("const response")
        fetchState.textContent = response;
        fetchState.style.backgroundColor = "#73937E";
    } catch (error) {
        fetchState.textContent = "Error fetching data.";
        fetchState.style.backgroundColor = "#F46036";
    }
}

fetchBtn.addEventListener("click", fetchData)