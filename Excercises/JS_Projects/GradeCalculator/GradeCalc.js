const firstScore = parseInt(document.getElementById("score1").value);
const secondScore = parseInt(document.getElementById("score2").value);
const thirdScore = parseInt(document.getElementById("score3").value);
const gradeDiv = document.getElementById("grade");
const submitBtn = document.getElementById("submit");


/* Alternative Code to extract user input values
const scores = document.querySelectorAll("input[type='number']")
const scoreArray = []

for (let i = 0; i < scores.length; i++) {
    scoreArray.push(Number(scores[i]))
}

const funcAverage = (array) => {
    const sum = array.reduce((acc, el) => acc + el, 0);
    return sum / array.length
}
*/

const funcAverage = (firstScore, secondScore, thirdScore) => {
    const sum = firstScore + secondScore + thirdScore;
    return sum / 3;
}


const assignGrade = (average) => {
    if (average >= 90) {
        return "A"
    } else if (average >= 80) {
        return "B"
    } else if (average >= 70) {
        return "C"
    } else if (average >= 60) {
        return "D"
    } else {
        return "F"
    }
}

const updateUi = () => {
    const average = funcAverage(scoreArray);
    const grade = assignGrade(average)

    gradeDiv.innerHTML = `
        <h4>
            Grade: ${grade} / ${average}
        </h4>
    `
    gradeDiv.style.display = "block";
}


submitBtn.addEventListener("click", updateUi)