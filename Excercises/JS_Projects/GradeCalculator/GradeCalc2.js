const score1 = parseFloat(prompt("Enter three test scores. First test score:"))
const score2 = parseFloat(prompt("Second test score:"))
const score3 = parseFloat(prompt("Third test score:"))

const calculateAverage = (num1, num2, num3) => {
    const sum = num1 + num2 + num3;
    return sum / 3;
}

const assignGrade = (average) => {
    if (average >= 99) {
        return "A+"
    } else if (average >= 90) {
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

const result = () => {
    const average = calculateAverage(score1, score2, score3);
    const grade = assignGrade(average)

    console.log(`Score: ${average} = ${grade}`)
}

result()