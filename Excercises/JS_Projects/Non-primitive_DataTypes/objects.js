const person = {
    name: "Thomas",
    age: 26,
    city: {
        firstCity: "Hamburg",
        secondCity: "Stuttgart"
    },
    1: "male"
}

delete person.city
person.hobby = "dancing"

for (const key in person) {
    console.log(`key = ${key}, value = ${person[key]}`)
}