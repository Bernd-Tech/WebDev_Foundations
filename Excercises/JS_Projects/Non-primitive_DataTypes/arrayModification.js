const fruits = ["Strawberries", "Apples", "Cherries",  "Kiwi"];


fruits.splice(1, "Mango", "Banana", "Berry", 9689)
console.log(fruits)

const numbers = [1, 2, 3, 4, 5]
const isEven = numbers.filter(num => num % 2 === 0)
const doubled = numbers.map(num => num * 2)
const halfed = numbers.map(num => num / 2)
const sum = numbers.reduce((acc, el) => acc + el, 0);

console.log(isEven)
console.log(doubled)
console.log(halfed)
console.log(sum)

const [firstFruit, secondFruit] = fruits;

console.log(firstFruit, secondFruit)


