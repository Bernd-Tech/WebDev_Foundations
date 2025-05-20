//initialize storage place for student data
const students = [];

//declare function to add passed student data into students array
const addStudent = (name, grade) => {
    // How does the object construction work?
    students.push({
        name,
        grade
    })
}

addStudent("Tom", 89)
addStudent("Emma", 83)
addStudent("Sunny", 96)
addStudent("Mikasa", 100)
addStudent("Jean", 91)
console.log(students)

//function to remove student
const removeStudent = (name) => {
    const index = students.findIndex(student => name === student.name);
    
    //if .findIndex has a match, student will be removed from students array with splice method
    if (index !== -1) {
        students.splice(index, 1)
        console.log(`${name} has been removed.`)
    } else {
        console.log("Student has not been found.")
    }
}

//filter students based on minimum grade
const filterStudents = (minGrade) => {
    return students.filter(student => student.grade >= minGrade)
}

//Create a formatted list -> student data as string values
const formattedList = () => {
    return students.map(student => `${student.name} / ${student.grade}`)
}

console.log(formattedList())
removeStudent("Tom")
console.log(formattedList())


/*
Questions:
- How does object construction work (l.7)
- Difference between dot notation and bracket notation? When should each one be used?
- What if multiple students have same name? How can correct one be removed?
*/
